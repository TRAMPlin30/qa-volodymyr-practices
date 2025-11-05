
//https://www.npmjs.com/package/@faker-js/faker
//https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript

import { Page } from '@playwright/test'; 
import { faker } from '@faker-js/faker';  
import { readFileSync, writeFileSync } from "fs";  //module Node.js File System


const credentialsFilePath = "tests/homeWork/conduitSite_tests/auth/login-user.json";


export function getUserCredentials(): Map<string, string> {
    const rawData = readFileSync(credentialsFilePath);
    const jsonData = JSON.parse(rawData.toString());
    var username: string = jsonData.username as string;
    var email: string = jsonData.email as string;
    var password: string = jsonData.password as string
    return new Map<string, string> ([
        ["username", username],
        ["email", email], 
        ["password", password]
    ]) 
}


export function generateUserCredentials() {
    var username: string = faker.internet.username().slice(0, 4).toLocaleLowerCase();
    var email: string = faker.internet.email().toLocaleLowerCase(); 
    var password: string = faker.internet.password();
    var data = { username: username, email: email, password: password}
    var jsonData = JSON.stringify(data, null, 2); // Pretty-print //сериализация
    writeFileSync(credentialsFilePath, jsonData);
    
}

export async function login(page: Page) {
        const authData: Map<string, string> = getUserCredentials();
        await page.locator('a.nav-link[href="/login"]').click();
        await page.getByPlaceholder('Email').fill(authData.get('email')!);
        await page.getByPlaceholder('Password').fill(authData.get('password')!);
        await page.locator('button:has-text("Sign in")').click();

}



export async function logout(page: Page) {
        await page.locator('a.nav-link[href="/settings"]').click();
        await page.locator('button.btn.btn-outline-danger').scrollIntoViewIfNeeded();
        await page.locator('button.btn.btn-outline-danger').click();

}
 