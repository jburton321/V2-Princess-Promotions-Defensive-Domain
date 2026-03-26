import { ScrollReveal } from '@/components/ScrollReveal'
import { ScoreCounter } from '@/components/ScoreCounter'

export function RatingGrid() {
  return (
    <section className="sec">
      <div className="sec-inner">
        <ScrollReveal className="kicker">Our Assessment</ScrollReveal>
        <ScrollReveal className="sec-title">
          Princess Promotions
          <br />
          Rating at a Glance
        </ScrollReveal>
        <ScrollReveal className="sec-sub">
          Based on BBB complaint data, cruise community feedback, and our editorial assessment:
        </ScrollReveal>
        <div className="r-grid">
          <ScrollReveal className="r-card rv-d1">
            <div className="ct">Cruise credit value</div>
            <div className="ds">Are the FCCs worth the package price?</div>
            <div className="sv sa">
              <ScoreCounter target={3.8} /> <small>/ 5</small>
            </div>
          </ScrollReveal>
          <ScrollReveal className="r-card rv-d2">
            <div className="ct">Hotel credit value</div>
            <div className="ds">Do hotel credits deliver real savings vs. Expedia?</div>
            <div className="sv sr">
              <ScoreCounter target={2.6} /> <small>/ 5</small>
            </div>
          </ScrollReveal>
          <ScrollReveal className="r-card rv-d3">
            <div className="ct">Sales transparency</div>
            <div className="ds">Are total costs and limitations disclosed upfront?</div>
            <div className="sv sr">
              <ScoreCounter target={2.8} /> <small>/ 5</small>
            </div>
          </ScrollReveal>
          <ScrollReveal className="r-card rv-d4">
            <div className="ct">Post-sale support</div>
            <div className="ds">Can you reach your advisor after purchase?</div>
            <div className="sv sr">
              <ScoreCounter target={2.9} /> <small>/ 5</small>
            </div>
          </ScrollReveal>
          <ScrollReveal className="r-card rv-d5">
            <div className="ct">Overall package value</div>
            <div className="ds">Does the full package deliver on what was promised?</div>
            <div className="sv sa">
              <ScoreCounter target={3.4} /> <small>/ 5</small>
            </div>
          </ScrollReveal>
          <ScrollReveal className="r-card r-overall rv-d6">
            <div className="sv">
              <ScoreCounter target={3.1} /> <small>/ 5</small>
            </div>
            <div>
              <div className="ct">Overall score</div>
              <div className="ds">
                Conditionally recommended. Real value exists, but only if you understand the fine
                print before you buy.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
