import {test, expect, Browser, Page, Locator, BrowserContext } from "@playwright/test";
import path from "node:path";
import { before, describe } from "node:test";
import { chromium, webkit, firefox } from "playwright";


test('Login page test', async()=>{

    const browser: Browser = await chromium.launch({headless: false});
    const context:BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    const uname = 'admin';
    const passw = 'admin';
    // const authToken = 'Bas ' + btoa(uname+':'+passw);
    await page.setExtraHTTPHeaders({Authorization : createAuthHeader(uname, passw)});
   
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    browser.close();    
});

function createAuthHeader(username: any, password: any)  {
    return 'Basic ' + btoa(username+':'+password);
}