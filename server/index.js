/* global Buffer, process */
import crypto from "node:crypto";
import fs from "node:fs";
import fsp from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const loadEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const contents = fs.readFileSync(filePath, "utf8");

  contents.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return;
    }

    const equalsIndex = trimmedLine.indexOf("=");

    if (equalsIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, equalsIndex).trim();
    let value = trimmedLine.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
};

loadEnvFile(path.join(rootDir, ".env"));
loadEnvFile(path.join(rootDir, ".env.local"));

const port = Number(process.env.PORT || 3000);
const sessionCookieName = "riverflow_blog_admin";
const sessionMaxAgeSeconds = 60 * 60 * 8;

const seedPosts = [
  {
    id: "skin-recovery-after-seasonal-dryness",
    slug: "skin-recovery-after-seasonal-dryness",
    title: "A Simple Skin Recovery Plan After Seasonal Dryness",
    excerpt:
      "Hydration, gentle exfoliation, and a consistent treatment rhythm can help tired skin look smooth and comfortable again.",
    content:
      "Seasonal dryness can leave skin feeling tight, textured, and less responsive to everyday products. A simple recovery plan starts with calming the barrier first, then adding professional exfoliation or hydration once the skin feels settled.\n\nFor many clients, a HydraFacial or customized facial is a useful reset because it cleanses, exfoliates, extracts, and hydrates in one visit. The goal is not to overwhelm the skin. It is to remove buildup, restore comfort, and make at-home products work more effectively.\n\nBetween appointments, keep your routine steady. Use a gentle cleanser, a hydrating serum, moisturizer, and daily SPF. If your skin is sensitive, introduce stronger actives slowly and ask your provider before combining exfoliating products with in-clinic treatments.",
    image: "/assets/riverflow-logo.png",
    imageAlt: "Riverflow Laser and Skin Clinic logo",
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
    content:
      "Microneedling creates controlled micro-channels in the skin to support the body's natural repair response. Over time, that response can help improve the appearance of uneven texture, fine lines, and post-acne marks.\n\nThe best plan depends on your skin history, goals, and current routine. Some clients benefit from a series of treatments spaced several weeks apart, while others use microneedling as part of a broader skin rejuvenation plan.\n\nAfter treatment, simple aftercare matters. Avoid harsh exfoliation, protect your skin from sun exposure, and use the products recommended by your provider while your skin is recovering.",
    image: "/assets/riverflow-logo.png",
    imageAlt: "Riverflow Laser and Skin Clinic logo",
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
    content:
      "A strong at-home routine does not need to be complicated. Most clients do best with a cleanser, moisturizer, SPF, and one or two targeted products chosen for their skin goals.\n\nProduct choice should match both your skin type and your treatment plan. For example, clients preparing for peels or laser treatments may need to pause certain exfoliating or retinoid products before their appointment.\n\nWhen in doubt, bring your current products to your consultation. Your provider can help you decide what to keep, what to simplify, and what to introduce gradually.",
    image: "/assets/riverflow-logo.png",
    imageAlt: "Riverflow Laser and Skin Clinic logo",
    category: "Products",
    author: "Riverflow Team",
    publishedAt: "2026-06-01",
    status: "published",
  },
];

const json = (res, status, payload, headers = {}) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  res.end(body);
};

const readRequestJson = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > 6_500_000) {
        reject(new Error("Request body is too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON body."));
      }
    });
    req.on("error", reject);
  });

const requireEnv = (name) => {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
};

