import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1700, height: 1200 })
  await page.goto('https://kungfo0.github.io/pokeri-ui/')
})

test.describe('Screenshot rounds', () => {
  test('should login and take a screenshot', async ({ page }) => {
    await page.locator('input:first-child').fill(process.env.POKERI_USER)
    await page.locator('input:last-child').fill(process.env.POKERI_PASS)
    await page.locator('button:first-child').click()

    await page.waitForSelector('table')
    // await page.waitForSelector('text=previous')
    // await page.locator('text=previous').click();

    await expect(page.locator('data-test-id=rounds-for-season')).toBeVisible()

    await page.locator('data-test-id=rounds-for-season').screenshot({ path: 'rounds.png'})
    await page.locator('data-test-id=totals').screenshot({ path: 'totals.png'})
  })
})
