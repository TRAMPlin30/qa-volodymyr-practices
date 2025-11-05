import { test, expect, Locator } from '@playwright/test';
import { getUserCredentials, login, logout } from '../auth/utils';
import * as locators from './xlocators'; 

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
    })


    test('SIGNIN-S-001   Positive: Sign In to Conduit Site with valid registered user data', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Check the sign-in flow: correct registered email + password → login succeeds"}
    },
    async ({ page }) => {
        
        const authData: Map<string, string> = getUserCredentials();
        var username = authData.get('username')
        
        await login(page);
        expect (page.locator('a:has-text("${username}")')).toBeVisible(); //(template literal)

        await page.locator(locators.newArticleLink).click()





        //await logout(page);

        
    })