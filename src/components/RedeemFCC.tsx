import { JourneyReveal } from '@/components/JourneyReveal'
import { PrincessPhoneLink } from '@/lib/princess-phone'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const bg = (path: string) => ({ backgroundImage: `url('${path}')` }) as const

export function RedeemFCC() {
  return (
    <section className="sec band-page redeem-fcc" id="redeem-section">
      <div className="editorial">
        <ScrollReveal className="kicker">Travel package benefits &amp; savings</ScrollReveal>
        <ScrollReveal>
          <h2>How to Use Benefits</h2>
          <p className="sec-sub" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
            The steps below focus on Future Cruise Credits (FCCs) on cruise fare. For cruise fare and
            FCC questions, call <PrincessPhoneLink />, log into your account at princess.com, or contact
            your Travel Advisor. Package benefits and hotel redemption are covered above in{' '}
            <a href="#how-to-use-benefits" className="sec-inline-link">
              How to use benefits
            </a>
            . <strong>Hotel Credits are separate from Future Cruise Credits.</strong> Select packages
            can earn up to 25% back in Future Cruise Credits on eligible merchandise purchases through
            the Princess Promotions Marketplace—confirm eligibility on your offer.
          </p>
        </ScrollReveal>
        <div className="fcc-journey-panel">
          <JourneyReveal>
            <div className="j-card j-phone">
              <div className="j-label">Redeem Future Cruise Credits (FCC) through Princess Cruises</div>
              <div className="j-note">
                Call <PrincessPhoneLink />, log into your account at princess.com, or contact your
                Travel Advisor. Check your FCC balance in Manage Booking before you sail.
              </div>
            </div>

            <div className="j-card j-stat rv rv-d1">
              <div className="j-val">
                $1 <small>= 1 FCC</small>
              </div>
              <div className="j-slbl">Each FCC is worth $1 toward cruise fare only</div>
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
              <div className="j-bg" style={bg(siteImages.redemptionCruiseShip)} />
              <div className="j-ov" aria-hidden />
              <div className="j-tag">Protect Yourself</div>
              <h3>Screenshot Everything</h3>
              <p>
                Capture your FCC balance before and after every transaction. Request written
                confirmation of how credits were applied.
              </p>
            </div>
          </JourneyReveal>
        </div>
      </div>
    </section>
  )
}
