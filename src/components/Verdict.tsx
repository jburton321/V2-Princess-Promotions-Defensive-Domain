import { ScrollReveal } from '@/components/ScrollReveal'

export function Verdict() {
  return (
    <section className="verdict" id="final-assessment">
      <div className="verdict-bg" aria-hidden />
      <div className="verdict-ov" aria-hidden />
      <div className="verdict-in">
        <ScrollReveal className="kicker">The Verdict</ScrollReveal>
        <ScrollReveal>
          <h2>Our Final Assessment</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Princess Promotions is a legitimate program backed by Princess Cruise Lines, with benefits
            that can bring added value to Princess guests.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Reviewers commonly have questions about Hotel Credits, including which hotels and resort
            properties they can be applied to.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Future Cruise Packages offer the most value for cruisers who plan to sail with Princess
            Cruise Lines and stay at hotels or resorts a few times over the two-year package term.
            Package holders cite using their benefits toward complete cruise vacations, including the
            cruise itself and hotel stays before or after sailing.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            If you&apos;re deciding whether to buy a Future Cruise Package, compare the package
            benefits and price, alongside the expected cost of your upcoming travel plans.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
