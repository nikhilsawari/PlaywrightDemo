import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // locator
    // id
    const firstname: Locator = page.locator('#input-firstname');
    const firstname1: Locator = page.locator('id=input-firstname');

    await firstname.fill("Nikil");
    const firstnameDisplayed = await firstname.isEnabled();
    console.log(firstnameDisplayed);

    //class
    const logo: Locator = page.locator('.img-responsive');
    const logoDisplayed = await logo.isEnabled(); 
    console.log(logoDisplayed);

    //text
    const lastName: Locator = page.locator('text=Register Account');
    const lastNameDisplayed = await lastName.isEnabled();
    console.log(lastNameDisplayed);

    const myAccount: Locator = page.locator('text=My Account');
    const myAccountDisplayed = await lastName.isEnabled();
    console.log(myAccountDisplayed);

    const mp3Players: Locator = page.locator('text=MP3 Players');
    const mp3PlayersDisplayed = await lastName.isEnabled();
    console.log(mp3PlayersDisplayed);

    //CSS
    const search: Locator = page.locator('css=input[name="search"]');
    const password: Locator = page.locator('css=input#input-password');
    const privecyCheckbox: Locator = page.locator('css=input[name="agree"]');

    await search.fill("myself");
    await password.fill("PassWord");
    console.log("privecyCheckbox :", await privecyCheckbox.isChecked());

    //xpath
    const search1: Locator = page.locator('xpath=//*[@id="search"]/input');
    const password1: Locator = page.locator('xpath=//*[@id="input-password"]');
    const privecyCheckbox1: Locator = page.locator('xpath=//*[@id="content"]/form/div/div/input[1]');

    await search1.fill("myself");
    await password1.fill("PassWord");
    console.log("privecyCheckbox :", await privecyCheckbox1.isChecked());

    // await new Promise(() => {})

})