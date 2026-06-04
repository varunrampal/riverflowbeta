  
  export default function About(){
    return(
  <section id="about" className="py-12 lg:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              why choose us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
              Licensed, clean & friendly clinic
            </h2>
            <p className="text-slate-600 mb-4">
              We follow strict hygiene protocols and use modern aesthetic
              devices. Each client receives a skin/hair assessment before
              treatment so we can tailor the energy and number of sessions.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Personalized treatment plans</li>
              <li>• Trained & certified technicians</li>
              <li>• Convenient Langley location</li>
            </ul>
          </div>
          <div className="bg-secondary/5 rounded-3xl p-6 lg:p-8 border border-accent/20">
            <h3 className="text-lg font-semibold mb-2">
              Clinic information
            </h3>
            <p className="text-sm text-slate-600 mb-4">
             Unit 108 – 19705 56 Avenue Langley, BC V3A 3X7
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-background rounded-2xl p-3 border border-accent/20">
                <p className="text-slate-500 text-xs">Hours</p>
                <p className="font-semibold">Mon–Sat, 10am–6pm</p>
              </div>
              <div className="bg-background rounded-2xl p-3 border border-accent/20">
                <p className="text-slate-500 text-xs">Phone</p>
                <p className="font-semibold">+1 (604) 621-8311</p>
              </div>
              <div className="bg-background rounded-2xl p-3 col-span-2 border border-accent/20">
                <p className="text-slate-500 text-xs">Parking</p>
                <p className="font-semibold">Free on-site parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
