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
            Princess Promotions is a legitimate program backed by Princess Cruises. For regular
            cruisers, Future Cruise Credits function as described and deliver real value toward cruise
            fare.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The hotel credit component deserves closer review before you buy. Credits don&apos;t always
            apply at full face value, and platform rates may run higher than standard booking sites like
            Booking.com or Expedia. Comparing both before committing is a smart step.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Whether this package makes sense depends on how you travel. Frequent Princess cruisers who
            will use the credits and land stay certificates tend to get the most out of it. If
            you&apos;re on the fence, get the full cost breakdown in writing, confirm your state&apos;s
            cancellation window, and use the redemption guide above before making a decision.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
