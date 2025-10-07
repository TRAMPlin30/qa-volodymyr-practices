import { test, expect, Locator } from '@playwright/test';

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
})



test('CON_UP-001   Sign Up to Conduit Site with valid data', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Positive sign-up test: user can sign up with a valid email and password"}
    },
    
    async ({ page }) => {
        await page.locator('a.nav-link[href="/register"]').click()


    })



    test('CON_UP-002   Sign Up to Conduit Site with invalid data', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Negative sign-up test: user cannot register with wrong data."}
    },
    
    async ({ page }) => {

        

    })


