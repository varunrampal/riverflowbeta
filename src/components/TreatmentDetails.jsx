// src/components/TreatmentDetails.jsx
import { Link } from "react-router-dom";
import { getServiceGuide } from "../data/serviceGuides";

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

      {guide && (
        <article className="mx-auto mt-14 max-w-4xl space-y-10 text-base leading-8 text-slate-600">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">A personalized approach in Langley</h2>
            <p>People searching for {guide.seoTitle.toLowerCase()} are often comparing options, recovery time, comfort, cost, and the kind of improvement that is realistic for their concern. At Riverflow Laser &amp; Skin Clinic, the starting point is a conversation rather than a one-size-fits-all promise. We review what you would like to change, your previous services, relevant sensitivities, daily routine, and the amount of maintenance you are comfortable with. The goal of {treatment.title} is {guide.focus}. It may be considered by clients concerned about {guide.concerns}. A consultation helps determine whether this service fits your needs or whether another option would be more appropriate.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">How the service works</h2>
            <p>In general, {guide.approach}. Treatment may include {guide.areas}. The provider explains the planned steps before beginning and adjusts the protocol within the safe limits of the service. During the appointment, clients can generally expect {guide.experience}. Comfort and response differ from person to person, so tell the provider what you are feeling throughout the visit. Photographs, settings, products, or treatment notes may be documented when appropriate so future appointments can be planned consistently.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Consultation and suitability</h2>
            <p>Suitability cannot be decided from a webpage alone. Skin or hair type, current irritation, pregnancy, medications, recent procedures, sun exposure, allergies, and medical history can affect whether a service should proceed or be postponed. Please provide complete information during consultation. Riverflow may recommend a patch test, a gentler option, a different schedule, or medical advice before treatment. Cosmetic services do not diagnose or treat medical conditions. New, changing, painful, bleeding, or otherwise concerning skin findings should be assessed by a qualified medical professional.</p>
          </section>
          <section className="grid gap-8 md:grid-cols-2">
            <div><h2 className="mb-3 text-2xl font-bold text-secondary">How to prepare</h2><p>Before your appointment, {guide.preparation}. Follow the instructions provided for your specific booking, because preparation can change according to the treatment method and your history. Contact the clinic if your skin becomes irritated, you start a new medication, or you have a significant change in health before the scheduled visit.</p></div>
            <div><h2 className="mb-3 text-2xl font-bold text-secondary">Aftercare</h2><p>After the service, {guide.aftercare}. Normal short-term responses and restrictions depend on the service and intensity. Use only the products and timing recommended for you, and contact the clinic if a reaction seems unexpected or is worsening rather than settling.</p></div>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Sessions, results, and maintenance</h2>
            <p>For this service, {guide.schedule}. No ethical provider can guarantee an exact result or timeline because biology, consistency, home care, lifestyle, and starting condition all matter. We aim to set practical expectations, review progress, and adjust the plan when appropriate. Maintenance is optional and should reflect your goals rather than pressure to follow a fixed package.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Choosing a provider for {treatment.title}</h2>
            <p>When comparing providers in Langley, look beyond promotional pricing. Ask who performs the service, how suitability is assessed, what products or technology are used, how settings or protocols are selected, and what support is available after the appointment. A responsible consultation should include the limits of treatment as well as potential benefits. You should have an opportunity to ask questions without feeling rushed into a package. Clear hygiene practices, informed consent, appropriate eye or skin protection when required, accurate records, and written aftercare all contribute to a professional experience. If a provider promises a guaranteed result without assessing you, it is reasonable to seek another opinion.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Supporting your results at home</h2>
            <p>Professional appointments are only one part of a practical care plan. Consistent home care, sun protection where relevant, and following preparation and recovery instructions can be more useful than frequently changing products or adding treatments too quickly. Tell the clinic what you already use so recommendations fit your routine and do not unnecessarily duplicate active ingredients. More is not always better: irritation can interfere with comfort and may delay the next service. Take progress photographs in similar lighting if visual change is one of your goals, and bring questions to follow-up visits. This makes it easier to discuss what is improving, what remains unchanged, and whether the original plan still makes sense.</p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-secondary">Frequently asked questions</h2>
            <div className="space-y-5">
              <div><h3 className="font-bold text-slate-900">How do I know whether this is right for me?</h3><p>An in-person consultation is the best way to assess your concern, history, expectations, and possible alternatives.</p></div>
              <div><h3 className="font-bold text-slate-900">How much downtime should I expect?</h3><p>Downtime varies with the service and intensity. Your provider will explain likely temporary responses and any work, exercise, heat, product, or sun restrictions before treatment.</p></div>
              <div><h3 className="font-bold text-slate-900">How much does it cost?</h3><p>Pricing depends on the area, protocol, and number of sessions. Contact Riverflow for current pricing and a plan based on your needs.</p></div>
              <div><h3 className="font-bold text-slate-900">Can I combine it with another treatment?</h3><p>Sometimes, but correct spacing matters. Share all recent and planned services so the clinic can help avoid unnecessary irritation or conflicting recovery periods.</p></div>
            </div>
          </section>
        </article>
      )}

      {/* <BeforeAfterGallery treatment={treatment} /> */}
    </div>
  );
}
