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
            Promotions:
          </span>
          <br />
          <span className="word" style={{ animationDelay: '0.55s' }}>
            <em>What</em>
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.65s' }}>
            <em>You</em>
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.75s' }}>
            <em>Need</em>
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.85s' }}>
            <em>to</em>
          </span>{' '}
          <span className="word" style={{ animationDelay: '0.95s' }}>
            <em>Know</em>
          </span>
        </h1>
        <p className="hero-sub">
          We investigated the complaints, the packages, and the redemption process. Below is
          everything we found.
        </p>
        <div className="hero-score-wrap">
          <div className="hero-big">3.1</div>
          <div className="hero-of">out of five</div>
          <div className="hero-badge">Conditionally Recommended</div>
        </div>
        <div className="hero-meta">
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
