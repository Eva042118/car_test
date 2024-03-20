// const locator = require('../locator/locator')
// const verify = require('../locator/verify')
const productionData = require('../data/production')

Feature('Car');

Scenario('Navigation bar and category page', ({cars}) => {
    cars.navigationbar()
}).retry(3);

Scenario('Social button', async({cars}) => {
    cars.socialbtn();
}).retry(3);

Scenario('Index', ({cars}) => {
    cars.index();
}).retry(3); 

Scenario('Tools', ({cars}) => {
    cars.tools();
}).retry(3); 

Scenario('spec', ({cars}) => {
    cars.spec_index();
    cars.spec();
}).retry(3);

Scenario('car page', ({cars}) => {
    cars.car_page();
}).retry(3);

Scenario('show', ({cars}) => {
    cars.show();
}).retry(3);

Scenario('goldcar', ({cars}) => {
    cars.goldcar();
}).retry(3);

Scenario('sign in', ({accountPage}) => {
    accountPage.admin_login(productionData.account.adminAccount,productionData.account.adminPassword);
}).retry(3);