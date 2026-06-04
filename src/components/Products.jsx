import skincareproducts from '../assets/images/services/skincareproducts.jpg'

export default function Products() {
  return (
    <section className="bg-background py-10 lg:py-16">
  <div className="mx-auto max-w-6xl px-4">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* image - shows first on mobile */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src={skincareproducts}
          alt="Franchise with Uptown Med Spa"
          className="w-full max-w-md lg:max-w-lg h-auto"
          loading="lazy"
        />
      </div>

      {/* text */}
      <div className="order-2 lg:order-1 text-center lg:text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          We use certified skincare products at RiverFlow Laser
        </h2>
        <p>
          Our top-rated products range from leading skincare brands to help target specific skin concerns and revitalize your look.
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
