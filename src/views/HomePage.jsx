// src/pages/HomePage.jsx
"use client";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
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
import { TREATMENTS } from "../data/treatments";
import {
   localBusinessSchema,
   treatmentServiceSchema,
   treatmentsItemListSchema,
   webPageSchema,
   websiteSchema,
} from "../utils/seo";

export default function HomePage() {

   return (
      <Layout>
         <SEO
            title="Laser Hair Removal & Skin Clinic in Langley, BC | Riverflow"
            description="Visit Riverflow Laser & Skin Clinic in Langley for laser hair removal, HydraFacial, microneedling, facials and personalized skincare. Book a consultation."
            canonicalPath="/"
            structuredData={[
               localBusinessSchema(),
               websiteSchema(),
               webPageSchema({
                  name: "Riverflow Laser & Skin Clinic Langley",
                  description:
                     "Laser hair removal and advanced skin care clinic in Langley, BC.",
                  path: "/",
               }),
               treatmentsItemListSchema(Object.values(TREATMENTS)),
               ...Object.values(TREATMENTS).map(treatmentServiceSchema),
            ]}
         />
         <Hero />
         <AboutHome />
         <AestheticSimulatorBanner />
         <GoogleReviews />
         <Treatments />
         <AreasWeServe />
         <LatestBlog />
         <ExclusiveServices />
         {/* <MachinesSection /> */}
         <Products />
         
         <Consultation/>
         {/* <Contact/> */}
      </Layout>

   );
}
