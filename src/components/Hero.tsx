import Link from 'next/link'

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
      />
      <path
        d="M8 11V7a4 4 0 0 1 8 0v4"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden>
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-aerial.jpg"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1>
          <span className="word" style={{ animationDelay: '0.3s' }}>
            Princess
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.4s' }}>
            Promotions
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.5s' }}>
            Reviews
          </span>
        </h1>
        <p className="hero-sub">
          Not sure about Princess Promotions? Sounds too good to be true? We investigated the
          complaints, the packages, and the redemption process — here&apos;s what we found.
        </p>
        <div className="hero-cta-row">
          <Link href="#share-feedback" className="hero-cta">
            Share feedback
          </Link>
          <Link href="#final-assessment" className="hero-cta hero-cta--ghost">
            Read our verdict
          </Link>
        </div>
        <div className="hero-meta">
          <span className="seal-p">
            <LockIcon />
            Secure &amp; private
          </span>
          <span className="seal-p">
            <svg width="14" height="14" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#5BA0D9" strokeWidth="2" />
              <polyline
                points="13,21 17,25 27,15"
                fill="none"
                stroke="#5BA0D9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Trusted review
          </span>
          <span className="seal-p">
            <svg width="14" height="14" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#C4922A" strokeWidth="2" />
              <polyline
                points="13,21 17,25 27,15"
                fill="none"
                stroke="#C4922A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Verified 2026
          </span>
          <span className="seal-p">Reviewed by the Editorial Team · March 2026</span>
        </div>
      </div>
    </section>
  )
}
