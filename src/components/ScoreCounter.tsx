'use client'

import { useEffect, useRef, useState } from 'react'

export function ScoreCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const dur = 800
          const t0 = performance.now()
          const step = (ts: number) => {
            const p = Math.min((ts - t0) / dur, 1)
            const eased = 1 - (1 - p) ** 3
            setVal(eased * target)
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          io.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <span ref={ref} className="counter">
      {val.toFixed(1)}
    </span>
  )
}
