import { useState } from "react";
import Layout from "../components/Layout";

const faqs = [
  {
    question: "Does laser hair removal hurt?",
    answer:
      "For most people, laser hair removal does not hurt. However, it all depends on your threshold for pain. Most people say that it feels like snapping a rubber band against the skin. But if you’re overly sensitive to pain, you may experience some minor discomfort. Fortunately, there are ways to reduce the discomfort. Prepare properly and follow a strict aftercare program. This will reduce pain and provide the most effective results."
  },
  {
    question: "Is Laser Hair Removal Safe?",
    answer:
      "The answer is yes. The U.S Food and Drug Administration approved it as a safe method for hair removal in 1997. However, laser hair removal is only safe when a licensed technician performs the procedure. During your consultation, make sure your technician has the proper certifications as required by your state."
  },
  {
    question: "How Does Laser Hair Removal Work?",
    answer:
      "Laser hair removal involves the use of laser pulses. These pulses emit light into the skin that destroys the root and follicle of the hair. When the root and follicle are destroyed, hair can no longer grow.For this process to work, the hair must be targeted during an active growth phase. However, individual hairs usually grow at different rates. Therefore, it takes several treatment sessions to capture every hair in the growth phase and produce optimal results."
  },
  {
    question: "How Much Does Laser Hair Removal Cost?",
    answer:
      "The cost of laser hair removal varies depending upon the area of the body you want to treat and how many sessions you need. The larger the area, the more time it will require. The amount of time will determine the exact price of treatment."
  },
    {
    question: "How Long Does Laser Hair Removal Last?",
    answer:
      "Some people see permanent results, while some may need a touch-up treatment every six to twelve months. Results vary depending on your hair type and skin type. Proper preparation and aftercare can also affect how long the results last."
  },
   {
    question: "How Old Do You Have to Be to Get Laser Hair Removal?",
    answer:
      "There is no specific age minimum, but it is important to wait until you’ve gone through puberty to begin laser treatments. Females should not begin treatment unless they’ve already started their menstrual cycle. Generally, fourteen is the earliest age that people should begin laser hair removal."
  },
  {
    question: "How Do You Prepare for Laser Hair Removal?",
    answer:
      "To prepare for laser hair removal, avoid plucking, waxing, and tanning for six weeks prior to your first treatment. In the days before treatment, avoid taking medications such as blood thinners, NSAIDs, and pain relievers. Take a shower and shave right before your treatment, but don’t apply any lotions, moisturizers, or sunscreens to the skin."
  },
  {
    question: "Can You Get Laser Hair Removal if You’re Pregnant?",
    answer:
      "It is best to play it safe and avoid laser hair removal while you’re pregnant. There is no evidence to suggest that it is unsafe, but there have not been long-term studies to analyze the effect of the laser on an unborn child. To protect your unborn baby, wait until after you’ve given birth to begin laser hair removal treatment."
  },
  {
    question: "Do You Leave a Tip After Laser Hair Removal?",
    answer:
      "As with anyone in any service industry, laser technicians always appreciate tips and gratuities. But instead of tipping a certain percentage like you would tip a waiter, tip a specific dollar amount. For example, tip $10–$20 on a small area, $20–$50 on a medium area, $50+ on a large area"
  },
    {
    question: "Can You Get Laser Hair Removal on Any Part of the Body?",
    answer:
      "Laser removal can be performed on any area of the body except the eyelids. The most popular treatment areas are the legs, back, arms, chest, upper lip, underarms, and bikini area. You can also get laser hair removal on your ears, nose, scalp, forehead, eyebrows, and other parts of your face"
  },
   {
    question: "Can Anybody Get Laser Hair Removal?",
    answer:
      "Anyone can get laser hair removal, regardless of skin color or hair type. However, people with light skin and dark hair tend to see faster and better results than people with light hair or a darker skin tone. Any man or woman can have the treatments, though pregnant women should wait until after they’ve given birth to begin their sessions."
  },
  {
    question: "Are There Side Effects to Laser Hair Removal?",
    answer:
      "The side effects are minimal. This is one of the primary benefits of laser hair removal.Some people experience temporary redness, itching, and swelling of the skin right after treatment. These side effects usually go away within a few hours and most can be soothed by applying aloe vera to the treated area. In rare cases, some people may see scars, burns, or blisters. But these side effects usually occur only in people who do not follow the proper aftercare plan."
  },
    {
    question: "How Many Laser Hair Removal Treatments Do You Need to Get?",
    answer:
      "In most cases, you’ll need between six and twelve treatments. These treatments are spaced out four to eight weeks apart. The waiting period is necessary to target every hair follicle while it’s in an active stage of the growth cycle. In rare cases, some people may see scars, burns, or blisters. But these side effects usually occur only in people who do not follow the proper aftercare plan."
  },
];
export default function FAQPage(){
      const [openIndex, setOpenIndex] = useState(0);
    return(
<Layout>
 <section className="bg-background py-10 lg:py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* Intro (from your previous section) */}
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">
          Laser Hair Removal
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 leading-tight">
          Laser Hair Removal FAQs:{" "}
          <span className="text-primary">13 Questions You’ve Been Dying to Ask</span>
        </h2>
        <p className="text-slate-600 mb-6">
          People have been plucking, waxing, and tweezing unwanted hair for decades. But when laser hair removal technology came to be in the mid-1990s, it changed the way that we groom.

Over the past twenty years, laser hair removal has become the go-to method for stopping unwanted hair growth.

And even though it’s been around for quite some time, people still have lots of questions about it.
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-accent/25 rounded-xl overflow-hidden bg-background"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-secondary">{item.question}</span>
                  <span
                    className={`shrink-0 h-7 w-7 rounded-full grid place-items-center text-white transition ${
                      isOpen ? "bg-primary rotate-45" : "bg-primary"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
</Layout>



);};
