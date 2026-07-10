import img from '../assets/images/jyoti.jpeg'
import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import SEO from "../components/SEO";
import { breadcrumbSchema, webPageSchema } from "../utils/seo";

const contextLinkClass =
  "font-semibold text-primary underline underline-offset-4 transition hover:text-secondary";

export default function TeamPage() {
  return (
    <Layout>
<SEO
  title="Meet the Riverflow Laser & Skin Clinic Team | Langley, BC"
  description="Meet the Riverflow Laser & Skin Clinic team in Langley, BC, offering experienced, caring support for laser, cosmetic, injectable, and skin health treatments."
  canonicalPath="/team"
  structuredData={[
    webPageSchema({
      name: "Meet the Riverflow Laser & Skin Clinic Team",
      description:
        "Experienced skin health and laser care professionals serving Langley, BC.",
      path: "/team",
      type: "AboutPage",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Team", path: "/team" },
    ]),
  ]}
/>
<section id="about" className="py-10 lg:py-14 bg-background">
  <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap- items-start">
    {/* TEXT */}
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-primary">
        Meet the Team
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-3">
        Our Dream TEAM!
      </h1>
      <p className="text-slate-600 mb-4">
        At The Riverflow Laser and Skin Clinic Inc, our team is respected for
        their experience and passion for skin health and offering laser,
        cosmetic and injectable treatments to patients for naturally beautiful
        results.
      </p>
      <p className="text-slate-600 mb-4">
        We welcome every patient with warmth and knowledge you’ll feel
        comfortable and confident in.
      </p>
      <p className="text-slate-600 mb-4">
        Many consultations focus on choosing between{" "}
        <Link to="/treatments/laserhairremoval" className={contextLinkClass}>
          laser hair removal
        </Link>
        ,{" "}
        <Link to="/treatments/skinrejuvenation" className={contextLinkClass}>
          skin rejuvenation
        </Link>
        , and{" "}
        <Link to="/treatments/pigmentation" className={contextLinkClass}>
          pigmentation treatments
        </Link>{" "}
        based on your skin goals.
      </p>
      <p className="text-slate-600 mb-4">
        For texture and glow, our team may also recommend{" "}
        <Link to="/treatments/hydrafacial" className={contextLinkClass}>
          HydraFacial
        </Link>{" "}
        or{" "}
        <Link to="/treatments/microneedling" className={contextLinkClass}>
          microneedling
        </Link>{" "}
        after reviewing your skin.
      </p>
      <blockquote className="text-slate-700 italic">
        “As a woman who understands the toll unwanted hair can take, I know how
        important safe and effective solutions are.”
        <span className="not-italic font-medium text-secondary">
          {" "}
          — Jyoti Sharma, Esthetician
        </span>
      </blockquote>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src={img}
        alt="Jyoti Sharma, esthetician at Riverflow Laser & Skin Clinic"
        className="w-64 h-160 md:w-80 md:h-160 object-cover rounded-xl shadow-sm"
      />
    </div>
  </div>
</section>

    </Layout>

  );
};
