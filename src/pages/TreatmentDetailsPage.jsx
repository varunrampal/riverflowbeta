// src/pages/TreatmentDetailsPage.jsx
import { useParams } from "react-router-dom";
import { TREATMENTS } from "../data/treatments";
import TreatmentDetails from "../components/TreatmentDetails";
import Layout from '../components/Layout';
import RequestConsultationForm from "../components/RequestConsultationForm";


export default function TreatmentDetailsPage() {
  const { slug } = useParams(); // e.g. "facial", "hair-removal"
  console.log(slug);
  const treatment = TREATMENTS[slug];

  console.log('r:'+treatment);

  return (
    <Layout>
      <TreatmentDetails treatment={treatment} />
      <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-16">
        <RequestConsultationForm />
      </div>
    </Layout>
  );
}
