import { SITE_CONFIG } from "../data/site";

export const cleanText = (value = "") =>
  String(value).replace(/\s+/g, " ").trim();

export const truncateText = (value = "", maxLength = 155) => {
  const text = cleanText(value);

  if (text.length <= maxLength) {
    return text;
  }

  const shortened = text.slice(0, maxLength - 3).replace(/\s+\S*$/, "");
  return `${shortened}...`;
};

export const absoluteUrl = (pathOrUrl = "/") => {
  if (!pathOrUrl) {
    return SITE_CONFIG.url;
  }

  if (/^(https?:|data:|mailto:|tel:)/i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_CONFIG.url}${path}`;
};

export const getTreatmentDescription = (treatment) =>
  truncateText(`${treatment.short || ""} ${treatment.content || ""}`);

const addressSchema = {
  "@type": "PostalAddress",
  ...SITE_CONFIG.address,
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

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": `${SITE_CONFIG.url}/#business`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.shortName,
  description: SITE_CONFIG.defaultDescription,
  url: SITE_CONFIG.url,
  image: absoluteUrl(SITE_CONFIG.logoPath),
  logo: absoluteUrl(SITE_CONFIG.logoPath),
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  priceRange: "$$",
  address: addressSchema,
  areaServed,
  sameAs: SITE_CONFIG.sameAs,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.defaultDescription,
  publisher: {
    "@id": `${SITE_CONFIG.url}/#business`,
  },
});

export const webPageSchema = ({ name, description, path, type = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: {
    "@id": `${SITE_CONFIG.url}/#website`,
  },
  about: {
    "@id": `${SITE_CONFIG.url}/#business`,
  },
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const treatmentsItemListSchema = (treatments) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Riverflow Laser & Skin Clinic Treatments",
  itemListElement: treatments.map((treatment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: treatment.title,
    description: treatment.short,
    url: absoluteUrl(`/treatments/${treatment.id}`),
  })),
});

export const treatmentServiceSchema = (treatment) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(`/treatments/${treatment.id}`)}#service`,
  name: treatment.title,
  serviceType: treatment.title,
  description: getTreatmentDescription(treatment),
  image: absoluteUrl(treatment.image),
  url: absoluteUrl(`/treatments/${treatment.id}`),
  provider: {
    "@id": `${SITE_CONFIG.url}/#business`,
  },
  areaServed,
});

export const blogItemListSchema = (posts) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Riverflow Laser & Skin Clinic Blog",
  itemListElement: posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
  })),
});

export const blogPostSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${absoluteUrl(`/blog/${post.slug}`)}#blogposting`,
  headline: post.title,
  description: post.excerpt,
  image: post.image ? absoluteUrl(post.image) : absoluteUrl(SITE_CONFIG.logoPath),
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  author: {
    "@type": "Organization",
    name: post.author || SITE_CONFIG.name,
  },
  publisher: {
    "@id": `${SITE_CONFIG.url}/#business`,
  },
  mainEntityOfPage: {
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#webpage`,
  },
});

export const faqPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: cleanText(item.question),
    acceptedAnswer: {
      "@type": "Answer",
      text: cleanText(item.answer),
    },
  })),
});
