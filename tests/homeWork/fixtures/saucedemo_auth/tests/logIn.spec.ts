import { expect } from '@playwright/test';
import { my_test } from '../fixtures/fixtures';
  


my_test('ID 0_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '0' -standard_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(0);
        logOut;
        
    })


my_test('ID 1_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '1' -locked_out_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(1);
        logOut;
        
        
    })

my_test('ID 2_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '2' -problem_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(2);
        logOut;
        
        
    })

my_test('ID 3_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '3' -performance_glitch_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(3);
        logOut;
        
        
    })

my_test('ID 4_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '4' -error_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(4);
        logOut;
        
        
    })

my_test('ID 5_User', {tag: ["@positive"], annotation: {type: "description", description: " userNUm = '5' -visual_user login test "}},
        
    async ({ login, logOut }) => {   
                
        await login(5);
        logOut;
        
        
    })    
