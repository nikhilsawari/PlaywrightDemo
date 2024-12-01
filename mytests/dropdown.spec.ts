import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropdown = 'select#Contact_CountryCode';

    await page.selectOption(countryDropdown, {value: 'AF'})

    const allCountries = page.$$(countryDropdown + '> option');

    console.log((await allCountries).length);
    
    for (const c of await allCountries) {
        const text = await c.textContent()
        console.log(text);

        if (text === 'India') {
            await page.selectOption(countryDropdown, {label: text})
        }
    }

    


})