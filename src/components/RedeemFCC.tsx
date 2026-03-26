import { JourneyReveal } from '@/components/JourneyReveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const bg = (path: string) => ({ backgroundImage: `url('${path}')` }) as const

export function RedeemFCC() {
  return (
    <section className="sec band-page">
      <div className="editorial">
        <ScrollReveal className="kicker">Redemption Guide</ScrollReveal>
        <ScrollReveal>
          <h2>How to Redeem Your Princess Promotions Future Cruise Credits</h2>
        </ScrollReveal>
        <JourneyReveal>
          <div className="j-card j-phone">
            <div className="j-label">Redeem through Princess Cruises — not Princess Promotions</div>
            <div className="j-number">1-800-PRINCESS</div>
            <div className="j-note">
              Log into My Princess at princess.com to check your FCC balance. Credits may take up to
              60 days to appear after purchase.
            </div>
          </div>

          <div className="j-card j-stat rv rv-d1">
            <div className="j-val">
              $1 <small>= 1 FCC</small>
            </div>
            <div className="j-slbl">Applies to cruise fare only</div>
          </div>

          <div className="j-card j-action rv rv-d2">
            <div className="j-tag">How It Works</div>
            <h3>FCCs Auto-Apply When You Book</h3>
            <p>
              When you book a Princess Cruise, your credits apply automatically to the fare. You can
              also call to have them applied manually to an existing reservation. Credits can be
              split across multiple bookings.
            </p>
          </div>

          <div className="j-card j-warn rv rv-d3">
            <div className="j-tag">Know the Limits</div>
            <h3>What FCCs Don&apos;t Cover</h3>
            <p>
              Onboard expenses, shore excursions, Princess Plus and Premier packages, and
              restricted-rate EZair airfare are all excluded. FCCs do work for Flexible Air add-ons.
            </p>
          </div>

          <div className="j-card j-img rv rv-d4">
            <div
              className="j-bg"
              style={bg(siteImages.redemptionCruiseShip)}
            />
            <div className="j-ov" aria-hidden />
            <div className="j-tag">Protect Yourself</div>
            <h3>Screenshot Everything</h3>
            <p>
              Capture your FCC balance before and after every transaction. Request written
              confirmation of how credits were applied. This is your best protection against the
              accounting issues described above.
            </p>
          </div>
        </JourneyReveal>
      </div>
    </section>
  )
}
