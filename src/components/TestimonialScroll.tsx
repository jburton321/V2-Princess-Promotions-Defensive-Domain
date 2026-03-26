import { ScrollReveal } from '@/components/ScrollReveal'

export function TestimonialScroll() {
  return (
    <section className="sec">
      <div className="sec-inner">
        <ScrollReveal className="kicker">Customer Experiences</ScrollReveal>
        <ScrollReveal className="sec-title">
          What Customers Are Saying
          <br />
          About Princess Promotions
        </ScrollReveal>
        <div className="test-wrap">
          <div className="test-track">
            <div className="t-card feat">
              <div className="ts">
                ★★★★☆ <span>4/5</span>
              </div>
              <q>
                The FCCs worked exactly as described — saved over $2,000 on a Caribbean cruise.
                Where I&apos;m docking a star: the hotel credits were not worth what we were told.
                Pitched $600, could only use half. Still a good deal, but be realistic about the
                hotel side.
              </q>
              <div className="tw">
                <strong>Maria T.</strong>, Orlando, FL · <em>Future Cruise Package ($4,999)</em>
              </div>
            </div>
            <div className="t-card">
              <div className="ts">
                ★★★☆☆ <span>3/5</span>
              </div>
              <q>
                FCCs were legit. But our planning advisor vanished after the pitch. Three weeks and
                multiple calls for basic answers about hotel certificates.
              </q>
              <div className="tw">
                <strong>James R.</strong>, Houston, TX · <em>Black Friday ($3,200)</em>
              </div>
            </div>
            <div className="t-card">
              <div className="ts">
                ★★★★☆ <span>4/5</span>
              </div>
              <q>
                Second package. First time was rocky — didn&apos;t get the PP vs. Princess Cruises
                split. Once we figured it out, solid deal for cruise credits. Don&apos;t bother with
                hotel credits.
              </q>
              <div className="tw">
                <strong>Denise K.</strong>, Atlanta, GA · <em>Future Cruise ($4,999)</em>
              </div>
            </div>
            <div className="t-card">
              <div className="ts">
                ★★★★★ <span>5/5</span>
              </div>
              <q>
                We cruise 2-3x/year. FCCs pay for themselves after two bookings. Hotel credits
                underwhelming vs. Expedia, but cruise value is hard to beat.
              </q>
              <div className="tw">
                <strong>Robert M.</strong>, Chicago, IL · <em>Ultimate ($7,999)</em>
              </div>
            </div>
            <div className="t-card">
              <div className="ts">
                ★★☆☆☆ <span>2/5</span>
              </div>
              <q>
                Felt misled. Total cost $2,400 more than quoted. Tried to cancel within 7 days —
                couldn&apos;t reach anyone. By day 8, told window passed. FCCs eventually worked,
                but I overpaid.
              </q>
              <div className="tw">
                <strong>Sandra L.</strong>, Denver, CO · <em>Future Cruise ($3,999)</em>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{' '}
          Scroll for more reviews
        </div>
      </div>
    </section>
  )
}
