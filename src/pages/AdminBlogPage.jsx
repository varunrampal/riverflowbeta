import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  BLOG_CONCERNS,
  createBlogSlug,
  deleteBlogPostFromApi,
  fetchAdminBlogPosts,
  fetchBlogAnalytics,
  formatBlogDate,
  getBlogAdminSession,
  logoutFromBlogAdmin,
  makeUniqueBlogSlug,
  normalizeBlogPost,
  saveBlogPostToApi,
  sortBlogPosts,
} from "../data/blog";
import { TREATMENTS } from "../data/treatments";

const MAX_IMAGE_WIDTH = 1400;
const IMAGE_QUALITY = 0.82;

const today = () => new Date().toISOString().slice(0, 10);

const makePostId = () =>
  globalThis.crypto?.randomUUID?.() ||
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const blankPost = () => ({
  id: "",
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  image: "",
  imageAlt: "",
  category: "Skin Care",
  author: "Riverflow Team",
  publishedAt: today(),
  status: "published",
  concerns: [],
  treatmentIds: [],
  timeline: [],
  reviewedBy: "",
  reviewerRole: "",
  reviewedAt: "",
});

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("The image could not be loaded."));
    reader.readAsDataURL(file);
  });

const resizeImageFile = async (file) => {
  const dataUrl = await readFileAsDataUrl(file);

  if (file.type === "image/svg+xml") {
    return dataUrl;
  }

  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const scale = Math.min(1, MAX_IMAGE_WIDTH / image.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", IMAGE_QUALITY));
    };

    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
};

