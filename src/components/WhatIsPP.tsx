import { PrincessPromotionsDirectLink } from '@/lib/princess-phone'
import { ScrollReveal } from '@/components/ScrollReveal'
import { WhatIsPPIntroGrid } from '@/components/WhatIsPPIntroGrid'
import { siteImages } from '@/lib/site-images'

export function WhatIsPP() {
  return (
    <section className="sec band-page" id="what-is-pp">
      <div className="editorial">
        <WhatIsPPIntroGrid
          imageSrc={siteImages.editorialCruiseInterior}
          imageAlt="Princess Promotions onboard sales presentation - cruise ship interior"
        >
          <div className="kicker">Understanding the Program</div>
          <h2>What Is Princess Promotions?</h2>
          <p className="what-is-intro-sub">
            In plain terms: it&apos;s the onboard and follow-up offer that bundles cruise credits,
            hotel value, and perks — packaged for guests who already love Princess.
          </p>
          <p>
            Princess Promotions is the program that manages Princess Future Cruise Packages and
            provides the redemption and fulfillment site for all travel products included in those
            packages. Princess Future Cruise Packages are endorsed and supported by Princess Cruise
            Lines.
          </p>
          <p>
            It&apos;s still an <strong>approved promotional program</strong> you&apos;ll see at sea
            or on a call, with Princess branding and structured redemption paths—not a separate
            cruise line.
          </p>
        </WhatIsPPIntroGrid>

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
              Total estimated value of travel benefits, based on highest package type.
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
                  Princess Future Cruise Packages bundle Future Cruise Credits, Onboard Credits, land
                  stays, and perks. Package benefits and credit amounts vary depending on the travel
                  package selected.
                </p>
              </header>
              <ul className="package-detail-list">
                <li>
                  <strong>Future Cruise Credits (FCCs)</strong>
                  <span className="pkg-li-body">
                    FCCs can be applied toward Princess cruise fare. Each FCC is worth $1 toward fare
                    and may be used on one booking or split across multiple bookings.
                  </span>
                </li>
                <li>
                  <strong>Earn more FCCs</strong>
                  <span className="pkg-li-body">
                    Shopping name-brand merchandise and wine at princesspromotions.com can earn FCCs
                    back—select tiers earn up to 25% in FCCs to use towards future cruises.
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
                    Packages include certificates that can be redeemed for 5-night stays at
                    participating hotels and resorts. They can be used before or after a cruise, or as
                    their own land vacation.
                  </span>
                </li>
                <li>
                  <strong>Hotel Credits</strong>
                  <span className="pkg-li-body">
                    Hotel Credits can help cover eligible hotel or resort stays beyond those included
                    with the other certificates.
                  </span>
                </li>
              </ul>
              <h3 className="hotel-fcc-distinction-title" style={{ marginTop: '2rem' }}>
                How to Use Benefits
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
          <ul className="what-is-buy-grid" aria-label="What to evaluate before you buy">
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                01
              </span>
              <h3 className="what-is-buy-card__title">Weigh the whole package.</h3>
              <p className="what-is-buy-card__body">
                Value comes from the combined bundle—FCCs, land stays, hotel credits, and perks. Does
                the total package justify the price for how you travel? If you are leaning on one line
                item alone to make the math work, slow down and compare in writing.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                02
              </span>
              <h3 className="what-is-buy-card__title">Get the total cost in writing.</h3>
              <p className="what-is-buy-card__body">
                Ask for a line-by-line breakdown of the purchase price, all installments, and any
                additional fees. Multiple complaints stem from consumers who believed the down payment
                was the total cost.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                03
              </span>
              <h3 className="what-is-buy-card__title">Understand cancellation timing.</h3>
              <p className="what-is-buy-card__body">
                Most buyers have seven days to cancel from purchase. Florida residents have 30 days,
                and Washington residents have 15. Cancellations are handled by phone, with written
                cancellation by mail as the only other option—so call promptly and keep a record.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                04
              </span>
              <h3 className="what-is-buy-card__title">Ask about the cancellation and refund policy.</h3>
              <p className="what-is-buy-card__body">
                Ask about the cancellation and refund policy that applies to your purchase before
                signing.
              </p>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
