type PullQuoteProps = {
  quote: string
  cite: string
}

export function PullQuote({ quote, cite }: PullQuoteProps) {
  return (
    <div className="pq">
      {quote}
      <cite>{cite}</cite>
    </div>
  )
}
