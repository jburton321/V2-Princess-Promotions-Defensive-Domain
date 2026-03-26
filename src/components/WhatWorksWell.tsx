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
        <ScrollReveal className="kicker">The Positives</ScrollReveal>
        <ScrollReveal className="sec-title">What Works Well About Princess Promotions</ScrollReveal>
        <div className="works-grid">
          <ScrollReveal className="works-card rv-d1">
            <div className="works-check">{check}</div>
            <div>
              <h3>Future Cruise Credits Are Real and Deliver Genuine Savings</h3>
              <p>
                FCCs apply at $1 = 1 credit toward cruise fare. Multiple BBB responses and consumer
                reports confirm credits are honored. For cruisers booking 2+ sailings per year, the
                FCC value consistently makes the package worthwhile.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d2">
            <div className="works-check">{check}</div>
            <div>
              <h3>Onboard Credit, Elite Status, and Booking Flexibility Are Legitimate Perks</h3>
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
                Princess Cruises Is a Carnival Corporation Brand — the World&apos;s Largest Cruise
                Company
              </h3>
              <p>
                Your cruise booking goes through one of the most established operators in the
                industry. The Future Cruise Credits are redeemed directly through Princess Cruises,
                not through a third party.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
