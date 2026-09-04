"use client";

// src/pages/TreatmentDetailsPage.jsx
import TreatmentDetails from "../components/TreatmentDetails";
import Layout from '../components/Layout';
import RequestConsultationForm from "../components/RequestConsultationForm";


export default function TreatmentDetailsPage({ treatment }) {
  return (
    <Layout>
      <TreatmentDetails treatment={treatment} />
      <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-16">
        <RequestConsultationForm />
      </div>
    </Layout>
  );
}
