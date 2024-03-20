const { I } = inject();
const locator = require('../locator/locator')
const verify = require('../locator/verify')

module.exports = {
    admin_login(email, password){
        I.amOnPage(verify.goldcar.index);
        I.click(locator.account.sign_in);
        I.fillField(locator.account.adminEmail, email);
        I.fillField(locator.account.adminPassword, password);
        I.click(locator.account.submit);
        I.wait(2);
        I.see(locator.account.sign_out);
    }
}