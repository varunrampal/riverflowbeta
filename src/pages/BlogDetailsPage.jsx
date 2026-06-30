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
  trackBlogEvent,
} from "../data/blog";
import { TREATMENTS } from "../data/treatments";
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
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

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
    () => {
      const currentConcerns = new Set(post?.concerns || []);

      return posts
        .filter((item) => item.slug !== slug)
        .sort((left, right) => {
          const leftMatches = (left.concerns || []).filter((item) =>
            currentConcerns.has(item),
          ).length;
          const rightMatches = (right.concerns || []).filter((item) =>
            currentConcerns.has(item),
          ).length;
          return rightMatches - leftMatches;
        })
        .slice(0, 3);
    },
    [post?.concerns, posts, slug],
  );

  const relatedTreatments = useMemo(
    () =>
      (post?.treatmentIds || [])
        .map((id) => TREATMENTS[id])
        .filter(Boolean)
        .slice(0, 3),
    [post?.treatmentIds],
  );

  useEffect(() => {
    setActiveTimelineIndex(0);

    if (!post?.id) {
      return;
    }

    const sessionKey = `riverflow-blog-view:${post.id}`;

    try {
      if (sessionStorage.getItem(sessionKey)) {
        return;
      }
      sessionStorage.setItem(sessionKey, "1");
    } catch {
      // Analytics is best-effort when browser storage is unavailable.
    }

    trackBlogEvent("view", { postId: post.id });
  }, [post?.id]);

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
            {post.concerns?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.concerns.map((concern) => (
                  <span
                    key={concern}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            ) : null}
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

          {post.reviewedBy ? (
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-accent/25 bg-background p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Content review
                </p>
                <p className="mt-1 font-semibold text-secondary">
                  Reviewed by {post.reviewedBy}
                  {post.reviewerRole ? `, ${post.reviewerRole}` : ""}
                </p>
                {post.reviewedAt ? (
                  <p className="mt-1 text-sm text-slate-500">
                    Reviewed {formatBlogDate(post.reviewedAt)} for clarity and treatment education.
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          {post.timeline?.length ? (
            <section className="mt-12" aria-labelledby="care-path-title">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Your care path
              </p>
              <h2 id="care-path-title" className="mt-2 text-2xl font-bold text-secondary">
                What the journey can look like
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use this educational timeline as a conversation starter. Your provider may adjust every step for your skin.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-[0.42fr_0.58fr]">
                <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
                  {post.timeline.map((step, index) => (
                    <button
                      type="button"
                      key={`${step.label}-${step.title}`}
                      onClick={() => setActiveTimelineIndex(index)}
                      aria-pressed={activeTimelineIndex === index}
                      className={`min-w-36 rounded-xl border px-4 py-3 text-left transition md:min-w-0 ${
                        activeTimelineIndex === index
                          ? "border-primary bg-primary text-white shadow-sm"
                          : "border-accent/25 bg-white text-secondary hover:border-primary/50"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] opacity-75">
                        {step.label || `Step ${index + 1}`}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">{step.title}</span>
                    </button>
                  ))}
                </div>
                <div className="rounded-2xl bg-secondary p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {post.timeline[activeTimelineIndex]?.label || `Step ${activeTimelineIndex + 1}`}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">
                    {post.timeline[activeTimelineIndex]?.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {post.timeline[activeTimelineIndex]?.description}
                  </p>
                </div>
              </div>
            </section>
          ) : null}

          {relatedTreatments.length ? (
            <section className="mt-12" aria-labelledby="related-treatments-title">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Explore your options
              </p>
              <h2 id="related-treatments-title" className="mt-2 text-2xl font-bold text-secondary">
                Treatments connected to this guide
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {relatedTreatments.map((treatment) => (
                  <Link
                    key={treatment.id}
                    to={`/treatments/${treatment.id}`}
                    onClick={() =>
                      trackBlogEvent("treatment_click", {
                        postId: post.id,
                        treatmentId: treatment.id,
                      })
                    }
                    className="group overflow-hidden rounded-xl border border-accent/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <img
                      src={treatment.image}
                      alt=""
                      className="h-28 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-secondary group-hover:text-primary">
                        {treatment.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {treatment.short}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-12 rounded-2xl border border-accent/20 bg-secondary/5 p-6">
            <h2 className="text-lg font-semibold text-secondary">
              Ready to plan your next treatment?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Book a consultation with Riverflow Laser & Skin Clinic in Langley
              and we will help match your skin goals to the right service.
            </p>
            <Link
              to={`/make-appointment?${new URLSearchParams({
                subject: relatedTreatments[0]?.title || post.title,
                source: "blog",
                article: post.slug,
                post: post.id,
              }).toString()}`}
              onClick={() =>
                trackBlogEvent("appointment_click", {
                  postId: post.id,
                  treatmentId: relatedTreatments[0]?.id || "",
                })
              }
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Continue with this guide
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
            </Link>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Blog content is educational and is not a diagnosis or a substitute for an in-person consultation.
            </p>
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
