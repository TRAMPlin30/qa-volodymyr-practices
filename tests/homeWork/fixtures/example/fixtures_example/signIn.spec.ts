
//import { test } from '@playwright/test' // импорт стандартной фикстуры 
import { my_test } from './fixtures' //импорт расширенной фикстуры моей
import { expect } from '@playwright/test';

  
    my_test('ID   Some: text', {tag: ["@tag"], annotation: {type: "description", description: "description"}},
    
    async ({ beforeTextures, signInPage, signUpPage }) => {   //фикстуры из файла fixtures.ts (там может быть что угодно: создание объектов, вывод чего-то в консоль, каието методы что угодно)
                                              // и срабатывает это все внутри - достаточно для вызова только передать их как аргументы в async({fix1, fix2, ...})
                                              // все что указано в use() там в фикстуре будет использовано и вызвано !!!
        beforeTextures;
        await signInPage.login("name", "pass");
        await signUpPage.signUp("name1", "pass1");



        
    })