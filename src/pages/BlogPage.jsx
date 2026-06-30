import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  BLOG_CONCERNS,
  blogExcerpt,
  fetchPublishedBlogPosts,
  formatBlogDate,
  getPublishedBlogPosts,
} from "../data/blog";
import {
  blogItemListSchema,
  breadcrumbSchema,
  localBusinessSchema,
  webPageSchema,
} from "../utils/seo";

export default function BlogPage() {
  const [posts, setPosts] = useState(() => getPublishedBlogPosts());
  const [error, setError] = useState("");
  const [activeConcern, setActiveConcern] = useState("All");

  const availableConcerns = useMemo(
    () =>
      BLOG_CONCERNS.filter((concern) =>
        posts.some((post) => post.concerns?.includes(concern)),
      ),
    [posts],
  );

  const visiblePosts = useMemo(
    () =>
      activeConcern === "All"
        ? posts
        : posts.filter((post) => post.concerns?.includes(activeConcern)),
    [activeConcern, posts],
  );

  useEffect(() => {
    let active = true;

    fetchPublishedBlogPosts()
      .then((nextPosts) => {
        if (active) {
          setPosts(nextPosts);
          setError("");
        }
      })
      .catch(() => {
        if (active) {
          setError("Blog posts are temporarily showing from the local fallback.");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Skin Care Blog | Riverflow Laser & Skin Clinic Langley"
        description="Read Riverflow Laser & Skin Clinic blog posts about laser hair removal, facials, HydraFacial, microneedling, skin care, and treatment planning."
        canonicalPath="/blog"
        structuredData={[
          localBusinessSchema(),
          webPageSchema({
            name: "Riverflow Laser & Skin Clinic Blog",
            description:
              "Skin care and treatment articles from Riverflow Laser & Skin Clinic in Langley, BC.",
            path: "/blog",
            type: "Blog",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          blogItemListSchema(posts),
        ]}
      />

      <section className="border-b border-accent/25 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Blog
          </p>
          <h1 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
            Skin Care Blog
          </h1>
          <p className="mt-3 max-w-2xl text-slate-500">
            Treatment notes, skin care guidance, and clinic updates from
            Riverflow Laser & Skin Clinic.
          </p>
          {availableConcerns.length ? (
            <div className="mt-7 rounded-2xl border border-accent/20 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-sm font-semibold text-secondary">
                What would you like guidance with?
              </p>
              <div className="mt-3 flex flex-wrap gap-2" aria-label="Filter articles by concern">
                {["All", ...availableConcerns].map((concern) => (
                  <button
                    type="button"
                    key={concern}
                    onClick={() => setActiveConcern(concern)}
                    aria-pressed={activeConcern === concern}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeConcern === concern
                        ? "bg-primary text-white shadow-sm"
                        : "bg-secondary/5 text-secondary hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto max-w-6xl px-4">
          {error ? (
            <p className="mb-6 rounded-md bg-secondary/5 px-4 py-3 text-sm text-slate-500">
              {error}
            </p>
          ) : null}
          {visiblePosts.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="flex overflow-hidden rounded-lg border border-accent/20 bg-background shadow-sm transition hover:shadow-md"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex w-full flex-col"
                  >
                    {post.image ? (
                      <div className="h-52 overflow-hidden bg-secondary/5">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      {post.concerns?.length ? (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {post.concerns.slice(0, 2).map((concern) => (
                            <span
                              key={concern}
                              className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary"
                            >
                              {concern}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        <span>{post.category}</span>
                        <span
                          className="h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        ></span>
                        <time dateTime={post.publishedAt}>
                          {formatBlogDate(post.publishedAt)}
                        </time>
                      </div>
                      <h2 className="text-lg font-semibold leading-snug text-secondary">
                        {post.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {blogExcerpt(post)}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read full content
                        <i
                          className="fa-solid fa-arrow-right text-xs"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-accent/20 bg-secondary/5 p-8 text-center">
              <h2 className="text-xl font-semibold text-secondary">
                {posts.length
                  ? "No articles match that concern yet."
                  : "No blog posts published yet."}
              </h2>
              {posts.length ? (
                <button
                  type="button"
                  onClick={() => setActiveConcern("All")}
                  className="mt-4 text-sm font-semibold text-primary hover:text-secondary"
                >
                  View all articles
                </button>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
