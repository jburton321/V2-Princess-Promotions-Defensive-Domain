'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

const faqs: { q: string; a: string }[] = [
  {
    q: 'Is Princess Promotions a Scam?',
    a: 'Based on our review, no. FCCs are real and work. However, there are documented issues with hotel credits, additional charges, and post-sale support. The product is legitimate, but the sales process has transparency issues.',
  },
  {
    q: 'Is Princess Promotions the Same as Princess Cruises?',
    a: 'No. Operated by Open Network Exchange (ONE Inc.), a third-party. FCCs go through Princess Cruises; hotel certificates through Princess Promotions.',
  },
  {
    q: 'How Do Hotel Credits Actually Work?',
    a: 'May apply at 50% of stated value — $600 = $300 usable. Platform prices often higher than Booking.com and Expedia. Always compare and get written confirmation.',
  },
  {
    q: "What if I Can't Reach My Planning Advisor?",
    a: 'Call the main line and request supervisor escalation. Document every call. If within the cancellation window, send written cancellation via email immediately.',
  },
  {
    q: 'Can I Cancel My Package?',
    a: "7-day cancellation window from purchase. After that, significantly harder. Send written cancellation immediately — don't rely on phone calls alone.",
  },
  {
    q: 'Why Was I Charged More Than Quoted?',
    a: 'Multiple BBB complaints describe this. Total cost may include installments not explained at sale. Get a written breakdown of everything before purchasing.',
  },
  {
    q: 'Are Cruise Credits Cheaper Than Booking Direct?',
    a: "FCCs provide real savings, especially for frequent cruisers. Hotel components often don't match paper value. Evaluate FCC value separately from hotel value.",
  },
]

const delayClasses = ['rv-d1', 'rv-d2', 'rv-d3', 'rv-d4', 'rv-d5', 'rv-d6', '']

function FAQBlock({ item, delayClass }: { item: (typeof faqs)[0]; delayClass: string }) {
  const [open, setOpen] = useState(false)
  return (
    <ScrollReveal className={`faq-item${open ? ' open' : ''} ${delayClass}`.trim()}>
      <button
        type="button"
        className="faq-q"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open ? 'true' : 'false'}
      >
        <span>{item.q}</span>
        <div className="plus" aria-hidden />
      </button>
      <div className="faq-a">
        <div className="faq-a-in">
          <p>{item.a}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function FAQAccordion() {
  return (
    <section className="sec-sm" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <ScrollReveal className="kicker">Common Questions</ScrollReveal>
        <ScrollReveal className="sec-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Frequently Asked Questions
          <br />
          About Princess Promotions
        </ScrollReveal>
        {faqs.map((item, i) => (
          <FAQBlock key={item.q} item={item} delayClass={delayClasses[i]} />
        ))}
      </div>
    </section>
  )
}
