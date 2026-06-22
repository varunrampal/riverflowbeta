// src/pages/TreatmentDetailsPage.jsx
import { useParams } from "react-router-dom";
import { TREATMENTS } from "../data/treatments";
import TreatmentDetails from "../components/TreatmentDetails";
import Layout from '../components/Layout';
import RequestConsultationForm from "../components/RequestConsultationForm";
import SEO from "../components/SEO";
import {
  breadcrumbSchema,
  getTreatmentDescription,
  localBusinessSchema,
  treatmentServiceSchema,
  webPageSchema,
} from "../utils/seo";


export default function TreatmentDetailsPage() {
  const { slug } = useParams(); // e.g. "facial", "hair-removal"
  const treatment = TREATMENTS[slug];
  const canonicalPath = `/treatments/${slug}`;
  const title = treatment
    ? `${treatment.title} in Langley, BC | Riverflow Laser`
    : "Treatment Not Found | Riverflow Laser";
  const description = treatment
    ? getTreatmentDescription(treatment)
    : "Browse laser and skin treatments available at Riverflow Laser & Skin Clinic in Langley, BC.";

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        image={treatment?.image}
        robots={treatment ? "index, follow" : "noindex, follow"}
        type="article"
        structuredData={
          treatment
            ? [
                localBusinessSchema(),
                webPageSchema({
                  name: treatment.title,
                  description,
                  path: canonicalPath,
                }),
                breadcrumbSchema([
                  { name: "Home", path: "/" },
                  { name: "Treatments", path: "/treatments" },
                  { name: treatment.title, path: canonicalPath },
                ]),
                treatmentServiceSchema(treatment),
              ]
            : []
        }
      />
      <TreatmentDetails treatment={treatment} />
      <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-16">
        <RequestConsultationForm />
      </div>
    </Layout>
  );
}
