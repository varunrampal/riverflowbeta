import ContactPage from "../../views/ContactPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { breadcrumbSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: "Contact Our Laser & Skin Clinic in Langley", description: "Contact Riverflow Laser & Skin Clinic in Langley, BC to ask about treatments, suitability, preparation or booking a personalized consultation.", path: "/contact" });
export default function Page() { return <><StructuredData data={[webPageSchema({ name: "Contact Riverflow Laser & Skin Clinic", description: metadata.description, path: "/contact", type: "ContactPage" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} /><ContactPage /></>; }
