const locator = require('../locator/locator')
const verify = require('../locator/verify')
const productionData = require('../data/production')
Feature('Car');

Scenario('Navigation bar and category page', ({cars}) => {
    cars.navigationbar()
}).retry(3);
Scenario('Social button', async({cars}) => {
    cars.socialbtn();
}).retry(3);
Scenario('Tools', ({cars}) => {
    cars.tools();
}).retry(3); 
Scenario('Index', ({I}) => {
    // 查看首頁內容
    I.amOnPage('/');
    I.see('熱門車款');
    I.see('最新文章');
    I.see('熱門文章');
    I.see('最新影音');
    I.see('車壇新訊');
    I.see('汽車規格查詢');
    I.see('銷售排行');
    I.see('國產車');
    I.see('進口車');
    I.see('豪華車');
    I.see('達人談車');
    I.see('黃金助手');
}).retry(3); 
Scenario('sign in', ({I, accountPage}) => {
    accountPage.admin_login(productionData.account.adminAccount,productionData.account.adminPassword);
    I.wait(2);
    I.see(locator.account.sign_out);
}).retry(3); 