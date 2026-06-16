import { ScrollReveal } from '@/components/ScrollReveal'

export function BigAnswer() {
  return (
    <section className="big-answer">
      <div className="big-answer-bg" aria-hidden />
      <div className="big-answer-ov" aria-hidden />
      <div className="big-answer-in">
        <ScrollReveal className="kicker">The Question Everyone Asks</ScrollReveal>
        <ScrollReveal>
          <h2>
            Is It a Scam? <em>No.</em>
            <br />
            Is It Complicated? <em>Yes.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The Future Cruise Credits are real and work. But there are documented, recurring patterns
            of misleading sales practices, particularly around hotel credits, total cost, and
            post-sale accessibility.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            The gap between what customers were told and what the fine print says is wide enough that
            multiple people have used the word &quot;scam,&quot; even though the underlying product is
            legitimate.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            <strong>Our take:</strong> Not a scam, but the sales process has serious transparency
            issues. Read the findings below before you commit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
