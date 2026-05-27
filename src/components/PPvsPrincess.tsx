import { MatchedHeightMediaGrid } from '@/components/MatchedHeightMediaGrid'
import { PrincessPromotionsDirectLink } from '@/lib/princess-phone'
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
            No—they are related partners, not the same company. Princess Promotions manages package
            fulfillment and land products; Princess Cruises handles your sailings and FCC redemption
            on cruise fare. See how to use benefits below.
          </p>
        </MatchedHeightMediaGrid>

        <ScrollReveal id="how-to-use-benefits">
          <h3 className="split-section-heading split-section-heading--sentence">
            How to use benefits
          </h3>
          <div className="split">
            <div className="split-l">
              <h4>Cruise booking &amp; FCC on your fare</h4>
              <p>
                Future Cruise Credits and Onboard Credits show up in your Manage Booking account on
                princess.com. When you are ready to book, FCCs apply to cruise fare through Princess
                Cruises, your cruise vacation planner, or your travel agent.
              </p>
            </div>
            <div className="split-r">
              <h4>Travel package benefits and savings</h4>
              <p>
                Package benefits, including Future Cruise Credits, Onboard Credits, Premium Land Stay
                Certificates, Pre- or Post-Cruise Hotel Stay Certificates, and Hotel Credits, are
                redeemed online at{' '}
                <a
                  href="https://www.princesspromotions.com"
                  className="split-inline-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  princesspromotions.com
                </a>{' '}
                or by calling <PrincessPromotionsDirectLink />. Select packages can also earn up to 25%
                back in Future Cruise Credits on merchandise purchases.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
