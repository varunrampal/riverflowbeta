import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const indexPath = path.join(distDir, "index.html");

const siteUrl = "https://riverflowlaser.com";
const siteName = "Riverflow Laser & Skin Clinic";
const businessId = `${siteUrl}/#business`;
const websiteId = `${siteUrl}/#website`;
const address = {
  "@type": "PostalAddress",
  streetAddress: "Unit 108 - 19705 56 Avenue",
  addressLocality: "Langley",
  addressRegion: "BC",
  postalCode: "V3A 3X7",
  addressCountry: "CA",
};
const areaServed = {
  "@type": "City",
  name: "Langley",
  address: {
    "@type": "PostalAddress",
    addressRegion: "BC",
    addressCountry: "CA",
  },
};

const treatments = [
  {
    slug: "facial",
    title: "Signature Facial Treatment",
    description:
      "Deep cleansing, exfoliation, hydration, and glow-focused facials at Riverflow Laser & Skin Clinic in Langley, BC.",
  },
  {
    slug: "laserhairremoval",
    title: "Laser Hair Removal",
    description:
      "Laser hair removal in Langley, BC for long-term hair reduction and smooth, comfortable skin.",
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    description:
      "Microneedling in Langley, BC to improve skin tone, texture, fine lines, and collagen production.",
  },
  {
    slug: "chemicalpeels",
    title: "Chemical Peels",
    description:
      "Chemical peels in Langley, BC to reveal smoother, brighter skin and support acne, wrinkles, and pigmentation concerns.",
  },
  {
    slug: "hairservices",
    title: "Hair Services",
    description:
      "Hair services in Langley, BC with styling, cutting, and treatments tailored to your look.",
  },
  {
    slug: "hydrafacial",
    title: "HydraFacial",
    description:
      "HydraFacial in Langley, BC to cleanse, extract, and hydrate for radiant, refreshed skin.",
  },
  {
    slug: "scalp",
    title: "Scalp Therapy",
    description:
      "Scalp therapy in Langley, BC with soothing treatments that support scalp health and relaxation.",
  },
  {
    slug: "oxygenofacial",
    title: "OxyGeneo Facial",
    description:
      "OxyGeneo facial in Langley, BC combining exfoliation, oxygenation, and infusion for smoother-looking skin.",
  },
  {
    slug: "acne",
    title: "Acne Treatment",
    description:
      "Acne treatment in Langley, BC to help reduce acne inflammation and support clearer-looking skin.",
  },
  {
    slug: "antiaging",
    title: "Anti-Aging Treatments",
    description:
      "Anti-aging treatments in Langley, BC to reduce the appearance of fine lines and support a radiant complexion.",
  },
  {
    slug: "pigmentation",
    title: "Pigmentation Treatments",
    description:
      "Pigmentation treatments in Langley, BC for dark spots, sun damage, uneven tone, and clearer-looking skin.",
  },
  {
    slug: "skinrejuvenation",
    title: "Skin Rejuvenation",
    description:
      "Skin rejuvenation in Langley, BC to refresh tone, texture, collagen, and overall radiance.",
  },
];

const treatmentBySlug = Object.fromEntries(
  treatments.map((treatment) => [treatment.slug, treatment]),
);

const blogPosts = [
  {
    slug: "skin-recovery-after-seasonal-dryness",
    title: "A Simple Skin Recovery Plan After Seasonal Dryness",
    description:
      "Hydration, gentle exfoliation, and a consistent treatment rhythm can help tired skin look smooth and comfortable again.",
    publishedAt: "2026-06-20",
    image: `${siteUrl}/assets/riverflow-logo.png`,
  },
  {
    slug: "microneedling-texture-and-glow",
    title: "How Microneedling Supports Smoother-Looking Skin",
    description:
      "Microneedling can support collagen renewal for clients focused on texture, fine lines, and a more even-looking complexion.",
    publishedAt: "2026-06-12",
    image: `${siteUrl}/assets/riverflow-logo.png`,
  },
  {
    slug: "choosing-skincare-products",
    title: "Choosing Skincare Products Between Clinic Visits",
    description:
      "A focused at-home routine helps maintain results without crowding your skin with too many active ingredients at once.",
    publishedAt: "2026-06-01",
    image: `${siteUrl}/assets/riverflow-logo.png`,
  },
];

