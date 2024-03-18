const locator = require('../locator/locator')
const verify = require('../locator/verify')

Feature('category');
Scenario('Tools', ({I}) => {
    // 黃金助手
    // 即時熱門景點
    I.amOnPage('/');
    I.click(locator.tools.attractons);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.tools.attractons);
    I.closeCurrentTab();
    // 國道即時路況
    I.click(locator.tools.freeway);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.tools.freeway);
    I.closeCurrentTab();
    // 監理服務網
    I.click(locator.tools.mvdis);
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl(verify.tools.mvdis);
    I.closeCurrentTab();
}).retry(3); 