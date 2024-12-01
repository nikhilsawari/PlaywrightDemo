import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'

test('drag and drop ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

   await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

//    await page.locator('#draggable').dragTo(page.locator('#droppable'));

page.locator('#draggable').hover();
page.mouse.down();
page.locator('#droppable').hover();
page.mouse.up();


   await page.waitForTimeout(5000);
})