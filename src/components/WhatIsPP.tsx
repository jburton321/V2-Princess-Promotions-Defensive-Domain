import { PrincessPhoneLink } from '@/lib/princess-phone'
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
            packages (other than Future Cruise Credits and Onboard Credits). Princess Future Cruise
            Packages are endorsed and supported by Princess Cruise Line.
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
              yet. It typically includes Future Cruise Credits (FCCs: $1 each toward cruise fare),
              pre/post hotel stay certificates, Premium Land Stay Certificates, hotel credits
              ($600–$4,000), onboard credits, and promotional onboard benefits when you sail.
            </p>
          </blockquote>
        </WhatIsPPIntroGrid>

        <ScrollReveal className="facts">
          <div className="fact f1">
            <div className="fv">$3K–$15K</div>
            <div className="fl">Typical range—judge the full package, not the FCC line alone</div>
          </div>
          <div className="fact f2">
            <div className="fv">$1 = 1 FCC</div>
            <div className="fl">Future Cruise Credit (FCC) value</div>
          </div>
          <div className="fact f3">
            <div className="fv">At sea</div>
            <div className="fl">Many offers are presented onboard; some perks are sail-limited</div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="hotel-fcc-distinction">
            <div className="hotel-fcc-distinction-toprule" aria-hidden />
            <div className="hotel-fcc-distinction-inner">
              <header className="hotel-fcc-distinction-hd">
                <h3 className="hotel-fcc-distinction-title">
                  Hotel <span className="hotel-fcc-distinction-accent-word">credits</span>
                </h3>
                <p className="hotel-fcc-distinction-sub">
                  <strong>are separate from Future Cruise Credits.</strong>
                </p>
              </header>
              <div className="hotel-fcc-lanes">
                <div className="hotel-fcc-lane hotel-fcc-lane--cruise">
                  <p>
                    FCCs are redeemed through Princess Cruises (<PrincessPhoneLink />
                    ).
                  </p>
                </div>
                <div className="hotel-fcc-lane hotel-fcc-lane--hotel">
                  <p>Hotel certificates and credits are managed by Princess Promotions.</p>
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
            If you&apos;re attending an onboard presentation or received a follow-up call,
            here&apos;s how to evaluate the offer:
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
