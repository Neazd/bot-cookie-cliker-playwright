const { chromium } = require('playwright');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.fill(selector, text);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async checkIfProductEnable(selector) {
        const hasClasses = await this.page.$eval(selector, (element) => {
            const classList = element.classList;
            classList.contains('product') && classList.contains('unlocked') && classList.contains('enabled');
        return hasClasses;
        });
    }
}

module.exports = BasePage;