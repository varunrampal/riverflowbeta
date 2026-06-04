import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { submitClinicForm } from "../utils/formSubmit";

const inputClass =
  "mt-2 w-full rounded-lg border border-accent/30 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function MakeAppointmentPage() {
  const [searchParams] = useSearchParams();
  const subjectFromQuery = searchParams.get("subject") || "";
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
        _subject: `Riverflow Appointment Inquiry: ${subject}`,
      });

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
              to confirm availability.
            </p>
          </div>

          <div className="grid gap-8 rounded-2xl border border-accent/25 bg-background p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Appointment details
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Fill out the form and include the treatment you are interested
                  in. We will reply within 24-48 hours.
                </p>
              </div>

              <div className="rounded-xl bg-secondary px-5 py-4 text-white">
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

            <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
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
                Email
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
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

              <label className="text-sm font-semibold text-secondary">
                Date
                <input className={inputClass} type="date" name="date" required />
              </label>

              <label className="text-sm font-semibold text-secondary">
                Time
                <input className={inputClass} type="time" name="time" required />
              </label>

              <label className="text-sm font-semibold text-secondary sm:col-span-2">
                Message
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  placeholder="Tell us anything we should know before contacting you."
                  required
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
