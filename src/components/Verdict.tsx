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
            Princess Promotions is an authentic program backed by Princess Cruises. For regular
            cruisers, the Future Cruise Credits function exactly as advertised and provide real value.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            However, it is important to read the fine print on the hotel credit component. These
            credits don&apos;t always apply at their full face value, and travelers should compare the
            platform&apos;s rates with standard booking sites like Booking.com or Expedia before
            committing. This is simply something to be aware of before purchasing, rather than a
            question of the program&apos;s legitimacy.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Ultimately, if you are a frequent cruiser and the combination of cruise credits, land stays,
            and perks aligns with your travel habits, this package is worth considering. Be sure to get
            the details in writing, understand your state&apos;s cancellation policies, and follow the
            redemption guide above to maximize your benefits.
          </p>
        </ScrollReveal>
        <ScrollReveal className="verdict-final">Recommended for Cruise-Focused Buyers</ScrollReveal>
      </div>
    </section>
  )
}
