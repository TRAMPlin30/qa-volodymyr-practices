import { test, expect, Page, Locator } from '@playwright/test';
import * as locators from '../xlocators';
import { Student } from './entities/Student';  

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect (page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page.locator(locators.xPracticeFormHeader)).toBeVisible();
    })


const student1 = new Student( 1, "John", "Doe", "test@test.com", "Male", "0123456", "22 Dec 2001", "Subject1", "Sports", "Address1", "State1", "City1" )
const student2 = new Student( 2, "Pedro", "Pascal", "test@test.com", "Female", "0123456", "25 Nov 2010", "Subject2", "Music", "Address2", "State2", "City2" )
const student3 = new Student( 3, "Nicolas", "Cage", "test@test.com", "Female", "0123456", "25 Nov 2010", "Subject2", "Music", "Address2", "State2", "City2" )

const dataSet: Student[] = [student1, student2, student3]


for (const obj of dataSet) {

    test(`PF-00${obj.id} param`, async ({ page }) => {
            
                await page.getByPlaceholder("First Name").scrollIntoViewIfNeeded();
                await page.getByPlaceholder("First Name").fill(obj.firstName);
                await page.getByPlaceholder("Last Name").fill(obj.lastName);

    
     })

}


