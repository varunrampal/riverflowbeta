"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { TREATMENTS } from "../data/treatments";
import { fetchPublicGallery } from "../data/gallery";

function ResultImage({ src, label, alt }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-secondary/5">
      <img src={src} alt={alt} className="h-72 w-full object-cover md:h-80" />
      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary shadow">
        {label}
      </span>
    </div>
  );
}

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPublicGallery()
      .then(setItems)
      .catch(() => setError("The gallery could not be loaded right now."))
      .finally(() => setLoading(false));
  }, []);

  const groups = useMemo(() => Object.entries(
    items.reduce((result, item) => {
      (result[item.treatmentId] ||= []).push(item);
      return result;
    }, {}),
  ), [items]);

  return (
    <Layout>
      <main>
        <section className="border-b border-accent/20 bg-background px-4 py-14 text-center lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Real treatment journeys</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold text-secondary md:text-5xl">Before &amp; After Gallery</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Explore consented client result photographs organized by treatment. Individual responses vary, and photographs do not guarantee a particular outcome.</p>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          {loading && <p className="py-16 text-center text-slate-500">Loading gallery…</p>}
          {error && <p className="rounded-xl border border-red-200 bg-red-50 p-5 text-center text-red-700">{error}</p>}
          {!loading && !error && !groups.length && (
            <div className="rounded-2xl border border-accent/25 bg-background px-6 py-16 text-center">
              <h2 className="text-2xl font-bold text-secondary">Gallery photos coming soon</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">Verified before-and-after photographs will appear here as they are added with client consent.</p>
            </div>
          )}
          <div className="space-y-16">
            {groups.map(([treatmentId, treatmentItems]) => (
              <section key={treatmentId} aria-labelledby={`gallery-${treatmentId}`}>
                <div className="mb-6 border-l-4 border-primary pl-4">
                  <h2 id={`gallery-${treatmentId}`} className="text-2xl font-bold text-secondary md:text-3xl">{TREATMENTS[treatmentId]?.title || "Treatment Results"}</h2>
                  <p className="mt-1 text-sm text-slate-500">{treatmentItems.length} result {treatmentItems.length === 1 ? "pair" : "pairs"}</p>
                </div>
                <div className="grid gap-7 lg:grid-cols-2">
                  {treatmentItems.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-accent/25 bg-white p-4 shadow-sm">
                      {item.title && <h3 className="mb-4 font-bold text-secondary">{item.title}</h3>}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <ResultImage src={item.before} label="Before" alt={`${TREATMENTS[treatmentId]?.title || "Treatment"} before`} />
                        <ResultImage src={item.after} label="After" alt={`${TREATMENTS[treatmentId]?.title || "Treatment"} after`} />
                      </div>
                      {item.note && <p className="mt-4 text-sm leading-6 text-slate-500">{item.note}</p>}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
