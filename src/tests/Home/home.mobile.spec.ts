import test, { expect } from '@playwright/test';

test.describe('Home', () => {
  test('Should show the home', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('hero-section')).toBeVisible();
    await expect(page.getByTestId('mobile-navbar')).toBeVisible();
  });
});
