import { test, expect } from '@playwright/test';

// jira ticket id
test('COFFEE-0001 Order Espresso should be successful', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('volodymyr');
  await page.getByRole('textbox', { name: 'Email' }).fill('text@text.com');
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect (page.getByRole("button", {name: "Thanks for your purchase."})).toBeVisible();
});


