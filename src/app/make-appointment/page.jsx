import { Suspense } from "react";
import MakeAppointmentPage from "../../views/MakeAppointmentPage";
import { pageMetadata } from "../../utils/metadata";
import StructuredData from "../../components/StructuredData";
import { breadcrumbSchema, webPageSchema } from "../../utils/seo";
export const metadata = pageMetadata({ title: "Book a Laser or Skincare Consultation in Langley", description: "Request an appointment with Riverflow Laser & Skin Clinic in Langley for laser hair removal, facials, microneedling and personalized skincare.", path: "/make-appointment" });
export default function Page() { return <><StructuredData data={[webPageSchema({ name: "Make an Appointment Inquiry", description: metadata.description, path: "/make-appointment", type: "ContactPage" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Make an Appointment", path: "/make-appointment" }])]} /><Suspense fallback={null}><MakeAppointmentPage /></Suspense></>; }
