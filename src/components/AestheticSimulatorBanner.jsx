import { Link } from "react-router-dom";

export default function AestheticSimulatorBanner() {
  return (
    <section className="simulator-feature" aria-labelledby="aesthetic-simulator-banner-title">
      <Link to="/aesthetic-simulator" className="simulator-card">
        <div className="simulator-card__visual">
          <img src="/assets/ai-aesthetic-banner.webp" alt="Digital facial analysis preview in the Riverflow aesthetic simulator" width="1200" height="427" loading="lazy" />
          <div className="simulator-card__badge"><i /> Complimentary preview</div>
        </div>
        <div className="simulator-card__content">
          <div className="simulator-card__heading"><p className="eyebrow"><span /> AI Aesthetic Simulator</p><h2 id="aesthetic-simulator-banner-title">Visualize a more <em>confident you.</em></h2></div>
          <div className="simulator-card__details"><p className="simulator-card__description">Explore subtle, personalized possibilities before your consultation—privately and at no cost.</p><span className="simulator-card__cta">Try it for free <b>→</b></span></div>
        </div>
      </Link>
    </section>
  );
}
