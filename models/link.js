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
    Managed_service: "views/service_product/Managed_service.html",
    Migration_Ops: "views/service_product/Migration_Ops.html",
    DevOps: "views/service_product/DevOps.html",
    DataOps: "views/service_product/DataOps.html",
    SecOps: "views/service_product/SecOps.html",
    PinOps: "views/service_product/PinOps.html",

}

module.exports = links;
exports.links = links; // 모듈 외부로 공개할 이름 .links / 모듈 내부에서의 이름.