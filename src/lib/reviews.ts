export const REVIEW_CATEGORIES = [
  { id: 'overall-value', label: 'Overall Value' },
  { id: 'motivation', label: 'Motivation' },
  { id: 'ease-of-use', label: 'Ease of Use' },
  { id: 'hotel-stays', label: 'Hotel Stays' },
  { id: 'concierge-support', label: 'Concierge Support' },
] as const

export const REVIEW_SENTIMENTS = [
  { id: 'positive', label: 'Positive', rating: 5 },
  { id: 'neutral', label: 'Neutral', rating: 3 },
  { id: 'negative', label: 'Negative', rating: 2 },
] as const

export type ReviewCategory = (typeof REVIEW_CATEGORIES)[number]['id']
export type ReviewSentiment = (typeof REVIEW_SENTIMENTS)[number]['id']

export type CustomerReview = {
  category: ReviewCategory
  sentiment: ReviewSentiment
  by: string
  initials: string
  quote: string
}

const SENTIMENT_RATING: Record<ReviewSentiment, number> = {
  positive: 5,
  neutral: 3,
  negative: 2,
}

function initialsFrom(name: string) {
  return name
    .replace(/\./g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function review(
  category: ReviewCategory,
  sentiment: ReviewSentiment,
  by: string,
  quote: string
): CustomerReview {
  return { category, sentiment, by, initials: initialsFrom(by), quote }
}

/** Curated PCL Future Cruise Package reviews. Filters use Category + Sentiment. */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  review(
    'overall-value',
    'positive',
    'Desiree J.',
    'The future cruise credits, on board credits and certificates for hotels created a value I cannot pass up. The whole package was a value to me.'
  ),
  review(
    'overall-value',
    'positive',
    'Naser E.',
    'The package provided great value, flexibility, and attractive benefits that made booking my future cruises easy and rewarding.'
  ),
  review(
    'overall-value',
    'positive',
    'Laurie G.',
    'Always easy to book, incredibly great options on hotels, and everything was easy to do. A great value.'
  ),
  review(
    'motivation',
    'positive',
    'Rita E.',
    'Princess Promotions gave us the freedom to dream our next adventure. The planning and execution were super easy with the help of the Promotions staff.'
  ),
  review(
    'ease-of-use',
    'positive',
    'Patricia G.',
    'The package has been extremely easy to use, from customer service to using the online tool to reserve hotels.'
  ),
  review(
    'ease-of-use',
    'positive',
    'Jeffrey W.',
    'Good value, the website was very easy to use.'
  ),
  review(
    'hotel-stays',
    'positive',
    'Wayne H.',
    'We have enjoyed past packages with amazing hotel stays, as well as all other amenities provided by purchasing the package.'
  ),
  review(
    'hotel-stays',
    'positive',
    'George C.',
    'We were able to make a bucket list trip come true and we were able to choose hotels at the initial port and terminal port using the package.'
  ),
  review(
    'concierge-support',
    'positive',
    'Naser E.',
    'The Concierge Team was professional, knowledgeable, and responsive throughout the booking process. Their support made the entire experience easy and enjoyable.'
  ),
  review(
    'concierge-support',
    'positive',
    'Scott A.',
    'Concierge team was incredibly helpful with every step we had to make.'
  ),
  review(
    'ease-of-use',
    'neutral',
    'Elizabeth H.',
    'Easy to book a lot of options but some parts of the package I did not use, like the hotel credits.'
  ),
  review(
    'concierge-support',
    'neutral',
    'Thomas H.',
    'The Concierge Team was always very responsive and helpful. It would be nice if they had a "new to cruising" tutorial on how to choose rooms, dining and events.'
  ),
  review(
    'ease-of-use',
    'negative',
    'Michael R.',
    'Website for choosing hotels in Rome was difficult to navigate.'
  ),
  review(
    'hotel-stays',
    'negative',
    'Laurie D.',
    'Most of the package was easily used, the points for the hotels was not easy to book.'
  ),
]

export function reviewRating(review: CustomerReview) {
  return SENTIMENT_RATING[review.sentiment]
}

export function categoryLabel(id: ReviewCategory) {
  return REVIEW_CATEGORIES.find((category) => category.id === id)?.label ?? id
}

export function sentimentLabel(id: ReviewSentiment) {
  return REVIEW_SENTIMENTS.find((sentiment) => sentiment.id === id)?.label ?? id
}

export function matchesReviewFilters(
  item: CustomerReview,
  category: 'all' | ReviewCategory,
  sentiment: 'all' | ReviewSentiment
) {
  const categoryOk = category === 'all' || item.category === category
  const sentimentOk = sentiment === 'all' || item.sentiment === sentiment
  return categoryOk && sentimentOk
}

const RATING_SUM = CUSTOMER_REVIEWS.reduce((sum, item) => sum + reviewRating(item), 0)

export const REVIEW_STATS = {
  count: CUSTOMER_REVIEWS.length,
  average: Math.round((RATING_SUM / CUSTOMER_REVIEWS.length) * 10) / 10,
  bars: [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: CUSTOMER_REVIEWS.filter((item) => reviewRating(item) === stars).length,
  })),
}
