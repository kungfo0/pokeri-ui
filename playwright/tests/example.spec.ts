import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1200 });
  await page.goto('https://kungfo0.github.io/pokeri-ui/');
});

test.describe('Screenshot rounds', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // Create 1st todo.
    await page.locator('input:first-child').fill(process.env.POKERI_USER);
    await page.locator('input:last-child').fill(process.env.POKERI_PASS);
    await page.locator('button:first-child').click();

    await page.waitForSelector('table')

    await expect(page.locator('data-test-id=rounds-for-season')).toBeVisible()

    await page.screenshot({ path: 'pokeri-ui.png', fullPage: true });
  });
});
