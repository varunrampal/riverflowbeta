import AllTreatmentsPage from "../../views/AllTreatmentsPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { TREATMENTS } from "../../data/treatments";
import { breadcrumbSchema, treatmentServiceSchema, treatmentsItemListSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: "Laser & Skin Treatments in Langley, BC", description: "Explore laser hair removal, HydraFacial, microneedling, chemical peels, facials and personalized skin treatments at Riverflow in Langley.", path: "/treatments" });
export default function Page() {
  const treatments = Object.values(TREATMENTS);
  return <><StructuredData data={[webPageSchema({ name: "Laser and Skin Treatments in Langley, BC", description: metadata.description, path: "/treatments" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Treatments", path: "/treatments" }]), treatmentsItemListSchema(treatments), ...treatments.map(treatmentServiceSchema)]} /><AllTreatmentsPage /></>;
}
