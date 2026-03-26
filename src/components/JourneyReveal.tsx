'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Matches V9 HTML: `.journey.rv` plus child `.j-card` cells that also use `.rv` / `.rv-d*`.
 * When the journey intersects, we activate `.v` on the journey and every nested `.rv`.
 */
export function JourneyReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          el.classList.add('v')
          el.querySelectorAll('.rv').forEach((node) => node.classList.add('v'))
          io.disconnect()
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
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
