import AdminGalleryPage from "../../../views/AdminGalleryPage";
import { requireAdminSession } from "../../../lib/adminAuth";
export const metadata = { title: "Before & After Gallery Admin", robots: { index: false, follow: false } };
export default async function Page() {
  await requireAdminSession();
  return <AdminGalleryPage />;
}
