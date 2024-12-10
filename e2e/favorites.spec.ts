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
  await page.locator('[aria-label="Voeg product toe aan favorieten"]').first().click();

  // Badge should be displayed
  await expect(page.locator('[aria-label="Je hebt 1 favoriete product toegevoegd"]')).toBeVisible();  
});
