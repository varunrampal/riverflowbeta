import "../index.css";
import Script from "next/script";
import { SITE_CONFIG } from "../data/site";
import { localBusinessSchema, websiteSchema } from "../utils/seo";

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: SITE_CONFIG.defaultTitle, template: "%s | Riverflow Laser" },
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.keywords,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: { type: "website", locale: "en_CA", siteName: SITE_CONFIG.shortName },
};

export default function RootLayout({ children }) {
  const schemas = [localBusinessSchema(), websiteSchema()];
  return <html lang="en-CA"><body>{children}{schemas.map((schema, index) => (
    <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ))}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-DZL34NMBT9"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DZL34NMBT9');`}
    </Script>
  </body></html>;
}
