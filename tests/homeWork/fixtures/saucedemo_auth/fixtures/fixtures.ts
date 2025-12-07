import { test, expect } from '@playwright/test'
import { SignInPage } from '../../example/fixtures_example/SignInPage'
import { SignUpPage } from '../../example/fixtures_example/SignUpPage'


type MyFixtures  = { signInPage: SignInPage, signUpPage: SignUpPage, before: void, after: void } 


export const my_test = test.extend<MyFixtures>({


    before: [async({page}, use) => {console.log("fixture before tests")

        const url: string = "https://www.saucedemo.com/"

        await page.goto(url);
        await expect (page).toHaveURL(url);
        await expect(page.getByText("Swag Labs")).toBeVisible();
        await use(); 
        }, {auto: true},],
    



//--------------------------------------
//--------------------------------------





    after: [async({}, use) => {console.log("fixture after tests")
            await use();
            }, {auto: true},],

})
