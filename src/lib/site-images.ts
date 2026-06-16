/**
 * Local image assets (formerly hot-linked from Unsplash).
 * Files live in `public/images/`.
 */
const heroAerial = '/images/hero-aerial.jpg'

export const siteImages = {
  /** Hero background */
  heroBg: '/images/hero-overwater-bungalow.png',
  /** Our Final Assessment background (via .verdict-bg in globals.css) */
  verdictBg: '/images/verdict-background.jpg',
  dividerCruiseAerial: '/images/divider-beach-paradise.png',
  howReviewBg: '/images/divider-cruise-ship-aerial.jpg',
  dividerDestination: '/images/golden-gate-bridge-panorama-san-francisco-with-bay-boat.jpg',
  redemptionCruiseShip: '/images/redemption-cruise-ship.jpg',
  /** Default social preview (Open Graph / Twitter) */
  openGraph: heroAerial,
} as const
