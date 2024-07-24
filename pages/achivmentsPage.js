const BasePage = require('./basePage');
class AchivmentsPage extends BasePage {
    constructor(page) {
        super(page);
        this.closeAchievement = '//h3[text()="Achievement unlocked"]/ancestor::div[@id="notes"]//div[@class="close"]'
    }

    async acceptAchivement() {
        await this.click(this.closeAchievement)
    }
}

module.exports = AchivmentsPage;








