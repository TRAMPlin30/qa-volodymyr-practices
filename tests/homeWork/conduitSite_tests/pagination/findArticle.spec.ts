import { test, expect, Locator } from '@playwright/test';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
    })

    

    test('ID   Some: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        var elementToFind: string = "ascit acervus contra"; 
        var pagination: number = (await page.locator("//ul[@class='pagination']").all()).length;

        let found = false;

        for (let i = 1; i <= pagination; i++) {
            await page.locator(`[data-test="page-link-${i}"]`).getByRole("link", {name: `${i}`}).click();
            
            
                await expect.soft (page.getByRole("link", {name: elementToFind})).toBeVisible();
            
            
        }
        

        
    })