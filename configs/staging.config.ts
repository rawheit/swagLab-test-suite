import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 40000,
  expect: { timeout: 6000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'https://staging.example.com',
    trace: 'on',
    headless: true,
  },
};

export default config;
