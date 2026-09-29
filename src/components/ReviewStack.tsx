'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CUSTOMER_REVIEWS,
  REVIEW_CATEGORIES,
  categoryLabel,
  matchesReviewFilters,
  type ReviewCategory,
} from '@/lib/reviews'

type CategoryFilter = 'all' | ReviewCategory

/** Reviews shown before the mobile-only "show more" toggle. Desktop always renders all. */
const MOBILE_VISIBLE = 6

/**
 * Markup #44/#46/#47/#48: no score summary, no star rows, no initial avatars and no
 * sentiment labels — reviews read as quotes filtered by topic only.
 */
export function ReviewStack() {
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const hasMatches = CUSTOMER_REVIEWS.some((review) =>
      matchesReviewFilters(review, category, 'all')
    )
    if (!hasMatches) setCategory('all')
  }, [category])

  useEffect(() => {
    setExpanded(false)
  }, [category])

  const categoryChips = useMemo(
    () =>
      REVIEW_CATEGORIES.map((item) => ({
        ...item,
        count: CUSTOMER_REVIEWS.filter((review) =>
          matchesReviewFilters(review, item.id, 'all')
        ).length,
      })),
    []
  )

  const visible = useMemo(
    () => CUSTOMER_REVIEWS.filter((review) => matchesReviewFilters(review, category, 'all')),
    [category]
  )

  const filterNote = category === 'all' ? '' : categoryLabel(category)

  return (
    <div className="reviews-board" id="customer-reviews">
      <div className="reviews-board-actions">
        <a href="#share-feedback" className="reviews-write">
          Write a review
        </a>
      </div>

      <div className="review-filters">
        <div className="review-filter-group">
          <div className="review-kw-row" role="toolbar" aria-label="Filter reviews by topic">
            <button
              type="button"
              className={`review-kw${category === 'all' ? ' is-on' : ''}`}
              aria-pressed={category === 'all'}
              onClick={() => setCategory('all')}
            >
              All
              <span className="review-kw-count">{CUSTOMER_REVIEWS.length}</span>
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
      </div>

      <p className="review-stack-meta" aria-live="polite">
        {visible.length} review{visible.length === 1 ? '' : 's'}
        {filterNote ? ` for ${filterNote}` : ''}
      </p>

      {visible.length === 0 ? (
        <p className="review-stack-empty">No reviews match these filters.</p>
      ) : (
        <div
          className={`review-stack${expanded ? ' is-expanded' : ''}`}
          role="list"
          aria-label="Customer reviews"
        >
          {visible.map((item) => (
            <article
              key={`${item.by}-${item.category}-${item.quote}`}
              className="review-card"
              role="listitem"
            >
              <div className="review-card-hd">
                <p className="review-card-name">{item.by}</p>
                <span className="review-card-tag">{categoryLabel(item.category)}</span>
              </div>
              <p className="review-card-body">{item.quote}</p>
            </article>
          ))}
        </div>
      )}

      {visible.length > MOBILE_VISIBLE ? (
        <button
          type="button"
          className="review-more"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded
            ? 'Show fewer reviews'
            : `Show ${visible.length - MOBILE_VISIBLE} more review${
                visible.length - MOBILE_VISIBLE > 1 ? 's' : ''
              }`}
        </button>
      ) : null}
    </div>
  )
}
