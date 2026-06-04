import th from '../assets/images/machines/th.jpeg'
import th2 from '../assets/images/machines/th2.jpeg'
import th3 from '../assets/images/machines/th3.jpeg'

// MachinesSection.jsx
const machines = [
  {
    title: "Soprano ICE Platinum",
    img: th,
    desc1:
      "The Soprano ICE Platinum is the gold standard for laser hair removal, combining three laser wavelengths into one innovative handpiece. This technology allows simultaneous targeting of different tissue depths and anatomical structures, ensuring maximum results and comfort.",
    desc2:
      "It's safe for all skin tones and ideal for treating both large and small areas efficiently. SHR™ technology gradually heats the dermis to damage hair follicles while avoiding injury to surrounding tissue.",
  },
  {
    title: "XCellarisPro Twist",
    img: th2,
    desc1:
      "The XCellarisPro Twist is a premium microneedling device designed for professional skin rejuvenation. It uses precise needle depth control and active needle retraction to stimulate collagen and elastin.",
    desc2:
      "Suitable for all skin types, it creates controlled microchannels to improve absorption of active ingredients, enhancing texture and overall skin health.",
  },
  {
    title: "OxyGeneo 3-in-1 Super Facial",
    img: th3,
    desc1:
      "The OxyGeneo 3-in-1 Super Facial provides complete skin renewal through exfoliation, oxygenation, and nutrient infusion.",
    desc2:
      "Perfect for dullness, fine lines, and uneven tone — it leaves the skin visibly smoother and more radiant after just one session.",
  },
];

export default function MachinesSection() {
  return (
    <section className="py-14 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Our Advanced Devices
          </h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            Medical-grade technology to deliver safe, comfortable and effective treatments.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {machines.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row gap-8 md:items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-sm bg-background border border-accent/20">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  {item.desc1}
                </p>
                <p className="text-slate-600 leading-relaxed">{item.desc2}</p>
                <div className="mt-5">
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-secondary transition">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
