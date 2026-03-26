/**
 * Verifies .page-sections > section.band-page alternation (gray / white)
 * and top stripe where two band-pages are direct siblings.
 */
import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:3010'
const GRAY = 'rgb(245, 246, 249)'
const WHITE = 'rgb(255, 255, 255)'

const browser = await chromium.launch()
const page = await browser.newPage()

try {
  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60_000 })
  await page.waitForSelector('.page-sections > section.band-page', { timeout: 30_000 })

  const report = await page.evaluate(
    ({ gray, white }) => {
      const bands = [...document.querySelectorAll('.page-sections > section.band-page')]
      const alternation = bands.map((el, i) => {
        const bg = getComputedStyle(el).backgroundColor
        const want = i % 2 === 0 ? gray : white
        return {
          index: i + 1,
          ok: bg === want,
          backgroundColor: bg,
          expected: want,
        }
      })

      const seams = bands.map((el, i) => {
        const prev = el.previousElementSibling
        const directAdjacent = prev?.matches?.('section.band-page') === true
        const bi = getComputedStyle(el).backgroundImage
        const hasStripe = bi !== 'none' && bi.includes('gradient')
        return {
          bandIndex: i + 1,
          directAdjacentBandAbove: directAdjacent,
          hasGradientStripe: hasStripe,
          seamOk: !directAdjacent || hasStripe,
          backgroundImageSnippet: directAdjacent ? bi.slice(0, 80) : '(n/a)',
        }
      })

      return { bandCount: bands.length, alternation, seams }
    },
    { gray: GRAY, white: WHITE },
  )

  const badAlt = report.alternation.filter((r) => !r.ok)
  const badSeam = report.seams.filter((r) => !r.seamOk)

  console.log(JSON.stringify({ bandCount: report.bandCount, badAlt, badSeam }, null, 2))

  if (badAlt.length) {
    console.error('Alternation failures:', badAlt)
    process.exitCode = 1
  }
  if (badSeam.length) {
    console.error('Seam / stripe failures:', badSeam)
    process.exitCode = 1
  }
  if (!process.exitCode) {
    console.log(
      `OK: ${report.bandCount} band-page sections; alternation gray/white; stripes on ${report.seams.filter((s) => s.directAdjacentBandAbove).length} adjacent pairs.`,
    )
  }
} finally {
  await browser.close()
}
