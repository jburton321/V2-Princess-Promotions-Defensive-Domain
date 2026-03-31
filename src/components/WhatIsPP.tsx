import { Callout } from '@/components/Callout'
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
          <h2>What Is Princess Promotions, Exactly?</h2>
          <p className="what-is-intro-sub">
            In plain terms: it&apos;s the onboard and follow-up offer that bundles cruise credits,
            hotel value, and perks — packaged for guests who already love Princess.
          </p>
          <p>
            Princess Promotions isn&apos;t a separate cruise line. It&apos;s an{' '}
            <strong>approved promotional program</strong> you&apos;ll see at sea or on a call,
            delivered with Princess branding and backed by structured redemption paths — with day-to-day
            package support run by <strong>Open Network Exchange (ONE Inc.)</strong>.
          </p>
          <p>
            If you&apos;re hearing about it for the first time, slow down, compare the numbers, and
            use the checklists below — the best deals are the ones you understand before you sign.
          </p>
          <blockquote className="m-0 min-w-0 rounded-[0_14px_14px_0] border-l-[3px] border-blue bg-blue-pl py-4 pl-[1.15rem] pr-[1.1rem] font-sans text-[0.95rem] leading-[1.65] text-tx-2 [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-navy-mid">
            <p>
              What they sell are <strong>Future Cruise Packages</strong> — bundles including Future
              Cruise Credits (FCCs worth $1 each), hotel stay certificates, hotel credits
              ($600–$4,000), onboard credits, and sometimes Elite status.
            </p>
          </blockquote>
        </WhatIsPPIntroGrid>

        <ScrollReveal className="facts">
          <div className="fact f1">
            <div className="fv">$3K–$15K</div>
            <div className="fl">Package price range</div>
          </div>
          <div className="fact f2">
            <div className="fv">$1 = 1 FCC</div>
            <div className="fl">Credit value</div>
          </div>
          <div className="fact f3">
            <div className="fv">7 days</div>
            <div className="fl">Cancellation window</div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Callout variant="warning">
            <strong>Key distinction:</strong> FCCs are redeemed through Princess Cruises
            (1-800-PRINCESS). Hotel certificates and credits are managed by Princess Promotions. This
            split is where most confusion starts.
          </Callout>
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
          <div className="co co-b">
            <div className="b" aria-hidden />
            <div className="i">
              <strong>Focus on the FCC Value.</strong> Does the FCC value alone justify the package
              price? If yes, hotel credits are a bonus. If you need hotel credits to make the math
              work, scrutinize more carefully.
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="co co-w">
            <div className="b" aria-hidden />
            <div className="i">
              <strong>Get the Total Cost in Writing.</strong> Ask for a line-by-line breakdown of the
              purchase price, all installments, and any additional fees. Multiple complaints stem from
              consumers who believed the down payment was the total cost.
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="co co-b">
            <div className="b" aria-hidden />
            <div className="i">
              <strong>Understand the 7-Day Cancellation Window.</strong> Make your decision before day
              7. Send written cancellation via email — don&apos;t rely on phone calls alone.
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="co co-w">
            <div className="b" aria-hidden />
            <div className="i">
              <strong>Ask About Your State&apos;s Refund Policies.</strong> Some states have different
              rules about refunds for these types of packages. Confirm what applies to you before
              signing.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
