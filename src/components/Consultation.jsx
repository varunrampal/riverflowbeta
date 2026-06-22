import freeconsultation from '../assets/images/services/freeconsultation.jpg'
export default function Consultation(){
return (
    <section className="bg-background py-10 lg:py-16">
  <div className="mx-auto max-w-6xl px-4">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* image - shows first on mobile */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src={freeconsultation}
          alt="Riverflow Laser consultation for personalized skincare support"
          className="w-full max-w-md lg:max-w-lg h-auto"
          loading="lazy"
        />
      </div>

      {/* text */}
      <div className="order-2 lg:order-1 text-center lg:text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Personalized Skincare Support
        </h2>
        <p>
          Our team of highly trained technicians is here to guide you with expert skincare advice tailored to your specific needs.
        </p>
        <p>
Whether you're new to treatments or a returning client, we ensure comfortable, informed, and result-driven care that puts your needs first.

        </p>
        <a
           href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
          target="_blank" className="inline-flex items-center rounded-md text-white bg-primary px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-secondary transition"
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
</section>

  );

}
