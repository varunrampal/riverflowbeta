import HomePage from "../views/HomePage";
import { SITE_CONFIG } from "../data/site";
import { getServerPublishedBlogPosts } from "../lib/blogServer";
import { pageMetadata } from "../utils/metadata";
import { treatmentServiceSchema, treatmentsItemListSchema, webPageSchema } from "../utils/seo";
import { TREATMENTS } from "../data/treatments";
export const metadata = pageMetadata({ title: { absolute: SITE_CONFIG.defaultTitle }, description: SITE_CONFIG.defaultDescription, path: "/" });
export const revalidate = 3600;

export default async function Page() {
  const posts = await getServerPublishedBlogPosts();
  const schemas = [
    webPageSchema({ name: "Riverflow Laser & Skin Clinic Langley", description: SITE_CONFIG.defaultDescription, path: "/" }),
    treatmentsItemListSchema(Object.values(TREATMENTS)),
    ...Object.values(TREATMENTS).map(treatmentServiceSchema),
  ];
  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <HomePage latestPost={posts[0] || null} />
  </>;
}
