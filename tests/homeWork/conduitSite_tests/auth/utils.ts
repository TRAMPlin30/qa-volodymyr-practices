
//https://www.npmjs.com/package/@faker-js/faker
//https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript

import { faker } from '@faker-js/faker';  
import { readFileSync, writeFileSync } from "fs";  //module Node.js File System


const filePath = "tests/homeWork/conduitSite_tests/auth/auth-data.json";


export function getAuthData(): Map<string, string> {
    const rawData = readFileSync(filePath);
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


 export function generateAuthData() {
    var username: string = faker.internet.username();
    var email: string = faker.internet.email(); 
    var password: string = faker.internet.password();
    var data = { username: username, email: email, password: password}
    var jsonData = JSON.stringify(data, null, 2); // Pretty-print //сериализация
    writeFileSync(filePath, jsonData);
    
 }