const { I } = inject();
const locator = require('../locator/locator')
const verify = require('../locator/verify')

module.exports = {
    navigationbar() {
        // 車壇新訊
        I.amOnPage('/');
        I.click(locator.navigation.car_news);
        I.seeInCurrentUrl(verify.navigation.car_news);
        I.see(locator.navigation.car_news);
        I.see(locator.navigation.num);
        I.see(locator.navigation.category);
        I.see(locator.navigation.local_news);
        I.see(locator.navigation.global_news);
        I.see(locator.navigation.analysis);
        I.see(locator.navigation.ecarnews);
        I.see(locator.navigation.bike_news);
        I.see(locator.navigation.spy_shot);
        I.see(locator.navigation.promotion);
        I.see(locator.navigation.hot_article);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.local_news);
        I.seeInCurrentUrl(verify.navigation.local_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.global_news);
        I.seeInCurrentUrl(verify.navigation.global_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.analysis);
        I.seeInCurrentUrl(verify.navigation.analysis);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.ecarnews);
        I.seeInCurrentUrl(verify.navigation.ecarnews);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.bike_news);
        I.seeInCurrentUrl(verify.navigation.bike_news);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.spy_shot);
        I.seeInCurrentUrl(verify.navigation.spy_shot);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.car_news_x);
        I.click(locator.navigation.promotion);
        I.seeInCurrentUrl(verify.navigation.promotion);
        // 影音
        I.amOnPage('/');
        I.click(locator.navigation.video);
        I.seeInCurrentUrl(verify.navigation.video);
        I.see(locator.navigation.video);
        I.see(locator.navigation.num);
        I.see(locator.navigation.category);
        I.see(locator.navigation.tv_show);
        I.see(locator.navigation.essence);
        I.see(locator.navigation.roadtest_video);
        I.see(locator.navigation.liveview);
        I.see(locator.navigation.hot_article);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video_x);
        I.click(locator.navigation.tv_show);
        I.seeInCurrentUrl(verify.navigation.tv_show);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video_x);
        I.click(locator.navigation.essence);
        I.seeInCurrentUrl(verify.navigation.essence);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video_x);
        I.click(locator.navigation.roadtest_video);
        I.seeInCurrentUrl(verify.navigation.roadtest_video);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.video_x);
        I.click(locator.navigation.liveview);
        I.seeInCurrentUrl(verify.navigation.liveview);
        // 交通生活
        I.amOnPage('/');
        I.click(locator.navigation.life);
        I.seeInCurrentUrl(verify.navigation.life);
        I.see(locator.navigation.life);
        I.see(locator.navigation.num);
        I.see(locator.navigation.category);
        I.see(locator.navigation.car_life);
        I.see(locator.navigation.hot);
        I.see(locator.navigation.policy);
        I.see(locator.navigation.tech);
        I.see(locator.navigation.hot_article);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life_x);
        I.click(locator.navigation.car_life);
        I.seeInCurrentUrl(verify.navigation.car_life);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life_x);
        I.click(locator.navigation.hot);
        I.seeInCurrentUrl(verify.navigation.hot);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life_x);
        I.click(locator.navigation.policy);
        I.seeInCurrentUrl(verify.navigation.policy);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.life_x);
        I.click(locator.navigation.tech);
        I.seeInCurrentUrl(verify.navigation.tech);
        // 名人與車
        I.amOnPage('/');
        I.click(locator.navigation.celebrity);
        I.seeInCurrentUrl(verify.navigation.celebrity);
        I.see(locator.navigation.celebrity);
        I.see(locator.navigation.num);
        I.see(locator.navigation.category);
        I.see(locator.navigation.talent);
        I.see(locator.navigation.people_story);
        I.see(locator.navigation.artist);
        I.see(locator.navigation.hot_article);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity_x);
        I.click(locator.navigation.talent);
        I.seeInCurrentUrl(verify.navigation.talent);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity_x);
        I.click(locator.navigation.people_story);
        I.seeInCurrentUrl(verify.navigation.people_story);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.celebrity_x);
        I.click(locator.navigation.artist);
        I.seeInCurrentUrl(verify.navigation.artist);
        // 試駕報導
        I.amOnPage('/');
        I.click(locator.navigation.report);
        I.seeInCurrentUrl(verify.navigation.report);
        I.see(locator.navigation.report);
        I.see(locator.navigation.num);
        I.see(locator.navigation.category);
        I.see(locator.navigation.car_roadtest);
        I.see(locator.navigation.electric);
        I.see(locator.navigation.bike_roadtest);
        I.see(locator.navigation.hot_article);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report_x);
        I.click(locator.navigation.car_roadtest);
        I.seeInCurrentUrl(verify.navigation.car_roadtest);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report_x);
        I.click(locator.navigation.electric);
        I.seeInCurrentUrl(verify.navigation.electric);
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.report_x);
        I.click(locator.navigation.bike_roadtest);
        I.seeInCurrentUrl(verify.navigation.bike_roadtest);
        // 更多
        // 車展專區
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.more);
        I.click(locator.navigation.carshow);
        I.seeInCurrentUrl(verify.navigation.carshow);
        // 2024金CAR獎
        I.amOnPage('/');
        I.moveCursorTo(locator.navigation.more);
        I.click(locator.navigation.goldlineweb);
        I.wait(2);
        I.seeInCurrentUrl(verify.navigation.goldlineweb);
    },
    index() {
        I.amOnPage('/');
        I.see(locator.index.hot_car);
        I.see(locator.index.new_article);
        I.see(locator.index.hot_article);
        I.see(locator.index.new_video);
        I.see(locator.index.news);
        I.see(locator.index.spec);
        I.see(locator.index.search);
        I.see(locator.index.sale);
        I.see(locator.index.domestic);
        I.see(locator.index.imported);
        I.see(locator.index.luxury);
        I.see(locator.index.talent);
        I.see(locator.index.tool);
    },
    show() {
        I.amOnPage(verify.navigation.carshow);
        I.see(locator.show.num);
        I.see(locator.show.category);
        I.see(locator.show.hot_article);
        I.click(locator.show.show_1);
        I.seeInCurrentUrl(verify.show.show_1);
        I.see(locator.show.show_1);
        I.see(locator.show.num);
        I.see(locator.show.hot_article);
        I.amOnPage(verify.navigation.carshow);
        I.click(locator.show.show_2);
        I.seeInCurrentUrl(verify.show.show_2);
        I.see(locator.show.show_2);
        I.amOnPage(verify.navigation.carshow);
        I.click(locator.show.show_3);
        I.seeInCurrentUrl(verify.show.show_3);
        I.see(locator.show.show_3);
        I.amOnPage(verify.navigation.carshow);
        I.click(locator.show.show_4);
        I.seeInCurrentUrl(verify.show.show_4);
        I.see(locator.show.show_4);
        I.amOnPage(verify.navigation.carshow);
        I.click(locator.show.show_5);
        I.seeInCurrentUrl(verify.show.show_5);
        I.see(locator.show.show_5);
        I.amOnPage(verify.navigation.carshow);
        I.click(locator.show.show_6);
        I.seeInCurrentUrl(verify.show.show_6);
        I.see(locator.show.show_6);
    },
    goldcar() {
        // 2024金CAR獎
        I.amOnPage(verify.navigation.goldlineweb);
        // 首頁
        I.click(locator.goldcar.index);
        I.seeInCurrentUrl(verify.goldcar.index);
        // 投票辦法
        I.click(locator.goldcar.rule);
        I.seeInCurrentUrl(verify.goldcar.rule);
        // 歷屆票選結果
        I.click(locator.goldcar.adward);
        I.seeInCurrentUrl(verify.goldcar.adward);
        // 中獎名單
        I.click(locator.goldcar.winner);
        I.seeInCurrentUrl(verify.goldcar.winner);
        // 台北車展直擊
        I.click(locator.goldcar.show);
        I.wait(2);
        I.switchToNextTab();
        I.seeInCurrentUrl(verify.goldcar.show);
        I.closeCurrentTab();
        I.see(locator.goldcar.sign_in);
    },
    socialbtn() {
        I.amOnPage('/');
        // Facebook社群按鈕
        I.click(locator.social.fb);
        I.wait(2);
        I.switchToNextTab();
        I.seeInCurrentUrl(verify.social.fb);
        I.closeCurrentTab();
        // Youtube社群按鈕
        I.click(locator.social.youtube);
        I.wait(2);
        I.switchToNextTab();
        I.seeInCurrentUrl(verify.social.youtube);
        I.closeCurrentTab();
        // Instagram社群按鈕
        I.click(locator.social.ig);
        I.wait(2);
        I.switchToNextTab();
        I.seeInCurrentUrl(verify.social.ig);
        I.closeCurrentTab();
        // Line社群按鈕
        I.click(locator.social.line);
        I.wait(2);
        I.switchToNextTab();
        I.seeInCurrentUrl(verify.social.line);
        I.closeCurrentTab();
    },
    tools() {
        I.amOnPage('/');
        // 即時熱門景點
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
    },
    spec_index() {
        // 首頁上的汽車規格查詢
        I.amOnPage('/');
        // 品牌
        I.click(locator.spec_index.brand);
        I.click(locator.spec_index.brand_opt);
        // 能源
        I.fillField(locator.spec_index.fuel, locator.spec_index.fuel_opt);
        I.pressKey(['Enter']);
        // 年份
        I.fillField(locator.spec_index.year, locator.spec_index.year_opt);
        I.pressKey(['Enter']);
        // 價格
        I.fillField(locator.spec_index.price, locator.spec_index.price_opt);
        I.pressKey(['Enter']);
        // 車型
        I.click(locator.spec_index.body_opt);
        // 搜尋
        I.click(locator.spec_index.submit);
        I.seeInCurrentUrl(verify.spec.car);
        I.see(locator.spec_index.result);
        I.see('AUDI');
        I.see(locator.spec_index.num);
        I.see('A4 Avant');
    },
    spec() {
        I.amOnPage(verify.spec.search);
        I.click(locator.spec.brand);
        I.click(locator.spec.brand_opt);
        I.click(locator.spec.body);
        I.click(locator.spec.body_opt);
        I.click(locator.spec.price);
        I.click(locator.spec.price_opt);
        I.click(locator.spec.year);
        I.click(locator.spec.year_opt);
        I.click(locator.spec.fuel);
        I.click(locator.spec.fuel_opt);
        I.click(locator.spec.submit);
        I.seeInCurrentUrl(verify.spec.car);
        I.see(locator.spec.result);
        I.see('AUDI');
        I.see(locator.spec.num);
        I.see('A4 Avant');
    },
    car_page() {
        // 車款頁面
        I.amOnPage(verify.car.car_page);
        I.see(locator.car.spec);
        I.see(locator.car.power);
        I.see(locator.car.chassis);
        I.see(locator.car.body);
        I.see(locator.car.hot_roadtest);
        I.see(locator.car.other);
        I.see(locator.car.appearance);
        I.see(locator.car.interior);
        I.see(locator.car.video);
        I.see(locator.car.convenience);
        I.see(locator.car.safety);
        I.click(locator.car.article);
        I.see(locator.car.more);
        I.click(locator.car.car_video);
        I.see(locator.car.more);
    }
}