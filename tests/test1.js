const locator = require('../locator/locator')
const verify = require('../locator/verify')
const cars = require('../page/cars')
Feature('Car');

Scenario('car', ({ I }) => {
    cars.tools();
}).retry(3);