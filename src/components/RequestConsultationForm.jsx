import { useState } from "react";
import { submitClinicForm } from "../utils/formSubmit";

const inputClass =
  "mt-2 w-full rounded-lg border border-accent/30 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20";

const submitToFormSubmit = async (formData) => {
  const subject = formData.get("subject") || "Consultation Request";
  return submitClinicForm({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject,
    notes: formData.get("details"),
    _subject: `Riverflow Consultation Request: ${subject}`,
  });
};

export default function RequestConsultationForm({ className = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consultationStatus, setConsultationStatus] = useState({
    type: "",
    message: "",
  });

  const handleConsultationSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setConsultationStatus({ type: "", message: "" });

    try {
      const successMessage = await submitToFormSubmit(formData);

      form.reset();
      setConsultationStatus({
        type: "success",
        message: successMessage,
      });
    } catch (error) {
      setConsultationStatus({
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
    <div
      className={`grid gap-8 rounded-2xl border border-accent/25 bg-background p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-8 ${className}`}
    >
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Request a consultation
          </p>
          <h3 className="mt-3 text-2xl font-bold text-secondary md:text-3xl">
            Tell us what you would like help with
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Share your contact details and treatment goals, and our team will
            follow up with the next available appointment options.
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

      <form
        className="grid gap-4 sm:grid-cols-2"
        onSubmit={handleConsultationSubmit}
      >
        <label className="text-sm font-semibold text-secondary">
          Your Name
          <input
            className={inputClass}
            type="text"
            name="name"
            placeholder="Your name"
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
          Phone Number
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
            placeholder="Treatment interest"
            required
          />
        </label>

        <label className="text-sm font-semibold text-secondary sm:col-span-2">
          Notes
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="details"
            placeholder="Tell us about your goals, timing, or questions."
            required
          ></textarea>
        </label>

        {consultationStatus.message && (
          <p
            className={`rounded-lg px-4 py-3 text-sm sm:col-span-2 ${
              consultationStatus.type === "success"
                ? "bg-primary/10 text-primary"
                : "bg-red-50 text-red-700"
            }`}
          >
            {consultationStatus.message}
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
  );
}
