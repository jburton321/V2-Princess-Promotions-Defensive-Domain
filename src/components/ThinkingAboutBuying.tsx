import { ScrollReveal } from '@/components/ScrollReveal'

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
