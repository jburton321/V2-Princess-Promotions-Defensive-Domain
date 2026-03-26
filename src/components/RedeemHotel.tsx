import { Callout } from '@/components/Callout'
import { MatchedHeightMediaGrid } from '@/components/MatchedHeightMediaGrid'
import { siteImages } from '@/lib/site-images'

export function RedeemHotel() {
  return (
    <section className="sec-sm band-page">
      <div className="editorial editorial--pair">
        <MatchedHeightMediaGrid
          imageFirst={false}
          gridClassName="media-grid media-grid--hotel-split"
          imageSrc={siteImages.hotelPool}
          imageAlt="Princess Promotions hotel certificate - luxury hotel pool"
        >
          <div className="kicker">Hotel Redemption</div>
          <h2>How to Use Princess Promotions Hotel Certificates and Credits</h2>
          <p className="hotel-split-lead">
            Unlike FCCs, these are managed by <strong>Princess Promotions directly</strong>. Call
            1-800-PRINCESS, option 5.
          </p>
          <p>
            <strong>Credits may apply at 50% face value.</strong> This is the most complained-about
            issue. $600 in credits may mean only $300 usable. Get written confirmation before
            purchasing.
          </p>
          <p>
            <strong>Compare prices first.</strong> Hotel rates on the platform are often higher
            than Booking.com, Hotels.com, and Expedia.
          </p>
          <Callout variant="warning">
            <strong>Check expiration dates immediately.</strong> Hotel stay certificates expire.
            Confirm dates at purchase and set calendar reminders. Certificates are non-transferable.
          </Callout>
        </MatchedHeightMediaGrid>
      </div>
    </section>
  )
}
