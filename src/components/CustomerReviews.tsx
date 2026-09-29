import { FeedbackForm } from '@/components/FeedbackForm'
import { ReviewStack } from '@/components/ReviewStack'
import { ScrollReveal } from '@/components/ScrollReveal'

/**
 * Reader reviews and the submission form share one two-column section: the heading
 * and list run down the left, the form sits top-aligned with the title on the right.
 */
export function CustomerReviews() {
  return (
    <section className="sec band-page" id="read-customer-reviews">
      <div className="editorial">
        <div className="rf-grid">
          <ScrollReveal className="kicker rf-kicker">Customer Reviews</ScrollReveal>
          <div className="rf-list">
            <ScrollReveal>
              <h2 className="rf-title">Read reviews, then share yours</h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="buy-subhead-note rf-lede">
                Customer-submitted feedback from travelers who purchased a Princess Future Cruise
                Package.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <ReviewStack />
            </ScrollReveal>
          </div>
          <aside className="rf-aside">
            <ScrollReveal>
              <FeedbackForm />
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
