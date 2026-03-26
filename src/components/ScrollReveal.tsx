'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

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

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const mergedStyle: CSSProperties | undefined =
    displayContents === true ? { display: 'contents', ...style } : style

  return (
    <div
      ref={ref}
      className={['rv', className].filter(Boolean).join(' ')}
      style={mergedStyle}
    >
      {children}
    </div>
  )
}
