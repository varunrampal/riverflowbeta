import AestheticSimulator from "../../components/AestheticSimulator";
import Layout from "../../components/Layout";

export const metadata = {
  title: "AI Aesthetic Simulator",
  description: "Explore an illustrative skin goal preview and discover Riverflow treatments matched to your aesthetic priorities.",
  alternates: { canonical: "/aesthetic-simulator" },
};

export default function AestheticSimulatorPage() {
  return <Layout><AestheticSimulator /></Layout>;
}
