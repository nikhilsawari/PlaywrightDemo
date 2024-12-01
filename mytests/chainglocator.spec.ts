import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("nikhil"); 

    await page.locator(' form#Form_getForm').getByRole('textbox', {name: 'Email'}).fill('n@gmail.com')

    await page.locator('form#Form_getForm >> #Form_getForm_Name')

    await page.waitForTimeout(4000);
})