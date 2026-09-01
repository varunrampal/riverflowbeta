"use client";
import { GoogleGenAI, Modality, ThinkingLevel } from "@google/genai";
import { useCallback, useEffect, useRef, useState } from "react";

export function useGeminiLive() {
  const [status, setStatus] = useState("idle");
  const [transcript, setTranscript] = useState([]);
  const [muted, setMuted] = useState(false);
  const session = useRef(); const stream = useRef(); const outputContext = useRef(); const micContext = useRef(); const processor = useRef(); const source = useRef();
  const nextAudioTime = useRef(0); const playing = useRef(false); const mutedRef = useRef(false);
  mutedRef.current = muted;
  const append = useCallback((role, text, streaming = false) => {
    const value = text?.trim(); if (!value) return;
    setTranscript((items) => { const last = items.at(-1); if (!streaming || !last || last.role !== role) return [...items, { role, text: value }]; const separator = /^[,.;:!?')]/.test(value) ? "" : " "; return [...items.slice(0, -1), { role, text: last.text + separator + value }]; });
  }, []);
  const playPcm = useCallback((base64) => {
    const ctx = outputContext.current || new AudioContext({ sampleRate: 24000 }); outputContext.current = ctx;
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)); const samples = new Int16Array(bytes.buffer); const buffer = ctx.createBuffer(1, samples.length, 24000); const channel = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) channel[i] = samples[i] / 32768;
    const node = ctx.createBufferSource(); node.buffer = buffer; node.connect(ctx.destination); const start = Math.max(ctx.currentTime, nextAudioTime.current); nextAudioTime.current = start + buffer.duration; node.start(start); playing.current = true; setStatus("speaking");
    node.onended = () => { if (ctx.currentTime >= nextAudioTime.current - .05) { playing.current = false; setStatus("listening"); } };
  }, []);
  const startMic = useCallback(async () => {
    const media = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } }); stream.current = media;
    const ctx = new AudioContext(); micContext.current = ctx; const src = ctx.createMediaStreamSource(media); source.current = src; const proc = ctx.createScriptProcessor(2048, 1, 1); processor.current = proc;
    proc.onaudioprocess = (event) => { if (mutedRef.current || playing.current || !session.current) return; const input = event.inputBuffer.getChannelData(0); const ratio = ctx.sampleRate / 16000; const out = new Int16Array(Math.floor(input.length / ratio)); for (let i = 0; i < out.length; i++) out[i] = Math.max(-32768, Math.min(32767, input[Math.floor(i * ratio)] * 32768)); const bytes = new Uint8Array(out.buffer); let binary = ""; for (const byte of bytes) binary += String.fromCharCode(byte); session.current.sendRealtimeInput({ audio: { data: btoa(binary), mimeType: "audio/pcm;rate=16000" } }); };
    src.connect(proc); proc.connect(ctx.destination); setStatus("listening");
  }, []);
  const disconnect = useCallback(() => { processor.current?.disconnect(); source.current?.disconnect(); stream.current?.getTracks().forEach((track) => track.stop()); session.current?.close(); session.current = undefined; playing.current = false; setStatus("disconnected"); }, []);
  const clearConversation = useCallback(() => {
    processor.current?.disconnect();
    source.current?.disconnect();
    stream.current?.getTracks().forEach((track) => track.stop());
    session.current?.close();
    void micContext.current?.close();
    void outputContext.current?.close();
    session.current = undefined;
    processor.current = undefined;
    source.current = undefined;
    stream.current = undefined;
    micContext.current = undefined;
    outputContext.current = undefined;
    playing.current = false;
    nextAudioTime.current = 0;
    setTranscript([]);
    setMuted(false);
    setStatus("idle");
  }, []);
  useEffect(() => {
    return () => {
      processor.current?.disconnect();
      source.current?.disconnect();
      stream.current?.getTracks().forEach((track) => track.stop());
      session.current?.close();
      session.current = undefined;
      void micContext.current?.close();
      void outputContext.current?.close();
    };
  }, []);
  const connect = useCallback(async () => {
    setStatus("connecting");
    try {
      const response = await fetch("/api/gemini/live-token", { method: "POST" }); const data = await response.json(); if (!response.ok) throw new Error(data.error);
      const ai = new GoogleGenAI({ apiKey: data.token, httpOptions: { apiVersion: "v1beta" } });
      session.current = await ai.live.connect({ model: data.model, config: { responseModalities: [Modality.AUDIO], inputAudioTranscription: {}, outputAudioTranscription: {}, thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL } }, callbacks: {
        onerror: () => setStatus("error"), onclose: () => setStatus("disconnected"), onmessage: (message) => { const content = message.serverContent; if (content?.inputTranscription?.text) { append("user", content.inputTranscription.text, true); if (!playing.current) setStatus("thinking"); } if (content?.outputTranscription?.text) append("assistant", content.outputTranscription.text, true); for (const part of content?.modelTurn?.parts || []) if (part.inlineData?.data) playPcm(part.inlineData.data); },
      } });
      session.current.sendRealtimeInput({ text: "Greet the visitor as Suzi and invite them to ask about Riverflow treatments or finding the right consultation." }); await startMic();
    } catch { setStatus("error"); }
  }, [append, playPcm, startMic]);
  const sendText = (text) => { append("user", text); setStatus("thinking"); session.current?.sendRealtimeInput({ text }); };
  return { status, transcript, muted, setMuted, connect, disconnect, clearConversation, sendText };
}
