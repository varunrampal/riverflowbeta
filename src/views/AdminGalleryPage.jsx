"use client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { TREATMENTS } from "../data/treatments";
import { deleteGalleryItem, fetchAllGalleryItems, saveGalleryItem } from "../data/gallery";
import { getBlogAdminSession } from "../data/blog";

const blank = { id: "", treatmentId: Object.keys(TREATMENTS)[0], title: "", before: "", after: "", note: "", sortOrder: 0 };
const readImage = (file) => new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => { const image = new Image(); image.onload = () => { const scale = Math.min(1, 1200 / image.width); const canvas = document.createElement("canvas"); canvas.width = image.width * scale; canvas.height = image.height * scale; canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height); resolve(canvas.toDataURL("image/jpeg", .82)); }; image.onerror = reject; image.src = reader.result; }; reader.onerror = reject; reader.readAsDataURL(file); });

export default function AdminGalleryPage() {
  const navigate = useNavigate(); const [items, setItems] = useState([]); const [form, setForm] = useState(blank); const [message, setMessage] = useState(""); const [busy, setBusy] = useState(false);
  useEffect(() => { getBlogAdminSession().then((ok) => ok ? fetchAllGalleryItems().then(setItems) : navigate("/admin/login", { replace: true })).catch((e) => setMessage(e.message)); }, [navigate]);
  const upload = async (field, file) => { if (!file?.type.startsWith("image/")) return; setBusy(true); try { const imageData = await readImage(file); setForm((old) => ({ ...old, [field]: imageData })); } finally { setBusy(false); } };
  const submit = async (event) => { event.preventDefault(); setBusy(true); setMessage(""); try { const saved = await saveGalleryItem(form); setItems((old) => [saved, ...old.filter((x) => x.id !== saved.id)]); setForm(blank); setMessage("Gallery pair saved."); } catch (e) { setMessage(e.message); } finally { setBusy(false); } };
  const edit = (item) => { setForm(item); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const remove = async (id) => { if (!window.confirm("Delete this before-and-after pair?")) return; await deleteGalleryItem(id); setItems((old) => old.filter((x) => x.id !== id)); };
  return <Layout><main className="mx-auto max-w-6xl px-4 py-12"><div className="mb-8 flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-primary">Admin</p><h1 className="text-3xl font-bold text-secondary">Before &amp; After Gallery</h1></div><Link to="/admin/blog" className="rounded-md border border-primary px-4 py-2 font-semibold text-primary">Blog Manager</Link></div>
    <form onSubmit={submit} className="grid gap-6 rounded-2xl border border-accent/25 bg-white p-6 shadow-sm md:grid-cols-2">
      <label className="md:col-span-2">Treatment<select value={form.treatmentId} onChange={(e) => setForm({ ...form, treatmentId: e.target.value })} className="mt-1 w-full rounded-md border p-3">{Object.values(TREATMENTS).map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}</select></label>
      <label>Before image<input required={!form.before} type="file" accept="image/*" onChange={(e) => upload("before", e.target.files[0])} className="mt-1 block w-full" />{form.before && <img src={form.before} alt="Before preview" className="mt-3 h-48 w-full rounded-lg object-cover" />}</label>
      <label>After image<input required={!form.after} type="file" accept="image/*" onChange={(e) => upload("after", e.target.files[0])} className="mt-1 block w-full" />{form.after && <img src={form.after} alt="After preview" className="mt-3 h-48 w-full rounded-lg object-cover" />}</label>
      <label>Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1 w-full rounded-md border p-3" /></label><label>Display order<input type="number" value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })} className="mt-1 w-full rounded-md border p-3" /></label>
      <label className="md:col-span-2">Note<textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="mt-1 w-full rounded-md border p-3" /></label><div className="md:col-span-2 flex gap-3"><button disabled={busy} className="rounded-md bg-primary px-6 py-3 font-bold text-white">{form.id ? "Update pair" : "Add pair"}</button>{form.id && <button type="button" onClick={() => setForm(blank)}>Cancel</button>}</div>{message && <p className="md:col-span-2">{message}</p>}
    </form><section className="mt-10 grid gap-5 md:grid-cols-2">{items.map((item) => <article key={item.id} className="rounded-xl border bg-white p-4"><p className="font-bold text-secondary">{TREATMENTS[item.treatmentId]?.title}</p><div className="mt-3 grid grid-cols-2 gap-3"><img src={item.before} alt="Before" className="h-40 w-full rounded object-cover"/><img src={item.after} alt="After" className="h-40 w-full rounded object-cover"/></div><p className="mt-2 text-sm">{item.title}</p><div className="mt-3 flex gap-4"><button onClick={() => edit(item)} className="font-bold text-primary">Edit</button><button onClick={() => remove(item.id)} className="font-bold text-red-600">Delete</button></div></article>)}</section>
  </main></Layout>;
}