const relatedTreatmentSlugs = {
  facial: ["hydrafacial", "chemicalpeels", "skinrejuvenation"],
  laserhairremoval: ["hydrafacial", "skinrejuvenation", "antiaging"],
  microneedling: ["skinrejuvenation", "chemicalpeels", "pigmentation"],
  chemicalpeels: ["acne", "pigmentation", "hydrafacial"],
  hairservices: ["facial", "hydrafacial", "scalp"],
  hydrafacial: ["facial", "oxygenofacial", "skinrejuvenation"],
  scalp: ["hairservices", "facial", "hydrafacial"],
  oxygenofacial: ["hydrafacial", "facial", "skinrejuvenation"],
  acne: ["chemicalpeels", "hydrafacial", "pigmentation"],
  antiaging: ["skinrejuvenation", "microneedling", "hydrafacial"],
  pigmentation: ["chemicalpeels", "skinrejuvenation", "microneedling"],
  skinrejuvenation: ["antiaging", "microneedling", "pigmentation"],
};

const defaultContextLinks = [
  { href: "/treatments/laserhairremoval", label: "laser hair removal" },
  { href: "/treatments/hydrafacial", label: "HydraFacial" },
  { href: "/treatments/skinrejuvenation", label: "skin rejuvenation" },
];

const pages = [
  {
    path: "/",
    title:
      "Riverflow Laser & Skin Clinic Langley | Laser Hair Removal & Skin Care",
    h1: "Riverflow Laser & Skin Clinic Langley",
    description:
      "Riverflow Laser & Skin Clinic in Langley offers laser hair removal, HydraFacial, facials, microneedling, acne care, and skin rejuvenation.",
  },
  {
    path: "/treatments",
    title: "Laser & Skin Treatments in Langley, BC | Riverflow Laser",
    h1: "Laser & Skin Treatments in Langley, BC",
    description:
      "Explore laser and skin treatments in Langley, including laser hair removal, HydraFacial, facials, microneedling, chemical peels, and acne care.",
  },
  {
    path: "/about",
    title: "About Riverflow Laser & Skin Clinic in Langley, BC",
    h1: "About Riverflow Laser & Skin Clinic",
    description:
      "Learn about Riverflow Laser & Skin Clinic, a Langley skin and laser clinic offering personalized treatment plans, certified technology, and advanced aesthetic care.",
  },
  {
    path: "/team",
    title: "Meet the Riverflow Laser & Skin Clinic Team | Langley, BC",
    h1: "Meet the Riverflow Laser & Skin Clinic Team",
    description:
      "Meet the Riverflow Laser & Skin Clinic team in Langley, BC, offering experienced, caring support for laser, cosmetic, injectable, and skin health treatments.",
  },
  {
    path: "/faq",
    title: "Laser Hair Removal FAQs in Langley, BC | Riverflow Laser",
    h1: "Laser Hair Removal FAQs",
    description:
      "Read answers to common laser hair removal questions, including safety, preparation, side effects, treatment areas, cost, and expected results.",
  },
  {
    path: "/contact",
    title: "Contact Riverflow Laser & Skin Clinic | Langley, BC",
    h1: "Contact Riverflow Laser & Skin Clinic",
    description:
      "Contact Riverflow Laser & Skin Clinic in Langley, BC. Call 604.621.8311, email info@riverflowlaser.com, or visit Unit 108 - 19705 56 Avenue.",
  },
  {
    path: "/make-appointment",
    title: "Make an Appointment Inquiry | Riverflow Laser Langley",
    h1: "Make an Appointment Inquiry",
    description:
      "Send an appointment inquiry to Riverflow Laser & Skin Clinic in Langley, BC for laser hair removal, facials, HydraFacial, microneedling, peels, and skin treatments.",
  },
  {
    path: "/blog",
    title: "Skin Care Blog | Riverflow Laser & Skin Clinic Langley",
    h1: "Skin Care Blog",
    description:
      "Read Riverflow Laser & Skin Clinic blog posts about laser hair removal, facials, HydraFacial, microneedling, skin care, and treatment planning.",
    blog: true,
  },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Riverflow Laser Blog`,
    h1: post.title,
    description: post.description,
    post,
  })),
  ...treatments.map((treatment) => ({
    path: `/treatments/${treatment.slug}`,
    title: `${treatment.title} in Langley, BC | Riverflow Laser`,
    h1: `${treatment.title} in Langley, BC`,
    description: treatment.description,
    treatment,
  })),
];

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const canonicalUrl = (routePath) => `${siteUrl}${routePath === "/" ? "/" : routePath}`;

const setTag = (html, pattern, replacement) =>
  pattern.test(html) ? html.replace(pattern, replacement) : html;

const contextLinksForPage = (page) => {
  if (page.treatment) {
    return (relatedTreatmentSlugs[page.treatment.slug] || ["hydrafacial", "skinrejuvenation", "facial"]).map(
      (slug) => ({
        href: `/treatments/${slug}`,
        label: treatmentBySlug[slug]?.title || slug,
      }),
    );
  }

  if (page.path === "/faq") {
    return [
      { href: "/treatments/laserhairremoval", label: "laser hair removal" },
      { href: "/treatments/acne", label: "acne treatment" },
      { href: "/treatments/pigmentation", label: "pigmentation treatments" },
    ];
  }

  if (page.path === "/make-appointment") {
    return [
      { href: "/treatments/hydrafacial", label: "HydraFacial" },
      { href: "/treatments/microneedling", label: "microneedling" },
      { href: "/treatments/antiaging", label: "anti-aging treatments" },
    ];
  }

  if (page.path === "/team") {
    return [
      { href: "/treatments/laserhairremoval", label: "laser hair removal" },
      { href: "/treatments/skinrejuvenation", label: "skin rejuvenation" },
      { href: "/treatments/pigmentation", label: "pigmentation treatments" },
    ];
  }

  if (page.path === "/contact") {
    return [
      { href: "/treatments", label: "full treatment menu" },
      { href: "/treatments/hydrafacial", label: "HydraFacial" },
      { href: "/treatments/chemicalpeels", label: "chemical peels" },
    ];
  }

  if (page.path === "/blog" || page.post) {
    return [
      { href: "/treatments/hydrafacial", label: "HydraFacial" },
      { href: "/treatments/microneedling", label: "microneedling" },
      { href: "/make-appointment", label: "consultation inquiry" },
    ];
  }

  return defaultContextLinks;
};

const contextLinksMarkup = (page) => {
  const links = contextLinksForPage(page);

  return links
    .map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`)
    .join(", ");
};

