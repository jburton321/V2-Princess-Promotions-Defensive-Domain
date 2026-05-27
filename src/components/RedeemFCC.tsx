import { JourneyReveal } from '@/components/JourneyReveal'
import {
  PrincessPromotionsDirectLink,
  PRINCESS_PHONE_HREF,
} from '@/lib/princess-phone'
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
            Package benefits include Future Cruise Credits, Onboard Credits, Premium Land Stay
            Certificates, Pre/post Hotel Certificates, Hotel Credits, and more—they can be redeemed
            online at{' '}
            <a
              href="https://www.princesspromotions.com"
              className="sec-inline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              princesspromotions.com
            </a>{' '}
            or by calling <PrincessPromotionsDirectLink /> for program support. Cruise fare bookings
            and applying FCCs often route through{' '}
            <a href={PRINCESS_PHONE_HREF} className="tel-princess">
              1-800-774-6237
            </a>{' '}
            or your planner/agent. Hotel Credits are separate from FCC line items. Select packages can
            also earn up to 25% back in Future Cruise Credits on eligible merchandise purchases
            through the Princess Promotions storefront—confirm eligibility on your offer.
          </p>
        </ScrollReveal>
        <div className="fcc-journey-panel">
          <JourneyReveal>
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
              <div className="j-tag">Good to know</div>
              <h3>Keep your FCC records handy</h3>
              <p>
                Many travelers save a quick screenshot of their FCC balance around booking changes—a
                simple habit that makes follow-up easier if a question comes up later. Written
                confirmation from Princess, when you receive it, is worth keeping too.
              </p>
            </div>
          </JourneyReveal>
        </div>
      </div>
    </section>
  )
}
