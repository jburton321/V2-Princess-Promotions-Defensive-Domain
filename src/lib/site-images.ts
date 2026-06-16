/**
 * Local image assets (formerly hot-linked from Unsplash).
 * Files live in `public/images/`.
 */
const heroAerial = '/images/hero-aerial.jpg'

export const siteImages = {
  /** Hero + default social preview (Open Graph / Twitter) */
  heroBg: '/images/hero-overwater-bungalow.png',
  /** Sun Princess at sea - big typographic “scam?” section */
  bigAnswerBg: '/images/big-answer-sun-princess.png',
  verdictBg: '/images/verdict-background.jpg',
  dividerCruiseAerial: '/images/divider-cruise-fjord-aerial-v2.png',
  howReviewBg: '/images/divider-cruise-ship-aerial.jpg',
  dividerDestination: '/images/golden-gate-bridge-panorama-san-francisco-with-bay-boat.jpg',
  editorialCruiseInterior: '/images/editorial-royal-princess-v2.png',
  editorialPrincessShip: '/images/editorial-princess-ship.jpg',
  issueFccAccounting: '/images/issue-fcc-accounting.jpg',
  issueHotelCertificates: '/images/issue-hotel-certificates.jpg',
  redemptionCruiseShip: '/images/redemption-cruise-ship.jpg',
  hotelPool: '/images/hotel-pool.jpg',
  /** Same file as `heroBg` - OG / Twitter `summary_large_image`. */
  openGraph: heroAerial,
} as const
