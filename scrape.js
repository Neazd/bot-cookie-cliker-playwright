// scrape.js
const { chromium, firefox, webkit } = require('playwright');
const config = require('./playwright.config.js');

(async () => {
    // Select the browser based on configuration
    const browserType = config.browser === 'firefox' ? firefox : config.browser === 'webkit' ? webkit : chromium;

    // Launch the browser with specified launch options
    const browser = await browserType.launch(config.launchOptions);
    const context = await browser.newContext(config.contextOptions);
    const page = await context.newPage();

    // Navigate to the base URL
    await page.goto(config.baseURL);

    // Perform actions on the page
    await page.screenshot({ path: 'screenshot.png' });

    // Close the browser
    await browser.close();
})();
