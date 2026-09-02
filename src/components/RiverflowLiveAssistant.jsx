"use client";
import { useEffect, useRef, useState } from "react";
import { useGeminiLive } from "../hooks/useGeminiLive";
import { SITE_CONFIG } from "../data/site";

export default function RiverflowLiveAssistant() {
  const [open, setOpen] = useState(false); const [text, setText] = useState(""); const live = useGeminiLive(); const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [live.transcript, live.status]);
  const active = ["listening", "thinking", "speaking"].includes(live.status);
  const submit = () => { if (text.trim() && active) { live.sendText(text.trim()); setText(""); } else if (["idle", "disconnected", "error"].includes(live.status)) live.connect(); };
  const labels = { idle: "Ready when you are", connecting: "Connecting…", listening: "Listening", thinking: "Suzi is thinking…", speaking: "Suzi is speaking", disconnected: "Conversation ended", error: "Temporarily unavailable" };
  return <>
    {!open && <div className="river-live-launch"><button onClick={() => setOpen(true)} aria-label="Need help? Ask Suzi"><span className="river-live-rings" aria-hidden="true"/><span className="river-live-mic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="8" y="3" width="8" height="12" rx="4" fill="currentColor"/><path d="M5.5 11.5v.5a6.5 6.5 0 0 0 13 0v-.5M12 18.5V22M8.5 22h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></span><span className="river-live-label"><small>Need help?</small><strong>Ask Suzi</strong></span><span className="river-live-arrow" aria-hidden="true">→</span></button></div>}
    {open && <div className="river-live-backdrop" role="dialog" aria-modal="true" aria-label="Riverflow voice concierge"><div className="river-live-panel">
      <header><div className="river-live-avatar">S</div><div><strong>Suzi</strong><span>Riverflow skin & laser concierge · {labels[live.status]}</span></div><button onClick={() => { live.clearConversation(); setText(""); setOpen(false); }} aria-label="Close and clear conversation">×</button></header>
      <main>{live.transcript.length === 0 && <div className="river-live-intro"><span>Personal guidance, in real time</span><h3>What can I help you discover?</h3><p>Ask about treatments, what to expect, clinic details, or how to choose the right consultation.</p></div>}{live.transcript.map((item, index) => <p key={index} className={item.role === "user" ? "from-user" : "from-river"}>{item.text}</p>)}{live.status === "thinking" && <div className="river-thinking" role="status" aria-live="polite"><span>Suzi is thinking</span><i/><i/><i/></div>}<div ref={endRef}/></main>
      <footer><a href={SITE_CONFIG.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <span>↗</span></a><div className="river-live-input"><input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") submit(); }} disabled={!active} placeholder={active ? "Ask Suzi…" : "Start a conversation"}/><button onClick={submit} disabled={live.status === "connecting"} aria-label={text.trim() ? "Send message" : "Start voice conversation"}>{text.trim() && active ? <svg className="river-send-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m0 0-5.5 5.5M12 5l5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> : <svg className="river-input-mic" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="3" width="8" height="12" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M5.5 11.5v.5a6.5 6.5 0 0 0 13 0v-.5M12 18.5V22M8.5 22h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>}</button></div>{active && <button className="river-mute" onClick={() => live.setMuted(!live.muted)}>{live.muted ? "Microphone unavailable · Type your question" : "Mute microphone"}</button>}{live.status === "error" && <p className="river-live-error">Suzi could not connect. Tap the microphone to try again.</p>}</footer>
    </div></div>}
  </>;
}
