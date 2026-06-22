import { Link } from "react-router-dom";
import { TREATMENTS } from "../data/treatments"; // adjust path if different
import Layout from "../components/Layout";
import RequestConsultationForm from "../components/RequestConsultationForm";
import SEO from "../components/SEO";
import {
  breadcrumbSchema,
  localBusinessSchema,
  treatmentServiceSchema,
  treatmentsItemListSchema,
  webPageSchema,
} from "../utils/seo";

export default function AllTreatmentsPage() {

    const treatmentsArray = Array.isArray(TREATMENTS)
    ? TREATMENTS
    : Object.values(TREATMENTS);
    const contextLinkClass =
      "font-semibold text-primary underline underline-offset-4 transition hover:text-secondary";

  return (
    <Layout>
  <SEO
    title="Laser & Skin Treatments in Langley, BC | Riverflow Laser"
    description="Explore laser and skin treatments in Langley, including laser hair removal, HydraFacial, facials, microneedling, chemical peels, and acne care."
    canonicalPath="/treatments"
    structuredData={[
      localBusinessSchema(),
      webPageSchema({
        name: "Laser and Skin Treatments in Langley, BC",
        description:
          "A full list of laser, facial, hair, and skin rejuvenation services at Riverflow Laser & Skin Clinic.",
        path: "/treatments",
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Treatments", path: "/treatments" },
      ]),
      treatmentsItemListSchema(treatmentsArray),
      ...treatmentsArray.map(treatmentServiceSchema),
    ]}
  />
  <div className="min-h-screen bg-background py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
            Our Treatments
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore our full range of services.
          </p>
          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Many clients start with{" "}
            <Link to="/treatments/laserhairremoval" className={contextLinkClass}>
              laser hair removal
            </Link>
            , choose{" "}
            <Link to="/treatments/hydrafacial" className={contextLinkClass}>
              HydraFacial
            </Link>{" "}
            for a hydrated glow, or compare{" "}
            <Link to="/treatments/microneedling" className={contextLinkClass}>
              microneedling
            </Link>{" "}
            with{" "}
            <Link to="/treatments/chemicalpeels" className={contextLinkClass}>
              chemical peels
            </Link>{" "}
            for texture and tone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentsArray.map((item) => (
            <article
              key={item.id}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-accent/20 flex flex-col"
            >
              <div className="h-48 bg-secondary/5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Treatment";
                  }}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h2>
                {item.short && (
                  <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                    {item.short}
                  </p>
                )}
                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    to={`/treatments/${item.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition"
                  >
                    View details →
                  </Link>
                  <Link
                    to={`/make-appointment?subject=${encodeURIComponent(
                      item.title
                    )}`}
                    className="inline-flex items-center justify-center rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    Make an Inquiry
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <RequestConsultationForm className="mt-12" />
      </div>
    </div>
    </Layout>
  );
}
