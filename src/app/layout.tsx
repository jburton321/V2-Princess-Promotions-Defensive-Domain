import type { Metadata } from 'next'
import localFont from 'next/font/local'
import {
  jsonLdArticle,
  jsonLdFaq,
  jsonLdOrganization,
} from '@/lib/metadata'
import { siteImages } from '@/lib/site-images'
import { getSiteUrl } from '@/lib/site-url'
import './globals.css'

/** Inter — sans-serif for UI and body copy. Vendored under `public/fonts/`. */
const inter = localFont({
  src: [
    { path: '../../public/fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/inter-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

/** Instrument Serif — display serif for headings / stats / quotes (not body copy). */
const instrumentSerif = localFont({
  src: [
    {
      path: '../../public/fonts/instrument-serif-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/instrument-serif-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const siteUrl = getSiteUrl()
/** Absolute URL — crawlers (Facebook, X, iMessage) require a public https URL, not a path. */
const openGraphImageUrl = new URL(siteImages.openGraph, siteUrl).href

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title:
    'Princess Promotions Reviews - Scam or Legit? Independent Consumer Review [2026]',
  description:
    'Are Princess Promotions Future Cruise Packages worth it? We independently reviewed BBB complaints, hotel credit issues, FCC redemption, and real customer feedback. Read before you buy.',
  keywords:
    'Princess Promotions reviews, Princess Promotions scam, is Princess Promotions legit, Princess Promotions hotel credits, Princess Promotions future cruise credit, Princess Promotions cancel, Princess Promotions refund, Princess Promotions vs Princess Cruises, Princess Promotions BBB complaints, Princess Promotions hidden fees, Princess Promotions hotel certificate',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: { canonical: new URL('/', siteUrl).href },
  openGraph: {
    type: 'article',
    title:
      'Princess Promotions Reviews - Scam or Legit? Independent Consumer Review [2026]',
    description:
      'We independently investigated Princess Promotions Future Cruise Packages. BBB complaints, hotel credit issues, FCC redemption, and real customer feedback, all reviewed.',
    url: new URL('/', siteUrl).href,
    siteName: 'Princess Promotions Reviews',
    images: [
      {
        url: openGraphImageUrl,
        width: 1920,
        height: 1155,
        type: 'image/jpeg',
        alt: 'Aerial view of a cruise ship at sea, Princess Promotions Reviews',
      },
    ],
    locale: 'en_US',
    publishedTime: '2026-03-01T00:00:00+00:00',
    modifiedTime: '2026-03-26T00:00:00+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Princess Promotions Reviews - Scam or Legit? [2026]',
    description:
      'Independent review of Princess Promotions Future Cruise Packages. Hotel credits, FCCs, BBB complaints, and real customer feedback analyzed.',
    images: [openGraphImageUrl],
  },
  icons: {
    icon: [{ url: '/favicons/favicon-light.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdOrganization }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdArticle }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
        />
        {children}
      </body>
    </html>
  )
}
