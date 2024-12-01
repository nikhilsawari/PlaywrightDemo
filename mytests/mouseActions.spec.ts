import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import { webkit, chromium, firefox } from 'playwright'
test('mouse click events', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

    //double click:
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    
    await page.getByText('Double-click Me To See Alert').dblclick();
    await page.getByText('right click me').click({button: 'right'});
    
})