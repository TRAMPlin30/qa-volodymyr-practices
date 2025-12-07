

import { test } from '@playwright/test'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'

// const my_test = test.extend({ объект })  //расширяеться объектами


type MyFixtures  = { signInPage: SignInPage, signUpPage: SignUpPage } 


export const my_test = test.extend<MyFixtures>({
    
    //фикстура одной страници - обычная асинх ыункция которая возвращает объект страницы что б использовать ешо в тестах потом
    signInPage: async ({page}, use) => {               
        const signInPage = new SignInPage(page);
        await use(signInPage);
    },

    //фикстура другой страници - обычная асинх ыункция которая возвращает объект страницы что б использовать ешо в тестах потом
    signUpPage: async ({page}, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    }

})
