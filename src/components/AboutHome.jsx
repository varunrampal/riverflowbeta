import image from "../assets/images/services/skin-rejunivation.jpg";
import { Link } from "react-router-dom";
export default function AboutHome() {
  return <section className="premium-about">
    <div className="premium-about__image"><img src={image} alt="Advanced skin treatment at Riverflow" /><span>Every treatment begins with listening.</span></div>
    <div className="premium-about__copy"><div className="eyebrow"><span /> The Riverflow approach</div>
      <h2>Where clinical expertise meets <em>thoughtful care.</em></h2>
      <p className="lead">We believe the best results never look overdone. They look like you—rested, radiant, and at ease in your own skin.</p>
      <p>Our Langley clinic pairs proven technology with a deeply personal approach. Every plan is shaped around your skin, your comfort, and your goals.</p>
      <div className="premium-about__points"><div><b>01</b><span>Personalized plans</span></div><div><b>02</b><span>Certified expertise</span></div><div><b>03</b><span>Considered results</span></div></div>
      <Link to="/about" className="text-link">Discover our philosophy <span>→</span></Link>
    </div>
  </section>;
}
