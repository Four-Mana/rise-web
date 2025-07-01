import test, { expect } from '@playwright/test';

test.describe('Policy pages', () => {
  const pages = [
    { path: '/cookies', title: /Cookies - Rise/, heading: 'Cookies' },
    { path: '/legal', title: /Aviso legal - Rise/, heading: 'Aviso Legal' },
    { path: '/privacy', title: /Privacidad - Rise/, heading: 'Privacidad' },
    { path: '/terms', title: /Terminos y condiciones - Rise/, heading: 'Términos & Condiciones' },
  ];

  for (const { path, title, heading } of pages) {
    test(`should render ${path}`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(title);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    });
  }
});
