"use client";

import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  blogExcerpt,
  formatBlogDate,
} from "../data/blog";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <section className="border-b border-accent/25 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Blog
          </p>
          <h1 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
           Laser and Skincare Advice From Our Langley Clinic
          </h1>
          <p className="mt-3 max-w-2xl text-slate-500">
            Treatment notes, skin care guidance, and clinic updates from
            Riverflow Laser & Skin Clinic.
          </p>
        </div>
      </section>

      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto max-w-6xl px-4">
          {posts.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
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
                          width="600"
                          height="360"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
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
                No blog posts published yet.
              </h2>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
