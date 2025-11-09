import { test, expect, Page, Locator } from '@playwright/test';
import * as locators from '../xlocators';
import { Student } from './entities/Student'; 
import { getGenderXPath, getHobbiesXPath } from './utils' 

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect (page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page.locator(locators.xPracticeFormHeader)).toBeVisible();
    })


const student1 = new Student( 1, "John", "Doe", "test@test.com", "Male", "1254872588", "22 Dec 2001", "English", "Sports", "Address1", "Uttar Pradesh", "Agra" )
const student2 = new Student( 2, "Pedro", "Pascal", "test@test.com", "Female", "1254872588", "25 Nov 2010", "English", "Reading", "Address2", "NCR", "Noida" )
const student3 = new Student( 3, "Nicolas", "Cage", "test@test.com", "Other", "1254872588", "29 Dec 2015", "English", "Music", "Address3", "Haryana", "Panipat" )

const dataSet: Student[] = [student1, student2, student3]


for (const obj of dataSet) {

    test(`PF-00${obj.id} param`, async ({ page }) => {
            
                await page.locator("//button[@id='submit']").scrollIntoViewIfNeeded();
                await page.getByPlaceholder("First Name").fill(obj.firstName);
                await page.getByPlaceholder("Last Name").fill(obj.lastName);
                await page.getByPlaceholder("name@example.com").fill(obj.email);
                await page.locator(getGenderXPath(obj.gender)).click();
                await page.getByPlaceholder("Mobile Number").fill(obj.mobile);
                await page.locator("//input[@id='dateOfBirthInput']").fill(obj.birthDate);
                await page.keyboard.press('Enter');
                await page.locator("//input[@id='subjectsInput']").fill(obj.subjects);
                await page.keyboard.press('Enter');
                
                await page.locator(getHobbiesXPath(obj.hobbies)).check();
                await page.getByPlaceholder("Current Address").fill(obj.address);
                //State selection
                await page.locator("//div[@id='state']").click();
                await page.waitForSelector('.css-26l3qy-menu'); 
                await page.locator(`//div[contains(text(), '${obj.state}')]`).click();
                //City selection
                await page.locator("//div[@id='city']").click();
                await page.waitForSelector('.css-26l3qy-menu'); 
                await page.locator(`//div[contains(text(), '${obj.city}')]`).click();

                await page.getByRole('button', { name: 'Submit' }).click();


                //Modal Window data check
                await expect.soft(page.locator("//td[text()='Student Name']/following-sibling::td")).toHaveText(`${obj.firstName} ${obj.lastName}`);
                await expect.soft(page.locator("//td[text()='Student Email']/following-sibling::td")).toHaveText(`${obj.email}`);
                await expect.soft(page.locator("//td[text()='Gender']/following-sibling::td")).toHaveText(`${obj.gender}`);
                await expect.soft(page.locator("//td[text()='Mobile']/following-sibling::td")).toHaveText(`${obj.mobile}`);
                //await expect.soft(page.locator("//td[text()='Date of Birth']/following-sibling::td")).toHaveText(`${obj.birthDate}`);
                await expect.soft(page.locator("//td[text()='Subjects']/following-sibling::td")).toHaveText(`${obj.subjects}`);
                await expect.soft(page.locator("//td[text()='Hobbies']/following-sibling::td")).toHaveText(`${obj.hobbies}`);
                //await expect.soft(page.locator("//td[text()='Picture']/following-sibling::td")).toHaveText(`${obj.pictures}`);
                await expect.soft(page.locator("//td[text()='Address']/following-sibling::td")).toHaveText(`${obj.address}`);
                await expect.soft(page.locator("//td[text()='State and City']/following-sibling::td")).toHaveText(`${obj.state} ${obj.city}`);


     })
}


