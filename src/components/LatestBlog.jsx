import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  blogExcerpt,
  fetchLatestBlogPost,
  formatBlogDate,
  getLatestBlogPost,
} from "../data/blog";

export default function LatestBlog() {
  const [post, setPost] = useState(() => getLatestBlogPost());

  useEffect(() => {
    let active = true;

    fetchLatestBlogPost()
      .then((latestPost) => {
        if (active && latestPost) {
          setPost(latestPost);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  if (!post) {
    return null;
  }

  return (
    <section className="bg-secondary/5 py-10 lg:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Latest Blog
            </p>
            <h2 className="mt-2 text-2xl font-bold text-secondary md:text-3xl">
              Skin Care Notes From Riverflow
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
          >
            View all posts
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
        </div>

        <article className="grid overflow-hidden rounded-lg border border-accent/20 bg-background shadow-sm md:grid-cols-[0.9fr_1.1fr]">
          {post.image ? (
            <Link to={`/blog/${post.slug}`} className="block bg-secondary/5">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="h-64 w-full object-cover md:h-full"
                loading="lazy"
              />
            </Link>
          ) : null}

          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true"></span>
              <time dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
            <h3 className="text-2xl font-bold leading-tight text-secondary md:text-3xl">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {blogExcerpt(post, 220)}
            </p>
            <div className="mt-6">
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                Read full content
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
