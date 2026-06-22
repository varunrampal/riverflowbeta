// src/pages/HomePage.jsx
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
// import About from "../components/About";
import AboutHome from "../components/AboutHome";
import GoogleReviews from "../components/GoogleReviews";
import ExclusiveServices from '../components/ExclusiveServices';
import Products from "../components/Products";
import Consultation from "../components/Consultation";
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
            title="Riverflow Laser & Skin Clinic Langley | Laser Hair Removal & Skin Care"
            description="Visit Riverflow Laser & Skin Clinic in Langley, BC for laser hair removal, facials, HydraFacial, chemical peels, microneedling, acne care, and skin rejuvenation."
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
