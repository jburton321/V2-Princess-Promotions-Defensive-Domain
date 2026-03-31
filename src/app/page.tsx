import { DualTabForms } from '@/components/DualTabForms'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HdrStack } from '@/components/HdrStack'
import { IndependenceAlertBar } from '@/components/IndependenceAlertBar'
import { Hero } from '@/components/Hero'
import { HowWeReview } from '@/components/HowWeReview'
import { ImageDivider } from '@/components/ImageDivider'
import { ProgressBar } from '@/components/ProgressBar'
import { RatingGrid } from '@/components/RatingGrid'
import { RedeemFCC } from '@/components/RedeemFCC'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { TestimonialScroll } from '@/components/TestimonialScroll'
import { Verdict } from '@/components/Verdict'
import { WhatIsPP } from '@/components/WhatIsPP'
import { WhatWorksWell } from '@/components/WhatWorksWell'
import { PPvsPrincess } from '@/components/PPvsPrincess'
import { siteImages } from '@/lib/site-images'
/* IssueBento retained at @/components/IssueBento — omitted from page per Mar 2026 review */

export default function HomePage() {
  return (
    <div className="page-sections">
      <ProgressBar />
      <HdrStack>
        <IndependenceAlertBar />
        <Header />
      </HdrStack>
      <Hero />
      <RatingGrid />
      <WhatIsPP />
      <PPvsPrincess />
      <ImageDivider
        src={siteImages.dividerCruiseAerial}
        alt="Princess Promotions cruise ship review - aerial view of Princess Cruises vessel at sea"
      />
      <WhatWorksWell />
      <ImageDivider
        src={siteImages.dividerDestination}
        alt="Princess Promotions vacation package destination - scenic travel landscape"
      />
      <RedeemFCC />
      <TestimonialScroll />
      <FAQAccordion />
      <HowWeReview />
      <Verdict />
      <DualTabForms />
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
