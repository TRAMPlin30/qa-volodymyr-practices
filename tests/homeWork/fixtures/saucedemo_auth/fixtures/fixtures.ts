import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { NavBarPage } from '../pages/NavBarPage'


type MyFixtures  = { loginPage: LoginPage, nuvBarPage: NavBarPage, login: (userNum: number) => Promise<void>, setupApp: void, logOut: void } 


export const my_test = test.extend<MyFixtures>({

    setupApp: [async({page}, use) => {console.log("fixture: before tests")
            const url: string = "https://www.saucedemo.com/"
            await page.goto(url);
            await expect (page).toHaveURL(url);
            await expect(page.getByText("Swag Labs")).toBeVisible();
            await use();},
            {auto: true}],

//--------------------------------------
    
    login: async({page}, use) => {console.log("fixture: login")
        await use(async (userNum: number) => {
            const loginPage = new LoginPage(page);
            const users: string[] = await loginPage.getUsers();
            await loginPage.login(users.at(userNum)!, await loginPage.getPassword())
            
        })},
    
     
    loginPage: async ({page}, use) => {console.log("fixture: LoginPage created")
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

     nuvBarPage: async ({page}, use) => {console.log("fixture: LoginPage created")
        const nuvBarPage = new NavBarPage(page);
        await use(nuvBarPage);
    },


//--------------------------------------


    logOut: [async({page}, use) => {console.log("fixture: after tests logout")
        await use();
        const navBarPage = new NavBarPage(page);
        await navBarPage.openBurgerMenu();
        await navBarPage.logoutLink_click();
        },{auto: true}],

})
