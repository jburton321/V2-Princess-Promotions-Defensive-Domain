import Image from 'next/image'
import type { CSSProperties } from 'react'
import { Callout } from '@/components/Callout'
import { PullQuote } from '@/components/PullQuote'
import { ScrollReveal } from '@/components/ScrollReveal'
import { siteImages } from '@/lib/site-images'

const mediaGridTight: CSSProperties = { gridTemplateColumns: '0.9fr 1.1fr' }

export function PPvsPrincess() {
  return (
    <section className="sec-sm" style={{ background: 'var(--bg)' }}>
      <div className="editorial">
        <ScrollReveal className="kicker">Entity Confusion</ScrollReveal>
        <ScrollReveal>
          <h2>Is Princess Promotions the Same as Princess Cruises?</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>No</strong> — and this distinction matters more than most realize.
          </p>
        </ScrollReveal>

        <ScrollReveal className="media-grid" style={mediaGridTight}>
          <Image
            src={siteImages.editorialPrincessShip}
            alt="Princess Cruises ship - separate entity from Princess Promotions"
            width={800}
            height={600}
            className="h-full min-h-[240px] max-h-[360px] w-full rounded-bento object-cover"
            loading="lazy"
          />
          <div className="txt">
            <p>
              Princess Promotions operates on Princess ships using the Princess brand, but it’s run
              by a separate company (ONE Inc.). Think of it like a third-party vendor inside a
              department store.
            </p>
            <p>
              When something goes wrong, each entity may point you to the other. Multiple BBB
              complaints describe this runaround.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <PullQuote
            quote='"Multiple BBB complaints describe customers being bounced between the two entities with no one taking full responsibility."'
            cite="— From our analysis of 2025–2026 BBB complaint data"
          />
        </ScrollReveal>

        <ScrollReveal className="split">
          <div className="split-l">
            <div className="split-tag">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="#2E75B6"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M8 2v12M5 5l3-3 3 3" />
              </svg>{' '}
              Princess Cruises
            </div>
            <h3>Handles Your Cruise</h3>
            <p>
              Future Cruise Credits (FCCs), cruise bookings, onboard experience, loyalty status
            </p>
            <div className="phone">1-800-PRINCESS</div>
          </div>
          <div className="split-r">
            <div className="split-tag">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="#C4922A"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <rect x="2" y="4" width="12" height="8" rx="2" />
                <path d="M2 7h12" />
              </svg>{' '}
              Princess Promotions
            </div>
            <h3>Handles Your Hotels</h3>
            <p>Hotel stay certificates, hotel credits, premium land stays, pre/post-cruise stays</p>
            <div className="phone">1-800-PRINCESS, option 5</div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Callout variant="info">
            <strong>Our recommendation:</strong> Before you buy, understand which entity handles
            what. Write down both contact numbers. This single step will save you hours of
            frustration.
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
