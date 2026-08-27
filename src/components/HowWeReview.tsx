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
            Our editors weigh verified customer feedback, cruise-community discussions, and moderated
            reader submissions. We evaluate the total Future Cruise Package value, individual
            components, the sales experience, and post-sale support, refreshing our conclusions when
            credible new feedback becomes available.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
