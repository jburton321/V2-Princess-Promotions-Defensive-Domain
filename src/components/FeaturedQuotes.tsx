import { ScrollReveal } from '@/components/ScrollReveal'
import { FEATURED_QUOTES } from '@/lib/reviews'

function FiveStars() {
  return (
    <span className="fq-stars" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} aria-hidden>
          ★
        </span>
      ))}
    </span>
  )
}

/**
 * Markup #45: three featured customer quotes in an even grid, with an anchor
 * down to the full review list.
 */
export function FeaturedQuotes() {
  return (
    <section className="sec band-page" id="why-customers-love">
      <div className="editorial">
        <ScrollReveal className="fq-head">
          <div className="fq-head-txt">
            <p className="kicker">Customer Reviews</p>
            <h2>Why Customers Love Princess Promotions</h2>
          </div>
          <a className="fq-more" href="#customer-reviews">
            See more reviews
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M6 13l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <div className="fq-grid">
            {FEATURED_QUOTES.map((item) => (
              <figure key={item.by + item.quote} className="fq-card">
                <FiveStars />
                <blockquote className="fq-card-quote">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="fq-name">{item.by}</figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
