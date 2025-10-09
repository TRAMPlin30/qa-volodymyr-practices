import { test, expect, Locator } from '@playwright/test';
import { generateAuthData, getAuthData } from './utils';

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
})


test('SIGNIN-001   Sign In to Conduit Site with valid data', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Check the sign-in flow: correct email + password → login succeeds"}
    },
    async ({ page }) => {
        
        const authData: Map<string, string> = getAuthData();
        
        await page.locator('a.nav-link[href="/login"]').click();
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign in")').click();
        
    })