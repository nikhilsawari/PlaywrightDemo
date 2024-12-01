import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'
                                                        //by default the timeout is 30s in playwright
test.use({actionTimeout: 10000 })                       //set 10s to all actions

test('Focus Element Test 1', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
   page.setDefaultTimeout(2000)                         //change default timeout from 30s

    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    const fullName = page.locator('#Form_getForm_Name');
    fullName.check({timeout: 15000});                   //set time out for perticular step
});

test('Focus Element Test 2', async()=>{
    const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
 
     await page.goto("https://www.orangehrm.com/30-day-free-trial/");
 
     const fullName = page.locator('#Form_getForm_Name');
 })