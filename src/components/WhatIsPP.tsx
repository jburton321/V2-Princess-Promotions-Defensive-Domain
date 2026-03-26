import { Callout } from '@/components/Callout'
import { ScrollReveal } from '@/components/ScrollReveal'
import { WhatIsPPIntroGrid } from '@/components/WhatIsPPIntroGrid'
import { siteImages } from '@/lib/site-images'

export function WhatIsPP() {
  return (
    <section className="sec band-page">
      <div className="editorial">
        <WhatIsPPIntroGrid
          imageSrc={siteImages.editorialCruiseInterior}
          imageAlt="Princess Promotions onboard sales presentation - cruise ship interior"
        >
          <div className="kicker">Understanding the Program</div>
          <h2>What Is Princess Promotions, Exactly?</h2>
          <p className="what-is-intro-sub">
            This is the first thing most people get wrong, and it’s the source of a lot of the
            frustration we found in complaints.
          </p>
          <p>
            Princess Promotions is <strong>not a standalone travel company</strong>. It&apos;s an
            onboard sales program connected to Princess Cruises, operated through a third-party
            company called <strong>Open Network Exchange (ONE Inc.)</strong>.
          </p>
          <p>
            You’ll encounter it during a sales presentation while already on a Princess Cruise
            ship, or through a follow-up phone call after you’ve booked.
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
      </div>
    </section>
  )
}
