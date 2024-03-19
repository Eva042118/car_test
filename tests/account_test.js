Feature('Account');

Scenario('sign in and modify member info', async({I}) => {
    I.amOnPage('https://member.tvbs.com.tw/index?back_url=https://health.tvbs.com.tw/&site=Health&t=1710744366&uniqid=65f7e32e18555');
    I.fillField('請輸入註冊 Email', 'wen042118@icloud.com');
    I.fillField('請輸入密碼', secret('Wen890221'));
    I.click('登入');
    I.wait(2);
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