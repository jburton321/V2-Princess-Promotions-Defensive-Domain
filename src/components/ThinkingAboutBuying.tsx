import { ScrollReveal } from '@/components/ScrollReveal'

const CUSTOMER_REVIEWS = [
  {
    quote:
      'The future cruise credits, on board credits and certificates for hotels, creative a value I cannot pass up. The whole package was a value to me.',
    by: 'Desiree J.',
  },
  {
    quote:
      'The package provided great value, flexibility, and attractive benefits that made booking my future cruises easy and rewarding. The onboard credits, promotions, and overall booking experience exceeded my expectations.',
    by: 'Naser E.',
  },
  {
    quote:
      'We still had some package benefits remaining & we were not sure how to or what use them on. A rep from Princess Promotions called so we were able to use all the package benefits.',
    by: 'Richard J.',
  },
  {
    quote:
      'The package was good value for money, but there were limited options for travel using the certificate. If you want to get a good value for money out of it, you really only have a few choices as to where you can stay.',
    by: 'Shannon P.',
  },
  {
    quote:
      'The Concierge Team has been excellent. They helped me get started with the online tool and then helped us get a great deal on our 5 night stay coming up in February. They also helped when I made a mistake on a reservation and straightened it out for me right away.',
    by: 'Patricia G.',
  },
  {
    quote:
      'Always easy to book, incredibly great options on hotels, and everything was easy to do. A great value.',
    by: 'Laurie G.',
  },
  {
    quote:
      'Although, we found the time limit to travel can be challenging, we are excited that we are gonna visit great destinations, and not lose any of our FFC.',
    by: 'Amando D.',
  },
  {
    quote:
      'We were able to make a bucket list trip come true and we were able to choose hotels at the initial port and terminal port using the package.',
    by: 'George C.',
  },
  {
    quote:
      'Easy to use and claim overall. And the portal helped to see what credits were left and how to claim',
    by: 'Andrew K.',
  },
]

export function ThinkingAboutBuying() {
  return (
    <section className="sec band-page" id="thinking-about-buying">
      <div className="editorial">
        <ScrollReveal className="kicker">Before You Buy</ScrollReveal>
        <ScrollReveal>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Thinking About Buying? What to Evaluate
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We&apos;ve looked through customer reviews and common questions to pull together a few
            helpful tips and things to know before you buy.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="buy-subhead">Read Customer Reviews</h3>
          <p className="buy-subhead-note">
            Feedback shared by travelers who purchased a Princess Future Cruise Package.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="testimonial-ribbon" role="list" aria-label="Customer reviews">
            {CUSTOMER_REVIEWS.map((review) => (
              <figure key={review.quote} className="testimonial-ribbon-card" role="listitem">
                <blockquote className="testimonial-ribbon-quote">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="testimonial-ribbon-by">{review.by}</figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="buy-subhead">More Considerations</h3>
        </ScrollReveal>
        <ScrollReveal>
          <ul className="what-is-buy-grid" aria-label="What to evaluate before you buy">
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                01
              </span>
              <h3 className="what-is-buy-card__title">Weigh the whole package.</h3>
              <p className="what-is-buy-card__body">
                Value comes from the combined bundle: Future Cruise Credits, Onboard Credits, Land
                Stay Certificates, Hotel Savings and more. If one benefit is carrying most of the
                value for you, compare the numbers carefully and determine whether the overall
                package still makes sense for your travel plans.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                02
              </span>
              <h3 className="what-is-buy-card__title">Get the total cost in writing.</h3>
              <p className="what-is-buy-card__body">
                Ask for a line-by-line breakdown of the price and any installments, and any
                additional fees. Some buyers have reported misunderstanding the total purchase price,
                believing the initial payment represented the full cost. Requesting a written
                breakdown can help avoid confusion.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                03
              </span>
              <h3 className="what-is-buy-card__title">Understand cancellation timing.</h3>
              <p className="what-is-buy-card__body">
                Most buyers have seven days to cancel from purchase. Florida residents have 30 days,
                and Washington residents have 15.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                04
              </span>
              <h3 className="what-is-buy-card__title">Know how you plan to use the benefits.</h3>
              <p className="what-is-buy-card__body">
                Think about how soon you&apos;ll take another Princess cruise, whether you&apos;ll use
                the certificates and credits, and whether the included benefits fit your travel
                style.
              </p>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
