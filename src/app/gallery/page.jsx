import GalleryPage from "../../views/GalleryPage";
import { pageMetadata } from "../../utils/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Before & After Gallery | Riverflow Laser Langley" },
  description: "View before-and-after photographs organized by treatment at Riverflow Laser & Skin Clinic in Langley, BC. Individual results vary.",
  path: "/gallery",
});

export default function Page() { return <GalleryPage />; }
