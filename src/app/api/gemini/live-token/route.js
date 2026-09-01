import { GoogleGenAI, Modality, ThinkingLevel } from "@google/genai";
import { NextResponse } from "next/server";

const MODEL = process.env.GEMINI_LIVE_MODEL || "gemini-3.1-flash-live-preview";
const sessions = new Map();

const KNOWLEDGE = `You are Suzi, the voice concierge for Riverflow Laser & Skin Clinic in Langley, British Columbia. Introduce yourself once as: "Hello, I'm Suzi, your Riverflow skin and laser concierge." Be warm, polished, concise, and never pushy. Always use the name Suzi if asked who the visitor is speaking with.

Riverflow offers laser hair removal, HydraFacial, OxyGeneo facials, microneedling, dermaplaning, chemical peels, facials, acne treatments, anti-aging treatments, pigmentation treatments, skin rejuvenation, scalp therapy, and hair services. The clinic is at Unit 108, 19705 56 Avenue, Langley, BC V3A 3X7. Phone: 1-833-498-9898. Email: info@riverflowlaser.com. Hours: Monday-Friday 10 AM-6 PM; Saturday-Sunday 11 AM-6 PM.

Help visitors understand services and choose a sensible consultation category. Explain that results and suitability vary, and that a trained Riverflow professional must assess them before treatment. Do not diagnose conditions, prescribe treatment, promise outcomes, invent pricing, or claim a treatment is safe for a specific person. For pregnancy, medications, active skin conditions, concerning symptoms, or medical questions, advise speaking with an appropriate healthcare professional and Riverflow before booking. If asked for information you do not have, say so and direct them to the clinic. Encourage visitors who are ready to use the visible Book a consultation button.`;

function allowed(ip) {
  const now = Date.now();
  const recent = (sessions.get(ip) || []).filter((time) => now - time < 3_600_000);
  if (recent.length >= 5) return false;
  sessions.set(ip, [...recent, now]);
  return true;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowed(ip)) return NextResponse.json({ error: "Too many assistant sessions. Please try again later." }, { status: 429 });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Voice assistant is not configured." }, { status: 503 });
  try {
    const ai = new GoogleGenAI({ apiKey, httpOptions: { apiVersion: "v1beta" } });
    const token = await ai.authTokens.create({ config: {
      uses: 1,
      expireTime: new Date(Date.now() + 30 * 60_000).toISOString(),
      newSessionExpireTime: new Date(Date.now() + 60_000).toISOString(),
      liveConnectConstraints: { model: MODEL, config: {
        responseModalities: [Modality.AUDIO], systemInstruction: KNOWLEDGE,
        inputAudioTranscription: {}, outputAudioTranscription: {},
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
        realtimeInputConfig: { automaticActivityDetection: { disabled: false, silenceDurationMs: 700, prefixPaddingMs: 100 } },
      } },
    } });
    return NextResponse.json({ token: token.name, model: MODEL }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Gemini ephemeral token creation failed", error);
    return NextResponse.json({ error: "Voice assistant could not start. Please try again." }, { status: 502 });
  }
}
