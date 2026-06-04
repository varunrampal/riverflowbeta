import img from '../assets/images/services/aboutimage.jpg'
export default function AboutHome() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
            Discover personalized treatments
          </h2>
          <p className="text-slate-600 mb-4">
            RiverFlow Laser is your trusted destination for advanced skincare solutions. We offer state-of-the-art treatments using certified technology to help you feel radiant and confident..
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
            At Riverflow, we believe that true beauty radiates from within.
          </h2>
          <p>
            Our holistic approach combines science and artistry to offer a wide range of advanced aesthetic treatments tailored to your unique needs. Whether you’re seeking to rejuvenate your skin, reduce the signs of aging, or simply indulge in well-deserved self-care, our expert team is here to guide and support you every step of the way.
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>• Personalized treatment plans</li>
            <li>• Trained & certified technicians</li>
            <li>• Convenient Langley location</li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
      <div className="w-90 sm:w-170 lg:w-70 rounded-3xl overflow-hidden shadow-md bg-secondary/5 border border-accent/20">
        <img
          src={img}
          alt="RiverFlow Laser"
          className="w-full h-30 object-cover"
        />
      </div>
    </div>
      </div>
    </section>
  );
};
