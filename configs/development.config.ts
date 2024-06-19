import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 5 * 60 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: "list",
  use: {
    actionTimeout: 0,
    baseURL: "https://www.saucedemo.com/",
    trace: "on-first-retry",
    headless: true,
  },
};

export default config;
