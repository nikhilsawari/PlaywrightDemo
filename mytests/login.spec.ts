import {test, expect, Browser, Page, Locator, BrowserContext } from "@playwright/test";
import { describe } from "node:test";
import { chromium } from "playwright";


test('Login page test', async()=>{
    const browser: Browser = await chromium.launch({headless: false});
    
    //browser1
    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const username1: Locator = page1.locator("#input-email");
    const password1: Locator = page1.locator("#input-password");
    const loginBtn1: Locator = page1.locator("[value='Login']");

    await username1.fill("pwtest1@opencart.com");
    await password1.fill("playwright1@123");
    await loginBtn1.click();

    const pageTitle1 = await page1.title();

    expect(pageTitle1).toBe("Account Login");

    //browser2
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const username2: Locator = page2.locator("#input-email");
    const password2: Locator = page2.locator("#input-password");
    const loginBtn2: Locator = page2.locator("[value='Login']");

    await username2.fill("pwtest2@opencart.com");
    await password2.fill("playwright2@123");
    await loginBtn2.click();

    const pageTitle2 = await page2.title();

    expect(pageTitle2).toBe("Account Login");


    // const registerlink:Locator = page.locator("//*[@id='column-right']/div/a[2]");
    // const first_name = await page.locator("#input-firstname");
    // const last_name = await page.locator("#input-lastname");
    // const email = await page.locator("#input-email");
    // const telephone = await page.locator("#input-telephone");
    // const newPassword = await page.locator("#input-password");
    // const consfirmPassword = await page.locator("#input-confirm");
    // const privecyPolicy = await page.locator("[name='agree']");
    // const continueBtn = await page.locator("[value='Continue']");

    // await registerlink.click();
    // await page.waitForTimeout(30000);
    // await first_name.fill("Nikhil");
    // await last_name.fill("Awari");
    // await email.fill("nik@gmail.com");
    // await telephone.fill("7843837373");
    // await newPassword.fill("password@1234");
    // await consfirmPassword.fill("password@1234");
    // await privecyPolicy.check();
    // await continueBtn.click();

    browser.close();
    // await new Promise(()=>{});      //avoids from browser getting closed
});