// src/components/TreatmentDetails.jsx
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

  return (
<div className="max-w-6xl mx-auto py-12 px-4 lg:py-16">
  <div className="grid gap-10 lg:grid-cols-2 items-center">
    {/* IMAGE SIDE */}
    <div className="flex items-center justify-center h-[500px]">
      <img
        src={treatment.image}
        alt={treatment.title}
        className="h-full w-auto object-contain"
      />
    </div>

    {/* CONTENT SIDE */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
        Riverflow Laser & Skin Clinic
      </p>
      <h1 className="text-3xl font-bold text-slate-900 mb-3">
        {treatment.title}
      </h1>
      <p className="text-sm text-slate-500 mb-4">{treatment.short}</p>
      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-6">
        {treatment.content}
      </p>
      <a
         href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
            target="_blank"
        className="inline-flex items-center rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-secondary transition"
      >
        Book Now
      </a>
    </div>
  </div>
</div>



  );
}
