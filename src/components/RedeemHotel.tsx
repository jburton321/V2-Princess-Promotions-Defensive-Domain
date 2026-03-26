import Image from 'next/image'
import { Callout } from '@/components/Callout'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

export function RedeemHotel() {
  return (
    <section className="sec-sm band-page">
      <div className="editorial editorial--pair">
        <ScrollReveal className="kicker">Hotel Redemption</ScrollReveal>
        <ScrollReveal>
          <h2>How to Use Princess Promotions Hotel Certificates and Credits</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Unlike FCCs, these are managed by <strong>Princess Promotions directly</strong>. Call
            1-800-PRINCESS, option 5.
          </p>
        </ScrollReveal>
        <ScrollReveal className="media-grid">
          <div className="txt">
            <p>
              <strong>Credits may apply at 50% face value.</strong> This is the most
              complained-about issue. $600 in credits may mean only $300 usable. Get written
              confirmation before purchasing.
            </p>
            <p>
              <strong>Compare prices first.</strong> Hotel rates on the platform are often higher
              than Booking.com, Hotels.com, and Expedia.
            </p>
          </div>
          <Image
            src={siteImages.hotelPool}
            alt="Princess Promotions hotel certificate - luxury hotel pool"
            width={1200}
            height={800}
            className="w-full rounded-bento object-cover"
            loading="lazy"
          />
        </ScrollReveal>
        <ScrollReveal>
          <Callout variant="warning">
            <strong>Check expiration dates immediately.</strong> Hotel stay certificates expire.
            Confirm dates at purchase and set calendar reminders. Certificates are non-transferable.
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
