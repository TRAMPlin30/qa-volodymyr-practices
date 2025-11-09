import { test, expect } from '@playwright/test';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('url');
    await expect (page).toHaveURL('url');
    await expect(page.locator('some locator')).toBeVisible();
    })


    test('ID   Some: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {
        

        
    })



/*
    const objectTest = [{param1: "data", param2: "data"}, //object1
                        {param1: "data", param2: "data"}, //object2
                        {param1: "data", param2: "data"}] //object3

    test.each(objectTest)('ID   Some: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ param1,  param2}) => {
        

        
    })
*/