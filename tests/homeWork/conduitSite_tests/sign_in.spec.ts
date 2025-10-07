import { test, expect, Locator } from '@playwright/test';


test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
})



test('CON_IN-001   Sign In to Conduit Site with valid data', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Check the sign-in flow: correct email + password → login succeeds"}
    },
    
    async ({ page }) => {
        await page.locator('a.nav-link[href="/login"]').click()

        

    })



    test('CON_IN-002   Sign In to Conduit Site with invalid data', 
    {
        tag: ["@negative"],
        annotation: {type: "description", description: "Negative sign-in: user cannot log in with wrong or missing data."}
    },
    
    async ({ page }) => {

        

    })