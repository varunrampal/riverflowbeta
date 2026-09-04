import AboutHome from "../components/AboutHome";
import Layout from "../components/Layout";

export default function AboutPage(){

return(
  <Layout>
    <section className="bg-background border-b border-accent/25">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-secondary">
          About Riverflow Laser & Skin Clinic
        </h1>
        <p className="text-slate-500 mt-2">
          Personalized laser and skin care in Langley, BC.
        </p>
      </div>
    </section>
<AboutHome></AboutHome>
  </Layout>
);


};
