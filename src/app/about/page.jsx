import AboutPage from "../../views/AboutPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { breadcrumbSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: "About Riverflow Laser & Skin Clinic in Langley", description: "Learn about Riverflow Laser & Skin Clinic in Langley, our personalized approach and the technology used for laser and professional skincare services.", path: "/about" });
export default function Page() { return <><StructuredData data={[webPageSchema({ name: "About Riverflow Laser & Skin Clinic", description: metadata.description, path: "/about", type: "AboutPage" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} /><AboutPage /></>; }
