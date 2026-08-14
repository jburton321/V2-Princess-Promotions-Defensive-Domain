import type { ReactNode } from 'react'

/** Princess Cruises main line - display matches dial string (same as 1-800-PRINCESS). */
export const PRINCESS_PHONE_HREF = 'tel:+18007746237'

export const PRINCESS_PHONE_DISPLAY = '1-800-PRINCESS'

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

const FAQ_PHONE_TOKENS = [
  { display: '+1 (888) 403-0301', href: PP_DIRECT_HREF },
  { display: PP_DIRECT_DISPLAY, href: PP_DIRECT_HREF },
  { display: '+1 (800) PRINCESS', href: PRINCESS_PHONE_HREF },
  { display: PRINCESS_PHONE_DISPLAY, href: PRINCESS_PHONE_HREF },
] as const

/** FAQ answers: link Princess and Princess Promotions numbers in any display format used on the page. */
export function TextWithMarkupPhones({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = []
  let i = 0
  let k = 0

  while (i < text.length) {
    let at = -1
    let token: (typeof FAQ_PHONE_TOKENS)[number] | null = null
    for (const candidate of FAQ_PHONE_TOKENS) {
      const found = text.indexOf(candidate.display, i)
      if (found === -1) continue
      if (at === -1 || found < at) {
        at = found
        token = candidate
      }
    }
    if (token === null || at === -1) {
      out.push(text.slice(i))
      break
    }
    if (at > i) out.push(text.slice(i, at))
    out.push(
      <a key={k++} href={token.href} className="tel-princess">
        {token.display}
      </a>
    )
    i = at + token.display.length
  }
  return <>{out}</>
}
