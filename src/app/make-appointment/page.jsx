import { Suspense } from "react";
import MakeAppointmentPage from "../../views/MakeAppointmentPage";
export const metadata = { title: "Make an Appointment Inquiry", alternates: { canonical: "/make-appointment" } };
export default function Page() { return <Suspense fallback={null}><MakeAppointmentPage /></Suspense>; }
