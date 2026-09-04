"use client";

import { useEffect } from "react";

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
  structuredData,
}) {
  const structuredDataString = serializeStructuredData(structuredData);

  useEffect(() => {
    upsertStructuredData(structuredDataString);
  }, [structuredDataString]);

  return null;
}
