import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeVisible();

    await expect(page.getByRole('radio', { name: 'yes' })).toBeVisible();

    await expect(page.getByRole('checkbox')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();


})