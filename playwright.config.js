// playwright.config.js
module.exports = {
    browser: 'chromium',
    launchOptions: {
        headless: false,
        slowMo: 50,
    },
    contextOptions: {
        viewport: { width: 1280, height: 720 },
        userAgent: 'Playwright',
    },
    baseURL: 'https://orteil.dashnet.org/cookieclicker/',
};
