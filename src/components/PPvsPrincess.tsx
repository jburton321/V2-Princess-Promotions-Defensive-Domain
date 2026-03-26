import { Callout } from '@/components/Callout'
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
          <div className="kicker">Entity Confusion</div>
          <h2>Is Princess Promotions the Same as Princess Cruises?</h2>
          <p className="entity-split-lead">
            <strong>No</strong> — and this distinction matters more than most realize.
          </p>
          <p>
            Princess Promotions operates on Princess ships using the Princess brand, but it’s run
            by a separate company (ONE Inc.). Think of it like a third-party vendor inside a
            department store.
          </p>
          <p>
            When something goes wrong, each entity may point you to the other. Multiple BBB
            complaints describe this runaround.
          </p>
        </MatchedHeightMediaGrid>

        <ScrollReveal className="split">
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
            <h3>Handles Your Cruise</h3>
            <p>
              Future Cruise Credits (FCCs), cruise bookings, onboard experience, loyalty status
            </p>
            <div className="phone">1-800-PRINCESS</div>
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
            <h3>Handles Your Hotels</h3>
            <p>Hotel stay certificates, hotel credits, premium land stays, pre/post-cruise stays</p>
            <div className="phone">1-800-PRINCESS, option 5</div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Callout variant="info">
            <strong>Our recommendation:</strong> Before you buy, understand which entity handles
            what. Write down both contact numbers. This single step will save you hours of
            frustration.
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
