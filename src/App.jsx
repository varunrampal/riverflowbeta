import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import TreatmentDetailsPage from "./pages/TreatmentDetailsPage";
import AllTreatmentsPage from './pages/AllTreatmentsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MakeAppointmentPage from './pages/MakeAppointmentPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailsPage from './pages/BlogDetailsPage.jsx';
import AdminBlogPage from './pages/AdminBlogPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/treatments" element={<AllTreatmentsPage />} />
         <Route path="/treatments/:slug" element={<TreatmentDetailsPage />} />
         <Route path="/team" element={<TeamPage />} />
           <Route path="/faq" element={<FAQPage />} />
         <Route path="/contact" element={<ContactPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/make-appointment" element={<MakeAppointmentPage />} />
             <Route path="/blog" element={<BlogPage />} />
             <Route path="/blog/:slug" element={<BlogDetailsPage />} />
             <Route path="/admin/login" element={<AdminLoginPage />} />
             <Route path="/admin/blog" element={<AdminBlogPage />} />
        </Routes>
        {/* <FacebookMessenger/> */}
    </BrowserRouter>
   
    </>
  )
}

export default App
