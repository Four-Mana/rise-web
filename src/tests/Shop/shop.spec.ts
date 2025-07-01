import test, { expect } from '@playwright/test';

const articleNames = [
  'Frank T-Shirt',
  'Breathing Again T-Shirt',
  'Derange Album',
  'Pack Frank + Album',
  'Pack Breathing Again'
];

test.describe('Shop page', () => {
  test('should display articles and purchase form', async ({ page }) => {
    await page.goto('/shop');
    await expect(page).toHaveTitle(/La Tienda - Rise/);
    await expect(page.getByText('Breathing Again Album')).toHaveCount(2);

    for (const name of articleNames) {
      await expect(page.getByText(name)).toBeVisible();
    }

    await page.getByText('Frank T-Shirt').click();
    await expect(page).toHaveURL(/#purchase-form/);
  });
});
