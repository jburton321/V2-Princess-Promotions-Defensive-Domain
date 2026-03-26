'use client'

import { useSyncExternalStore } from 'react'

function subscribe(onStoreChange: () => void) {
  window.addEventListener('scroll', onStoreChange, { passive: true })
  return () => window.removeEventListener('scroll', onStoreChange)
}

function getScrollPercent(): number {
  const h = document.documentElement
  const denom = h.scrollHeight - h.clientHeight
  if (denom <= 0) return 0
  return (h.scrollTop / denom) * 100
}

export function useScrollProgress(): number {
  return useSyncExternalStore(subscribe, getScrollPercent, () => 0)
}
