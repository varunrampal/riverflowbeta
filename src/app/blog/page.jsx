import BlogPage from "../../views/BlogPage";
import { getServerPublishedBlogPosts } from "../../lib/blogServer";
import { pageMetadata } from "../../utils/metadata";
import { blogItemListSchema, breadcrumbSchema, webPageSchema } from "../../utils/seo";

export const metadata = pageMetadata({ title: "Laser & Skincare Advice from Our Langley Clinic", description: "Read practical guidance from Riverflow in Langley about laser hair removal, facials, microneedling, skincare preparation and aftercare.", path: "/blog" });
export const revalidate = 3600;

export default async function Page() {
  const posts = await getServerPublishedBlogPosts();
  const schemas = [
    webPageSchema({ name: "Riverflow Laser & Skin Clinic Blog", description: metadata.description, path: "/blog", type: "Blog" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
    blogItemListSchema(posts),
  ];
  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <BlogPage />
  </>;
}
