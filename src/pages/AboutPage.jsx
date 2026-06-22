import AboutHome from "../components/AboutHome";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { breadcrumbSchema, webPageSchema } from "../utils/seo";

export default function AboutPage(){

return(
  <Layout>
    <SEO
      title="About Riverflow Laser & Skin Clinic in Langley, BC"
      description="Learn about Riverflow Laser & Skin Clinic, a Langley skin and laser clinic offering personalized treatment plans, certified technology, and advanced aesthetic care."
      canonicalPath="/about"
      structuredData={[
        webPageSchema({
          name: "About Riverflow Laser & Skin Clinic",
          description:
            "Personalized laser and skin care in Langley, BC from Riverflow Laser & Skin Clinic.",
          path: "/about",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ]}
    />
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
