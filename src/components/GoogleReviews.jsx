const reviewHighlights = [
  {
    title: "Namita Bhandari",
    text: "Amazing results from laser. Value for money. Above all Jyoti is an excellent person, gives great customer service!! She guides you very well keeping in mind your skin type and has great knowledge.",
  },
  {
    title: "Aleesha Benny",
    text: "I got my face done here. I have done at 2 places before , but I should say the result I got from here is exceptional and amazing. Even after the first session. I love her service and behavior. She is very easy going and great at what she does. I don't have enough words to thank her.",
  },
  {
    title: "Roop Sandhu",
    text: "Great service and very friendly environment. Jyoti is very professional and educate you on how you can take care of your skin. Her experience reflects in her works. Definitely going back to this place again..",
  },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=Riverflow+Laser+%26+Skin+Clinic+Inc+Google+Reviews";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="h-5 w-5 text-accent"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.1 1.3c.3-.8 1.5-.8 1.8 0l1.8 4.2 4.5.4c.9.1 1.2 1.2.5 1.8l-3.4 3 1 4.4c.2.9-.8 1.6-1.5 1.1L10 13.9l-3.8 2.3c-.8.5-1.7-.2-1.5-1.1l1-4.4-3.4-3c-.7-.6-.3-1.7.5-1.8l4.5-.4 1.8-4.2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-secondary/5 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Google Reviews
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-secondary">
              Trusted by clients
            </h2>
            <p className="mt-3 text-slate-600">
              See what clients are saying on Google, then share your own
              experience after your visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                View Google Reviews
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-accent/50 px-5 py-2 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
              >
                Write a Review
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/25 bg-background p-5 shadow-sm">
            <div className="flex flex-col gap-4 border-b border-accent/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-4xl font-bold text-secondary">4.8</div>
                <p className="text-sm font-semibold text-slate-500">
                  Google rating
                </p>
              </div>
              <Stars />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {reviewHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-accent/20 bg-secondary/5 p-4"
                >
                  <h3 className="text-sm font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
