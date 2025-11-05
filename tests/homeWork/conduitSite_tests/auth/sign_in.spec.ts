import { test, expect, Locator } from '@playwright/test';
import { getUserCredentials, login, logout } from './utils';

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
        await logout(page);
        
    })
              

    test('SIGNIN-S-002   Negative: Sign In to Conduit Site with non-registered user data', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Check the sign-in flow: unregistered email + password → login unsuccessful"}
    },
    async ({ page }) => {
        
        
        await page.locator('a.nav-link[href="/login"]').click();
        await page.getByPlaceholder('Email').fill("invicodin@gmail.com");
        await page.getByPlaceholder('Password').fill("in123456789");
        await page.locator('button:has-text("Sign in")').click();

        var errorMessages: Locator[] = await page.locator("ul.error-messages").all();
        for (var error of errorMessages) {
            expect (error).toHaveText("email or password is invalid")
        }

    })


    test('SIGNIN-S-003   Negative: Sign In to Conduit Site with invalid email (e.g. invicodin.com)', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Check the sign-in flow: incorrect email → login unsuccessful"}
    },
    async ({ page }) => {
        
        const authData: Map<string, string> = getUserCredentials();
        
        var email = page.getByPlaceholder('Email');


        await page.locator('a.nav-link[href="/login"]').click();
        await email.fill("invicodin.com")
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign in")').click();

        const msg = await email.evaluate((el: HTMLInputElement) => el.validationMessage);  //HTMLInputElement — это JS-класс для каждого <input> в DOM
        
        expect(msg).toBe('Адрес электронной почты должен содержать символ \"@\". В адресе \"invicodin.com\" отсутствует символ \"@\".');                    
        expect(msg.toLowerCase()).toContain('@');    

    })


    test('SIGNIN-S-004   Negative: Sign In to Conduit Site with empty password field', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Check the sign-in flow: empty password field → login unsuccessful"}
    },
    async ({ page }) => {
        
        const authData: Map<string, string> = getUserCredentials();
        
        await page.locator('a.nav-link[href="/login"]').click();
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.locator('button:has-text("Sign in")').click();

        //var errorMessages: Locator[] = await page.locator("ul.error-messages > li").all();
        var errorMessages: Locator[] = await page.locator("ul.error-messages").all();
        for (var error of errorMessages) {
            expect (error).toHaveText("password can't be blank")
        }

    })


