import { JourneyReveal } from '@/components/JourneyReveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const bg = (path: string) => ({ backgroundImage: `url('${path}')` }) as const

export function RedeemFCC() {
  return (
    <section className="sec band-page redeem-fcc" id="redeem-section">
      <div className="editorial">
        <ScrollReveal className="kicker">Travel package benefits</ScrollReveal>
        <ScrollReveal>
          <h2 style={{ marginBottom: '2rem' }}>Future Cruise Credit Tips</h2>
        </ScrollReveal>
        <div className="fcc-journey-panel">
          <JourneyReveal>
            <div className="j-card j-stat rv rv-d1">
              <div className="j-val">
                $1 <small>= 1 FCC</small>
              </div>
              <div className="j-slbl">Each FCC is worth $1 toward cruise fare</div>
            </div>

            <div className="j-card j-action rv rv-d2">
              <div className="j-tag">How It Works</div>
              <h3>FCCs Auto-Apply When You Book</h3>
              <p>
                When you book a Princess cruise, your Future Cruise Credits apply automatically to the
                fare. You can also call to have them applied manually to an existing reservation. FCCs
                can be split across multiple bookings.
              </p>
            </div>

            <div className="j-card j-warn rv rv-d3">
              <div className="j-tag">What&apos;s Covered</div>
              <h3>What FCCs Cover</h3>
              <p>
                Any new cruise booking with Princess, a travel companion&apos;s fare on the same
                booking, Princess Plus or Princess Premier, room upgrades and more.
              </p>
            </div>

            <div className="j-card j-img rv rv-d4">
              <div className="j-bg" style={bg(siteImages.redemptionCruiseShip)} />
              <div className="j-ov" aria-hidden />
              <div className="j-tag">Good to know</div>
              <h3>Keep your FCC records handy</h3>
              <p>
                Many travelers save a quick screenshot of their FCC balance around booking changes—a
                simple habit that makes follow-up easier if a question comes up later.
              </p>
            </div>
          </JourneyReveal>
        </div>
      </div>
    </section>
  )
}
