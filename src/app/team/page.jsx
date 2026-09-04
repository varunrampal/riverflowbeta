import TeamPage from "../../views/TeamPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { breadcrumbSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: { absolute: "Meet Our Estheticians and Skincare Team | Riverflow Langley" }, description: "Meet the estheticians and skincare team at Riverflow Laser & Skin Clinic in Langley and learn about our client-focused treatment approach.", path: "/team" });
export default function Page() { return <><StructuredData data={[webPageSchema({ name: "Meet the Riverflow Laser & Skin Clinic Team", description: metadata.description, path: "/team", type: "AboutPage" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Team", path: "/team" }])]} /><TeamPage /></>; }
