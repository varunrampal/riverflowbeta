// src/components/TreatmentDetails.jsx
import { Link } from "react-router-dom";

const contextLinkClass =
  "font-semibold text-primary underline underline-offset-4 transition hover:text-secondary";

const relatedTreatments = {
  facial: ["hydrafacial", "chemicalpeels", "skinrejuvenation"],
  laserhairremoval: ["hydrafacial", "skinrejuvenation", "antiaging"],
  microneedling: ["skinrejuvenation", "chemicalpeels", "pigmentation"],
  chemicalpeels: ["acne", "pigmentation", "hydrafacial"],
  hairservices: ["facial", "hydrafacial", "scalp"],
  hydrafacial: ["facial", "oxygenofacial", "skinrejuvenation"],
  scalp: ["hairservices", "facial", "hydrafacial"],
  oxygenofacial: ["hydrafacial", "facial", "skinrejuvenation"],
  acne: ["chemicalpeels", "hydrafacial", "pigmentation"],
  antiaging: ["skinrejuvenation", "microneedling", "hydrafacial"],
  pigmentation: ["chemicalpeels", "skinrejuvenation", "microneedling"],
  skinrejuvenation: ["antiaging", "microneedling", "pigmentation"],
};

const treatmentNames = {
  facial: "signature facial",
  laserhairremoval: "laser hair removal",
  microneedling: "microneedling",
  chemicalpeels: "chemical peels",
  hairservices: "hair services",
  hydrafacial: "HydraFacial",
  scalp: "scalp therapy",
  oxygenofacial: "OxyGeneo facial",
  acne: "acne treatment",
  antiaging: "anti-aging treatments",
  pigmentation: "pigmentation treatments",
  skinrejuvenation: "skin rejuvenation",
};

export default function TreatmentDetails({ treatment }) {
  if (!treatment) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-background border border-accent/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Treatment not found
          </h2>
          <p className="text-slate-500 text-sm">
            Please go back to the treatments page.
          </p>
        </div>
      </div>
    );
  }

  const relatedIds =
    relatedTreatments[treatment.id] || ["hydrafacial", "skinrejuvenation", "facial"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex h-[500px] items-center justify-center">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="h-full w-auto object-contain"
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Riverflow Laser & Skin Clinic
          </p>
          <h1 className="mb-3 text-3xl font-bold text-slate-900">
            {treatment.title}
          </h1>
          <p className="mb-4 text-sm text-slate-500">{treatment.short}</p>
          <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-slate-600">
            {treatment.content}
          </p>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            Clients interested in {treatment.title} often also compare{" "}
            {relatedIds.map((id, index) => (
              <span key={id}>
                {index > 0 ? (index === relatedIds.length - 1 ? ", and " : ", ") : ""}
                <Link to={`/treatments/${id}`} className={contextLinkClass}>
                  {treatmentNames[id]}
                </Link>
              </span>
            ))}
            .
          </p>
          <a
            href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* <BeforeAfterGallery treatment={treatment} /> */}
    </div>
  );
}
