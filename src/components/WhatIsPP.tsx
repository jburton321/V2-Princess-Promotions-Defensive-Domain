import { PrincessPromotionsDirectLink } from '@/lib/princess-phone'
import { ScrollReveal } from '@/components/ScrollReveal'

const CUSTOMER_REVIEWS = [
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

export function WhatIsPP() {
  return (
    <section className="sec band-page" id="what-is-pp">
      <div className="editorial">
        <ScrollReveal>
          <div className="kicker">Understanding the Program</div>
          <h2>What Is Princess Promotions?</h2>
          <p>
            Princess Promotions is an authorized partner of Princess Cruise Lines, offering Princess
            Future Cruise Packages and products designed to enhance the guest vacation experience.
          </p>
          <p>
            Sold onboard or over the phone, Future Cruise Packages provide customer value by
            combining Future Cruise Credits, Onboard Credits, Stay Certificates, Hotel Savings and
            more.
          </p>
        </ScrollReveal>

        <ScrollReveal className="facts">
          <div className="fact f1">
            <div className="fv">Priced at $3K–$15K</div>
            <div className="fl fact-fl-prose">
              Packages with a variety of travel benefits included.
            </div>
          </div>
          <div className="fact f3">
            <div className="fv">Valued at up to $25K</div>
            <div className="fl fact-fl-prose">
              Total published estimated value, including Future Cruise Credits, Onboard Credits, Stay
              Certificates, Hotel Credits and promotional onboard benefits.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="hotel-fcc-distinction">
            <div className="hotel-fcc-distinction-toprule" aria-hidden />
            <div className="hotel-fcc-distinction-inner">
              <header className="hotel-fcc-distinction-hd">
                <h3 className="hotel-fcc-distinction-title">
                  <span className="hotel-fcc-distinction-accent-word">What&apos;s Included?</span>
                </h3>
                <p className="hotel-fcc-distinction-sub">
                  Princess Future Cruise Packages bundle Future Cruise Credits, Onboard Credits, Stay
                  Certificates and more. Included benefits and amounts vary by package.
                </p>
              </header>
              <ul className="package-detail-list">
                <li>
                  <strong>Future Cruise Credits (FCCs)</strong>
                  <span className="pkg-li-body">
                    Each FCC is worth $1 toward your cruise fare. You can use FCCs across one or more
                    bookings.
                  </span>
                </li>
                <li>
                  <strong>Earn more FCCs</strong>
                  <span className="pkg-li-body">
                    Some packages may include the ability to earn up to 25% additional FCCs through
                    qualifying purchases at{' '}
                    <a
                      href="https://www.princesspromotions.com"
                      className="split-inline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      princesspromotions.com
                    </a>
                    .
                  </span>
                </li>
                <li>
                  <strong>Onboard Credits (OBCs)</strong>
                  <span className="pkg-li-body">
                    Onboard Credit is applied to the first cruise booked with your Future Cruise
                    Package and can be used towards onboard extras like excursions, beverages, boutique
                    purchases, and Lotus Spa services.
                  </span>
                </li>
                <li>
                  <strong>Pre- or Post-Cruise Hotel Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Some packages include certificates that can be redeemed for 2-night stays before or
                    after your cruise.
                  </span>
                </li>
                <li>
                  <strong>Premium Land Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Packages include certificates that can be redeemed for 5-night stays at participating
                    hotels and resorts. They can be used before or after a cruise, or as their own land
                    vacation.
                  </span>
                </li>
                <li>
                  <strong>Hotel Savings</strong>
                  <span className="pkg-li-body">
                    Save up to 25% on thousands of hotels worldwide.
                  </span>
                </li>
              </ul>
              <h3 className="hotel-fcc-distinction-title" style={{ marginTop: '2rem' }}>
                Top Tips for Benefits
              </h3>
              <div className="hotel-fcc-lanes">
                <div className="hotel-fcc-lane hotel-fcc-lane--cruise">
                  <p>
                    Future Cruise Credits and Onboard Credits can be viewed in your Princess.com
                    account. When you&apos;re ready to book, Future Cruise Credits may be redeemed
                    directly with Princess, through your Cruise Vacation Planner, or with your travel
                    agent.
                  </p>
                </div>
                <div className="hotel-fcc-lane hotel-fcc-lane--hotel">
                  <p>
                    Stay Certificates and Hotel Credits can be redeemed through Princess Promotions by
                    calling <PrincessPromotionsDirectLink /> or visiting{' '}
                    <a
                      href="https://www.princesspromotions.com"
                      className="split-inline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      princesspromotions.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal style={{ marginTop: '3rem' }}>
          <div className="sec-rule" aria-hidden />
        </ScrollReveal>

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
