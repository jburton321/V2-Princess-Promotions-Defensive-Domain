'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

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
        <Link href="#submit" className="hdr-cta">
          Submit a review
        </Link>
      </div>
    </header>
  )
}
