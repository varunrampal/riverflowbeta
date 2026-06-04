import hydraFacialImg from "../assets/images/services/HydraFacial.jpg";
import laserhairremoval from'../assets/images/services/laser-hair-removal.jpg'
import microneedling from'../assets/images/services/microneedling.jpg'
import chemicalpeels from'../assets/images/services/chemicalpeels.jpg'
import hydrafacial from"../assets/images/services/HydraFacial.jpg"
import hairservices from'../assets/images/services/HairServices.jpg'
import oxygenofacial from'../assets/images/services/Oxygeneo.jpg'
import scalp from'../assets/images/services/scalp.webp'
import acne from'../assets/images/services/acne.jpg'
import antiaging from'../assets/images/services/anti-aging.webp'
import pigmentation from "../assets/images/services/pigmentation.jpeg";
import skinrejuvenation from "../assets/images/services/skin-rejunivation.jpg";

const makeBeforeAfterGallery = (title, image) => [
  {
    title: `${title} Before & After`,
    before: image,
    after: image,
    note: "Replace these placeholder images with real before and after photos for this treatment.",
  },
];

export const TREATMENTS = {
  facial: {
    id: "facial",
    title: "Signature Facial Treatment",
    image:hydraFacialImg,
    beforeAfterGallery: makeBeforeAfterGallery("Signature Facial Treatment", hydraFacialImg),
    short: "Deep cleansing, exfoliation, hydration and glow.",
    content: `
Our facial treatments are designed to target dullness, congestion, and dehydrated skin.
We cleanse, exfoliate, extract (if needed) and infuse the skin with hydrating ingredients.
Perfect before events or as monthly maintenance.
    `,
  },
  laserhairremoval: {
    id: "laserhairremoval",
    title: "Laser Hair Removal",
    image:
      laserhairremoval,
    beforeAfterGallery: makeBeforeAfterGallery("Laser Hair Removal", laserhairremoval),
    short: "Long-term hair reduction for smooth, comfortable skin.",
    content: `
Welcome to Riverflow Laser & Skin Clinic — your trusted destination for advanced skincare and beauty solutions. Discover our premium Laser Hair Removal treatment, designed to deliver silky-smooth, hair-free skin effortlessly. Say goodbye to the inconvenience of waxing and shaving, and embrace the long-lasting confidence that comes with our state-of-the-art laser technology.
    `,
  },
  microneedling: {
    id: "microneedling",
    title: "Collagen Induction",
    image:
      microneedling,
    beforeAfterGallery: makeBeforeAfterGallery("Collagen Induction", microneedling),
    short: "RF microneedling for tightening and contouring.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Professional microneedling services that improve skin tone, reduce scars and fine lines by stimulating collagen production.Stimulates collagen and elastin naturally through micro-injuries.
    `,
  },
    chemicalpeels: {
    id: "chemicalpeels",
    title: "Chemical Peels",
    image:
      chemicalpeels,
    beforeAfterGallery: makeBeforeAfterGallery("Chemical Peels", chemicalpeels),
    short: "Removes dead skin cells to reveal smoother, brighter skin.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. We offer medical-grade peels that exfoliate the skin and reduce the appearance of wrinkles, acne scars, and hyperpigmentation Removes dead skin cells to reveal smoother, brighter skin.
    `,
  },
      hairservices: {
    id: "hairservices",
    title: "Hair Services",
    image:
      hairservices,
    beforeAfterGallery: makeBeforeAfterGallery("Hair Services", hairservices),
    short: "From trims to layered styles for all occasions.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Expert hairstyling, cutting, and treatments tailored to your needs. We enhance your natural look with care and precision.Balayage, root touch-up, and vibrant full-color options.
    `,
  },
   hydrafacial: {
    id: "hydrafacial",
    title: "Hydra Facial",
    image:
      hydrafacial,
    beforeAfterGallery: makeBeforeAfterGallery("Hydra Facial", hydrafacial),
    short: "Cleanses, exfoliates, extracts, and hydrates in a single session.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. HydraFacial uses patented Vortex-Fusion® technology to cleanse, extract, and hydrate, leaving your skin radiant and plump.
    `,
  },
  scalp: {
    id: "scalp",
    title: "Scalp Therapy",
    image:
      scalp,
    beforeAfterGallery: makeBeforeAfterGallery("Scalp Therapy", scalp),
    short: "Soothing and nourishing treatments for scalp health.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Scalp therapy involves treatments like deep cleansing, exfoliation, and massages to improve scalp health and relieve issues like dandruff, excess oil, and dryness. These treatments can also promote hair growth by improving blood flow to the roots and offer relaxation by reducing stress.
    `,
  },
    oxygenofacial: {
    id: "oxygenofacial",
    title: "OxyGeneo Facial",
    image:
      oxygenofacial,
    beforeAfterGallery: makeBeforeAfterGallery("OxyGeneo Facial", oxygenofacial),
    short: "Improve skin texture, tone, and overall appearance",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. An OxyGeneo facial is a three-in-one skin treatment that combines exfoliation, oxygenation, and infusion to improve skin texture, tone, and overall appearance.
    `,
  },
      acne: {
    id: "acne",
    title: "Acne Treatment",
    image:
      acne,
    beforeAfterGallery: makeBeforeAfterGallery("Acne Treatment", acne),
    short: "Target overactive sebaceous glands to reduce acne inflammation.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Using a controlled Nd:YAG laser to safely penetrate into skin and effectively target overactive sebaceous glands. Rejuva’s acne laser treatment reduces new acne inflammation.
    `,
  },
  antiaging: {
    id: "antiaging",
    title: "Anti-Aging Treatments",
    image:
      antiaging,
    beforeAfterGallery: makeBeforeAfterGallery("Anti-Aging Treatments", antiaging),
    short: "Reduce the appearance of wrinkles and fine lines.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Our anti-aging treatments help reduce the appearance of wrinkles and fine lines, promoting a more youthful and radiant complexion.
    `,
  },
  pigmentation: {
    id: "pigmentation",
    title: "Pigmentation Treatments",
    image:
      pigmentation,
    beforeAfterGallery: makeBeforeAfterGallery("Pigmentation Treatments", pigmentation),
    short: "Target excess melanin to reduce dark spots and uneven tone.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Pigmentation treatments target excess melanin to reduce dark spots, sun damage, and uneven tone, revealing clearer, more radiant skin.
    `,
  },
  skinrejuvenation: {
    id: "skinrejuvenation",
    title: "Skin Rejuvenation",
    image:
      skinrejuvenation,
    beforeAfterGallery: makeBeforeAfterGallery("Skin Rejuvenation", skinrejuvenation),
    short: "Restore a youthful, radiant complexion.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Skin rejuvenation refers to treatments designed to restore a youthful, radiant complexion by boosting collagen, removing damaged cells, or targeting pigmentation.
    `,
  }

};
