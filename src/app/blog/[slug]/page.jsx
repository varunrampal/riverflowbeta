import BlogDetailsPage from "../../../views/BlogDetailsPage";
import { SITE_CONFIG } from "../../../data/site";
import { getServerBlogPostBySlug, getServerPublishedBlogPosts } from "../../../lib/blogServer";
import {
  absoluteUrl,
  blogPostSchema,
  breadcrumbSchema,
  webPageSchema,
} from "../../../utils/seo";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getServerBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog Post Not Found",
      robots: { index: false, follow: true },
    };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);
  const shareableImage = post.image && !post.image.startsWith("data:")
    ? post.image
    : SITE_CONFIG.socialImage;
  const image = absoluteUrl(shareableImage);
  const title = `${post.title} | Riverflow Laser Blog`;

  return {
    title: { absolute: title },
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      images: [{ url: image, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getServerBlogPostBySlug(slug);
  const posts = await getServerPublishedBlogPosts();
  const canonicalPath = `/blog/${slug}`;
  const schemas = post
    ? [
        webPageSchema({
          name: post.title,
          description: post.excerpt,
          path: canonicalPath,
          type: "BlogPosting",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: canonicalPath },
        ]),
        blogPostSchema(post),
      ]
    : [];

  return <>
    {schemas.map((schema, index) => (
      <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    ))}
    <BlogDetailsPage initialPost={post} initialPosts={posts} slug={slug} />
  </>;
}
