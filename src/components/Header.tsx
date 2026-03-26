'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const PP_SIGNIN =
  'https://www.princesspromotions.com/signin?locale=en-US&currency=USD'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="hdr-in">
        <Link href="/" className="logo">
          <div className="logo-bar" aria-hidden />
          <div className="logo-t">
            <div className="logo-n">Princess Promotions</div>
            <div className="logo-s">Reviews</div>
          </div>
        </Link>
        <div className="hdr-actions">
          <Link href="#complaint-form" className="hdr-cta">
            Submit a review
          </Link>
          <Link
            href={PP_SIGNIN}
            className="hdr-cta hdr-cta--solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  )
}
