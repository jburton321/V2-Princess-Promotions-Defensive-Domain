import { ScrollReveal } from '@/components/ScrollReveal'

export function Verdict() {
  return (
    <section className="verdict" id="final-assessment">
      <div className="verdict-bg" aria-hidden />
      <div className="verdict-ov" aria-hidden />
      <div className="verdict-in">
        <ScrollReveal className="kicker">Our Final Assessment</ScrollReveal>
        <ScrollReveal>
          <h2>Our Final Assessment</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Princess Promotions is a legitimate program backed by Princess Cruises, a subsidiary of
            Carnival Corporation. The Future Cruise Credits work as described, and for frequent
            cruisers, they represent real, documented savings.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The hotel credit component is where expectations need to be managed. Credits may apply at
            less than face value, and platform pricing should be compared against Booking.com or
            Expedia before committing. But this is a transparency issue, not a legitimacy issue.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>Our recommendation:</strong> if you&apos;re a frequent cruiser and the{' '}
            <em>overall</em> package—including FCCs, land stays, and perks—fits how you travel, this
            can be a solid program. Get everything in writing, understand cancellation timing for your
            state, and use the redemption guide above to maximize your value.
          </p>
        </ScrollReveal>
        <ScrollReveal className="verdict-final">Recommended for Cruise-Focused Buyers</ScrollReveal>
        <ScrollReveal className="verdict-sig">
          — The Editorial Team, Princess Promotions Reviews
        </ScrollReveal>
        <ScrollReveal className="verdict-seals">
          <div className="vs">
            <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden>
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
              Review
            </span>
          </div>
          <div className="vs">
            <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden>
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
