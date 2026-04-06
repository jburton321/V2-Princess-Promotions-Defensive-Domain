import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

export function HowWeReview() {
  return (
    <section className="how-review sec-sm band-page" id="how-we-review">
      <div
        className="how-review-bg"
        style={{ backgroundImage: `url('${siteImages.dividerCruiseAerial}')` }}
        aria-hidden
      />
      <div className="how-review-in">
        <ScrollReveal className="m-box">
          <h2>How We Review</h2>
          <p>
            Our editors weigh public complaint patterns, cruise-community discussion, official
            Princess and partner disclosures, and verified submissions from readers. We evaluate
            cruise credit value, hotel offers, sales transparency, post-sale support, and overall
            package fit — and refresh our conclusions as new, credible feedback comes in. We do not
            surface a third-party &ldquo;stats ribbon&rdquo; or a single external score feed; summaries
            here are from our own editorial process.
          </p>
          <p>
            We don&apos;t publish a playbook of every source we read — that would skew what people
            choose to emphasize — but we apply consistent criteria across each update.
          </p>
          <p>
            We accept no payment from Princess Promotions, Princess Cruises, or any affiliated
            entity.
          </p>
          <p className="how-review-updated">
            <em>Last Updated: March 2026</em>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
