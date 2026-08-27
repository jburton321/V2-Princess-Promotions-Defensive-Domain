import { DualTabForms } from '@/components/DualTabForms'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowWeReview } from '@/components/HowWeReview'
import { BentoGrid } from '@/components/BentoGrid'
import { ImageDivider } from '@/components/ImageDivider'
import { RedeemFCC } from '@/components/RedeemFCC'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { ThinkingAboutBuying } from '@/components/ThinkingAboutBuying'
import { Verdict } from '@/components/Verdict'
import { WhatIsPP } from '@/components/WhatIsPP'
import { WhatWorksWell } from '@/components/WhatWorksWell'
import { siteImages } from '@/lib/site-images'
/* IssueBento retained at @/components/IssueBento - omitted from page per Mar 2026 review */
/* TestimonialScroll hidden per stakeholder Markup (Apr 2026) - restore import when live reviews return */
/* ReviewsStatus merged into DualTabForms intro (Markup #40–#42) */

export default function HomePage() {
  return (
    <div className="page-sections">
      <Hero />
      <HowWeReview />
      <WhatIsPP />
      <ThinkingAboutBuying />
      <BentoGrid />
      <WhatWorksWell />
      <ImageDivider
        src={siteImages.dividerDestination}
        alt="Princess Cruises ship at sea at sunset - Princess Future Cruise Packages"
      />
      <RedeemFCC />
      <FAQAccordion />
      <Verdict />
      <DualTabForms />
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
