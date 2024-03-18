const locator = require('../locator/locator')

Feature('Car');

Scenario('Navigation bar test', ({I}) => {
    // 車壇新訊
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.local_news);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/local-news');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.global_news);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/global-news');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.analysis);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/analysis');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.ecarnews);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/ecarnews');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.bike_news);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/bike-news');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.spy_shot);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/spy-shot');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.car_news);
    I.click(locator.navigation.promotion);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/promotion');
    // 影音
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.video);
    I.click(locator.navigation.tv_show);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/tv-show');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.video);
    I.click(locator.navigation.essence);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/essence');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.video);
    I.click(locator.navigation.roadtest_video);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/roadtest-video');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.video);
    I.click(locator.navigation.liveview);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/liveview');
    // 交通生活
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.life);
    I.click(locator.navigation.car_life);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/car-life');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.life);
    I.click(locator.navigation.hot);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/hot');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.life);
    I.click(locator.navigation.policy);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/policy');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.life);
    I.click(locator.navigation.tech);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/tech');
    // 名人與車
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.celebrity);
    I.click(locator.navigation.talent);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/talent');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.celebrity);
    I.click(locator.navigation.people_story);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/people-story');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.celebrity);
    I.click(locator.navigation.artist);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/artist');
    // 試駕報導
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.report);
    I.click(locator.navigation.car_roadtest);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/car-roadtest');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.report);
    I.click(locator.navigation.electric);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/electric');
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.report);
    I.click(locator.navigation.bike_roadtest);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/bike-roadtest');
    // 更多
    I.amOnPage('/');
    I.moveCursorTo(locator.navigation.more);
    I.click(locator.navigation.carshow);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/carshow');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[6]/ul/a/li[1]');
    I.click(locator.navigation.goldlineweb);
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/event/goldcar?form=goldlineweb');
}).retry(3);
