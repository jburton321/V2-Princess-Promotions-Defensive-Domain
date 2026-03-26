import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

export function HowWeReview() {
  return (
    <section className="how-review sec-sm band-page">
      <div
        className="how-review-bg"
        style={{ backgroundImage: `url('${siteImages.dividerCruiseAerial}')` }}
        aria-hidden
      />
      <div className="how-review-in">
        <ScrollReveal className="m-box">
          <h2>How We Review</h2>
          <p>
            Our editorial assessment is based on analysis of 50+ BBB complaints filed between
            January 2025 and March 2026, review of 12 Cruise Critic forum threads discussing
            Princess Promotions (2023–2026), review of 300+ PissedConsumer entries mentioning
            Princess Promotions or Princess Cruises promotions, cross-referencing of Princess Cruises
            official documentation on FCC terms, cancellation policies, and hotel certificate
            programs, and consumer-submitted feedback through our review form (ongoing).
          </p>
          <p>
            Five categories scored 1–5: cruise credit value, hotel credit value, sales transparency,
            post-sale support, overall package value. Scores are editorial assessments and will be
            updated as consumer-submitted reviews accumulate.
          </p>
          <p>
            We accept no payment from Princess Promotions, Princess Cruises, ONE Inc., or any
            affiliated entity.
          </p>
          <p className="how-review-updated">
            <em>Last Updated: March 2026</em>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
