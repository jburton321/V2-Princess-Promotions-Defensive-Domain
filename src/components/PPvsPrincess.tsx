import { Callout } from '@/components/Callout'
import { PrincessPhoneLink } from '@/lib/princess-phone'
import { MatchedHeightMediaGrid } from '@/components/MatchedHeightMediaGrid'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

export function PPvsPrincess() {
  return (
    <section className="sec-sm band-page">
      <div className="editorial editorial--pair">
        <MatchedHeightMediaGrid
          imageFirst
          gridClassName="media-grid media-grid--ship media-grid--entity-split"
          imageSrc={siteImages.editorialPrincessShip}
          imageAlt="Princess Cruises ship - separate entity from Princess Promotions"
        >
          <div className="kicker">The Princess connection</div>
          <h2>Is Princess Promotions the Same as Princess Cruises?</h2>
          <p className="entity-split-lead">
            <strong>Princess Promotions is an approved promotional package</strong>, offered in the
            Princess Cruises environment and fulfilled through licensed partners.
          </p>
          <p>
            It’s still a <strong>different team</strong> from the cruise line you already trust for
            your sailing: Princess Cruises handles your ship and FCC redemption; Princess
            Promotions handles hotels, certificates, and package administration.
            Knowing who does what saves time when you need help.
          </p>
        </MatchedHeightMediaGrid>

        <ScrollReveal>
          <h3 className="split-section-heading">
            How to redeem your Future Cruise Credits and hotel credits
          </h3>
          <div className="split">
            <div className="split-l">
              <div className="split-tag">
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#2E75B6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M8 2v12M5 5l3-3 3 3" />
                </svg>{' '}
                Princess Cruises
              </div>
              <h4>Handles Your Cruise</h4>
              <p>
                Future Cruise Credits (FCCs), cruise bookings, onboard experience, loyalty status
              </p>
              <div className="phone">
                <PrincessPhoneLink />
              </div>
            </div>
            <div className="split-r">
              <div className="split-tag">
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#C4922A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <rect x="2" y="4" width="12" height="8" rx="2" />
                  <path d="M2 7h12" />
                </svg>{' '}
                Princess Promotions
              </div>
              <h4>Handles Your Hotels</h4>
              <p>Hotel stay certificates, hotel credits, premium land stays, pre/post-cruise stays</p>
              <div className="phone">
                <PrincessPhoneLink suffix=", option 5" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Callout variant="info">
            <strong>Our recommendation:</strong> Before you buy, understand which entity handles
            what. Write down both contact numbers.
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
