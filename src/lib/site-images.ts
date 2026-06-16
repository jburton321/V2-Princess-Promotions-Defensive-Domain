/**
 * Local image assets (formerly hot-linked from Unsplash).
 * Files live in `public/images/`.
 */
const heroAerial = '/images/hero-aerial.jpg'

export const siteImages = {
  /** Hero + default social preview (Open Graph / Twitter) */
  heroBg: heroAerial,
  /** Sun Princess at sea — big typographic “scam?” section */
  bigAnswerBg: '/images/big-answer-sun-princess.png',
  verdictBg: '/images/verdict-background.jpg',
  dividerCruiseAerial: '/images/divider-cruise-fjord-aerial.png',
  dividerDestination: '/images/divider-corniche-coast.png',
  editorialCruiseInterior: '/images/editorial-royal-princess-v2.png',
  editorialPrincessShip: '/images/editorial-princess-ship.jpg',
  issueFccAccounting: '/images/issue-fcc-accounting.jpg',
  issueHotelCertificates: '/images/issue-hotel-certificates.jpg',
  redemptionCruiseShip: '/images/redemption-cruise-ship.jpg',
  hotelPool: '/images/hotel-pool.jpg',
  /** Same file as `heroBg` — OG / Twitter `summary_large_image`. */
  openGraph: heroAerial,
} as const
