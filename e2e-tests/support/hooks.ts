const { BeforeAll, After, Status, Before } = require('cucumber');
import * as fs from 'fs';
import { browser } from 'protractor';

Before(async () => {
  await browser.get(browser.baseUrl);
});

After(async function(scenario) {
  browser.waitForAngularEnabled(true);

  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
