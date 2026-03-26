import { DualTabForms } from '@/components/DualTabForms'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowWeReview } from '@/components/HowWeReview'
import { ImageDivider } from '@/components/ImageDivider'
import { IndependenceBar } from '@/components/IndependenceBar'
import { IssueBento } from '@/components/IssueBento'
import { PPvsPrincess } from '@/components/PPvsPrincess'
import { ProgressBar } from '@/components/ProgressBar'
import { RatingGrid } from '@/components/RatingGrid'
import { RedeemFCC } from '@/components/RedeemFCC'
import { RedeemHotel } from '@/components/RedeemHotel'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { TestimonialScroll } from '@/components/TestimonialScroll'
import { Verdict } from '@/components/Verdict'
import { WhatIsPP } from '@/components/WhatIsPP'
import { WhatWorksWell } from '@/components/WhatWorksWell'
import { WhoAreYouRouter } from '@/components/WhoAreYouRouter'
import { siteImages } from '@/lib/site-images'

export default function HomePage() {
  return (
    <div className="page-sections">
      <ProgressBar />
      <Header />
      <Hero />
      <IndependenceBar />
      <WhoAreYouRouter />
      <DualTabForms />
      <RatingGrid />
      <ImageDivider
        src={siteImages.dividerCruiseAerial}
        alt="Princess Promotions cruise ship review - aerial view of Princess Cruises vessel at sea"
      />
      <PPvsPrincess />
      <WhatIsPP />
      <WhatWorksWell />
      <IssueBento />
      <ImageDivider
        src={siteImages.dividerDestination}
        alt="Princess Promotions vacation package destination - scenic travel landscape"
      />
      <RedeemFCC />
      <RedeemHotel />
      <TestimonialScroll />
      <FAQAccordion />
      <HowWeReview />
      <Verdict />
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
