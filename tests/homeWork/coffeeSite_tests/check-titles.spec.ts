import { test, expect } from '@playwright/test';

test('COFFEE-0002 Check Titles', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('[data-test="Espresso"]')).toContainText('espresso');
  await expect(page.getByRole('heading', { name: 'Espresso Macchiato $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cappuccino $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mocha $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Americano $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Flat White $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cafe Breve $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Espresso Con Panna $' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cafe Latte $' })).toBeVisible();
});