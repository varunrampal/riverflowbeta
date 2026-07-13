const communities = [
  "Langley City",
  "Brookswood",
  "Willowbrook",
  "Murrayville",
  "Willoughby",
  "Walnut Grove",
  "Cloverdale",
  "Surrey",
];

export default function AreasWeServe() {
  return (
    <section className="bg-background py-14 md:py-16" aria-labelledby="areas-we-serve-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-accent/25 bg-white p-7 shadow-sm md:p-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-primary">
            Local laser and skincare clinic
          </p>
          <h2 id="areas-we-serve-heading" className="mt-2 text-2xl font-bold text-secondary md:text-3xl">
            Areas We Serve
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Riverflow Laser &amp; Skin Clinic is located in Langley and welcomes clients from nearby communities for laser hair removal, facials, HydraFacial, microneedling, and personalized skincare. Clients visit us from across Langley and neighbouring areas, including:
          </p>
          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Communities served">
            {communities.map((community) => (
              <li key={community} className="rounded-full border border-accent/30 bg-background px-4 py-2 text-sm font-semibold text-secondary">
                {community}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">
            Treatment suitability and appointment length depend on the service selected. Contact the clinic before travelling if you would like help choosing the appropriate booking.
          </p>
        </div>
      </div>
    </section>
  );
}
