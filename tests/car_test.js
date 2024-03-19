const locator = require('../locator/locator')
const verify = require('../locator/verify')
const cars = require('../page/cars')
Feature('Car');

Scenario('Navigation bar test', ({I}) => {
    cars.navigationbar()
}).retry(3);
Scenario('Social button', ({I}) => {
    cars.socialbtn();
}).retry(3);
Scenario('Tools', ({I}) => {
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
Scenario('Category page', ({I}) => {
    // workpress分類頁
    // 車壇新訊
    I.amOnPage('/');
    I.click('車壇新訊');
    I.see('篇文章');
    I.see('分類選單');
    I.see('國內要聞');
    I.see('國際車訊');
    I.see('銷售分析');
    I.see('電動車訊');
    I.see('機車新聞');
    I.see('間諜照');
    I.see('促銷優惠');
    // 影音
    I.amOnPage('/');
    I.click('影音');
    I.see('篇文章');
    I.see('分類選單');
    I.see('節目完整版');
    I.see('節目精華');
    I.see('試駕影音');
    I.see('現場直擊');
    // 交通生活
    I.amOnPage('/');
    I.click('交通生活');
    I.see('篇文章');
    I.see('分類選單');
    I.see('生活時事');
    I.see('熱搜話題');
    I.see('政策法規');
    I.see('科技時尚');
    // 名人與車
    I.amOnPage('/');
    I.click('名人與車');
    I.see('篇文章');
    I.see('分類選單');
    I.see('達人說車');
    I.see('人車故事');
    I.see('藝起當老司機');
    // 試駕報導
    I.amOnPage('/');
    I.click('試駕報導');
    I.see('篇文章');
    I.see('分類選單');
    I.see('汽車試駕');
    I.see('電車試駕');
    I.see('二輪試駕');
}).retry(3);