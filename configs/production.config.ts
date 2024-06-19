import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'https://www.example.com',
    trace: 'on',
    headless: true,
  },
};

export default config;
