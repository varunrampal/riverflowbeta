import hydraFacialImage from "../assets/images/services/HydraFacial.jpg";
import microneedlingImage from "../assets/images/services/microneedling.jpg";
import skincareProductsImage from "../assets/images/services/skincareproducts.jpg";

const BLOG_API_URL = "/api/blog";

export const BLOG_POSTS = [
  {
    id: "skin-recovery-after-seasonal-dryness",
    slug: "skin-recovery-after-seasonal-dryness",
    title: "A Simple Skin Recovery Plan After Seasonal Dryness",
    excerpt:
      "Hydration, gentle exfoliation, and a consistent treatment rhythm can help tired skin look smooth and comfortable again.",
    content: `Seasonal dryness can leave skin feeling tight, textured, and less responsive to everyday products. A simple recovery plan starts with calming the barrier first, then adding professional exfoliation or hydration once the skin feels settled.

For many clients, a HydraFacial or customized facial is a useful reset because it cleanses, exfoliates, extracts, and hydrates in one visit. The goal is not to overwhelm the skin. It is to remove buildup, restore comfort, and make at-home products work more effectively.

Between appointments, keep your routine steady. Use a gentle cleanser, a hydrating serum, moisturizer, and daily SPF. If your skin is sensitive, introduce stronger actives slowly and ask your provider before combining exfoliating products with in-clinic treatments.`,
    image: hydraFacialImage,
    imageAlt: "HydraFacial treatment room at Riverflow Laser and Skin Clinic",
    category: "Skin Care",
    author: "Riverflow Team",
    publishedAt: "2026-06-20",
    status: "published",
  },
  {
    id: "microneedling-texture-and-glow",
    slug: "microneedling-texture-and-glow",
    title: "How Microneedling Supports Smoother-Looking Skin",
    excerpt:
      "Microneedling can support collagen renewal for clients focused on texture, fine lines, and a more even-looking complexion.",
    content: `Microneedling creates controlled micro-channels in the skin to support the body's natural repair response. Over time, that response can help improve the appearance of uneven texture, fine lines, and post-acne marks.

The best plan depends on your skin history, goals, and current routine. Some clients benefit from a series of treatments spaced several weeks apart, while others use microneedling as part of a broader skin rejuvenation plan.

After treatment, simple aftercare matters. Avoid harsh exfoliation, protect your skin from sun exposure, and use the products recommended by your provider while your skin is recovering.`,
    image: microneedlingImage,
    imageAlt: "Microneedling treatment supplies for skin rejuvenation",
    category: "Treatments",
    author: "Riverflow Team",
    publishedAt: "2026-06-12",
    status: "published",
  },
  {
    id: "choosing-skincare-products",
    slug: "choosing-skincare-products",
    title: "Choosing Skincare Products Between Clinic Visits",
    excerpt:
      "A focused at-home routine helps maintain results without crowding your skin with too many active ingredients at once.",
    content: `A strong at-home routine does not need to be complicated. Most clients do best with a cleanser, moisturizer, SPF, and one or two targeted products chosen for their skin goals.

Product choice should match both your skin type and your treatment plan. For example, clients preparing for peels or laser treatments may need to pause certain exfoliating or retinoid products before their appointment.

When in doubt, bring your current products to your consultation. Your provider can help you decide what to keep, what to simplify, and what to introduce gradually.`,
    image: skincareProductsImage,
    imageAlt: "Professional skincare products used at Riverflow Laser and Skin Clinic",
    category: "Products",
    author: "Riverflow Team",
    publishedAt: "2026-06-01",
    status: "published",
  },
];

export const cleanBlogText = (value = "") =>
  String(value).replace(/\s+/g, " ").trim();

export const createBlogSlug = (value = "") => {
  const slug = String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "blog-post";
};

export const makeUniqueBlogSlug = (value, posts = [], currentId = "") => {
  const baseSlug = createBlogSlug(value);
  let nextSlug = baseSlug;
  let index = 2;

  while (
    posts.some(
      (post) => post.slug === nextSlug && String(post.id) !== String(currentId),
    )
  ) {
    nextSlug = `${baseSlug}-${index}`;
    index += 1;
  }

  return nextSlug;
};

