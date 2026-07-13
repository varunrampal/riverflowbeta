import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const sessionCookieName = "riverflow_blog_admin";

const sessionSecret = () =>
  process.env.ADMIN_SESSION_SECRET ||
  process.env.TURSO_AUTH_TOKEN ||
  "riverflow-dev-session-secret";

const sign = (value) =>
  crypto.createHmac("sha256", sessionSecret()).update(value).digest("hex");

const signaturesMatch = (provided, expected) => {
  const providedBuffer = Buffer.from(String(provided));
  const expectedBuffer = Buffer.from(String(expected));
  return (
    providedBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(providedBuffer, expectedBuffer)
  );
};

export const hasAdminSession = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookieName)?.value || "";
  const [expires, signature] = token.split(".");

  return Boolean(
    expires &&
      signature &&
      Number(expires) >= Date.now() &&
      signaturesMatch(signature, sign(expires)),
  );
};

export const requireAdminSession = async () => {
  if (!(await hasAdminSession())) {
    redirect("/admin/login");
  }
};
