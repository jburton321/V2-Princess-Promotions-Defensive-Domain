'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

/**
 * Single feedback form (Markup #38–40): captures positive and negative experiences
 * without a separate “issues-first” flow.
 */
export function DualTabForms() {
  const [done, setDone] = useState(false)
  const [rating, setRating] = useState(0)

  return (
    <div className="ind form-page-bottom-slot" id="share-feedback">
      <ScrollReveal className="form-c">
        <div className="form-panel active">
          <div className="form-panel-pad">
            <h2 className="form-panel-title">Share your experience</h2>
            <p className="form-panel-intro">
              Help others make informed decisions by leaving an honest review.
            </p>
            {!done ? (
              <form
                id="feedback-form-el"
                onSubmit={(e) => {
                  e.preventDefault()
                  setDone(true)
                }}
              >
                <div className="fg">
                  <div className="fr h">
                    <label className="f">
                      <span className="lt">Full Name</span>
                      <input required placeholder="Your full name" name="f-name" />
                    </label>
                    <label className="f">
                      <span className="lt">Email</span>
                      <input type="email" required placeholder="you@email.com" name="f-email" />
                    </label>
                  </div>
                  <label className="f">
                    <span className="lt">Phone (optional)</span>
                    <input type="tel" placeholder="(555) 555-5555" name="f-phone" />
                  </label>
                  <label className="f">
                    <span className="lt">Title Your Review</span>
                    <input
                      required
                      placeholder="Summarize your experience in a few words"
                      name="f-title"
                    />
                  </label>
                  <label className="f">
                    <span className="lt">Your experience</span>
                    <textarea
                      required
                      name="f-detail"
                      placeholder="What was your experience with Princess Promotions?"
                      rows={5}
                    />
                  </label>
                  <label className="f">
                    <span className="lt">Rating (optional)</span>
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
                  <button type="submit" className="sbt">
                    Submit feedback
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-confirm" id="confirm-feedback">
                <div className="confirm-icon blue" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#2E75B6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6,12 10,16 18,8" />
                  </svg>
                </div>
                <h3>We&apos;ve received your feedback</h3>
                <p>
                  Thank you for taking the time to write in. Our team will review your message for
                  publication when appropriate.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="pvt">
          <span className="pvt-lock" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect
                x="5"
                y="11"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 11V7a4 4 0 0 1 8 0v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Your privacy matters. We never sell your information.
        </p>
      </ScrollReveal>
    </div>
  )
}
