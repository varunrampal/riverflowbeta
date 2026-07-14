import { SITE_CONFIG } from "../data/site";

const Icon = ({ children }) => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-accent"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export default function TopBar() {
  const { address } = SITE_CONFIG;
  const addressText = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;

  return (
    <div className="bg-secondary text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2">
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition hover:text-accent"
          aria-label={`View ${addressText} on Google Maps`}
        >
          <Icon>
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </Icon>
          <span>{addressText}</span>
        </a>

        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex items-center gap-2 transition hover:text-accent"
        >
          <Icon>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
          </Icon>
          <span>{SITE_CONFIG.phoneDisplay}</span>
        </a>

        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center gap-2 transition hover:text-accent"
        >
          <Icon>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </Icon>
          <span>{SITE_CONFIG.email}</span>
        </a>
      </div>
    </div>
  );
}
