import { test, expect, APIRequestContext } from "@playwright/test";

let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    extraHTTPHeaders: {
      // "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
});

// test.use({ baseURL: process.env.NEXT_PUBLIC_API_URL });
test("Should get product by id", async ({ page }) => {
  const product = await apiContext.get("/product/12");
  expect(product.ok());

  await page.goto("/info");
});

// test.use({
//   baseURL: process.env.NEXT_PUBLIC_ROOT_URL,
// });
test("user info form", async ({ page }) => {
  await page.goto("/info");
  // Expect an element "to be visible".
  await page.click('p:has-text("Tu ganancia en esta orden")');
  await expect(page.locator('p:has-text("Mis datos")')).toBeVisible();
  await page.focus("input[id=\"name\"]");
  await page.fill('input[id="name"]', "Iván Morales");
  await page.fill('input[id="address"]', "Calle H. Mz. 141 Lt. 8");
  await page.click('button, input[type="button"], input[type="submit"] >> text="Guardar cambios"');
  // const title = page.locator('.navbar__inner .navbar__title');
  await page.pause();
});
