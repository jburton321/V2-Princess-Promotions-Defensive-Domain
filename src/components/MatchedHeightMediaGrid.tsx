'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

type Props = {
  /** When true, image column is first in DOM (left on desktop, top when stacked). */
  imageFirst: boolean
  /** Classes on the ScrollReveal root (must include `media-grid`). */
  gridClassName: string
  imageSrc: string
  imageAlt: string
  /** Passed to `next/image` `sizes`. */
  sizes?: string
  children: ReactNode
}

/**
 * Sets the image column height to the measured height of the `.txt` column (ResizeObserver).
 */
export function MatchedHeightMediaGrid({
  imageFirst,
  gridClassName,
  imageSrc,
  imageAlt,
  sizes = '(max-width: 1100px) 100vw, 50vw',
  children,
}: Props) {
  const txtRef = useRef<HTMLDivElement>(null)
  const [textPx, setTextPx] = useState(0)

  useLayoutEffect(() => {
    const el = txtRef.current
    if (!el || typeof ResizeObserver === 'undefined') return

    const measure = () => {
      const h = el.getBoundingClientRect().height
      setTextPx(Math.round(h))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure, { passive: true })
    void document.fonts?.ready?.then(() => {
      requestAnimationFrame(measure)
    })
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const txtCol = (
    <div ref={txtRef} className="txt">
      {children}
    </div>
  )

  const imgCol = (
    <div
      className="matched-height-media"
      style={textPx > 0 ? { height: textPx } : undefined}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes={sizes}
        loading="lazy"
      />
    </div>
  )

  return (
    <ScrollReveal className={gridClassName}>
      {imageFirst ? (
        <>
          {imgCol}
          {txtCol}
        </>
      ) : (
        <>
          {txtCol}
          {imgCol}
        </>
      )}
    </ScrollReveal>
  )
}
