import { SITE_CONFIG } from "../data/site";
import { absoluteUrl } from "./seo";

export const pageMetadata = ({ title, description, path, image = SITE_CONFIG.socialImage }) => {
  const titleText = typeof title === "string" ? title : title.absolute;
  const fullTitle = titleText.includes("Riverflow")
    ? titleText
    : `${titleText} | Riverflow Laser`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: SITE_CONFIG.shortName,
      locale: "en_CA",
      images: [{ url: imageUrl, alt: SITE_CONFIG.shortName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
};
