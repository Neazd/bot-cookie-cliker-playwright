const BasePage = require('./basePage');
class CookiePage extends BasePage {
    constructor(page) {
        super(page);
        this.cookieButon = '//button[@id="bigCookie"]';
    }

    async clickCookie() {
        await this.click(this.cookieButon );
    }
}

module.exports = CookiePage ;