const fallbackH2ForPage = (page) => {
  if (page.path === "/") {
    return "Laser Hair Removal and Skin Care in Langley";
  }

  if (page.path === "/treatments") {
    return "Laser and Skin Treatment Services";
  }

  if (page.treatment) {
    return `${page.treatment.title} Details and Booking`;
  }

  if (page.path === "/blog") {
    return "Skin Care Articles and Treatment Notes";
  }

  if (page.post) {
    return "Riverflow Laser Blog Article";
  }

  return `${page.h1} Information`;
};

const businessSchema = () => ({
  "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": businessId,
  name: "Riverflow Laser & Skin Clinic Inc",
  alternateName: siteName,
  description:
    "Riverflow Laser & Skin Clinic in Langley offers laser hair removal, HydraFacial, facials, microneedling, acne care, and skin rejuvenation.",
  url: `${siteUrl}/`,
  image: `${siteUrl}/assets/riverflow-logo.png`,
  logo: `${siteUrl}/assets/riverflow-logo.png`,
  telephone: "+16046218311",
  email: "info@riverflowlaser.com",
  priceRange: "$$",
  address,
  areaServed,
  sameAs: [
    "https://www.facebook.com/riverflowlaser/",
    "https://www.instagram.com/riverflowlaser/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laser and skin treatments",
    itemListElement: treatments.map((treatment) => ({
      "@type": "Offer",
      itemOffered: {
        "@id": `${siteUrl}/treatments/${treatment.slug}#service`,
      },
    })),
  },
});

const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: "Riverflow Laser & Skin Clinic Inc",
  publisher: {
    "@id": businessId,
  },
});

const webPageSchema = (page) => ({
  "@type": "WebPage",
  "@id": `${canonicalUrl(page.path)}#webpage`,
  url: canonicalUrl(page.path),
  name: page.h1,
  description: page.description,
  isPartOf: {
    "@id": websiteId,
  },
  about: {
    "@id": businessId,
  },
});

