// src/pages/HomePage.jsx
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
// import About from "../components/About";
import AboutHome from "../components/AboutHome";
import GoogleReviews from "../components/GoogleReviews";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact"
import ExclusiveServices from '../components/ExclusiveServices';
import MachinesSection from '../components/MachinesSection';
import Products from "../components/Products";
import Consultation from "../components/Consultation";

export default function HomePage() {

   return (
      <Layout>
         <Hero />
         <AboutHome />
         <GoogleReviews />
         <Treatments />
         <ExclusiveServices />
         {/* <MachinesSection /> */}
         <Products />
         <Consultation/>
         {/* <Contact/> */}
      </Layout>

   );
}
