import type { ReactNode } from 'react'

type CalloutProps = {
  variant: 'warning' | 'info'
  children: ReactNode
}

export function Callout({ variant, children }: CalloutProps) {
  return (
    <div className={`co ${variant === 'warning' ? 'cw' : 'cb'}`}>
      <div className="b" aria-hidden />
      <div className="i">{children}</div>
    </div>
  )
}
