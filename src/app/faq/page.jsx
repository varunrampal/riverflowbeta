import FAQPage from "../../views/FAQPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { breadcrumbSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: "Laser Hair Removal & Skincare FAQs in Langley", description: "Find answers about laser hair removal, skincare treatments, preparation, appointments and aftercare at Riverflow Laser in Langley, BC.", path: "/faq" });
export default function Page() { return <><StructuredData data={[webPageSchema({ name: "Laser Hair Removal FAQs", description: metadata.description, path: "/faq", type: "FAQPage" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]} /><FAQPage /></>; }
