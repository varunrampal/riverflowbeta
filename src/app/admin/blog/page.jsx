import AdminBlogPage from "../../../views/AdminBlogPage";
import { requireAdminSession } from "../../../lib/adminAuth";
export const metadata = { title: "Blog Administration", robots: { index: false, follow: false } };
export default async function Page() {
  await requireAdminSession();
  return <AdminBlogPage />;
}
