import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import HomePage from './pages/HomePage.jsx';
import FacebookMessenger from './components/FacebookMessenger.jsx';
import TreatmentDetailsPage from "./pages/TreatmentDetailsPage";
import AllTreatmentsPage from './pages/AllTreatmentsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MakeAppointmentPage from './pages/MakeAppointmentPage.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/treatments" element={<AllTreatmentsPage />} />
         <Route path="/treatments/:slug" element={<TreatmentDetailsPage />} />
         <Route path="/treatments/:slug" element={<TreatmentDetailsPage />} />
         <Route path="/team" element={<TeamPage />} />
           <Route path="/faq" element={<FAQPage />} />
           <Route path="/contact" element={<ContactPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/make-appointment" element={<MakeAppointmentPage />} />
        </Routes>
        {/* <FacebookMessenger/> */}
    </BrowserRouter>
   
    </>
  )
}

export default App
