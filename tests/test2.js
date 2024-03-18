const locator = require('../locator/locator')
const verify = require('../locator/verify')

Feature('category');
Scenario('Social button', ({I}) => {
    // facebook
    I.amOnPage('/');
    I.click(locator.social.fb);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.social.fb);
    I.closeCurrentTab();
    // youtube
    I.click(locator.social.youtube);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.social.youtube);
    I.closeCurrentTab();
    // instagram
    I.click(locator.social.ig);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.social.ig);
    I.closeCurrentTab();
    // line
    I.click(locator.social.line);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.social.line);
    I.closeCurrentTab();
}).retry(3);