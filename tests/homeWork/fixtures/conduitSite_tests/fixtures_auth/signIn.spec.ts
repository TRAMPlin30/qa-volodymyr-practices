
//import { test } from '@playwright/test' // импорт стандартной фикстуры 
import { my_test } from './fixtures' //импорт расширенной фикстуры моей
import { expect } from '@playwright/test';

  
    my_test('ID   Some: text', {tag: ["@tag"], annotation: {type: "description", description: "description"}},
    
    async ({ signInPage, signUpPage }) => {   //фикстуры из файла fixtures.ts
        



        
    })