const serviceSchema = (treatment) => ({
  "@type": "Service",
  "@id": `${siteUrl}/treatments/${treatment.slug}#service`,
  name: treatment.title,
  serviceType: treatment.title,
  description: treatment.description,
  url: `${siteUrl}/treatments/${treatment.slug}`,
  provider: {
    "@id": businessId,
  },
  areaServed,
});

const itemListSchema = () => ({
  "@type": "ItemList",
  name: "Riverflow Laser & Skin Clinic Treatments",
  itemListElement: treatments.map((treatment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: treatment.title,
    description: treatment.description,
    url: `${siteUrl}/treatments/${treatment.slug}`,
  })),
});

const blogItemListSchema = () => ({
  "@type": "ItemList",
  name: "Riverflow Laser & Skin Clinic Blog",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    description: post.description,
    url: `${siteUrl}/blog/${post.slug}`,
  })),
});

const blogPostSchema = (post) => ({
  "@type": "BlogPosting",
  "@id": `${siteUrl}/blog/${post.slug}#blogposting`,
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  author: {
    "@type": "Organization",
    name: "Riverflow Laser & Skin Clinic Inc",
  },
  publisher: {
    "@id": businessId,
  },
  mainEntityOfPage: {
    "@id": `${siteUrl}/blog/${post.slug}#webpage`,
  },
});

const structuredDataForPage = (page) => {
  const graph = [businessSchema(), websiteSchema(), webPageSchema(page)];

  if (page.path === "/" || page.path === "/treatments") {
    graph.push(itemListSchema(), ...treatments.map(serviceSchema));
  }

  if (page.treatment) {
    graph.push(serviceSchema(page.treatment));
  }

  if (page.path === "/blog") {
    graph.push(blogItemListSchema());
  }

  if (page.post) {
    graph.push(blogPostSchema(page.post));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

const serializeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const structuredDataScript = (page) =>
  `<script id="riverflow-structured-data" type="application/ld+json">${serializeJsonLd(
    structuredDataForPage(page),
  )}</script>`;

const fallbackMarkup = ({ h1, description, path: routePath }) => {
  const fallbackPage = {
    h1,
    description,
    path: routePath,
    treatment: routePath.startsWith("/treatments/")
      ? treatmentBySlug[routePath.split("/").pop()]
      : null,
    post: routePath.startsWith("/blog/")
      ? blogPosts.find((post) => post.slug === routePath.split("/").pop())
      : null,
  };

  return `<!--seo-fallback-start-->
      <main>
        <section>
          <p>${siteName}</p>
          <h1>${escapeHtml(h1)}</h1>
          <h2>${escapeHtml(fallbackH2ForPage(fallbackPage))}</h2>
          <p>${escapeHtml(description)}</p>
          <p>Related services: ${contextLinksMarkup(fallbackPage)}.</p>
          <a href="/make-appointment${routePath.startsWith("/treatments/") ? `?subject=${encodeURIComponent(h1.replace(" in Langley, BC", ""))}` : ""}">Make an Inquiry</a>
        </section>
      </main>
      <!--seo-fallback-end-->`;
};

const renderRouteHtml = (baseHtml, page) => {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const url = canonicalUrl(page.path);

  let html = baseHtml;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = setTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = setTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = setTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = setTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = setTag(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = setTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = html.replace(
    /<script\s+id="riverflow-structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    () => structuredDataScript(page),
  );
  html = html.replace(
    /<!--seo-fallback-start-->[\s\S]*?<!--seo-fallback-end-->/,
    fallbackMarkup(page),
  );

  return html;
};

const writeRoute = async (page, html) => {
  if (page.path === "/") {
    await fs.writeFile(indexPath, html);
    return;
  }

  const routeDir = path.join(distDir, ...page.path.split("/").filter(Boolean));
  await fs.mkdir(routeDir, { recursive: true });
  await fs.writeFile(path.join(routeDir, "index.html"), html);
};

const baseHtml = await fs.readFile(indexPath, "utf8");

await Promise.all(
  pages.map((page) => writeRoute(page, renderRouteHtml(baseHtml, page))),
);

console.log(`Prerendered ${pages.length} route fallback pages.`);
