Feature('category');
Scenario('navigation bar category test',async ({I}) => {
    // 車壇新訊
    I.amOnPage('https://cars.tvbs.com.tw/car-news/176651');
    I.see('記者');
    I.see('年');
    I.see('月');
    I.see('日');
    I.see('熱門文章');
    I.click('//*[@id="primary"]/div[1]/div/div/div[2]/div[2]/div/div/div[1]/a/i');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.facebook.com/share_channel/')
});