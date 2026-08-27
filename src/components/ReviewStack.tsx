'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CUSTOMER_REVIEWS,
  REVIEW_CATEGORIES,
  REVIEW_SENTIMENTS,
  REVIEW_STATS,
  categoryLabel,
  matchesReviewFilters,
  reviewRating,
  sentimentLabel,
  type ReviewCategory,
  type ReviewSentiment,
} from '@/lib/reviews'

type CategoryFilter = 'all' | ReviewCategory
type SentimentFilter = 'all' | ReviewSentiment

function StarRow({ rating, label }: { rating: number; label: string }) {
  return (
    <span className="review-stars" aria-label={label}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.min(1, Math.max(0, rating - (n - 1)))
        return (
          <span key={n} className="review-star" aria-hidden>
            <span className="review-star-empty">★</span>
            <span className="review-star-fill" style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        )
      })}
    </span>
  )
}

export function ReviewStack() {
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [sentiment, setSentiment] = useState<SentimentFilter>('all')
  const [sort, setSort] = useState<'featured' | 'highest'>('featured')

  useEffect(() => {
    const hasMatches = CUSTOMER_REVIEWS.some((review) =>
      matchesReviewFilters(review, category, sentiment)
    )
    if (hasMatches) return
    setCategory('all')
    setSentiment('all')
  }, [category, sentiment])

  const categoryChips = useMemo(
    () =>
      REVIEW_CATEGORIES.map((item) => ({
        ...item,
        count: CUSTOMER_REVIEWS.filter((review) =>
          matchesReviewFilters(review, item.id, sentiment)
        ).length,
      })),
    [sentiment]
  )

  const sentimentChips = useMemo(
    () =>
      REVIEW_SENTIMENTS.map((item) => ({
        ...item,
        count: CUSTOMER_REVIEWS.filter((review) =>
          matchesReviewFilters(review, category, item.id)
        ).length,
      })),
    [category]
  )

  const allForSentiment = CUSTOMER_REVIEWS.filter((review) =>
    matchesReviewFilters(review, 'all', sentiment)
  ).length
  const allForCategory = CUSTOMER_REVIEWS.filter((review) =>
    matchesReviewFilters(review, category, 'all')
  ).length

  const visible = useMemo(() => {
    const filtered = CUSTOMER_REVIEWS.filter((review) =>
      matchesReviewFilters(review, category, sentiment)
    )
    if (sort !== 'highest') return filtered
    return [...filtered].sort((a, b) => reviewRating(b) - reviewRating(a))
  }, [category, sentiment, sort])

  const maxBar = Math.max(...REVIEW_STATS.bars.map((bar) => bar.count), 1)
  const categoryNote = category === 'all' ? '' : categoryLabel(category)
  const sentimentNote = sentiment === 'all' ? '' : sentimentLabel(sentiment)
  const filterNote = [categoryNote, sentimentNote].filter(Boolean).join(' · ')

  return (
    <div className="reviews-board" id="customer-reviews">
      <div className="reviews-board-top">
        <div className="reviews-board-score">
          <div className="reviews-board-avg">{REVIEW_STATS.average.toFixed(1)}</div>
          <StarRow
            rating={REVIEW_STATS.average}
            label={`${REVIEW_STATS.average} out of 5 stars`}
          />
          <p className="reviews-board-count">{REVIEW_STATS.count} reviews</p>
        </div>
        <ul className="reviews-board-bars" aria-label="Rating breakdown">
          {REVIEW_STATS.bars.map((bar) => (
            <li key={bar.stars} className="reviews-board-bar">
              <span className="reviews-board-bar-label">{bar.stars}</span>
              <span className="reviews-board-bar-track" aria-hidden>
                <span
                  className="reviews-board-bar-fill"
                  style={{ width: `${(bar.count / maxBar) * 100}%` }}
                />
              </span>
              <span className="reviews-board-bar-n">{bar.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="reviews-board-actions">
        <a href="#share-feedback" className="reviews-write">
          Write a review
        </a>
        <label className="reviews-sort">
          <span>Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as 'featured' | 'highest')}
            aria-label="Sort reviews"
          >
            <option value="featured">Featured</option>
            <option value="highest">Highest rated</option>
          </select>
        </label>
      </div>

      <div className="review-filters">
        <div className="review-filter-group">
          <p className="review-filter-label" id="review-filter-topic">
            Topic
          </p>
          <div
            className="review-kw-row"
            role="toolbar"
            aria-labelledby="review-filter-topic"
          >
            <button
              type="button"
              className={`review-kw${category === 'all' ? ' is-on' : ''}`}
              aria-pressed={category === 'all'}
              onClick={() => setCategory('all')}
            >
              All
              <span className="review-kw-count">{allForSentiment}</span>
            </button>
            {categoryChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`review-kw${category === chip.id ? ' is-on' : ''}`}
                aria-pressed={category === chip.id}
                disabled={chip.count === 0}
                onClick={() => setCategory(chip.id)}
              >
                {chip.label}
                <span className="review-kw-count">{chip.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="review-filter-group">
          <p className="review-filter-label" id="review-filter-sentiment">
            Sentiment
          </p>
          <div
            className="review-kw-row"
            role="toolbar"
            aria-labelledby="review-filter-sentiment"
          >
            <button
              type="button"
              className={`review-kw${sentiment === 'all' ? ' is-on' : ''}`}
              aria-pressed={sentiment === 'all'}
              onClick={() => setSentiment('all')}
            >
              All
              <span className="review-kw-count">{allForCategory}</span>
            </button>
            {sentimentChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`review-kw review-kw-${chip.id}${sentiment === chip.id ? ' is-on' : ''}`}
                aria-pressed={sentiment === chip.id}
                disabled={chip.count === 0}
                onClick={() => setSentiment(chip.id)}
              >
                {chip.label}
                <span className="review-kw-count">{chip.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="review-stack-meta" aria-live="polite">
        Showing {visible.length} of {REVIEW_STATS.count}
        {filterNote ? ` for ${filterNote}` : ''}
      </p>

      {visible.length === 0 ? (
        <p className="review-stack-empty">No reviews match these filters.</p>
      ) : (
        <div className="review-stack" role="list" aria-label="Customer reviews">
          {visible.map((item) => (
            <article
              key={`${item.by}-${item.category}-${item.quote}`}
              className="review-card"
              role="listitem"
            >
              <div className="review-card-hd">
                <span className="review-card-avatar" aria-hidden>
                  {item.initials}
                </span>
                <div className="review-card-who">
                  <p className="review-card-name">{item.by}</p>
                  <p className="review-card-date">
                    {categoryLabel(item.category)} · {sentimentLabel(item.sentiment)}
                  </p>
                </div>
              </div>
              <StarRow
                rating={reviewRating(item)}
                label={`${reviewRating(item)} out of 5 stars`}
              />
              <p className="review-card-body">{item.quote}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
