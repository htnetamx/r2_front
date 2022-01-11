// playwright.config.ts
import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    // trace: "on-first-retry",
    baseURL: process.env.NEXT_PUBLIC_ROOT_URL,
  },
  projects: [
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], headless: false },
    },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
};
export default config;
