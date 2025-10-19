//використовуючи ЛИШЕ Xpath 

import { test, expect } from '@playwright/test';
import * as Locators from './xlocators';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await expect (page).toHaveURL('https://demoqa.com/radio-button');
    await expect(page.locator(Locators.xPathHeaderRadioButton)).toBeVisible();
    })


    test('ID   Some: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {
        

        
    })