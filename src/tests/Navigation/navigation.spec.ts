import test, { expect } from '@playwright/test';

test.describe('Navigation', () => {
  const navLinks = [
    { label: 'La Banda', path: '/band' },
    { label: 'Tienda', path: '/shop' },
    { label: 'Tour', path: '/tour' },
    { label: 'Contacto', path: '/contact' },
  ];

  for (const { label, path } of navLinks) {
    test(`navigate to ${label}`, async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: label }).click();
      await expect(page).toHaveURL(path);
    });
  }

  const footerLinks = [
    { label: 'Aviso Legal', path: '/legal' },
    { label: 'Política de Cookies Web', path: '/cookies' },
    { label: 'Política de Privacidad Web', path: '/privacy' },
    { label: 'Términos y condiciones Web', path: '/terms' },
  ];

  for (const { label, path } of footerLinks) {
    test(`footer link ${label}`, async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: label }).click();
      await expect(page).toHaveURL(path);
    });
  }
});
