"use client";

import Link from "next/link";
import { useParams as useNextParams, usePathname, useRouter, useSearchParams as useNextSearchParams } from "next/navigation";

export function RouterLink({ to, href, children, ...props }) {
  return <Link href={href || to || "#"} {...props}>{children}</Link>;
}

export { RouterLink as Link };
export const useParams = useNextParams;
export const useSearchParams = useNextSearchParams;
export function useLocation() { return { pathname: usePathname() }; }
export function useNavigate() {
  const router = useRouter();
  return (to, options = {}) => options.replace ? router.replace(to) : router.push(to);
}
