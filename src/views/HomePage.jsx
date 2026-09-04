// src/pages/HomePage.jsx
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
// import About from "../components/About";
import AboutHome from "../components/AboutHome";
import GoogleReviews from "../components/GoogleReviews";
import AestheticSimulatorBanner from "../components/AestheticSimulatorBanner";
import ExclusiveServices from '../components/ExclusiveServices';
import Products from "../components/Products";
import Consultation from "../components/Consultation";
import LatestBlog from "../components/LatestBlog";
import AreasWeServe from "../components/AreasWeServe";

export default function HomePage({ latestPost }) {

   return (
      <Layout>
         <Hero />
         <AboutHome />
         <Treatments />
         <AestheticSimulatorBanner />
         <GoogleReviews />
         <AreasWeServe />
         <LatestBlog post={latestPost} />
         <ExclusiveServices />
         {/* <MachinesSection /> */}
         <Products />
         
         <Consultation/>
         {/* <Contact/> */}
      </Layout>

   );
}
