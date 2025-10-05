import { test, expect, Locator, ElementHandle } from '@playwright/test';

//https://playwright.dev/
//https://playwright.dev/docs/intro --click GET STARTED 

test.beforeEach(async({page}) => {
    await page.goto('https://playwright.dev/');
    await page.locator('[class="getStarted_Sjon"]').click();
    await expect (page).toHaveURL('https://playwright.dev/docs/intro');
    await expect(page.locator('header:has-text("Installation")')).toBeVisible();
})



test('NODE-0001 Search', 
    {
        tag: ["@positive"],
        annotation: {type: "description", description: "should perform search correctly"}
    },
    
    async ({ page }) => {

        const searchValue: string = "Fixtures";
        
        await page.locator('span.DocSearch-Button-Placeholder:has-text("Search")').click(); //click Search by element.class:text
        await expect (page.locator('div.DocSearch-Modal')).toBeVisible();  //check if modal window is presented
        await page.locator('#docsearch-input').click(); // search field in the modal window by input id
        await page.locator('#docsearch-input').fill(searchValue);
        await page.locator('a:has-text("See all")').scrollIntoViewIfNeeded();
        await page.locator('a:has-text("See all")').click();

        await page.locator('h1:has-text("Search results for ")').click();
        var fetching_new_results: Locator = page.locator('div.loader_vvXV');
        while (true) {
            try {
                await fetching_new_results.waitFor({ state: 'attached', timeout: 5000 })
                await page.keyboard.press('ArrowDown');
            } catch (e) {
                console.error('The list has been fully loaded: ', (e as Error).message);
                break;
            }
        }
        

        var main = page.locator('main');
        var listOfArticles: Locator[] = await main.locator('article').all();
        
        for (var article of listOfArticles) {
            var highlightedValue: string = await article.locator('span.search-result-match').first().innerText();
            expect.soft(highlightedValue.toLocaleLowerCase()).toContain(searchValue.toLocaleLowerCase().slice(0,7));
            console.log(highlightedValue);
        }
});