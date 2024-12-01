import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import { log } from 'console';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

  test('Single File Upload ', async()=>{
   const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
   const page:Page = await browser.newPage();

  await page.goto("https://tus.io/demo");

  //single
  await page.locator('input#P0-0').setInputFiles(["C:/Study/StudyMaterial/interview_poblem.txt"]);
  
  //multiple
  // await page.locator('input#P0-0').setInputFiles([
  //   "C:/Study/StudyMaterial/interview_poblem.txt",
  //   "C:/Study/StudyMaterial/interview_poblem.txt",
  //   "C:/Study/StudyMaterial/interview_poblem.txt"
  // ]);
  
  // await page.waitForTimeout(5000);
  // await page.locator('input#P0-0').setInputFiles([]);    //clears selected file

  //buffer new file
  await page.locator('input#P0-0').setInputFiles({
    name: 'nikhil_doc.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test text')
  });
  await page.locator('input#P0-0').setInputFiles([]);     //clears selected file

  


})