import { test, expect, Page, Locator } from '@playwright/test';
import * as locators from '../xlocators';
import { StudentInnerAddr } from './entities/StudentInnerAddr';  

test.beforeEach ('Open Site', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect (page).toHaveURL('https://demoqa.com/automation-practice-form');
    await expect(page.locator(locators.xPracticeFormHeader)).toBeVisible();
    })


const student1 = new StudentInnerAddr( 1, "John Doe", "test1@test.com", "Male", "0123456", "22 Dec 2001", "Subject1", "Sports", {currentAddress:"Address1", state:"State1", city:"City1"} )
const student2 = new StudentInnerAddr( 2, "Pedro Pascal", "test2@test.com", "Female", "0123456", "25 Nov 2010", "Subject2", "Music", {currentAddress:"Address2", state:"State2", city:"City2"})
const student3 = new StudentInnerAddr( 3, "Nicolas Cage", "test3@test.com", "Other", "0123456", "12 Sep 2011", "Subject3", "Reading", {currentAddress:"Address2", state:"State2", city:"City2"})

const dataSet: StudentInnerAddr[] = [student1, student2, student3]


for (const obj of dataSet) {

    test(`PF-00${obj.id} param`, async ({ page }) => {
            
                await page.getByPlaceholder("First Name").scrollIntoViewIfNeeded();
                await page.getByPlaceholder("First Name").fill(obj.name);
                await page.getByPlaceholder("First Name").fill(obj.name);
    
     })

}


