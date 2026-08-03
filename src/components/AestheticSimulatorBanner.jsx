import { Link } from "react-router-dom";

export default function AestheticSimulatorBanner() {
  return (
    <section className="bg-background px-4 py-8 md:py-10" aria-labelledby="aesthetic-simulator-banner-title">
      <Link
        to="/aesthetic-simulator"
        className="group mx-auto block max-w-md overflow-hidden rounded-2xl bg-[#cba4af] shadow-[0_16px_45px_rgba(15,45,82,.14)] md:hidden"
      >
        <div className="relative aspect-[16/7] overflow-hidden">
          <img
            src="/assets/ai-aesthetic-banner.png"
            alt="Two women using a digital facial analysis preview"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#cba4af]/30" />
        </div>
        <div className="px-5 py-7 text-center text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[.2em]">Riverflow Laser &amp; Skin Clinic</p>
          <h2 id="aesthetic-simulator-banner-title" className="mx-auto mt-2 w-fit bg-secondary px-3 py-1.5 text-lg font-bold uppercase leading-tight">
            AI Aesthetic Simulator
          </h2>
          <span className="mt-5 flex w-full items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold uppercase tracking-wide transition group-active:bg-white group-active:text-secondary">
            Try for free
          </span>
        </div>
      </Link>

      <Link
        to="/aesthetic-simulator"
        className="group relative mx-auto hidden min-h-[220px] max-w-[1600px] overflow-hidden rounded-2xl bg-[#cba4af] shadow-[0_16px_45px_rgba(15,45,82,.14)] md:block md:min-h-[260px]"
      >
        <img
          src="/assets/ai-aesthetic-banner.png"
          alt="Two women using a digital facial analysis preview"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.015]"
        />
        <div className="absolute inset-0 bg-[#b76e79]/10" />
        <div className="relative z-10 mx-auto flex min-h-[220px] max-w-xl flex-col items-center justify-center px-5 py-8 text-center text-white md:min-h-[260px]">
          <p className="text-xs font-semibold uppercase tracking-[.22em] drop-shadow-sm md:text-sm">Riverflow Laser &amp; Skin Clinic</p>
          <h2 className="mt-2 bg-secondary px-3 py-1 text-xl font-bold uppercase tracking-tight shadow-sm md:text-3xl">
            AI Aesthetic Simulator
          </h2>
          <span className="mt-5 inline-flex min-w-56 items-center justify-center border-2 border-white bg-white/5 px-8 py-3 text-base font-bold uppercase tracking-wide backdrop-blur-sm transition group-hover:bg-white group-hover:text-secondary md:text-xl">
            Try for free
          </span>
        </div>
      </Link>
    </section>
  );
}
