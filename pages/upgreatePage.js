const BasePage = require('./basePage');
class AchivmentsPage extends BasePage {
    constructor(page) {
        super(page);
        this.closeAchievement = '//div[@data-id="3" and contains(@class, "product") and contains(@class, "unlocked") and contains(@class, "enabled")]';
    }

    async login(username, password) {
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.submitButton);
    }
}

module.exports = AchivmentsPage;










