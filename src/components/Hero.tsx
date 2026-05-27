import Link from 'next/link'

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
            Share your experience
          </Link>
          <Link href="#final-assessment" className="hero-cta hero-cta--ghost">
            Read our verdict
          </Link>
        </div>
      </div>
    </section>
  )
}
