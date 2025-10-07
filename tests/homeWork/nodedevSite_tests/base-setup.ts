import { Page, expect } from '@playwright/test';

//https://playwright.dev/
//https://playwright.dev/docs/intro --click GET STARTED 


export async function baseSetup (page: Page, ) {
    await page.goto('https://playwright.dev/');
    await page.locator('[class="getStarted_Sjon"]').click();
    await expect (page).toHaveURL('https://playwright.dev/docs/intro');
    await expect(page.locator('header:has-text("Installation")')).toBeVisible();
}
