import { ScrollReveal } from '@/components/ScrollReveal'

export function Verdict() {
  return (
    <section className="verdict">
      <div className="verdict-bg" aria-hidden />
      <div className="verdict-ov" aria-hidden />
      <div className="verdict-in">
        <ScrollReveal className="kicker">Our Verdict</ScrollReveal>
        <ScrollReveal>
          <h2>
            The Final Word on
            <br />
            Princess Promotions
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>The Future Cruise Credits work.</strong> They apply to bookings as described. For
            frequent cruisers, the FCC math often makes the package worth it.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>The hotel credits are where value breaks down.</strong> 50% redemption, inflated
            pricing, certificate expiration — all erode what looks generous on paper.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>The sales process needs improvement.</strong> Gap between verbal promises and
            fine print. Unreliable post-sale support. Cancellation window too short for purchases
            this large.
          </p>
        </ScrollReveal>
        <ScrollReveal className="verdict-final">
          If cruise credits alone justify the price — reasonable deal.
          <br />
          If you need hotel credits to make the math work — proceed with caution.
        </ScrollReveal>
        <ScrollReveal className="verdict-sig">— The Editorial Team at Princess Promotions Reviews</ScrollReveal>
        <ScrollReveal className="verdict-seals">
          <div className="vs">
            <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="17" fill="none" stroke="#5BA0D9" strokeWidth="1" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="#5BA0D9" strokeWidth="0.4" />
              <polyline
                points="13,21 17,26 28,15"
                fill="none"
                stroke="#5BA0D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Trusted
              <br />
              review
            </span>
          </div>
          <div className="vs">
            <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="17" fill="none" stroke="#C4922A" strokeWidth="1" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="#C4922A" strokeWidth="0.4" />
              <polyline
                points="13,21 17,26 28,15"
                fill="none"
                stroke="#C4922A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Verified
              <br />
              2026
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
