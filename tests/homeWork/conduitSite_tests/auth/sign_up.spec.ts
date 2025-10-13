import { test, expect, Locator } from '@playwright/test';
import { generateUserCredentials, getUserCredentials, logout } from './utils';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
    })



    test('SIGNUP-S-001   Positive: Sign Up to Conduit Site with valid username, email, password', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Positive sign-up test: user can sign up with a valid username, email and password"}
    },
    async ({ page }) => {

        generateUserCredentials();
        const authData: Map<string, string> = getUserCredentials();
        var username: string = authData.get('username')!
        await page.locator('a.nav-link[href="/register"]').click();
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign up")').click();
        expect (page.locator('a:has-text("${username}")')).toBeVisible();

        await logout(page);

    })



    test('SIGNUP-S-002   Negative: Sign Up to Conduit Site with valid invalid username', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Negative sign-up test: user can`t sign up with a invalid username"}
    },
    async ({ page }) => {

        const authData: Map<string, string> = getUserCredentials();
        
        await page.locator('a.nav-link[href="/register"]').click();
        await page.getByPlaceholder('Username').fill("&^%$#@!");
        await page.getByPlaceholder('Email').fill("test@emaillll.com")!;
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign up")').click();

        var errorMessages: Locator[] = await page.locator("ul.error-messages").all();
        for (var error of errorMessages) {
            expect (error).toHaveText("username is invalid")
        }
    

    })



    test('SIGNUP-S-003   Negative: Sign up on Conduit with an email that is already taken', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Negative sign-up test: user can`t sign up with an email that is already taken"}
    },
    async ({ page }) => {

        const authData: Map<string, string> = getUserCredentials();
    
        await page.locator('a.nav-link[href="/register"]').click();
        await page.getByPlaceholder('Username').fill("Lorem");
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.getByPlaceholder('Password').fill("random_password1123");
        await page.locator('button:has-text("Sign up")').click();
        var errorMessage = page.locator("ul.error-messages").first();
        expect (errorMessage).toHaveText("email is already taken.")


    })


