// src/components/TreatmentDetails.jsx
import { Link } from "react-router-dom";
import { getServiceGuide } from "../data/serviceGuides";
import { getServiceDetails } from "../data/serviceDetails";
import BeforeAfterGallery from "./BeforeAfterGallery";

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
  const guide = getServiceGuide(treatment.id);
  const details = getServiceDetails(treatment.id);

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
            {guide?.seoTitle || `${treatment.title} in Langley, BC`}
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

      {guide && details && (
        <article className="mx-auto mt-14 max-w-4xl space-y-10 text-base leading-8 text-slate-600">
          <BeforeAfterGallery treatment={treatment} />
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">What this treatment is intended to address</h2>
            <p>The practical goal is {guide.focus}. Riverflow considers it for concerns such as {guide.concerns}, with treatment areas including {guide.areas}. The concern, current condition, previous response, and tolerance for recovery are reviewed before a protocol is selected.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Technology and treatment-room protocol</h2>
            <p>{details.technology}</p>
            <p className="mt-3">During the appointment, expect {guide.experience}. The provider should explain the device, product, tip, intensity, or treatment depth selected for that visit rather than relying only on the general service name.</p>
          </section>
          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-accent/25 bg-white p-5"><h2 className="mb-2 text-lg font-bold text-secondary">Appointment time</h2><p>{details.timing}</p></div>
            <div className="rounded-xl border border-accent/25 bg-white p-5"><h2 className="mb-2 text-lg font-bold text-secondary">Session planning</h2><p>{guide.schedule}</p></div>
          </section>
          <section className="grid gap-8 md:grid-cols-2">
            <div><h2 className="mb-3 text-2xl font-bold text-secondary">Preparation specific to this service</h2><p>{guide.preparation}.</p></div>
            <div><h2 className="mb-3 text-2xl font-bold text-secondary">When the appointment should be postponed</h2><p>{details.postpone}</p></div>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Expected temporary reactions and aftercare</h2>
            <p>{details.reactions} After the service, {guide.aftercare}. Contact the clinic if a reaction is unexpected, severe, or worsening instead of settling.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Realistic limitations</h2>
            <p>{details.limitations}</p>
          </section>
          <section className="rounded-2xl bg-background p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Protocol perspective</p>
            <h2 className="mb-3 mt-2 text-2xl font-bold text-secondary">A practical treatment consideration</h2>
            <p>{details.providerPerspective}</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Practical questions about {treatment.title}</h2>
            <div className="space-y-5">
              {details.faqs.map(([question, answer]) => (
                <div key={question}><h3 className="font-bold text-slate-900">{question}</h3><p>{answer}</p></div>
              ))}
            </div>
          </section>
        </article>
      )}

     
    </div>
  );
}
