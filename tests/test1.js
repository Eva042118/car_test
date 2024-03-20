const locator = require('../locator/locator')
const verify = require('../locator/verify')
const cars = require('../page/cars')
Feature('Car');

Scenario('car', ({I}) => {
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
    I.wait(2);
    I.see(locator.car.more);
    I.click(locator.car.car_video);
    I.wait(2);
    I.see(locator.car.more);
}).retry(3);
