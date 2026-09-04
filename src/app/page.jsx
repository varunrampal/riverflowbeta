import HomePage from "../views/HomePage";
import { SITE_CONFIG } from "../data/site";
import { pageMetadata } from "../utils/metadata";
export const metadata = pageMetadata({ title: { absolute: SITE_CONFIG.defaultTitle }, description: SITE_CONFIG.defaultDescription, path: "/" });
export default function Page() { return <HomePage />; }
