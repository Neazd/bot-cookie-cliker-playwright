const BasePage = require('./basePage');
class StorePage extends BasePage {
    constructor(page) {
        super(page);
        this.cursor="//div[@class='storeSection']//div[text()='Cursor']/ancestor::div";
        this.grandma = "//div[@class='storeSection']//div[text()='Grandma']/ancestor::div";
        this.farm = "//div[@class='storeSection']//div[text()='Farm']/ancestor::div";
        this.mine = "//div[@class='storeSection']//div[text()='Mine']/ancestor::div";
        this.factory =  "//div[@class='storeSection']//div[text()='Factory']/ancestor::div";
        this.bank = "//div[@class='storeSection']//div[text()='Bank']/ancestor::div"
    }

    async buyCursor() {
        await click(this.cursor)
    }
    async buyGrandma() {
        await click(this.grandma)
    }
    async buyFarm() {
        await click(this.farm)
    }
    async buyMine() {
        await click(this.mine)
    }
    async buyFactory() {
        await click(this.factory)
    }

    async buyBank() {
        await click(this.bank)
    }

    async clickIfProductEnabled(selector) {
        while (true) {
            const isEnabled = await this.checkIfProductEnable(selector);
            if (isEnabled) {
                await this.click(selector);
                console.log('Element clicked.');
                break;
            } else {
                console.log('Element does not have the specified classes, retrying...');
                await this.page.waitForTimeout(1000);
            }
        }
    }    

}

module.exports = StorePage ;