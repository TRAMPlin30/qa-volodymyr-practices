import { test, expect, Page, Locator } from '@playwright/test';
import * as locators from '../xlocators';
import { StudentNestedObjects } from './entities/StudentNestedObjects';
import { getGenderXPath, getHobbiesXPath } from './utils'   

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect (page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page.locator(locators.xPracticeFormHeader)).toBeVisible();
    })


const student1 = new StudentNestedObjects( 1, "John", "Doe", "test1@test.com", "Male", "0123456789", "22 Dec 2001",
                                     ["English", "Chemistry","Arts"], "Sports",
                                     {currentAddress:"Address1", state:"Uttar Pradesh", city:"Agra"} )

const student2 = new StudentNestedObjects( 2, "Pedro", "Doe", "test1@test.com", "Male", "0123456789", "22 Dec 2001",
                                     ["English", "Chemistry","Arts"], 
                                     "Sports",
                                     {currentAddress:"Address1", state:"NCR", city:"Noida"} )

const student3 = new StudentNestedObjects( 3, "Nicolas", "Doe", "test1@test.com", "Male", "0123456789", "22 Dec 2001",
                                     ["English", "Chemistry","Arts"], 
                                     "Sports",
                                     {currentAddress:"Address1", state:"Haryana", city:"Panipat"} )


const dataSet: StudentNestedObjects[] = [student1, student2, student3]


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

                for (const subject of obj.subjects) {
                    await page.locator("//input[@id='subjectsInput']").fill(subject);
                    await page.keyboard.press('Enter');
                }

                await page.locator(getHobbiesXPath(obj.hobbies)).check();
                
                
                    //Current address selection
                    await page.getByPlaceholder("Current Address").fill(obj.address.currentAddress);
                    //State selection
                    await page.locator("//div[@id='state']").click();
                    await page.waitForSelector('.css-26l3qy-menu'); 
                    await page.locator(`//div[contains(text(), '${obj.address.state}')]`).click();
                    //City selection
                    await page.locator("//div[@id='city']").click();
                    await page.waitForSelector('.css-26l3qy-menu'); 
                    await page.locator(`//div[contains(text(), '${obj.address.city}')]`).click();

                await page.getByRole('button', { name: 'Submit' }).click();


                //Modal Window data check
                await expect.soft(page.locator("//td[text()='Student Name']/following-sibling::td")).toHaveText(`${obj.firstName} ${obj.lastName}`);
                await expect.soft(page.locator("//td[text()='Student Email']/following-sibling::td")).toHaveText(`${obj.email}`);
                await expect.soft(page.locator("//td[text()='Gender']/following-sibling::td")).toHaveText(`${obj.gender}`);
                await expect.soft(page.locator("//td[text()='Mobile']/following-sibling::td")).toHaveText(`${obj.mobile}`);
                //await expect.soft(page.locator("//td[text()='Date of Birth']/following-sibling::td")).toHaveText(`${obj.birthDate}`);
                //await expect.soft(page.locator("//td[text()='Subjects']/following-sibling::td")).toHaveText(`${obj.subjects}`);
                await expect.soft(page.locator("//td[text()='Hobbies']/following-sibling::td")).toHaveText(`${obj.hobbies}`);
                //await expect.soft(page.locator("//td[text()='Picture']/following-sibling::td")).toHaveText(`${obj.pictures}`);
                await expect.soft(page.locator("//td[text()='Address']/following-sibling::td")).toHaveText(`${obj.address.currentAddress}`);
                await expect.soft(page.locator("//td[text()='State and City']/following-sibling::td")).toHaveText(`${obj.address.state} ${obj.address.city}`);



     })
}




