"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CONCERNS = [
  { id: "glow", label: "Dullness", detail: "Restore clarity and hydration", treatments: ["hydrafacial", "oxygenofacial"] },
  { id: "tone", label: "Uneven tone", detail: "Soften the look of visible spots", treatments: ["pigmentation", "chemicalpeels"] },
  { id: "texture", label: "Texture", detail: "Refine the look of pores and marks", treatments: ["microneedling", "skinrejuvenation"] },
  { id: "lines", label: "Fine lines", detail: "Support a firmer, smoother look", treatments: ["antiaging", "microneedling"] },
];

const TREATMENT_NAMES = {
  hydrafacial: "Hydra Facial",
  oxygenofacial: "OxyGeneo Facial",
  pigmentation: "Pigmentation Treatment",
  chemicalpeels: "Chemical Peel",
  microneedling: "Collagen Induction",
  skinrejuvenation: "Skin Rejuvenation",
  antiaging: "Anti-Aging Treatment",
};

function FacePreview({ intensity, concern }) {
  const improvement = intensity / 100;
  const spotOpacity = concern === "tone" ? .52 * (1 - improvement * .72) : .13;
  const lineOpacity = concern === "lines" ? .48 * (1 - improvement * .7) : .12;
  const textureOpacity = concern === "texture" ? .42 * (1 - improvement * .68) : .1;
  const glowOpacity = .12 + improvement * .36;

  return (
    <svg viewBox="0 0 540 650" className="h-full w-full" role="img" aria-label={`Illustrated facial preview at ${intensity}% simulation intensity`}>
      <defs>
        <radialGradient id="skin" cx="50%" cy="32%" r="68%"><stop offset="0" stopColor="#f9d7c2"/><stop offset=".7" stopColor="#eab99f"/><stop offset="1" stopColor="#d89b82"/></radialGradient>
        <radialGradient id="glow" cx="50%" cy="46%" r="48%"><stop offset="0" stopColor="#fff" stopOpacity=".9"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="9"/></filter>
        <clipPath id="faceClip"><ellipse cx="270" cy="330" rx="174" ry="236"/></clipPath>
      </defs>
      <path d="M94 283C94 112 179 47 275 47c115 0 184 90 174 249-17-66-59-117-104-148-54 57-136 91-251 99Z" fill="#3c2928"/>
      <ellipse cx="270" cy="330" rx="174" ry="236" fill="url(#skin)"/>
      <g clipPath="url(#faceClip)">
        <ellipse cx="270" cy="330" rx="156" ry="205" fill="url(#glow)" opacity={concern === "glow" ? glowOpacity : .16 + improvement * .12}/>
        <g fill="#9d665b" opacity={spotOpacity}>
          <circle cx="181" cy="330" r="7"/><circle cx="155" cy="359" r="4"/><circle cx="202" cy="374" r="5"/><circle cx="357" cy="342" r="6"/><circle cx="385" cy="370" r="4"/><circle cx="337" cy="388" r="3"/>
        </g>
        <g fill="none" stroke="#8c5c56" strokeLinecap="round" opacity={lineOpacity}>
          <path d="M166 281c25-12 49-10 69 1M305 282c24-13 48-12 70-1" strokeWidth="4"/>
          <path d="M210 440c35 13 86 13 121 0M218 451c30 12 72 12 103 0" strokeWidth="3"/>
        </g>
        <g fill="#a87368" opacity={textureOpacity}>
          {[[175,393],[191,408],[159,415],[369,400],[350,417],[384,426],[205,420],[329,429]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3"/>)}
        </g>
        <ellipse cx="270" cy="330" rx="132" ry="180" fill="#fff0da" opacity={improvement * .12} filter="url(#soft)"/>
      </g>
      <path d="M174 280c22-12 44-12 65 0M302 280c22-12 44-12 65 0" stroke="#573b3b" strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M178 305c18 14 40 14 59 0M304 305c18 14 40 14 59 0" stroke="#513b3b" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <circle cx="208" cy="307" r="5" fill="#2d292a"/><circle cx="333" cy="307" r="5" fill="#2d292a"/>
      <path d="M270 311c-7 48-18 70 4 78 12 4 22-1 28-7" fill="none" stroke="#b5796e" strokeWidth="4" strokeLinecap="round"/>
      <path d="M217 437c30 25 77 26 108 0-26 7-80 7-108 0Z" fill="#b96872"/><path d="M224 438c27-8 66-8 94 0" stroke="#f5c5bf" strokeWidth="3"/>
    </svg>
  );
}

export default function AestheticSimulator() {
  const [concern, setConcern] = useState("glow");
  const [intensity, setIntensity] = useState(55);
  const [showBefore, setShowBefore] = useState(false);
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const selected = useMemo(() => CONCERNS.find((item) => item.id === concern), [concern]);
  const visibleIntensity = showBefore ? 0 : intensity;

  useEffect(() => () => {
    if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
    streamRef.current?.getTracks().forEach((track) => track.stop());
  }, [photo]);

  useEffect(() => {
    if (!cameraOpen || !videoRef.current || !streamRef.current) return;
    videoRef.current.srcObject = streamRef.current;
    videoRef.current.play().catch(() => setCameraError("Camera preview could not start."));
  }, [cameraOpen]);

  const selectPhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadError("Please choose a JPG, PNG, or WebP image.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("Please choose an image smaller than 10 MB.");
      return;
    }
    if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
    setPhoto(URL.createObjectURL(file));
    setPhotoName(file.name);
    setUploadError("");
    setShowBefore(false);
  };

  const removePhoto = () => {
    if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
    setPhoto("");
    setPhotoName("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const closeCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraOpen(false);
  };

  const openCamera = async () => {
    setCameraError("");
    if (!navigator.mediaDevices?.getUserMedia) {
      setUploadError("Camera access is not supported in this browser. Please upload a photo instead.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 1280 } },
        audio: false,
      });
      streamRef.current = stream;
      setCameraOpen(true);
    } catch {
      setUploadError("Camera access was blocked. Allow camera permission in your browser, then try again.");
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video?.videoWidth) {
      setCameraError("The camera is still starting. Please try again in a moment.");
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (photo.startsWith("blob:")) URL.revokeObjectURL(photo);
    setPhoto(canvas.toDataURL("image/jpeg", .9));
    setPhotoName(`camera-photo-${Date.now()}.jpg`);
    setUploadError("");
    setShowBefore(false);
    closeCamera();
  };

  const imageFilter = showBefore ? "none" : [
    `brightness(${1 + visibleIntensity * .0011})`,
    `contrast(${1 - visibleIntensity * .00045})`,
    `saturate(${1 + visibleIntensity * (concern === "glow" ? .0012 : .00045)})`,
  ].join(" ");

  return (
    <section className="min-h-[calc(100vh-120px)] bg-[#f7f2ec] px-4 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-primary">AI aesthetic simulator</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-secondary md:text-6xl">Visualize your skin goals.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">Explore a subtle, illustrative preview and discover Riverflow treatments aligned with your priorities.</p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#dfd3c6] bg-white shadow-[0_28px_80px_rgba(15,45,82,.12)] lg:grid-cols-[1.12fr_.88fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-[#dcc9bc] md:min-h-[680px]">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-secondary backdrop-blur">{photo ? "Your private preview" : "Photo simulator"}</span>
              {photo && <div className="flex rounded-full bg-secondary/85 p-1 text-xs font-bold text-white backdrop-blur">
                <button type="button" onClick={() => setShowBefore(true)} className={`rounded-full px-4 py-2 transition ${showBefore ? "bg-white text-secondary" : ""}`}>Before</button>
                <button type="button" onClick={() => setShowBefore(false)} className={`rounded-full px-4 py-2 transition ${!showBefore ? "bg-white text-secondary" : ""}`}>Preview</button>
              </div>}
            </div>
            {!photo ? (
              <div className="absolute inset-0 flex items-center justify-center px-6 pt-20">
                <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/90 p-7 text-center shadow-2xl backdrop-blur md:p-10">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 16.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2.5M12 4v12m0-12L7.5 8.5M12 4l4.5 4.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="2" width="14" height="18" rx="3" opacity=".15"/></svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-secondary">Upload a clear selfie</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-500">Use a front-facing photo in even, natural light without glasses or heavy filters.</p>
                  <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={selectPhoto} className="sr-only" />
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <button type="button" onClick={() => inputRef.current?.click()} className="rounded-full bg-primary px-5 py-4 text-sm font-bold text-white transition hover:bg-secondary">Upload photo</button>
                    <button type="button" onClick={openCamera} className="rounded-full border-2 border-primary bg-white px-5 py-4 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">Use camera</button>
                  </div>
                  {uploadError && <p className="mt-3 text-sm font-semibold text-red-600" role="alert">{uploadError}</p>}
                  <p className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400"><span aria-hidden="true">🔒</span> Your image stays on this device</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-[#b9a89d]">
                <img src={photo} alt="Uploaded selfie preview" className="h-full w-full object-cover transition duration-500" style={{ filter: imageFilter }} />
                {!showBefore && <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,238,215,.18),transparent_48%)]" style={{ opacity: visibleIntensity / 100 }} />}
              </div>
            )}
            {photo && <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/85 px-5 py-4 backdrop-blur md:bottom-7 md:left-7 md:right-7">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Simulating</p><p className="mt-1 font-bold text-secondary">{selected.label} · {visibleIntensity}%</p></div>
              <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,.15)]" />
            </div>}
          </div>

          <div className={`flex flex-col p-6 transition md:p-10 lg:p-12 ${!photo ? "pointer-events-none opacity-45" : ""}`}>
            {photo && <div className="mb-7 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs"><span className="max-w-[70%] truncate font-semibold text-slate-500">{photoName}</span><button type="button" onClick={removePhoto} className="font-bold text-primary hover:text-secondary">Replace photo</button></div>}
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">01 · Select a focus</span>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {CONCERNS.map((item) => (
                  <button key={item.id} type="button" onClick={() => { setConcern(item.id); setShowBefore(false); }} className={`rounded-2xl border p-4 text-left transition ${concern === item.id ? "border-primary bg-primary text-white shadow-lg shadow-primary/20" : "border-slate-200 bg-white text-secondary hover:border-primary/60"}`}>
                    <strong className="block">{item.label}</strong><span className={`mt-1 block text-xs leading-5 ${concern === item.id ? "text-white/75" : "text-slate-500"}`}>{item.detail}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 border-t border-slate-100 pt-8">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">02 · Preview intensity</span><strong className="text-primary">{intensity}%</strong></div>
              <input className="mt-6 w-full accent-[#B76E79]" type="range" min="15" max="100" value={intensity} onChange={(event) => { setIntensity(Number(event.target.value)); setShowBefore(false); }} aria-label="Simulation intensity" />
              <div className="mt-2 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400"><span>Subtle</span><span>Enhanced</span></div>
            </div>

            <div className="mt-9 rounded-2xl bg-secondary p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Suggested starting points</p>
              <div className="mt-4 space-y-3">
                {selected.treatments.map((id, index) => <Link key={id} to={`/treatments/${id}`} className="flex items-center justify-between border-b border-white/10 pb-3 font-semibold transition last:border-0 last:pb-0 hover:text-accent"><span><span className="mr-3 text-white/40">0{index + 1}</span>{TREATMENT_NAMES[id]}</span><span aria-hidden="true">↗</span></Link>)}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Link to="/make-appointment" className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-bold text-white transition hover:bg-secondary">Book a personalized consultation</Link>
              <p className="mt-4 text-center text-xs leading-5 text-slate-400">Your photo is processed only in this browser and is not uploaded or stored. This visualization is illustrative only, not a prediction or medical assessment. Results vary.</p>
            </div>
          </div>
        </div>
      </div>
      {cameraOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/90 p-4" role="dialog" aria-modal="true" aria-label="Take a photo">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4">
              <div><p className="font-bold text-secondary">Take a selfie</p><p className="text-xs text-slate-500">Center your face in even lighting</p></div>
              <button type="button" onClick={closeCamera} className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-secondary" aria-label="Close camera">×</button>
            </div>
            <div className="relative aspect-square overflow-hidden bg-black">
              <video ref={videoRef} muted playsInline className="h-full w-full scale-x-[-1] object-cover" />
              <div className="pointer-events-none absolute inset-[10%] rounded-[45%] border-2 border-dashed border-white/70" />
            </div>
            {cameraError && <p className="px-5 pt-4 text-center text-sm font-semibold text-red-600" role="alert">{cameraError}</p>}
            <div className="grid grid-cols-2 gap-3 p-5">
              <button type="button" onClick={closeCamera} className="rounded-full border border-slate-300 px-5 py-3 font-bold text-secondary">Cancel</button>
              <button type="button" onClick={capturePhoto} className="rounded-full bg-primary px-5 py-3 font-bold text-white hover:bg-secondary">Capture photo</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
