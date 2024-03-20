const host_url = "https://cars.tvbs.com.tw"

const navigation = {
    car_news: `${host_url}/category/car-news`,
    local_news: `${host_url}/category/car-news/local-news`,
    global_news: `${host_url}/category/car-news/global-news`,
    analysis: `${host_url}/category/car-news/analysis`,
    ecarnews: `${host_url}/category/car-news/ecarnews`,
    bike_news: `${host_url}/category/car-news/bike-news`,
    spy_shot: `${host_url}/category/car-news/spy-shot`,
    promotion: `${host_url}/category/car-news/promotion`,
    video: `${host_url}/category/video`,
    tv_show: `${host_url}/category/video/tv-show`,
    essence: `${host_url}/category/video/essence`,
    roadtest_video: `${host_url}/category/video/roadtest-video`,
    liveview: `${host_url}/category/video/liveview`,
    life: `${host_url}/category/life`,
    car_life: `${host_url}/category/life/car-life`,
    hot: `${host_url}/category/life/hot`,
    policy: `${host_url}/category/life/policy`,
    tech: `${host_url}/category/life/tech`,
    celebrity: `${host_url}/category/celebrity`,
    talent: `${host_url}/category/celebrity/talent`,
    people_story: `${host_url}/category/celebrity/people-story`,
    artist: `${host_url}/category/celebrity/artist`,
    report: `${host_url}/category/report`,
    car_roadtest: `${host_url}/category/report/car-roadtest`,
    electric: `${host_url}/category/report/electric`,
    bike_roadtest: `${host_url}/category/report/bike-roadtest`,
    more: `//html/body/header/div/div[2]/div[6]/ul/a/li[1]`,
    carshow: `${host_url}/category/carshow`,
    goldlineweb: `${host_url}/event/goldcar?form=goldlineweb`
}

const social = {
    fb: `https://www.facebook.com/56goldline`,
    youtube: `https://www.youtube.com/channel/UCI4i_uldRR6zTLjWTEL8glQ`,
    ig: `https://www.instagram.com/tvbsgoldline56/`,
    line: `https://page.line.me/873lmekx`
}
const tools = {
    attractons: `https://news.tvbs.com.tw/events/attractions?from=goldline`,
    freeway: `https://news.tvbs.com.tw/events/freeway?from=goldline`,
    mvdis: `https://www.mvdis.gov.tw/#gsc.tab=0`
}

const goldcar = {
    index: `${host_url}/event/goldcar`,
    rule: `${host_url}/event/goldcar/rule`,
    adward: `${host_url}/event/goldcar/adward-product2024`,
    winner: `${host_url}/event/goldcar/winner`,
    show: `${host_url}/tag/2024%E5%8F%B0%E5%8C%97%E8%BB%8A%E5%B1%95?from=goldcar`
}
 const spec = {
    search_car: 'https://cars.tvbs.com.tw/spec/search/brand_name=audi&car_body=wagon&price_min=250&price_max=400&year[]=2023&fuel=hybrid&per_page=12&page=1'
 }

 const car = {
    car_page: 'https://cars.tvbs.com.tw/spec/audi/2023-audi-a4-avant'
 }
module.exports = {
    navigation,
    social,
    tools,
    goldcar,
    spec,
    car
}