const tursoPipelineUrl = () => {
  const url = requireEnv("TURSO_DATABASE_URL")
    .replace(/^libsql:\/\//, "https://")
    .replace(/\/$/, "");

  return url.endsWith("/v2/pipeline") ? url : `${url}/v2/pipeline`;
};

const tursoArg = (value) => {
  if (value === null || value === undefined) {
    return { type: "null" };
  }

  if (Number.isInteger(value)) {
    return { type: "integer", value: String(value) };
  }

  if (typeof value === "number") {
    return { type: "float", value: String(value) };
  }

  return { type: "text", value: String(value) };
};

const statement = (sql, args = []) => ({
  type: "execute",
  stmt: {
    sql,
    args: args.map(tursoArg),
  },
});

const tursoRequest = async (requests) => {
  const response = await fetch(tursoPipelineUrl(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requireEnv("TURSO_AUTH_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requests }),
  });
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Turso request failed.");
  }

  for (const result of data?.results || []) {
    if (result.type !== "ok") {
      throw new Error(result.error?.message || "Turso query failed.");
    }
  }

  return data;
};

const executeSql = async (sql, args = []) =>
  tursoRequest([statement(sql, args), { type: "close" }]);

const executeResult = (data) => data?.results?.[0]?.response?.result || {};

const cellValue = (cell) => {
  if (!cell || cell.type === "null") {
    return null;
  }

  if (Object.hasOwn(cell, "value")) {
    return cell.value;
  }

  if (Object.hasOwn(cell, "base64")) {
    return Buffer.from(cell.base64, "base64").toString("utf8");
  }

  return null;
};

const normalizePostForOutput = (post) => ({
  id: String(post.id || ""),
  slug: String(post.slug || ""),
  title: String(post.title || ""),
  excerpt: String(post.excerpt || ""),
  content: String(post.content || ""),
  image: String(post.image || ""),
  imageAlt: String(post.imageAlt || post.image_alt || ""),
  category: String(post.category || "Skin Care"),
  author: String(post.author || "Riverflow Team"),
  publishedAt: String(post.publishedAt || post.published_at || ""),
  status: post.status === "draft" ? "draft" : "published",
});

const rowsToAssoc = (result) => {
  const names = (result.cols || []).map((col, index) =>
    typeof col === "string" ? col : col.name || col.column || `col_${index}`,
  );

  return (result.rows || []).map((row) => {
    const item = {};
    row.forEach((cell, index) => {
      item[names[index] || `col_${index}`] = cellValue(cell);
    });
    return normalizePostForOutput(item);
  });
};

const queryPosts = async (sql, args = []) =>
  rowsToAssoc(executeResult(await executeSql(sql, args)));

const queryValue = async (sql, args = []) => {
  const result = executeResult(await executeSql(sql, args));
  return cellValue(result.rows?.[0]?.[0]);
};

const selectColumns =
  "id, slug, title, excerpt, content, image, image_alt AS imageAlt, category, author, published_at AS publishedAt, status";

const initDatabase = async () => {
  await tursoRequest([
    statement(
      "CREATE TABLE IF NOT EXISTS app_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)",
    ),
    statement(`CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL DEFAULT "",
      content TEXT NOT NULL DEFAULT "",
      image TEXT NOT NULL DEFAULT "",
      image_alt TEXT NOT NULL DEFAULT "",
      category TEXT NOT NULL DEFAULT "Skin Care",
      author TEXT NOT NULL DEFAULT "Riverflow Team",
      published_at TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT "published",
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
    statement(
      "CREATE INDEX IF NOT EXISTS idx_blog_posts_status_date ON blog_posts (status, published_at DESC)",
    ),
    { type: "close" },
  ]);

  const seeded = await queryValue("SELECT value FROM app_meta WHERE key = ?", [
    "blog_seeded",
  ]);

  if (seeded === "1") {
    return;
  }

  const count = Number(
    (await queryValue("SELECT COUNT(*) FROM blog_posts")) || 0,
  );

  if (count === 0) {
    for (const post of seedPosts) {
      await upsertPost(post);
    }
  }

  await executeSql(
    "INSERT INTO app_meta (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    ["blog_seeded", "1"],
  );
};

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "blog-post";

const normalizeInputPost = (post = {}) => {
  const title = String(post.title || "").trim();
  const content = String(post.content || "").trim();

  if (!title) {
    throw new Error("Title is required.");
  }

  if (!content) {
    throw new Error("Content is required.");
  }

  return {
    id: String(post.id || crypto.randomUUID()).trim(),
    slug: slugify(post.slug || title),
    title,
    excerpt: String(post.excerpt || "").trim(),
    content,
    image: String(post.image || ""),
    imageAlt: String(post.imageAlt || title).trim(),
    category: String(post.category || "Skin Care").trim() || "Skin Care",
    author: String(post.author || "Riverflow Team").trim() || "Riverflow Team",
    publishedAt:
      String(post.publishedAt || "").trim() ||
      new Date().toISOString().slice(0, 10),
    status: post.status === "draft" ? "draft" : "published",
  };
};

const upsertPost = async (inputPost) => {
  const post = normalizeInputPost(inputPost);
  await executeSql(
    `INSERT INTO blog_posts (
      id, slug, title, excerpt, content, image, image_alt, category, author, published_at, status, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    ON CONFLICT(id) DO UPDATE SET
      slug = excluded.slug,
      title = excluded.title,
      excerpt = excluded.excerpt,
      content = excluded.content,
      image = excluded.image,
      image_alt = excluded.image_alt,
      category = excluded.category,
      author = excluded.author,
      published_at = excluded.published_at,
      status = excluded.status,
      updated_at = CURRENT_TIMESTAMP`,
    [
      post.id,
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      post.image,
      post.imageAlt,
      post.category,
      post.author,
      post.publishedAt,
      post.status,
    ],
  );

  const rows = await queryPosts(`SELECT ${selectColumns} FROM blog_posts WHERE id = ?`, [
    post.id,
  ]);
  return rows[0] || post;
};

const passwordHash = (password) =>
  crypto.createHash("sha256").update(password).digest("hex");

const timingSafeEqual = (a, b) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
};

const verifyAdminPassword = (password) => {
  const configuredHash = process.env.ADMIN_PASSWORD_SHA256?.trim();

  if (configuredHash) {
    return timingSafeEqual(passwordHash(password), configuredHash);
  }

  const configuredPassword = process.env.ADMIN_PASSWORD || "";

  if (!configuredPassword) {
    throw new Error("ADMIN_PASSWORD_SHA256 is not configured.");
  }

  return timingSafeEqual(password, configuredPassword);
};

const sessionSecret = () =>
  process.env.ADMIN_SESSION_SECRET ||
  process.env.TURSO_AUTH_TOKEN ||
  "riverflow-dev-session-secret";

const sign = (value) =>
  crypto.createHmac("sha256", sessionSecret()).update(value).digest("hex");

const makeSessionCookie = () => {
  const expires = Date.now() + sessionMaxAgeSeconds * 1000;
  const value = `${expires}.${sign(String(expires))}`;
  return `${sessionCookieName}=${encodeURIComponent(
    value,
  )}; Max-Age=${sessionMaxAgeSeconds}; Path=/; HttpOnly; SameSite=Lax`;
};

const clearSessionCookie = `${sessionCookieName}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`;

const parseCookies = (req) =>
  Object.fromEntries(
    String(req.headers.cookie || "")
      .split(";")
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const index = cookie.indexOf("=");
        return [
          cookie.slice(0, index),
          decodeURIComponent(cookie.slice(index + 1)),
        ];
      }),
  );

const isAdmin = (req) => {
  const token = parseCookies(req)[sessionCookieName];
  const [expires, signature] = String(token || "").split(".");

  if (!expires || !signature || Number(expires) < Date.now()) {
    return false;
  }

  return timingSafeEqual(signature, sign(expires));
};

const requireAdmin = (req) => {
  if (!isAdmin(req)) {
    const error = new Error("Admin login required.");
    error.status = 401;
    throw error;
  }
};

const handleBlogApi = async (req, res, url) => {
  const action = url.searchParams.get("action") || "list";

  if (action === "session") {
    json(res, 200, { ok: true, authenticated: isAdmin(req) });
    return;
  }

  if (action === "login") {
    const body = await readRequestJson(req);

    if (verifyAdminPassword(String(body.password || ""))) {
      json(
        res,
        200,
        { ok: true, authenticated: true },
        { "Set-Cookie": makeSessionCookie() },
      );
      return;
    }

    json(res, 401, { ok: false, error: "Invalid password." });
    return;
  }

  if (action === "logout") {
    json(res, 200, { ok: true }, { "Set-Cookie": clearSessionCookie });
    return;
  }

  await initDatabase();

  if (action === "list") {
    const posts = await queryPosts(
      `SELECT ${selectColumns} FROM blog_posts WHERE status = ? ORDER BY published_at DESC, updated_at DESC`,
      ["published"],
    );
    json(res, 200, { ok: true, posts });
    return;
  }

  if (action === "post") {
    const slug = slugify(url.searchParams.get("slug") || "");
    const posts = await queryPosts(
      `SELECT ${selectColumns} FROM blog_posts WHERE slug = ? AND status = ? LIMIT 1`,
      [slug, "published"],
    );
    json(res, 200, { ok: true, post: posts[0] || null });
    return;
  }

  if (action === "all") {
    requireAdmin(req);
    const posts = await queryPosts(
      `SELECT ${selectColumns} FROM blog_posts ORDER BY published_at DESC, updated_at DESC`,
    );
    json(res, 200, { ok: true, posts });
    return;
  }

  if (action === "save") {
    requireAdmin(req);
    const body = await readRequestJson(req);
    const post = await upsertPost(body.post || {});
    json(res, 200, { ok: true, post });
    return;
  }

  if (action === "delete") {
    requireAdmin(req);
    const body = await readRequestJson(req);
    const id = String(body.id || "").trim();

    if (!id) {
      throw new Error("Post id is required.");
    }

    await executeSql("DELETE FROM blog_posts WHERE id = ?", [id]);
    json(res, 200, { ok: true });
    return;
  }

  json(res, 404, { ok: false, error: "Unknown action." });
};

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".mp4", "video/mp4"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
]);

const serveStatic = async (req, res, url) => {
  const pathname = decodeURIComponent(url.pathname);
  const requested = path.normalize(path.join(distDir, pathname));
  const safeRequested = requested.startsWith(distDir)
    ? requested
    : path.join(distDir, "index.html");
  let filePath = safeRequested;

  try {
    const stat = await fsp.stat(filePath);

    if (stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
  } catch {
    filePath = path.join(distDir, "index.html");
  }

  const stream = fs.createReadStream(filePath);
  stream.on("error", () => {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Build output not found. Run npm run build first.");
  });
  stream.on("open", () => {
    res.writeHead(200, {
      "Content-Type":
        mimeTypes.get(path.extname(filePath).toLowerCase()) ||
        "application/octet-stream",
    });
  });
  stream.pipe(res);
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  try {
    if (url.pathname === "/api/blog") {
      await handleBlogApi(req, res, url);
      return;
    }

    await serveStatic(req, res, url);
  } catch (error) {
    json(res, error.status || 500, {
      ok: false,
      error: error.message || "Server error.",
    });
  }
});

server.listen(port, () => {
  console.log(`Riverflow server listening on http://127.0.0.1:${port}`);
});
