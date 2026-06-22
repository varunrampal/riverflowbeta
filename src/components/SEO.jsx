import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG } from "../data/site";
import { absoluteUrl, cleanText } from "../utils/seo";

const managedBy = "riverflow-seo";

const upsertMeta = (attribute, value, content) => {
  if (!content) {
    return;
  }

  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
  element.dataset.managedBy = managedBy;
};

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  element.dataset.managedBy = managedBy;
};

const upsertStructuredData = (serializedData) => {
  const id = "riverflow-structured-data";
  let element = document.getElementById(id);

  if (!serializedData) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = serializedData;
};

const serializeStructuredData = (structuredData) => {
  const entries = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : [structuredData].filter(Boolean);

  if (!entries.length) {
    return "";
  }

  return JSON.stringify(entries.length === 1 ? entries[0] : entries);
};

export default function SEO({
  title = SITE_CONFIG.defaultTitle,
  description = SITE_CONFIG.defaultDescription,
  keywords = SITE_CONFIG.keywords,
  canonicalPath,
  image = SITE_CONFIG.logoPath,
  robots = "index, follow",
  type = "website",
  structuredData,
}) {
  const location = useLocation();
  const canonicalUrl = absoluteUrl(canonicalPath || location.pathname || "/");
  const imageUrl = absoluteUrl(image);
  const cleanDescription = cleanText(description || SITE_CONFIG.defaultDescription);
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const structuredDataString = serializeStructuredData(structuredData);

  useEffect(() => {
    document.documentElement.lang = "en-CA";
    document.title = title;

    upsertMeta("name", "description", cleanDescription);
    upsertMeta("name", "keywords", keywordContent);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", SITE_CONFIG.name);
    upsertCanonical(canonicalUrl);

    upsertMeta("property", "og:locale", "en_CA");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_CONFIG.name);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", cleanDescription);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", `${SITE_CONFIG.shortName} logo`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", cleanDescription);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertStructuredData(structuredDataString);
  }, [
    canonicalUrl,
    cleanDescription,
    imageUrl,
    keywordContent,
    robots,
    structuredDataString,
    title,
    type,
  ]);

  return null;
}
