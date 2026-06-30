import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  blogParagraphs,
  blogReadingTime,
  fetchBlogPostBySlug,
  fetchPublishedBlogPosts,
  formatBlogDate,
  getBlogPostBySlug,
  getPublishedBlogPosts,
} from "../data/blog";
import {
  blogPostSchema,
  breadcrumbSchema,
  localBusinessSchema,
  webPageSchema,
} from "../utils/seo";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState(() => getPublishedBlogPosts());
  const [remotePost, setRemotePost] = useState(null);

  useEffect(() => {
    let active = true;
    setRemotePost(null);

    Promise.all([
      fetchPublishedBlogPosts().catch(() => null),
      fetchBlogPostBySlug(slug).catch(() => null),
    ]).then(([nextPosts, nextPost]) => {
      if (!active) {
        return;
      }

      if (nextPosts) {
        setPosts(nextPosts);
      }

      if (nextPost) {
        setRemotePost(nextPost);
      }
    });

    return () => {
      active = false;
    };
  }, [slug]);

  const post = useMemo(
    () =>
      remotePost ||
      posts.find((item) => item.slug === slug) ||
      getBlogPostBySlug(slug),
    [posts, remotePost, slug],
  );

  const relatedPosts = useMemo(
    () => posts.filter((item) => item.slug !== slug).slice(0, 3),
    [posts, slug],
  );

  if (!post) {
    return (
      <Layout>
        <SEO
          title="Blog Post Not Found | Riverflow Laser"
          description="Browse the Riverflow Laser & Skin Clinic blog for skin care and treatment articles."
          canonicalPath={`/blog/${slug || ""}`}
          robots="noindex, follow"
        />
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Blog
            </p>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Blog post not found
            </h1>
            <p className="mt-3 text-slate-500">
              The post may be unpublished or no longer available.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Back to blog
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const canonicalPath = `/blog/${post.slug}`;
  const description = post.excerpt;

  return (
    <Layout>
      <SEO
        title={`${post.title} | Riverflow Laser Blog`}
        description={description}
        canonicalPath={canonicalPath}
        image={post.image}
        type="article"
        structuredData={[
          localBusinessSchema(),
          webPageSchema({
            name: post.title,
            description,
            path: canonicalPath,
            type: "BlogPosting",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: canonicalPath },
          ]),
          blogPostSchema(post),
        ]}
      />

      <article className="bg-background">
        <section className="border-b border-accent/25">
          <div className="mx-auto max-w-4xl px-4 py-10 lg:py-14">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
            >
              <i className="fa-solid fa-arrow-left text-xs" aria-hidden="true"></i>
              Back to blog
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true"></span>
              <time dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true"></span>
              <span>{blogReadingTime(post.content)} min read</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-secondary md:text-5xl">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </section>

        {post.image ? (
          <div className="mx-auto max-w-5xl px-4 pt-10">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="max-h-[520px] w-full rounded-lg object-cover"
            />
          </div>
        ) : null}

        <section className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
          <div className="space-y-6 text-base leading-8 text-slate-700">
            {blogParagraphs(post.content).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-accent/20 bg-secondary/5 p-5">
            <h2 className="text-lg font-semibold text-secondary">
              Ready to plan your next treatment?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Book a consultation with Riverflow Laser & Skin Clinic in Langley
              and we will help match your skin goals to the right service.
            </p>
            <Link
              to="/make-appointment"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Make an inquiry
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
            </Link>
          </div>
        </section>
      </article>

      {relatedPosts.length ? (
        <section className="bg-secondary/5 py-10 lg:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-secondary">
              More From The Blog
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="overflow-hidden rounded-lg border border-accent/20 bg-background shadow-sm transition hover:shadow-md"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-secondary">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </Layout>
  );
}
