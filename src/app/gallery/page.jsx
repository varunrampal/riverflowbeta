import GalleryPage from "../../views/GalleryPage";

export const metadata = {
  title: { absolute: "Before & After Gallery | Riverflow Laser Langley" },
  description: "View before-and-after photographs organized by treatment at Riverflow Laser & Skin Clinic in Langley, BC. Individual results vary.",
  alternates: { canonical: "/gallery" },
};

export default function Page() { return <GalleryPage />; }
