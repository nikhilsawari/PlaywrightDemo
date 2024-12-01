import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('No incognito test', async()=>{
   
    // const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
    
    const browser: BrowserContext = await chromium.launchPersistentContext('', {headless: false, channel: 'chrome'});

    const pages = await browser.pages();
    const page: Page = pages[0];

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    const firstname = page.locator('#input-firstname');
    await firstname.fill("Nikhil");

    // await new Promise(() => {});

})