import type { ReactNode } from 'react'

/** Princess Cruises main line — display matches dial string (same as 1-800-PRINCESS). */
export const PRINCESS_PHONE_HREF = 'tel:+18007746237'

export const PRINCESS_PHONE_DISPLAY = '1-800-774-6237'

/** Direct Princess Promotions line (Markup / ONE Agency). */
export const PP_DIRECT_HREF = 'tel:+18884030301'

export const PP_DIRECT_DISPLAY = '+1 888 403 0301'

type PrincessPhoneLinkProps = {
  className?: string
  /** Shown after the link, e.g. ", option 5" */
  suffix?: string
}

export function PrincessPhoneLink({ className, suffix }: PrincessPhoneLinkProps) {
  return (
    <>
      <a href={PRINCESS_PHONE_HREF} className={className ?? 'tel-princess'}>
        {PRINCESS_PHONE_DISPLAY}
      </a>
      {suffix}
    </>
  )
}

export function PrincessPromotionsDirectLink({ className }: { className?: string }) {
  return (
    <a href={PP_DIRECT_HREF} className={className ?? 'tel-princess'}>
      {PP_DIRECT_DISPLAY}
    </a>
  )
}

/** FAQ answers: link main line and +1 888 403 0301 when present. */
export function TextWithMarkupPhones({ text }: { text: string }): ReactNode {
  const direct = PP_DIRECT_DISPLAY
  const princess = PRINCESS_PHONE_DISPLAY
  const out: ReactNode[] = []
  let i = 0
  let k = 0

  while (i < text.length) {
    const pi = text.indexOf(princess, i)
    const di = text.indexOf(direct, i)
    let pick: 'p' | 'd' | null = null
    let at = -1
    if (pi !== -1 && (di === -1 || pi <= di)) {
      pick = 'p'
      at = pi
    } else if (di !== -1) {
      pick = 'd'
      at = di
    }
    if (pick === null) {
      out.push(text.slice(i))
      break
    }
    if (at > i) out.push(text.slice(i, at))
    if (pick === 'p') {
      out.push(
        <a key={k++} href={PRINCESS_PHONE_HREF} className="tel-princess">
          {princess}
        </a>
      )
      i = at + princess.length
    } else {
      out.push(
        <a key={k++} href={PP_DIRECT_HREF} className="tel-princess">
          {direct}
        </a>
      )
      i = at + direct.length
    }
  }
  return <>{out}</>
}
