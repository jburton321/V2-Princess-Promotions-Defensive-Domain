import { PrincessPromotionsDirectLink } from '@/lib/princess-phone'
import { ScrollReveal } from '@/components/ScrollReveal'

export function WhatIsPP() {
  return (
    <section className="sec band-page" id="what-is-pp">
      <div className="editorial">
        <ScrollReveal>
          <div className="kicker">Understanding the Program</div>
          <h2>What Is Princess Promotions?</h2>
          <p>
            Princess Promotions is an authorized partner of Princess Cruise Lines, offering Princess
            Future Cruise Packages and products designed to enhance the guest vacation experience.
          </p>
          <p>
            Sold onboard or over the phone, Future Cruise Packages provide customer value by
            combining Future Cruise Credits, Onboard Credits, Stay Certificates, Hotel Savings and
            more.
          </p>
        </ScrollReveal>

        <ScrollReveal className="facts">
          <div className="fact f1">
            <div className="fv">Priced at $3K–$15K</div>
            <div className="fl fact-fl-prose">
              Packages with a variety of travel benefits included.
            </div>
          </div>
          <div className="fact f3">
            <div className="fv">Valued at up to $25K</div>
            <div className="fl fact-fl-prose">
              Total published estimated value, including Future Cruise Credits, Onboard Credits, Stay
              Certificates, Hotel Savings and promotional onboard benefits.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="hotel-fcc-distinction">
            <div className="hotel-fcc-distinction-toprule" aria-hidden />
            <div className="hotel-fcc-distinction-inner">
              <header className="hotel-fcc-distinction-hd">
                <h3 className="hotel-fcc-distinction-title">
                  <span className="hotel-fcc-distinction-accent-word">What&apos;s Included?</span>
                </h3>
                <p className="hotel-fcc-distinction-sub">
                  Princess Future Cruise Packages bundle Future Cruise Credits, Onboard Credits,
                  Stay&nbsp;Certificates and more. Included benefits and amounts vary by package.
                </p>
              </header>
              <ul className="package-detail-list">
                <li>
                  <strong>Future Cruise Credits (FCCs)</strong>
                  <span className="pkg-li-body">
                    Each FCC is worth $1 toward your cruise fare. You can use FCCs across one or more
                    bookings.
                  </span>
                </li>
                <li>
                  <strong>Earn more FCCs</strong>
                  <span className="pkg-li-body">
                    Some packages may include the ability to earn up to 25% additional FCCs through
                    qualifying purchases at{' '}
                    <a
                      href="https://www.princesspromotions.com"
                      className="split-inline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      princesspromotions.com
                    </a>
                    .
                  </span>
                </li>
                <li>
                  <strong>Onboard Credits (OBCs)</strong>
                  <span className="pkg-li-body">
                    Onboard Credit is applied to the first cruise booked with your Future Cruise
                    Package and can be used towards onboard extras like excursions, beverages, boutique
                    purchases, and Lotus Spa services.
                  </span>
                </li>
                <li>
                  <strong>Pre- or Post-Cruise Hotel Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Some packages include certificates that can be redeemed for 2-night stays before or
                    after your cruise.
                  </span>
                </li>
                <li>
                  <strong>Premium Land Stay Certificates</strong>
                  <span className="pkg-li-body">
                    Packages include certificates that can be redeemed for 5-night stays at participating
                    hotels and resorts. They can be used before or after a cruise, or as their own land
                    vacation.
                  </span>
                </li>
                <li>
                  <strong>Hotel Savings</strong>
                  <span className="pkg-li-body">
                    Exclusive rates provide savings of up to 25% on thousands of hotels worldwide.
                  </span>
                </li>
              </ul>
              <h3 className="hotel-fcc-distinction-title" style={{ marginTop: '2rem' }}>
                Top Tips for Benefits
              </h3>
              <div className="hotel-fcc-lanes">
                <div className="hotel-fcc-lane hotel-fcc-lane--cruise">
                  <p>
                    Future Cruise Credits and Onboard Credits can be viewed in your Princess.com
                    account. When you&apos;re ready to book, Future Cruise Credits may be redeemed
                    directly with Princess, through your Cruise Vacation Planner, or with your travel
                    agent.
                  </p>
                </div>
                <div className="hotel-fcc-lane hotel-fcc-lane--hotel">
                  <p>
                    Stay Certificates and Hotel Savings can be redeemed through Princess Promotions by
                    calling <PrincessPromotionsDirectLink /> or visiting{' '}
                    <a
                      href="https://www.princesspromotions.com"
                      className="split-inline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      princesspromotions.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
