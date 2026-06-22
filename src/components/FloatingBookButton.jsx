import { SITE_CONFIG } from "../data/site";

export default function FloatingBookButton() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-accent/30 bg-background/95 p-3 shadow-[0_-12px_30px_rgba(15,45,82,0.18)] backdrop-blur sm:hidden">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label={`Call Riverflow Laser at ${SITE_CONFIG.phoneDisplay}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
              fill="currentColor"
            />
          </svg>
          <span>Call Now</span>
        </a>
        <a
          href={SITE_CONFIG.bookingUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Book a Riverflow Laser appointment"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          <CalendarIcon />
          <span>Book</span>
        </a>
      </div>

      <a
        href={SITE_CONFIG.bookingUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Book Now"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,45,82,0.28)] transition hover:-translate-y-0.5 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:inline-flex"
      >
        <CalendarIcon />
        <span>Book Now</span>
      </a>
    </>
  );
}

function CalendarIcon() {
  return (
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
  );
}
