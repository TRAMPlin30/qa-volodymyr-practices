import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


type MyFixtures  = { loginPage: LoginPage, before: void, after: void } 


export const my_test = test.extend<MyFixtures>({


    //login
    before: [async({page}, use) => {console.log("fixture before tests")

        const url: string = "https://www.saucedemo.com/"

        await page.goto(url);
        await expect (page).toHaveURL(url);
        await expect(page.getByText("Swag Labs")).toBeVisible();
        await use(); 
        }, {auto: true},],
    


//--------pages------------------------------

    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
        console.log("loginPage created in Fixture")
    },

//-------------------------------------------



    //logout
    after: [async({}, use) => {console.log("fixture after tests")
            await use();
            }, {auto: true},],

})
