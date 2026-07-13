"use client";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TREATMENTS } from "../data/treatments";

const questions = [
  {
    id: "goal",
    title: "What would you most like to improve?",
    options: [
      ["unwanted-hair", "Unwanted hair", ["laserhairremoval"]],
      ["congestion", "Congestion or breakouts", ["acne", "hydrafacial", "chemicalpeels"]],
      ["tone", "Dark spots or uneven tone", ["pigmentation", "chemicalpeels", "skinrejuvenation"]],
      ["texture", "Texture or acne marks", ["microneedling", "chemicalpeels", "skinrejuvenation"]],
      ["aging", "Fine lines or firmness", ["antiaging", "microneedling", "skinrejuvenation"]],
      ["hydration", "Dryness or a fresh glow", ["hydrafacial", "oxygenofacial", "facial"]],
      ["scalp", "Scalp buildup or comfort", ["scalp"]],
    ],
  },
  {
    id: "recovery",
    title: "How much visible recovery are you comfortable with?",
    options: [
      ["minimal", "As little as possible", ["hydrafacial", "oxygenofacial", "facial", "laserhairremoval", "scalp"]],
      ["short", "A short recovery is okay", ["chemicalpeels", "acne", "pigmentation"]],
      ["flexible", "I’m flexible for gradual results", ["microneedling", "skinrejuvenation", "antiaging"]],
    ],
  },
  {
    id: "style",
    title: "Which treatment experience sounds most comfortable?",
    options: [
      ["facial", "A relaxing facial-style visit", ["facial", "hydrafacial", "oxygenofacial", "scalp"]],
      ["device", "An advanced device-based treatment", ["laserhairremoval", "microneedling", "skinrejuvenation", "acne"]],
      ["exfoliation", "A focused resurfacing treatment", ["chemicalpeels", "pigmentation", "antiaging"]],
      ["unsure", "I’d like professional guidance", []],
    ],
  },
];

const calculateResults = (answers) => {
  const scores = {};
  questions.forEach((question, questionIndex) => {
    const selected = question.options.find(([value]) => value === answers[question.id]);
    selected?.[2].forEach((id, resultIndex) => {
      const weight = questionIndex === 0 ? 12 - resultIndex * 2 : 5 - resultIndex;
      scores[id] = (scores[id] || 0) + weight;
    });
  });

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id]) => TREATMENTS[id])
    .filter(Boolean);
};

export default function TreatmentFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const complete = step === questions.length;
  const results = useMemo(() => calculateResults(answers), [answers]);
  const question = questions[step];

  const choose = (id, value) => {
    setAnswers((current) => ({ ...current, [id]: value }));
    setStep((current) => current + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section className="relative overflow-hidden bg-secondary py-14 text-white md:py-16" aria-labelledby="treatment-finder-heading">
      <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-accent">Treatment finder</p>
          <h2 id="treatment-finder-heading" className="mt-3 text-3xl font-bold md:text-4xl">Not sure where to start?</h2>
          <p className="mt-4 max-w-xl leading-7 text-white/75">
            Answer three quick questions to explore Riverflow services that may match your priorities and preferred treatment experience.
          </p>
          <p className="mt-4 text-sm text-white/55">This guide is educational and does not replace an in-person suitability assessment.</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white p-6 text-slate-700 shadow-2xl md:p-8">
          {!complete ? (
            <>
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Question {step + 1} of {questions.length}</p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {questions.map((item, index) => <span key={item.id} className={`h-1.5 w-8 rounded-full ${index <= step ? "bg-primary" : "bg-slate-200"}`} />)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary md:text-2xl">{question.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {question.options.map(([value, label]) => (
                  <button key={value} type="button" onClick={() => choose(question.id, value)} className="rounded-xl border border-accent/30 px-4 py-3 text-left text-sm font-semibold transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    {label}
                  </button>
                ))}
              </div>
              {step > 0 && <button type="button" onClick={() => setStep((current) => current - 1)} className="mt-5 text-sm font-semibold text-primary hover:text-secondary">← Previous question</button>}
            </>
          ) : (
            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Your matches</p>
              <h3 className="mt-2 text-2xl font-bold text-secondary">Treatments worth exploring</h3>
              <div className="mt-5 space-y-3">
                {results.map((treatment, index) => (
                  <Link key={treatment.id} to={`/treatments/${treatment.id}`} className="group flex items-center gap-4 rounded-xl border border-accent/25 p-3 transition hover:border-primary hover:shadow-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background font-bold text-primary">{index + 1}</span>
                    <span className="min-w-0 flex-1"><strong className="block text-secondary group-hover:text-primary">{treatment.title}</strong><span className="block truncate text-sm text-slate-500">{treatment.short}</span></span>
                    <span className="text-primary" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/make-appointment" className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-secondary">Request a consultation</Link>
                <button type="button" onClick={reset} className="rounded-full border border-primary/30 px-5 py-2.5 text-sm font-bold text-primary hover:bg-background">Start again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
