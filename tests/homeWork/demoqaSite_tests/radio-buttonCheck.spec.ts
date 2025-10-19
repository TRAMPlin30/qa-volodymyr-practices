//використовуючи ЛИШЕ Xpath 

import { test, expect, Page, Locator } from '@playwright/test';
import * as Locators from './xlocators';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await expect (page).toHaveURL('https://demoqa.com/radio-button');
    await expect(page.locator(Locators.xPathHeaderRadioButton)).toBeVisible();
    })


    const xYesRadioButton: string = "//input[@id='yesRadio']";
    const xImpressiveRadioButton: string = "//input[@id='impressiveRadio']";
    const xNoRadioButton: string = "//input[@id='noRadio']";


    async function isRadioAvailable(page: Page, xPathRadio: string): Promise<string> {
        
        const radio: Locator = page.locator(xPathRadio);
        const status: boolean = await radio.isDisabled();

        if (status == true) {
            console.log("disabled");
            return "disabled";

        } else {
            console.log("enabled");
            return  "enabled";}
            
        
    } 


    async function getRadioState(page: Page, xPathRadio: string): Promise<string> {
        
        const status: boolean = await page.locator(xPathRadio).isChecked();

        if (status == true) {
            console.log("checked");
            return "checked";

        } else {
            console.log("unchecked");
            return  "unchecked";}
            
        
    } 


    test('ID   Some: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        var radioList: string[] = [xYesRadioButton, xImpressiveRadioButton, xNoRadioButton]

        for (var radio of radioList ) {
            if (await isRadioAvailable(page, radio) == "enabled" && await getRadioState(page, radio) == "unchecked") {

            await page.locator(radio + "/following-sibling::label").click();
            expect(await getRadioState(page, radio)).toBe("checked")

        } else console.log("your radioButton: " + "\'" + (await page.locator(radio + "/following-sibling::label").allTextContents()) + "\'" + " - is not available or already checked !")}
        
    })