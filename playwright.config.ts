const isCi = require('is-ci');
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  globalSetup: './src/tests/global-setup.ts',
  reporter: [['html'], ['github']],
  expect: {
    timeout: 45 * 1000
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: 'on-first-retry',
    actionTimeout: 0,
    timezoneId: 'Europe/Madrid',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },

    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: 'pnpm playwright:dev',
    url: 'http://127.0.0.1:3000/health-check',
  },
});
