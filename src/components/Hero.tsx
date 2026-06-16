import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden>
        <Image
          className="hero-bg-video"
          src="/images/hero-overwater-bungalow.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
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
          Looking for more information about Princess Promotions or Princess Future Cruise Packages?
          Wondering whether it&apos;s too good to be true? We&apos;ve reviewed how it works, what
          buyers should know, common questions, and key factors to consider before purchasing.
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
