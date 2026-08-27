import { ReviewStack } from '@/components/ReviewStack'
import { ScrollReveal } from '@/components/ScrollReveal'

export function CustomerReviews() {
  return (
    <section className="sec band-page" id="read-customer-reviews">
      <div className="editorial">
        <ScrollReveal className="kicker">Customer Reviews</ScrollReveal>
        <ScrollReveal>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Read Customer Reviews</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="buy-subhead-note">
            Customer-submitted feedback from travelers who purchased a Princess Future Cruise
            Package. Ratings vary; this is not a five-star average.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <ReviewStack />
        </ScrollReveal>
      </div>
    </section>
  )
}
