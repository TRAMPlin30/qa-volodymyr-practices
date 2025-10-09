import { test, expect, Locator } from '@playwright/test';
import { generateAuthData, getAuthData } from './utils';

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
})


test('SIGNUP-001   Sign Up to Conduit Site with valid data', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Positive sign-up test: user can sign up with a valid email and password"}
    },
    async ({ page }) => {
        generateAuthData()
        const authData: Map<string, string> = getAuthData();
        var username: string = authData.get('username')!
        await page.locator('a.nav-link[href="/register"]').click();
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign up")').click();
        expect (page.locator('a:has-text("${username}")')).toBeVisible();
    })


