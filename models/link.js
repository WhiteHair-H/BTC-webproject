// 링크를 통한 각 메뉴들 html 경로
const links = {
    home: "public/index.html",
    login: "views/login.html",
    membership: "views/membership.html",
    about: "views/about.html",
    recruit: "views/recruit.html",
    process: "views/process.html",
    reference: "views/reference.html",
    news: "views/news.html",

    /* 서비스 및 제품 서비스 */
    services_1: "views/service_product/services_1.html",
    services_2: "views/service_product/services_2.html",
    services_3: "views/service_product/services_3.html",
    services_4: "views/service_product/services_4.html",
    services_5: "views/service_product/services_5.html",
    services_6: "views/service_product/services_6.html",

}

module.exports = links;
exports.links = links; // 모듈 외부로 공개할 이름 .links / 모듈 내부에서의 이름.