export default function AdminBlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(() => blankPost());
  const [activeId, setActiveId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [analytics, setAnalytics] = useState({});

  const sortedPosts = useMemo(() => sortBlogPosts(posts), [posts]);

  useEffect(() => {
    let active = true;

    const loadAdmin = async () => {
      try {
        const authenticated = await getBlogAdminSession();

        if (!authenticated) {
          navigate("/admin/login", { replace: true });
          return;
        }

        const [nextPosts, nextAnalytics] = await Promise.all([
          fetchAdminBlogPosts(),
          fetchBlogAnalytics().catch(() => ({})),
        ]);

        if (active) {
          setPosts(nextPosts);
          setAnalytics(nextAnalytics);
          setLoading(false);
        }
      } catch {
        if (active) {
          setError(
            "Admin API is not available. Confirm the Hostinger Node.js app and Turso config are set up.",
          );
          setLoading(false);
        }
      }
    };

    loadAdmin();

    return () => {
      active = false;
    };
  }, [navigate]);

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const toggleListField = (name, value) => {
    setForm((current) => {
      const values = current[name] || [];
      return {
        ...current,
        [name]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
    setError("");
  };

  const addTimelineStep = () => {
    setForm((current) => ({
      ...current,
      timeline: [
        ...(current.timeline || []),
        { label: "Next step", title: "", description: "" },
      ],
    }));
  };

  const updateTimelineStep = (index, name, value) => {
    setForm((current) => ({
      ...current,
      timeline: (current.timeline || []).map((step, stepIndex) =>
        stepIndex === index ? { ...step, [name]: value } : step,
      ),
    }));
  };

  const removeTimelineStep = (index) => {
    setForm((current) => ({
      ...current,
      timeline: (current.timeline || []).filter(
        (_, stepIndex) => stepIndex !== index,
      ),
    }));
  };

  const handleTitleChange = (value) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug: current.id ? current.slug : createBlogSlug(value),
      imageAlt: current.imageAlt || value,
    }));
    setError("");
  };

  const resetForm = () => {
    setForm(blankPost());
    setActiveId("");
    setNotice("");
    setError("");
  };

  const editPost = (post) => {
    setForm(post);
    setActiveId(post.id);
    setNotice("");
    setError("");
  };

  const deletePost = async () => {
    if (!activeId) {
      resetForm();
      return;
    }

    const shouldDelete = window.confirm("Delete this blog post?");

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteBlogPostFromApi(activeId);
      setPosts((current) => current.filter((post) => post.id !== activeId));
      resetForm();
      setNotice("Blog post deleted.");
    } catch (deleteError) {
      setError(deleteError.message || "Could not delete the post.");
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }

    try {
      setNotice("Preparing image...");
      const imageData = await resizeImageFile(file);
      updateField("image", imageData);
      setNotice("Image attached.");
    } catch {
      setError("The image could not be loaded.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotice("");
    setError("");
    setSaving(true);

    if (!form.title.trim()) {
      setError("Title is required.");
      setSaving(false);
      return;
    }

    if (!form.content.trim()) {
      setError("Content is required.");
      setSaving(false);
      return;
    }

    const id = form.id || makePostId();
    const slug = makeUniqueBlogSlug(form.slug || form.title, posts, id);
    const nextPost = normalizeBlogPost({
      ...form,
      id,
      slug,
      publishedAt: form.publishedAt || today(),
    });

    try {
      const savedPost = await saveBlogPostToApi(nextPost);
      setPosts((current) =>
        sortBlogPosts([savedPost, ...current.filter((post) => post.id !== id)]),
      );
      setForm(savedPost);
      setActiveId(id);
      setNotice("Blog post saved.");
    } catch (saveError) {
      setError(saveError.message || "Could not save the post.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logoutFromBlogAdmin().catch(() => {});
    navigate("/admin/login", { replace: true });
  };

  if (loading) {
    return (
      <Layout>
        <SEO
          title="Blog Admin | Riverflow Laser"
          description="Riverflow Laser blog admin"
          canonicalPath="/admin/blog"
          robots="noindex, nofollow"
        />
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Loading Blog Manager
            </h1>
          </div>
        </section>
      </Layout>
    );
  }

  if (error && !posts.length) {
    return (
      <Layout>
        <SEO
          title="Blog Admin | Riverflow Laser"
          description="Riverflow Laser blog admin"
          canonicalPath="/admin/blog"
          robots="noindex, nofollow"
        />
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Blog Manager Unavailable
            </h1>
            <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
            <Link
              to="/admin/login"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Back to login
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const saveLabel = saving ? "Saving..." : "Save";
  const analyticsTotals = Object.values(analytics).reduce(
    (totals, item) => ({
      views: totals.views + item.views,
      actions:
        totals.actions +
        item.treatmentClicks +
        item.appointmentClicks +
        item.inquirySubmits,
      inquiries: totals.inquiries + item.inquirySubmits,
    }),
    { views: 0, actions: 0, inquiries: 0 },
  );

  return (
    <Layout>
      <SEO
        title="Blog Admin | Riverflow Laser"
        description="Riverflow Laser blog admin"
        canonicalPath="/admin/blog"
        robots="noindex, nofollow"
      />

      <section className="border-b border-accent/25 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold text-secondary">
              Blog Manager
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              title="New post"
            >
              <i className="fa-solid fa-plus text-xs" aria-hidden="true"></i>
              New
            </button>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
              Blog
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
            >
              <i className="fa-solid fa-right-from-bracket text-xs" aria-hidden="true"></i>
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-accent/20 bg-white p-5 shadow-sm"
          >
            <div className="mb-5 flex flex-col gap-3 border-b border-accent/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-secondary">
                {activeId ? "Edit Blog Post" : "New Blog Post"}
              </h2>
              <label className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                <input
                  type="checkbox"
                  checked={form.status === "published"}
                  onChange={(event) =>
                    updateField(
                      "status",
                      event.target.checked ? "published" : "draft",
                    )
                  }
                  className="h-4 w-4 accent-primary"
                />
                Published
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Title
                </span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label>
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Slug
                </span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(event) =>
                    updateField("slug", createBlogSlug(event.target.value))
                  }
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label>
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Publish Date
                </span>
                <input
                  type="date"
                  value={form.publishedAt}
                  onChange={(event) =>
                    updateField("publishedAt", event.target.value)
                  }
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label>
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Category
                </span>
                <input
                  type="text"
                  value={form.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label>
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Author
                </span>
                <input
                  type="text"
                  value={form.author}
                  onChange={(event) => updateField("author", event.target.value)}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <fieldset className="md:col-span-2">
                <legend className="mb-2 text-sm font-semibold text-secondary">
                  Reader Concerns
                </legend>
                <div className="flex flex-wrap gap-2">
                  {BLOG_CONCERNS.map((concern) => (
                    <label
                      key={concern}
                      className={`cursor-pointer rounded-full border px-3 py-2 text-xs font-semibold transition ${
                        form.concerns?.includes(concern)
                          ? "border-primary bg-primary text-white"
                          : "border-accent/30 bg-background text-secondary hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.concerns?.includes(concern) || false}
                        onChange={() => toggleListField("concerns", concern)}
                        className="sr-only"
                      />
                      {concern}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 rounded-lg border border-accent/20 bg-secondary/5 p-4 md:col-span-2 md:grid-cols-3">
                <label>
                  <span className="mb-1 block text-sm font-semibold text-secondary">
                    Reviewed By
                  </span>
                  <input
                    type="text"
                    value={form.reviewedBy || ""}
                    onChange={(event) => updateField("reviewedBy", event.target.value)}
                    placeholder="Jyoti Sharma"
                    className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-sm font-semibold text-secondary">
                    Reviewer Role
                  </span>
                  <input
                    type="text"
                    value={form.reviewerRole || ""}
                    onChange={(event) => updateField("reviewerRole", event.target.value)}
                    placeholder="Esthetician"
                    className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-sm font-semibold text-secondary">
                    Review Date
                  </span>
                  <input
                    type="date"
                    value={form.reviewedAt || ""}
                    onChange={(event) => updateField("reviewedAt", event.target.value)}
                    className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                  />
                </label>
              </div>

              <label className="md:col-span-2">
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Excerpt
                </span>
                <textarea
                  rows="3"
                  value={form.excerpt}
                  onChange={(event) => updateField("excerpt", event.target.value)}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm leading-6 outline-none transition focus:border-primary"
                ></textarea>
              </label>

              <label className="md:col-span-2">
                <span className="mb-1 block text-sm font-semibold text-secondary">
                  Content
                </span>
                <textarea
                  rows="12"
                  value={form.content}
                  onChange={(event) => updateField("content", event.target.value)}
                  className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm leading-6 outline-none transition focus:border-primary"
                ></textarea>
              </label>

              <fieldset className="md:col-span-2">
                <legend className="mb-2 text-sm font-semibold text-secondary">
                  Related Treatments
                </legend>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.values(TREATMENTS).map((treatment) => (
                    <label
                      key={treatment.id}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                        form.treatmentIds?.includes(treatment.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-accent/25 bg-background text-secondary hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.treatmentIds?.includes(treatment.id) || false}
                        onChange={() =>
                          toggleListField("treatmentIds", treatment.id)
                        }
                        className="h-4 w-4 accent-primary"
                      />
                      {treatment.title}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="md:col-span-2">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <legend className="text-sm font-semibold text-secondary">
                      Interactive Care Timeline
                    </legend>
                    <p className="mt-1 text-xs text-slate-500">
                      Add educational steps such as preparation, treatment day, and aftercare.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addTimelineStep}
                    className="shrink-0 rounded-full border border-primary/30 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
                  >
                    Add step
                  </button>
                </div>
                <div className="space-y-3">
                  {(form.timeline || []).map((step, index) => (
                    <div
                      key={index}
                      className="grid gap-3 rounded-lg border border-accent/20 bg-secondary/5 p-4 md:grid-cols-[0.35fr_0.65fr_auto]"
                    >
                      <input
                        type="text"
                        value={step.label}
                        onChange={(event) =>
                          updateTimelineStep(index, "label", event.target.value)
                        }
                        placeholder="Before"
                        aria-label={`Timeline step ${index + 1} label`}
                        className="rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                      <input
                        type="text"
                        value={step.title}
                        onChange={(event) =>
                          updateTimelineStep(index, "title", event.target.value)
                        }
                        placeholder="Prepare your skin"
                        aria-label={`Timeline step ${index + 1} title`}
                        className="rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                      <button
                        type="button"
                        onClick={() => removeTimelineStep(index)}
                        className="rounded-md px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                        aria-label={`Remove timeline step ${index + 1}`}
                      >
                        Remove
                      </button>
                      <textarea
                        rows="2"
                        value={step.description}
                        onChange={(event) =>
                          updateTimelineStep(index, "description", event.target.value)
                        }
                        placeholder="Explain this stage in plain language."
                        aria-label={`Timeline step ${index + 1} description`}
                        className="rounded-md border border-accent/30 bg-background px-3 py-2 text-sm leading-6 outline-none focus:border-primary md:col-span-3"
                      ></textarea>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="mt-5 rounded-lg border border-accent/20 bg-secondary/5 p-4">
              <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
                <div className="overflow-hidden rounded-md bg-background">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt={form.imageAlt || form.title || "Blog post image"}
                      className="h-52 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-52 items-center justify-center text-sm text-slate-400">
                      No image
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <label>
                    <span className="mb-1 block text-sm font-semibold text-secondary">
                      Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white"
                    />
                  </label>

                  <label>
                    <span className="mb-1 block text-sm font-semibold text-secondary">
                      Image Alt Text
                    </span>
                    <input
                      type="text"
                      value={form.imageAlt}
                      onChange={(event) =>
                        updateField("imageAlt", event.target.value)
                      }
                      className="w-full rounded-md border border-accent/30 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                    />
                  </label>

                  {form.image ? (
                    <button
                      type="button"
                      onClick={() => updateField("image", "")}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                    >
                      <i className="fa-solid fa-image-slash text-xs" aria-hidden="true"></i>
                      Remove image
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            {error ? (
              <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            ) : null}
            {notice ? (
              <p className="mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                {notice}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
              >
                <i className="fa-solid fa-floppy-disk text-xs" aria-hidden="true"></i>
                {saveLabel}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
              >
                <i className="fa-solid fa-rotate-left text-xs" aria-hidden="true"></i>
                Clear
              </button>
              <button
                type="button"
                onClick={deletePost}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <i className="fa-solid fa-trash text-xs" aria-hidden="true"></i>
                Delete
              </button>
            </div>
          </form>

          <aside className="rounded-lg border border-accent/20 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-accent/20 pb-5">
              <h2 className="text-xl font-semibold text-secondary">
                Posts
              </h2>
              <span className="rounded-full bg-secondary/5 px-3 py-1 text-xs font-semibold text-secondary">
                {sortedPosts.length}
              </span>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-2">
              {[
                ["Views", analyticsTotals.views],
                ["Actions", analyticsTotals.actions],
                ["Inquiries", analyticsTotals.inquiries],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-secondary/5 p-3 text-center">
                  <strong className="block text-lg text-secondary">{value}</strong>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {sortedPosts.map((post) => (
                <button
                  type="button"
                  key={post.id}
                  onClick={() => editPost(post)}
                  className={`w-full rounded-lg border p-4 text-left transition ${
                    activeId === post.id
                      ? "border-primary bg-primary/5"
                      : "border-accent/20 bg-background hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-secondary/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                          {post.status}
                        </span>
                        <span className="text-xs text-slate-500">
                          {formatBlogDate(post.publishedAt)}
                        </span>
                      </div>
                      <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-secondary">
                        {post.title}
                      </h3>
                      <p className="mt-1 truncate text-xs text-slate-500">
                        /blog/{post.slug}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-500">
                        <span>{analytics[post.id]?.views || 0} views</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {analytics[post.id]?.appointmentClicks || 0} booking clicks
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{analytics[post.id]?.inquirySubmits || 0} inquiries</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
