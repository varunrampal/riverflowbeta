import {
  getBlogPostBySlug,
  getPublishedBlogPosts,
  normalizeBlogPost,
  sortBlogPosts,
} from "../data/blog";

const pipelineUrl = () => {
  const databaseUrl = process.env.TURSO_DATABASE_URL?.trim();
  if (!databaseUrl || !process.env.TURSO_AUTH_TOKEN?.trim()) return "";
  const base = databaseUrl.replace(/^libsql:\/\//, "https://").replace(/\/$/, "");
  return base.endsWith("/v2/pipeline") ? base : `${base}/v2/pipeline`;
};

const textArg = (value) => ({ type: "text", value: String(value) });

const query = async (sql, args = []) => {
  const url = pipelineUrl();
  if (!url) return null;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TURSO_AUTH_TOKEN.trim()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      requests: [
        { type: "execute", stmt: { sql, args: args.map(textArg) } },
        { type: "close" },
      ],
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error("Blog metadata query failed.");
  const data = await response.json();
  const result = data?.results?.[0]?.response?.result;
  if (!result) return [];

  const columns = (result.cols || []).map((column) =>
    typeof column === "string" ? column : column.name,
  );

  return (result.rows || []).map((row) => {
    const post = {};
    row.forEach((cell, index) => {
      post[columns[index]] = cell?.type === "null" ? null : cell?.value;
    });
    return normalizeBlogPost({
      ...post,
      imageAlt: post.image_alt,
      publishedAt: post.published_at,
    });
  });
};

const selectColumns =
  "id, slug, title, excerpt, content, image, image_alt, category, author, published_at, status";

export const getServerPublishedBlogPosts = async () => {
  try {
    const posts = await query(
      `SELECT ${selectColumns} FROM blog_posts WHERE status = ? ORDER BY published_at DESC`,
      ["published"],
    );
    if (posts?.length) return sortBlogPosts(posts);
  } catch {
    // Local posts keep metadata and the sitemap available during database outages.
  }
  return getPublishedBlogPosts();
};

export const getServerBlogPostBySlug = async (slug) => {
  try {
    const posts = await query(
      `SELECT ${selectColumns} FROM blog_posts WHERE slug = ? AND status = ? LIMIT 1`,
      [slug, "published"],
    );
    if (posts?.[0]) return posts[0];
  } catch {
    // Fall through to the versioned posts.
  }
  return getBlogPostBySlug(slug);
};
