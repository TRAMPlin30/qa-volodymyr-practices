//використовуючи ЛИШЕ Xpath 

import { test, expect, Page, Locator } from '@playwright/test';
import { BlobOptions } from 'buffer';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await expect (page).toHaveURL('https://demoqa.com/checkbox');
    await expect(page.locator(xPathHeader)).toBeVisible();
    })


    const xPathHeader: string = "//h1[text()='Check Box']";

    //Home
    const xNodeHome: string = "//label[@for='tree-node-home']"
    const xCheckBoxHome: string = xNodeHome + "//span[contains(@class,'rct-checkbox')]";
    const xExpandHome: string = xNodeHome + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    const xTreeNodeHome: string = xNodeHome + "/ancestor::li[1]"//to check status: collapsed/expanded 

    //Desktop
    const xNodeDesktop: string = "//label[@for='tree-node-desktop']"
    const xCheckBoxDesktop: string = xNodeDesktop + "//span[contains(@class,'rct-checkbox')]";
    const xExpandDesktop: string = xNodeDesktop + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    const xTreeNodeDesktop: string = xNodeDesktop + "/ancestor::li[1]" //to check status: collapsed/expanded 
                const xNodeNotes: string = "//label[@for='tree-node-notes']";
                const xCheckBoxNotes: string = xNodeNotes + "//span[contains(@class,'rct-checkbox')]"; //click()
                const xNodeCommands: string = "//label[@for='tree-node-commands']";
                const xCheckBoxCommands: string = xNodeCommands + "//span[contains(@class,'rct-checkbox')]"; //click()
                
    //Documents
    const xNodeDocuments: string = "//label[@for='tree-node-documents']"
    const xCheckBoxDocuments: string = xNodeDocuments + "//span[contains(@class,'rct-checkbox')]";
    const xExpandDocuments: string = xNodeDocuments + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    const xTreeNodeDocuments: string = xNodeDocuments + "/ancestor::li[1]"//to check status: collapsed/expanded 
                //WorkSpace
                const xNodeWorkSpace: string = "//label[@for='tree-node-workspace']"
                const xCheckBoxWorkSpace: string = xNodeWorkSpace + "//span[contains(@class,'rct-checkbox')]"; //click()
                const xExpandWorkSpace: string = xNodeWorkSpace + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
                const xTreeNodeWorkSpace: string = xNodeWorkSpace + "/ancestor::li[1]"//to check status: collapsed/expanded 
                        const xNodeReact: string = "//label[@for='tree-node-react']";
                        const xCheckBoxReact: string = xNodeReact + "//span[contains(@class,'rct-checkbox')]"; //click()
                        const xNodeAngular: string = "//label[@for='tree-node-angular']";
                        const xCheckBoxAngular: string = xNodeAngular + "//span[contains(@class,'rct-checkbox')]"; //click()
                        const xNodeVeu: string = "//label[@for='tree-node-veu']";
                        const xCheckBoxVeu: string = xNodeVeu + "//span[contains(@class,'rct-checkbox')]"; //click()
                //Office        
                const xNodeOffice: string = "//label[@for='tree-node-office']"
                const xCheckBoxOffice: string = xNodeOffice + "//span[contains(@class,'rct-checkbox')]"; //click()
                const xExpandOffice: string = xNodeOffice + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
                const xTreeNodeOffice: string = xNodeOffice + "/ancestor::li[1]"//to check status: collapsed/expanded 
                        const xNodePublic: string = "//label[@for='tree-node-public']";
                        const xCheckBoxPublic: string = xNodePublic + "//span[contains(@class,'rct-checkbox')]"; //click()
                        const xNodePrivate: string = "//label[@for='tree-node-private']";
                        const xCheckBoxPrivate: string = xNodePrivate + "//span[contains(@class,'rct-checkbox')]"; //click()
                        const xNodeClassified: string = "//label[@for='tree-node-classified']";
                        const xCheckBoxClassified: string = xNodeClassified + "//span[contains(@class,'rct-checkbox')]"; //click()
                        const xNodeGeneral: string = "//label[@for='tree-node-general']";
                        const xCheckBoxGeneral: string = xNodeGeneral + "//span[contains(@class,'rct-checkbox')]"; //click()

    //Downloads
    const xNodeDownloads: string = "//label[@for='tree-node-downloads']"
    const xCheckBoxDownloads: string = xNodeDownloads + "//span[contains(@class,'rct-checkbox')]";
    const xExpandDownloads: string = xNodeDownloads + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    const xTreeNodeDownloads: string = xNodeDownloads + "/ancestor::li[1]"//to check status: collapsed/expanded 
                const xNodeWordFile: string = "//label[@for='tree-node-wordFile']";
                const xCheckBoxWordFile: string = xNodeWordFile + "//span[contains(@class,'rct-checkbox')]";
                const xNodeExcelFile: string = "//label[@for='tree-node-excelFile']";
                const xCheckBoxExcelFile: string = xNodeExcelFile + "//span[contains(@class,'rct-checkbox')]";


    async function expandAndCheck(page: Page, checkBoxList: Locator[]) {}


    test('ID-1   Positive: text', 
    {
        tag: ["@tag"],
        annotation: {type: "description", description: "description"}
    },
    async ({ page }) => {

        //mark main "Home" CheckBox 
        await page.locator(xCheckBoxHome).click();
        await expect (page.locator(xNodeHome + "//input[@id='tree-node-home']")).toBeChecked();

        //expand "Home"
        await expect (page.locator(xTreeNodeHome)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(xExpandHome).click();
        await expect (page.locator(xTreeNodeHome)).toHaveClass("rct-node rct-node-parent rct-node-expanded");

        //expand "Desktop"
        await expect (page.locator(xTreeNodeDesktop)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(xExpandDesktop).click();
        await expect (page.locator(xTreeNodeDesktop)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect (page.locator(xNodeDesktop + "//input[@id='tree-node-desktop']")).toBeChecked();
            await expect (page.locator(xNodeNotes + "//input[@id='tree-node-notes']")).toBeChecked();
            await expect (page.locator(xNodeCommands + "//input[@id='tree-node-commands']")).toBeChecked();

        //expand "Documents"
        expect (page.locator(xTreeNodeDocuments)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(xExpandDocuments).click();
        await expect (page.locator(xTreeNodeDocuments)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect(page.locator(xNodeDocuments + "//input[@id='tree-node-documents']")).toBeChecked();
            //expand "WorkSpace"
            await expect (page.locator(xTreeNodeWorkSpace)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
            await page.locator(xExpandWorkSpace).click();
            await expect (page.locator(xTreeNodeWorkSpace)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
            await expect(page.locator(xNodeWorkSpace + "//input[@id='tree-node-workspace']")).toBeChecked();
                await expect(page.locator(xNodeReact + "//input[@id='tree-node-react']")).toBeChecked();
                await expect(page.locator(xNodeAngular + "//input[@id='tree-node-angular']")).toBeChecked();
                await expect(page.locator(xNodeVeu + "//input[@id='tree-node-veu']")).toBeChecked();

            //expand "Office"
            await expect (page.locator(xTreeNodeOffice)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
            await page.locator(xExpandOffice).click();
            await expect (page.locator(xTreeNodeOffice)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
            await expect(page.locator(xNodeOffice + "//input[@id='tree-node-office']")).toBeChecked();
                await expect(page.locator(xNodePublic + "//input[@id='tree-node-public']")).toBeChecked();
                await expect(page.locator(xNodePrivate + "//input[@id='tree-node-private']")).toBeChecked();
                await expect(page.locator(xNodeClassified + "//input[@id='tree-node-classified']")).toBeChecked();
                await expect(page.locator(xNodeGeneral + "//input[@id='tree-node-general']")).toBeChecked();

        //expand "Downloads"
        await expect (page.locator(xTreeNodeDownloads)).toHaveClass("rct-node rct-node-parent rct-node-collapsed");
        await page.locator(xExpandDownloads).click();
        await expect (page.locator(xTreeNodeDownloads)).toHaveClass("rct-node rct-node-parent rct-node-expanded");
        await expect(page.locator(xNodeDownloads + "//input[@id='tree-node-downloads']")).toBeChecked();
            await expect (page.locator(xNodeWordFile + "//input[@id='tree-node-wordFile']")).toBeChecked();
            await expect (page.locator(xNodeExcelFile + "//input[@id='tree-node-excelFile']")).toBeChecked();
        
    })