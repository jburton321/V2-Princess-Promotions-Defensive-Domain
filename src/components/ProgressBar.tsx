'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ProgressBar() {
  const pct = useScrollProgress()
  return <div className="prog" style={{ width: `${pct}%` }} />
}
