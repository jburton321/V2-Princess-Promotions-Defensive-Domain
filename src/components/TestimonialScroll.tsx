import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

const PLACEHOLDER_REVIEWS = [
  {
    quote:
      'FCCs posted as promised, and we applied them to our Alaska booking without any runaround.',
    by: 'Placeholder review · pending verification',
  },
  {
    quote:
      'Took the time to compare hotel rates before we counted on the credits. Happy we did the math upfront.',
    by: 'Placeholder review · pending verification',
  },
  {
    quote:
      'Advisor was clear about the 7-day window and put the total in writing. That made the decision easy.',
    by: 'Placeholder review · pending verification',
  },
  {
    quote:
      'We cruise twice a year; the package paid for itself on cruise value alone for us.',
    by: 'Placeholder review · pending verification',
  },
]

export function TestimonialScroll() {
  return (
    <section className="sec band-page">
      <div className="sec-inner">
        <ScrollReveal className="kicker">Customer voices</ScrollReveal>
        <ScrollReveal className="sec-title">
          What guests are saying
          <br />
          about Princess Promotions
        </ScrollReveal>
        <ScrollReveal className="testimonial-intro">
          <p>
            Verified reviews from this site will appear here after moderation. Below are{' '}
            <strong>styled placeholders</strong> so you can see the layout, they are not real
            submissions yet.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="testimonial-ribbon" role="list" aria-label="Sample review highlights">
            {PLACEHOLDER_REVIEWS.map((r) => (
              <figure key={r.quote.slice(0, 40)} className="testimonial-ribbon-card" role="listitem">
                <blockquote className="testimonial-ribbon-quote">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="testimonial-ribbon-by">{r.by}</figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal className="testimonial-cta-wrap">
          <Link href="#complaint-form" className="sbt testimonial-placeholder-btn">
            Share your experience →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
