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
            We evaluate onboard cruise programs using BBB complaint analysis, Cruise Critic and
            TripAdvisor research, PissedConsumer data, independent blog coverage, Princess Cruises
            documentation, and consumer-submitted feedback.
          </p>
          <p>
            Five categories scored 1–5: cruise credit value, hotel credit value, sales
            transparency, post-sale support, overall package value. We accept no payment from
            Princess Promotions, Princess Cruises, ONE Inc., or any affiliated entity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
