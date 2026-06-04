const bookingUrl =
  "https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start";

export default function FloatingBookButton() {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Book Now"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,45,82,0.28)] transition hover:-translate-y-0.5 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
      <span>Book Now</span>
    </a>
  );
}
