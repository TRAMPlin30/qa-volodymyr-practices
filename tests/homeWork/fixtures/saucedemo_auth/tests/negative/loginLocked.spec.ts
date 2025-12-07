import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('ID 1_User', {tag: ["@negative"], annotation: {type: "description", description: " userNUm = '1' -locked_out_user login test "}},
        
    async ({page}) => {
        
        const loginPage = new LoginPage(page);
                
        const url: string = "https://www.saucedemo.com/"
            await page.goto(url);
            await expect (page).toHaveURL(url);
            await expect(page.getByText("Swag Labs")).toBeVisible();
            
            const users: string[] = await loginPage.getUsers();
            await loginPage.login(users.at(1)!, await loginPage.getPassword())
        var errorMessage = "//h3[text()='Epic sadface: Sorry, this user has been locked out.']";
        await expect(page.locator(errorMessage)).toBeVisible();
        
        
    })