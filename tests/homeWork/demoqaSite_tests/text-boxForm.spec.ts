//використовуючи ЛИШЕ Xpath 

import { test, expect, Locator } from '@playwright/test';

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await expect (page).toHaveURL('https://demoqa.com/text-box');
    await expect(page.locator(xPathHeader)).toBeVisible();
    })

    const dataSet: string[] = ['John Doe', 'example@test.com', 'Figueroa Street 111', 'Figueroa Street 222'];

    const xPathHeader: string = "//h1[text()='Text Box']";
    const xFullNameField: string = "//input[@id='userName']";
    const xEmailField: string = "//input[@id='userEmail']";
    const xCurrentAddress: string = "//textarea[@id='currentAddress']";
    const xPermanentAddress: string = "//textarea[@id='permanentAddress']";
    const xSubmitButton: string = "//button[@id='submit']";

    var xOutputBlock: string = "//div[@id='output']";
    const xOutputContainer: string =  "//div[@id='output']/div[@class='border col-md-12 col-sm-12']"

    const xFullNameOutput: string = "//p[@id='name']";
    const xEmailFieldOutput: string = "//p[@id='email']";
    const xCurrentAddressOutput: string = "//p[@id='currentAddress']";
    const xPermanentAddressOutput: string = "//p[@id='permanentAddress']";


    

    test('APEX-01   Positive: Valid data in all fields', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(xFullNameField).fill(dataSet[0]);
        await page.locator(xEmailField).fill(dataSet[1]);
        await page.locator(xCurrentAddress).fill(dataSet[2]);
        await page.locator(xPermanentAddress).fill(dataSet[3]);
        await page.locator(xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(xSubmitButton).click();

        let outPutValues: string = ((await page.locator(xOutputBlock).allTextContents()))[0];
        
        for (var expected of dataSet) {
            expect(outPutValues.includes(expected));

            console.log(outPutValues)
            console.log(expected)
        }     
    })


    test('APEX-02   Positive: Valid data in all fields', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(xFullNameField).fill(dataSet[0]);
        await page.locator(xEmailField).fill(dataSet[1]);
        await page.locator(xCurrentAddress).fill(dataSet[2]);
        await page.locator(xPermanentAddress).fill(dataSet[3]);
        await page.locator(xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(xSubmitButton).click();

        expect((await page.locator(xFullNameOutput).allTextContents())[0]).toBe("Name:" + dataSet[0])
        expect((await page.locator(xEmailFieldOutput).allTextContents())[0]).toBe("Email:" + dataSet[1])
        expect((await page.locator(xCurrentAddressOutput).allTextContents())[0]).toBe("Current Address :" + dataSet[2] + " ")
        expect((await page.locator(xPermanentAddressOutput).allTextContents())[0]).toBe("Permananet Address :" + dataSet[3])

    })


test('APEX-03   Positive: detecting text overflow', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        await page.locator(xFullNameField).fill(dataSet[0]);
        await page.locator(xEmailField).fill(dataSet[1]);
        await page.locator(xCurrentAddress).fill(dataSet[2]);
        await page.locator(xPermanentAddress).fill("erererrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        await page.locator(xSubmitButton).scrollIntoViewIfNeeded();
        await page.locator(xSubmitButton).click();

        //scrollWidth — это «реальная ширина контента внутри текстбокса». возвращает number.
        //clientWidth — это «видимая внутренняя ширина» текстбокса. возвращает number.
        const box = page.locator(xOutputContainer);
           
        const hasOverflowX = await box.evaluate(box => box.scrollWidth > box.clientWidth);
        
        //expect(hasOverflowX).toBeTruthy(); 
        expect(hasOverflowX).toBeFalsy();
    
    })