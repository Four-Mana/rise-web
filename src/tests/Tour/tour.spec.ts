import test, { expect } from '@playwright/test';

test.describe('Tour page', () => {
  test('should submit tour form', async ({ page }) => {
    await page.route('**/__tour-form.html', route => route.fulfill({ status: 200, body: 'OK' }));
    await page.goto('/tour');
    await expect(page).toHaveTitle(/Tour - Rise/);
    await expect(page.getByRole('heading', { name: 'Tour' })).toBeVisible();

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('textarea[name="message"]', 'Hello');
    await page.click('button[type="submit"]');

    await expect(page.getByText('Gracias por ponerte en contacto', { exact: false })).toBeVisible();
  });
});
