import heroImage from "../assets/images/services/aboutimage.webp";
import { SITE_CONFIG } from "../data/site";

export default function Hero() {
  return (
    <section className="premium-hero">
      <div className="premium-hero__copy">
        <div className="eyebrow"><span /> Advanced aesthetics · Langley, BC</div>
        <h1>Skin confidence,<br /><em>beautifully considered.</em></h1>
        <p>Personalized laser and skin treatments, guided by expertise and designed around the way you want to feel.</p>
        <div className="premium-hero__actions">
          <a className="button button--dark" href={SITE_CONFIG.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <span>↗</span></a>
          <a className="text-link" href="/treatments">Explore treatments <span>→</span></a>
        </div>
        <div className="premium-hero__trust">
          <div><strong>4.9</strong><span>★★★★★</span><small>Google rating</small></div>
          <div><strong>10+</strong><small>Advanced treatments</small></div>
          <div><strong>100%</strong><small>Personalized care</small></div>
        </div>
      </div>
      <div className="premium-hero__visual">
        <img src={heroImage} alt="Personalized facial treatment at Riverflow Laser and Skin Clinic" width="1600" height="1067" fetchPriority="high" />
        <div className="premium-hero__note"><span>01</span><p>Science-led care.<br />Naturally radiant results.</p></div>
      </div>
    </section>
  );
}
