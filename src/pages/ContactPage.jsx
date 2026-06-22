// src/pages/Contact.jsx
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { breadcrumbSchema, localBusinessSchema, webPageSchema } from "../utils/seo";

const contextLinkClass =
  "font-semibold text-primary underline underline-offset-4 transition hover:text-secondary";

export default function ContactPage() {
  return (
    <Layout>
    <SEO
      title="Contact Riverflow Laser & Skin Clinic | Langley, BC"
      description="Contact Riverflow Laser & Skin Clinic in Langley, BC. Call 604.621.8311, email info@riverflowlaser.com, or visit Unit 108 - 19705 56 Avenue."
      canonicalPath="/contact"
      structuredData={[
        webPageSchema({
          name: "Contact Riverflow Laser & Skin Clinic",
          description:
            "Clinic location, phone, email, map, and business hours for Riverflow Laser & Skin Clinic in Langley, BC.",
          path: "/contact",
          type: "ContactPage",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        localBusinessSchema(),
      ]}
    />
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-background border-b border-accent/25">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
          <p className="text-slate-500 mt-2">
            We’d love to hear from you. Call, email, or visit us at our Langley location.
          </p>
          <p className="text-slate-500 mt-3">
            Ask us about{" "}
            <Link to="/treatments/laserhairremoval" className={contextLinkClass}>
              laser hair removal
            </Link>
            ,{" "}
            <Link to="/treatments/hydrafacial" className={contextLinkClass}>
              HydraFacial
            </Link>
            , or{" "}
            <Link to="/treatments/skinrejuvenation" className={contextLinkClass}>
              skin rejuvenation
            </Link>{" "}
            before choosing your appointment.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-10">
        {/* Left: info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">
              Clinic Location
            </h2>
            <p className="text-slate-600">
              Unit 108 – 19705 56 Avenue
              <br />
              Langley, BC <br />
              V3A 3X7 
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-background rounded-xl border border-accent/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Phone
              </p>
              <p className="text-base font-medium text-secondary mt-1">
                <a href="tel:+16046218311" className="hover:text-primary">
                 (604) 621-8311
                </a>
              </p>
            </div>
            <div className="bg-background rounded-xl border border-accent/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p className="text-base font-medium text-secondary mt-1">
                <a href="mailto:info@riverflowlaser.com" className="hover:text-primary">
                  info@riverflowlaser.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-background rounded-xl border border-accent/25 p-5">
            <h3 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday - Sunday</span>
                <span>9:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Optional message */}
          <p className="text-sm text-slate-500">
            If you're visiting for the first time, please call ahead so our team
            can guide you inside the property. You can also browse our{" "}
            <Link to="/treatments" className={contextLinkClass}>
              full treatment menu
            </Link>{" "}
            or compare{" "}
            <Link to="/treatments/microneedling" className={contextLinkClass}>
              microneedling
            </Link>{" "}
            and{" "}
            <Link to="/treatments/chemicalpeels" className={contextLinkClass}>
              chemical peels
            </Link>{" "}
            before you arrive.
          </p>
        </div>

        {/* Right: Map */}
        <div className="h-[380px] rounded-xl overflow-hidden border bg-slate-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=108+19705+56+Avenue+Langley,+BC+V3A+3X7&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
    </Layout>
  );
}
