import TreatmentDetailsPage from "../../../views/TreatmentDetailsPage";
import { TREATMENTS } from "../../../data/treatments";
import { getTreatmentDescription } from "../../../utils/seo";

export function generateStaticParams() { return Object.keys(TREATMENTS).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const treatment = TREATMENTS[slug];
  return treatment ? { title: `${treatment.title} in Langley, BC`, description: getTreatmentDescription(treatment), alternates: { canonical: `/treatments/${slug}` } } : {};
}
export default function Page() { return <TreatmentDetailsPage />; }
