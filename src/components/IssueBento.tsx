import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const img = (path: string) =>
  ({
    backgroundImage: `url('${path}')`,
  }) as const

export function IssueBento() {
  return (
    <section className="sec">
      <div className="sec-inner">
        <ScrollReveal className="kicker">Our Findings</ScrollReveal>
        <ScrollReveal className="sec-title">
          The Real Issues Customers
          <br />
          Report About Princess Promotions
        </ScrollReveal>
        <ScrollReveal className="sec-sub">
          From BBB complaints, Cruise Critic forums, and consumer review sites:
        </ScrollReveal>
        <div className="i-grid">
          <ScrollReveal className="i-card i-hero rv-d1">
            <div className="nm rd">1</div>
            <h3>Hotel Credits Don&apos;t Work the Way They&apos;re Presented</h3>
            <p>
              Customers report $600 in credits applying at 50% of face value — only $300 actually
              usable. This limitation is not disclosed during the sales pitch. Hotel prices on the
              platform are frequently higher than Booking.com, Expedia, and Hotels.com.
            </p>
            <div className="i-stat">
              <div>
                <div className="sv">50%</div>
                <div className="sl">Actual credit value</div>
              </div>
              <div>
                <div className="sv">#1</div>
                <div className="sl">Most reported issue</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="i-card i-img rv-d2">
            <div className="i-bg" style={img(siteImages.issueFccAccounting)} />
            <div className="i-ov" aria-hidden />
            <div className="nm">2</div>
            <h3>FCC Accounting Is Confusing</h3>
            <p>
              Credits applied without authorization. Systems aren&apos;t synced between entities.
              Customers can&apos;t get clear statements from either side.
            </p>
          </ScrollReveal>

          <ScrollReveal className="i-card i-stat-card rv-d3">
            <div className="big-num">7</div>
            <div className="big-lbl">Day cancellation window</div>
            <p>Agents unreachable during this period. By the time you get through, it&apos;s closed.</p>
          </ScrollReveal>

          <ScrollReveal className="i-card i-quote rv-d4">
            <div className="q-text">
              &quot;I called my planning advisor 11 times over three weeks. Not a single
              callback.&quot;
            </div>
            <div className="q-src">Recurring theme — BBB &amp; PissedConsumer</div>
          </ScrollReveal>

          <ScrollReveal className="i-card rv-d5">
            <div className="nm am">4</div>
            <h3>Hidden Additional Charges</h3>
            <p>
              Down payment quoted as the total, then thousands more invoiced in subsequent months.
            </p>
          </ScrollReveal>

          <ScrollReveal className="i-card i-img i-wide rv-d6">
            <div
              className="i-bg"
              style={img(siteImages.issueHotelCertificates)}
            />
            <div className="i-ov" aria-hidden />
            <div className="nm am">6</div>
            <h3>Hotel Certificates Expire Before They Can Be Used</h3>
            <p>
              Certificates have shorter expiration dates than expected. The redemption process is so
              slow that certificates lapse before the stay can be booked.
            </p>
          </ScrollReveal>

          <ScrollReveal className="i-card pos">
            <div className="nm">✓</div>
            <h3>The Cruise Credits Do Work</h3>
            <p>
              The FCCs are real. Many customers have used them at genuine discounts. The hotel side
              and post-sale support are where documented problems live.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
