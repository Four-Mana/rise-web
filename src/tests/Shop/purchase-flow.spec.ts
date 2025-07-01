import test, { expect } from '@playwright/test';

test.describe('Shop purchase flow', () => {
  test('should submit purchase form and show success', async ({ page }) => {
    await page.route('**/__purchase-form.html', route => route.fulfill({ status: 200, body: 'OK' }));

    await page.goto('/shop');
    await page.getByText('Breathing Again Album').first().click();
    await expect(page).toHaveURL(/#purchase-form/);

    await page.getByText('Breathing Again Album').first().click();
    await page.getByText('Gastos de envío').first().click();

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'user@example.com');

    await page.click('button[type="submit"]');
    await expect(page.getByText('Te contactaremos', { exact: false })).toBeVisible();
  });
});
