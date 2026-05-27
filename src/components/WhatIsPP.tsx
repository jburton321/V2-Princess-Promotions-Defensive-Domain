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
            Line.
          </p>
          <p>
            It&apos;s still an <strong>approved promotional program</strong> you&apos;ll see at sea
            or on a call, with Princess branding and structured redemption paths—not a separate
            cruise line.
          </p>
          <p>
            If you&apos;re hearing about it for the first time, slow down, compare the numbers, and
            use the checklists below.
          </p>
          <blockquote className="m-0 min-w-0 rounded-[0_14px_14px_0] border-l-[3px] border-blue bg-blue-pl py-4 pl-[1.15rem] pr-[1.1rem] font-sans text-[0.95rem] leading-[1.65] text-tx-2 [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-navy-mid">
            <p>
              The <strong>Princess Ultimate Future Cruise Package</strong> bundles your next Princess
              cruise with other travel products—even when you have not picked a date or itinerary
              yet. It typically includes Future Cruise Credits (FCCs: each FCC is worth $1 toward
              cruise fare), Pre- or Post-Cruise Hotel Stay Certificates, Premium Land Stay
              Certificates, Hotel Credits ($600–$4,000), Onboard Credits, and, on select packages,
              Promotional Onboard Benefits when you sail.
            </p>
          </blockquote>
        </WhatIsPPIntroGrid>

        <ScrollReveal className="facts">
          <div className="fact f1">
            <div className="fv">$3K–$15K</div>
            <div className="fl fact-fl-prose">
              Price range of packages with a variety of travel benefits included.
            </div>
          </div>
          <div className="fact f3">
            <div className="fv">$25.5K</div>
            <div className="fl fact-fl-prose">
              Total published value up to about $25,500 on top tiers—FCCs, certificates, Marketplace
              savings, and more (varies by package).
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="hotel-fcc-distinction">
            <div className="hotel-fcc-distinction-toprule" aria-hidden />
            <div className="hotel-fcc-distinction-inner">
              <header className="hotel-fcc-distinction-hd">
                <h3 className="hotel-fcc-distinction-title">
                  <span className="hotel-fcc-distinction-accent-word">Hotel Credits</span>
                  {' '}
                  are separate from Future Cruise Credits
                </h3>
                <p className="hotel-fcc-distinction-sub">
                  Princess Future Cruise Packages bundle Future Cruise Credits, Onboard Credits, land
                  stays, and perks—exact benefits depend on what you buy. Package benefits and credit
                  amounts vary depending on the travel package selected.
                </p>
              </header>
              <ul className="package-detail-list">
                <li>
                  <strong>Future Cruise Credits (FCCs)</strong>
                  <span className="pkg-li-body">
                    FCCs pay toward Princess cruises once you are ready to book. Each FCC is worth $1
                    toward fare, can apply across the next 24 months (per offer terms), and may be used
                    on one booking or split across several.
                  </span>
                </li>
                <li>
                  <strong>Earn more FCCs</strong>
                  <span className="pkg-li-body">
                    Shopping name-brand merchandise and wine at princesspromotions.com can earn extra
                    FCCs back on select packages—tiers sometimes cite up to 25% back in credits on
                    qualifying purchases.
                  </span>
                </li>
                <li>
                  <strong>Onboard Credits (OBCs)</strong>
                  <span className="pkg-li-body">
                    An Onboard Credit amount may post to your account on your qualifying Princess
                    sailing and can offset onboard extras—think excursions, beverages, boutique
                    purchases, and Lotus Spa services—subject to fare rules.
                  </span>
                </li>
                <li>
                  <strong>Premium Land Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Many packages include up to two five-night stay certificates redeemable at a wide
                    catalog of hotels and resorts. Use them around a cruise or as standalone land
                    vacations depending on terms.
                  </span>
                </li>
                <li>
                  <strong>Pre- or Post-Cruise Hotel Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Select tiers add certificates tailored to hotel nights before or after your cruise,
                    including independent hotel stays outside the sailing window.
                  </span>
                </li>
                <li>
                  <strong>Hotel Credits</strong>
                  <span className="pkg-li-body">
                    Hotel Credits are exclusive to Princess Future Cruise Packages and apply toward stays
                    booked through the Princess Promotions hotel storefront—a broad inventory spanning
                    mainstream brands and resort destinations.
                  </span>
                </li>
                <li>
                  <strong>Promotional Onboard Benefits</strong>
                  <span className="pkg-li-body">
                    The highest-tier package includes recurring onboard perks every time you sail while
                    your package is active—confirm what attaches to your specific purchase.
                  </span>
                </li>
              </ul>
              <div className="hotel-fcc-lanes">
                <div className="hotel-fcc-lane hotel-fcc-lane--cruise">
                  <p>FCCs are redeemed through Princess Cruises.</p>
                </div>
                <div className="hotel-fcc-lane hotel-fcc-lane--hotel">
                  <p>
                    Pre- or Post-Cruise Hotel Stay Certificates and Hotel Credits are redeemed through
                    Princess Promotions.
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
            These checkpoints aren&apos;t here to tear down the program—they&apos;re the diligence steps
            savvy buyers take before signing. If you&apos;re attending an onboard presentation or
            received a follow-up call, walk through them at your pace:
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
              <h3 className="what-is-buy-card__title">Get the Total Cost in Writing.</h3>
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
                and Washington residents have 15. Send written cancellation via email—don&apos;t rely
                on phone calls alone.
              </p>
            </li>
            <li className="what-is-buy-card">
              <span className="what-is-buy-card__num" aria-hidden>
                04
              </span>
              <h3 className="what-is-buy-card__title">Ask About Your State&apos;s Refund Policies.</h3>
              <p className="what-is-buy-card__body">
                Some states have different rules about refunds for these types of packages. Confirm what
                applies to you before signing.
              </p>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
