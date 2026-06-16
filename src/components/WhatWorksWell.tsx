import { ScrollReveal } from '@/components/ScrollReveal'

const check = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2D8B57"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="6,12 10,16 18,8" />
  </svg>
)

export function WhatWorksWell() {
  return (
    <section className="sec band-page">
      <div className="sec-inner">
        <ScrollReveal>
          <div className="sec-rule" aria-hidden />
        </ScrollReveal>
        <ScrollReveal className="kicker">From travelers</ScrollReveal>
        <ScrollReveal
          className="sec-title"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
        >
          Here&apos;s What&apos;s Popular Among Satisfied Customers
        </ScrollReveal>
        <div className="works-grid">
          <ScrollReveal className="works-card rv-d1">
            <div className="works-check">{check}</div>
            <div>
              <h3>Future Cruise Credits Adds Meaningful Value</h3>
              <p>
                Guests who were already planning to sail with Princess Cruise Lines in the next couple
                of years found FCCs useful because they could apply it toward travel they already
                intended to book.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d2">
            <div className="works-check">{check}</div>
            <div>
              <h3>
                Onboard Credit, Promotional Onboard Benefits, and Booking Flexibility Are Legitimate
                Perks
              </h3>
              <p>
                These add measurable value on top of the FCCs and are consistently cited as positives
                in consumer feedback.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d3">
            <div className="works-check">{check}</div>
            <div>
              <h3>
                Princess Cruise Lines Is a Carnival Corporation Brand, the World&apos;s Largest
                Cruise Company
              </h3>
              <p>
                Your cruise booking goes through one of the most established operators in the
                industry. Future Cruise Credits are redeemed directly through Princess Cruise Lines.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d4">
            <div className="works-check">{check}</div>
            <div>
              <h3>A Convenient Platform for Cruise-Related Travel</h3>
              <p>
                Many guests enjoy having one place to book and manage travel extras that complement
                their cruise, including hotel stays before and after sailing.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d5">
            <div className="works-check">{check}</div>
            <div>
              <h3>Flexibility When You Love Princess but Aren&apos;t Ready to Pick a Sail Date</h3>
              <p>
                Another common upside: you can lock in package value when you know you want to sail
                with Princess within the next couple of years, without having to decide immediately
                when or where, that flexibility plus cruise and land benefits is a big part of why
                repeat guests buy in.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d6">
            <div className="works-check">{check}</div>
            <div>
              <h3>Limited-Time Offers While You&apos;re Still Onboard Are Legitimate</h3>
              <p>
                Some offers are available only during your sailing. Ask what stays are available after
                you leave the ship and capture anything time-sensitive in writing so you can weigh it
                calmly later.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
