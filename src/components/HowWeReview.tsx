import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

export function HowWeReview() {
  return (
    <section className="how-review sec-sm band-page" id="how-we-review">
      <div
        className="how-review-bg"
        style={{ backgroundImage: `url('${siteImages.howReviewBg}')` }}
        aria-hidden
      />
      <div className="how-review-in">
        <ScrollReveal className="m-box">
          <h2>How We Review</h2>
          <p>
            Our editors weigh public complaint patterns, cruise-community discussion, official
            disclosures, and moderated reader submissions. We evaluate total Future Cruise Package
            value, hotel offers, sales transparency, post-sale support, and overall package fit,
            refreshing
            conclusions when credible new feedback arrives.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
