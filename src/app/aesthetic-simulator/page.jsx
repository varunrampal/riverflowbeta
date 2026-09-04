import AestheticSimulator from "../../components/AestheticSimulator";
import Layout from "../../components/Layout";
import { pageMetadata } from "../../utils/metadata";

export const metadata = pageMetadata({
  title: "AI Aesthetic Simulator",
  description: "Explore an illustrative skin goal preview and discover Riverflow treatments matched to your aesthetic priorities.",
  path: "/aesthetic-simulator",
});

export default function AestheticSimulatorPage() {
  return <Layout><AestheticSimulator /></Layout>;
}
