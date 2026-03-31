'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

type Tab = 'complaint' | 'review'

export function DualTabForms() {
  const [tab, setTab] = useState<Tab>('complaint')
  const [complaintDone, setComplaintDone] = useState(false)
  const [reviewDone, setReviewDone] = useState(false)
  const [rating, setRating] = useState(0)
  const [ratingError, setRatingError] = useState(false)

  return (
    <div className="ind form-page-bottom-slot" id="complaint-form">
      <ScrollReveal className="form-c">
          <div className="form-tabs" role="tablist" aria-label="Report or review">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'complaint'}
              className={`form-tab${tab === 'complaint' ? ' active' : ''}`}
              onClick={() => setTab('complaint')}
            >
              Report an Issue
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'review'}
              className={`form-tab${tab === 'review' ? ' active' : ''}`}
              onClick={() => setTab('review')}
            >
              Share a Review
            </button>
          </div>

          <div
            id="panel-complaint"
            role="tabpanel"
            hidden={tab !== 'complaint'}
            className={`form-panel${tab === 'complaint' ? ' active' : ''}`}
          >
            <div className="form-panel-pad">
              <h2 className="form-panel-title">Having Trouble With Your Package?</h2>
              <p className="form-panel-intro">
                Tell us what happened. If your concern is unresolved, our team will escalate it to
                Princess Promotions on your behalf.
              </p>
              {!complaintDone ? (
                <form
                  id="complaint-form-el"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setComplaintDone(true)
                  }}
                >
                  <div className="fg">
                    <div className="fr h">
                      <label className="f">
                        <span className="lt">Full Name</span>
                        <input required placeholder="Your full name" name="c-name" />
                      </label>
                      <label className="f">
                        <span className="lt">Email</span>
                        <input type="email" required placeholder="you@email.com" name="c-email" />
                      </label>
                    </div>
                    <div className="fr h">
                      <label className="f">
                        <span className="lt">Phone</span>
                        <input type="tel" placeholder="(555) 555-5555" name="c-phone" />
                      </label>
                      <label className="f">
                        <span className="lt">Booking Ref #</span>
                        <input placeholder="Princess booking number" name="c-booking" />
                      </label>
                    </div>
                    <label className="f">
                      <span className="lt">Issue Category</span>
                      <select className="form-dropdown" name="c-category" required defaultValue="">
                        <option value="" disabled>
                          Select your issue type
                        </option>
                        <option>Hotel Credits</option>
                        <option>FCC / Cruise Credits</option>
                        <option>Billing / Charges</option>
                        <option>Cancellation</option>
                        <option>Advisor Unreachable</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="f">
                      <span className="lt">Describe Your Issue</span>
                      <textarea
                        required
                        name="c-detail"
                        placeholder="What happened? Include dates, names, and amounts if possible..."
                      />
                    </label>
                    <label className="ckr" htmlFor="c-escalate">
                      <input type="checkbox" id="c-escalate" name="c-escalate" />
                      <span>I would like this escalated on my behalf.</span>
                    </label>
                    <button type="submit" className="sbt">
                      Submit Your Concern
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-confirm" id="confirm-complaint">
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
                  <h3>We&apos;ve Received Your Submission</h3>
                  <p>
                    Thank you for sharing your experience. Our team will review your submission within
                    2 business days. If you checked the escalation box, you&apos;ll receive a direct
                    response with next steps.
                  </p>
                  <div className="confirm-phone">
                    For immediate help, call <strong>1-800-PRINCESS</strong> (option 5 for
                    hotel/certificate issues).
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            id="panel-review"
            role="tabpanel"
            hidden={tab !== 'review'}
            className={`form-panel${tab === 'review' ? ' active' : ''}`}
          >
            <div className="form-panel-pad">
              <h2 className="form-panel-title">Had a Good Experience?</h2>
              <p className="form-panel-intro">
                Your review helps other travelers make informed decisions.
              </p>
              {!reviewDone ? (
                <form
                  id="review-form-el"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (rating < 1) {
                      setRatingError(true)
                      return
                    }
                    setReviewDone(true)
                  }}
                >
                  <div className="fg">
                    <div className="fr h">
                      <label className="f">
                        <span className="lt">Full Name</span>
                        <input required placeholder="Your full name" name="r-name" />
                      </label>
                      <label className="f">
                        <span className="lt">Email</span>
                        <input type="email" required placeholder="you@email.com" name="r-email" />
                      </label>
                    </div>
                    <label className="f">
                      <span className="lt">Package Purchased</span>
                      <input
                        placeholder="e.g., Future Cruise $4,999 / Ultimate / Black Friday"
                        name="r-pkg"
                      />
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
                            onClick={() => {
                              setRating(n)
                              setRatingError(false)
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setRating(n)
                                setRatingError(false)
                              }
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      {ratingError ? (
                        <span className="form-rating-hint" role="alert">
                          Please select a star rating.
                        </span>
                      ) : null}
                    </label>
                    <label className="f">
                      <span className="lt">Your Review</span>
                      <textarea
                        required
                        name="r-review"
                        placeholder="What was your experience with the package, the credits, the service?"
                      />
                    </label>
                    <button type="submit" className="sbt">
                      Submit Your Review
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-confirm" id="confirm-review">
                  <div className="confirm-icon green" aria-hidden>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#2D8B57"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6,12 10,16 18,8" />
                    </svg>
                  </div>
                  <h3>Thank You for Your Review</h3>
                  <p>
                    Your review has been submitted for moderation and will appear on our site once
                    verified.
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
