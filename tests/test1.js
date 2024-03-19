const locator = require('../locator/locator')
const verify = require('../locator/verify')
const cars = require('../page/cars')
Feature('Car');

Scenario('Navigation bar test', ({I}) => {
    cars.navigationbar();
    cars.socialbtn();
    cars.tools();
});
