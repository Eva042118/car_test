Feature('Account');

Scenario('facebook sign in from health', ({I}) => {
    I.amOnPage('https://health.tvbs.com.tw/');
    I.click('//html/body/div[2]/div/header/div/div[2]/div[2]');
    I.click('登入/加入會員');
    I.click('#singinWithFacebook');
    I.fillField('電子郵件地址或手機號碼','qianwen042118@gmail.com');
    I.fillField('密碼','Wen225259518');
    I.click('登入');
    I.wait(5);
    I.seeInCurrentUrl('https://health.tvbs.com.tw/');
}).retry(3);
Scenario('google sign in from health', ({I}) => {
    I.amOnPage('https://health.tvbs.com.tw/');
    I.click('//html/body/div[2]/div/header/div/div[2]/div[2]');
    I.click('登入/加入會員');
    I.click('#singinWithGoogle');
    I.fillField('電子郵件地址或電話號碼','qianwenxiao@innov.tvbs.com.tw');
    I.click('下一步');
    I.fillField('輸入您的密碼','Wen225259518');
    I.click('下一步');
    I.wait(5);
    I.seeInCurrentUrl('https://health.tvbs.com.tw/');
}).retry(3);
Scenario('email sign in from health', ({I}) => {
    I.amOnPage('https://health.tvbs.com.tw/');
    I.click('//html/body/div[2]/div/header/div/div[2]/div[2]');
    I.click('登入/加入會員');
    I.fillField('請輸入註冊 Email','wen042118@icloud.com');
    I.fillField('請輸入密碼','Wen890221');
    I.click('登入');
    I.wait(5);
    I.seeInCurrentUrl('https://health.tvbs.com.tw/');
}).retry(3);
Scenario('facebook sign in from woman', ({I}) => {
    I.amOnPage('https://woman.tvbs.com.tw/');
    I.click('//*[@id="root"]/header/div/div[2]/div/div[2]/button');
    I.click('登入 / 註冊');
    I.click('#singinWithFacebook');
    I.fillField('電子郵件地址或手機號碼','qianwen042118@gmail.com');
    I.fillField('密碼','Wen225259518');
    I.click('登入');
    I.wait(5);
    I.seeInCurrentUrl('https://woman.tvbs.com.tw/');
}).retry(3);
Scenario('google sign in from woman', ({I}) => {
    I.amOnPage('https://woman.tvbs.com.tw/');
    I.click('//*[@id="root"]/header/div/div[2]/div/div[2]/button');
    I.click('登入 / 註冊');
    I.click('#singinWithGoogle');
    I.fillField('電子郵件地址或電話號碼','qianwenxiao@innov.tvbs.com.tw');
    I.click('下一步');
    I.fillField('輸入您的密碼','Wen225259518');
    I.click('下一步');
    I.wait(5);
    I.seeInCurrentUrl('https://woman.tvbs.com.tw/');
}).retry(3);
Scenario('email sign in from woman', ({I}) => {
    I.amOnPage('https://woman.tvbs.com.tw/');
    I.click('//*[@id="root"]/header/div/div[2]/div/div[2]/button');
    I.click('登入 / 註冊');
    I.fillField('請輸入註冊 Email','wen042118@icloud.com');
    I.fillField('請輸入密碼','Wen890221');
    I.click('登入');
    I.wait(5);
    I.seeInCurrentUrl('https://woman.tvbs.com.tw/');
}).retry(3);