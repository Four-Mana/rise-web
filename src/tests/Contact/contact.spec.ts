import test, { expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('should submit contact form', async ({ page }) => {
    await page.route('**/__contact-form.html', route => route.fulfill({ status: 200, body: 'OK' }));
    await page.goto('/contact');
    await expect(page).toHaveTitle(/Contáctanos - Rise/);
    await expect(page.getByRole('heading', { name: 'Contacto' })).toBeVisible();

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('textarea[name="message"]', 'Hello');
    await page.click('button[type="submit"]');

    await expect(page.getByText('Gracias por ponerte en contacto', { exact: false })).toBeVisible();
  });
});
