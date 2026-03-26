'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'

function overlapsViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const belowFoldBleedPx = 120
  return rect.bottom > 0 && rect.top < vh + belowFoldBleedPx
}

/**
 * Matches V9 HTML: `.journey.rv` plus child `.j-card` cells that also use `.rv` / `.rv-d*`.
 * When the journey intersects, we activate `.v` on the journey and every nested `.rv`.
 */
export function JourneyReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const activate = () => {
      el.classList.add('v')
      el.querySelectorAll('.rv').forEach((node) => node.classList.add('v'))
    }

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      activate()
      return
    }

    if (overlapsViewport(el)) {
      activate()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          activate()
          io.disconnect()
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="journey rv">
      {children}
    </div>
  )
}
