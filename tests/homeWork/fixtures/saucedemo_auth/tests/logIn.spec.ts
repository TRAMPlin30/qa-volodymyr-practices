import { expect } from '@playwright/test';
import { my_test } from '../fixtures/fixtures';
  


my_test('ID   Some: text', {tag: ["@tag"], annotation: {type: "description", description: "description"}},
        
    async ({ before, loginPage, after }) => {   
            

        const users = await loginPage.getUsers();
        console.log(users);
        

    })
