import { test, expect, Locator } from '@playwright/test';
import { getUserCredentials, login, logout } from '../auth/utils';
import * as LOCATORS from './xlocators'; 
import { da } from '@faker-js/faker';

    test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect (page).toHaveURL('https://demo.learnwebdriverio.com/');
    await expect(page.locator('h1:has-text("conduit")')).toBeVisible();
    })


    var articlesDataSets: string[][] = [
        ["Title1","Description1","Text1","Tag1"],
        ["Title2","Description2","Text2","Tag2"],
        ["Title3","Description3","Text3","Tag3"]
    ];
    
    test('ARTICLE-S-001   Positive: Sign In and create articles', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "Check the create flow: User creates new Articles with valid data"}
    },
    async ({ page }) => {
        
        const authData: Map<string, string> = getUserCredentials();
        var username = authData.get('username')
        
        await login(page);

       for (const dataSet of articlesDataSets) {

            await page.locator(LOCATORS.newArticleLink).click();
            await page.locator(LOCATORS.newArticleLink).click();

            await page.locator(LOCATORS.articleTitle).click();
            await page.locator(LOCATORS.articleTitle).fill(dataSet[0]);

            await page.locator(LOCATORS.articleDescription).click();
            await page.locator(LOCATORS.articleDescription).fill(dataSet[1]);

            await page.locator(LOCATORS.articleText).click();
            await page.locator(LOCATORS.articleText).fill(dataSet[2]);

            await page.locator(LOCATORS.articleTags).click();
            await page.locator(LOCATORS.articleTags).fill(dataSet[3]);

            await page.locator(LOCATORS.articlePublishButton).click();
            await expect(page.locator(LOCATORS.articleBody)).toHaveText(dataSet[2]);

            await page.locator(LOCATORS.homeLink).click();



       }

        //await logout(page);

        
    })