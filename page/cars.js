const { I } = inject();
const locator = require('../locator/locator')
const verify = require('../locator/verify')

module.exports = {
    navigationbar() {
        I.amOnPage('/');
        I.click(locator.navigation.car_news);
        I.seeInCurrentUrl(verify.navigation.car_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.local_news);
        I.seeInCurrentUrl(verify.navigation.local_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.global_news);
        I.seeInCurrentUrl(verify.navigation.global_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.analysis);
        I.seeInCurrentUrl(verify.navigation.analysis);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.ecarnews);
        I.seeInCurrentUrl(verify.navigation.ecarnews);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.bike_news);
        I.seeInCurrentUrl(verify.navigation.bike_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.spy_shot);
        I.seeInCurrentUrl(verify.navigation.spy_shot);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news);
        I.click(locator.navigation.promotion);
        I.seeInCurrentUrl(verify.navigation.promotion);
        // 影音
        I.amOnPage('/');
        I.click(locator.navigation.video);
        I.seeInCurrentUrl(verify.navigation.video);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video);
        I.click(locator.navigation.tv_show);
        I.seeInCurrentUrl(verify.navigation.tv_show);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video);
        I.click(locator.navigation.essence);
        I.seeInCurrentUrl(verify.navigation.essence);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video);
        I.click(locator.navigation.roadtest_video);
        I.seeInCurrentUrl(verify.navigation.roadtest_video);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video);
        I.click(locator.navigation.liveview);
        I.seeInCurrentUrl(verify.navigation.liveview);
        // 交通生活
        I.amOnPage('/');
        I.click(locator.navigation.life);
        I.seeInCurrentUrl(verify.navigation.life);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life);
        I.click(locator.navigation.car_life);
        I.seeInCurrentUrl(verify.navigation.car_life);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life);
        I.click(locator.navigation.hot);
        I.seeInCurrentUrl(verify.navigation.hot);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life);
        I.click(locator.navigation.policy);
        I.seeInCurrentUrl(verify.navigation.policy);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life);
        I.click(locator.navigation.tech);
        I.seeInCurrentUrl(verify.navigation.tech);
        // 名人與車
        I.amOnPage('/');
        I.click(locator.navigation.celebrity);
        I.seeInCurrentUrl(verify.navigation.celebrity);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity);
        I.click(locator.navigation.talent);
        I.seeInCurrentUrl(verify.navigation.talent);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity);
        I.click(locator.navigation.people_story);
        I.seeInCurrentUrl(verify.navigation.people_story);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity);
        I.click(locator.navigation.artist);
        I.seeInCurrentUrl(verify.navigation.artist);
        // 試駕報導
        I.amOnPage('/');
        I.click(locator.navigation.report);
        I.seeInCurrentUrl(verify.navigation.report);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report);
        I.click(locator.navigation.car_roadtest);
        I.seeInCurrentUrl(verify.navigation.car_roadtest);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report);
        I.click(locator.navigation.electric);
        I.seeInCurrentUrl(verify.navigation.electric);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report);
        I.click(locator.navigation.bike_roadtest);
        I.seeInCurrentUrl(verify.navigation.bike_roadtest);
        // 更多
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.more);
        I.click(locator.navigation.carshow);
        I.seeInCurrentUrl(verify.navigation.carshow);
        I.amOnPage('/');
        I.moveCursorTo('//html/body/header/div/div[2]/div[6]/ul/a/li[1]');
        I.click(locator.navigation.goldlineweb);
        I.seeInCurrentUrl(verify.navigation.goldlineweb);
    },
    socialbtn() {
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
    },
    tools() {
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
    }
}