import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";
import developmentConfig from "./configs/development.config";
import stagingConfig from "./configs/staging.config";
import productionConfig from "./configs/production.config";

const environment = process.env.ENV || "development";

let envConfig: PlaywrightTestConfig;

switch (environment) {
  case "staging":
    envConfig = stagingConfig;
    break;
  case "production":
    envConfig = productionConfig;
    break;
  case "development":
  default:
    envConfig = developmentConfig;
}

export default defineConfig({
  ...envConfig,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
