Feature('Car');

Scenario('Navigation bar test', ({I}) => {
    // 車壇新訊
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('國內要聞');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/local-news');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('國際車訊');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/global-news');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('銷售分析');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/analysis');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('電動車訊');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/ecarnews');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('機車新聞');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/bike-news');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('間諜照');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/spy-shot');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[1]/ul/a/li[1]');
    I.click('促銷優惠');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/car-news/promotion');
    // 影音
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[2]/ul/a/li[1]');
    I.click('節目完整版');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/tv-show');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[2]/ul/a/li[1]');
    I.click('節目精華');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/essence');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[2]/ul/a/li[1]');
    I.click('試駕影音');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/roadtest-video');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[2]/ul/a/li[1]');
    I.click('現場直擊');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/video/liveview');
    // 交通生活
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[3]/ul/a/li[1]');
    I.click('生活時事');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/car-life');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[3]/ul/a/li[1]');
    I.click('熱搜話題');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/hot');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[3]/ul/a/li[1]');
    I.click('政策法規');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/policy');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[3]/ul/a/li[1]');
    I.click('科技時尚');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/life/tech');
    // 名人與車
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[4]/ul/a/li[1]');
    I.click('達人說車');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/talent');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[4]/ul/a/li[1]');
    I.click('人車故事');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/people-story');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[4]/ul/a/li[1]');
    I.click('藝起當老司機');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/celebrity/artist');
    // 試駕報導
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[5]/ul/a/li[1]');
    I.click('汽車試駕');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/car-roadtest');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[5]/ul/a/li[1]');
    I.click('電車試駕');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/electric');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[5]/ul/a/li[1]');
    I.click('二輪試駕');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/report/bike-roadtest');
    // 更多
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[6]/ul/a/li[1]');
    I.click('車展專區');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/category/carshow');
    I.amOnPage('/');
    I.moveCursorTo('//html/body/header/div/div[2]/div[6]/ul/a/li[1]');
    I.click('2024金CAR獎');
    I.seeInCurrentUrl('https://cars.tvbs.com.tw/event/goldcar?form=goldlineweb');
}).retry(3);
Scenario('Social button', ({I}) => {
    // facebook
    I.amOnPage('/');
    I.click('fb-button');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.facebook.com/56goldline');
    I.closeCurrentTab();
    // youtube
    I.click('youtube-button');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.youtube.com/channel/UCI4i_uldRR6zTLjWTEL8glQ');
    I.closeCurrentTab();
    // instagram
    I.click('ig-button');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.instagram.com/tvbsgoldline56/');
    I.closeCurrentTab();
    // line
    I.click('line-button');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://page.line.me/873lmekx');
    I.closeCurrentTab();
}).retry(3);
// Scenario('Car spec', ({I}) => {
//     // 汽車規格查詢
//     I.wait(2);
//     I.click('搜尋');
//     I.seeInCurrentUrl('https://cars.tvbs.com.tw/spec/search/brand_name=&car_body=&price_min=&price_max=&fuel=&per_page=12&page=1');
// }).retry(3); 
Scenario('Tools', ({I}) => {
    // 黃金助手
    // 即時熱門景點
    I.amOnPage('/');
    I.click('即時熱門景點');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://news.tvbs.com.tw/events/attractions?from=goldline');
    I.closeCurrentTab();
    // 國道即時路況
    I.click('國道即時路況');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://news.tvbs.com.tw/events/freeway?from=goldline');
    I.closeCurrentTab();
    // 監理服務網
    I.click('監理服務網');
    I.wait(2);
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.mvdis.gov.tw/#gsc.tab=0');
    I.closeCurrentTab();
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