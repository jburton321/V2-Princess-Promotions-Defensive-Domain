import { JourneyReveal } from '@/components/JourneyReveal'
import {
  PrincessPhoneLink,
  PrincessPromotionsDirectLink,
} from '@/lib/princess-phone'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const bg = (path: string) => ({ backgroundImage: `url('${path}')` }) as const

export function RedeemFCC() {
  return (
    <section className="sec band-page redeem-fcc" id="redeem-section">
      <div className="editorial">
        <ScrollReveal className="kicker">Redemption Guide</ScrollReveal>
        <ScrollReveal>
          <h2>How to Redeem Your Future Cruise Credits and Hotel Credits</h2>
          <p className="sec-sub" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
            <strong>Hotel credits are separate from Future Cruise Credits (FCC).</strong> FCCs apply to
            cruise fare through Princess Cruises; hotel stays and certificates follow the Princess
            Promotions path.
          </p>
        </ScrollReveal>
        <div className="fcc-journey-panel">
          <JourneyReveal>
            <div className="j-card j-phone">
              <div className="j-label">
                Redeem Future Cruise Credits (FCC) through Princess Cruises
              </div>
              <div className="j-number">
                <PrincessPhoneLink />
              </div>
              <div className="j-direct">
                Princess Promotions direct line: <PrincessPromotionsDirectLink />
              </div>
              <div className="j-note">
                Log into My Princess at princess.com to check your FCC balance. Credits may take up to
                60 days to appear after purchase.
              </div>
            </div>

            <div className="j-card j-stat rv rv-d1">
              <div className="j-val">
                $1 <small>= 1 FCC</small>
              </div>
              <div className="j-slbl">Future Cruise Credit (FCC) — cruise fare only</div>
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
                confirmation of how credits were applied.
              </p>
            </div>
          </JourneyReveal>
        </div>
        <ScrollReveal style={{ marginTop: '3rem' }}>
          <div className="portal-callout">
            <div className="kicker">Princess Promotions portal</div>
            <p className="portal-callout-p">
              Through the <strong>Princess Promotions</strong> traveler portal, many guests manage
              hotel bookings, browse member discounts and savings, and explore add-on products tied to
              their package.
            </p>
            <p className="portal-callout-p" style={{ marginTop: '1rem' }}>
              Need to reach the program directly? Call <PrincessPromotionsDirectLink />. For Princess
              Cruises reservations and FCC questions, use <PrincessPhoneLink />.
            </p>
            <a
              href="https://www.princesspromotions.com"
              className="portal-callout-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit princesspromotions.com →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
