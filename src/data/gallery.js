const request = async (action, options = {}) => {
  const params = new URLSearchParams({ action, ...(options.query || {}) });
  const response = await fetch(`/api/blog?${params}`, { credentials: "same-origin", headers: { "Content-Type": "application/json" }, ...options, body: options.body ? JSON.stringify(options.body) : undefined });
  const data = await response.json();
  if (!response.ok || data.ok === false) throw new Error(data.error || "Gallery request failed.");
  return data;
};
export const fetchTreatmentGallery = async (treatmentId) => (await request("gallery-list", { query: { treatmentId } })).items || [];
export const fetchAllGalleryItems = async () => (await request("gallery-all")).items || [];
export const saveGalleryItem = async (item) => (await request("gallery-save", { method: "POST", body: { item } })).item;
export const deleteGalleryItem = async (id) => request("gallery-delete", { method: "POST", body: { id } });
