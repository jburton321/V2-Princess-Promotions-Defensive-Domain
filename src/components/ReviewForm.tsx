'use client'

import { useState, type ReactNode } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

type ReviewFormProps = {
  /** Overlaps hero (replaces former independence bar); omits bottom band-page section shell */
  belowHero?: boolean
}

export function ReviewForm({ belowHero = false }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [done, setDone] = useState(false)

  const shell = (inner: ReactNode) =>
    belowHero ? (
      <div className="ind" id="submit">
        {inner}
      </div>
    ) : (
      <section className="form-sec band-page" id="submit">
        {inner}
      </section>
    )

  if (done) {
    return shell(
      <ScrollReveal className="form-c">
          <div id="fok" style={{ display: 'block', textAlign: 'center', padding: '3rem 0' }}>
            <div className="cki">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden>
                <polyline
                  points="6,12 10,16 18,8"
                  stroke="#1A8B4C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Thank You for Your Review</h3>
            <p>If you checked the escalation box, someone will follow up directly.</p>
          </div>
          <p className="pvt">
            Your privacy matters. We never sell your information. Only first name, rating, and review
            text appear after moderation.
          </p>
        </ScrollReveal>,
    )
  }

  return shell(
    <ScrollReveal className="form-c">
        <h2>Submit Your Review</h2>
        <p>
          Purchased a Princess Promotions Future Cruise Package? Whether great or disappointing, we
          want to hear from you.
        </p>
        <form
          id="rf"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <div className="fg">
            <div className="fr h">
              <label className="f">
                <span className="lt">Full name</span>
                <input required placeholder="Your full name" name="name" />
              </label>
              <label className="f">
                <span className="lt">Email</span>
                <input type="email" required placeholder="you@email.com" name="email" />
              </label>
            </div>
            <div className="fr h">
              <label className="f">
                <span className="lt">Phone</span>
                <input type="tel" placeholder="(555) 555-5555" name="phone" />
              </label>
              <label className="f">
                <span className="lt">Booking ref #</span>
                <input placeholder="Princess booking number" name="booking" />
              </label>
            </div>
            <label className="f">
              <span className="lt">Package purchased</span>
              <input placeholder="e.g., Future Cruise $4,999 / Ultimate / Black Friday" name="pkg" />
            </label>
            <label className="f">
              <span className="lt">Rating</span>
              <div className="str" role="group" aria-label="Star rating">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    role="button"
                    tabIndex={0}
                    className={`s${n <= rating ? ' on' : ''}`}
                    onClick={() => setRating(n)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setRating(n)
                      }
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </label>
            <label className="f">
              <span className="lt">Your review</span>
              <textarea
                required
                placeholder="FCCs, hotel credits, customer service, the sales process..."
                name="review"
              />
            </label>
            <label className="ckr" htmlFor="escalate">
              <input type="checkbox" id="escalate" name="escalate" />
              <span>I have an unresolved concern and would like it escalated on my behalf.</span>
            </label>
            <button type="submit" className="sbt">
              Submit Your Review
            </button>
          </div>
        </form>
        <p className="pvt">
          Your privacy matters. We never sell your information. Only first name, rating, and review
          text appear after moderation.
        </p>
      </ScrollReveal>,
  )
}
