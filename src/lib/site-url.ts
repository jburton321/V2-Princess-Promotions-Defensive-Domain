/** Canonical site origin for metadata / OG URLs — never throws on bad env. */
export function getSiteUrl(): URL {
  const fallbacks = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    'https://princesspromtionsreviews.com',
  ]
  for (const raw of fallbacks) {
    if (!raw) continue
    try {
      return new URL(raw)
    } catch {
      /* ignore invalid dashboard env */
    }
  }
  return new URL('https://princesspromtionsreviews.com')
}
