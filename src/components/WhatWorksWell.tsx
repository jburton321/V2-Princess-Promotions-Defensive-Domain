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
        <ScrollReveal className="sec-title">
          Here&apos;s what&apos;s popular among satisfied customers
        </ScrollReveal>
        <div className="works-grid">
          <ScrollReveal className="works-card rv-d1">
            <div className="works-check">{check}</div>
            <div>
              <h3>Future cruise credits are real and deliver genuine savings</h3>
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
              <h3>
                Onboard Credit, Promotional Onboard Benefits, and booking flexibility are legitimate
                perks
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
                Princess Cruises is a Carnival Corporation brand — the world&apos;s largest cruise
                company
              </h3>
              <p>
                Your cruise booking goes through one of the most established operators in the
                industry. Future Cruise Credits are redeemed directly through Princess Cruises.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d4">
            <div className="works-check">{check}</div>
            <div>
              <h3>
                The Princess Promotions hub brings hotel booking, savings, and add-ons together
              </h3>
              <p>
                Through the <strong>Princess Promotions</strong> digital experience, many guests use a
                single hub to manage hotel stays, browse member discounts, and see savings
                opportunities alongside their package. The same environment often surfaces other travel
                products and upgrades that complement your cruise — so you can plan land stays, compare
                offers, and explore add-ons without juggling a dozen different sites.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d5">
            <div className="works-check">{check}</div>
            <div>
              <h3>Flexibility when you love Princess but aren&apos;t ready to pick a sail date</h3>
              <p>
                Another common upside: you can lock in package value when you know you want to sail
                with Princess within the next couple of years, without having to decide immediately
                when or where—that flexibility plus cruise and land benefits is a big part of why
                repeat guests buy in.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="works-card rv-d6">
            <div className="works-check">{check}</div>
            <div>
              <h3>Limited-time offers while you&apos;re still onboard are legitimate</h3>
              <p>
                Some offers are available only during your sailing. Ask what stays available after you
                leave the ship and capture anything time-sensitive in writing so you can weigh it
                calmly later.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
