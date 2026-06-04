import img from '../assets/images/jyoti.jpeg'
import Layout from '../components/Layout';
export default function TeamPage() {
  return (
    <Layout>
<section id="about" className="py-10 lg:py-14 bg-background">
  <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap- items-start">
    {/* TEXT */}
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-primary">
        Meet the Team
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-3">
        Our Dream TEAM!
      </h2>
      <p className="text-slate-600 mb-4">
        At The Riverflow Laser and Skin Clinic Inc, our team is respected for
        their experience and passion for skin health and offering laser,
        cosmetic and injectable treatments to patients for naturally beautiful
        results.
      </p>
      <p className="text-slate-600 mb-4">
        We welcome every patient with warmth and knowledge you’ll feel
        comfortable and confident in.
      </p>
      <blockquote className="text-slate-700 italic">
        “As a woman who understands the toll unwanted hair can take, I know how
        important safe and effective solutions are.”
        <span className="not-italic font-medium text-secondary">
          {" "}
          — Jyoti Sharma, Esthetician
        </span>
      </blockquote>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src={img}
        alt=""
        className="w-64 h-160 md:w-80 md:h-160 object-cover rounded-xl shadow-sm"
      />
    </div>
  </div>
</section>

    </Layout>

  );
};
