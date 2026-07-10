import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact"

export default function TestPage() {
  return (
   <Layout>
   <Hero/>
   <Treatments/>
   <About/>
   <Gallery/>
   <Contact/>
   </Layout>
  
  );
}