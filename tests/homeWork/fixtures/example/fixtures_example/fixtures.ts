

import { test } from '@playwright/test'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'

// const my_test = test.extend({ объект })  //расширяеться объектами


type MyFixtures  = { signInPage: SignInPage, signUpPage: SignUpPage, beforeTextures: void } 


export const my_test = test.extend<MyFixtures>({
    //lazy loading - при таком синтаксисе будет загружать только при вызове
    //фикстура одной страници - обычная асинх стрелочная функция которая возвращает объект страницы что б использовать ешо в тестах потом
    signInPage: async ({page}, use) => {               
        const signInPage = new SignInPage(page);
        await use(signInPage);    //use это типа как return()
        console.log("fixture 1")
    },

    //lazy loading - при таком синтаксисе будет загружать только при вызове
    //фикстура другой страници - обычная асинх стрелочная функция которая возвращает объект страницы что б использовать ешо в тестах потом
    signUpPage: async ({page}, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
        console.log("fixture 2")
    },


    //притаком синтаксисе фикстура будет выполнена автоматически
    beforeTextures: [async({signInPage}, use) => { //передаем предидущую фикстуру что б был объект signInPage
        console.log("fixture before Each")
        await signInPage.goto();
        await use();
        

    }, {auto: true}]

})




