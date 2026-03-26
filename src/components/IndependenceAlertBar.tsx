'use client'

import { useEffect, useRef, useState } from 'react'

const TOP_REVEAL_PX = 12
const SCROLL_DELTA = 5

function InfoIcon() {
  return (
    <svg
      className="site-ind-info-svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.75" />
      <path stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" d="M12 16.25v-4.5" />
      <circle cx="12" cy="7.75" r="0.9" fill="currentColor" />
    </svg>
  )
}

function Chevron({ up }: { up: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={up ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IndependenceAlertBar() {
  const lastY = useRef(0)
  const [hidden, setHidden] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const prev = lastY.current

      if (y < TOP_REVEAL_PX) {
        setHidden(false)
        lastY.current = y
        return
      }

      const goingDown = y > prev + SCROLL_DELTA
      const goingUp = y < prev - SCROLL_DELTA

      if (goingDown) setHidden(true)
      if (goingUp) setHidden(false)

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (hidden) {
    return null
  }

  const fullDisclaimer = (
    <>
      <strong>Princess Promotions Reviews</strong> is an independent consumer review site. We are
      not owned by, affiliated with, or endorsed by Princess Promotions, Open Network Exchange (ONE
      Inc.), or Princess Cruises. Our reviews are based on our own research, BBB complaint analysis,
      cruise forum data, and consumer-submitted feedback.
    </>
  )

  return (
    <div
      className={`site-ind-alert-wrap${expanded ? '' : ' site-ind-alert-wrap--collapsed'}`}
      role="region"
      aria-label="Site independence disclaimer"
    >
      <div className={`site-ind-alert-row${expanded ? '' : ' site-ind-alert-row--collapsed'}`}>
        {expanded ? (
          <>
            <div className="site-ind-alert-main">
              <span className="site-ind-alert-icon">
                <InfoIcon />
              </span>
              <p className="site-ind-alert" id="independence-disclaimer">
                {fullDisclaimer}
              </p>
            </div>
            <button
              type="button"
              className="site-ind-alert-toggle"
              aria-label="Collapse disclaimer"
              aria-expanded="true"
              aria-controls="independence-disclaimer"
              onClick={() => setExpanded(false)}
            >
              <Chevron up />
            </button>
          </>
        ) : (
          <>
            <div className="site-ind-alert-main site-ind-alert-main--collapsed">
              <span className="site-ind-alert-icon">
                <InfoIcon />
              </span>
              <p className="site-ind-alert-peek site-ind-alert-title-only">
                Independent Consumer Review Site
              </p>
            </div>
            <button
              type="button"
              className="site-ind-alert-toggle"
              aria-label="Expand disclaimer"
              aria-expanded="false"
              onClick={() => setExpanded(true)}
            >
              <Chevron up={false} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
