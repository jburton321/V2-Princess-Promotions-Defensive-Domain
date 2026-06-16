/**
 * Retained for future use - removed from homepage Mar 2026 (stakeholder review).
 * Import from @/components/IssueBento when “customer issues” editorial block returns.
 */
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const img = (path: string) =>
  ({
    backgroundImage: `url('${path}')`,
  }) as const

export function IssueBento() {
  return (
    <section className="sec band-page">
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
        <div className="i-grid i-grid--three">
          <ScrollReveal className="i-card i-hero rv-d1">
            <div className="nm rd">1</div>
            <h3>Hotel Credits Don&apos;t Work the Way They&apos;re Presented</h3>
            <p>
              Customers report $600 in credits applying at 50% of face value, only $300 actually
              usable. This limitation is not disclosed during the sales pitch. Hotel prices on the
              platform are frequently higher than Booking.com, Expedia, and Hotels.com.
            </p>
            <div className="i-stat">
              <div>
                <div className="sv">50%</div>
                <div className="sl">Actual Credit Value</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="i-card i-quote rv-d2">
            <div className="q-text">
              &quot;Our advisor was incredible during the pitch, called us by name, remembered our
              anniversary cruise. After we signed? Eleven calls over three weeks. Not a single
              callback.&quot;
            </div>
            <div className="q-src">Recurring Theme: BBB &amp; PissedConsumer</div>
          </ScrollReveal>

          <ScrollReveal className="i-card i-img rv-d3">
            <div className="i-bg" style={img(siteImages.dividerDestination)} />
            <div className="i-ov" aria-hidden />
            <div className="nm am">3</div>
            <h3>The 7-Day Cancellation Window Is Difficult to Execute</h3>
            <p>
              Some customers report agents becoming unreachable during the cancellation period. Send
              written cancellation via email immediately, don&apos;t rely on phone calls alone.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