export const sortBlogPosts = (posts = []) =>
  [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    return dateB - dateA;
  });

export const blogExcerpt = (post = {}, maxLength = 160) => {
  const text = cleanBlogText(post.excerpt || post.content || "");

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3).replace(/\s+\S*$/, "")}...`;
};

export const normalizeBlogPost = (post = {}) => {
  const title = cleanBlogText(post.title) || "Untitled blog post";
  const content = String(post.content || "").trim();

  return {
    id: String(post.id || `${Date.now()}`),
    slug: createBlogSlug(post.slug || title),
    title,
    excerpt: cleanBlogText(post.excerpt || blogExcerpt({ content }, 180)),
    content,
    image: post.image || "",
    imageAlt: cleanBlogText(post.imageAlt || title),
    category: cleanBlogText(post.category || "Skin Care"),
    author: cleanBlogText(post.author || "Riverflow Team"),
    publishedAt:
      post.publishedAt || new Date().toISOString().slice(0, 10),
    status: post.status === "draft" ? "draft" : "published",
  };
};

export const getBlogPosts = () => {
  return sortBlogPosts(BLOG_POSTS);
};

export const getPublishedBlogPosts = (posts = getBlogPosts()) =>
  sortBlogPosts(posts).filter((post) => post.status === "published");

export const getLatestBlogPost = () => getPublishedBlogPosts()[0] || null;

export const getBlogPostBySlug = (slug) =>
  getPublishedBlogPosts().find((post) => post.slug === slug) || null;

const parseApiResponse = async (response) => {
  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    throw new Error("Blog API did not return JSON.");
  }

  if (!response.ok || data?.ok === false) {
    throw new Error(data?.error || "Blog API request failed.");
  }

  return data;
};

export const blogApiRequest = async (action, options = {}) => {
  const { query = {}, ...requestOptions } = options;
  const params = new URLSearchParams({ action });

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });

  const response = await fetch(`${BLOG_API_URL}?${params.toString()}`, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(requestOptions.headers || {}),
    },
    ...requestOptions,
    body:
      requestOptions.body && typeof requestOptions.body !== "string"
        ? JSON.stringify(requestOptions.body)
        : requestOptions.body,
  });

  return parseApiResponse(response);
};

export const fetchPublishedBlogPosts = async () => {
  const data = await blogApiRequest("list");
  return sortBlogPosts((data.posts || []).map(normalizeBlogPost));
};

export const fetchLatestBlogPost = async () => {
  const posts = await fetchPublishedBlogPosts();
  return posts[0] || null;
};

export const fetchBlogPostBySlug = async (slug) => {
  const data = await blogApiRequest("post", { query: { slug } });
  return data.post ? normalizeBlogPost(data.post) : null;
};

export const fetchAdminBlogPosts = async () => {
  const data = await blogApiRequest("all");
  return sortBlogPosts((data.posts || []).map(normalizeBlogPost));
};

export const saveBlogPostToApi = async (post) => {
  const data = await blogApiRequest("save", {
    method: "POST",
    body: { post: normalizeBlogPost(post) },
  });
  return normalizeBlogPost(data.post);
};

export const deleteBlogPostFromApi = async (id) => {
  await blogApiRequest("delete", {
    method: "POST",
    body: { id },
  });
};

export const loginToBlogAdmin = async (password) => {
  const data = await blogApiRequest("login", {
    method: "POST",
    body: { password },
  });
  return Boolean(data.authenticated);
};

export const logoutFromBlogAdmin = async () => {
  await blogApiRequest("logout", { method: "POST", body: {} });
};

export const getBlogAdminSession = async () => {
  const data = await blogApiRequest("session");
  return Boolean(data.authenticated);
};

export const formatBlogDate = (dateValue) => {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const blogReadingTime = (content = "") => {
  const words = cleanBlogText(content).split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
};

export const blogParagraphs = (content = "") =>
  String(content)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
