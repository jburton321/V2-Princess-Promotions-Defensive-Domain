'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const SIGNIN =
  'https://www.princesspromotions.com/signin?locale=en-US&currency=USD'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    let shown = false
    const onScroll = () => {
      if (shown) return
      if (window.scrollY > 400) {
        shown = true
        setVisible(true)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div className={`sticky-cta${visible ? ' show' : ''}`} id="sticky-cta">
      <Link href={SIGNIN} target="_blank" rel="noopener noreferrer">
        Have a Package? Log In to Redeem →
      </Link>
      <button
        type="button"
        className="dismiss"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
    </div>
  )
}
