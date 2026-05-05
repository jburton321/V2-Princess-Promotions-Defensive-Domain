'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

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
      <Link href="#share-feedback">Share your experience →</Link>
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
