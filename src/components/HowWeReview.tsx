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
            disclosures, and moderated reader submissions. We evaluate cruise credit value, hotel
            offers, sales transparency, post-sale support, and overall package fit—refreshing
            conclusions when credible new feedback arrives.
          </p>
          <p>
            We don&apos;t publish a playbook of every source we read — that would skew what people
            choose to emphasize — but we apply consistent criteria across each update.
          </p>
          <p className="how-review-updated">
            <em>Last Updated: June 2026</em>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
