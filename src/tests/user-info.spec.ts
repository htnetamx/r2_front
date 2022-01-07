import { test, expect } from "@playwright/test";

test("user info form", async ({ page }) => {
  await page.goto(
    `${process.env.NEXT_PUBLIC_ROOT_URL}/info`
      ? `${process.env.NEXT_PUBLIC_ROOT_URL}/info`
      : "https://localhost:3001/info"
  );
});
