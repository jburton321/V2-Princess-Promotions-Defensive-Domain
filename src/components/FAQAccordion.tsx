'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { faqItems } from '@/lib/faq-data'
import { TextWithMarkupPhones } from '@/lib/princess-phone'

const delayClasses = [
  'rv-d1',
  'rv-d2',
  'rv-d3',
  'rv-d4',
  'rv-d5',
  'rv-d6',
  'rv-d7',
  'rv-d8',
  'rv-d9',
  'rv-d10',
  'rv-d11',
  'rv-d12',
  'rv-d13',
  'rv-d14',
]

function FAQBlock({
  item,
  delayClass,
  index,
}: {
  item: (typeof faqItems)[0]
  delayClass: string
  index: number
}) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const btnId = `faq-trigger-${index}`

  return (
    <ScrollReveal className={delayClass}>
      <div className={`faq-item${open ? ' open' : ''}`}>
        <button
          type="button"
          className="faq-q"
          aria-expanded={open}
          aria-controls={panelId}
          id={btnId}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="faq-q-text">{item.q}</span>
          <span className="plus" aria-hidden />
        </button>
        <div
          id={panelId}
          className="faq-a"
          role="region"
          aria-labelledby={btnId}
          {...(open ? {} : { 'aria-hidden': 'true' as const })}
        >
          <div className="faq-a-in">
            <p>
              <TextWithMarkupPhones text={item.a} />
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function FAQAccordion() {
  return (
    <section className="sec-sm faq-sec band-page">
      <div className="faq-sec-inner">
        <ScrollReveal className="kicker">Common Questions</ScrollReveal>
        <ScrollReveal className="sec-title faq-sec-title">
          Frequently Asked Questions
          <br />
          About Princess Promotions
        </ScrollReveal>
        {faqItems.map((item, i) => (
          <FAQBlock key={item.q} item={item} delayClass={delayClasses[i] ?? ''} index={i} />
        ))}
      </div>
    </section>
  )
}
