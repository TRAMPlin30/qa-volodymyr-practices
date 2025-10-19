//використовуючи ЛИШЕ Xpath 

import { test, expect, Locator } from '@playwright/test';
import * as locators from './xlocators';

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await expect (page).toHaveURL('https://demoqa.com/text-box');
    await expect(page.locator(locators.xPathHeaderTextBox)).toBeVisible();
    })

    const dataSet: string[] = ['John Doe', 'example@test.com', 'Figueroa Street 111', 'Figueroa Street 222'];

    test('DEMOQA-TEXTBOX-001   Positive: Valid data in all fields', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(locators.xFullNameField).fill(dataSet[0]);
        await page.locator(locators.xEmailField).fill(dataSet[1]);
        await page.locator(locators.xCurrentAddress).fill(dataSet[2]);
        await page.locator(locators.xPermanentAddress).fill(dataSet[3]);
        await page.locator(locators.xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(locators.xSubmitButton).click();

        let outPutValues: string = ((await page.locator(locators.xOutputBlock).allTextContents()))[0];
        
        for (var expected of dataSet) {
            expect(outPutValues.includes(expected));

            console.log(outPutValues)
            console.log(expected)
        }     
    })


    test('DEMOQA-TEXTBOX-02   Positive: Valid data in all fields', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(locators.xFullNameField).fill(dataSet[0]);
        await page.locator(locators.xEmailField).fill(dataSet[1]);
        await page.locator(locators.xCurrentAddress).fill(dataSet[2]);
        await page.locator(locators.xPermanentAddress).fill(dataSet[3]);
        await page.locator(locators.xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(locators.xSubmitButton).click();

        expect((await page.locator(locators.xFullNameOutput).allTextContents())[0]).toBe("Name:" + dataSet[0])
        expect((await page.locator(locators.xEmailFieldOutput).allTextContents())[0]).toBe("Email:" + dataSet[1])
        expect((await page.locator(locators.xCurrentAddressOutput).allTextContents())[0]).toBe("Current Address :" + dataSet[2] + " ")
        expect((await page.locator(locators.xPermanentAddressOutput).allTextContents())[0]).toBe("Permananet Address :" + dataSet[3])

    })


test('DEMOQA-TEXTBOX-03   Positive: detecting text overflow', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(locators.xFullNameField).fill(dataSet[0]);
        await page.locator(locators.xEmailField).fill(dataSet[1]);
        await page.locator(locators.xCurrentAddress).fill(dataSet[2]);
        await page.locator(locators.xPermanentAddress).fill("erererrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        await page.locator(locators.xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(locators.xSubmitButton).click();

        //scrollWidth — это «реальная ширина контента внутри текстбокса». возвращает number.
        //clientWidth — это «видимая внутренняя ширина» текстбокса. возвращает number.
        const box = page.locator(locators.xOutputContainer);
           
        const hasOverflowX = await box.evaluate(box => box.scrollWidth > box.clientWidth);
        
        //expect(hasOverflowX).toBeTruthy(); 
        expect(hasOverflowX).toBeFalsy();
    
    })