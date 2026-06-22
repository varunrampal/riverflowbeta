import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImg1 from '../assets/images/hero-banner/img1.png';
import heroImg2 from '../assets/images/hero-banner/img2.png';
import { SITE_CONFIG } from "../data/site";

const slides = [
  {
    preTitle: "Hair Removal • Facials • Skin",
    title: "Advanced Laser Hair Removal & Skin Care Treatments in Langley",
    description:
      "Professional treatments designed to help you look and feel your best.",
    image: heroImg1,
  },
  {
    preTitle: "Non-surgical rejuvenation",
    title: "Lift, smooth and refresh your complexion",
    description:
      "",
    image: heroImg2,
  },
  // {
  //   preTitle: "Personalized laser solutions",
  //   title: "Where precision meets luxurious skincare",
  //   description:
  //     "Experience custom treatments in a calm, modern studio with trusted experts.",
  //   image: heroImg1,
  // },
];

export default function Hero() {
  return (
    <section id="hero" className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-background">
      <div className="relative w-full px-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full overflow-hidden shadow-[0_35px_90px_rgba(29,18,69,0.12)] [--swiper-navigation-size:14px] [--swiper-pagination-color:#B76E79] [--swiper-pagination-bullet-inactive-color:#B76E79] [--swiper-pagination-bullet-inactive-opacity:0.35] [&_.swiper-button-next]:h-8 [&_.swiper-button-next]:w-8 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:bg-background/90 [&_.swiper-button-next]:text-secondary [&_.swiper-button-next]:shadow-md [&_.swiper-button-next]:transition [&_.swiper-button-next]:hover:bg-primary [&_.swiper-button-next]:hover:text-white [&_.swiper-button-prev]:h-8 [&_.swiper-button-prev]:w-8 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:bg-background/90 [&_.swiper-button-prev]:text-secondary [&_.swiper-button-prev]:shadow-md [&_.swiper-button-prev]:transition [&_.swiper-button-prev]:hover:bg-primary [&_.swiper-button-prev]:hover:text-white [&_.swiper-navigation-icon]:h-3 [&_.swiper-navigation-icon]:w-3"
        >
          {slides.map((slide, index) => {
            const HeadingTag = index === 0 ? "h1" : "h2";

            return (
              <SwiperSlide key={index}>
                <div className="relative h-[420px] bg-background sm:h-[700px] lg:h-[780px] xl:h-[1090px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width="1621"
                    height="970"
                    className="absolute left-1/2 top-1/2 h-auto w-[86%] max-w-sm -translate-x-1/2 -translate-y-1/2 object-contain object-center sm:inset-0 sm:h-full sm:w-full sm:max-w-none sm:translate-x-0 sm:translate-y-0 sm:object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 sm:bg-black/10" />
                  <div className="relative z-10 flex h-full items-end px-5 pb-7 pt-10 sm:items-center sm:px-10 sm:py-10 lg:px-216">
                    <div className="max-w-2xl text-white">
                      {/* <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-5">
                        {slide.preTitle}
                      </span> */}
                      <HeadingTag className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-2 leading-tight sm:mb-6 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">
                        {slide.title}
                      </HeadingTag>
                      <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-xl mb-0 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                        {slide.description}
                      </p>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-0 sm:gap-4">
                      <a
                        href={SITE_CONFIG.bookingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:px-6"
                      >
                        Book Now
                      </a>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25 sm:px-6"
                      >
                        Call {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                    {/* <div className="mt-10 flex flex-wrap gap-6 text-slate-200">
                      <div>
                        <div className="text-3xl font-bold">4.9★</div>
                        <div className="text-xs uppercase tracking-[0.2em]">Google rating</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">1,000+</div>
                        <div className="text-xs uppercase tracking-[0.2em]">clients served</div>
                      </div>
                    </div> */}
                    </div>
                </div>
              </div>
            </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
