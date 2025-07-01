import test, { expect } from '@playwright/test';

test.describe('Band page', () => {
  test('should display band information', async ({ page }) => {
    await page.goto('/band');
    await expect(page).toHaveTitle(/La Banda - Rise/);
    await expect(page.getByText('RISE es una banda', { exact: false })).toBeVisible();
  });
});
