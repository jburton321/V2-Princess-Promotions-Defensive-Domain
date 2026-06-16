/**
 * Opens the site in Chromium, scrolls to FAQ, clicks open/close, asserts
 * ScrollReveal wrapper stays opacity:1 and keeps class .v (regression for FAQ vanishing).
 */
import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:3000'

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 120_000 })

  const firstItem = page.locator('.faq-sec .faq-item').first()
  const firstBtn = firstItem.locator('.faq-q').first()

  // .rv starts at opacity:0 - Playwright "visible" waits forever until .v is applied
  await firstBtn.waitFor({ state: 'attached', timeout: 60_000 })
  await firstBtn.scrollIntoViewIfNeeded()

  await page.waitForFunction(
    () => {
      const item = document.querySelector('.faq-sec .faq-item')
      const wrap = item?.parentElement
      if (!wrap?.classList.contains('v')) return false
      return getComputedStyle(wrap).opacity === '1'
    },
    { timeout: 45_000 }
  )

  const readWrapper = () =>
    firstItem.evaluate((item) => {
      const wrap = item.parentElement
      if (!wrap) return null
      return {
        opacity: getComputedStyle(wrap).opacity,
        hasV: wrap.classList.contains('v'),
        className: wrap.className,
      }
    })

  const before = await readWrapper()
  if (before.opacity !== '1' || !before.hasV) {
    throw new Error(`Reveal failed before click: ${JSON.stringify(before)}`)
  }

  await firstBtn.click()
  await page.waitForFunction(
    () => document.querySelector('.faq-sec .faq-item')?.classList.contains('open'),
    { timeout: 5_000 }
  )

  const afterOpen = await readWrapper()
  if (afterOpen.opacity !== '1' || !afterOpen.hasV) {
    throw new Error(`Wrapper invisible or lost .v after opening FAQ: ${JSON.stringify(afterOpen)}`)
  }

  await firstBtn.click()
  await page.waitForFunction(
    () => !document.querySelector('.faq-sec .faq-item')?.classList.contains('open'),
    { timeout: 5_000 }
  )

  const afterClose = await readWrapper()
  if (afterClose.opacity !== '1' || !afterClose.hasV) {
    throw new Error(`Wrapper invisible or lost .v after closing FAQ: ${JSON.stringify(afterClose)}`)
  }

  await browser.close()
  console.log('FAQ click smoke: OK', { before, afterOpen, afterClose })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
