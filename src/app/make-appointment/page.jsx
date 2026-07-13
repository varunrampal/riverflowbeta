import { Suspense } from "react";
import MakeAppointmentPage from "../../views/MakeAppointmentPage";
export const metadata = { title: "Book a Laser or Skincare Consultation in Langley", description: "Request an appointment with Riverflow Laser & Skin Clinic in Langley for laser hair removal, facials, microneedling and personalized skincare.", alternates: { canonical: "/make-appointment" } };
export default function Page() { return <Suspense fallback={null}><MakeAppointmentPage /></Suspense>; }
