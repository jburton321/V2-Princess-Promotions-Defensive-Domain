'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Fixed alert + header stack: syncs real height to `--hdr-stack-h` on `<html>`
 * so `.hero` can pad below it (avoids overlap on mobile/tablet/desktop).
 */
export function HdrStack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const apply = () => {
      const h = Math.ceil(el.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--hdr-stack-h', `${h}px`)
    }

    apply()

    const ro = new ResizeObserver(() => apply())
    ro.observe(el)
    window.addEventListener('resize', apply)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', apply)
      document.documentElement.style.removeProperty('--hdr-stack-h')
    }
  }, [])

  return (
    <div className="hdr-stack" ref={ref}>
      {children}
    </div>
  )
}
