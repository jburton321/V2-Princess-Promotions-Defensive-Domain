import { ScrollReveal } from '@/components/ScrollReveal'

/**
 * Markup #55: how on-site reviews / star averages will surface before moderation volume exists.
 */
export function ReviewsStatus() {
  return (
    <section className="reviews-status sec-sm" aria-labelledby="reviews-status-heading">
      <div className="sec-inner">
        <div className="reviews-status-in">
          <ScrollReveal>
            <h2 id="reviews-status-heading" className="reviews-status-h">
              Reader reviews &amp; ratings
            </h2>
            <p className="reviews-status-p">
              Experiences submitted through the form below are reviewed by our editorial team. Once we
              have enough moderated responses, we&apos;ll publish an on-page star average and featured
              quotes. Until then, use our assessment, FAQs, and redemption guidance for a structured
              overview—you can still share feedback anytime.
            </p>
            <p className="reviews-status-stars" aria-hidden>
              <span className="reviews-status-star-row">★★★★★</span>
              <span className="reviews-status-soon">
                Average rating rolls out as reviews are published
              </span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
