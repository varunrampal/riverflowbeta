import TreatmentDetailsPage from "../../../views/TreatmentDetailsPage";
import { TREATMENTS } from "../../../data/treatments";

const treatmentMetadata = {
  facial: ["Signature Facial in Langley, BC | Riverflow", "Book a customized facial in Langley for cleansing, exfoliation, extraction and hydration. Compare facial options, appointment times and preparation."],
  laserhairremoval: ["Laser Hair Removal in Langley, BC | Riverflow Laser", "Long-term laser hair reduction for the face and body at Riverflow Laser in Langley. Learn about preparation, sessions, aftercare and pricing."],
  microneedling: ["Microneedling in Langley, BC | Collagen & Texture", "Explore XCellarisPro Twist microneedling at Riverflow in Langley for texture, fine lines and post-acne marks. Review preparation, recovery and limitations."],
  chemicalpeels: ["Chemical Peels in Langley, BC | Riverflow Laser", "Explore chemical peels in Langley for dullness, congestion, uneven tone and rough texture. Learn about peel preparation, flaking, aftercare and suitability."],
  hairservices: ["Men’s Haircuts & Hair Services in Langley | Riverflow", "Book professional hair services in Langley for clean, wearable cuts shaped around your hair, style and maintenance preferences."],
  hydrafacial: ["HydraFacial in Langley, BC | Cleansing & Hydration", "Book a HydraFacial in Langley using Vortex-Fusion technology for cleansing, exfoliation, extraction and hydration. View pricing, preparation and FAQs."],
  scalp: ["Scalp Therapy in Langley, BC | Cleansing & Care", "Explore scalp therapy in Langley for buildup, excess oil, dryness and scalp comfort. Learn what the cosmetic service includes and when to postpone."],
  oxygenofacial: ["OxyGeneo Facial in Langley, BC | 3-in-1 Facial", "Discover the OxyGeneo 3-in-1 facial at Riverflow in Langley for exfoliation, infusion and oxygenation with limited expected downtime."],
  acne: ["Acne Treatments in Langley, BC | Riverflow Skin Clinic", "Explore personalized cosmetic acne care in Langley for congestion, blemishes and post-breakout marks, including suitability, limitations and aftercare."],
  antiaging: ["Anti-Aging Skin Treatments in Langley, BC | Riverflow", "Compare personalized skin treatments in Langley for fine lines, dryness, texture and radiance. Learn about realistic results, recovery and treatment options."],
  pigmentation: ["Pigmentation Treatments in Langley, BC | Riverflow", "Explore cosmetic pigmentation treatments in Langley for sun spots, post-breakout marks and uneven tone, with preparation, aftercare and realistic limitations."],
  skinrejuvenation: ["Skin Rejuvenation in Langley, BC | Riverflow Laser", "Explore personalized skin rejuvenation in Langley for texture, hydration, fine lines and mild laxity. Compare methods, downtime and realistic results."],
};

export function generateStaticParams() { return Object.keys(TREATMENTS).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const treatment = TREATMENTS[slug];
  const [title, description] = treatmentMetadata[slug] || [`${treatment?.title} in Langley, BC`, treatment?.short];
  return treatment ? { title: { absolute: title }, description, alternates: { canonical: `/treatments/${slug}` } } : {};
}
export default function Page() { return <TreatmentDetailsPage />; }
