//використовуючи ЛИШЕ Xpath 

import { test, expect, Page, Locator } from '@playwright/test';
import * as locators from './xlocators'; 

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await expect (page).toHaveURL('https://demoqa.com/checkbox');
    await expect(page.locator(locators.xPathHeaderCheckBox)).toBeVisible();
    })


    async function expandAndCheck(page: Page, checkBoxList: Locator[]) {}


    test('DEMOQA-CHECKBOX-001   Positive: Check that all child checkboxes in the tree are selected after checking the main (root) "Home" checkbox.', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "When the 'Home' checkbox is checked, each child and sub-child checkbox below it is marked as checked."}
    },
    async ({ page }) => {

        //mark main "Home" CheckBox 
        await page.locator(locators.xCheckBoxHome).click();
        await expect (page.locator(locators.xNodeHome + "//input[@id='tree-node-home']")).toBeChecked();

        //expand "Home"
        await expect (page.locator(locators.xTreeNodeHome)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(locators.xExpandHome).click();
        await expect (page.locator(locators.xTreeNodeHome)).toHaveClass("rct-node rct-node-parent rct-node-expanded");

        //expand "Desktop"
        await expect (page.locator(locators.xTreeNodeDesktop)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(locators.xExpandDesktop).click();
        await expect (page.locator(locators.xTreeNodeDesktop)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect (page.locator(locators.xNodeDesktop + "//input[@id='tree-node-desktop']")).toBeChecked();
            await expect (page.locator(locators.xNodeNotes + "//input[@id='tree-node-notes']")).toBeChecked();
            await expect (page.locator(locators.xNodeCommands + "//input[@id='tree-node-commands']")).toBeChecked();

        //expand "Documents"
        expect (page.locator(locators.xTreeNodeDocuments)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(locators.xExpandDocuments).click();
        await expect (page.locator(locators.xTreeNodeDocuments)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect(page.locator(locators.xNodeDocuments + "//input[@id='tree-node-documents']")).toBeChecked();
            //expand "WorkSpace"
            await expect (page.locator(locators.xTreeNodeWorkSpace)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
            await page.locator(locators.xExpandWorkSpace).click();
            await expect (page.locator(locators.xTreeNodeWorkSpace)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
            await expect(page.locator(locators.xNodeWorkSpace + "//input[@id='tree-node-workspace']")).toBeChecked();
                await expect(page.locator(locators.xNodeReact + "//input[@id='tree-node-react']")).toBeChecked();
                await expect(page.locator(locators.xNodeAngular + "//input[@id='tree-node-angular']")).toBeChecked();
                await expect(page.locator(locators.xNodeVeu + "//input[@id='tree-node-veu']")).toBeChecked();

            //expand "Office"
            await expect (page.locator(locators.xTreeNodeOffice)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
            await page.locator(locators.xExpandOffice).click();
            await expect (page.locator(locators.xTreeNodeOffice)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
            await expect(page.locator(locators.xNodeOffice + "//input[@id='tree-node-office']")).toBeChecked();
                await expect(page.locator(locators.xNodePublic + "//input[@id='tree-node-public']")).toBeChecked();
                await expect(page.locator(locators.xNodePrivate + "//input[@id='tree-node-private']")).toBeChecked();
                await expect(page.locator(locators.xNodeClassified + "//input[@id='tree-node-classified']")).toBeChecked();
                await expect(page.locator(locators.xNodeGeneral + "//input[@id='tree-node-general']")).toBeChecked();

        //expand "Downloads"
        await expect (page.locator(locators.xTreeNodeDownloads)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(locators.xExpandDownloads).click();
        await expect (page.locator(locators.xTreeNodeDownloads)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect(page.locator(locators.xNodeDownloads + "//input[@id='tree-node-downloads']")).toBeChecked();
            await expect (page.locator(locators.xNodeWordFile + "//input[@id='tree-node-wordFile']")).toBeChecked();
            await expect (page.locator(locators.xNodeExcelFile + "//input[@id='tree-node-excelFile']")).toBeChecked();
        
    })