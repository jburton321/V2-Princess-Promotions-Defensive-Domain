import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

export function TestimonialScroll() {
  return (
    <section className="sec band-page">
      <div className="sec-inner">
        <ScrollReveal className="kicker">Customer Experiences</ScrollReveal>
        <ScrollReveal className="sec-title">
          What Real Customers Are Saying
          <br />
          About Princess Promotions
        </ScrollReveal>
        <ScrollReveal className="testimonial-placeholder">
          <p className="testimonial-placeholder-lead">
            We launched this review platform in March 2026.
          </p>
          <p className="testimonial-placeholder-body">
            As verified reviews are submitted through our form, they&apos;ll appear here after
            moderation. Our editorial assessment is based on BBB complaint data, Cruise Critic
            forums, and PissedConsumer reviews.
          </p>
          <Link href="#complaint-form" className="sbt testimonial-placeholder-btn">
            Submit Your Review →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
