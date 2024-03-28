Feature('Ciam');

Scenario('sign in', async({I}) => {
    I.amOnPage('https://health3.tvbs.com.tw');
    I.click('模擬登入健康會員(session cookie) - 尚未登入，點擊後登入');
    I.fillField('請輸入註冊 Email', 'wen042118@icloud.com');
    I.fillField('請輸入密碼', secret('wen0221'));
    I.click('登入');
    I.seeInCurrentUrl('https://health-pre.tvbs.com.tw/');
    I.click('//html/body/div[2]/div/header/div/div[2]/div[2]/img');
    I.click('修改會員資料');
    I.fillField('nickname', 'Eva');
    I.fillField('name', 'Qian Wen Xiao');
    I.fillField('phone', '0912345678');
    I.click('更新')
    I.seeInField('nickname', 'Eva');
    I.seeInField('name', 'Qian Wen Xiao');
    I.seeInField('phone', '0912345678');
}).retry(3);