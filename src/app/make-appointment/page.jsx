import { Suspense } from "react";
import MakeAppointmentPage from "../../views/MakeAppointmentPage";
import { pageMetadata } from "../../utils/metadata";
export const metadata = pageMetadata({ title: "Book a Laser or Skincare Consultation in Langley", description: "Request an appointment with Riverflow Laser & Skin Clinic in Langley for laser hair removal, facials, microneedling and personalized skincare.", path: "/make-appointment" });
export default function Page() { return <Suspense fallback={null}><MakeAppointmentPage /></Suspense>; }
