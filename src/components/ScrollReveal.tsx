'use client'

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/**
 * True if the block overlaps the viewport or sits just below the fold (e.g. hero-overlap form).
 * Strict IO missed those by a few pixels, leaving `opacity:0` on first paint.
 */
function overlapsViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const belowFoldBleedPx = 120
  return rect.bottom > 0 && rect.top < vh + belowFoldBleedPx
}

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Lets one child participate in a parent CSS grid (e.g. `.journey`). */
  displayContents?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  style,
  displayContents,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  /** Must live in React state: any parent re-render resets `className` and would drop a DOM-only `v`. */
  const [revealed, setRevealed] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => setRevealed(true)

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      reveal()
      return
    }

    if (overlapsViewport(el)) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const mergedStyle: CSSProperties | undefined =
    displayContents === true ? { display: 'contents', ...style } : style

  return (
    <div
      ref={ref}
      className={['rv', className, revealed ? 'v' : ''].filter(Boolean).join(' ')}
      style={mergedStyle}
    >
      {children}
    </div>
  )
}
