import chemicalpeels from "../assets/images/services/chemicalpeels.jpg";
import facial from "../assets/images/services/facial.jpg";
import hairservices from "../assets/images/services/HairServices.jpg";
import hydrafacial from "../assets/images/services/HydraFacial.jpg";
import laserhairremoval from "../assets/images/services/laser-hair-removal.jpg";
import microneedling from "../assets/images/services/microneedling.jpg";
import oxygenofacial from "../assets/images/services/Oxygeneo.jpg";
import scalp from "../assets/images/services/scalp.webp";
import acne from "../assets/images/services/acne.jpg";
import antiaging from "../assets/images/services/anti-aging.webp";
import pigmentation from "../assets/images/services/pigmentation.jpeg";
import skinrejuvenation from "../assets/images/services/skin-rejunivation.jpg";
import RequestConsultationForm from "./RequestConsultationForm";
import { Link } from "react-router-dom";

const treatments = [
  {
    title: "Laser Hair Removal",
    desc: "If you are not happy with shaving, tweezing, or waxing to remove unwanted hair, laser hair removal may be an option worth considering. Our lasers help remove hair from the face, leg, chin, back, arm, underarm, bikini line, and more.",
    image: laserhairremoval,
    link: "/treatments/laserhairremoval",
  },
  {
    title: "OxyGeneo Facial",
    desc: "Non-surgical shaping and tightening.",
    image: oxygenofacial,
    link: "/treatments/oxygenofacial",
  },
  {
    title: "Facials & Peels",
    desc: "Deep cleansing, brightening and acne care.",
    image: facial,
    link: "/treatments/facial",
  },
  {
    title: "Microneedling",
    desc: "Improve skin tone, texture and fine lines.",
    image: microneedling,
    link: "/treatments/microneedling",
  },
  {
    title: "Chemical Peels",
    desc: "Removes dead skin cells to reveal smoother, brighter skin.",
    image: chemicalpeels,
    link: "/treatments/chemicalpeels",
  },
  {
    title: "HydraFacial",
    desc: "HydraFacial uses patented Vortex-Fusion technology to cleanse, extract, and hydrate, leaving your skin radiant and plump.",
    image: hydrafacial,
    link: "/treatments/hydrafacial",
  },
  {
    title: "Hair Services",
    desc: "Non-surgical shaping and tightening.",
    image: hairservices,
    link: "/treatments/hairservices",
  },
  {
    title: "Scalp Therapy",
    desc: "Non-surgical shaping and tightening.",
    image: scalp,
    link: "/treatments/scalp",
  },
    {
    title: "Acne Treatment",
    desc: "Using a controlled Nd:YAG laser to safely penetrate into skin and effectively target overactive sebaceous glands Rejuva’s acne laser treatment reduces new acne inflammation.",
    image: acne,
    link: "/treatments/acne",
  },
      {
    title: "Anti-Aging Treatments",
    desc: "Using a controlled Nd:YAG laser to safely penetrate into skin and effectively target overactive sebaceous glands Rejuva’s acne laser treatment reduces new acne inflammation.",
    image: antiaging,
    link: "/treatments/antiaging",
  },
        {
    title: "Pigmentation Treatments",
    desc: "Pigmentation treatments target excess melanin to reduce dark spots, sun damage, and uneven tone, revealing clearer, more radiant skin.",
    image: pigmentation,
    link: "/treatments/pigmentation",
  },
   {
    title: "Skin Rejuvenation",
    desc: "Skin rejuvenation refers to treatments designed to restore a youthful, radiant complexion by boosting collagen, removing damaged cells, or targeting pigmentation.",
    image: skinrejuvenation,
    link: "/treatments/skinrejuvenation",
  }
];

export default function Treatments() {
  return (
    <section id="treatments" className="bg-secondary/5 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              treatments
            </p>
            <h2 className="mt-2 text-2xl font-bold text-secondary md:text-3xl">
              Explore Our Extensive Range of Treatments
            </h2>
          </div>
          {/* <a
            href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-primary hover:text-secondary"
          >
            Book a visit -&gt;
          </a> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-accent/20 bg-background shadow-sm transition hover:shadow-md"
            >
              <Link to={item.link || "#"} className="block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </Link>

              <Link
                to={item.link || "#"}
                className="flex h-14 items-center justify-between gap-3 px-4 transition group-hover:bg-primary group-hover:text-white"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <i className="fa-solid fa-chevron-right text-xs text-primary group-hover:text-white"></i>
              </Link>

              <div className="px-4 pb-4 pt-1">
                <Link
                  to={`/make-appointment?subject=${encodeURIComponent(
                    item.title
                  )}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Make an Inquiry
                </Link>
              </div>
            </div>
          ))}
        </div>

        <RequestConsultationForm className="mt-12" />
      </div>
    </section>
  );
}
