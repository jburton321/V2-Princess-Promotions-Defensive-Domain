import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

export function WhoAreYouRouter() {
  return (
    <section className="router sec-sm band-page" aria-labelledby="router-heading">
      <div className="editorial">
        <ScrollReveal>
          <div className="kicker" style={{ textAlign: 'center' }}>
            How Can We Help?
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 id="router-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Welcome — Where Should We Start?
          </h2>
        </ScrollReveal>
        <div className="router-grid">
          <ScrollReveal className="router-card-wrap">
            <Link href="#redeem-section" className="router-card">
              <div className="router-icon blue" aria-hidden>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E75B6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>I Have a Package to Redeem</h3>
              <p>Log in, check your FCC balance, or book your next cruise.</p>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="router-card-wrap">
            <Link href="#complaint-form" className="router-card">
              <div className="router-icon gold" aria-hidden>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4922A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>I Need Help With an Issue</h3>
              <p>Tell us what happened and we&apos;ll escalate it on your behalf.</p>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="router-card-wrap">
            <Link href="#what-is-pp" className="router-card">
              <div className="router-icon green" aria-hidden>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2D8B57"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>I&apos;m Considering a Package</h3>
              <p>Read our independent assessment before you decide.</p>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
