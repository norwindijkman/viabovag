import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://divotion.plathena.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CameraStore/);
});

test('Select favorite product', async ({ page }) => {
  await page.goto('https://divotion.plathena.com');
  await page.waitForLoadState('networkidle');

  // Click on favorites in a product.
  const button = page.locator('[aria-label="Voeg product toe aan favorieten"]').first();
  await expect(button).toBeVisible()
  await button.click()
  
  // Badge should be displayed
  const badge = page.locator('[aria-label="Je hebt 1 favoriete product toegevoegd"]')
  await expect(badge).toBeVisible();  
});
