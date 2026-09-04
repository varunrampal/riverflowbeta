import { TREATMENTS } from "../data/treatments";
import { SITE_CONFIG } from "../data/site";
import { getServerPublishedBlogPosts } from "../lib/blogServer";

export const revalidate = 3600;

export default async function sitemap() {
  const paths = [
    "",
    "/about",
    "/team",
    "/treatments",
    "/blog",
    "/gallery",
    "/faq",
    "/contact",
    "/make-appointment",
    "/aesthetic-simulator",
    ...Object.keys(TREATMENTS).map((slug) => `/treatments/${slug}`),
  ];
  const posts = await getServerPublishedBlogPosts();

  return [
    ...paths.map((path) => ({ url: `${SITE_CONFIG.url}${path}` })),
    ...posts.map((post) => ({
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
    })),
  ];
}
