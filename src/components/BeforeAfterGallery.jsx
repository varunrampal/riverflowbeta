"use client";
import { useEffect, useState } from "react";
import { fetchTreatmentGallery } from "../data/gallery";

function getGalleryItems(treatment) {
  if (Array.isArray(treatment.beforeAfterGallery) && treatment.beforeAfterGallery.length) {
    return treatment.beforeAfterGallery;
  }

  return [
    {
      title: `${treatment.title} Results`,
      before: treatment.beforeImage || treatment.image,
      after: treatment.afterImage || treatment.image,
      note: "Before and after photos can be updated for this treatment in the treatment data.",
    },
  ];
}

function GalleryImage({ src, alt, label }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-secondary/5">
      {src ? (
        <img src={src} alt={alt} className="h-72 w-full object-cover" />
      ) : (
        <div className="flex h-72 flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary" aria-hidden="true">
            ◇
          </span>
          <span className="text-sm font-semibold text-secondary">
            Verified photo coming soon
          </span>
          <span className="max-w-52 text-xs leading-5 text-slate-500">
            This space is reserved for a consented, unretouched client image.
          </span>
        </div>
      )}
      <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary shadow-sm">
        {label}
      </span>
    </div>
  );
}

export default function BeforeAfterGallery({ treatment }) {
  if (!treatment) {
    return null;
  }

  const [managedItems, setManagedItems] = useState([]);
  useEffect(() => {
    let active = true;
    fetchTreatmentGallery(treatment.id).then((items) => active && setManagedItems(items)).catch(() => {});
    return () => { active = false; };
  }, [treatment.id]);
  const galleryItems = managedItems.length ? managedItems : getGalleryItems(treatment);

  return (
    <section className="mt-16 border-t border-accent/20 pt-12" aria-labelledby="results-gallery-heading">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          results gallery
        </p>
        <h2 id="results-gallery-heading" className="mt-3 text-2xl font-bold text-secondary md:text-3xl">
          Before & After Gallery
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Before-and-after photographs help show real examples while recognizing that every client responds differently.
        </p>
      </div>

      <div className="mb-7 rounded-xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-6 text-slate-600">
        Photos are published only with client consent. Images should use consistent lighting and angles and should not be digitally altered. Results vary and photographs do not guarantee a particular outcome.
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {galleryItems.map((item, index) => (
          <article
            key={`${item.title || treatment.title}-${index}`}
            className="rounded-2xl border border-accent/25 bg-white p-4 shadow-sm"
          >
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-bold text-secondary">
                {item.title || treatment.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Case {index + 1}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <GalleryImage
                src={item.before}
                alt={`${item.title || treatment.title} before`}
                label="Before"
              />
              <GalleryImage
                src={item.after}
                alt={`${item.title || treatment.title} after`}
                label="After"
              />
            </div>

            {item.note && (
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {item.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
