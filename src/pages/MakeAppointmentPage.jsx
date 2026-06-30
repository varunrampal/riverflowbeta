import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { submitClinicForm } from "../utils/formSubmit";
import SEO from "../components/SEO";
import { breadcrumbSchema, webPageSchema } from "../utils/seo";
import { trackBlogEvent } from "../data/blog";

const inputClass =
  "mt-2 w-full rounded-lg border border-accent/30 bg-white px-4 py-2.5 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-3";
const contextLinkClass =
  "font-semibold text-primary underline underline-offset-4 transition hover:text-secondary";

export default function MakeAppointmentPage() {
  const [searchParams] = useSearchParams();
  const subjectFromQuery = searchParams.get("subject") || "";
  const sourceArticle = searchParams.get("article") || "";
  const sourcePostId = searchParams.get("post") || "";
  const cameFromBlog = searchParams.get("source") === "blog" && sourceArticle;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = formData.get("subject") || "Appointment Inquiry";

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const successMessage = await submitClinicForm({
        request_type: "Make an appointment inquiry",
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        subject,
        date: formData.get("date"),
        time: formData.get("time"),
        message: formData.get("message"),
        source_page: cameFromBlog ? `Blog: ${sourceArticle}` : "Website",
        _subject: `Riverflow Appointment Inquiry: ${subject}`,
      });

      if (sourcePostId) {
        trackBlogEvent("inquiry_submit", { postId: sourcePostId });
      }

      form.reset();
      setFormStatus({ type: "success", message: successMessage });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message ||
          "Your request could not be sent. Please call us at 604.621.8311.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Make an Appointment Inquiry | Riverflow Laser Langley"
        description="Send an appointment inquiry to Riverflow Laser & Skin Clinic in Langley, BC for laser hair removal, facials, HydraFacial, microneedling, peels, and skin treatments."
        canonicalPath="/make-appointment"
        structuredData={[
          webPageSchema({
            name: "Make an Appointment Inquiry",
            description:
              "Appointment inquiry form for Riverflow Laser & Skin Clinic in Langley, BC.",
            path: "/make-appointment",
            type: "ContactPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Make an Appointment", path: "/make-appointment" },
          ]),
        ]}
      />
      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Make an appointment
            </p>
            <h1 className="mt-3 text-3xl font-bold text-secondary md:text-4xl">
              Send us your appointment inquiry
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Share your preferred date and time, and our team will contact you
              to confirm availability. Popular appointment requests include{" "}
              <Link to="/treatments/laserhairremoval" className={contextLinkClass}>
                laser hair removal
              </Link>
              ,{" "}
              <Link to="/treatments/hydrafacial" className={contextLinkClass}>
                HydraFacial
              </Link>
              , and{" "}
              <Link to="/treatments/microneedling" className={contextLinkClass}>
                microneedling
              </Link>
              .
            </p>
            {cameFromBlog ? (
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-secondary">
                <span className="font-semibold text-primary">Your guide is connected.</span>{" "}
                We’ll include the article you were reading so the team has context for your inquiry.
              </div>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                Book Online
              </a>
              <a
                href="tel:+16046218311"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Call 604.621.8311
              </a>
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl border border-accent/25 bg-background p-5 shadow-sm sm:gap-8 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Appointment details
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Fill out the form and include the treatment you are interested
                  in. If you are unsure, compare{" "}
                  <Link to="/treatments/acne" className={contextLinkClass}>
                    acne treatment
                  </Link>
                  ,{" "}
                  <Link to="/treatments/pigmentation" className={contextLinkClass}>
                    pigmentation treatment
                  </Link>
                  , and{" "}
                  <Link to="/treatments/antiaging" className={contextLinkClass}>
                    anti-aging treatments
                  </Link>{" "}
                  before sending your request. We will reply within 24-48 hours.
                </p>
                <p className="mt-3 text-sm font-medium text-secondary sm:hidden">
                  On mobile, just send your name, phone, and treatment interest.
                  We will confirm date and time by phone.
                </p>
              </div>

              <div className="hidden rounded-xl bg-secondary px-5 py-4 text-white sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Prefer to call?
                </p>
                <a
                  href="tel:+16046218311"
                  className="mt-2 inline-flex text-xl font-bold hover:text-accent"
                >
                  604.621.8311
                </a>
              </div>
            </div>

            <form className="grid gap-3 sm:grid-cols-2 sm:gap-4" onSubmit={handleSubmit}>
              <label className="text-sm font-semibold text-secondary">
                Name
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="text-sm font-semibold text-secondary">
                Phone
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  placeholder="604.621.8311"
                  required
                />
              </label>

              <label className="text-sm font-semibold text-secondary">
                Subject
                <input
                  className={inputClass}
                  type="text"
                  name="subject"
                  defaultValue={subjectFromQuery}
                  placeholder="Treatment interest"
                  required
                />
              </label>

              <label className="hidden text-sm font-semibold text-secondary sm:block">
                Email <span className="font-normal text-slate-500">(optional)</span>
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

              <label className="hidden text-sm font-semibold text-secondary sm:block">
                Date <span className="font-normal text-slate-500">(preferred)</span>
                <input className={inputClass} type="date" name="date" />
              </label>

              <label className="hidden text-sm font-semibold text-secondary sm:block">
                Time <span className="font-normal text-slate-500">(preferred)</span>
                <input className={inputClass} type="time" name="time" />
              </label>

              <label className="hidden text-sm font-semibold text-secondary sm:col-span-2 sm:block">
                Message <span className="font-normal text-slate-500">(optional)</span>
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  placeholder="Tell us anything we should know before contacting you."
                ></textarea>
              </label>

              {formStatus.message && (
                <p
                  className={`rounded-lg px-4 py-3 text-sm sm:col-span-2 ${
                    formStatus.type === "success"
                      ? "bg-primary/10 text-primary"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
