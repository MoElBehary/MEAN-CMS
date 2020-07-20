function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='contentHolder' class='container-fluid px-0 px-lg-4x s-about-main-holder s-supp-bg-3 position-relative'>\n    <div *ngIf='aboutSections' id='aboutHolder' class=' container-fluid p-0 s-about-content-holder'>\n        <!-- History Seciton -->\n        <section *ngIf='aboutSections[0]' id='history' class='row p-md-5 p-3 position-relative s-section-row'>\n          <div id='conentBgImage' data-section='image' class='s-content-background position-absolute'\n          [ngStyle]=\"{\n             'background-image': 'url('+ pagesImgs_service.getUrl(aboutSections[0].page_backgroundImage) + ')'\n          }\"\n          ></div>\n          <div class='col-lg-8 col ml-lg-5 text-lg-left text-center pt-5 mt-5'>\n            <p id='contentTitle' data-section='title' class='display-3 ml-lg-5'>{{aboutSections[0].page_title}}</p>\n            <hr class='s-about-title-hr ml-lg-5'>\n            <p id='contentArt' data-section='article' class='ml-lg-5 lead s-aabout-art pl-lg-5 pl-0'>\n              {{aboutSections[0].page_article}}\n            </p>\n          </div>\n        </section>\n        <!-- Mission Section -->\n        <section *ngIf='aboutSections[1]' id='mission' class='row p-md-5 p-3 position-relative s-section-row'>\n          <div id='conentBgImagex' data-section='image' class='s-content-background position-absolute'\n          [ngStyle]=\"{\n             'background-image': 'url('+ pagesImgs_service.getUrl(aboutSections[1].page_backgroundImage) + ')'\n          }\"\n          ></div>\n          <div class='col-lg-8 col ml-lg-5 text-lg-left text-center pt-5 mt-5'>\n            <p id='contentTitle' data-section='title' class='display-3 ml-lg-5'>{{aboutSections[1].page_title}}</p>\n            <hr class='s-about-title-hr ml-lg-5'>\n            <p id='contentArt' data-section='article' class='ml-lg-5 lead s-aabout-art pl-lg-5 pl-0'>\n             {{aboutSections[1].page_article}}\n            </p>\n          </div>\n        </section>\n        <!-- Vission Section -->\n        <section *ngIf='aboutSections[2]' id='vission' class='row p-md-5 p-3 position-relative s-section-row'>\n          <div id='conentBgImagex' data-section='image' class='s-content-background position-absolute'\n          [ngStyle]=\"{\n             'background-image': 'url('+ pagesImgs_service.getUrl(aboutSections[2].page_backgroundImage) + ')'\n          }\"\n          ></div>\n          <div class='col-lg-8 col ml-lg-5 text-lg-left text-center pt-5 mt-5'>\n            <p id='contentTitle' data-section='title' class='display-3 ml-lg-5'>{{aboutSections[2].page_title}}</p>\n            <hr class='s-about-title-hr ml-lg-5'>\n            <p id='contentArt' data-section='article' class='ml-lg-5 lead s-aabout-art pl-lg-5 pl-0'>\n              {{aboutSections[2].page_article}}\n            </p>\n          </div>\n        </section>\n        <!-- Team Section -->\n        <!-- <section *ngIf='aboutSections[3]' id='team' class='row p-md-5 p-3 position-relative s-section-row'>\n          <div class='col-lg-8 col ml-lg-5 text-lg-left text-center pt-5 mt-5'>\n            <p id='contentTitle' data-section='title' class='display-3 ml-lg-5'>Team</p>\n            <hr class='s-about-title-hr ml-lg-5'>\n            <p id='contentArt' data-section='article' class='ml-lg-5 lead s-aabout-art pl-lg-5 pl-0'>\n              none\n            </p>\n          </div>\n        </section> -->\n    </div>\n    <!-- controllers {{LG}} -->\n    <div class=' s-controllers-holder position-absolute d-lg-flex d-none flex-column align-items-center justify-content-center pb-5'>\n        <!-- Sochial Media -->\n        <div *ngIf='isLoaded' class=''>\n        <a *ngIf='socialMedia[0].facebook' class=' d-block mt-3' [href]=\"socialMedia[0].facebook\"><img width='25'\n            src=\"/assets/Icons/contact-icons/fb.png\" alt=\"\"></a>\n        <a *ngIf='socialMedia[2].instagram' class=' d-block mt-3' [href]=\"socialMedia[2].instagram\"><img width='25'\n            src=\"/assets/Icons/contact-icons/insta.png\" alt=\"\"></a>\n      <a *ngIf='socialMedia[4].telegram' class=' d-block mt-3' [href]=\"socialMedia[4].telegram\"><img width='22'\n          src=\"/assets/Icons/contact-icons/telegram.png\" alt=\"\"></a>\n          <a *ngIf='socialMedia[5].whatsapp[0]' (click)='openWhatsappMenu()' class=' d-block mt-3'><img width='26' src=\"/assets/Icons/contact-icons/whatsapp.png\" alt=\"\"></a>\n        </div>\n        <!-- Controllers Switchers -->\n        <div id='contentControllers' class='my-4'>\n        <img id='onUpSlider' #onUp (click)=' upAndDownSlider(onUp)' data-content-at='0'\n            class='d-block s-about-controller my-3' width='25' src=\"/assets/Icons/about icons/arrow-up.png\" alt=\"\">\n        <img #onHistory (click)='sectionsBtns(onHistory)' data-content='0' class='d-block s-about-controller my-3'\n            width='25' src=\"/assets/Icons/about icons/circle.png\" alt=\"\">\n        <img #onMission (click)='sectionsBtns(onMission)' data-content='1'\n            class='d-block s-about-controller s-opc-5 my-3' width='25' src=\"/assets/Icons/about icons/circle.png\"\n            alt=\"\">\n        <img #onVission (click)='sectionsBtns(onVission)' data-content='2'\n            class='d-block s-about-controller s-opc-5 my-3' width='25' src=\"/assets/Icons/about icons/circle.png\"\n            alt=\"\">\n        <!-- <img #onTeam (click)='sectionsBtns(onTeam)' data-content='3' class='d-block s-about-controller s-opc-5 my-3'\n            width='25' src=\"/assets/Icons/about icons/circle.png\" alt=\"\"> -->\n        <img id='onDownSlider' #onDown (click)='upAndDownSlider(onDown)' data-content-at='0'\n            class='d-block s-about-controller my-3' width='25' src=\"/assets/Icons/about icons/arrow-down.png\" alt=\"\">\n        </div>\n        <!-- Contact Us Button -->\n        <div class='s-about-contact-button light-yellow-bg px-2 py-1 mt-5'>\n        <a class=' s-supp-cr-1 py-1 px-4 text-nowrap' routerLink='/contact'>Contact Us</a>\n        </div>\n    </div>\n    <!-- controllers {{MD}} -->\n    <div class='s-supp-bg-3 position-fixed s-contact-holder-md py-4 px-5  d-lg-none d-block'>\n      <!-- Sochial Media -->\n      <div *ngIf='isLoaded' class='float-right'>\n          <a *ngIf='socialMedia[0].facebook' class=' m-2' [href]=\"socialMedia[0].facebook\"><img width='25'\n              src=\"/assets/Icons/contact-icons/fb.png\" alt=\"\"></a>\n          <a *ngIf='socialMedia[2].instagram' class=' m-2' [href]=\"socialMedia[2].instagram\"><img width='25'\n              src=\"/assets/Icons/contact-icons/insta.png\" alt=\"\"></a>\n          <a *ngIf='socialMedia[4].telegram' class=' m-2' [href]=\"socialMedia[4].telegram\"><img width='22'\n              src=\"/assets/Icons/contact-icons/telegram.png\" alt=\"\"></a>\n          <a *ngIf='socialMedia[5].whatsapp[0]' (click)='openWhatsappMenu()' class=' m-2'><img width='26'\n              src=\"/assets/Icons/contact-icons/whatsapp.png\" alt=\"\"></a>\n          <p class='lead d-none d-md-block m-0 float-right px-4 s-supp-cr-1'>Follow Us On Social-Media .</p>\n      </div>\n    </div>\n    <!-- whatsappMenu -->\n      <app-whatsapp-menu></app-whatsapp-menu>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/about-panel/about-panel.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/about-panel/about-panel.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesAboutPanelAboutPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='aboutHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications></app-notifications>\n   <div class='container'>\n       <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>About Us <span class='h3 text-capitalize s-supp-cr-1'>Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n       </div>\n       <div class='row'>\n           <div class='col'>\n               <!-- navigation -->\n               <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n               <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-row align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\" id=\"pills-tab\" role=\"tablist\">\n                    <li class=\"nav-item mr-5 d-lg-block d-none\">\n                        <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n                    </li>\n                    <li *ngFor='let section of aboutSections let i = index' class=\"nav-item mx-2\">\n                        <a class=\"nav-link s-temp-btn  btn rounded s-nav-btns s-supp-cr-4\"\n                        [class.active]='i == 0'\n                        [attr.aria-selected]=\"i == 0 ? true : false\"\n                        id=\"pills-home-tab\" data-toggle=\"pill\" [href]=\"'#tab-' + section._id\" role=\"tab\"\n                        [attr.aria-controls]=\"section._id\">{{section.page_title}}</a>\n                    </li>\n                </ul>\n                <!-- From Control -->\n                <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n                    <div *ngFor='let section of aboutSections let i = index' class=\"tab-pane fade show mx-lg-5 mx-2\" \n                    [class.active]='i == 0'\n                    [attr.id]=\"'tab-' + section._id\" role=\"tabpanel\" [attr.aria-labelledby]=\"'pills-'+ section._id +'-tab'\">\n                        <!-- Section Title -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Section Title</label>\n                            <!-- section title Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled  class=\"btn input-group-text s-icon-btn s-icon-title s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Title\" required [value]='section.page_title'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                        <!-- Section Background image -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Section Background Image</label>\n                            <!-- section Background Image Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled  class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #imagePrivewInp (click)='sectionImage(sectionImg)' type=\"text\" name=\"Section Background Image\" placeholder=\"Image\" required readonly\n                                    class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                    [value]='section.page_backgroundImage'>\n                                <input (change)='selectImage($event, imagePrivewInp, i)' #sectionImg type=\"file\" class='d-none'>\n                            </div>\n                        </div>\n                        <!-- section Article -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Section Article</label>\n                            <!-- section Article Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-4\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <textarea [value]='section.page_article' #sectionArt class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\" placeholder=\"Type Here The Section Article...\" rows=\"6\">\n                                </textarea>\n                            </div>\n                        </div>\n                        <!-- Save or Delete -->\n                        <div class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center\">\n                            <!-- <button class='fbtn s-btn-tem-h mx-1 px-4 input-group-text s-no-rounded-right s-no-rounded-left ~rounded-left border-0 s-supp-bg-1-opt5 text-danger'>Delete</button> -->\n                            <button data-id='saveBtn' (click)='updateSectionContent(section._id, sectionTitle.value, imagePrivewInp.value, sectionArt.value, i); postCategImg(i)' class='d-none btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                        </div>\n                    </div>\n                </div>\n                <!-- Save -->\n                <div class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center pt-5\">\n                    <button (click)='clickSave()'\n                        class='btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                </div>\n           </div>\n       </div>\n   </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-nav/admin-nav.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-nav/admin-nav.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesAdminNavAdminNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section class='position-fixed'> -->\n<nav\n    class=\"navbar s-navbar navbar-expand-lg s-dark2-bg navbar-light s-dark-cr p-0 position-fixed w-100\">\n    <a class=\"navbar-brand s-main-bgx d-lg-block d-none px-lg-5 m-0\" routerLink=\"/admin\">LOGO</a>\n    <button class=\"navbar-toggler ml-autox position-relative m-auto boder-0 p-3\" type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <a class=\"navbar-brand s-main-bgx m-auto\">LOGO</a>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav text-center text-lg-left w-100\">\n            <li class=\"nav-item\" routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\">\n                <a class=\"nav-link s-supp-cr-1 p-3 \" routerLink=\"/admin\">DASHBOARD</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive='active'>\n                <a class=\"nav-link s-supp-cr-1 p-3 \" routerLink=\"/admin/categories\">CATEGORIES</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive='active'>\n                <a class=\"nav-link s-supp-cr-1 p-3 \" routerLink=\"/admin/products\">PRODUCTS</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive='active'>\n                <a class=\"nav-link s-supp-cr-1 p-3 \" routerLink=\"/admin/blog/all\">BLOG</a>\n            </li>\n            <!-- Dropdown -->\n            <li class=\"nav-item dropdown\" routerLinkActive='active'>\n                <a class=\"nav-link dropdown-toggle s-supp-cr-1 p-3\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    PAGES\n                </a>\n                <div class=\"dropdown-menu s-dark2-bg \" aria-labelledby=\"navbarDropdown\">\n                    <li class=\"nav-item\" routerLinkActive='active'>\n                        <a class=\"nav-link text-center s-supp-cr-1 p-3\" routerLink=\"/admin/home\">HOME</a>\n                    </li>\n                    <li class=\"nav-item\" routerLinkActive='active'>\n                        <a class=\"nav-link text-center s-supp-cr-1 p-3\" routerLink='/admin/about'>ABOUT</a>\n                    </li>\n                    <li class=\"nav-item\" routerLinkActive='active'>\n                        <a class=\"nav-link text-center s-supp-cr-1 p-3\" routerLink='/admin/category-page'>CATEGORY</a>\n                    </li>\n                    <li class=\"nav-item\" routerLinkActive='active'>\n                        <a class=\"nav-link text-center s-supp-cr-1 p-3\" routerLink='/admin/product-page'>PRODUCT</a>\n                    </li>\n                    <li class=\"nav-item\" routerLinkActive='active'>\n                        <a class=\"nav-link text-center s-supp-cr-1 p-3\" routerLink='/admin/contact'>CONTACT</a>\n                    </li>\n                </div>\n            </li>\n            <!-- Logout -->\n            <li class=\"ml-lg-auto mr-lg-5 d-flex align-items-center\">\n                <div (click)='onLogout()' class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                    <button class=\"btn s-logout-btn input-group-text s-icon-btn s-icon-logout s-no-rounded-right s-dark-bg border-0 rounded-left\"></button>\n                    <button class=\"nav-item nav-link s-logout-btn s-white-cr form-control s-temp-btn  my-0  px-3 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\">Logout | <span class='text-uppercase s-supp-cr-1'>{{userName}}</span></button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class='s-under-nav'></div>\n<!-- </section> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-panel/admin-panel.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-panel/admin-panel.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesAdminPanelAdminPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='dashBoardHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <div class='container'>\n        <!-- Prdocut & Categories -->\n        <div class='row mt-4'>\n            <div class='col-lg-6 col-12 mt-1 order-lg-1 order-2'>\n                <div routerLink='/admin/categories' class=\"s-category-box s-categ-main-box-icon s-dark2-bg rounded s-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h1 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>All Categories</p>\n            </div>\n            <div class='col-lg-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/products' class=\"s-category-box s-prod-main-box-icon s-dark2-bg rounded s-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h1 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>All Products</p>\n            </div>\n        </div>\n        <!-- Pages -->\n        <div class='row my-4'>\n            <!-- Category Page -->\n            <div class='col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/category-page'\n                    class=\"s-category-box s-categ-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Category</p>\n            </div>\n            <!-- Product Page -->\n            <div class='col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/product-page'\n                    class=\"s-category-box s-prod-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Product</p>\n            </div>\n        </div>\n        <div class='row my-4'>\n            <!-- home -->\n            <div class='col-lg-3 col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/home' class=\"s-category-box s-home-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Home</p>\n            </div>\n            <!-- about -->\n            <div class='col-lg-3 col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/about' class=\"s-category-box s-about-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>About</p>\n            </div>\n            <!-- Contact -->\n            <div class='col-lg-3 col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/contact' class=\"s-category-box s-contact-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Contact</p>\n            </div>\n            <!-- blog -->\n            <div class='col-lg-3 col-sm-6 col-12 my-1 order-lg-1 order-2'>\n                <div routerLink='/admin/blog/all' class=\"s-category-box s-blog-box-icon s-dark2-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div\n                        class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Blog</p>\n            </div>\n        </div>\n        <!-- create New Account -->\n        <div class='row mt-4'>\n            <div class='col mt-1 order-lg-1 order-2'>\n                <div routerLink='/admin/signup' class=\"s-category-box s-new-admin-box-icon s-admin-box s-green-bg rounded s-small-box mx-1 my-2 d-flex justify-content-center align-items-center p-1\"\n                    data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                    <div class='s-category-box-obacity2 rounded d-flex justify-content-center align-items-center'>\n                    </div>\n                </div>\n                <p class='h3 mt-3 mb-4 text-center s-supp-cr-2 text-uppercase'>Create New Admin</p>\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/admin-tags/admin-tags.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/admin-tags/admin-tags.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesBlogAdminTagsAdminTagsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div id='blogTagsHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'> -->\n    <app-notifications class='position-relative s-make-me-up'></app-notifications>\n    <div class='container'>\n        <div class='row flex-wrap py-3'>\n            <!-- Data -->\n            <div *ngFor='let tag of tags let i = index'  class='col-lg-4 col-md-6 col-12 p-2'>\n                <div #tagBox (mouseenter) =\"showDeleteBtn(delBtn) \"  (mouseleave) =\"HideDeleteBtn(delBtn)\" class='s-tag-box d-flex position-relative overflow-hidden'>\n                    <i (click)='targetTagInp(tagInp)' class='btn h-100 w-25 mr-1 s-dark-bg s-new-tag-icon-box rounded-left'></i>\n                    <input #tagInp (keyup.enter)='updateTags(i)' (blur)='updateTags(i)' [(ngModel)]='tag.tag_name' class='s-no-border s-tag-inp h-100 w-75 p-4 s-dark-bg rounded-right s-supp-cr-2 text-left s-inp-font-larg' placeholder=\"Tag Name...\" type=\"text\">\n                    <i #delBtn (click)='deleteTag(i, delBtn, tagBox)' (mouseenter) =\"fullSizeDeleBtn(delBtn)\" (mouseleave)='showDeleteBtn(delBtn)' class='s-del-tag-btn btn position-absolute bg-danger rounded'></i>\n                </div>\n            </div>\n            <!-- Crate New -->\n            <div class='col-lg-4 col-md-6 col-12 p-2'>\n                <div class='s-tag-box d-flex s-new-tag-box rounded'>\n                    <i (click)='targetTagInp(newTagName)' class='btn h-100 w-25 mr-1 s-dark2-bg s-tag-icon-box rounded-left'></i>\n                    <input #newTagName (keyup.enter)='createNewTag(newTagName.value); emptyNewBtnTag(newTagName)' class='s-no-border s-tag-inp h-100 w-75 p-4 s-dark2-bg rounded-right s-supp-cr-2 text-left s-inp-font-larg' placeholder=\"Tag Name...\" type=\"text\">\n                </div>\n            </div>\n\n        </div>\n    </div>\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/all/all.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/all/all.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesBlogAllAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class='s-topic-holder'> -->\n    <div class='row'>\n        <ng-container *ngIf='topics != \"\"'>\n            <!-- Tool bar -->\n            <div class='container-fluid py-3  position-sticky s-tool-bar-holder s-dark2-bg bg-danger~'>\n                <div class='row rounded shadow-sm'>\n                    <!-- Tag name -->\n                    <div class='col-md-2 col-12 p-0 rounded-left'>\n                        <button class='btn light-yellow-bg s-supp-cr-2~ s-dark-cr rounded-left py-2 px-4 mr-3 s-selected-categ-btns w-100'\n                            [title]='tagName'>{{tagName}}</button>\n                    </div>\n                    <!-- Tags btns -->\n                    <div class='col-md-6 col-12 p-0 my-2 my-md-0 s-supp-bg-1-opt5 position-relative'>\n                        <div class='position-absolute s-supp-bg-1-opt5 s-dash d-none d-md-block'></div>\n                        <div class='s-categories-holder d-flex align-items-center'>\n                            <div class='s-supp-bg-1-opt5 s-dash-right d-none d-md-block px-3'></div>\n                            <button id='allTagsBtn' #allBtn (click)='selectAllTags(); styleTagBtns(allBtn)'\n                                data-btn='tag-btn'\n                                class='btn s-dark-bg s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns s-selected-tag-btn'>All</button>\n                            <button #tagBtn *ngFor='let tag of tags let i = index'\n                                data-btn='tag-btn'\n                                (click)='selectTag(tag._id, tag.tag_name); styleTagBtns(tagBtn)'\n                                class='btn s-dark-bg s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns'>{{tag.tag_name}}</button>\n                            <div class='s-supp-bg-1-opt5 s-dash-right d-none d-md-block pr-3'></div>\n                        </div>\n                        <div class='position-absolute s-supp-bg-1-opt5 s-dash-right d-none d-md-block'></div>\n                    </div>\n                    <!-- search Bar -->\n                    <div class='col p-0 s-supp-bg-1-opt5 rounded-right'>\n                        <div class=\"input-group md-form form-sm form-2 pl-0 s-supp-bg-3~ rounded-right\">\n                            <input class=\"form-control my-0 py-4 px-4 s-dark-bg border-0 s-serach-bar \" type=\"text\" placeholder=\"Search...\"\n                                aria-label=\"Search\" [(ngModel)]='searchValue'>\n                            <div class=\"input-group-append rounded-right\">\n                                <button class=\"btn input-group-text s-search-btn s-dark-bg border-0 rounded-right\"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- All Topics -->\n            <ng-container *ngIf='!selectedTopicsByTag'>\n                <div *ngFor='let topic of topics | filter:searchValue' (click)='clickTopic(topic._id)' class='s-blog-post-box col-12 d-flex flex-md-row flex-column s-dark-bg my-2 p-4 rounded'>\n                    <!-- image -->\n                    <div #sideImageBox [ngStyle]=\"topic.topic_image ? {   \n                        'background-image' :'url('+ blogTopics_service.getUrl(topic.topic_image) + ')',\n                        ' background-repeat': 'no-repeat',\n                        'background-position': 'center',\n                        'background-size': 'cover',\n                        'border': 'none'\n                    }: false\" data-type='side-image-showBox'\n                    class='position-relative s-side-image s-page-opacity rounded s-dark2-bg'>\n                    </div>\n                    <!-- content -->\n                    <div class='p-4 s-blog-post-text-box'>\n                        <p class='h3 s-supp-cr-4'>{{topic.topic_name}}</p>\n                        <ng-container *ngFor='let tag of tags'>\n                            <p *ngIf='tag._id == topic.topic_tag' class='h6 s-main-bg py-1 px-4 rounded s-dark2-cr d-inline-block'>{{tag.tag_name}}</p>\n                        </ng-container>\n                        <article class='s-supp-cr-1' [innerHTML]=topic.topic_content>\n                        </article>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- Topics By Tag -->\n            <ng-container *ngIf='selectedTopicsByTag'>\n                <div *ngFor='let topic of selectedTopicsByTag | filter:searchValue' (click)='clickTopic(topic._id)' class='s-blog-post-box col-12 d-flex s-dark-bg my-2 p-4 rounded'>\n                    <!-- image -->\n                    <div #sideImageBox [ngStyle]=\"topic.topic_image ? {   \n                        'background-image' :'url('+ blogTopics_service.getUrl(topic.topic_image) + ')',\n                        ' background-repeat': 'no-repeat',\n                        'background-position': 'center',\n                        'background-size': 'cover',\n                        'border': 'none'\n                    }: false\" data-type='side-image-showBox'\n                    class='position-relative s-side-image s-page-opacity rounded s-dark2-bg'>\n                    </div>\n                    <!-- content -->\n                    <div class='p-4 s-blog-post-text-box'>\n                        <p class='h3 s-supp-cr-4'>{{topic.topic_name}}</p>\n                        <ng-container *ngFor='let tag of tags'>\n                            <p *ngIf='tag._id == topic.topic_tag' class='h6 s-main-bg py-1 px-4 rounded s-dark2-cr d-inline-block'>{{tag.tag_name}}</p>\n                        </ng-container>\n                        <article class='s-supp-cr-1' [innerHTML]=topic.topic_content>\n                        </article>\n                    </div>\n                </div>\n                <!-- No Topics To show -->\n                <div *ngIf='selectedTopicsByTag == \"\"' class='d-flex flex-column col-12 my-2 p-4 '>\n                    <p class='h3 text-center s-supp-cr-1 mb-4'>No Topics To Show !</p>\n                    <button (click)='createOneOutPut()'\n                        class=\"s-supp-green-bg s-create-one-btn align-self-center px-5 text-center s-temp-btn btn rounded s-supp-cr-4\">Create\n                        One</button>\n                </div>\n            </ng-container>\n        </ng-container>\n        <!-- No Topics To show -->\n        <div *ngIf='topics == \"\"' class='d-flex flex-column col-12 my-2 p-4 '>\n            <p class='h3 text-center s-supp-cr-1 mb-4'>No Topics To Show !</p>\n            <button (click)='createOneOutPut()' class=\"s-supp-green-bg s-create-one-btn align-self-center px-5 text-center s-temp-btn btn rounded s-supp-cr-4\">Create One</button>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/blog.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/blog.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='blogHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <div class='container'>\n        <!-- Head -->\n        <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>Blog<span\n                        class='h3 text-capitalize s-supp-cr-1'> Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n        </div>\n        <!-- navigation -->\n        <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n        <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-md-row flex-column align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\"\n            id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item mr-5 d-lg-block d-none\">\n                <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n            </li>\n            <!-- All -->\n            <li class=\"nav-item mx-2\">\n                <a (click)='refreshAllData(); navigateToBlogState(); resetTagBarAtAll()' class=\"d-flex nav-link s-temp-btn btn rounded s-supp-cr-4 active\" \n                    aria-selected=\"true\" id=\"pills-all-tab\" data-toggle=\"pill\" href=\"#pills-all\"\n                    role=\"tab\" aria-controls=\"pills-all\"><i class='s-icons s-all-icon mr-3'></i>All</a>\n            </li>\n            <!-- New Topic -->\n            <li class=\"nav-item mx-2\">\n                <a (click)='stlyeSummerNote(); getAllTags(); navigateToBlogState()' class=\"d-flex nav-link s-temp-btn btn rounded s-supp-cr-4 \" aria-selected=\"false\" id=\"pills-topic-tab\"\n                    data-toggle=\"pill\" href=\"#pills-topic\" role=\"tab\" aria-controls=\"pills-topic\">\n                    <i class='s-icons mr-3'\n                    [ngStyle]='blogState == \"New Topic\" ? {\n                        \"background-image\": \"url(../../../assets/Icons/admin-blog/new-topic.png)\"\n                    } : {\"background-image\": \"url(../../../assets/Icons/admin-blog/update-topic.png)\"}'\n                    ></i>\n                    {{blogState}}</a>\n            </li>\n            <!-- Tags -->\n            <li class=\"nav-item mx-2\">\n                <a (click)='navigateToBlogState()' class=\"d-flex nav-link s-temp-btn btn rounded s-supp-cr-4 \"\n                    aria-selected=\"false\" id=\"pills-tags-tab\" data-toggle=\"pill\" href=\"#pills-tags\"\n                    role=\"tab\" aria-controls=\"pills-tags\"><i class='s-icons s-tags-icon mr-3'></i>Tags</a>\n            </li>\n            \n        </ul>\n        <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade mx-lg-5 mx-2 show active\" id=\"pills-all\" role=\"tabpanel\" aria-labelledby=\"pills-all-tab\"><app-all (clickTopicEvent)='openUpdateTopic($event)' (createOneEvent)='createOne($event)'></app-all></div>\n            <div class=\"tab-pane mx-lg-5 mx-2 fade\" id=\"pills-topic\" role=\"tabpanel\" aria-labelledby=\"pills-topic-tab\"><app-new-topic (topicIsDel)='navigateToBlogState()'></app-new-topic></div>\n            <div class=\"tab-pane mx-lg-5 mx-2 fade\" id=\"pills-tags\" role=\"tabpanel\" aria-labelledby=\"pills-tags-tab\"><app-admin-tags ></app-admin-tags></div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/new-topic/new-topic.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/new-topic/new-topic.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesBlogNewTopicNewTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-notifications class='position-relative s-make-me-up'></app-notifications>\n<!-- Controller Bar -->\n<div class='nav nav-pill my-3 row s-controller-bar rounded s-dark-bg d-flex' id=\"pills-tab\" role=\"tablist\">\n    <!-- settings button (Settings) -->\n    <div *ngIf='!tap' (click)='toogleTopicTaps()' aria-selected=\"true\" id=\"pills-settings-tab\" data-toggle=\"pill\" href=\"#pills-settings\" role=\"tab\" aria-controls=\"pills-settings\"\n    class='active s-supp-bg-1-opt5  s-btn-tem-h rounded-left d-flex justify-content-center align-items-center s-controller-bar-btns'>\n        <i class='btn s-btn-tem-h s-settings-icon s-icons'></i>\n    </div>\n    <!-- settings button (summernote) -->\n    <div *ngIf='tap' (click)='toogleTopicTaps()' aria-selected=\"false\" id=\"pills-editor-tab\" data-toggle=\"pill\" href=\"#pills-editor\" role=\"tab\" aria-controls=\"pills-editor\"\n    class='s-main-bg s-btn-tem-h rounded-left d-flex justify-content-center align-items-center s-controller-bar-btns'>\n        <i class='btn s-btn-tem-h s-settings-note-icon'></i>\n    </div>\n    <!-- publish -->\n    <button *ngIf='topicState' (click)='createNewTopic(); outPutTopicIsDel(); postCategImg()' class='s-btn-tem-h s-publish-btn btn ml-auto mr-1 s-main-cr px-5 s-supp-bg-1-opt5 d-flex justify-content-center align-items-center'>\n        Publish\n    </button>\n    <button *ngIf='!topicState' (click)='updateTopic(); postCategImg()' class='s-btn-tem-h s-publish-btn btn ml-auto mr-1 s-main-cr px-5 s-supp-bg-1-opt5 d-flex justify-content-center align-items-center'>\n        Update\n    </button>\n    <!-- delete -->\n    <button (click)='deleteTopic();  outPutTopicIsDel()' class='s-btn-tem-h s-del-btn btn p-0 s-supp-bg-1-opt5 rounded-right d-flex justify-content-center align-items-center s-controller-bar-btns'>\n        <i class='btn s-btn-tem-h s-trash-icon s-icons'></i>\n    </button>\n    \n</div>\n<!-- topic body -->\n<div class=\"tab-content s-dark2-bg rounded-bottom s-supp-cr-4\" id=\"pills-tabContent\">\n    <!-- topic settings -->\n    <div id=\"pills-settings\" role=\"tabpanel\" aria-labelledby=\"pills-settings-tab\" class='active show tab-pane fade row mt-4 p-3 s-dark-bg rounded s-topic-body'>\n        <div class='row h-100'>\n            <div class='col-lg-7 col-12 pl-lg-5 d-flex flex-column justify-content-center align-items-center bg-danger~'>\n                <!-- name inp -->\n                <div class=\"input-group mb-3 md-form form-sm form-2 pl-0 rounded\">\n                    <i disabled class=\"btn input-group-text s-icon-btn s-icon-title s-no-rounded-right s-dark2-bg border-0 rounded-left\"></i>\n                    <input id='topicNameInp' type=\"text\" name=\"Section Title\" placeholder=\"Topic Name...\" required [value]='selectedTopic.topic_name ? selectedTopic.topic_name : \"\"'\n                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                </div>\n                <!-- tags -->\n                <div class=\"input-group mb-3 md-form form-sm form-2 pl-0 rounded\">\n                    <i disabled class=\"btn input-group-text s-icon-btn s-icon-tags s-no-rounded-right s-dark2-bg border-0 rounded-left\"></i>\n                    <select #topicTagInp\n                     (change)='selectMe(topicTagInp.value)'\n                      class=\"custom-select form-control s-btn-tem-h  my-0 py-4~ px-4 s-supp-bg-1-opt5 s-supp-cr-2 border-0 rounded-right s-no-rounded-left\" id=\"inputGroupSelect01\"\n                    >\n                        <option [selected]='selectedTopic.topic_tag ? false : true' disabled>Topic Tag...</option>\n                        <option *ngFor='let tag of tags' [value]=\"tag._id\" [selected]='selectedTopic.topic_tag == tag._id'>{{tag.tag_name}}</option>\n                    </select>\n                </div>\n            </div>\n            <!-- image -->\n            <div class=' col-lg-5 col-12 d-flex flex-lg-column justify-content-center align-items-center'>\n                    <div #sideImageBox\n                        [ngStyle]=\"renderedIMG ? {   \n                                    'background-image' :'url('+ renderedIMG + ')',\n                                    ' background-repeat': 'no-repeat',\n                                    'background-position': 'center',\n                                    'background-size': 'cover',\n                                    'border': 'none'\n                                }: false\" data-type='side-image-showBox'\n                        class='position-relative m-2 s-side-image s-page-opacity rounded'>\n                        <input title='Add Image' #topicImageInp type=\"file\" class='s-side-image s-opacity-0 rounded' data-type='side-img-inp'\n                            data-case='NEW'\n                            (change)='readURL($event); selectImage($event, topicImageInp.value)'>\n                    </div>\n            </div>\n            \n        </div>\n    </div>\n    <!-- summernote -->\n    <div id=\"pills-editor\" role=\"tabpanel\" aria-labelledby=\"pills-editor-tab\" class='tab-pane fade row mt-4 p-3 s-white-bg rounded s-topic-body'>\n        <div class=\"summernote\" [ngxSummernote]='config' ></div>\n<!-- <div [ngxSummernoteView]=\"content\"></div> -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category-page/category-page.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category-page/category-page.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesCategoryPageCategoryPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='categoryHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications class='position-relative s-make-me-up'></app-notifications>\n    <div class='container'>\n        <!-- Head -->\n        <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>category <span\n                        class='h3 text-capitalize s-supp-cr-1'>Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n        </div>\n        <!-- Body -->\n        <div *ngIf='isLoaded' class='row'>\n            <div class='col'>\n                <!-- navigation -->\n                <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n                <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-row align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\"\n                    id=\"pills-tab\" role=\"tablist\">\n                    <li class=\"nav-item mr-5 d-lg-block d-none\">\n                        <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n                    </li>\n                    <li *ngFor='let title of sectionTitles let i = index' class=\"nav-item mx-2\">\n                        <a class=\"nav-link s-temp-btn  btn rounded s-nav-btns s-supp-cr-4\" [class.active]='i == 0'\n                            [attr.aria-selected]=\"i == 0 ? true : false\" id=\"pills-home-tab\" data-toggle=\"pill\"\n                            [href]=\"'#tab-' + title\" role=\"tab\" [attr.aria-controls]=\"title\">{{title}}</a>\n                    </li>\n                </ul>\n                <!-- From Control -->\n                <form #f=\"ngForm\" class='w-100' action=\"\">\n                    <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n                        <!-- Slider Section -->\n                        <div class=\"tab-pane fade show mx-lg-5 mx-2 active pb-4\" [attr.id]=\"'tab-' + sectionTitles[0]\"\n                            role=\"tabpanel\" [attr.aria-labelledby]=\"'pills-'+ sectionTitles[0] +'-tab'\">\n                            <!-- Slide 1 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 1</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(slide1Img)' type=\"text\"\n                                        name=\"Section Background Image1\" placeholder=\"Image\" required readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_slides[0].slide_image'\n                                        [class.borderRed]=\"slide1ImgPreview.touched && !slide1ImgPreview.valid\"\n                                         #slide1ImgPreview=\"ngModel\"\n                                        >\n                                    <input (change)='selectImage($event, 0, \"slider\")' (click)='oldImgValue(slide1ImgPreview.value, 0)' #slide1Img\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='category_page_service.data[0].page_slides[0].slide_text'\n                                        name=\"sectionArt\" #sectionArt=\"ngModel\"\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                            <!-- Slide 2 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 2</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input  (click)='sectionImage(slide2Img)' type=\"text\"\n                                        name=\"Section Background Image2\" placeholder=\"Image\" required readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_slides[1].slide_image'\n                                        [class.borderRed]=\"slide2ImgPreview.touched && !slide2ImgPreview.valid\"\n                                        required #slide2ImgPreview=\"ngModel\">\n                                    <input (change)='selectImage($event, 1, \"slider\")' (click)='oldImgValue(slide2ImgPreview.value, 1)' #slide2Img\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='category_page_service.data[0].page_slides[1].slide_text'\n                                     name=\"sectionArt2\" #sectionArt2=\"ngModel\"\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                            <!-- Slide 3 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 3</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input  (click)='sectionImage(slide3Img)' type=\"text\"\n                                        name=\"Section Background Image3\" placeholder=\"Image\" required readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_slides[2].slide_image'\n                                        [class.borderRed]=\"slide3ImgPreview.touched && !slide3ImgPreview.valid\"\n                                        required #slide3ImgPreview=\"ngModel\">\n                                    <input (change)='selectImage($event, 2, \"slider\")' (click)='oldImgValue(slide3ImgPreview.value, 2)' #slide3Img\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='category_page_service.data[0].page_slides[2].slide_text'\n                                        name=\"sectionArt3\" #sectionArt3=\"ngModel\"\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Hot Section -->\n                        <div class=\"tab-pane fade show mx-lg-5 mx-2 pb-4\" [attr.id]=\"'tab-' + sectionTitles[1]\" role=\"tabpanel\"\n                            [attr.aria-labelledby]=\"'pills-'+ sectionTitles[1] +'-tab'\">\n                            <!-- hot 1 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Large Hot Box</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(largBox)' type=\"text\"\n                                        name=\"Section Background Image1\" required #largBoxPreview=\"ngModel\"\n                                        [class.borderRed]=\"largBoxPreview.touched && !largBoxPreview.valid\"\n                                        placeholder=\"Image\" readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[0].box_image'>\n                                    <input (change)='selectImage($event, 0, \"hot\")' (click)='oldImgValue(largBoxPreview.value, 0)' #largBox\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- Category Name -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-category-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input type=\"text\" placeholder=\"Category Name\"\n                                        name=\"Section Title1\" required #categName1=\"ngModel\"\n                                        [class.borderRed]=\"categName1.touched && !categName1.valid\"\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[0].box_name'\n                                        class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                                </div>\n                            </div>\n                            <!-- hot 2 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Small Hot Box 1</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(smallBox1)' type=\"text\" \n                                        name=\"Section Background Imag2\" required #smallBox1Preview=\"ngModel\"\n                                        [class.borderRed]=\"smallBox1Preview.touched && !smallBox1Preview.valid\"\n                                        placeholder=\"Image\" readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[1].box_image'>\n                                    <input (change)='selectImage($event, 1, \"hot\")' #smallBox1 (click)='oldImgValue(smallBox1Preview.value, 1)'\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- Category Name -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-category-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input type=\"text\"  placeholder=\"Category Name\" \n                                         name=\"Section Title2\" required #categName2=\"ngModel\"\n                                        [class.borderRed]=\"categName2.touched && !categName2.valid\"\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[1].box_name'\n                                        class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                                </div>\n                            </div>\n                            <!-- hot 3 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Small Hot Box 2</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(smallBox2)' type=\"text\" name=\"Section Background Image\"\n                                        name=\"Section Background Image3\" required #smallBox2Preview=\"ngModel\"\n                                        [class.borderRed]=\"smallBox2Preview.touched && !smallBox2Preview.valid\"\n                                        placeholder=\"Image\" readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[2].box_image'>\n                                    <input (change)='selectImage($event, 2, \"hot\")' (click)='oldImgValue(smallBox2Preview.value, 2)' #smallBox2\n                                        type=\"file\" class='d-none'>\n                                </div>\n                                <!-- Category Name -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-category-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input type=\"text\"  placeholder=\"Category Name\" required\n                                        name=\"Section Title3\" required #categName3=\"ngModel\"\n                                        [class.borderRed]=\"categName3.touched && !categName3.valid\"\n                                        [(ngModel)]='category_page_service.data[0].page_hot_sec[2].box_name'\n                                        class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Save -->\n                    <div\n                        class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center pt-5\">\n                        <button (click)='updateData(); postImg(); deleteImg()'[disabled]='f.invalid'\n                            class='btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/categories-panel/categories-panel.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/categories-panel/categories-panel.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesCategoryCategoriesPanelCategoriesPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='categorieHolder' class='s-dark-bg'>\n  <div class='container-fluid p-4 s-dark-bg d-flex flex-column'>\n    <app-category-modal class='position-relative' (refrishCategories)='getAllCategories()'></app-category-modal>\n    <div class='row m-0'>\n      <!-- category box -->\n      <ng-container *ngFor='let category of categories let i = index'>\n        <div class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n          <div (click)='openModal(category._id); showSubCategOfCateg(category)'\n          [ngStyle]=\"category.categ_image ? {   \n          'background-image' :'url('+ categ_service.getUrl(category.categ_image)+ ')',\n          ' background-repeat': 'no-repeat',\n          'background-position': 'center',\n          'background-size': 'cover',\n          'border': 'none'\n          }: false\"\n          [class.s-category-box]='category.categ_image'\n          class=\"rounded s-add-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1\" data-toggle=\"modal\"\n            data-cat='addCat' data-target=\"#exampleModalCenter\">\n            <div *ngIf=\"category.categ_image\" class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n              <p class='h1 text-center s-white-cr'>{{category.categ_name}}</p>\n            </div>\n            <button *ngIf=\"!category.categ_image\" class='btn s-add-category-butt align-self-center s-supp-green-cr'>+</button>\n          </div>\n        </div>\n      </ng-container>\n      <!-- No Categories -->\n      <div *ngIf='categories.length <= 1'\n        class='col-lg col-12 s-supp-cr-1 h4 m-0 my-4 m-lg-4 d-flex justify-content-center align-items-center order-lg-2 order-1'>\n        No Categories Yet !\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/category-modal/category-modal.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/category-modal/category-modal.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesCategoryCategoryModalCategoryModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<app-notifications class='position-relative s-make-me-up'></app-notifications>\n<button id='modalOpenBtn' type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\"\n    data-target=\"#categModal\">\n</button>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"categModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl modal-dialog-centered \" role=\"document\">\n        <!-- Content -->\n        <div class=\"modal-content rounded s-dark2-bg\">\n            <!-- Header -->\n            <div class=\"modal-header border-0 s-dark-bg rounded-top shadow-sm d-flex align-items-center p-4\">\n                <h3 *ngIf='!selectedCategory' class='text-center m-auto s-supp-cr-1'>Add Category</h3>\n                <h3 *ngIf='selectedCategory' class='text-center m-auto s-supp-cr-1'>Update Category</h3>\n            </div>\n            <div class='s-modal-holder'>\n                <!-- Body -->\n                <div class=\"modal-body d-flex flex-wrap justify-content-center p-5\">\n                    <!-- form -->\n                    <div class='col-lg col-12 d-flex flex-column justify-content-center order-lg-0 order-1 my-lg-0 my-5'>\n                            <input id='categNameInp' #categoryNameInp class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded\" [value]=\"selectedCategory ? selectedCategory.categ_name :''\" type=\"text\" placeholder=\"Category Name\">\n                            <!-- Sub Categories -->\n                            <button class='btn my-3 s-green-bg s-white-cr rounded btn-lg s-sub-categ-btn' (click)='openSubCategMenu(selectedCategory ? selectedCategory.categ_name : categoryNameInp.value); showSubCategOfCateg(selectedCategory)'>Sub Categories</button>\n                            <app-sub-categories></app-sub-categories>\n                            <div class='row'>\n                                <!-- Cancel if New -->\n                                <div *ngIf='!selectedCategory' class='col pr-0'>\n                                    <button type=\"button\" class=\"btn rounded w-100 mt-5 s-cancel-btn s-supp-cr-1 btn-lg\" (click)='removeModalContent(categoryNameInp, categoryImageInp);' data-dismiss=\"modal\">Cancel</button>      \n                                </div>\n                                <!-- Delete -->\n                                <div *ngIf='selectedCategory' class='col pr-0'>\n                                    <button type=\"button\" class=\"btn rounded w-100 mt-5 s-delete-btn s-supp-cr-1 s-dark2-cr btn-lg\"\n                                        (click)=\"deleteCategory(selectedCategory._id, selectedCategory.categ_image); removeModalContent(categoryNameInp, categoryImageInp)\"\n                                        data-dismiss=\"modal\">Delete</button>\n                                </div>\n                                <!-- Save -->\n                                <div *ngIf='!selectedCategory' class='col pl-3'>\n                                    <button type=\"button\" class=\"btn rounded w-100 mt-5 s-save-btn s-main-bg s-dark2-cr btn-lg\"\n                                    (click)=\"postNewCategory(categoryNameInp.value, categoryImageInp.value); removeModalContent(categoryNameInp, categoryImageInp); postCategImg()\" data-dismiss=\"modal\" >Save</button>\n                                </div>\n                                <!-- Update -->\n                                <div *ngIf='selectedCategory' class='col pl-3'>\n                                    <button type=\"button\" class=\"btn rounded w-100 mt-5 s-save-btn s-main-bg s-dark2-cr btn-lg\"\n                                    (click)=\"updateCategory(selectedCategory._id, categoryNameInp.value, categoryImageInp.value, selectedCategory.categ_image); removeModalContent(categoryNameInp, categoryImageInp); postCategImg()\" data-dismiss=\"modal\" >Update</button>\n                                </div>\n                                <!-- Cancel if Update or Delete -->\n                                <div *ngIf='selectedCategory' class='col-12 mt-3'>\n                                    <button type=\"button\" class=\"btn rounded w-100 s-cancel-btn s-supp-cr-1 btn-lg\" (click)='removeModalContent(categoryNameInp, categoryImageInp);'\n                                        data-dismiss=\"modal\">Cancel</button>\n                                </div>\n                            </div>\n                    </div>\n                    <!-- image -->\n                    <div class='col-lg col-12 d-flex justify-content-center order-lg-1 order-0 px-lg-4 py-lg-5 px-0 py-5'>\n                            <div class='position-relative m-2 s-category-image s-page-opacity rounded'\n                                [ngStyle]=\"imgURL ? {   \n                                'background-image' :'url('+ imgURL + ')',\n                                ' background-repeat': 'no-repeat',\n                                'background-position': 'center',\n                                'background-size': 'cover',\n                                'border': 'none'\n                                }: false\" >\n                                <input id='categImageInp' #categoryImageInp title='Add Image' type=\"file\" class='s-category-image s-opacity-0 rounded' (change)='readURL($event); selectImage($event)'>\n                            </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/sub-categories/sub-categories.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/sub-categories/sub-categories.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesCategorySubCategoriesSubCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button id='modalSubCategOpenBtn' type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\"\n    data-target=\"#subCateg\">\n</button>\n<div class=\"modal fade\" id=\"subCateg\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl modal-dialog-centered \" role=\"document\">\n        <div class=\"modal-content rounded s-dark2-bg\">\n            <!-- Header -->\n            <div class=\"modal-header border-0 s-dark-bg rounded-top shadow-sm d-flex align-items-center p-4\">\n                <h3 class='text-center m-auto s-supp-cr-1'><span class='s-main-cr~ light-yellow-cr text-uppercase'>{{selectesCategName}}</span> | Sub Categories</h3>\n            </div>\n            <div class='s-modal-holder'>\n                <!-- Body -->\n                <div class=\"modal-body pb-5\">\n                    <!-- add new -->\n                    <div class='row p-5 mb-3 position-sticky s-add-new-holder s-dark2-bg'>\n                        <div class='col-12 p-0 rounded'>\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <input #newSubCategInp class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded s-add-new-inp\"\n                                 (keyup.enter)='createSubCategories(newSubCategInp.value); refrishAddInp(newSubCategInp)' type=\"text\" placeholder=\"New Sub Category\">\n                                <div class=\"input-group-append rounded-right\">\n                                    <button (click)='createSubCategories(newSubCategInp.value); refrishAddInp(newSubCategInp)' class=\"btn input-group-text s-add-new-btn s-green-bg border-0 rounded-right\"></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- sub Categories -->\n                    <div class='row px-5'>\n                        <div *ngFor='let subCategory of subCategories let i = index' class='col-12 p-0 mb-3 s-supp-cr-1 rounded'>\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <input #subCategInp class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded s-add-new-inp\" type=\"text\" placeholder=\"Set Name\" [value]='subCategory'\n                                (blur)='updateSubCategName(i, subCategInp.value)' (keyup.enter)='updateSubCategName(i, subCategInp.value)'>\n                                <div class=\"input-group-append rounded-right\">\n                                    <button\n                                       (click)='deleteSubCateg(i)' class=\"btn input-group-text s-sub-categ-delete-btn s-supp-bg-1-opt5 border-0 rounded-right\"></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- footer -->\n            <div class=\"modal-footer px-0\">\n                <!-- Back -->\n                <div class='col-12 my-3 px-5'>\n                    <button type=\"button\" class=\"btn rounded w-100 s-back-btn s-main-bg btn-lg\" (click)='closeModal()'>Back</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/contact-panel/contact-panel.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/contact-panel/contact-panel.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesContactPanelContactPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='contactHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications></app-notifications>\n    <div *ngIf='isloaded' class='container'>\n        <!-- Head -->\n        <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>Contact Us <span class='h3 text-capitalize s-supp-cr-1'>Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n        </div>\n        <!-- Body -->\n        <div class='row'>\n            <div class='col'>\n                <!-- navigation -->\n                <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n                <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-row align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\"\n                    id=\"pills-tab\" role=\"tablist\">\n                    <li class=\"nav-item mr-5 d-lg-block d-none\">\n                        <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n                    </li>\n                    <li *ngFor='let title of sectionTitles let i = index' class=\"nav-item mx-2\">\n                        <a class=\"nav-link s-temp-btn  btn rounded s-nav-btns s-supp-cr-4\" [class.active]='i == 0'\n                            [attr.aria-selected]=\"i == 0 ? true : false\" id=\"pills-home-tab\" data-toggle=\"pill\"\n                            [href]=\"'#tab-' + title\" role=\"tab\"\n                            [attr.aria-controls]=\"title\">{{title}}</a>\n                    </li>\n                </ul>\n                <!-- From Control -->\n                <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n                    <!-- Map Section -->\n                    <div class=\"tab-pane fade show mx-lg-5 mx-2 active pb-4\"\n                    [attr.id]=\"'tab-' + sectionTitles[0]\" role=\"tabpanel\"\n                    [attr.aria-labelledby]=\"'pills-'+ sectionTitles[0] +'-tab'\">\n                        <!-- Google maps  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Google Maps</label>\n                            <!-- Map Src Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-googleMap s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"google Maps Sorce... \" required\n                                    [(ngModel)]='contactSections[0].map_location'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>                                \n                    </div>\n                    <!-- contacts Section -->\n                    <div class=\"tab-pane fade show mx-lg-5 mx-2 pb-4\"\n                    [attr.id]=\"'tab-' + sectionTitles[1]\" role=\"tabpanel\"\n                    [attr.aria-labelledby]=\"'pills-'+ sectionTitles[1] +'-tab'\">\n                    <!-- address inSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Address</label>\n                            <!-- address Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-address s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Company Address\" required [(ngModel)]='contactSections[0].contact_info.address[0]'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                    <!-- Contact Details InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Contact Details</label>\n                            <!--  Contact Details Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-mail s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Company Email...\" required [(ngModel)]='contactSections[0].contact_info.Emails[0]'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                    <!-- phone InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Phone</label>\n                            <!-- Phone inps -->\n                            <div *ngFor='let phoneNumb of contactSections[0].contact_info.phone let i = index'\n                                class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-phone s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #whtsappInps type=\"text\" name=\"Section Title\" placeholder=\"Company Phone...\" required\n                                    [value]='contactSections[0].contact_info.phone[i]'\n                                    (blur)='updateCompanyPhoneNum(i, whtsappInps.value)' (keyup.enter)='updateCompanyPhoneNum(i, whtsappInps.value)'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right~ s-no-rounded-left'>\n                                <div class=\"input-group-append rounded-right\">\n                                    <button (click)='deleteCompanyPhoneNum(i)'\n                                        class=\"btn input-group-text s-delete s-supp-bg-1-opt5 border-0 rounded-right\"></button>\n                                </div>\n                            </div>\n                            <!-- Phone inp // Add new -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3~\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn  s-icon-phone s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #phoneInp type=\"text\" name=\"Section Title\" placeholder=\"Company Phone...\" required\n                                    (keyup.enter)='createNewCompanyPhoneNum(phoneInp.value); refreshAddInp(phoneInp)'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right~ s-no-rounded-left'>\n                                <!-- +BTN -->\n                                <div class=\"input-group-append rounded-right\">\n                                    <button (click)='createNewCompanyPhoneNum(phoneInp.value); refreshAddInp(phoneInp)'\n                                        class=\"btn input-group-text s-green-bg border-0 rounded-right s-add-new\"></button>\n                                </div>\n                            </div>\n                        </div>\n                    <!-- social Media  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Social Media</label>\n                            <!--  faceBook Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-facebook s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Facebook Account...\" required [(ngModel)]='contactSections[0].contact_info.socialMedia[0].facebook'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- twitter inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-twitter s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Twitter Account...\" required [(ngModel)]='contactSections[0].contact_info.socialMedia[1].twitter'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- instagram inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-instagram s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"Instagram Account...\" required [(ngModel)]='contactSections[0].contact_info.socialMedia[2].instagram'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- in inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-in s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"linkedIn Account...\" required [(ngModel)]='contactSections[0].contact_info.socialMedia[3].linkedin'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- telegram inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled class=\"btn input-group-text s-icon-btn s-icon-telegram s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"telegram Number...\" required [(ngModel)]='contactSections[0].contact_info.socialMedia[4].telegram'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- whatsapp inps -->\n                            <div *ngFor='let whatsappNum of contactSections[0].contact_info.socialMedia[5].whatsapp let i = index' class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-whatsapp s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #whtsappInps type=\"text\" name=\"Section Title\" placeholder=\"Whatsapp Number...\" required\n                                    [value]='contactSections[0].contact_info.socialMedia[5].whatsapp[i]'\n                                    (blur)='updateWhatsapp(i, whtsappInps.value)'\n                                    (keyup.enter)='updateWhatsapp(i, whtsappInps.value)'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right~ s-no-rounded-left'>\n                                <div class=\"input-group-append rounded-right\">\n                                    <button (click)='deleteWhtsapp(i)' class=\"btn input-group-text s-delete s-supp-bg-1-opt5 border-0 rounded-right\"></button>\n                                </div>\n                            </div>\n                            <!-- Whatsapp inp // Add new -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-whatsapp s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #whtsappInp type=\"text\" name=\"Section Title\" placeholder=\"Whatsapp Number...\" required\n                                    (keyup.enter)='createNewWhatsappInp(whtsappInp.value); refreshAddInp(whtsappInp)'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right~ s-no-rounded-left'>\n                                <div class=\"input-group-append rounded-right\">\n                                    <button (click)='createNewWhatsappInp(whtsappInp.value); refreshAddInp(whtsappInp)'\n                                        class=\"btn input-group-text s-green-bg border-0 rounded-right s-add-new\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <!-- Emails Section -->\n                    <div class=\"tab-pane fade show mx-lg-5 mx-2 pb-4\"\n                    [attr.id]=\"'tab-' + sectionTitles[2]\" role=\"tabpanel\"\n                    [attr.aria-labelledby]=\"'pills-'+ sectionTitles[2] +'-tab'\">\n                        <!-- Support Account  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Support Account</label>\n                            <!-- Support Account Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded \">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-support-account s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"mail@example.com...\" required\n                                    [value]=''\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                        <!-- suggestions Account  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Suggestions Account</label>\n                            <!-- Support Account Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-suggestions-account s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"mail@example.com...\" required\n                                    [value]=''\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                        <!-- Complaints Account  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Complaints Account</label>\n                            <!-- Complaints Account Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-complaints-account s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"mail@example.com...\" required\n                                    [value]=''\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                        <!-- Inquiries Account  InSec -->\n                        <div class='my-2'>\n                            <label class='my-2 s-supp-cr-1' for=\"\">Inquiries Account</label>\n                            <!-- Inquiries Account Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-inquiries-account s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input #sectionTitle type=\"text\" name=\"Section Title\" placeholder=\"mail@example.com...\" required\n                                    [value]=''\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Save -->\n                <div class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center py-5\">\n                    <button (click)='updateData()'\n                        class='btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/home-panel/home-panel.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/home-panel/home-panel.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesHomePanelHomePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='homeHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications></app-notifications>\n    <div *ngIf='isloaded' class='container'>\n        <!-- Head -->\n        <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>Home<span class='h3 text-capitalize s-supp-cr-1'> Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n        </div>\n        <!-- Body -->\n        <div class='row'>\n            <div class='col'>\n                <!-- navigation -->\n                <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n                <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-row align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\"\n                    id=\"pills-tab\" role=\"tablist\">\n                    <li class=\"nav-item mr-5 d-lg-block d-none\">\n                        <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n                    </li>\n                    <li *ngFor='let title of sectionTitles let i = index' class=\"nav-item mx-2\">\n                        <a class=\"nav-link s-temp-btn  btn rounded s-nav-btns s-supp-cr-4\" [class.active]='i == 0'\n                            [attr.aria-selected]=\"i == 0 ? true : false\" id=\"pills-home-tab\" data-toggle=\"pill\"\n                            [href]=\"'#tab-' + title\" role=\"tab\" [attr.aria-controls]=\"title\">{{title}}</a>\n                    </li>\n                </ul>\n                <!-- From Control -->\n                <form #f=\"ngForm\" class='w-100' action=\"\">\n                    <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n                        <!-- Video Section -->\n                        <div class=\"tab-pane fade show mx-lg-5 mx-2 active pb-4\" [attr.id]=\"'tab-' + sectionTitles[0]\" role=\"tabpanel\"\n                            [attr.aria-labelledby]=\"'pills-'+ sectionTitles[0] +'-tab'\">\n                            <!-- youtube Vdeio InSec -->\n                            <div *ngIf='isloaded' class='my-2'>\n                                <label class='my-2 s-supp-cr-1' for=\"\">YouTube video</label>\n                                <!-- video Src Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-video s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input type=\"text\" name=\"Section Title\" placeholder=\"YouTube Video...\" required\n                                        [pattern]=\"va_serv.urlRegex\"\n                                        [class.borderRed]=\"sectionTitle.touched && !sectionTitle.valid\"\n                                        ngModel required #sectionTitle=\"ngModel\"\n                                        [(ngModel)]='data[0].page_video'\n                                        class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Save -->\n                    <div class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center pt-5\">\n                        <button (click)='updateData()'\n                            [disabled]='f.invalid'\n                            class='btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product-page/product-page.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product-page/product-page.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesProductPageProductPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='productHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications class='position-relative s-make-me-up'></app-notifications>\n    <div  class='container'>\n        <!-- Head -->\n        <div class='row'>\n            <div class='col'>\n                <p class='h1 pt-4 px-5 s-supp-cr-2 text-uppercase text-lg-left text-center'>Product <span class='h3 text-capitalize s-supp-cr-1'>Page</span></p>\n                <hr class='s-dark2-bg mx-5 my-4'>\n            </div>\n        </div>\n        <!-- Body -->\n        <div *ngIf='isloaded' class='row'>\n            <div class='col'>\n                <!-- navigation -->\n                <p class=\"nav-link s-supp-cr-1 lead m-0 pb-4 d-block d-lg-none text-center\">SECTIONS</p>\n                <ul class=\"px-5 nav nav-pills mb-3 s-dark2-bg d-flex flex-row align-items-center py-4 px-0 rounded-top justify-content-lg-start justify-content-center\"\n                    id=\"pills-tab\" role=\"tablist\">\n                    <li class=\"nav-item mr-5 d-lg-block d-none\">\n                        <p class=\"nav-link s-supp-cr-1 lead m-0\">SECTIONS</p>\n                    </li>\n                    <li *ngFor='let title of sectionTitles let i = index' class=\"nav-item mx-2\">\n                        <a class=\"nav-link s-temp-btn  btn rounded s-nav-btns s-supp-cr-4\" [class.active]='i == 0'\n                            [attr.aria-selected]=\"i == 0 ? true : false\" id=\"pills-home-tab\" data-toggle=\"pill\"\n                            [href]=\"'#tab-' + title\" role=\"tab\" [attr.aria-controls]=\"title\">{{title}}</a>\n                    </li>\n                </ul>\n                <!-- From Control -->\n                <form #f=\"ngForm\" class='w-100' action=\"\">\n                    <div class=\"tab-content s-dark2-bg rounded-bottom p-4 s-supp-cr-4\" id=\"pills-tabContent\">\n                        <!-- Slider Section -->\n                        <div class=\"tab-pane fade show mx-lg-5 mx-2 active pb-4\" [attr.id]=\"'tab-' + sectionTitles[0]\"\n                            role=\"tabpanel\" [attr.aria-labelledby]=\"'pills-'+ sectionTitles[0] +'-tab'\">\n                            <!-- Slide 1 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 1</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(slide1Img)' type=\"text\"\n                                        placeholder=\"Image\" readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        name=\"slide1ImgPreview\" required #slide1ImgPreview=\"ngModel\"\n                                        [class.borderRed]=\"slide1ImgPreview.touched && !slide1ImgPreview.valid\"\n                                        [(ngModel)]='data[0].page_slides[0].slide_image'>\n                                    <input (change)='selectImage($event, 0, \"slider\")' (click)='oldImgValue(slide1ImgPreview.value, 0)' #slide1Img type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='data[0].page_slides[0].slide_text' #sectionArt\n                                        name='sectionArt'\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                            <!-- Slide 2 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 2</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(slide2Img)' type=\"text\"\n                                        placeholder=\"Image\" readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        name=\"slide2ImgPreview\" required #slide2ImgPreview=\"ngModel\"\n                                        [class.borderRed]=\"slide2ImgPreview.touched && !slide2ImgPreview.valid\"\n                                        [(ngModel)]='data[0].page_slides[1].slide_image'>\n                                    <input (change)='selectImage($event, 1, \"slider\")' (click)='oldImgValue(slide2ImgPreview.value, 1)' #slide2Img type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='data[0].page_slides[1].slide_text' #sectionArt\n                                        name='sectionArt2'\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                            <!-- Slide 3 InSec -->\n                            <div class='my-2'>\n                                <!-- Section Background image -->\n                                <label class='my-2 s-supp-cr-1' for=\"\">Slide 3</label>\n                                <!-- section Background Image Inp -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <input (click)='sectionImage(slide3Img)' type=\"text\"\n                                        name=\"slide3ImgPreview\" #slide3ImgPreview=\"ngModel\"\n                                        [class.borderRed]=\"slide3ImgPreview.touched && !slide3ImgPreview.valid\"\n                                        placeholder=\"Image\" required readonly\n                                        class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                        [(ngModel)]='data[0].page_slides[2].slide_image'>\n                                    <input (change)='selectImage($event, 2, \"slider\")' (click)='oldImgValue(slide3ImgPreview.value, 2)' #slide3Img type=\"file\" class='d-none'>\n                                </div>\n                                <!-- section text -->\n                                <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                    <i disabled\n                                        class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                    <textarea [(ngModel)]='data[0].page_slides[2].slide_text' #sectionArt\n                                        name='sectionArt3'\n                                        class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                        placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Hot Section -->\n                    <div class=\"tab-pane fade show mx-lg-5 mx-2 pb-4\" [attr.id]=\"'tab-' + sectionTitles[1]\" role=\"tabpanel\"\n                        [attr.aria-labelledby]=\"'pills-'+ sectionTitles[1] +'-tab'\">\n                        <!-- hot 1 InSec -->\n                        <div class='my-2'>\n                            <!-- Section Background image -->\n                            <label class='my-2 s-supp-cr-1' for=\"\">Large Hot Box</label>\n                            <!-- section Background Image Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input (click)='sectionImage(largBox)' type=\"text\"\n                                    name=\"largBoxPreview\" required #largBoxPreview=\"ngModel\"\n                                    [class.borderRed]=\"largBoxPreview.touched && !largBoxPreview.valid\"\n                                    placeholder=\"Image\" readonly\n                                    class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                    [(ngModel)]='data[0].page_hot_sec[0].box_image'>\n                                <input (change)='selectImage($event, 0, \"hot\")' (click)='oldImgValue(largBoxPreview.value, 0)' #largBox\n                                    type=\"file\" class='d-none'>\n                            </div>\n                            <!-- product Name -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-name s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input type=\"text\" placeholder=\"Product Name\"\n                                    name=\"prodName1\" required #prodName1=\"ngModel\"\n                                    [class.borderRed]=\"prodName1.touched && !prodName1.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[0].box_name'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- product Id -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input  type=\"text\" placeholder=\"Product ID\"\n                                    name=\"prodId1\" required #prodId1=\"ngModel\"\n                                    [class.borderRed]=\"prodId1.touched && !prodId1.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[0].box_prodID'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- section text -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-art s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <textarea [(ngModel)]='data[0].page_hot_sec[0].box_desc' #hotArt\n                                    name='hotArt'\n                                    class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left\"\n                                    placeholder=\"Type Here The Slid Text...\" rows=\"2\"></textarea>\n                            </div>\n                    \n                        </div>\n                        <!-- hot 2 InSec -->\n                        <div class='my-2'>\n                            <!-- Section Background image -->\n                            <label class='my-2 s-supp-cr-1' for=\"\">Small Hot Box 1</label>\n                            <!-- section Background Image Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input (click)='sectionImage(smallBox1)' type=\"text\"\n                                    placeholder=\"Image\" readonly\n                                    name=\"smallBox1Preview\" required #smallBox1Preview=\"ngModel\"\n                                    [class.borderRed]=\"smallBox1Preview.touched && !smallBox1Preview.valid\"\n                                    class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                    [(ngModel)]='data[0].page_hot_sec[1].box_image'>\n                                <input (change)='selectImage($event, 1, \"hot\")' (click)='oldImgValue(smallBox1Preview.value, 1)' #smallBox1\n                                    type=\"file\" class='d-none'>\n                            </div>\n                            <!-- product Name -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-name s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input type=\"text\" placeholder=\"Product Name\"\n                                    name=\"prodName2\" required #prodName2=\"ngModel\"\n                                    [class.borderRed]=\"prodName2.touched && !prodName2.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[1].box_name'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- product Id -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input type=\"text\" placeholder=\"Product ID\" \n                                    name=\"prodId2\" required #prodId2=\"ngModel\"\n                                    [class.borderRed]=\"prodId2.touched && !prodId2.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[1].box_prodID'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                        <!-- hot 3 InSec -->\n                        <div class='my-2'>\n                            <!-- Section Background image -->\n                            <label class='my-2 s-supp-cr-1' for=\"\">Small Hot Box 2</label>\n                            <!-- section Background Image Inp -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-image s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input (click)='sectionImage(smallBox2)' type=\"text\"\n                                    placeholder=\"Image\"  readonly\n                                    name=\"smallBox2Preview\" required #smallBox2Preview=\"ngModel\"\n                                    [class.borderRed]=\"smallBox2Preview.touched && !smallBox2Preview.valid\"\n                                    class='s-img-inp form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                                    [(ngModel)]='data[0].page_hot_sec[2].box_image'>\n                                <input (change)='selectImage($event, 2, \"hot\")' (click)='oldImgValue(smallBox2Preview.value, 2)' #smallBox2\n                                    type=\"file\" class='d-none'>\n                            </div>\n                            <!-- product Name -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-name s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input type=\"text\" placeholder=\"Product Name\"\n                                     name=\"prodName3\" required #prodName3=\"ngModel\"\n                                    [class.borderRed]=\"prodName3.touched && !prodName3.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[2].box_name'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                            <!-- product Id -->\n                            <div class=\"input-group md-form form-sm form-2 pl-0 rounded mb-3\">\n                                <i disabled\n                                    class=\"btn input-group-text s-icon-btn s-icon-product-id s-no-rounded-right s-dark-bg border-0 rounded-left\"></i>\n                                <input  type=\"text\" placeholder=\"Product ID\" \n                                    name=\"prodId3\" required #prodId3=\"ngModel\"\n                                    [class.borderRed]=\"prodId3.touched && !prodId3.valid\"\n                                    [(ngModel)]='data[0].page_hot_sec[2].box_prodID'\n                                    class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                    <!-- Save -->\n                    <div\n                        class=\"input-group md-form form-sm form-2 pl-0 d-flex justify-content-lg-end justify-content-center pt-5\">\n                        <button (click)='updateData(); postImg(); deleteImg()'\n                            [disabled]='f.invalid'\n                            class='btn s-btn-tem-h s-save-btn mx-1 px-5 input-group-text border-0 s-supp-bg-1-opt5 s-main-cr rounded'>Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-color/product-color.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-color/product-color.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesProductProductColorProductColorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"pageLoad\" id='colorHolder' class=' row h-100'>\n    <!-- Colors -->\n    <div class='col-lg col-12 p-lg-0 p-3 d-flex flex-column flex-lg-row order-lg-0 order-1 justify-content-center align-items-center'>\n        <div id='colorHolder' class='bg-warning~ s-side-imgs-holder d-flex flex-lg-column flex-row justify-content-center align-items-center '>\n            <div  *ngFor='let productColor of productColors' [style.background]=\"productColor.prod_color ? productColor.prod_color : false\" class='m-2 s-product-color s-supp-green-bg' [class.s-page-opacity]='!productColor.prod_color' [class.s-border-select]='productColor.prod_color' [class.s-selected]='colorInp == selectedColorBtn'>\n                <input title='Add Color' #colorInp type='color' class='s-product-color s-opacity-0' data-type='color-btn' value='#FFFFFF' (mouseenter)='HoverColorBtn(colorInp)' (mouseleave)='deHoverColorBtn()' (click)='fadInSideImg(sideImge); fadInColor(colorInp); newColor(colorInp); selectColorBtn(colorInp)' (change)='pickColor(productColor, colorInp.value)'>\n            </div >\n        </div>\n        <!-- delete color  -->\n        <div id='deleteColorHolder' class=' s-side-imgs-holder d-flex flex-lg-column flex-row justify-content-center align-items-center '>\n            <ng-container *ngFor='let productColor of productColors; let i = index '>\n            <button title='Delete' [class.s-opacity-0]='i != HoverColorBtnIndex || i == productColors.length-1' [class.invisible]='i == productColors.length-1' [class.s-page-opacity]='i == selectedColorBtnIndex' class='btn m-2 s-product-color-del' (click)='deleteColor()'  data-type='delete-color-btn' data-case='delete' ></button>\n            </ng-container>\n        </div>\n    </div>\n    <!-- side images -->\n    <div id='sideImageCol' class='col-lg col-12 d-flex order-lg-1 order-0 justify-content-center align-items-center'>\n        <!-- slider holder -->\n        <div *ngIf='productColors.length != 1' id='sideImgHolder' class='s-side-imgs-holder d-flex flex-lg-column flex-row justify-content-center align-items-center '>\n            <div #sideImageBox *ngFor='let side_img of productColors[selectedColorBtnIndex].prod_images; let i = index'\n                [ngStyle]=\"side_img.prod_side_img ? {   \n                    'background-image' :'url('+ pro_service.getUrl(side_img.prod_side_img) + ')',\n                    ' background-repeat': 'no-repeat',\n                    'background-position': 'center',\n                    'background-size': 'cover',\n                    'border': 'none'\n                }: false\" \n                @fade\n                data-type='side-image-showBox'\n                class='position-relative m-2 s-side-image s-page-opacity rounded' (mouseenter)='HoverSideImage(sideImageBox)' (mouseleave)='deHoverSideImage()'>\n                <input title='Add Image' #sideImge type=\"file\" class='s-side-image s-opacity-0 rounded' data-type='side-img-inp' data-case='NEW' (change)='fadInSideImg(sideImge); newSideImg($event, sideImge); updateSideImage($event, side_img); postImg()'>\n                <!-- delete SideImage -->\n                <button title='Delete' #sideImageDelBtn [class.s-opacity-0]=' i != HoverSideImgeShowBoxIndex || i == productColors[selectedColorBtnIndex].prod_images.length-1' \n                        [class.s-page-opacity]='i != productColors[selectedColorBtnIndex].prod_images.length-1 && i == HoverSideImgeShowBoxIndex' \n                        [class.invisible]='i == productColors[selectedColorBtnIndex].prod_images.length-1'\n                        class='bg-danger s-side-image-delete rounded-bottom btn'\n                        [style.bottom]='selectedSideImgeDelBtn == sideImageDelBtn ? 0 : \"-35px\"'\n                        (mouseenter)='showDeleteSideImageBtn(sideImageDelBtn)'  (mouseleave)= hideDeleteSideImageBtn()\n                        (click)='deleteSideImage(i)'>\n                </button>\n            </div>\n        </div>\n        <div class='text-center' *ngIf='productColors.length == 1'>\n            <h3 class='text-center'>No Colors Yet !</h3>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-menu/product-menu.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-menu/product-menu.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesProductProductMenuProductMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button id='openMenuBtn' type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n    Launch demo modal\n</button>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl modal-dialog-centered \" role=\"document\">\n        <!-- Content -->\n        <div class=\"modal-content rounded animate-bottom s-dark2-bg\">\n            <!-- Header -->\n            <div class=\"modal-header border-0 s-dark-bg rounded-top shadow-sm d-flex align-items-center\">\n                <!-- Categories Products Switcher -->\n                <button type=\"button\" class=\"btn s-main-bg rounded py-2 px-4 mr-3\" (click)='switchProdOrCateg()'>{{prodOrCateg}}</button>\n                <!-- Search Bar -->\n                <div class=\"input-group md-form form-sm form-2 pl-0 s-supp-bg-1-opt5 rounded\">\n                    <input class=\"form-control my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-left\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]='searchValue'>\n                    <div class=\"input-group-append rounded-right\">\n                        <button class=\"btn input-group-text s-search-btn s-supp-bg-1-opt5 border-0 rounded-right\"></button>\n                    </div>\n                </div>\n            </div>\n            <!-- Products -->\n            <div *ngIf='prodOrCateg == \"Categories\"' class='s-modal-holder'>\n                <div class='s-supp-bg-1 shadow-sm s-category-name text-center py-2 px-5 rounded-bottom position-sticky mx-auto mt-4'>{{CategoryName}}</div>\n                <!-- sub Categories -->\n                <div *ngIf='productsByCategories != \"\"' class='row mx-5 mt-3'>\n                    <div class='col-12 position-relative'>\n                        <div class='position-absolute s-dash d-none d-md-block s-dark2-bg'></div>\n                        <div class='s-sub-categories-holder d-flex align-items-center pl-5'>\n                            <div class=' d-flex m-auto'>\n                                <button (click)='selectAllSubCategories()'\n                                data-select='false'\n                                [class.s-sub-categories-selected_btns]='productBySubCateg == \"\"'\n                                class='btn s-dark-bg s-supp-cr-1 rounded py-2 px-4 mr-3 s-sub-categories-btns'>All</button>\n                                <button *ngFor='let subCategories of selectedSubCategOfCateg let i = index'\n                                (click)='selectProdsOfSubCateg(subCategories)'\n                                data-select='false'\n                                class='btn s-dark-bg s-supp-cr-1 rounded py-2 px-4 mr-3 s-sub-categories-btns'>{{subCategories}}</button>\n                                    <div class='s-dash-right px-3 d-none d-md-block s-dark2-bg'></div>\n                            </div>\n                        </div>\n                        <div class='position-absolute s-dash-right d-none d-md-block s-dark2-bg'></div>\n                    </div>\n                </div>\n                <div  class=\"modal-body d-flex flex-wrap justify-content-center\">\n                    <!-- All Products -->\n                    <ng-container *ngIf='productsByCategories == \"\"'>\n                        <div *ngFor='let product of products | filter:searchValue'\n                            class=\"text-center m-2 s-supp-bg-1-opt5 s-product-box-holder  rounded position-relative\"\n                            (click)='outputProductId(product._id)' data-dismiss=\"modal\">\n                            <div [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n                                    'background-image' :'url('+ pro_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n                                } : false\" class=\"card-img-top s-product-box rounded-top shadow-sm m-auto \"></div>\n                            <p class='s-product-title position-absolute s-supp-cr-1 lead text-center s-white-50-bg~ s-dark-50-bg m-0 py-2 rounded-bottom'>{{product.prod_name}}</p>\n                        </div>\n                    </ng-container>\n                    <!-- Products by Categories -->\n                    <ng-container *ngIf='productsByCategories != \"\" && productBySubCateg == \"\" '>\n                        <div *ngFor='let product of productsByCategories | filter:searchValue'\n                            class=\"text-center m-2 s-supp-bg-1-opt5 s-product-box-holder  rounded position-relative\"\n                            (click)='outputProductId(product._id)' data-dismiss=\"modal\">\n                            <div [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n                                    'background-image' :'url('+ pro_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n                                } : false\" class=\"card-img-top s-product-box rounded-top shadow-sm m-auto \"></div>\n                            <p class='s-product-title position-absolute s-supp-cr-1 lead text-center s-white-50-bg~ s-dark-50-bg m-0 py-2 rounded-bottom'>{{product.prod_name}}</p>\n                        </div>\n                    </ng-container>\n                    <!-- Products by sub Categories -->\n                    <ng-container *ngIf='productsByCategories != \"\" && productBySubCateg != \"\"  '>\n                        <div *ngFor='let product of productBySubCateg | filter:searchValue'\n                            class=\"text-center m-2 s-supp-bg-1-opt5 s-product-box-holder  rounded position-relative\"\n                            (click)='outputProductId(product._id)' data-dismiss=\"modal\">\n                            <div [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n                                    'background-image' :'url('+ pro_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n                                } : false\" class=\"card-img-top s-product-box rounded-top shadow-sm m-auto \"></div>\n                            <p class='s-product-title position-absolute s-supp-cr-1 lead text-center s-white-50-bg~ s-dark-50-bg m-0 py-2 rounded-bottom'>{{product.prod_name}}</p>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n            <!-- categories -->\n            <div *ngIf='prodOrCateg == \"Products\"' class='s-modal-holder'>\n                <div  class=\"modal-body d-flex flex-wrap justify-content-center\">\n                    <ng-container *ngFor='let category of categories | filter:searchValue let i = index'>\n                        <!-- All Categories -->\n                        <div *ngIf='i <= 0' class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n                            <div (click)='selectAllCategory() ; switchProdOrCateg()'\n                                class=\"rounded s-add-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1 s-all-Categories s-category-box\">\n                                <div class='s-all-categories-box-obacity rounded d-flex justify-content-center align-items-center'>\n                                    <p class='h1 text-center s-white-cr'>All</p>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Category Box -->\n                        <div class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n                            <div \n                            (click)='selectCategory(category._id, category.categ_name); switchProdOrCateg(); selectSubCategOfCateg(category.sub_categories) '\n                            [ngStyle]=\"category.categ_image ? {   \n                            'background-image' :'url('+ categ_service.getUrl(category.categ_image) + ')',\n                            ' background-repeat': 'no-repeat',\n                            'background-position': 'center',\n                            'background-size': 'cover',\n                            'border': 'none'\n                            }: false\" [class.s-category-box]='category.categ_image'\n                            class=\"rounded s-add-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1\">\n                                <div class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                                    <p class='h1 text-center s-white-cr'>{{category.categ_name}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n            </div> -->\n        </div>\n    </div>\n</div>\n<!-- ng-container -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-panel/product-panel.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-panel/product-panel.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPagesProductProductPanelProductPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='productsHolder' class='container-fluid s-dark-bg p-4 d-flex flex-column'>\n    <app-notifications></app-notifications>\n    <app-product-menu (selectProductId)='getProductById($event)'></app-product-menu>\n    <!-- Product ((Name)) {{ROW}} -->\n    <div class='row justify-content-center p-lg-5 p-4'>\n        <div class='col-lg-4 col-md-6 col'>\n            <input id='productNameInp' #productNameInp title='Procuct Name' class='text-center p-3 h4 s-product-named-inp s-no-border s-supp-cr-1' type=\"text\"\n                placeholder='Product Name' [value]='product.prod_name ? product.prod_name : \"\"'>\n        </div>\n    </div>\n    <!-- Product ((Info)) {{ROW}} -->\n    <div class='row flex-fill'>\n        <!-- Description and Categorys [1]-->\n        <div class='col-lg col-12 s-supp-cr-1 p-4 d-flex flex-column order-lg-0 order-2'>\n            <!-- Description -->\n            <div class='row'>\n                <div class='col'>\n                    <p class='h5 text-center text-lg-left p-3 p-lg-0'>Description</p>\n                    <textarea id='productDescInp' #productDescInp title='Procuct Description' rows=\"6\" class='s-desc-text-area s-no-border s-supp-cr-1 p-4 lead'\n                        placeholder=\"Type the product description here !\" [value]='product.prod_desc ? product.prod_desc : \"\"'>    \n                    </textarea>\n                </div>\n            </div>\n            <!-- Categorys -->\n            <div class='row p-3 m-3~'>\n                <div class='col d-flex justify-content-lg-end justify-content-center p-lg-0'>\n                    <!-- Price -->\n                    <div class=\"s-temp-btn input-group md-form form-sm form-2 pl-0 rounded mr-4\">\n                        <i disabled class=\"btn input-group-text s-icon-btn s-icon-price s-no-rounded-right light-yellow-bg border-0 rounded-left\"></i>\n                        <input id='costInp' #cost type=\"number\" name=\"Product Price\" placeholder=\"0.00$\" required\n                            [value]='product.price ? product.price.cost : \"\"'\n                            class='form-control s-temp-btn my-0 px-4 s-supp-bg-1-opt5 border-0 s-no-rounded-left s-supp-cr-1'>\n                        <!-- $/LE btn -->\n                        <div class=\"input-group-append rounded-right\">\n                            <input id='costTagInp' #costTag type='text'\n                                [value]='product.price ? product.price.tag : \"\"'\n                                class=\"btn input-group-text s-desc-text-area border-0 rounded-right s-add-new s-supp-cr-1\" placeholder=\"$/LE\">\n                        </div>\n                    </div>\n                    <!-- Switch Category -->\n                    <div *ngIf='selectedCategory' class='s-temp-btn s-page-opacity rounded s-drop-item my-1 dropdown s-category-switch-btn' id=\"dropdownMenuLink\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <div class='h-100 w-100 d-flex justify-content-center align-items-center p-1 rounded' [ngStyle]=\"selectedCategory.categ_image ? {   \n                        'background-image' :'url('+ categ_service.getUrl(selectedCategory.categ_image) + ')',\n                        ' background-repeat': 'no-repeat',\n                        'background-position': 'center',\n                        'background-size': 'cover',\n                        'border': 'none'\n                        }: false\">\n                            <div class='s-category-box-obacity d-flex justify-content-center align-items-center rounded px-2'>\n                                <p class='text-center s-white-cr m-0'>{{selectedCategory.categ_name}}</p>\n                            </div>\n                            <!-- dropdwon menu -->\n                            <div class=\"dropdown-menu s-categories-dropdown s-dark2-bg rounded\" aria-labelledby=\"dropdownMenuLink\">\n                                <div *ngFor='let category of categories' class='row s-drop-item my-1' (click)='selectCategory(category)'>\n                                    <div class='h-100 w-100 d-flex justify-content-center align-items-center p-1' [ngStyle]=\"category.categ_image ? {   \n                                    'background-image' :'url('+ categ_service.getUrl(category.categ_image) + ')',\n                                    ' background-repeat': 'no-repeat',\n                                    'background-position': 'center',\n                                    'background-size': 'cover',\n                                    'border': 'none'\n                                    }: false\">\n                                        <div class='s-category-box-obacity d-flex justify-content-center align-items-center'>\n                                            <p class='text-center s-white-cr m-0'>{{category.categ_name}}</p>\n                                        </div>\n                                    </div>\n                            \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Add Category -->\n                    <div *ngIf='!selectedCategory' class='s-temp-btn s-page-opacity btn rounded light-yellow-bg py-0 pl-0 border-0 d-flex align-items-center dropdown'\n                    id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <div class='s-category-btn-icon s-supp-green-bg rounded-left mr-2 d-flex align-items-center justify-content-center'>\n                            <img src=\"/assets/Icons/admin-products/add.png\" width='15' height='15'>\n                        </div>\n                        Category\n                        <!-- dropdwon menu -->\n                        <div class=\"dropdown-menu s-categories-dropdown s-dark2-bg rounded\" aria-labelledby=\"dropdownMenuLink\">\n                            <div *ngFor='let category of categories' class='row s-drop-item my-1' (click)='selectCategory(category)'>\n                                <div class='h-100 w-100 d-flex justify-content-center align-items-center p-1'\n                                [ngStyle]=\"category.categ_image ? {   \n                                'background-image' :'url('+ categ_service.getUrl(category.categ_image) + ')',\n                                ' background-repeat': 'no-repeat',\n                                'background-position': 'center',\n                                'background-size': 'cover',\n                                'border': 'none'\n                                }: false\"\n                                >\n                                <div class='s-category-box-obacity d-flex justify-content-center align-items-center'>\n                                    <p class='text-center s-white-cr m-0'>{{category.categ_name}}</p>\n                                </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n                   \n                </div>\n            </div>\n            <!-- Sub Categories  -->\n            <div class='row px-3 justify-content-lg-end justify-content-center'>\n                <!-- Add Sub Categories -->\n                <div *ngIf='selectedCategory && !selectedSubCategory'\n                    class='s-page-opacity btn rounded light-yellow-bg py-0 pl-0 border-0 d-flex align-items-center dropdown s-temp-btn'\n                    id=\"subCategoriesDropDown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <div\n                        class='s-category-btn-icon s-supp-green-bg rounded-left mr-3 d-flex align-items-center justify-content-center'>\n                        <img src=\"/assets/Icons/admin-products/add.png\" width='15' height='15'>\n                    </div>\n                        Sub Categories\n                    <!-- dropdwon menu -->\n                    <div class=\"dropdown-menu s-categories-dropdown s-dark2-bg rounded\" aria-labelledby=\"subCategoriesDropDown\">\n                        <div *ngFor='let subCategory of selectedCategory.sub_categories' class='row s-drop-item my-1' (click)='selectSubCategory(subCategory)'>\n                            <div class='h-100 w-100 d-flex justify-content-center align-items-center p-1'>\n                                <div class='d-flex justify-content-center align-items-center'>\n                                    <p class='text-center s-white-cr m-0'>{{subCategory}}</p>\n                                </div>\n                            </div>\n                    \n                        </div>\n                    </div>\n                </div>\n                <!-- Update sub Categories -->\n                <div *ngIf='selectedCategory && selectedSubCategory'\n                    class='s-page-opacity btn rounded light-yellow-bg py-0 border-0 d-flex align-items-center dropdown s-temp-btn'\n                    id=\"subCategoriesDropDown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <div class=' px-3 text-center'>\n                        {{selectedSubCategory}}\n                    </div>\n                    <!-- dropdwon menu -->\n                    <div class=\"dropdown-menu s-categories-dropdown s-dark2-bg rounded\" aria-labelledby=\"subCategoriesDropDown\">\n                        <div *ngFor='let subCategory of selectedCategory.sub_categories' class='row s-drop-item my-1'\n                            (click)='selectSubCategory(subCategory)'>\n                            <div class='h-100 w-100 d-flex justify-content-center align-items-center p-1'>\n                                <div class='d-flex justify-content-center align-items-center'>\n                                    <p class='text-center s-white-cr m-0'>{{subCategory}}</p>\n                                </div>\n                            </div>\n                \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Products Main Image  [2]-->\n        <div\n            class='col-lg col-12 s-main-img-col p-4 d-flex justify-content-center align-items-center  order-lg-1 order-0'>\n            <div id='mainImgBox' class=\"s-main-image-view s-page-opacity-2 rounded\"\n                [ngStyle]=\"mainImage ?{\n                    'background-image' :'url('+ pro_service.getUrl(mainImage) + ')',\n                    ' background-repeat': 'no-repeat',\n                    'background-position': 'center',\n                    'background-size': 'cover',\n                    'border': 'none'\n                }: false\"\n            >\n                <!-- <input type=\"file\" class='s-main-image-view s-opacity-0 rounded'> -->\n            </div>\n        </div>\n        <!-- Products Side Images and colors [3]-->\n        <div class=' col-lg col-12 s-side-col bg-warning~ p-4 d-flex flex-column order-1'>\n            <app-product-color (prod_colors)='resiveProColor($event)' (prod_mainImage)='resiveProdMainImage($event)'></app-product-color>\n        </div>\n    </div>\n    <!-- Product ((Controls))  {{ROW}} -->\n    <div class='row  s-controls-holder'>\n        <div class='col d-flex flex-column justify-content-center'>\n            <!-- Product Menu -->\n            <div class='row'>\n                <div class='col d-flex justify-content-center'>\n                    <button class='position-relative s-product-menu-btn p-3~ btn s-supp-bg-1~ s-dark2-bg s-page-opacity rounded' (click)='openProductsMenu()'></button>\n                </div>\n            </div>\n            <!-- Product Controllers  -->\n            <div class='row my-3'>\n                <!-- [delete] -->\n                <div class='col d-flex justify-content-center'>\n                    <button title='Delete' class='s-product-menu-controllers-btns btn bg-danger s-page-opacity rounded mx-2' (click)='deleteProduct()'>\n                        <img src=\"/assets/Icons/admin-products/trash.png\" width='25' height='25'>\n                    </button>\n                    <!-- [Create New] -->\n                    <button title='Create New Product' class='s-product-menu-controllers-btns btn s-supp-green-bg s-page-opacity rounded mx-2' routerLink='/admin/products'>\n                        <img src=\"/assets/Icons/admin-products/add.png\" width='25' height='25' (click)='resetForAddNew()'>\n                    </button>\n                    <!-- [Save] -->\n                    <!-- <button title='Save Product' (click)='saveProduct(productNameInp.value, productDescInp.value, postNewProduct)' class='s-product-menu-controllers-btns btn light-yellow-bg s-page-opacity rounded mx-2'> -->\n                    <button *ngIf='productStats == \"New\"' title='Save Product' (click)='postNewProduct(productNameInp.value,productDescInp.value, cost.value, costTag.value)' class='s-product-menu-controllers-btns btn light-yellow-bg s-page-opacity rounded mx-2'>\n                        <img src=\"/assets/Icons/admin-products/save.png\" width='25' height='25'>\n                    </button>\n                    <!-- [Update] -->\n                    <button *ngIf='productStats == \"Update\"' title='Update Product' (click)='updateProduct(productNameInp.value,productDescInp.value, cost.value, costTag.value)' class='s-product-menu-controllers-btns btn light-yellow-bg s-page-opacity rounded mx-2'>\n                        <img src=\"/assets/Icons/admin-products/update.png\" width='25' height='25'>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav-bar *ngIf='!userService.isAdmin'></nav-bar>\n<app-admin-nav *ngIf='userService.isAdmin'></app-admin-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-page/blog-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-page/blog-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogPageBlogPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='blogPageHolder' class='container-fluid s-supp-bg-4 p-4 d-flex flex-column'>\n    <!-- Hot topics  -->\n    <div class='container my-5'>\n        <!-- Head -->\n        <div class='row justify-content-md-start justify-content-center'>\n            <div class='px-5 s-white-50-bg s-btn-tem-h d-inline-flex align-items-center rounded'>\n                <i class='s-new-icon s-icons'></i>\n                <p class='h3 m-0 pl-2 s-dark2-cr'><b>New </b> <span style='font-weight: normal;'>Topics</span></p>\n            </div>\n        </div>\n        <!-- Content -->\n        <div *ngIf='topics?.length > 4'>\n            <div *ngIf='hotTopicsKey' class='row my-4'>\n                <!-- New Topics  -->\n                <div class='col-lg-6 col-12 my-3 s-hot-topic'>\n                    <div [routerLink]='\"/blog/\" + hotTopics[0]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                    [ngStyle]=\"hotTopics[0].topic_image != undefined ? {   \n                        'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[0].topic_image)  + ')'\n                        } : false\">\n                        <div class='py-2 px-5 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                            <p class='h4 m-0 s-dark2-cr'>{{hotTopics[0].topic_name}}</p>\n                        </div>\n                    </div>\n                </div>\n                <!-- hot Small  -->\n                <!-- Small Col 1 -->\n                <div class='col-lg-3 col-md-6 col-12 my-3 s-hot-topic'>\n                    <!-- 1 -->\n                    <div class='row h-50 w-100 pb-3 m-0'>\n                        <div [routerLink]='\"/blog/\" + hotTopics[1]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                        [ngStyle]=\"hotTopics[1].topic_image != undefined ? {   \n                        'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[1].topic_image)  + ')'\n                        } : false\">\n                            <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                                <p class='h5 m-0 s-dark2-cr'>{{hotTopics[1].topic_name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- 2 -->\n                    <div class='row h-50 w-100 pt-3 m-0'>\n                        <div [routerLink]='\"/blog/\" + hotTopics[3]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                        [ngStyle]=\"hotTopics[3].topic_image != undefined ? {   \n                        'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[3].topic_image)  + ')'\n                        } : false\">\n                            <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                                <p class='h5 m-0 s-dark2-cr'>{{hotTopics[3].topic_name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Small Col 2 -->\n                <div class='col-lg-3 col-md-6 col-12 my-3 s-hot-topic'>\n                    <!-- 3 -->\n                    <div class='row h-50 w-100 pb-3 m-0'>\n                        <div [routerLink]='\"/blog/\" + hotTopics[2]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                        [ngStyle]=\"hotTopics[2].topic_image != undefined ? {   \n                        'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[2].topic_image)  + ')'\n                        } : false\">\n                            <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                                <p class='h5 m-0 s-dark2-cr'>{{hotTopics[2].topic_name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- 4 -->\n                    <div class='row h-50 w-100 pt-3 m-0'>\n                        <div [routerLink]='\"/blog/\" + hotTopics[4]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                        [ngStyle]=\"hotTopics[4].topic_image != undefined ? {   \n                        'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[4].topic_image) + ')'\n                        } : false\">\n                            <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                                <p class='h5 m-0 s-dark2-cr'>{{hotTopics[4].topic_name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Controller Bar -->\n    <div class='container mb-4 position-sticky s-tool-bar-holder'>\n        <div class='row m-0 shadow-sm rounded'>\n            <!-- Tag name -->\n            <div class='col-md-2 col-12 p-0 s-supp-bg-3 rounded-left'>\n                <button\n                    class='btn s-main-bg s-supp-cr-2 rounded-left py-2 px-4 mr-3 s-selected-categ-btns w-100'\n                    [title]='tagName'>{{tagName}}</button>\n            </div>\n            <!-- tags btns -->\n            <div class='col-md-6 col-12 p-0 my-2 my-md-0 s-supp-bg-3 position-relative'>\n                <div class='position-absolute s-supp-bg-3 s-dash d-none d-md-block'></div>\n                <div class='s-categories-holder d-flex align-items-center'>\n                    <div class='s-supp-bg-3 s-dash-right d-none d-md-block px-3'></div>\n                    <button id='allTagsBtn' #allBtn (click)='selectAllTags(); styleTagBtns(allBtn)' data-btn='tag-btn'\n                        class='btn s-supp-bg-4 s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns s-selected-tag-btn'>All</button>\n                    <button #tagBtn *ngFor='let tag of tags let i = index' data-btn='tag-btn'\n                        (click)='selectTag(tag._id, tag.tag_name); styleTagBtns(tagBtn)'\n                        class='btn s-supp-bg-4 s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns'>{{tag.tag_name}}</button>\n                    <div class='s-supp-bg-3 s-dash-right d-none d-md-block pr-3'></div>\n                </div>\n                <div class='position-absolute s-supp-bg-3 s-dash-right d-none d-md-block'></div>\n            </div>\n            <!-- search Bar -->\n            <div class='col p-0 s-supp-bg-3 rounded-right'>\n                <div class=\"input-group md-form form-sm form-2 pl-0 s-white-50-bg rounded-right\">\n                    <input class=\"form-control my-0 py-4 px-4 s-white-50-bg border-0 s-serach-bar \" type=\"text\" placeholder=\"Search...\"\n                        aria-label=\"Search\" [(ngModel)]='searchValue'>\n                    <div class=\"input-group-append rounded-right\">\n                        <button class=\"btn input-group-text s-search-btn s-white-50-bg border-0 rounded-right\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- All Topics -->\n    <div *ngIf='!selectedTopicsByTag' class='container mt-3 mb-5'>\n        <div class='row px-3~'>\n            <div *ngFor='let topic of topics | filter:searchValue' class='col-lg-4 col-md-6 col-12 my-3'>\n                <!-- topic Holder -->\n                <div [routerLink]='\"/blog/\" + topic._id' class='rounded s-topic-box-holder w-100 s-white-50-bg~'>\n                    <!-- image -->\n                    <div class='rounded s-white-50-bg s-topic-img-box mb-2'\n                    [ngStyle]=\"topic.topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(topic.topic_image) + ')'\n                    } : false\">\n                    </div>\n                    <!-- Title -->\n                    <p class='h4 m-0 pt-3 px-3 pb-4 text-center text-md-left'>{{topic.topic_name}}</p>\n                    <!-- Description -->\n                    <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left' [innerHTML]='topic.topic_content'></p>\n                </div>\n            </div>\n            <div *ngIf='!topics' class='col-12 s-no-topics d-flex justify-content-center align-items-center'>\n                <p class='display-4 text-center s-supp-cr-3'> No Topics !</p>\n            </div>\n        </div>\n    </div>\n    <!-- Topics By Tags -->\n    <div *ngIf='selectedTopicsByTag' class='container mt-3 mb-5'>\n        <div class='row px-3~'>\n            <div *ngFor='let topic of selectedTopicsByTag | filter:searchValue' class='col-lg-4 col-md-6 col-12 my-3'>\n                <!-- topic Holder -->\n                <div [routerLink]='\"/blog/\" + topic._id' class='rounded s-topic-box-holder w-100 s-white-50-bg~'>\n                    <!-- image -->\n                    <div class='rounded s-white-50-bg s-topic-img-box mb-2'\n                    [ngStyle]=\"topic.topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(topic.topic_image)  + ')'\n                    } : false\">\n                    </div>\n                    <!-- Title -->\n                    <p class='h4 m-0 pt-3 px-3 pb-4 text-center text-md-left'>{{topic.topic_name}}</p>\n                    <!-- Description -->\n                    <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left' [innerHTML]='topic.topic_content'></p>\n                </div>\n            </div>\n            <div *ngIf='selectedTopicsByTag == \"\"' class='col-12 s-no-topics d-flex justify-content-center align-items-center'>\n                <p class='display-4 text-center s-supp-cr-3'> No Topics !</p>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-topic/blog-topic.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-topic/blog-topic.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogTopicBlogTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='blogTopicHolder' class='container-fluid s-supp-bg-4 p-4 d-flex flex-column'>\n    <!-- Header Section  -->\n    <section *ngIf='isLoaded' class='container my-5'>\n        <div class='row'>\n            <!-- topic Image -->\n            <div class='col-lg-7 col-12 pb-lg-0 pb-5'>\n                <div class='s-topic-img-box s-bg-img w-100 s-white-50-bg rounded pr-4'\n                [class.s-bg-no-img]='!selectedTopic.topic_image'\n                [ngStyle]=\"selectedTopic.topic_image ? {\n                    'background-image' :'url('+ blog_topics_service.getUrl(selectedTopic.topic_image) +')',\n                    'backgroun-size' : 'cover'\n                } : false\">\n                </div>\n            </div>\n            <!-- Next Topics Slider -->\n            <div class='d-lg-block d-none col-lg-5'>\n                <div class='h-100 d-flex flex-column pl-4'>\n                    <!-- up controllers -->\n                    <div class='row'>\n                        <div class='col'>\n                            <button disabled class='s-not-clickable btn s-white-50-bg s-supp-cr-1 rounded px-4 s-temp-btn'>Next</button>\n                        </div>\n                        <div class='col'>\n                            <button (click)='shift3Topics(prevTopic._id, \"p\")' class='s-arrow-up-icon s-bg-img btn s-white-50-bg rounded px-5 s-temp-btn'></button>\n                        </div>\n                        <div class='col'></div>\n                    </div>\n                    <!-- Next Topics -->\n                    <div  class='row mb-auto py-4'>\n                        <!-- Topic Holder -->\n                        <div class='col-12'>\n                            <ng-container *ngFor='let topic of nextPrevTopics'>\n                                <div (click)='clickTopic(topic)' class='row s-slider-topic-holder rounded s-white-50-bg mb-2'>\n                                    <!-- image -->\n                                    <div class='col-6 p-0 rounded-left'>\n                                        <div class='s-bg-img rounded-left s-bg-no-img s-slider-topic-holder'\n                                        [class.s-bg-no-img]='!topic.topic_image'\n                                        [ngStyle]=\"selectedTopic.topic_image ? {\n                                            'background-image' :'url('+ blog_topics_service.getUrl(topic.topic_image) +')',\n                                            'backgroun-size' : 'cover'\n                                        } : false\">\n                                    </div>\n                                    </div>\n                                    <!-- text -->\n                                    <div class='col-6 rounded-right '>\n                                        <!-- name -->\n                                        <p class='m-0 pt-4 pb-2 text-center text-md-left'><b>{{topic.topic_name}}</b></p>\n                                        <!-- Description -->\n                                        <p class='s-supp-cr-1 px-2 pb-3 text-center text-md-left' [innerHTML]='topic.topic_content'></p>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!-- down controllers -->\n                    <div class='row'>\n                        <div class='col'></div>\n                        <div class='col'>\n                            <button (click)='shift3Topics(nextTopic._id, \"n\")' class='s-arrow-down-icon s-bg-img btn s-white-50-bg rounded px-5 s-temp-btn'></button>\n                        </div>\n                        <div class='col d-flex justify-content-end'>\n                            <button class='btn s-white-50-bg s-supp-cr-1 rounded px-4 s-temp-btn'>{{selectedTopicTag.tag_name}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- Topic Body -->\n    <section *ngIf='isLoaded' class='container'>\n        <!-- content Head -->\n        <div class='row flex-lg-row flex-column justify-content-lg-start align-items-center align-items-lg-start'>\n            <div class='mb-4 mr-4 m-lg-0'>\n                <p class='h3 s-supp-cr-1 rounded px-4 s-temp-btn'>{{selectedTopic.topic_name}}</p>\n            </div>\n            <div>\n                <button disabled class='s-not-clickable btn s-white-50-bg s-supp-cr-1 rounded px-4 s-temp-btn mr-4'>{{selectedTopicTag.tag_name}}</button>\n                <button disabled class='s-not-clickable btn s-white-50-bg s-supp-cr-1 rounded px-4 s-temp-btn'>{{selectedTopic.updated_at | date }}</button>\n            </div>\n\n        </div>\n        <div class='row px-5 py-4'>\n            <p class='text-justify' [innerHTML]='selectedTopic.topic_content'></p>\n        </div>\n    </section>\n    <!-- User Comments  -->\n    <section *ngIf='isLoaded' class='container my-5'>\n        <app-blog-user-comments></app-blog-user-comments>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-user-comments/blog-user-comments.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-user-comments/blog-user-comments.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogUserCommentsBlogUserCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- comments section -->\n<section>\n    <p class='h3 s-supp-cr-2 mb-4 text-center  text-md-left'>Comments :</p>\n    <div *ngFor='let comment of allTopicComments' class='s-blog-post-box col-12 d-flex flex-md-row flex-column s-white-50-bg my-2 p-4 rounded'>\n        <div class='p-4 s-blog-post-text-box'>\n            <p class='h3 s-supp-cr-1 mb-3 text-capitalize'>{{comment.userName}}</p>\n            <article class='s-supp-cr-2 ml-4' [innerHTML]=comment.comment_content>\n            </article>\n        </div>\n    </div>\n</section>\n<!-- form  -->\n<div class='col-12 col-lg p-4'>\n    <!-- form inputs -->\n    <div class='row'>\n        <form #f=\"ngForm\" class='w-100' action=\"\">\n            <!-- input {{UserName}} -->\n            <div class=\"input-group my-4 s-outline-0\">\n                <div class=\"s-form-contact-input input-group-prepend\">\n                    <div\n                        class=\"s-white-bg s-opc-5 s-form-contact-input-icon rounded-left input-group-text justify-content-center\">\n                        <img src=\"/assets/Icons/contact-icons/user.png\" width='25' alt=\"\">\n                    </div>\n                </div>\n                <input ngModel required #userName=\"ngModel\" name=\"username\" type=\"text\" \n                [class.borderRed]=\"userName.touched && !userName.valid\"\n                class=\"s-white-bg s-opc-8 s-supp-cr-1 s-form-contact-input form-control rounded-right\"\n                    id=\"inlineFormInputGroup\" placeholder=\"Username\">\n            </div>\n            <!-- input {{E-Mail}} -->\n            <div class=\" input-group mb-4 \">\n                <div class=\"s-form-contact-input input-group-prepend\">\n                    <div\n                        class=\"s-white-bg s-opc-5 rounded-left s-form-contact-input-icon input-group-text justify-content-center\">\n                        <img src=\"/assets/Icons/contact-icons/mail.png\" width='25' alt=\"\">\n                    </div>\n                </div>\n                <input ngModel required #mail=\"ngModel\" type=\"email\" name=\"email\"\n                [pattern]=\"va_serv.emailRegex\"\n                [class.borderRed]=\"mail.touched && !mail.valid\"\n                 class=\"s-opc-8 s-white-bg rounded-right s-supp-cr-1 s-form-contact-input form-control\"\n                    id=\"inlineFormInputGroup\" placeholder=\"E-Mail\">\n            </div>\n            <div class='col-12 s-white-bg s-opc-8 rounded-top p-0'>\n                <textarea ngModel required #content=\"ngModel\" name=\"content\" \n                [class.borderRed]=\"content.touched && !content.valid\"\n                 class=\"border-0 rounded-0 rounded-top p-3 m-0 form-control s-white-bg s-supp-cr-1\"\n                    id=\"exampleFormControlTextarea1\" placeholder=\"Comment Here…\" rows=\"3\"></textarea>\n            </div>\n            <div class='rounded-bottom s-white-bg s-opc-8 col p-0 m-0 d-flex align-items-end justify-content-end'>\n                <hr class='position-absolute s-form-contact-send-hr'>\n                <!-- comment button  -->\n                <input (click)='postComment(userName.value, mail.value, content.value)' [disabled]='f.invalid' class='rounded btn s-supp-cr-1 s-form-contact-send p-4' type=\"submit\" value='Comment'>\n            </div>\n        </form>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf='isLoaded' id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active \">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\" [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_slides[0].slide_image) + ')'\n        }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{categ_page_service.userPageData[0].page_slides[0].slide_text}}</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\" [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_slides[1].slide_image) + ')'\n        }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{categ_page_service.userPageData[0].page_slides[1].slide_text}}</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\" [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_slides[2].slide_image) + ')'\n        }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{categ_page_service.userPageData[0].page_slides[2].slide_text}}</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!-- header {{Hot Section}} -->\n<div *ngIf='isLoaded' class='container-fluid s-supp-bg-4'>\n  <div class='row'>\n    <!-- large Box -->\n    <div class='col-md-6 col-12 p-2'>\n      <div (click)='choseCateg(categ_page_service.userPageData[0].page_hot_sec[0].box_name)' class='rounded-left s-large-hot-box s-hot-box w-100 d-flex align-items-end mt-md-2 ml-md-2 m-0 p-2'\n      [ngStyle]=\"{\n            'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_hot_sec[0].box_image) + ')'\n          }\">\n        <div\n          class='s-hot-text-holder s-category-box-obacity s-supp-cr-4 w-100 h-100 text-center~ p-4 d-flex flex-column justify-content-center align-items-center'>\n          <p class='h1 pt-5~'>{{categ_page_service.userPageData[0].page_hot_sec[0].box_name}}</p>\n        </div>\n      </div>\n    </div>\n    <!-- small boxes -->\n    <div class='col-md-6 col-12 p-2'>\n      <div class='row px-0 pb-2 mb-0 mt-md-2 mx-md-2 m-0 '>\n        <div (click)='choseCateg(categ_page_service.userPageData[0].page_hot_sec[1].box_name)' class='rounded-right s-small-hot-box s-hot-box w-100 d-flex align-items-end p-2'\n        [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_hot_sec[1].box_image) + ')'\n        }\">\n          <div\n            class='s-hot-text-holder s-category-box-obacity s-supp-cr-4 w-100 h-100 text-center~ p-4 d-flex flex-column justify-content-center align-items-center'>\n            <p class='h1 pt-5~'>{{categ_page_service.userPageData[0].page_hot_sec[1].box_name}}</p>\n          </div>\n        </div>\n      </div>\n      <div class='row px-0 pt-2 my-md-0 mx-md-2 m-0'>\n        <div (click)='choseCateg(categ_page_service.userPageData[0].page_hot_sec[2].box_name)' class='rounded-right s-small-hot-box s-small-hot-box-2 s-hot-box w-100 d-flex align-items-end p-2'\n        [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(categ_page_service.userPageData[0].page_hot_sec[2].box_image) + ')'\n        }\">\n          <div\n            class='s-hot-text-holder s-category-box-obacity s-supp-cr-4 w-100 h-100 p-4 d-flex flex-column justify-content-center align-items-center'>\n            <p class='h1'>{{categ_page_service.userPageData[0].page_hot_sec[2].box_name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- category box -->\n<div class='container-fluid s-supp-bg-4'>\n  <div class='row mx-5 my-0 py-5'>\n    <ng-container *ngFor='let category of categories let i = index'>\n      <!-- All Categories -->\n      <div *ngIf='i <= 0' class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n        <div (click)='selectAllCategory()'\n          class=\"rounded s-add-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1 s-all-Categories s-category-box\">\n          <div class='s-all-categories-box-obacity rounded d-flex justify-content-center align-items-center'>\n            <p class='h1 text-center s-white-cr'>All</p>\n          </div>\n        </div>\n      </div>\n      <!-- Category box -->\n      <div class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n        <div (click)='selectCategory(category._id, category.categ_name, category.sub_categories)' [ngStyle]=\"category.categ_image ? {   \n              'background-image' :'url('+ categ_service.getUrl(category.categ_image) + ')',\n              ' background-repeat': 'no-repeat',\n              'background-position': 'center',\n              'background-size': 'cover',\n              'border': 'none'\n              }: false\"\n          class=\"rounded s-add-category-box s-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1\"\n          data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n          <div *ngIf=\"category.categ_image\"\n            class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n            <p class='h1 text-center s-white-cr'>{{category.categ_name}}</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='contactHolder' class='s-supp-bg-3 container-fluid p-0 '>\n  <div class='s-contact-content-holder container-fluid p-0'>\n    <!-- map -->\n    <section class='row p-0 m-0'>\n      <div id='contactMap' class=' s-supp-bg-1 rounded-0~ col-lg-7 p-0 col-12 m-lg-0 s-contact-map rounded-right d-flex justify-content-end align-items-center'>\n        <iframe id='frameMap' class='s-iframe-map rounded-0~ rounded-right'\n          frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n        <button id='toggleMapBtn' #toggleMapBtn (click)='toggleMap(toggleMapBtn)' data-toggle='true' class='s-opc-5 rounded-0 rounded-right s-open-close-map-btn btn s-supp-bg-1 d-lg-block d-none position-absolute'>\n        </button>\n      </div>\n    </section>\n    <!-- contacts -->\n    <section *ngIf='isLoaded' class='row p-lg-4 px-0 mx-4 m-lg-0 s-supp-cr-1'>\n      <div class='col-lg-1'></div>\n      <!-- info -->\n      <div class='col-12 col-lg p-4  bg-info~'>\n        <img class='my-2 mx-4' src=\"/assets/Icons/contact-icons/location.png\" width=\"40\" alt=\"\">\n        <p class='h3'>Our Location </p>\n        <p *ngFor='let address of data[0].contact_info.address' class='mx-4'>\n          {{address}}\n        </p>\n        <!-- ---- -->\n        <br>\n        <img class='my-2 mx-4' src=\"/assets/Icons/contact-icons/mail.png\" width=\"40\" alt=\"\">\n        <p class='h3 '>Contact Details </p>\n        <p *ngFor='let email of data[0].contact_info.Emails' class='mx-4'>\n          {{email}}\n          <br>\n        </p>\n        <!-- ---- -->\n        <br>\n        <img class='my-2 mx-4' src=\"/assets/Icons/contact-icons/phone.png\" width=\"40\" alt=\"\">\n        <p class='h3'>Contact Us </p>\n        <p *ngFor='let phone of data[0].contact_info.phone' class='mx-4'>\n          {{phone}}\n        </p>\n        <br>\n        <hr class='s-supp-cr-1 d-block d-lg-none'>\n      </div>\n      <!-- form  -->\n      <div class='col-12 col-lg p-4'>\n        <!-- form buttons -->\n        <div class='row bg-dark~ mt-2 justify-content-center flex-column align-items-stretch s-form-contact-input'>\n          <div class=\"btn-group s-form-contact-input\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"rounded-left mr-1 btn btn-secondary border-0\">Support</button>\n            <button type=\"button\" class=\"mr-1 btn btn-secondary border-0\">Suggestions</button>\n            <button type=\"button\" class=\"mr-1 btn btn-secondary border-0\">Complaints</button>\n            <button type=\"button\" class=\" rounded-right btn btn-secondary border-0\">Inquiries</button>\n          </div>\n        </div>\n        <!-- form inputs -->\n        <div class='row'>\n          <!-- input {{UserName}} -->\n            <div class=\"input-group my-4 s-outline-0\">\n              <div class=\"s-form-contact-input input-group-prepend\">\n                <div class=\"s-white-bg s-opc-5 s-form-contact-input-icon rounded-left input-group-text justify-content-center\">\n                  <img src=\"/assets/Icons/contact-icons/user.png\" width='25' alt=\"\">\n                </div>\n              </div>\n              <input type=\"text\" class=\"s-white-bg s-opc-8 s-supp-cr-1 s-form-contact-input form-control rounded-right\" id=\"inlineFormInputGroup\" placeholder=\"Username\">\n            </div>\n            <!-- input {{E-Mail}} -->\n            <div class=\" input-group mb-4 \">\n              <div class=\"s-form-contact-input input-group-prepend\">\n                <div class=\"s-white-bg s-opc-5 rounded-left s-form-contact-input-icon input-group-text justify-content-center\">\n                  <img src=\"/assets/Icons/contact-icons/mail.png\" width='25' alt=\"\">\n                </div>\n              </div>\n              <input type=\"email\" class=\"s-opc-8 s-white-bg rounded-right s-supp-cr-1 s-form-contact-input form-control\"\n                id=\"inlineFormInputGroup\" placeholder=\"E-Mail\">\n            </div>\n            <!-- input {{Subject}} -->\n            <div class=\"input-group mb-4\">\n              <div class=\"s-form-contact-input input-group-prepend\">\n                <div class=\"s-white-bg s-opc-5 rounded-left s-form-contact-input-icon input-group-text justify-content-center\">\n                  <img src=\"/assets/Icons/contact-icons/Subject.png\" width='25' alt=\"\">\n                </div>\n              </div>\n              <input type=\"text\" class=\"s-white-bg s-opc-8 rounded-right s-supp-cr-1 s-form-contact-input form-control\"\n                id=\"inlineFormInputGroup\" placeholder=\"Subject\">\n            </div>\n            <div class='col-12 s-white-bg s-opc-8 rounded-top p-0'>\n              <textarea class=\"border-0 rounded-0 rounded-top p-3 m-0 form-control s-white-bg s-supp-cr-1\" id=\"exampleFormControlTextarea1\" placeholder=\"Type Your Message …\" rows=\"3\"></textarea>\n            </div>\n            <div class='rounded-bottom s-white-bg s-opc-8 col p-0 m-0 d-flex align-items-end justify-content-end'>\n              <hr class='position-absolute s-form-contact-send-hr'>\n              <input class='rounded btn s-supp-cr-1 s-form-contact-send p-4' type=\"submit\" value='Send'>\n            </div>\n        </div>\n      </div>\n      <div class='col-lg-1'></div>\n    </section>\n    <!-- fllow us S.M -->\n    <section *ngIf='isLoaded' class='row p-4 py-lg-0 mx-4 m-lg-0'>\n      <div class='col-lg-1'></div>\n      <div class='col py-0 py-lg-4 d-lg-block d-flex justify-content-center'>\n        <!-- Sochial Media -->\n        <div class='float-left'>\n          <a *ngIf='data[0].contact_info.socialMedia[0].facebook' class=' m-2' [href]=\"data[0].contact_info.socialMedia[0].facebook\"><img width='25' src=\"/assets/Icons/contact-icons/fb.png\" alt=\"\"></a>\n          <a *ngIf='data[0].contact_info.socialMedia[1].twitter' class=' m-2' [href]=\"data[0].contact_info.socialMedia[1].twitter\"><img width='25' src=\"/assets/Icons/contact-icons/twitter.png\" alt=\"\"></a>\n          <a *ngIf='data[0].contact_info.socialMedia[2].instagram' class=' m-2' [href]=\"data[0].contact_info.socialMedia[2].instagram\"><img width='25' src=\"/assets/Icons/contact-icons/insta.png\" alt=\"\"></a>\n          <a *ngIf='data[0].contact_info.socialMedia[3].linkedin' class=' m-2' [href]=\"data[0].contact_info.socialMedia[3].linkedin\"><img width='25' src=\"/assets/Icons/contact-icons/in.png\" alt=\"\"></a>\n          <a *ngIf='data[0].contact_info.socialMedia[4].telegram' class=' m-2' [href]=\"data[0].contact_info.socialMedia[4].telegram\"><img width='22' src=\"/assets/Icons/contact-icons/telegram.png\" alt=\"\"></a>\n          <a (click)='openWhatsappMenu()' *ngIf='data[0].contact_info.socialMedia[5].whatsapp[0]' class=' m-2'><img width='26' src=\"/assets/Icons/contact-icons/whatsapp.png\" alt=\"\"></a>\n          <!-- whatsappMenu -->\n          <app-whatsapp-menu></app-whatsapp-menu>\n          <p class=' d-none d-md-block m-0 float-right px-4 s-supp-cr-1'>Follow Us On Social-Media .</p>\n        </div>\n      </div>\n      <div class='col-lg-1'></div>\n    </section>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"page-footer s-dark2-bg font-small special-color-dark pt-4\">\n\n    <!-- Footer Elements -->\n    <div *ngIf='isLoaded' class=\"container\">\n\n        <!-- Social buttons -->\n        <ul class=\"list-unstyled list-inline text-center\">\n            <!-- Facebook -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[0].facebook' class=' m-1'\n                [href]=\"data[0].facebook\"><img width='25' src=\"/assets/Icons/contact-icons/fb.png\"\n                alt=\"\"></a>\n            </li>\n            <!-- Twitter -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[1].twitter' class=' m-1'\n                    [href]=\"data[1].twitter\"><img width='25' src=\"/assets/Icons/contact-icons/twitter.png\"\n                        alt=\"\"></a>\n            </li>\n            <!-- Instagram -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[2].instagram' class=' m-1'\n                [href]=\"data[2].instagram\"><img width='25' src=\"/assets/Icons/contact-icons/insta.png\"\n                alt=\"\"></a>\n            </li>\n            <!-- Linked In -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[3].linkedin' class=' m-1'\n                [href]=\"data[3].linkedin\"><img width='25' src=\"/assets/Icons/contact-icons/in.png\"\n                alt=\"\"></a>\n            </li>\n            <!-- Telegram -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[4].telegram' class=' m-2'\n                [href]=\"data[4].telegram\"><img width='22' src=\"/assets/Icons/contact-icons/telegram.png\"\n                alt=\"\"></a>\n            </li>\n            <!-- Whatsapp -->\n            <li class=\"list-inline-item\">\n                <a *ngIf='data[5].whatsapp[0]' (click)='openWhatsappMenu()' class='m-2'><img width='26'\n                src=\"/assets/Icons/contact-icons/whatsapp.png\" alt=\"\"></a>\n            </li>\n        </ul>\n        <!-- whatsappMenu -->\n        <app-whatsapp-menu></app-whatsapp-menu>\n    </div>\n    <!-- Footer Elements -->\n    <!-- language -->\n    <div class='text-center py-0'>\n        <!-- <app-languages class='d-inline-block py-0'></app-languages> -->\n        <div id=\"google_translate_element\"></div>\n    </div>\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3 s-supp-cr-1\">© 2020 Copyright:\n        <a class='s-supp-cr-4' href=\"#\"> <img width='25' src=\"/assets/Icons/dark.png\" alt=\"\"> CodeClub</a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n<!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- video  -->\n<div class='container-fluid s-video-holder p-0 d-flex justify-content-center'>\n    <iframe allow=\"autoplay\" id='videoIframe' class='s-video p-0' frameborder=\"0\" \n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n<!-- body [products, Categories] -->\n<div class='container-fluid s-supp-bg-4 pb-5'>\n    <!-- Hot Products -->\n    <div *ngIf='hotProductIsLoaded' class='row pb-5'>\n        <!-- large Box -->\n        <div class='col-md-6 col-12 p-2'>\n            <div class='rounded-left s-large-hot-box s-hot-box w-100 d-flex align-items-end mt-md-2 ml-md-2 m-0 p-2'\n                [ngStyle]=\"{\n        'background-image' : 'url('+ pagesImg_service.getUrl(hotProducts[0].page_hot_sec[0].box_image) + ')'\n      }\">\n                <div\n                    class='s-hot-text-holder s-supp-cr-4 w-100 h-50 text-center~ p-4 d-flex flex-column justify-content-around align-items-center'>\n                    <p class='h1 s-text-shadow'>{{hotProducts[0].page_hot_sec[0].box_name}}</p>\n                    <div class='s-hot-desc mb-2 text-center'>\n                        <p class='lead s-text-shadow'>\n                            {{hotProducts[0].page_hot_sec[0].box_desc}}\n                        </p>\n                    </div>\n                    <a [routerLink]='\"/product/\" + hotProducts[0].page_hot_sec[0].box_prodID'\n                        class='btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know\n                        More</a>\n                </div>\n            </div>\n        </div>\n        <!-- small boxes -->\n        <div class='col-md-6 col-12 p-2'>\n            <div class='row px-0 pb-2 mb-0 mt-md-2 mx-md-2 m-0 '>\n                <div class='rounded-right s-small-hot-box s-hot-box w-100 d-flex align-items-end p-2' [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImg_service.getUrl(hotProducts[0].page_hot_sec[1].box_image) + ')'\n        }\">\n                    <div\n                        class='s-hot-text-holder s-supp-cr-4 w-100 h-50 text-center~ p-4 d-flex flex-column justify-content-around align-items-center'>\n                        <p class='h1 s-text-shadow'>{{hotProducts[0].page_hot_sec[1].box_name}}</p>\n                        <a [routerLink]='\"/product/\" + hotProducts[0].page_hot_sec[1].box_prodID'\n                            class='m-auto~ btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know\n                            More</a>\n                    </div>\n                </div>\n            </div>\n            <div class='row px-0 pt-2 my-md-0 mx-md-2 m-0'>\n                <div class='rounded-right s-small-hot-box s-hot-box w-100 d-flex align-items-end p-2' [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImg_service.getUrl(hotProducts[0].page_hot_sec[2].box_image) + ')'\n        }\">\n                    <div\n                        class='s-hot-text-holder s-supp-cr-4 w-100 h-50 p-4 d-flex flex-column justify-content-around align-items-center'>\n                        <p class='h1 s-text-shadow'>{{hotProducts[0].page_hot_sec[2].box_name}}</p>\n                        <a [routerLink]='\"/product/\" + hotProducts[0].page_hot_sec[2].box_prodID'\n                            class=' btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know\n                            More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- New Products -->\n    <!-- Head -->\n    <div class='pt-5 d-flex flex-column justify-content-center'>\n        <div class='px-5 s-main-bg s-btn-tem-h d-inline-flex align-items-center rounded m-auto'>\n            <p class='h3 m-0 pl-2 s-dark2-cr'><b>New </b> <span style='font-weight: normal;'>Products</span></p>\n        </div>\n        <div class='container pt-4 pb-5'>\n            <p class='lead m-0 s-dark2-cr text-center'>\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!\n            </p>\n        </div>\n    </div>\n    <!-- products -->\n    <div class='container s-supp-bg-4'>\n        <div class='row row m-0'>\n            <div *ngFor='let product of allProducts' class='col-lg-3 col-sm-6 col-12 pt-0 px-0 pb-3'>\n                <div (click)='selectProductById(product._id)' class=' s-product-box-holder mx-2 mb-5'>\n                    <!-- image -->\n                    <div class='s-product-box' [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n                    'background-image' :'url('+ product_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n                    } : false\"></div>\n                    <!-- Title -->\n                    <p class='lead m-0 pt-3 px-3 pb-2 text-center text-md-left'>{{product.prod_name}}</p>\n                    <!-- Description -->\n                    <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left'>{{product.prod_desc}}</p>\n                </div>\n            </div>\n            <div *ngIf='!allProducts' class='col-12 s-no-products d-flex justify-content-center align-items-center'>\n                <p class='display-4 text-center s-supp-cr-3'> No Products !</p>\n            </div>\n        </div>\n    </div>\n    <!-- footer [product] -->\n    <div class='pb-5 d-flex flex-column justify-content-around align-items-center'>\n        <a [routerLink]='\"/product\"'\n            class='btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-white-bg s-dark-cr rounded'>More Products</a>\n    </div>\n    <!-- New categories -->\n    <!-- Head -->\n    <div class='pt-5 d-flex flex-column justify-content-center'>\n        <div class='px-5 s-white-50-bg~ s-main-bg s-btn-tem-h d-inline-flex align-items-center rounded m-auto'>\n            <p class='h3 m-0 pl-2 s-dark2-cr'><b>New </b> <span style='font-weight: normal;'>Categories</span></p>\n        </div>\n        <div class='container pt-4 pb-5'>\n            <p class='lead m-0 s-dark2-cr text-center'>\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!\n            </p>\n        </div>\n    </div>\n    <!-- categories -->\n    <div class='container'>\n        <div class='row mx-5 my-0'>\n            <ng-container *ngFor='let category of allCategories let i = index'>\n                <!-- Category box -->\n                <div class='col-lg-6 col-12 my-4 order-lg-1 order-2'>\n                    <div (click)='selectCategory(category._id, category.categ_name, category.sub_categories)' [ngStyle]=\"category.categ_image ? {   \n                      'background-image' :'url('+ categorie_service.getUrl(category.categ_image) + ')',\n                      ' background-repeat': 'no-repeat',\n                      'background-position': 'center',\n                      'background-size': 'cover',\n                      'border': 'none'\n                      }: false\"\n                        class=\"rounded s-add-category-box s-category-box mx-4 my-2 d-flex justify-content-center align-items-center p-1\"\n                        data-toggle=\"modal\" data-cat='addCat' data-target=\"#exampleModalCenter\">\n                        <div *ngIf=\"category.categ_image\"\n                            class='s-category-box-obacity rounded d-flex justify-content-center align-items-center'>\n                            <p class='h1 text-center s-white-cr'>{{category.categ_name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    <!-- footer [Categories] -->\n    <div class='py-5 d-flex flex-column justify-content-around align-items-center'>\n        <a [routerLink]='\"/categories\"'\n            class='btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-white-bg s-dark-cr rounded'>More Categories</a>\n    </div>\n</div>\n<!-- body [About] -->\n<div *ngIf='aboutSections' id='aboutHolder' class=' container-fluid px-0 py-5 s-about-content-holder s-main-bg'>\n    <!-- History Seciton -->\n    <section *ngIf='aboutSections[0]' id='history' class='row p-md-5 p-3 position-relative s-section-row'>\n        <div id='conentBgImage' data-section='image' class='s-content-background position-absolute' [ngStyle]=\"{\n                 'background-image': 'url('+ pagesImg_service.getUrl(aboutSections[0].page_backgroundImage) + ')'\n              }\"></div>\n        <div class='col-lg-8 col ml-lg-5 pb-5 text-lg-left text-center pt-5 mt-5'>\n            <p id='contentTitle' data-section='title' class='display-3 ml-lg-5'>{{aboutSections[0].page_title}}</p>\n            <hr class='s-about-title-hr ml-lg-5'>\n            <p id='contentArt' data-section='article' class='ml-lg-5 lead pl-lg-5 pl-0'>\n                {{aboutSections[0].page_article}}\n            </p>\n        </div>\n    </section>\n</div>\n<!-- Blog -->\n<div class='container-fluid s-supp-bg-3 py-5'>\n    <!-- Head -->\n    <div class='pt-5 d-flex flex-column justify-content-center'>\n        <div class='px-5 s-white-50-bg~ s-main-bg s-btn-tem-h d-inline-flex align-items-center rounded m-auto'>\n            <p class='h3 m-0 pl-2 s-dark2-cr'><b>We Are </b> <span style='font-weight: normal;'> Talk like this!</span></p>\n        </div>\n        <div class='container pt-4'>\n            <p class='lead m-0 s-dark2-cr text-center'>\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!\n            </p>\n        </div>\n    </div>\n    <!-- new topics -->\n    <div *ngIf='hotTopics?.length > 4' class='container '>\n        <div *ngIf='hotTopicsKey' class='row my-4'>\n            <!-- New Topics  -->\n            <div class='col-lg-6 col-12 my-3 s-hot-topic'>\n                <div [routerLink]='\"/blog/\" + hotTopics[0]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                [ngStyle]=\"hotTopics[0].topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[0].topic_image)  + ')'\n                    } : false\">\n                    <div class='py-2 px-5 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                        <p class='h4 m-0 s-dark2-cr'>{{hotTopics[0].topic_name}}</p>\n                    </div>\n                </div>\n            </div>\n            <!-- hot Small  -->\n            <!-- Small Col 1 -->\n            <div class='col-lg-3 col-md-6 col-12 my-3 s-hot-topic'>\n                <!-- 1 -->\n                <div class='row h-50 w-100 pb-3 m-0'>\n                    <div [routerLink]='\"/blog/\" + hotTopics[1]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                    [ngStyle]=\"hotTopics[1].topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[1].topic_image)  + ')'\n                    } : false\">\n                        <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                            <p class='h5 m-0 s-dark2-cr'>{{hotTopics[1].topic_name}}</p>\n                        </div>\n                    </div>\n                </div>\n                <!-- 2 -->\n                <div class='row h-50 w-100 pt-3 m-0'>\n                    <div [routerLink]='\"/blog/\" + hotTopics[3]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                    [ngStyle]=\"hotTopics[3].topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[3].topic_image)  + ')'\n                    } : false\">\n                        <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                            <p class='h5 m-0 s-dark2-cr'>{{hotTopics[3].topic_name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Small Col 2 -->\n            <div class='col-lg-3 col-md-6 col-12 my-3 s-hot-topic'>\n                <!-- 3 -->\n                <div class='row h-50 w-100 pb-3 m-0'>\n                    <div [routerLink]='\"/blog/\" + hotTopics[2]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                    [ngStyle]=\"hotTopics[2].topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[2].topic_image)  + ')'\n                    } : false\">\n                        <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                            <p class='h5 m-0 s-dark2-cr'>{{hotTopics[2].topic_name}}</p>\n                        </div>\n                    </div>\n                </div>\n                <!-- 4 -->\n                <div class='row h-50 w-100 pt-3 m-0'>\n                    <div [routerLink]='\"/blog/\" + hotTopics[4]._id' class='s-topic-img-box s-hot-holder h-100 w-100 rounded s-white-50-bg d-flex justify-content-center align-items-center'\n                    [ngStyle]=\"hotTopics[4].topic_image != undefined ? {   \n                    'background-image' :'url('+ blog_topics_service.getUrl(hotTopics[4].topic_image) + ')'\n                    } : false\">\n                        <div class='py-2 px-4 s-opc-8 s-main-bg d-inline-flex align-items-center rounded'>\n                            <p class='h5 m-0 s-dark2-cr'>{{hotTopics[4].topic_name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- footer [Categories] -->\n    <div class='py-5 d-flex flex-column justify-content-around align-items-center'>\n        <a [routerLink]='\"/blog\"'\n            class='btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-white-bg s-dark-cr rounded'>More Topics</a>\n    </div>\n</div>\n<!-- body[Contact] -->\n<div class='container-fluid s-dark-bg py-5'>\n<!-- Head -->\n    <div class='pt-5 d-flex flex-column justify-content-center'>\n        <div class='px-5 s-white-50-bg~ s-main-bg s-btn-tem-h d-inline-flex align-items-center rounded m-auto'>\n            <p class='h3 m-0 pl-2 s-dark2-cr'><b>Keep On </b> <span style='font-weight: normal;'> Touch</span></p>\n        </div>\n        <div class='container pt-4'>\n            <p class='lead m-0 s-white-cr text-center'>\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident alias, possimus qui atque\n                consequuntur officiis vero ipsam, molestiae totam, nobis voluptatum? Quae delectus neque officia molestias\n                iure officiis debitis!\n            </p>\n        </div>\n    </div>\n    <!-- form -->\n    <div class='container'>\n        <div class='row p-lg-4 px-0 mx-4 m-lg-0 s-supp-cr-1'> \n            <div class='col-12 col-lg p-4'>\n                <!-- form buttons -->\n                <div class='row bg-dark~ mt-2 justify-content-center flex-column align-items-stretch s-form-contact-input'>\n                    <div class=\"btn-group s-form-contact-input\" role=\"group\" aria-label=\"Basic example\">\n                        <button type=\"button\" class=\"rounded-left mr-1 btn btn-secondary border-0\">Support</button>\n                        <button type=\"button\" class=\"mr-1 btn btn-secondary border-0\">Suggestions</button>\n                        <button type=\"button\" class=\"mr-1 btn btn-secondary border-0\">Complaints</button>\n                        <button type=\"button\" class=\" rounded-right btn btn-secondary border-0\">Inquiries</button>\n                    </div>\n                </div>\n                <!-- form inputs -->\n                <div class='row'>\n                    <!-- input {{UserName}} -->\n                    <div class=\"input-group my-4 s-outline-0\">\n                        <div class=\"s-form-contact-input input-group-prepend\">\n                            <div\n                                class=\"s-white-bg s-opc-5 s-form-contact-input-icon rounded-left input-group-text justify-content-center\">\n                                <img src=\"/assets/Icons/contact-icons/user.png\" width='25' alt=\"\">\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"s-white-bg s-opc-8 s-supp-cr-1 s-form-contact-input form-control rounded-right\"\n                            id=\"inlineFormInputGroup\" placeholder=\"Username\">\n                    </div>\n                    <!-- input {{E-Mail}} -->\n                    <div class=\" input-group mb-4 \">\n                        <div class=\"s-form-contact-input input-group-prepend\">\n                            <div\n                                class=\"s-white-bg s-opc-5 rounded-left s-form-contact-input-icon input-group-text justify-content-center\">\n                                <img src=\"/assets/Icons/contact-icons/mail.png\" width='25' alt=\"\">\n                            </div>\n                        </div>\n                        <input type=\"email\" class=\"s-opc-8 s-white-bg rounded-right s-supp-cr-1 s-form-contact-input form-control\"\n                            id=\"inlineFormInputGroup\" placeholder=\"E-Mail\">\n                    </div>\n                    <!-- input {{Subject}} -->\n                    <div class=\"input-group mb-4\">\n                        <div class=\"s-form-contact-input input-group-prepend\">\n                            <div\n                                class=\"s-white-bg s-opc-5 rounded-left s-form-contact-input-icon input-group-text justify-content-center\">\n                                <img src=\"/assets/Icons/contact-icons/Subject.png\" width='25' alt=\"\">\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"s-white-bg s-opc-8 rounded-right s-supp-cr-1 s-form-contact-input form-control\"\n                            id=\"inlineFormInputGroup\" placeholder=\"Subject\">\n                    </div>\n                    <div class='col-12 s-white-bg s-opc-8 rounded-top p-0'>\n                        <textarea class=\"border-0 rounded-0 rounded-top p-3 m-0 form-control s-white-bg s-supp-cr-1\"\n                            id=\"exampleFormControlTextarea1\" placeholder=\"Type Your Message …\" rows=\"3\"></textarea>\n                    </div>\n                    <div class='rounded-bottom s-white-bg s-opc-8 col p-0 m-0 d-flex align-items-end justify-content-end'>\n                        <hr class='position-absolute s-form-contact-send-hr'>\n                        <input class='rounded btn s-supp-cr-1 s-form-contact-send p-4' type=\"submit\" value='Send'>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/languages/languages.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/languages/languages.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLanguagesLanguagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- language selector -->\n<div class=\"input-group mb-3 md-form form-sm form-2 pl-0 rounded s-language-box\">\n    <i disabled\n        class=\"btn input-group-text s-icon-btn s-icon-tags s-no-rounded-right s-bg-color border-0 rounded-left\"></i>\n    <select #topicTagInp (change)='selectMe(topicTagInp.value)'\n        class=\"custom-select form-control s-temp-btn  my-0 py-4~ px-4 s-supp-bg-1-opt5~ s-bg-color2 s-dark-cr~ s-white-cr border-0 rounded-right s-no-rounded-left\"\n        id=\"inputGroupSelect01\">\n        <!-- english -->\n        <option>English</option>\n        <!-- arabic -->\n        <option>Arabic</option>\n    </select>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-profile/user-profile.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-profile/user-profile.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table *ngIf=\"userDetails\" class=\"table-fill\">\n  <thead>\n      <tr>\n          <th colspan=\"2\" class=\"text-center\">User Profile</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr>\n          <td>First Name</td>\n          <td>{{userDetails.fullName.split(' ')[0]}}</td>\n      </tr>\n      <tr>\n          <td>Last Name</td>\n          <td>{{userDetails.fullName.split(' ')[1]}}</td>\n      </tr>\n      <tr>\n          <td>Email</td>\n          <td>{{userDetails.email}}</td>\n      </tr>\n      <tr>\n          <td colspan=\"2\" class=\"text-center\">\n              <input type=\"button\" (click)=\"onLogout()\" value=\"Logout\" />\n          </td>\n      </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-in/sign-in.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-in/sign-in.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='signinFormHolder' class=\"s-dark-bg d-flex flex-column justify-content-center align-content-center\">\n  <h2 class=\"text-center mb-5 s-supp-cr-1 s-no-outline\"> Sign In </h2>\n  <div class='container'>\n    <div class='row '>\n      <div class='col d-flex justify-content-center align-content-center'>\n        <form #signInForm=\"ngForm\" class='w-75' (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n          <!-- Email -->\n          <div class=\"form-group my-4\">\n            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n              <button disabled\n              [ngStyle]='signInForm.submitted && email.errors?.pattern || serverErrorMessages ? {\n                  \"background-image\" : \"url(/assets/Icons/login/userRed.png)\"\n                }: false'\n              class=\"btn input-group-text s-icon-btn s-icon-user s-no-rounded-right s-dark2-bg border-0 rounded-left\"></button>\n              <input name=\"email\" ngModel required #email=\"ngModel\" (keyup.enter)='clickSubmit()' aria-describedby=\"emailHelp\" type=\"text\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\"\n                required [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\" \n                class='form-control s-temp-btn  my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                [class.borderRed]='email.touched && !email.valid' id=\"exampleInputEmail1\">\n            </div>\n              <!-- err Email -->\n              <p *ngIf=\"signInForm.submitted && email.errors?.pattern\" id=\"emailHelp\" class=\"form-text text-danger my-3 mx-5\">Invalid email address</p>\n          </div>\n          <!-- Password -->\n          <div class=\"form-group mb-4\">\n            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n              <button disabled\n                [ngStyle]='signInForm.submitted && password.errors?.minlength || serverErrorMessages ? {\n                  \"background-image\" : \"url(/assets/Icons/login/passwordRed.png)\"\n                }: false'\n              class=\"btn input-group-text s-icon-btn s-icon-password s-no-rounded-right s-dark2-bg border-0 rounded-left\"></button>\n              <input  name=\"password\" ngModel required #password=\"ngModel\" (keyup.enter)='clickSubmit()' type=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Password\"\n                [class.borderRed]='password.touched && !password.valid' id=\"exampleInputEmail1\"\n                required minlength=\"4\" \n                class='form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'\n                [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n            </div>\n              <!-- err Password -->\n              <p *ngIf=\"signInForm.submitted && password.errors?.minlength\" id=\"emailHelp\" class=\"form-text text-danger my-3 mx-5\">Minimum 4 characters.</p>\n              <p class=\"alert form-text text-danger my-3 mx-\" *ngIf=\"serverErrorMessages\">{{serverErrorMessages}}</p>\n            <!-- <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n              <label class=\"validation-message\">Minimum 4 characters.</label>\n            </div> -->\n          </div>\n          <!-- submit -->\n          <input [disabled]='signInForm.invalid' id='submitLogin' type=\"submit\" value=\"Sign In\" class='btn my-3 s-main-bg s-dark-cr rounded btn-lg s-submit w-100'>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-up/sign-up.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-up/sign-up.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-notifications class='position-absolute s-make-me-up'></app-notifications>\n<div id='signupFormHolder' class=\"s-dark-bg d-flex flex-column justify-content-center align-content-center\">\n  <h2 class=\"text-center mb-5 s-supp-cr-1 s-no-outline\"> Sign Up </h2>\n  <div class='container'>\n    <div class='row'>\n      <div class='col d-flex justify-content-center align-content-center'>\n        <form #signUpForm=\"ngForm\" class='w-75' (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n          <!-- full Name -->\n          <div class=\"form-group my-4\">\n            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n              <button disabled class=\"btn input-group-text s-icon-btn s-icon-user s-no-rounded-right s-dark2-bg border-0 rounded-left\"></button>\n              <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\n              minlength=\"4\"\n              [class.borderRed]=\"fullName.touched && !fullName.valid\"\n              required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\" \n              class='form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n            </div>\n          </div>\n          <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\n            <label class=\"validation-message s-main-cr\">This field is required.</label>\n          </div>\n          <!-- Email -->\n          <div class=\"form-group my-4\">\n            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n              <button disabled class=\"btn input-group-text s-icon-btn s-icon-email s-no-rounded-right s-dark2-bg border-0 rounded-left\"></button>\n              <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n              [class.borderRed]=\"email.touched && !email.valid\"\n              required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\"\n              class='form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n            </div>\n          </div>\n          <div *ngIf=\"signUpForm.submitted && email.errors\">\n            <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n          </div>\n          <!-- Password -->\n          <div class=\"form-group my-4\">\n            <div class=\"input-group md-form form-sm form-2 pl-0 rounded\">\n              <button disabled class=\"btn input-group-text s-icon-btn s-icon-password s-no-rounded-right s-dark2-bg border-0 rounded-left\"></button>\n              <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n              [class.borderRed]=\"password.touched && !password.valid\"\n              minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\"\n              class='form-control s-temp-btn my-0 py-4 px-4 s-supp-bg-1-opt5 border-0 rounded-right s-no-rounded-left'>\n            </div>\n          </div>\n          <div *ngIf=\"signUpForm.submitted && password.errors\">\n            <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n          </div>\n          <input [disabled]='signUpForm.invalid' type=\"submit\" value=\"Sign Up\" class='btn my-3 s-main-bg s-dark-cr rounded btn-lg s-submit w-100'>\n        </form>\n\n        <!-- Success message -->\n        <div class=\"success\" *ngIf=\"showSucessMessage\">\n          Saved successfully\n        </div>\n\n        <!-- Error message -->\n        <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n          {{serverErrorMessages}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/user.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/user.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='loginFormHolder' class=\"\">\n  <!-- s-dark-bg d-flex flex-column~ justify-content-center align-content-center -->\n  <div id=\"formContent\" class=''>\n    <!-- <h2 class=\"text-center mb-5 s-supp-cr-1 s-no-outline\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2> -->\n    <!-- <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2> -->\n    <router-outlet></router-outlet>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section class='position-fixed'> -->\n<nav class=\"navbar s-navbar navbar-expand-lg s-supp-bg-4 navbar-light s-dark-cr p-0 position-fixed w-100\">\n  <a class=\"navbar-brand s-main-bgx d-lg-block d-none px-lg-5 m-0\" routerLink=\"\">LOGO</a>\n  <button class=\"navbar-toggler ml-autox position-relative m-auto boder-0 p-3\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n    <a class=\"navbar-brand s-main-bgx m-auto\">LOGO</a>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav text-center h-100 d-flex align-items-stretch text-lg-left\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" #home>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink=\"\">HOME</a>\n      </li>\n      <li class=\"nav-item\"  routerLinkActive=\"active\" #about>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink=\"/about\">ABOUT</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" #categories>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink=\"/categories\" >CATEGORIES</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" #products>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink=\"/product\" >PRODUCT</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" #blog>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink='/blog' >BLOG</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" #contact>\n        <a class=\"nav-link s-dark-cr p-3\" routerLink='/contact' >CONTACT</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class='s-under-nav'></div>\n<!-- </section> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='notificationsHolder' [style.right]='notifyState ?  \"0\" : \"-300px\"' [style.opacity]='notifyState ?  \"1\" : \"0\"' [ngClass]='alertType' class=\" s-notify-holder position-fixed alert fade show mr-lg-5 mt-lg-3 m-4\" role=\"alert\">\n    {{notifyMessage}}<strong>{{notifyMessageStrong}}</strong>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-studio/product-studio.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-studio/product-studio.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductStudioProductStudioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='productsHolder' class='container-fluid s-supp-bg-3 p-4 d-flex flex-column'>\n    <ng-container *ngIf='isLoaded'>\n        <!-- Product ((Name)) {{ROW}} -->\n        <div class='row justify-content-center p-lg-5 p-4'>\n            <div class='col-lg-4 col-md-6 col'>\n                <p class='text-center p-3 h4 s-product-named s-no-border s-supp-cr-1 text-uppercase'>{{product.prod_name}}</p>\n            </div>\n        </div>\n        <!-- Product ((Info)) {{ROW}} -->\n        <div class='row flex-fill'>\n            <!-- arrow left [0] -->\n            <!-- <div class='col-1 d-flex order-0'>\n                <div class='s-arrow-left w-100 h-100 s-page-opacity'></div>\n            </div> -->\n            <!-- Description and Categorys [1]-->\n            <div class='col-lg col-12 s-supp-cr-1 p-4 d-flex flex-column order-lg-0 order-2'>\n                <!-- Description -->\n                <div class='row'>\n                    <div class='col'>\n                        <p class='h5 text-center text-lg-left p-3 p-lg-0'>Description</p>\n                        <p title='Procuct Description' class='w-100 s-supp-bg-3 s-no-border s-prod-desc s-supp-cr-1 p-2'>\n                        {{product.prod_desc}}\n                        </p>\n                    </div>\n                </div>\n                <!-- Price -->\n                <div *ngIf='product.price' class='row px-3 m-3~'>\n                    <div class='col d-flex justify-content-lg-end justify-content-center p-lg-0'>\n                        <div class=' border-0 d-flex align-items-center s-temp-btn'>\n                            <span class='s-supp-cr-4'>Price &nbsp; &nbsp; </span>\n                        </div>\n                        <div class='s-temp-btn rounded light-yellow-bg py-0 px-3 border-0 d-flex align-items-center'>\n                            {{product.price.cost}} {{product.price.tag}}\n                        </div>\n                \n                    </div>\n                </div>\n                <!-- Categorys -->\n                <div class='row p-3 m-3~'>\n                    <div class='col d-flex justify-content-lg-end justify-content-center p-lg-0'>\n                        <!-- Add Category -->\n                        <div class=' border-0 d-flex align-items-center s-temp-btn'>\n                            <span class='s-supp-cr-4'>Category &nbsp; &nbsp; </span>\n                        </div>\n                        <div class='s-temp-btn rounded light-yellow-bg py-0 px-3 border-0 d-flex align-items-center'>\n                            {{category.categ_name}}\n                        </div>\n                \n                    </div>\n                </div>\n                <!-- Sub Categories  -->\n                <div class='row px-3 justify-content-lg-end justify-content-center'>\n                    <!-- Add Sub Categories -->\n                    <div class=' border-0 d-flex align-items-center s-temp-btn'>\n                        <span class='s-supp-cr-4'>Sub-Category &nbsp; &nbsp; </span>\n                    </div>\n                    <div class='rounded s-white-bg py-0 px-3 border-0 d-flex align-items-center dropdown s-temp-btn'>\n                        {{product.prod_sub_category}}\n                    </div>\n                </div>\n            </div>\n            <!-- Products Main Image  [2]-->\n            <div class='col-lg col-12 s-main-img-col p-4 d-flex justify-content-center align-items-center order-lg-1 order-0'>\n                <div id='mainImgBox' class=\"s-main-image-view s-page-opacity-2 rounded\" [ngStyle]=\"{\n                    'background-image' :'url('+ prod_service.getUrl(mainImage) + ')',\n                    ' background-repeat': 'no-repeat',\n                    'background-position': 'center',\n                    'background-size': 'cover',\n                    'border': 'none'\n                }\">\n                </div>\n            </div>\n            <!-- Products Side Images and colors [3]-->\n            <div class=' col-lg col-12 s-side-col p-4 d-flex flex-column order-1'>\n                <div id='colorHolder' class=' row h-100'>\n                    <!-- Colors -->\n                    <div class='col-lg col-12 p-lg-0 p-3 d-flex flex-column flex-lg-row order-lg-0 order-1 justify-content-center align-items-center'>\n                        <div id='colorHolder' class='bg-warning~ s-side-imgs-holder d-flex flex-lg-column flex-row justify-content-center align-items-center '>\n                            <ng-container *ngFor='let prodColor of product.prod_colors let i = index'>\n                                <div (click)='selectColor(i); selectedColor(i)' [class.s-selected]='i == selectedColorBox' *ngIf='prodColor.prod_color' class='m-2 s-product-color'\n                                [ngStyle]=\"{\n                                    'background-color': prodColor.prod_color\n                                }\">\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!-- side images -->\n                    <div id='sideImageCol' class='col-lg col-12 d-flex order-lg-1 order-0 justify-content-center align-items-center'>\n                        <!-- slider holder -->\n                        <div class='s-side-imgs-holder d-flex flex-lg-column flex-row justify-content-center align-items-center '>\n                            <ng-container *ngFor='let sideImages of productColorImages let i = index'>\n                                <div (click)='selectImage(i); selectedSideImage(i)' *ngIf='sideImages.prod_side_img' [class.s-selected-image]='i == selectedImageBox' [class.s-page-opacity]='i != selectedImageBox' class='position-relative m-2 s-side-image rounded'\n                                [ngStyle]=\"{   \n                                    'background-image' :'url('+ prod_service.getUrl(sideImages.prod_side_img) + ')',\n                                    ' background-repeat': 'no-repeat',\n                                    'background-position': 'center',\n                                    'background-size': 'cover',\n                                    'border': 'none'\n                                }\"@fade>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- arrow right [0] -->\n            <!-- <div class='col-1 d-flex order-3'>\n                <div class='s-arrow-right w-100 h-100 s-page-opacity'></div>\n            </div> -->\n        </div>\n\n        <!-- Product ((Controls))  {{ROW}} -->\n        <!-- <div class='row  s-controls-holder'> -->\n            <!-- <div class='col d-flex justify-content-center align-items-center'>\n                <div #prodBox *ngFor='let x of xs let i = index' class='d-flex justify-content-center align-items-center s-page-opacity s-prod-sliders-box s-supp-bg-3 mx-1' \n                    [attr.data-target-box] ='i'\n                    (click)='selectProdBox(prodBox)'>\n                </div>\n            </div> -->\n        <!-- </div> -->\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Slider -->\n<div *ngIf='isLoaded' id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active \">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\"\n      [ngStyle]=\"{\n        'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_slides[0].slide_image) + ')'\n      }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{pageData[0].page_slides[0].slide_text}}</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\"\n      [ngStyle]=\"{\n        'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_slides[1].slide_image) + ')'\n      }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{pageData[0].page_slides[1].slide_text}}</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <p class=\"d-block w-100x s-slider-image\" alt=\"...\"\n      [ngStyle]=\"{\n        'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_slides[2].slide_image) + ')'\n      }\"></p>\n      <div class=\" carousel-caption d-none d-md-block h-50\">\n        <p class='h3 pb-5 s-text-shadow-slider'>{{pageData[0].page_slides[2].slide_text}}</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!-- header {{Hot Section}} -->\n<div *ngIf='isLoaded' class='container-fluid s-supp-bg-4'>\n  <div class='row'>\n    <!-- large Box -->\n    <div class='col-md-6 col-12 p-2'>\n      <div class='rounded-left s-large-hot-box s-hot-box w-100 d-flex align-items-end mt-md-2 ml-md-2 m-0 p-2'\n      [ngStyle]=\"{\n        'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_hot_sec[0].box_image) + ')'\n      }\">\n        <div class='s-hot-text-holder s-supp-cr-4 w-100 h-50 text-center~ p-4 d-flex flex-column justify-content-around align-items-center'>\n          <p class='h1 s-text-shadow'>{{pageData[0].page_hot_sec[0].box_name}}</p>\n          <div class='s-hot-desc mb-2 text-center'>\n            <p class='lead s-text-shadow'>\n              {{pageData[0].page_hot_sec[0].box_desc}}\n            </p>\n          </div>\n          <a [routerLink]='\"/product/\" + pageData[0].page_hot_sec[0].box_prodID' class='btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know More</a>\n        </div>\n      </div>\n    </div>\n    <!-- small boxes -->\n    <div class='col-md-6 col-12 p-2'>\n      <div class='row px-0 pb-2 mb-0 mt-md-2 mx-md-2 m-0 '>\n        <div class='rounded-right s-small-hot-box s-hot-box w-100 d-flex align-items-end p-2'\n         [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_hot_sec[1].box_image) + ')'\n        }\">\n          <div class='s-hot-text-holder s-supp-cr-4 w-100 h-50 text-center~ p-4 d-flex flex-column justify-content-around align-items-center'>\n            <p class='h1 s-text-shadow'>{{pageData[0].page_hot_sec[1].box_name}}</p>\n            <a [routerLink]='\"/product/\" + pageData[0].page_hot_sec[1].box_prodID' class='m-auto~ btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know More</a>\n          </div>\n        </div>\n      </div>\n      <div class='row px-0 pt-2 my-md-0 mx-md-2 m-0'>\n        <div class='rounded-right s-small-hot-box s-hot-box w-100 d-flex align-items-end p-2'\n         [ngStyle]=\"{\n          'background-image' : 'url('+ pagesImgs_service.getUrl(pageData[0].page_hot_sec[2].box_image) + ')'\n        }\">\n          <div class='s-hot-text-holder s-supp-cr-4 w-100 h-50 p-4 d-flex flex-column justify-content-around align-items-center'>\n            <p class='h1 s-text-shadow'>{{pageData[0].page_hot_sec[2].box_name}}</p>\n            <a [routerLink]='\"/product/\" + pageData[0].page_hot_sec[2].box_prodID' class=' btn s-btn-tem-h mx-1 px-5 input-group-text border-0 s-main-bg s-dark-cr rounded'>Know More</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Body -->\n<div id='prodBody' class='container-fluid s-supp-bg-4 s-main-holder'>\n  <div class='container pt-5'>\n    <!-- Controller bar -->\n    <div class='row m-0 position-sticky s-controller-bar rounded shadow-sm'>\n      <!-- category name -->\n      <div class='col-md-2 col-12 p-0 s-supp-bg-3 rounded-left'>\n        <button class='btn s-main-bg s-supp-cr-2 rounded-left py-2 px-4 mr-3 s-selected-categ-btns w-100'\n          [title]='CategoryName'>{{CategoryName}}</button>\n      </div>\n      <!-- categories btns -->\n      <div class='col-md-6 col-12 p-0 my-2 my-md-0 s-supp-bg-3 position-relative'>\n        <div class='position-absolute s-supp-bg-3 s-dash d-none d-md-block'></div>\n        <div class='s-categories-holder d-flex align-items-center'>\n          <div class='s-supp-bg-3 s-dash-right d-none d-md-block px-3'></div>\n          <button (click)='selectAllCategory()'\n            class='btn s-supp-bg-4 s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns'>All</button>\n          <button *ngFor='let category of categories let i = index'\n            (click)='selectCategory(category._id, category.categ_name); selectSubCategOfCateg(category.sub_categories)'\n            class='btn s-supp-bg-4 s-supp-cr-2 rounded py-2 px-4 mr-3 s-categories-btns'>{{category.categ_name}}</button>\n          <div class='s-supp-bg-3 s-dash-right d-none d-md-block pr-3'></div>\n        </div>\n        <div class='position-absolute s-supp-bg-3 s-dash-right d-none d-md-block'></div>\n      </div>\n      <!-- search Bar -->\n      <div class='col p-0 s-supp-bg-3 rounded-right'>\n        <div class=\"input-group md-form form-sm form-2 pl-0 s-white-50-bg rounded-right\">\n          <input class=\"form-control my-0 py-4 px-4 s-white-50-bg border-0 s-serach-bar \" type=\"text\" placeholder=\"Search\"\n            aria-label=\"Search\" [(ngModel)]='searchValue'>\n          <div class=\"input-group-append rounded-right\">\n            <button class=\"btn input-group-text s-search-btn s-white-50-bg border-0 rounded-right\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Sub Categories -->\n    <div *ngIf='productsByCategories != \"\"' class='row mx-5 mt-5'>\n      <div class='col-12 position-relative'>\n        <div class='position-absolute s-dash d-none d-md-block s-supp-bg-4'></div>\n        <div class='s-sub-categories-holder d-flex align-items-center pl-5'>\n          <div class=' d-flex m-auto'>\n            <button id='allProdOfSubCateg' (click)='selectAllSubCategories()' data-select='false'\n              [class.s-sub-categories-selected_btns]='productBySubCateg == \"\"'\n              class='btn s-dark-bg s-supp-cr-3 rounded py-2 px-4 mr-3 s-sub-categories-btns'>All</button>\n            <button *ngFor='let subCategories of selectedSubCategOfCateg let i = index'\n              (click)='selectProdsOfSubCateg(subCategories)' data-select='false'\n              class='btn s-dark-bg s-supp-cr-3 rounded py-2 px-4 mr-3 s-sub-categories-btns'>{{subCategories}}</button>\n            <div class='s-dash-right px-3 d-none d-md-block s-dark2-bg'></div>\n          </div>\n        </div>\n        <div class='position-absolute s-dash-right-2 d-none d-md-block s-supp-bg-4 '></div>\n      </div>\n    </div>\n    <!--All Products -->\n    <ng-container *ngIf='productsByCategories == \"\"'>\n      <div class='row row m-0 py-5'>\n        <div *ngFor='let product of products | filter:searchValue' class='col-lg-3 col-sm-6 col-12 pt-0 px-0 pb-3'>\n          <div (click)='selectProductById(product._id)' class=' s-product-box-holder mx-2 mb-5'>\n            <!-- image -->\n            <div class='s-product-box' [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n            'background-image' :'url('+ prod_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n            } : false\"></div>\n            <!-- Title -->\n            <p class='lead m-0 pt-3 px-3 pb-2 text-center text-md-left'>{{product.prod_name}}</p>\n            <!-- Description -->\n            <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left'>{{product.prod_desc}}</p>\n          </div>\n        </div>\n        <div *ngIf='!products' class='col-12 s-no-products d-flex justify-content-center align-items-center'>\n          <p class='display-4 text-center s-supp-cr-3'> No Products !</p>\n        </div>\n      </div>\n    </ng-container>\n    <!-- Products By Category -->\n    <ng-container *ngIf='productsByCategories != \"\" && productBySubCateg == \"\" '>\n      <div class='row row m-0 py-5'>\n        <div *ngFor='let product of productsByCategories | filter:searchValue'\n          class='col-lg-3 col-sm-6 col-12 pt-0 px-0 pb-3'>\n          <div (click)='selectProductById(product._id)' class=' s-product-box-holder mx-2 mb-5'>\n            <!-- image -->\n            <div class='s-product-box' [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n            'background-image' :'url('+ prod_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n            } : false\"></div>\n            <!-- Title -->\n            <p class='lead m-0 pt-3 px-3 pb-2 text-center text-md-left'>{{product.prod_name}}</p>\n            <!-- Description -->\n            <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left'>{{product.prod_desc}}</p>\n          </div>\n        </div>\n        <div *ngIf='!productsByCategories'\n          class='col-12 s-no-products d-flex justify-content-center align-items-center'>\n          <p class='display-4 text-center s-supp-cr-3'> No Products !</p>\n        </div>\n      </div>\n    </ng-container>\n    <!-- Products by sub Categories -->\n    <ng-container *ngIf='productsByCategories != \"\" && productBySubCateg != \"\"  '>\n      <div class='row row m-0 py-5'>\n        <div *ngFor='let product of productBySubCateg | filter:searchValue'\n          class='col-lg-3 col-sm-6 col-12 pt-0 px-0 pb-3'>\n          <div (click)='selectProductById(product._id)' class=' s-product-box-holder mx-2 mb-5'>\n            <!-- image -->\n            <div class='s-product-box' [ngStyle]=\"product.prod_colors[0].prod_images != undefined ? {   \n                  'background-image' :'url('+ prod_service.getUrl(product.prod_colors[0].prod_images[0].prod_side_img) + ')'\n                  } : false\"></div>\n            <!-- Title -->\n            <p class='lead m-0 pt-3 px-3 pb-2 text-center text-md-left'>{{product.prod_name}}</p>\n            <!-- Description -->\n            <p class='s-supp-cr-1 px-3 pb-3 text-center text-md-left'>{{product.prod_desc}}</p>\n          </div>\n        </div>\n        <div *ngIf='!productBySubCateg' class='col-12 s-no-products d-flex justify-content-center align-items-center'>\n          <p class='display-4 text-center s-supp-cr-3'> No Products !</p>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/whatsapp-menu/whatsapp-menu.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/whatsapp-menu/whatsapp-menu.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWhatsappMenuWhatsappMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button id='menuBut' type=\"button\" class=\"btn btn-primary invisible\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Whatsapp</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div *ngIf='isLoaded' class=\"modal-body\">\n                <a *ngFor='let num of data' class=' m-2 d-block'>\n                    <img class='m-2' width='26' src=\"/assets/Icons/contact-icons/whatsapp.png\" alt=\"\">\n                    {{num}}\n                </a>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-about-main-holder{\n    overflow: hidden;\n}\n.s-content-background{\nright: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;\nbackground-size : 600px;\nbackground-position: right bottom;\nbackground-repeat :no-repeat;\n}\n.s-section-row{\n    min-height: 100%;\n}\n.s-about-content-holder {\n  height: 100%;\n  overflow: hidden;\n}\n@media (max-width: 576px) {\n    .s-content-background{\n        background-position: center bottom;\n        \n    }\n  \n}\n@media (max-width: 992px) {\n    .s-about-main-holder {\n      overflow: scroll;\n    }\n    .s-about-content-holder {\n      height: 100%;\n      overflow: scroll;\n    }\n    .s-content-background {\n       opacity: .4;\n\n    }\n}\n.s-about-title-hr{\n    width: 30%;\n    display: inline-block;\n}\n.s-about-controller{\n    cursor: pointer;\n}\n.s-about-controller:hover{\n    opacity: 1;\n}\n.s-controllers-holder{\n    height: 100%;\n    right: 0;\n    top: 0;\n    z-index: 1000;\n}\n.s-about-contact-button{\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    border-radius: 10px;\n}\n.s-about-contact-button:hover {\n  background-color: #FFFBA0;\n}\n.s-contact-holder-md{\n    background: inherit;\n    background-color: rgba(209, 209, 209, .95);\n    top: 62px;\n    width: 100%;\n}\n.s-x{\n    border: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTixXQUFXO0FBQ1gsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksa0NBQWtDOztJQUV0Qzs7QUFFSjtBQUNBO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7SUFDQTtPQUNHLFdBQVc7O0lBRWQ7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtYWJvdXQtbWFpbi1ob2xkZXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zLWNvbnRlbnQtYmFja2dyb3VuZHtcbnJpZ2h0OiAwO1xudG9wOiAwO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5iYWNrZ3JvdW5kLXNpemUgOiA2MDBweDtcbmJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbmJhY2tncm91bmQtcmVwZWF0IDpuby1yZXBlYXQ7XG59XG4ucy1zZWN0aW9uLXJvd3tcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLnMtYWJvdXQtY29udGVudC1ob2xkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAucy1jb250ZW50LWJhY2tncm91bmR7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIFxuICAgIH1cbiAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAucy1hYm91dC1tYWluLWhvbGRlciB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICAucy1hYm91dC1jb250ZW50LWhvbGRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICAucy1jb250ZW50LWJhY2tncm91bmQge1xuICAgICAgIG9wYWNpdHk6IC40O1xuXG4gICAgfVxufVxuLnMtYWJvdXQtdGl0bGUtaHJ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucy1hYm91dC1jb250cm9sbGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLWFib3V0LWNvbnRyb2xsZXI6aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5zLWNvbnRyb2xsZXJzLWhvbGRlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ucy1hYm91dC1jb250YWN0LWJ1dHRvbntcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucy1hYm91dC1jb250YWN0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZCQTA7XG59XG4ucy1jb250YWN0LWhvbGRlci1tZHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMDksIDIwOSwgLjk1KTtcbiAgICB0b3A6IDYycHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucy14e1xuICAgIGJvcmRlcjogZ3JlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/about.service */
    "./src/app/services/about.service.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../whatsapp-menu/whatsapp-menu.component */
    "./src/app/whatsapp-menu/whatsapp-menu.component.ts");
    /* harmony import */


    var _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(about_service, contact_service, pagesImgs_service) {
        _classCallCheck(this, AboutComponent);

        this.about_service = about_service;
        this.contact_service = contact_service;
        this.pagesImgs_service = pagesImgs_service; // content title array

        this.content = ["history", "mission", "vission"]; // ?add here to add a new section;
        // contentSection

        this.contentSection = this.content[0];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // on load
          resizeContentHolder(); // winodw {{RESIZE}} event

          window.addEventListener("resize", function () {
            resizeContentHolder();
            resetHash();
          }); // window {{ scroll }} event

          $("#aboutHolder").on("scroll", function (e) {
            var st = $("#aboutHolder").scrollTop();
            var sections = $("section");
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var section = _step.value;

                if ($(section).offset().top < window.pageYOffset + 62 && $(section).offset().top + $(section).height() > window.pageYOffset + 62) {
                  //get section id
                  var id = $(section).attr("id"); // reset hash for resize and scroller on off switcher {{TRUE}}

                  _this.resetHashONOFF = true; // switch controller {{dots}} change dots to the selected dot

                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = _this.content[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var cont = _step2.value;

                      switch (cont) {
                        case id:
                          var index = _this.content.indexOf(cont);

                          _this.dataContentAt(index);

                          _this.contentSection = cont;
                      }
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }); //resize the content container holder to fit the window height size

          function resizeContentHolder() {
            var innerHeightWithoutNav = window.innerHeight - 56;

            if (innerHeightWithoutNav > 700) {
              $("#contentHolder").css("height", innerHeightWithoutNav);
            } else {
              $("#contentHolder").css("height", 700);
            }
          } // reset the hash value of the URL


          var resetHash = function resetHash() {
            // if window scrolled little bet, the {{resetHashONOFF}} will be true to make it = #, and back it to the section id to set the section on the write place  
            if (_this.resetHashONOFF == true) {
              window.location.hash = "#";
              _this.resetHashONOFF = false;
            }

            window.location.hash = "#" + _this.contentSection;
          };

          resetHash();
          this.getAllSections();
          this.getdata();
        }
      }, {
        key: "openWhatsappMenu",
        value: function openWhatsappMenu() {
          this.whatsapp_menu.openMenu();
        } //stop the animations

      }, {
        key: "stopAnimation",
        value: function stopAnimation() {
          $("[data-section=image], [data-section=title], [data-section=article]").stop(true, false);
          clearTimeout(this.hashSwitcher);
        } // Content data switcher

      }, {
        key: "contentSwitcher",
        value: function contentSwitcher(contentSection) {
          this.stopAnimation(); // select the section elements from the DOM
          // image

          $("[data-section=image]").fadeOut(600).fadeIn(1000); // title

          $("[data-section=title]").fadeOut(600).fadeIn(400); // article

          $("[data-section=article]").fadeOut(600).fadeIn(800); //pass the hash name

          this.hashSwitcher = setTimeout(function () {
            window.location.hash = "#" + contentSection;
          }, 600);
        } // up and down sliders buttons

      }, {
        key: "upAndDownSlider",
        value: function upAndDownSlider(btn) {
          var contentSectionIndex = $(btn).attr("data-content-at");
          var selectedBtn = btn.id;

          switch (selectedBtn) {
            // Slide Up
            case "onUpSlider":
              if (contentSectionIndex <= 0) {
                contentSectionIndex = this.content.length - 1;
              } else {
                contentSectionIndex--;
              }

              break;
            // Slide Down

            case "onDownSlider":
              if (contentSectionIndex >= this.content.length - 1) {
                contentSectionIndex = 0;
              } else {
                contentSectionIndex++;
              }

              break;
          } // select the content section name from the {{content}} array to pass it to the {{ contentSwitcher() }}


          this.contentSection = this.content[contentSectionIndex]; // change the data at

          this.dataContentAt(contentSectionIndex);
          this.contentSwitcher(this.contentSection);
        } //save the section index number to the sliders buttons

      }, {
        key: "dataContentAt",
        value: function dataContentAt(contentSectionIndex) {
          $("#onUpSlider").attr("data-content-at", contentSectionIndex);
          $("#onDownSlider").attr("data-content-at", contentSectionIndex); // give opacity to the selected section {{dot button}}

          this.dotsOpt(contentSectionIndex);
        } // switch content with dots buttons

      }, {
        key: "sectionsBtns",
        value: function sectionsBtns(btn) {
          var contentSectionIndex = $(btn).attr("data-Content");
          this.contentSection = this.content[contentSectionIndex];
          this.dataContentAt(contentSectionIndex);
          this.contentSwitcher(this.contentSection);
        } // dots opacity

      }, {
        key: "dotsOpt",
        value: function dotsOpt(contentSectionIndex) {
          // switch the value to string
          var toStr = String(contentSectionIndex);
          var children = $("#contentControllers").children();
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var chi = _step3.value;
              var dots = $(chi).attr("data-content");

              switch (dots) {
                case toStr:
                  // the selected section
                  $(chi).removeClass("s-opc-5");
                  break;

                default:
                  // all sections without the selection
                  $(chi).addClass("s-opc-5");
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        } // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({Sections Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] get all sections

      }, {
        key: "getAllSections",
        value: function getAllSections() {
          var _this2 = this;

          this.about_service.getSections().subscribe(function (res) {
            _this2.aboutSections = res;
          }, function (err) {}, function () {});
        } // [?] get contacts data (Sochial Media)

      }, {
        key: "getdata",
        value: function getdata() {
          var _this3 = this;

          this.contact_service.getSections().subscribe(function (res) {
            _this3.socialMedia = res[0].contact_info.socialMedia;
          }, function (err) {}, function () {
            _this3.isLoaded = true;
          });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]
      }, {
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
      }, {
        type: _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__["PagesImgsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_4__["WhatsappMenuComponent"], {
      static: false
    })], AboutComponent.prototype, "whatsapp_menu", void 0);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/about-panel/about-panel.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-pages/about-panel/about-panel.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesAboutPanelAboutPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-title{\n     background-image: url('/assets/Icons/admin-about/title.png');\n}\n.s-icon-image{\n     background-image: url('/assets/Icons/admin-about/addNewImg.png');\n}\n.s-icon-art{\n     background-image: url('/assets/Icons/admin-about/article.png');\n}\n.s-img-inp{\n  cursor: pointer;\n}\n.s-btn-tem-h{\n    height: 48px;\n}\n.s-modal-inp{\n    /* background-color: rgba(152, 155, 155, .1); */\n    white-space: nowrap;\n    overflow: hidden;\n}\n.s-modal-inp:hover{\n    overflow-x: auto;\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-save-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYWJvdXQtcGFuZWwvYWJvdXQtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUNBO0tBQ0ssNERBQTREO0FBQ2pFO0FBQ0E7S0FDSyxnRUFBZ0U7QUFDckU7QUFDQTtLQUNLLDhEQUE4RDtBQUNuRTtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0dBQ0cscUNBQXFDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0dBQ0csb0NBQW9DO0VBQ3JDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2Fib3V0LXBhbmVsL2Fib3V0LXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1pY29uLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1pY29uLXRpdGxle1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tYWJvdXQvdGl0bGUucG5nJyk7XG59XG4ucy1pY29uLWltYWdle1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tYWJvdXQvYWRkTmV3SW1nLnBuZycpO1xufVxuLnMtaWNvbi1hcnR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1hYm91dC9hcnRpY2xlLnBuZycpO1xufVxuLnMtaW1nLWlucHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtYnRuLXRlbS1oe1xuICAgIGhlaWdodDogNDhweDtcbn1cbi5zLW1vZGFsLWlucHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTU1LCAxNTUsIC4xKTsgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucy1tb2RhbC1pbnA6aG92ZXJ7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5zLW5vLXJvdW5kZWQtcmlnaHR7XG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtbm8tcm91bmRlZC1sZWZ0e1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1zYXZlLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZGRENGIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/about-panel/about-panel.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin-pages/about-panel/about-panel.component.ts ***!
    \******************************************************************/

  /*! exports provided: AboutPanelComponent */

  /***/
  function srcAppAdminPagesAboutPanelAboutPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPanelComponent", function () {
      return AboutPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/about.service */
    "./src/app/services/about.service.ts");
    /* harmony import */


    var _model_admin_about_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/admin-about-model */
    "./src/app/model/admin-about-model.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");
    /* harmony import */


    var src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/img-controls.service */
    "./src/app/services/img-controls.service.ts");

    var AboutPanelComponent =
    /*#__PURE__*/
    function () {
      function AboutPanelComponent(about_service, pagesImg_service, img_service) {
        _classCallCheck(this, AboutPanelComponent);

        this.about_service = about_service;
        this.pagesImg_service = pagesImg_service;
        this.img_service = img_service;
        this.imageFile = [];
      }

      _createClass(AboutPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#aboutHolder');
          this.getAllSections();
        } // ==================================================
        // {=========={([@] Tools )}==========}
        // ==================================================
        // [?] Redirect imgs coms from input file to asets file
        // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event, inp, index) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.imageFile[index] = file;
            $(inp).val(this.img_service.solvImgURL(event.target.value));
          }
        } // {=========={([@] Controlers )}==========}
        // [# Controlers] || ================================================== |({Sections})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] image file function

      }, {
        key: "sectionImage",
        value: function sectionImage(inp) {
          $(inp).click();
        } // [?] save

      }, {
        key: "clickSave",
        value: function clickSave() {
          $('[data-id=saveBtn]').click();
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controlers] || ================================================== |Sections| ---END---
        // {=========={([@] DATA )}==========}
        // [# DATA] || ================================================== |({Sections})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] section data

      }, {
        key: "sectionData",
        value: function sectionData(title, image, art) {
          var sectionModel = new _model_admin_about_model__WEBPACK_IMPORTED_MODULE_3__["AboutSectionModel"]();
          sectionModel.page_title = title;
          sectionModel.page_article = art;
          sectionModel.page_backgroundImage = image;
          return sectionModel;
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# DATA] || ================================================== |Sections| ---END---
        // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({Sections Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] get all sections

      }, {
        key: "getAllSections",
        value: function getAllSections() {
          var _this4 = this;

          this.about_service.getSections().subscribe(function (res) {
            _this4.aboutSections = res;
            console.log(_this4.aboutSections);
          });
        } // [?] upload image to the server

      }, {
        key: "postCategImg",
        value: function postCategImg(index) {
          var _this5 = this;

          var formData = new FormData();

          if (this.imageFile[index]) {
            formData.append('file', this.imageFile[index]);
            this.pagesImg_service.uploadImg(formData).subscribe(function (res) {
              _this5.pagesImg_service.deleteImage(_this5.aboutSections[index].page_backgroundImage).subscribe(function (res) {});
            }, function (err) {
              console.log(err);
            }, function () {
              _this5.getAllSections();

              _this5.imageFile = [];
            });
          }
        } // [?] update seciton data 

      }, {
        key: "updateSectionContent",
        value: function updateSectionContent(id, title, image, art, index) {
          var _this6 = this;

          var data = this.sectionData(title, image, art);
          this.about_service.updateSection(id, data).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this6.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this6.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this6.notify_component.notifyMe('alert-success', 'Section is', ' up to date!');
          });
        }
      }]);

      return AboutPanelComponent;
    }();

    AboutPanelComponent.ctorParameters = function () {
      return [{
        type: _services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]
      }, {
        type: src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__["PagesImgsService"]
      }, {
        type: src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__["ImgControlsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"], {
      static: false
    })], AboutPanelComponent.prototype, "notify_component", void 0);
    AboutPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/about-panel/about-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-panel.component.css */
      "./src/app/admin-pages/about-panel/about-panel.component.css")).default]
    })], AboutPanelComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/admin-nav/admin-nav.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin-pages/admin-nav/admin-nav.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesAdminNavAdminNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-navbar{\n    z-index: 1500;\n}\n.s-under-nav{\n    height: 56px;\n}\n@media (max-width: 992px) {\n  .s-under-nav {\n    height: 62px;\n  }\n}\n.nav-item:hover{\n  background: #FFFDCF;\n}\n.s-logout-btn:hover{\n  -webkit-transition: all ease-in-out .2s;\n  transition: all ease-in-out .2s;\n  background-color: #222222 !important;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 20px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-logout{\n     background-image: url('/assets/Icons/login/logout.png');\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYWRtaW4tbmF2L2FkbWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLG9DQUFvQztBQUN0QztBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0E7S0FDSyx1REFBdUQ7QUFDNUQ7QUFDQTtHQUNHLHFDQUFxQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9hZG1pbi1uYXYvYWRtaW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1uYXZiYXJ7XG4gICAgei1pbmRleDogMTUwMDtcbn1cbi5zLXVuZGVyLW5hdntcbiAgICBoZWlnaHQ6IDU2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnMtdW5kZXItbmF2IHtcbiAgICBoZWlnaHQ6IDYycHg7XG4gIH1cbn1cbi5uYXYtaXRlbTpob3ZlcntcbiAgYmFja2dyb3VuZDogI0ZGRkRDRjtcbn1cbi5zLWxvZ291dC1idG46aG92ZXJ7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn1cbi5zLWljb24tYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLWljb24tbG9nb3V0e1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvbG9naW4vbG9nb3V0LnBuZycpO1xufVxuLnMtbm8tcm91bmRlZC1yaWdodHtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1uby1yb3VuZGVkLWxlZnR7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/admin-nav/admin-nav.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin-pages/admin-nav/admin-nav.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdminNavComponent */

  /***/
  function srcAppAdminPagesAdminNavAdminNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminNavComponent", function () {
      return AdminNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../login/shared/user.service */
    "./src/app/login/shared/user.service.ts");

    var AdminNavComponent =
    /*#__PURE__*/
    function () {
      function AdminNavComponent(userService, router) {
        _classCallCheck(this, AdminNavComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AdminNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this7.userName = res['user'].fullName;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.deleteToken();
          this.userService.isAdmin = false;
          this.router.navigate(['/login']);
        }
      }]);

      return AdminNavComponent;
    }();

    AdminNavComponent.ctorParameters = function () {
      return [{
        type: _login_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-nav/admin-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-nav.component.css */
      "./src/app/admin-pages/admin-nav/admin-nav.component.css")).default]
    })], AdminNavComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/admin-panel/admin-panel.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-pages/admin-panel/admin-panel.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesAdminPanelAdminPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.s-box{\n    height: 350px;\n    -webkit-transition: ease-in-out .2s;\n    transition: ease-in-out .2s;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    text-shadow: 0px 0px 6px black;\n    border: none;\n    cursor: pointer;\n}\n.s-box:hover {\n    color : white !important;\n}\n.s-small-box{\n    height: 250px;\n    -webkit-transition: ease-in-out .2s;\n    transition: ease-in-out .2s;\n    background-repeat: no-repeat;\n    background-size: 180px;\n    background-position: center;\n    /* text-shadow: 0px 0px 6px black; */\n    border: none;\n    cursor: pointer;\n}\n.s-small-box:hover{\n    color : white !important;\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .5);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity:hover{\n    background: rgba(34, 34, 34, .8);\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 1px rgba(255, 251, 160,1);\n    cursor: pointer;\n}\n.s-category-box-obacity2{\n     width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .1);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity2:hover{\n    background: rgba(32, 180, 57,.5);\n}\n.s-categ-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/categories.png);\n}\n.s-prod-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/products.png);\n}\n.s-categ-main-box-icon{\n    background-image: url(\"/assets/Icons/admin-dashboard/categ main.png\");\n}\n.s-prod-main-box-icon{\n    background-image: url(\"/assets/Icons/admin-dashboard/prod main.png\");\n}\n/* pages */\n.s-home-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/home.png);\n}\n.s-about-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/about.png);\n}\n.s-contact-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/contact.png);\n}\n.s-blog-box-icon{\n    background-image: url(/assets/Icons/admin-dashboard/blog.png);\n}\n.s-new-admin-box-icon{\n    background-image: url('/assets/Icons/admin-dashboard/new admin.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtLQUM5QixpREFBaUQ7SUFDbEQsZUFBZTtBQUNuQjtBQUNBO0tBQ0ssV0FBVztJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsdUNBQStCO0lBQS9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxtRUFBbUU7QUFDdkU7QUFDQTtJQUNJLGlFQUFpRTtBQUNyRTtBQUNBO0lBQ0kscUVBQXFFO0FBQ3pFO0FBQ0E7SUFDSSxvRUFBb0U7QUFDeEU7QUFDQSxVQUFVO0FBQ1Y7SUFDSSw2REFBNkQ7QUFDakU7QUFDQTtJQUNJLDhEQUE4RDtBQUNsRTtBQUNBO0lBQ0ksZ0VBQWdFO0FBQ3BFO0FBQ0E7SUFDSSw2REFBNkQ7QUFDakU7QUFDQTtJQUNJLG9FQUFvRTtBQUN4RSIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zLWJveHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4ycztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1ib3g6aG92ZXIge1xuICAgIGNvbG9yIDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zLXNtYWxsLWJveHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4ycztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTgwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC8qIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtc21hbGwtYm94OmhvdmVye1xuICAgIGNvbG9yIDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zLWNhdGVnb3J5LWJveC1vYmFjaXR5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC41KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAuOCk7XG59XG4ucy1jYXRlZ29yeS1ib3g6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IHJnYmEoMjU1LCAyNTEsIDE2MCwxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1jYXRlZ29yeS1ib3gtb2JhY2l0eTJ7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHkyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzIsIDE4MCwgNTcsLjUpO1xufVxuLnMtY2F0ZWctYm94LWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSWNvbnMvYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3JpZXMucG5nKTtcbn1cbi5zLXByb2QtYm94LWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSWNvbnMvYWRtaW4tZGFzaGJvYXJkL3Byb2R1Y3RzLnBuZyk7XG59XG4ucy1jYXRlZy1tYWluLWJveC1pY29ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSWNvbnMvYWRtaW4tZGFzaGJvYXJkL2NhdGVnIG1haW4ucG5nXCIpO1xufVxuLnMtcHJvZC1tYWluLWJveC1pY29ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSWNvbnMvYWRtaW4tZGFzaGJvYXJkL3Byb2QgbWFpbi5wbmdcIik7XG59XG4vKiBwYWdlcyAqL1xuLnMtaG9tZS1ib3gtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9JY29ucy9hZG1pbi1kYXNoYm9hcmQvaG9tZS5wbmcpO1xufVxuLnMtYWJvdXQtYm94LWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSWNvbnMvYWRtaW4tZGFzaGJvYXJkL2Fib3V0LnBuZyk7XG59XG4ucy1jb250YWN0LWJveC1pY29ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL0ljb25zL2FkbWluLWRhc2hib2FyZC9jb250YWN0LnBuZyk7XG59XG4ucy1ibG9nLWJveC1pY29ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL0ljb25zL2FkbWluLWRhc2hib2FyZC9ibG9nLnBuZyk7XG59XG4ucy1uZXctYWRtaW4tYm94LWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWRhc2hib2FyZC9uZXcgYWRtaW4ucG5nJyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/admin-panel/admin-panel.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin-pages/admin-panel/admin-panel.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppAdminPagesAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminPanelComponent =
    /*#__PURE__*/
    function () {
      function AdminPanelComponent() {
        _classCallCheck(this, AdminPanelComponent);
      }

      _createClass(AdminPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#dashBoardHolder');
        }
      }]);

      return AdminPanelComponent;
    }();

    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/admin-panel/admin-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-panel.component.css */
      "./src/app/admin-pages/admin-panel/admin-panel.component.css")).default]
    })], AdminPanelComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/admin-tags/admin-tags.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/admin-pages/blog/admin-tags/admin-tags.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesBlogAdminTagsAdminTagsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-tag-box{\n    height: 100px;\n    width: 100%;\n    -webkit-transition: all ease-out .2s;\n    transition: all ease-out .2s;\n}\n.s-tag-icon-box{\n    background-position: center ;\n    background-repeat: no-repeat;\n    background-size: 35px;\n    background-image: url('add-tag.png');\n}\n.s-new-tag-icon-box{\n    background-position: center ;\n    background-repeat: no-repeat;\n    background-size: 35px;\n    background-image: url('tag.png');\n}\n.s-inp-font-larg{\n    font-size: 30px;\n}\n.s-tag-inp:hover{\n    color: #858989;\n}\n.s-new-tag-box{\n    border: 4px dashed rgba(152,155,155,.1);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-new-tag-box:hover{\n    border: 4px dashed rgba(152,155,155,.5);\n}\n.s-del-tag-btn{\n    right: -100%;\n    width: 100%;\n    height: 100%;\n    background-position-x: 25% ;\n    background-position-y: center ;\n    background-repeat: no-repeat;\n    background-size: 35px;\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    background-image: url('trash.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9hZG1pbi10YWdzL2FkbWluLXRhZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0NBQTRCO0lBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsb0NBQXNFO0FBQzFFO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixnQ0FBa0U7QUFDdEU7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLGtDQUFvRTtBQUN4RSIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2Jsb2cvYWRtaW4tdGFncy9hZG1pbi10YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1tYWtlLW1lLXVwe1xuICAgIHotaW5kZXg6IDQwMDA7XG59XG4ucy10YWctYm94e1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IC4ycztcbn1cbi5zLXRhZy1pY29uLWJveHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvSWNvbnMvYWRtaW4tYmxvZy9hZGQtdGFnLnBuZyk7XG59XG4ucy1uZXctdGFnLWljb24tYm94e1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9JY29ucy9hZG1pbi1ibG9nL3RhZy5wbmcpO1xufVxuLnMtaW5wLWZvbnQtbGFyZ3tcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4ucy10YWctaW5wOmhvdmVye1xuICAgIGNvbG9yOiAjODU4OTg5O1xufVxuLnMtbmV3LXRhZy1ib3h7XG4gICAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEoMTUyLDE1NSwxNTUsLjEpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1uZXctdGFnLWJveDpob3ZlcntcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYSgxNTIsMTU1LDE1NSwuNSk7XG59XG4ucy1kZWwtdGFnLWJ0bntcbiAgICByaWdodDogLTEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMjUlIDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlciA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL0ljb25zL2FkbWluLWJsb2cvdHJhc2gucG5nKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/admin-tags/admin-tags.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin-pages/blog/admin-tags/admin-tags.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminTagsComponent */

  /***/
  function srcAppAdminPagesBlogAdminTagsAdminTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTagsComponent", function () {
      return AdminTagsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");

    var AdminTagsComponent =
    /*#__PURE__*/
    function () {
      function AdminTagsComponent(blogTags_service) {
        _classCallCheck(this, AdminTagsComponent);

        this.blogTags_service = blogTags_service;
        this.deleBtnHoverd = true;
      }

      _createClass(AdminTagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#blogTagsHolder');
          this.getAllTags();
        } // Controllers
        // [?]

      }, {
        key: "targetTagInp",
        value: function targetTagInp(tagInp) {
          $(tagInp).focus();
        }
      }, {
        key: "showDeleteBtn",
        value: function showDeleteBtn(delBtn) {
          this.deleBtnHoverd ? $(delBtn).css('right', '-90%') : false;
        }
      }, {
        key: "HideDeleteBtn",
        value: function HideDeleteBtn(delBtn) {
          this.deleBtnHoverd ? $(delBtn).css('right', '-100%') : false;
        }
      }, {
        key: "fullSizeDeleBtn",
        value: function fullSizeDeleBtn(delBtn) {
          this.deleBtnHoverd ? $(delBtn).css('right', '-50%') : false;
        }
      }, {
        key: "clickedDeleBtn",
        value: function clickedDeleBtn(delBtn, tagBox) {
          var _this8 = this;

          this.deleBtnHoverd = false;
          $(delBtn).css('right', '200%');
          setTimeout(function () {
            _this8.hideTagBox(tagBox);
          }, 50);
          setTimeout(function () {
            _this8.deleBtnHoverd = true;
          }, 500);
        }
      }, {
        key: "hideTagBox",
        value: function hideTagBox(tagBox) {
          $(tagBox).css("opacity", 0);
        }
      }, {
        key: "emptyNewBtnTag",
        value: function emptyNewBtnTag(newBtn) {
          $(newBtn).val('');
        } // DATA
        // [?] 

      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this9 = this;

          this.blogTags_service.getTags().subscribe(function (res) {
            _this9.tags = res;
          });
        }
      }, {
        key: "createNewTag",
        value: function createNewTag(data) {
          var _this10 = this;

          var newTag = {
            tag_name: data
          };
          this.blogTags_service.createTag(newTag).subscribe(function (res) {
            _this10.tags.push(res);

            _this10.notify_component.notifyMe('alert-primary', '', 'loading');
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this10.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this10.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this10.notify_component.notifyMe('alert-success', 'Tag is', ' saved !');
          });
        }
      }, {
        key: "updateTags",
        value: function updateTags(index) {
          var _this11 = this;

          this.blogTags_service.updateTag(this.tags[index]._id, this.tags[index]).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this11.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this11.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this11.notify_component.notifyMe('alert-success', 'Tag is', ' up to date!');
          });
        }
      }, {
        key: "deleteTag",
        value: function deleteTag(index, delBtn, tagBox) {
          var _this12 = this;

          this.blogTags_service.deleteTag(this.tags[index]._id).subscribe(function (res) {
            _this12.clickedDeleBtn(delBtn, tagBox);
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this12.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this12.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }

            console.log(err);
          }, function () {
            _this12.notify_component.notifyMe('alert-danger', 'Tag is', ' Deleted !');

            setTimeout(function () {
              _this12.tags.splice(index, 1);
            }, 200);
          });
        }
      }]);

      return AdminTagsComponent;
    }();

    AdminTagsComponent.ctorParameters = function () {
      return [{
        type: _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_2__["BlogTagsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], {
      static: false
    })], AdminTagsComponent.prototype, "notify_component", void 0);
    AdminTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-tags',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-tags.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/admin-tags/admin-tags.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-tags.component.css */
      "./src/app/admin-pages/blog/admin-tags/admin-tags.component.css")).default]
    })], AdminTagsComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/all/all.component.css":
  /*!********************************************************!*\
    !*** ./src/app/admin-pages/blog/all/all.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesBlogAllAllComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-side-image{\n    /* border: 4px dashed rgba(152, 155, 155, 1); */\n    min-width : 230px ;\n    min-height : 230px ;\n    background-image: url('/assets/Icons/admin-products/noImge.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 40px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    overflow: hidden;\n}\n.s-side-image:hover {\n  cursor: pointer;\n}\n.s-blog-post-box{\n    max-height: 300px;\n    overflow: hidden;\n}\n@media (max-width: 768px) {\n  .s-blog-post-box{\n      max-height: 500px;\n      overflow: hidden;\n  }\n}\n.s-blog-post-box:hover{\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    cursor: pointer;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.s-blog-post-text-box{\n    max-height: 100%;\n    width: 100%;\n    overflow: scroll;\n}\n.s-create-one-btn:hover{\n    background-color: #5CD557;\n}\n/*  */\n.s-dash{\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right{\n  right:0;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right-2{\n  right:15px;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-categories-holder{\n width: 100%;\n height: 48px;\n overflow-x: scroll; \n overflow-y: hidden;\n}\n.s-categories-btns{\n   white-space: nowrap;\n   text-align: center;\n}\n.s-categories-btns:hover{\n  background-color: #FFFBA0;\n}\n.s-serach-bar{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-search-btn{\n    width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/serach.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-selected-categ-btns{\n  white-space: nowrap;\n   text-align: center;\n height: 48px;\n border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-selected-tag-btn{\n  background-color:#FFFDCF;\n  color: #222222;\n}\n.s-tool-bar-holder{\n  top: 56px;\n  z-index: 4000;\n  opacity: .97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9hbGwvYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnRUFBZ0U7SUFDaEUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRTtNQUNJLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7QUFDRjtBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsbURBQW1EO0FBQ3ZEO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLGtCQUFrQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7R0FDRyxvQ0FBb0M7RUFDckMsdUNBQXVDO0FBQ3pDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdFQUFnRTtJQUNoRSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0dBQ2xCLGtCQUFrQjtDQUNwQixZQUFZO0NBQ1oscUNBQXFDO0VBQ3BDLHdDQUF3QztBQUMxQztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9hbGwvYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1zaWRlLWltYWdle1xuICAgIC8qIGJvcmRlcjogNHB4IGRhc2hlZCByZ2JhKDE1MiwgMTU1LCAxNTUsIDEpOyAqL1xuICAgIG1pbi13aWR0aCA6IDIzMHB4IDtcbiAgICBtaW4taGVpZ2h0IDogMjMwcHggO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9ub0ltZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnMtc2lkZS1pbWFnZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLWJsb2ctcG9zdC1ib3h7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucy1ibG9nLXBvc3QtYm94e1xuICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4ucy1ibG9nLXBvc3QtYm94OmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cbi5zLWJsb2ctcG9zdC10ZXh0LWJveHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ucy1jcmVhdGUtb25lLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNENTU3O1xufVxuLyogICovXG4ucy1kYXNoe1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAuODtcbn1cbi5zLWRhc2gtcmlnaHR7XG4gIHJpZ2h0OjA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogLjg7XG59XG4ucy1kYXNoLXJpZ2h0LTJ7XG4gIHJpZ2h0OjE1cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogLjg7XG59XG4ucy1jYXRlZ29yaWVzLWhvbGRlcntcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDQ4cHg7XG4gb3ZlcmZsb3cteDogc2Nyb2xsOyBcbiBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4ucy1jYXRlZ29yaWVzLWJ0bnN7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnMtY2F0ZWdvcmllcy1idG5zOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkEwO1xufVxuLnMtc2VyYWNoLWJhcntcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtc2VhcmNoLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLXByb2R1Y3RzL3NlcmFjaC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1zZWxlY3RlZC1jYXRlZy1idG5ze1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIGhlaWdodDogNDhweDtcbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtc2VsZWN0ZWQtdGFnLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZGRENGO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5zLXRvb2wtYmFyLWhvbGRlcntcbiAgdG9wOiA1NnB4O1xuICB6LWluZGV4OiA0MDAwO1xuICBvcGFjaXR5OiAuOTc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/all/all.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin-pages/blog/all/all.component.ts ***!
    \*******************************************************/

  /*! exports provided: AllComponent */

  /***/
  function srcAppAdminPagesBlogAllAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllComponent", function () {
      return AllComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");

    var AllComponent =
    /*#__PURE__*/
    function () {
      function AllComponent(blogTopics_service, blogTags_service) {
        _classCallCheck(this, AllComponent);

        this.blogTopics_service = blogTopics_service;
        this.blogTags_service = blogTags_service;
        this.tagName = 'All';
        this.selectedTopicsByTag = null;
        this.clickTopicEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createOneEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTopics();
          this.getAllTags();
        }
      }, {
        key: "getAllTopics",
        value: function getAllTopics() {
          var _this13 = this;

          this.blogTopics_service.getTopics().subscribe(function (res) {
            _this13.topics = res;
          });
        }
      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this14 = this;

          this.blogTags_service.getTags().subscribe(function (res) {
            _this14.tags = res;
          });
        } // [#] controllers
        // [?] fire (@Output()) Event to parent component to navigate

      }, {
        key: "clickTopic",
        value: function clickTopic(topicID) {
          this.clickTopicEvent.emit(topicID);
        }
      }, {
        key: "createOneOutPut",
        value: function createOneOutPut() {
          // this.createOneEvent.emit(this.selectedTagID)
          this.createOneEvent.emit();
        } // [?] filter bar select tag

      }, {
        key: "selectTag",
        value: function selectTag(id, name) {
          this.selectedTopicsByTag = [];
          this.selectedTagID = id;
          this.tagName = name;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.topics[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var topic = _step4.value;

              if (topic.topic_tag == id) {
                this.selectedTopicsByTag.push(topic);
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      }, {
        key: "selectAllTags",
        value: function selectAllTags() {
          this.tagName = 'All';
          this.selectedTopicsByTag = null;
        }
      }, {
        key: "selectAllTagBTN",
        value: function selectAllTagBTN() {
          $('#allTagsBtn').click();
        }
      }, {
        key: "styleTagBtns",
        value: function styleTagBtns(btn) {
          $("[data-btn='tag-btn']").removeClass('s-selected-tag-btn');
          $(btn).addClass('s-selected-tag-btn');
        }
      }]);

      return AllComponent;
    }();

    AllComponent.ctorParameters = function () {
      return [{
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__["BlogTopicsService"]
      }, {
        type: _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__["BlogTagsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AllComponent.prototype, "clickTopicEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AllComponent.prototype, "createOneEvent", void 0);
    AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/all/all.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all.component.css */
      "./src/app/admin-pages/blog/all/all.component.css")).default]
    })], AllComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/blog.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admin-pages/blog/blog.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-icons{\n    min-width: 25px;\n    min-height: 25px;\n    background-position: center;\n    background-size: 22px;\n    background-repeat: no-repeat;\n}\n.s-all-icon{\n    background-image: url('all.png');\n}\n.s-topic-icon{\n    background-image: url('new-topic.png');\n}\n.s-tags-icon{\n    background-image: url('tags.png');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQ0FBK0Q7QUFDbkU7QUFDQTtJQUNJLHNDQUFxRTtBQUN6RTtBQUNBO0lBQ0ksaUNBQWdFO0FBQ3BFIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1pY29uc3tcbiAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMnB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ucy1hbGwtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0ljb25zL2FkbWluLWJsb2cvYWxsLnBuZyk7XG59XG4ucy10b3BpYy1pY29ue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvSWNvbnMvYWRtaW4tYmxvZy9uZXctdG9waWMucG5nKTtcbn1cbi5zLXRhZ3MtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0ljb25zL2FkbWluLWJsb2cvdGFncy5wbmcpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/blog.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin-pages/blog/blog.component.ts ***!
    \****************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppAdminPagesBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-topic/new-topic.component */
    "./src/app/admin-pages/blog/new-topic/new-topic.component.ts");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _all_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./all/all.component */
    "./src/app/admin-pages/blog/all/all.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent(_router, blogTopics_service) {
        _classCallCheck(this, BlogComponent);

        this._router = _router;
        this.blogTopics_service = blogTopics_service;
        this.blogState = 'New Topic';
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#blogHolder'); //[?] check if it there an id navigate to topic

          var startUp = function startUp() {
            if (_this15.blogTopics_service.checkTopicIDParam() !== 'all') {
              _this15.openUpdateTopic(_this15.blogTopics_service.checkTopicIDParam());
            }
          };

          startUp();
        }
      }, {
        key: "stlyeSummerNote",
        value: function stlyeSummerNote() {
          this.new_topic_component.styleSummerNote();
        }
      }, {
        key: "getAllTags",
        value: function getAllTags() {
          this.new_topic_component.getAllTags();
        }
      }, {
        key: "getTopicById",
        value: function getTopicById(id) {
          var _this16 = this;

          this.blogTopics_service.getSelectedTopic(id).subscribe(function (res) {
            _this16.new_topic_component.setToUpdate(res);
          });
        }
      }, {
        key: "refreshAllData",
        value: function refreshAllData() {
          this.all_component.getAllTopics();
          this.all_component.getAllTags();
        }
      }, {
        key: "navigateToBlogState",
        value: function navigateToBlogState() {
          this._router.navigateByUrl('/admin/blog/all');

          this.blogState = 'New Topic';
          this.new_topic_component.setToCreateNew();
        } // [?]

      }, {
        key: "openUpdateTopic",
        value: function openUpdateTopic(topicID) {
          this.getTopicById(topicID);

          this._router.navigateByUrl('/admin/blog/' + topicID);

          $('#pills-topic-tab').click();
          this.blogState = 'Update Topic';
        }
      }, {
        key: "createOne",
        value: function createOne(tagId) {
          $('#pills-topic-tab').click();
          this.stlyeSummerNote();
          this.new_topic_component.craeteOneFromTag(tagId);
        }
      }, {
        key: "resetTagBarAtAll",
        value: function resetTagBarAtAll() {
          this.all_component.selectAllTagBTN();
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_3__["BlogTopicsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_2__["NewTopicComponent"], {
      static: false
    })], BlogComponent.prototype, "new_topic_component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_all_all_component__WEBPACK_IMPORTED_MODULE_4__["AllComponent"], {
      static: false
    })], BlogComponent.prototype, "all_component", void 0);
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/admin-pages/blog/blog.component.css")).default]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/new-topic/new-topic.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/admin-pages/blog/new-topic/new-topic.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesBlogNewTopicNewTopicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-controller-bar{\n    height: 48px;\n}\n.s-icons{\n    background-position: center;\n    background-size: 30px;\n    background-repeat: no-repeat;\n}\n.s-settings-icon{\n    background-image: url('settings.png');\n}\n.s-settings-note-icon{\n    background-position: center;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-image: url('type.png');\n}\n.s-trash-icon{\n    background-size: 25px;\n    background-image: url('red-trash.png');\n}\n.s-controller-bar-btns{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    cursor: pointer;\n    width: 60px;\n    opacity: .8;\n}\n.s-controller-bar-btns:hover{\n    opacity: 1;\n}\n.s-topic-body{\n    height: 400px;\n}\n.note-toolbar{\n    background: black !important;\n}\n/*  */\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-title{\n     background-image: url('/assets/Icons/admin-about/title.png');\n}\n.s-icon-tags{\n    background-image: url('/assets/Icons/admin-blog/tags.png');\n}\n/*  */\n.s-side-image{\n    border: 4px dashed rgba(152, 155, 155, 1);\n    /* min-width: 100px !important;\n    min-height: 100px !important;\n    max-width: 100px !important;\n    max-height: 100px !important; */\n    width : 230px ;\n    height : 230px ;\n    background-image: url('/assets/Icons/admin-products/addNewImg.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 40px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    overflow: hidden;\n}\n.s-side-image:hover {\n  border: 4px dashed #989B9B;\n  cursor: pointer;\n\n}\n.s-page-opacity{\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 !important;\n}\n.s-page-opacity:hover {\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 !important;\n}\n.s-publish-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n.s-del-btn:hover{\n    background-color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvYmxvZy9uZXctdG9waWMvbmV3LXRvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kscUNBQXVFO0FBQzNFO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixpQ0FBbUU7QUFDdkU7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQ0FBd0U7QUFDNUU7QUFDQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0E7S0FDSyw0REFBNEQ7QUFDakU7QUFDQTtJQUNJLDBEQUEwRDtBQUM5RDtBQUNBLEtBQUs7QUFDTDtJQUNJLHlDQUF5QztJQUN6Qzs7O21DQUcrQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1FQUFtRTtJQUNuRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlOztBQUVqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2Jsb2cvbmV3LXRvcGljL25ldy10b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtbWFrZS1tZS11cHtcbiAgICB6LWluZGV4OiA0MDAwO1xufVxuLnMtY29udHJvbGxlci1iYXJ7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuLnMtaWNvbnN7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnMtc2V0dGluZ3MtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL0ljb25zL2FkbWluLWJsb2cvc2V0dGluZ3MucG5nKTtcbn1cbi5zLXNldHRpbmdzLW5vdGUtaWNvbntcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9JY29ucy9hZG1pbi1ibG9nL3R5cGUucG5nKTtcbn1cbi5zLXRyYXNoLWljb257XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvSWNvbnMvYWRtaW4tYmxvZy9yZWQtdHJhc2gucG5nKTtcbn1cbi5zLWNvbnRyb2xsZXItYmFyLWJ0bnN7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgb3BhY2l0eTogLjg7XG59XG4ucy1jb250cm9sbGVyLWJhci1idG5zOmhvdmVye1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucy10b3BpYy1ib2R5e1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4ubm90ZS10b29sYmFye1xuICAgIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4vKiAgKi9cbi5zLWljb24tYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLWljb24tdGl0bGV7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1hYm91dC90aXRsZS5wbmcnKTtcbn1cbi5zLWljb24tdGFnc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tYmxvZy90YWdzLnBuZycpO1xufVxuLyogICovXG4ucy1zaWRlLWltYWdle1xuICAgIGJvcmRlcjogNHB4IGRhc2hlZCByZ2JhKDE1MiwgMTU1LCAxNTUsIDEpO1xuICAgIC8qIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyAqL1xuICAgIHdpZHRoIDogMjMwcHggO1xuICAgIGhlaWdodCA6IDIzMHB4IDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvYWRkTmV3SW1nLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zLXNpZGUtaW1hZ2U6aG92ZXIge1xuICBib3JkZXI6IDRweCBkYXNoZWQgIzk4OUI5QjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4ucy1wYWdlLW9wYWNpdHl7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMXM7XG4gICAgb3BhY2l0eTogLjYgIWltcG9ydGFudDtcbn1cbi5zLXBhZ2Utb3BhY2l0eTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMXM7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLnMtcHVibGlzaC1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6I0ZGRkRDRiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XG59XG4ucy1kZWwtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/blog/new-topic/new-topic.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-pages/blog/new-topic/new-topic.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NewTopicComponent */

  /***/
  function srcAppAdminPagesBlogNewTopicNewTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTopicComponent", function () {
      return NewTopicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");
    /* harmony import */


    var _model_blog_topics_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/blog-topics.model */
    "./src/app/model/blog-topics.model.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/img-controls.service */
    "./src/app/services/img-controls.service.ts");

    var NewTopicComponent =
    /*#__PURE__*/
    function () {
      function NewTopicComponent(blogTopics_service, blogTags_service, img_service) {
        _classCallCheck(this, NewTopicComponent);

        this.blogTopics_service = blogTopics_service;
        this.blogTags_service = blogTags_service;
        this.img_service = img_service;
        this.isLooded = false;
        this.tap = true;
        this.topicState = true;
        this.selectedTopic = new _model_blog_topics_model__WEBPACK_IMPORTED_MODULE_4__["BlogTopicModel"]();
        this.newTopic = new _model_blog_topics_model__WEBPACK_IMPORTED_MODULE_4__["BlogTopicModel"]();
        this.config = {
          placeholder: 'Type your topic here...',
          tabsize: 2,
          height: '330px'
        };
        this.topicIsDel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NewTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTopics();
          this.getAllTags();
        } // [#] tools
        // [#] Controllers

      }, {
        key: "toogleTopicTaps",
        value: function toogleTopicTaps() {
          this.tap ? this.tap = false : this.tap = true;
        }
      }, {
        key: "styleSummerNote",
        value: function styleSummerNote() {
          $('.note-toolbar').css({
            'background': 'white',
            'border': 'none'
          });
          $('.note-editor.note-airframe, .note-editor.note-frame').css('border', 'none');
          $('.note-btn').css({
            'border': 'none'
          });
          $('.note-icon-caret').css('display', 'none');
          $('.note-editor').css({
            'z-index': 4000
          });
          $('.note-resizebar').css('display', 'none');
          $('.note-statusbar').css('border', 'none');
        } // [img]

      }, {
        key: "readURL",
        value: function readURL(event) {
          var _this17 = this;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              return _this17.renderedIMG = reader.result;
            };

            reader.readAsDataURL(file);
          }
        } // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event, inpV) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.imageFile = file;
            this.selectedTopic.topic_image = inpV;
          }
        } // [?] upload image to the server

      }, {
        key: "postCategImg",
        value: function postCategImg() {
          var _this18 = this;

          var formData = new FormData();
          formData.append('file', this.imageFile);
          this.blogTopics_service.uploadImg(formData).subscribe(function (res) {
            _this18.renderedIMG = _this18.blogTopics_service.getUrl(res.filename); // this.imgName = res.filename
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "selectMe",
        value: function selectMe(tagId) {
          this.selectedTagID = tagId;
        } // [?] set all input values to the selected topic

      }, {
        key: "setToUpdate",
        value: function setToUpdate(topic) {
          this.topicState = false;
          this.selectedTopicID = topic._id;
          this.selectedTopic = topic;
          this.oldImg = topic.topic_image;
          this.renderedIMG = this.blogTopics_service.getUrl(topic.topic_image);
          this.selectedTagID = topic.topic_tag;
          this.getSelectedTag(topic.topic_tag);
          $('.summernote').summernote('code', topic.topic_content);
          this.styleSummerNote();
        } // [?]

      }, {
        key: "setToCreateNew",
        value: function setToCreateNew() {
          this.topicState = true;
          this.selectedTopicID = '';
          this.selectedTopic = new _model_blog_topics_model__WEBPACK_IMPORTED_MODULE_4__["BlogTopicModel"]();
          this.selectedTagID = '';
          this.selectedTag;
          this.renderedIMG = '';
          $('#topicNameInp').val('');
          $('.summernote').summernote('code', '');
          this.styleSummerNote();
        } // [?]

      }, {
        key: "outPutTopicIsDel",
        value: function outPutTopicIsDel() {
          this.topicIsDel.emit();
        } // [?] create one from tag that is no topics at it

      }, {
        key: "craeteOneFromTag",
        value: function craeteOneFromTag(tagId) {
          this.selectedTopic.topic_tag = tagId;
        } // [#] Data

      }, {
        key: "$newTopic",
        value: function $newTopic() {
          this.newTopic.topic_name = $('#topicNameInp').val();
          this.newTopic.topic_image = this.img_service.solvImgURL(this.selectedTopic.topic_image);
          this.newTopic.topic_tag = this.selectedTagID;
          this.newTopic.topic_content = $('.summernote').summernote('code'); // var plainText = $(htmlContent).text();

          return this.newTopic;
        } // [#] HTTP Reqs

      }, {
        key: "getAllTopics",
        value: function getAllTopics() {
          var _this19 = this;

          this.blogTopics_service.getTopics().subscribe(function (res) {
            _this19.topics = res;
          });
        }
      }, {
        key: "createNewTopic",
        value: function createNewTopic() {
          var _this20 = this;

          var data = this.$newTopic();
          this.blogTopics_service.createTopic(data).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this20.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this20.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this20.notify_component.notifyMe('alert-success', 'Topic is', ' Published !');
          });
        } // [?]

      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this21 = this;

          this.blogTags_service.getTags().subscribe(function (res) {
            _this21.tags = res;
          });
        }
      }, {
        key: "getSelectedTag",
        value: function getSelectedTag(id) {
          var _this22 = this;

          this.blogTags_service.getSelectedTag(id).subscribe(function (res) {
            return [_this22.selectedTag = res];
          }, function (err) {}, function () {
            _this22.isLooded = true;
          });
        }
      }, {
        key: "updateTopic",
        value: function updateTopic() {
          var _this23 = this;

          var data = this.$newTopic();
          this.blogTopics_service.updateTopic(this.selectedTopicID, data).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this23.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this23.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this23.blogTopics_service.deleteImage(_this23.oldImg).subscribe(function (res) {});

            _this23.notify_component.notifyMe('alert-success', 'Topic is', ' Up to date !');
          });
        }
      }, {
        key: "deleteTopic",
        value: function deleteTopic() {
          var _this24 = this;

          this.blogTopics_service.deleteTopic(this.selectedTopicID).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this24.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this24.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this24.blogTopics_service.deleteImage(_this24.oldImg).subscribe(function (res) {});

            _this24.notify_component.notifyMe('alert-danger', 'Topic is', ' Deleted !');
          });
        }
      }]);

      return NewTopicComponent;
    }();

    NewTopicComponent.ctorParameters = function () {
      return [{
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__["BlogTopicsService"]
      }, {
        type: _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__["BlogTagsService"]
      }, {
        type: src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__["ImgControlsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NewTopicComponent.prototype, "topicIsDel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], {
      static: false
    })], NewTopicComponent.prototype, "notify_component", void 0);
    NewTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/blog/new-topic/new-topic.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-topic.component.css */
      "./src/app/admin-pages/blog/new-topic/new-topic.component.css")).default]
    })], NewTopicComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/category-page/category-page.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/admin-pages/category-page/category-page.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesCategoryPageCategoryPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-image{\n     background-image: url('/assets/Icons/admin-about/addNewImg.png');\n}\n.s-icon-art{\n     background-image: url('/assets/Icons/admin-about/article.png');\n}\n.s-icon-category-id{\n     background-image: url('/assets/Icons/admin-category-page/categories.png');\n}\n.s-img-inp{\n  cursor: pointer;\n}\n.s-btn-tem-h{\n    height: 48px;\n}\n.s-modal-inp{\n    /* background-color: rgba(152, 155, 155, .1); */\n    white-space: nowrap;\n    overflow: hidden;\n}\n.s-modal-inp:hover{\n    overflow-x: auto;\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-save-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvY2F0ZWdvcnktcGFnZS9jYXRlZ29yeS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLGdFQUFnRTtBQUNyRTtBQUNBO0tBQ0ssOERBQThEO0FBQ25FO0FBQ0E7S0FDSyx5RUFBeUU7QUFDOUU7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLHFDQUFxQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zLW1ha2UtbWUtdXB7XG4gICAgei1pbmRleDogNDAwMDtcbn1cbi5zLWljb24tYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLWljb24taW1hZ2V7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1hYm91dC9hZGROZXdJbWcucG5nJyk7XG59XG4ucy1pY29uLWFydHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWFib3V0L2FydGljbGUucG5nJyk7XG59XG4ucy1pY29uLWNhdGVnb3J5LWlke1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY2F0ZWdvcnktcGFnZS9jYXRlZ29yaWVzLnBuZycpO1xufVxuLnMtaW1nLWlucHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtYnRuLXRlbS1oe1xuICAgIGhlaWdodDogNDhweDtcbn1cbi5zLW1vZGFsLWlucHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTU1LCAxNTUsIC4xKTsgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucy1tb2RhbC1pbnA6aG92ZXJ7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5zLW5vLXJvdW5kZWQtcmlnaHR7XG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtbm8tcm91bmRlZC1sZWZ0e1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1zYXZlLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZGRENGIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/category-page/category-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin-pages/category-page/category-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CategoryPageComponent */

  /***/
  function srcAppAdminPagesCategoryPageCategoryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageComponent", function () {
      return CategoryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/categories-page.service */
    "./src/app/services/categories-page.service.ts");
    /* harmony import */


    var src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");
    /* harmony import */


    var src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/img-controls.service */
    "./src/app/services/img-controls.service.ts");

    var CategoryPageComponent =
    /*#__PURE__*/
    function () {
      function CategoryPageComponent(category_page_service, pagesImg_service, img_service) {
        _classCallCheck(this, CategoryPageComponent);

        this.category_page_service = category_page_service;
        this.pagesImg_service = pagesImg_service;
        this.img_service = img_service;
        this.sectionTitles = ['Slider', 'Hot'];
        this.isLoaded = false;
        this.imageFileSlider = [];
        this.imageFileHot = [];
        this.deletingImgs = [];
      }

      _createClass(CategoryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#categoryHolder');
          this.getData();
        } // [#] CONTROLLERS
        // [?] Redirect imgs coms from input file to asets file

      }, {
        key: "solvImgURL",
        value: function solvImgURL(imgPath) {
          var imgName = imgPath.replace(/.*[\/\\]/, '');
          var imgsFolder = 'imgs/categories';
          var solvedPath = "assets/".concat(imgsFolder, "/").concat(imgName);
          if (!imgName) return false;
          return solvedPath;
        }
      }, {
        key: "sectionImage",
        value: function sectionImage(inp) {
          $(inp).click();
        } // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event, index, caseX) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];

            switch (caseX) {
              case 'slider':
                this.category_page_service.data[0].page_slides[index].slide_image = this.img_service.solvImgURL(event.target.value);
                this.imageFileSlider[index] = file;
                break;

              case 'hot':
                this.category_page_service.data[0].page_hot_sec[index].box_image = this.img_service.solvImgURL(event.target.value);
                this.imageFileHot[index] = file;
                break;
            }
          }
        }
      }, {
        key: "oldImgValue",
        value: function oldImgValue(imgName, index) {
          this.deletingImgs[index] = imgName;
        }
      }, {
        key: "deleteImg",
        value: function deleteImg() {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.deletingImgs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var img = _step5.value;
              this.pagesImg_service.deleteImage(img).subscribe(function (res) {});
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        } // [#] HTTP REQs

      }, {
        key: "postImg",
        value: function postImg() {
          var _this25 = this;

          var allImages = this.imageFileSlider.concat(this.imageFileHot);
          var count = 0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = allImages[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var img = _step6.value;
              var formData = new FormData();

              if (img) {
                formData.append('file', img);
                this.pagesImg_service.uploadImg(formData).subscribe(function (res) {}, function (err) {
                  console.log(err);
                }, function () {
                  _this25.imageFileSlider = [];
                  _this25.imageFileHot = [];
                  _this25.deletingImgs = [];
                });
              }

              count++;
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this26 = this;

          this.category_page_service.getSections().subscribe(function (res) {
            _this26.category_page_service.data = res;
            _this26.data = res;
          }, function (err) {}, function () {
            _this26.isLoaded = true;
          });
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this27 = this;

          this.category_page_service.updateSection(this.category_page_service.data[0]._id, this.category_page_service.data[0]).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this27.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this27.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this27.notify_component.notifyMe('alert-success', 'Page is', ' up to date!');
          });
        }
      }]);

      return CategoryPageComponent;
    }();

    CategoryPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_categories_page_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesPageService"]
      }, {
        type: src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_4__["PagesImgsService"]
      }, {
        type: src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_5__["ImgControlsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], {
      static: false
    })], CategoryPageComponent.prototype, "notify_component", void 0);
    CategoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category-page/category-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-page.component.css */
      "./src/app/admin-pages/category-page/category-page.component.css")).default]
    })], CategoryPageComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/category/categories-panel/categories-panel.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin-pages/category/categories-panel/categories-panel.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesCategoryCategoriesPanelCategoriesPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.s-add-category-box{\n    height: 350px;\n    border: 2px dashed #989B9B;\n    -webkit-transition: background-color ease-in-out .2s;\n    transition: background-color ease-in-out .2s;\n}\n.s-add-category-box:hover {\n    background-color: #5CD557 !important;\n    height: 350px;\n    border: none;\n    cursor: pointer;\n    color : white !important;\n}\n.s-add-category-butt{\n    font-size: 60px;\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .2);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity:hover{\n    background: rgba(34, 34, 34, .5);\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 1px rgba(255, 251, 160,1);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcmllcy1wYW5lbC9jYXRlZ29yaWVzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvREFBNEM7SUFBNUMsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyx1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7S0FDOUIsaURBQWlEO0lBQ2xELGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9jYXRlZ29yeS9jYXRlZ29yaWVzLXBhbmVsL2NhdGVnb3JpZXMtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnMtYWRkLWNhdGVnb3J5LWJveHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjOTg5QjlCO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgLjJzO1xufVxuLnMtYWRkLWNhdGVnb3J5LWJveDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDRDU1NyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvciA6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucy1hZGQtY2F0ZWdvcnktYnV0dHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG4ucy1jYXRlZ29yeS1ib3gtb2JhY2l0eXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbn1cbi5zLWNhdGVnb3J5LWJveC1vYmFjaXR5OmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjUpO1xufVxuLnMtY2F0ZWdvcnktYm94OmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKDI1NSwgMjUxLCAxNjAsMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-pages/category/categories-panel/categories-panel.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin-pages/category/categories-panel/categories-panel.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CategoriesPanelComponent */

  /***/
  function srcAppAdminPagesCategoryCategoriesPanelCategoriesPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPanelComponent", function () {
      return CategoriesPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/admin-category.model */
    "./src/app/model/admin-category.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../category-modal/category-modal.component */
    "./src/app/admin-pages/category/category-modal/category-modal.component.ts");
    /* harmony import */


    var _sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sub-categories/sub-categories.component */
    "./src/app/admin-pages/category/sub-categories/sub-categories.component.ts");
    /*
      ==================================================
      {=========={(@ Comments Hent)}==========}
      ==================================================
      [@] => Main block comment
      [#] => sub main block comment
      [?] => discription Comment
      <CALL> => functin calling events
    */


    var CategoriesPanelComponent =
    /*#__PURE__*/
    function () {
      function CategoriesPanelComponent(categ_service, _router, cdRef // public img_service: ImgControlsService
      ) {
        _classCallCheck(this, CategoriesPanelComponent);

        this.categ_service = categ_service;
        this._router = _router;
        this.cdRef = cdRef;
        this.categories = [];
        this.category = new _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](); // [?] grid system 

        this.rowS = Array(0).fill(0);
        this.columS = Array(0).fill(0);
        this.colSwitchCounter = 0;
      }

      _createClass(CategoriesPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#categorieHolder'); // [?] get all categories

          this.getAllCategories();
        } // {=========={([@] CONTROL )}==========}
        // [# CONTROL] || ================================================== |({Category})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|

      }, {
        key: "startNew",
        value: function startNew() {
          // [?] push color object at colors array //*~
          var newcategory = new _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"]();
          this.categories.push(newcategory); // this.rowS = Array(+1).fill(+1)
          // this.columS = Array(+1).fill(+1);
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.category_modal.openModal(id);
        } // [?] sub categories change for every category

      }, {
        key: "showSubCategOfCateg",
        value: function showSubCategOfCateg(categ) {
          this.category_modal.showSubCategOfCateg(categ);
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# CONTROL] || ================================================== |Category| ---END---
        // {=========={([@] DATA )}==========}
        // [# DATA] || ================================================== |({Category})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|

      }, {
        key: "categoryData",
        value: function categoryData() {
          var newCateg = new _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"]();
          newCateg.categ_name = 'Mohamed', newCateg.categ_image = 'yo.png';
          return newCateg;
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# DATA] || ================================================== |Category| ---END---
        // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({Category Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] get all categories

      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this28 = this;

          this.categ_service.getCategories().subscribe(function (res) {
            _this28.allCategories = res;
            _this28.categories = _this28.allCategories;
          }, function (err) {}, function () {
            _this28.startNew();

            console.log(_this28.categories);
          });
        }
      }]);

      return CategoriesPanelComponent;
    }();

    CategoriesPanelComponent.ctorParameters = function () {
      return [{
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_5__["CategoryModalComponent"], {
      static: false
    })], CategoriesPanelComponent.prototype, "category_modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_6__["SubCategoriesComponent"], {
      static: false
    })], CategoriesPanelComponent.prototype, "sub_category", void 0);
    CategoriesPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-categories-panel",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/categories-panel/categories-panel.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None // to reade css classes on dynamic elements
      ,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories-panel.component.css */
      "./src/app/admin-pages/category/categories-panel/categories-panel.component.css")).default]
    })], CategoriesPanelComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/category/category-modal/category-modal.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin-pages/category/category-modal/category-modal.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesCategoryCategoryModalCategoryModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-cancel-btn{\n    border : #FFFBA0 solid 1px;\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-cancel-btn:hover{\n    border : #FFFDCF solid 1px;\n    background-color: #FFFDCF;\n    color: #242424 !important;\n}\n.s-delete-btn{\n    border : #dc3545 solid 1px;\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-delete-btn:hover{\n    border : #dc3545 solid 1px;\n    background-color:#dc3545 ;\n    color: #242424 !important;\n}\n.s-save-btn:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    background-color: #FFFDCF;\n}\n.s-sub-categ-btn:hover{\n    background-color: #20B439;\n}\n.s-category-image{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    width: 100%;\n    height: 250px;\n    background-image: url('/assets/Icons/admin-category/addNewImg.png');\n    background-position: center ;\n    background-repeat: no-repeat;\n    background-size: 60px;\n    border: 4px dashed rgba(152,155,155,1);\n    cursor: pointer;\n}\n@media (max-width: 991px) {\n    .s-category-image{\n        width: 100%;\n        /* height: 330px; */\n    }\n    .s-modal-holder{\n        height: 580px;\n        overflow: scroll;\n    }\n}\n.s-category-image:hover{\n    border: 4px dashed #989B9B;\n\n}\n.s-page-opacity{\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 !important;\n}\n.s-page-opacity:hover {\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnktbW9kYWwvY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUVBQW1FO0lBQ25FLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0ksMEJBQTBCOztBQUU5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS1tb2RhbC9jYXRlZ29yeS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtbWFrZS1tZS11cHtcbiAgICB6LWluZGV4OiA0MDAwO1xufVxuLnMtY2FuY2VsLWJ0bntcbiAgICBib3JkZXIgOiAjRkZGQkEwIHNvbGlkIDFweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xufVxuLnMtY2FuY2VsLWJ0bjpob3ZlcntcbiAgICBib3JkZXIgOiAjRkZGRENGIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRENGO1xuICAgIGNvbG9yOiAjMjQyNDI0ICFpbXBvcnRhbnQ7XG59XG4ucy1kZWxldGUtYnRue1xuICAgIGJvcmRlciA6ICNkYzM1NDUgc29saWQgMXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1kZWxldGUtYnRuOmhvdmVye1xuICAgIGJvcmRlciA6ICNkYzM1NDUgc29saWQgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2RjMzU0NSA7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbn1cbi5zLXNhdmUtYnRuOmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkRDRjtcbn1cbi5zLXN1Yi1jYXRlZy1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwQjQzOTtcbn1cbi5zLWNhdGVnb3J5LWltYWdle1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY2F0ZWdvcnkvYWRkTmV3SW1nLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHg7XG4gICAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEoMTUyLDE1NSwxNTUsMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnMtY2F0ZWdvcnktaW1hZ2V7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBoZWlnaHQ6IDMzMHB4OyAqL1xuICAgIH1cbiAgICAucy1tb2RhbC1ob2xkZXJ7XG4gICAgICAgIGhlaWdodDogNTgwcHg7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxufVxuLnMtY2F0ZWdvcnktaW1hZ2U6aG92ZXJ7XG4gICAgYm9yZGVyOiA0cHggZGFzaGVkICM5ODlCOUI7XG5cbn1cbi5zLXBhZ2Utb3BhY2l0eXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xcztcbiAgICBvcGFjaXR5OiAuNiAhaW1wb3J0YW50O1xufVxuLnMtcGFnZS1vcGFjaXR5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xcztcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/category/category-modal/category-modal.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin-pages/category/category-modal/category-modal.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CategoryModalComponent */

  /***/
  function srcAppAdminPagesCategoryCategoryModalCategoryModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModalComponent", function () {
      return CategoryModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/admin-category.model */
    "./src/app/model/admin-category.model.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sub-categories/sub-categories.component */
    "./src/app/admin-pages/category/sub-categories/sub-categories.component.ts");

    var CategoryModalComponent =
    /*#__PURE__*/
    function () {
      function CategoryModalComponent(categ_service // private categ_service: ImgControlsService
      ) {
        _classCallCheck(this, CategoryModalComponent);

        this.categ_service = categ_service;
        this.refrishCategories = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CategoryModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // [?] when modal is closed
        // $('#categModal').on('hidden.bs.modal', e=> {
        //   this.removeModalContent('categNameInp', 'categImageInp')
        //   console.log('here')
        // })
        // [?] open category Modal 

      }, {
        key: "openModal",
        value: function openModal(id) {
          id ? this.getCategoryById(id) : this.removeModalContent('categNameInp', 'categImageInp');
          $('#modalOpenBtn').click();
        } // [?] open subCateg modal

      }, {
        key: "openSubCategMenu",
        value: function openSubCategMenu(categName) {
          this.sub_categ_component.openModal(categName);
        } // [?] get sub categories of a category

      }, {
        key: "showSubCategOfCateg",
        value: function showSubCategOfCateg(categ) {
          this.sub_categ_component.showSubCategOfCateg(categ);
        } // ==================================================
        // {=========={([@] Tools )}==========}
        // ==================================================
        // [?] remove modal content

      }, {
        key: "removeModalContent",
        value: function removeModalContent(nameInp, imageInp) {
          var _this29 = this;

          setTimeout(function () {
            _this29.selectedCategory = undefined;
            _this29.imgURL = undefined;
            _this29.imgName = undefined;
            $(nameInp).val('');
            $(imageInp).val('');
          }, 200);
        }
      }, {
        key: "refrishCategoriesFun",
        value: function refrishCategoriesFun() {
          this.refrishCategories.emit();
        } // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
          }
        }
      }, {
        key: "readURL",
        value: function readURL(event) {
          var _this30 = this;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              return _this30.imgURL = reader.result;
            };

            reader.readAsDataURL(file);
          }
        } // {=========={([@] DATA )}==========}
        // [# DATA] || ================================================== |({Category})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] category data

      }, {
        key: "categoryData",
        value: function categoryData(name, image) {
          var newCateg = new _model_admin_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"]();
          newCateg.categ_name = name;
          newCateg.categ_image = image;
          newCateg.sub_categories = this.sub_categ_component.subCategories;
          return newCateg;
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# DATA] || ================================================== |Category| ---END---
        // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({Category Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] upload image to the server

      }, {
        key: "postCategImg",
        value: function postCategImg() {
          var _this31 = this;

          var formData = new FormData();
          formData.append('file', this.images);
          this.categ_service.uploadImg(formData).subscribe(function (res) {
            _this31.imgURL = _this31.categ_service.getUrl(res.filename);
            _this31.imgName = res.filename;
          }, function (err) {
            console.log(err);
          });
        } // [?] post New Category

      }, {
        key: "postNewCategory",
        value: function postNewCategory(name, image) {
          var _this32 = this;

          var imgPath = this.categ_service.solvImgURL(image);
          var newCateg = this.categoryData(name, imgPath);
          this.categ_service.createCategories(newCateg).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this32.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this32.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this32.notify_component.notifyMe('alert-success', 'Category is', ' saved !');

            _this32.refrishCategoriesFun();
          });
        } // [?] get category by Id

      }, {
        key: "getCategoryById",
        value: function getCategoryById(id) {
          var _this33 = this;

          this.categ_service.getSelectedCategories(id).subscribe(function (res) {
            _this33.selectedCategory = res;
            _this33.imgURL = _this33.categ_service.getUrl(_this33.selectedCategory.categ_image);
          });
        } // [?] udapte Category

      }, {
        key: "updateCategory",
        value: function updateCategory(id, name, image, imgName) {
          var _this34 = this;

          var imgPath;
          var updatedCategory;

          if (image) {
            // if the file input value = image
            this.categ_service.deleteImage(imgName).subscribe(function (res) {});
            imgPath = this.categ_service.solvImgURL(image);
            updatedCategory = this.categoryData(name, imgPath);
          } else {
            imgPath = this.selectedCategory.categ_image;
            updatedCategory = this.categoryData(name, imgPath);
          }

          this.categ_service.updateCategories(id, updatedCategory).subscribe(function (res) {
            _this34.notify_component.notifyMe('alert-primary', '', 'loading');
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this34.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this34.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this34.notify_component.notifyMe('alert-success', 'Category is', ' up to date!');

            _this34.refrishCategoriesFun();
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id, imgName) {
          var _this35 = this;

          // [?] delete img
          this.categ_service.deleteCategories(id).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this35.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this35.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this35.notify_component.notifyMe('alert-danger', 'Category is', ' Deleted !');

            _this35.categ_service.deleteImage(imgName).subscribe(function (res) {});

            _this35.refrishCategoriesFun();
          });
        }
      }]);

      return CategoryModalComponent;
    }();

    CategoryModalComponent.ctorParameters = function () {
      return [{
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CategoryModalComponent.prototype, "refrishCategories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"], {
      static: false
    })], CategoryModalComponent.prototype, "notify_component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_5__["SubCategoriesComponent"], {
      static: false
    })], CategoryModalComponent.prototype, "sub_categ_component", void 0);
    CategoryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/category-modal/category-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-modal.component.css */
      "./src/app/admin-pages/category/category-modal/category-modal.component.css")).default]
    })], CategoryModalComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/category/sub-categories/sub-categories.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin-pages/category/sub-categories/sub-categories.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesCategorySubCategoriesSubCategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-modal-holder{\n height: 580px;\n overflow: scroll;\n}\n.s-add-new-holder{\n    top: 0px;\n    z-index: 4000;\n}\n.s-add-new-btn{\n    width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/add.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-sub-categ-delete-btn{\n    width: 60px;\n    background-image: url('/assets/Icons/admin-products/delete.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: .5;\n    -webkit-transition: all ease-in-out .2;\n    transition: all ease-in-out .2;\n}\n.s-sub-categ-delete-btn:hover{\n    background-color: #dc3545 !important;\n    opacity: 1;\n}\n.s-add-new-inp{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-back-btn{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-back-btn:hover{\n    background-color: #FFFDCF;\n    color: #242424 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvY2F0ZWdvcnkvc3ViLWNhdGVnb3JpZXMvc3ViLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLFFBQVE7SUFDUixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdFQUFnRTtJQUNoRSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsc0NBQThCO0lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZDtBQUNBO0dBQ0cscUNBQXFDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2NhdGVnb3J5L3N1Yi1jYXRlZ29yaWVzL3N1Yi1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1tb2RhbC1ob2xkZXJ7XG4gaGVpZ2h0OiA1ODBweDtcbiBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnMtYWRkLW5ldy1ob2xkZXJ7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogNDAwMDtcbn1cbi5zLWFkZC1uZXctYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC8qIGhlaWdodDogMzBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvYWRkLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLXN1Yi1jYXRlZy1kZWxldGUtYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9kZWxldGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMjtcbn1cbi5zLXN1Yi1jYXRlZy1kZWxldGUtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxO1xufVxuLnMtYWRkLW5ldy1pbnB7XG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtYmFjay1idG57XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbn1cbi5zLWJhY2stYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZEQ0Y7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/category/sub-categories/sub-categories.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin-pages/category/sub-categories/sub-categories.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SubCategoriesComponent */

  /***/
  function srcAppAdminPagesCategorySubCategoriesSubCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCategoriesComponent", function () {
      return SubCategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/categories.service */
    "./src/app/services/categories.service.ts");

    var SubCategoriesComponent =
    /*#__PURE__*/
    function () {
      function SubCategoriesComponent(categ_srvices) {
        _classCallCheck(this, SubCategoriesComponent);

        this.categ_srvices = categ_srvices;
        this.subCategories = [];
      }

      _createClass(SubCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //[?] open sub category modal

      }, {
        key: "openModal",
        value: function openModal(categName) {
          this.selectCategory(categName);
          $('#modalSubCategOpenBtn').click();
        } // [?] close sub category modal

      }, {
        key: "closeModal",
        value: function closeModal() {
          $('#subCateg').modal('hide');
        } // [?] selected Category

      }, {
        key: "selectCategory",
        value: function selectCategory(categName) {
          categName ? this.selectesCategName = categName : this.selectesCategName = undefined;
        } // [?]

      }, {
        key: "createSubCategories",
        value: function createSubCategories(subCategValue) {
          this.subCategories.push(subCategValue);
        } // [?] make add button empty

      }, {
        key: "refrishAddInp",
        value: function refrishAddInp(addBtn) {
          $(addBtn).val('');
        } // [?] update sub categories

      }, {
        key: "updateSubCategName",
        value: function updateSubCategName(index, subCategValue) {
          this.subCategories[index] = subCategValue;
        } //[?] delete sub categories

      }, {
        key: "deleteSubCateg",
        value: function deleteSubCateg(index) {
          this.subCategories.splice(index, 1);
        } // [?] show sub categories of selected category

      }, {
        key: "showSubCategOfCateg",
        value: function showSubCategOfCateg(categ) {
          categ ? this.subCategories = categ.sub_categories : this.subCategories = [];
        }
      }, {
        key: "xvx",
        value: function xvx() {
          console.log('hi');
        }
      }]);

      return SubCategoriesComponent;
    }();

    SubCategoriesComponent.ctorParameters = function () {
      return [{
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }];
    };

    SubCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/category/sub-categories/sub-categories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-categories.component.css */
      "./src/app/admin-pages/category/sub-categories/sub-categories.component.css")).default]
    })], SubCategoriesComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/contact-panel/contact-panel.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/admin-pages/contact-panel/contact-panel.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesContactPanelContactPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-googleMap{\n     background-image: url('/assets/Icons/admin-contact/maps.png');\n}\n.s-icon-address{\n     background-image: url('/assets/Icons/admin-contact/address.png');\n}\n.s-icon-mail{\n     background-image: url('/assets/Icons/admin-contact/mail.png');\n}\n.s-icon-phone{\n     background-image: url('/assets/Icons/admin-contact/phone.png');\n}\n.s-icon-facebook{\n     background-image: url('/assets/Icons/admin-contact/facebook.png');\n}\n.s-icon-twitter{\n     background-image: url('/assets/Icons/admin-contact/twitter.png');\n}\n.s-icon-instagram{\n     background-image: url('/assets/Icons/admin-contact/instagram.png');\n}\n.s-icon-in{\n     background-image: url('/assets/Icons/admin-contact/in.png');\n}\n.s-icon-whatsapp{\n     background-image: url('/assets/Icons/admin-contact/whatsapp.png');\n}\n.s-icon-telegram{\n     background-image: url('/assets/Icons/admin-contact/telegram.png');\n}\n.s-icon-support-account{\n     background-image: url('/assets/Icons/admin-contact/Support Account.png');\n}\n.s-icon-suggestions-account{\n     background-image: url('/assets/Icons/admin-contact/suggestions account.png');\n}\n.s-icon-complaints-account{\n     background-image: url('/assets/Icons/admin-contact/complaints account.png');\n}\n.s-icon-inquiries-account{\n     background-image: url('/assets/Icons/admin-contact/inquiries account.png');\n}\n.s-img-inp{\n  cursor: pointer;\n}\n.s-btn-tem-h{\n    height: 48px;\n}\n.s-modal-inp{\n    /* background-color: rgba(152, 155, 155, .1); */\n    white-space: nowrap;\n    overflow: hidden;\n}\n.s-modal-inp:hover{\n    overflow-x: auto;\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-save-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n/*  */\n.s-add-new-inp{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-add-new{\n   width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/add.png');\n    background-size: 20px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-add-new:hover{\n     background-color: rgb(32, 180, 57);\n}\n.s-delete{\n    width: 60px;\n    background-image: url('/assets/Icons/admin-products/delete.png');\n    background-size: 20px;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: .5;\n    -webkit-transition: all ease-in-out .2;\n    transition: all ease-in-out .2;\n}\n.s-delete:hover{\n    background-color: #dc3545 !important;\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvY29udGFjdC1wYW5lbC9jb250YWN0LXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLDZEQUE2RDtBQUNsRTtBQUNBO0tBQ0ssZ0VBQWdFO0FBQ3JFO0FBQ0E7S0FDSyw2REFBNkQ7QUFDbEU7QUFDQTtLQUNLLDhEQUE4RDtBQUNuRTtBQUNBO0tBQ0ssaUVBQWlFO0FBQ3RFO0FBQ0E7S0FDSyxnRUFBZ0U7QUFDckU7QUFDQTtLQUNLLGtFQUFrRTtBQUN2RTtBQUNBO0tBQ0ssMkRBQTJEO0FBQ2hFO0FBQ0E7S0FDSyxpRUFBaUU7QUFDdEU7QUFDQTtLQUNLLGlFQUFpRTtBQUN0RTtBQUNBO0tBQ0ssd0VBQXdFO0FBQzdFO0FBQ0E7S0FDSyw0RUFBNEU7QUFDakY7QUFDQTtLQUNLLDJFQUEyRTtBQUNoRjtBQUNBO0tBQ0ssMEVBQTBFO0FBQy9FO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7R0FDRyxxQ0FBcUM7RUFDdEMsd0NBQXdDO0FBQzFDO0FBQ0E7R0FDRyxvQ0FBb0M7RUFDckMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0dBQ0cscUNBQXFDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0dBQ0csV0FBVztJQUNWLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLGtDQUFrQztBQUN2QztBQUNBO0lBQ0ksV0FBVztJQUNYLGdFQUFnRTtJQUNoRSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsc0NBQThCO0lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2NvbnRhY3QtcGFuZWwvY29udGFjdC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtaWNvbi1idG57XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnMtaWNvbi1nb29nbGVNYXB7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L21hcHMucG5nJyk7XG59XG4ucy1pY29uLWFkZHJlc3N7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L2FkZHJlc3MucG5nJyk7XG59XG4ucy1pY29uLW1haWx7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L21haWwucG5nJyk7XG59XG4ucy1pY29uLXBob25le1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY29udGFjdC9waG9uZS5wbmcnKTtcbn1cbi5zLWljb24tZmFjZWJvb2t7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L2ZhY2Vib29rLnBuZycpO1xufVxuLnMtaWNvbi10d2l0dGVye1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY29udGFjdC90d2l0dGVyLnBuZycpO1xufVxuLnMtaWNvbi1pbnN0YWdyYW17XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L2luc3RhZ3JhbS5wbmcnKTtcbn1cbi5zLWljb24taW57XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L2luLnBuZycpO1xufVxuLnMtaWNvbi13aGF0c2FwcHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWNvbnRhY3Qvd2hhdHNhcHAucG5nJyk7XG59XG4ucy1pY29uLXRlbGVncmFte1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY29udGFjdC90ZWxlZ3JhbS5wbmcnKTtcbn1cbi5zLWljb24tc3VwcG9ydC1hY2NvdW50e1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tY29udGFjdC9TdXBwb3J0IEFjY291bnQucG5nJyk7XG59XG4ucy1pY29uLXN1Z2dlc3Rpb25zLWFjY291bnR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1jb250YWN0L3N1Z2dlc3Rpb25zIGFjY291bnQucG5nJyk7XG59XG4ucy1pY29uLWNvbXBsYWludHMtYWNjb3VudHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWNvbnRhY3QvY29tcGxhaW50cyBhY2NvdW50LnBuZycpO1xufVxuLnMtaWNvbi1pbnF1aXJpZXMtYWNjb3VudHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWNvbnRhY3QvaW5xdWlyaWVzIGFjY291bnQucG5nJyk7XG59XG4ucy1pbWctaW5we1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1idG4tdGVtLWh7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuLnMtbW9kYWwtaW5we1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxNTUsIDE1NSwgLjEpOyAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zLW1vZGFsLWlucDpob3ZlcntcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnMtbm8tcm91bmRlZC1yaWdodHtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1uby1yb3VuZGVkLWxlZnR7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zLXNhdmUtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZEQ0YhaW1wb3J0YW50O1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xufVxuLyogICovXG4ucy1hZGQtbmV3LWlucHtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1hZGQtbmV3e1xuICAgd2lkdGg6IDYwcHg7XG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9hZGQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnMtYWRkLW5ldzpob3ZlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAxODAsIDU3KTtcbn1cbi5zLWRlbGV0ZXtcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvZGVsZXRlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjI7XG59XG4ucy1kZWxldGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/contact-panel/contact-panel.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin-pages/contact-panel/contact-panel.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ContactPanelComponent */

  /***/
  function srcAppAdminPagesContactPanelContactPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPanelComponent", function () {
      return ContactPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");

    var ContactPanelComponent =
    /*#__PURE__*/
    function () {
      function ContactPanelComponent(contact_service) {
        _classCallCheck(this, ContactPanelComponent);

        this.contact_service = contact_service;
        this.sectionTitles = ['Map', 'Contacts', 'Emails'];
        this.isloaded = false;
      }

      _createClass(ContactPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#contactHolder'); // [?] get all data

          this.getAllData();
        } // [#] controllers
        // [?] refresh any inp and make it empty

      }, {
        key: "refreshAddInp",
        value: function refreshAddInp(addButn) {
          $(addButn).val('');
        } // [?#] phone Functions

      }, {
        key: "createNewCompanyPhoneNum",
        value: function createNewCompanyPhoneNum(phoneNum) {
          this.contactSections[0].contact_info.phone[this.contactSections[0].contact_info.phone.length] = phoneNum;
        }
      }, {
        key: "updateCompanyPhoneNum",
        value: function updateCompanyPhoneNum(index, value) {
          this.contactSections[0].contact_info.phone[index] = value;
        }
      }, {
        key: "deleteCompanyPhoneNum",
        value: function deleteCompanyPhoneNum(index) {
          this.contactSections[0].contact_info.phone.splice(index, 1);
        } // [?#] whatsapp Functions

      }, {
        key: "createNewWhatsappInp",
        value: function createNewWhatsappInp(whatsappNum) {
          this.contactSections[0].contact_info.socialMedia[5].whatsapp[this.contactSections[0].contact_info.socialMedia[5].whatsapp.length] = whatsappNum;
        }
      }, {
        key: "deleteWhtsapp",
        value: function deleteWhtsapp(index) {
          this.contactSections[0].contact_info.socialMedia[5].whatsapp.splice(index, 1);
        }
      }, {
        key: "updateWhatsapp",
        value: function updateWhatsapp(index, value) {
          this.contactSections[0].contact_info.socialMedia[5].whatsapp[index] = value;
        } // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({Sections Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] get all sections

      }, {
        key: "getAllData",
        value: function getAllData() {
          var _this36 = this;

          this.contact_service.getSections().subscribe(function (res) {
            _this36.contactSections = res;
            console.log(_this36.contactSections);
          }, function (err) {}, function () {
            _this36.isloaded = true;
          });
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this37 = this;

          this.contact_service.updateSection(this.contactSections[0]._id, this.contactSections[0]).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this37.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this37.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this37.notify_component.notifyMe('alert-success', 'Page is', ' up to date!');
          });
        }
      }]);

      return ContactPanelComponent;
    }();

    ContactPanelComponent.ctorParameters = function () {
      return [{
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], {
      static: false
    })], ContactPanelComponent.prototype, "notify_component", void 0);
    ContactPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/contact-panel/contact-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-panel.component.css */
      "./src/app/admin-pages/contact-panel/contact-panel.component.css")).default]
    })], ContactPanelComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/home-panel/home-panel.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin-pages/home-panel/home-panel.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesHomePanelHomePanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-video{\n     background-image: url('/assets/Icons/admin-home/youtube.png');\n}\n.s-img-inp{\n  cursor: pointer;\n}\n.s-btn-tem-h{\n    height: 48px;\n}\n.s-modal-inp{\n    /* background-color: rgba(152, 155, 155, .1); */\n    white-space: nowrap;\n    overflow: hidden;\n}\n.s-modal-inp:hover{\n    overflow-x: auto;\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-save-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvaG9tZS1wYW5lbC9ob21lLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLDZEQUE2RDtBQUNsRTtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0dBQ0cscUNBQXFDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0dBQ0csb0NBQW9DO0VBQ3JDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL2hvbWUtcGFuZWwvaG9tZS1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtaWNvbi1idG57XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnMtaWNvbi12aWRlb3tcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLWhvbWUveW91dHViZS5wbmcnKTtcbn1cbi5zLWltZy1pbnB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLWJ0bi10ZW0taHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4ucy1tb2RhbC1pbnB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTIsIDE1NSwgMTU1LCAuMSk7ICovXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnMtbW9kYWwtaW5wOmhvdmVye1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG4ucy1uby1yb3VuZGVkLXJpZ2h0e1xuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zLW5vLXJvdW5kZWQtbGVmdHtcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtc2F2ZS1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6I0ZGRkRDRiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/home-panel/home-panel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin-pages/home-panel/home-panel.component.ts ***!
    \****************************************************************/

  /*! exports provided: HomePanelComponent */

  /***/
  function srcAppAdminPagesHomePanelHomePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePanelComponent", function () {
      return HomePanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_services_va_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/va.service */
    "./src/app/services/va.service.ts");

    var HomePanelComponent =
    /*#__PURE__*/
    function () {
      function HomePanelComponent(home_service, va_serv) {
        _classCallCheck(this, HomePanelComponent);

        this.home_service = home_service;
        this.va_serv = va_serv;
        this.sectionTitles = ['Video'];
        this.isloaded = false;
      }

      _createClass(HomePanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#homeHolder');
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this38 = this;

          this.home_service.getSections().subscribe(function (res) {
            _this38.data = res;
          }, function (err) {}, function () {
            _this38.isloaded = true;
          });
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this39 = this;

          this.home_service.updateSection(this.data[0]._id, this.data[0]).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this39.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this39.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this39.notify_component.notifyMe('alert-success', 'Page is', ' up to date!');
          });
        }
      }]);

      return HomePanelComponent;
    }();

    HomePanelComponent.ctorParameters = function () {
      return [{
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }, {
        type: src_app_services_va_service__WEBPACK_IMPORTED_MODULE_4__["VaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], {
      static: false
    })], HomePanelComponent.prototype, "notify_component", void 0);
    HomePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/home-panel/home-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-panel.component.css */
      "./src/app/admin-pages/home-panel/home-panel.component.css")).default]
    })], HomePanelComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/product-page/product-page.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin-pages/product-page/product-page.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesProductPageProductPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-image{\n     background-image: url('/assets/Icons/admin-about/addNewImg.png');\n}\n.s-icon-art{\n     background-image: url('/assets/Icons/admin-about/article.png');\n}\n.s-icon-product-name{\n     background-image: url('/assets/Icons/admin-product-page/products.png');\n}\n.s-icon-product-id{\n     background-image: url('/assets/Icons/admin-product-page/id.png');\n}\n.s-img-inp{\n  cursor: pointer;\n}\n.s-btn-tem-h{\n    height: 48px;\n}\n.s-modal-inp{\n    /* background-color: rgba(152, 155, 155, .1); */\n    white-space: nowrap;\n    overflow: hidden;\n}\n.s-modal-inp:hover{\n    overflow-x: auto;\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-save-btn:hover{\n  background-color:#FFFDCF!important;\n  color: #222222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0E7S0FDSyxnRUFBZ0U7QUFDckU7QUFDQTtLQUNLLDhEQUE4RDtBQUNuRTtBQUNBO0tBQ0ssc0VBQXNFO0FBQzNFO0FBQ0E7S0FDSyxnRUFBZ0U7QUFDckU7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLHFDQUFxQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1tYWtlLW1lLXVwe1xuICAgIHotaW5kZXg6IDQwMDA7XG59XG4ucy1pY29uLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1pY29uLWltYWdle1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tYWJvdXQvYWRkTmV3SW1nLnBuZycpO1xufVxuLnMtaWNvbi1hcnR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1hYm91dC9hcnRpY2xlLnBuZycpO1xufVxuLnMtaWNvbi1wcm9kdWN0LW5hbWV7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0LXBhZ2UvcHJvZHVjdHMucG5nJyk7XG59XG4ucy1pY29uLXByb2R1Y3QtaWR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0LXBhZ2UvaWQucG5nJyk7XG59XG4ucy1pbWctaW5we1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1idG4tdGVtLWh7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuLnMtbW9kYWwtaW5we1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxNTUsIDE1NSwgLjEpOyAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zLW1vZGFsLWlucDpob3ZlcntcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnMtbm8tcm91bmRlZC1yaWdodHtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1uby1yb3VuZGVkLWxlZnR7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zLXNhdmUtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZEQ0YhaW1wb3J0YW50O1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-pages/product-page/product-page.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin-pages/product-page/product-page.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductPageComponent */

  /***/
  function srcAppAdminPagesProductPageProductPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function () {
      return ProductPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product-page.service */
    "./src/app/services/product-page.service.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");
    /* harmony import */


    var src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/img-controls.service */
    "./src/app/services/img-controls.service.ts");

    var ProductPageComponent =
    /*#__PURE__*/
    function () {
      function ProductPageComponent(prod_page_service, pagesImg_service, img_service) {
        _classCallCheck(this, ProductPageComponent);

        this.prod_page_service = prod_page_service;
        this.pagesImg_service = pagesImg_service;
        this.img_service = img_service;
        this.sectionTitles = ['Slider', 'Hot'];
        this.isloaded = false;
        this.imageFileHot = [];
        this.imageFileSlider = [];
        this.deletingImgs = [];
      }

      _createClass(ProductPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#productHolder'); // [?] get all data

          this.getData();
        } // ==================================================
        // {=========={([@] Tools )}==========}
        // ==================================================
        // [?] Redirect imgs coms from input file to asets file

      }, {
        key: "solvImgURL",
        value: function solvImgURL(imgPath) {
          var imgName = imgPath.replace(/.*[\/\\]/, '');
          var imgsFolder = 'imgs/products';
          var solvedPath = "assets/".concat(imgsFolder, "/").concat(imgName);
          if (!imgName) return false;
          return solvedPath;
        } // {=========={([@] Controlers )}==========}
        // [# Controlers] || ================================================== |({Sections})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] image file function

      }, {
        key: "sectionImage",
        value: function sectionImage(inp) {
          $(inp).click();
        }
      }, {
        key: "onChangeImgInp",
        value: function onChangeImgInp(value, inp, index, caseX) {
          var imagePath = this.solvImgURL(value);
          $(inp).val(imagePath); // [?] extra code

          switch (caseX) {
            case 'slider':
              this.data[0].page_slides[index].slide_image = imagePath;
              break;

            case 'hot':
              this.data[0].page_hot_sec[index].box_image = imagePath;
              break;
          }
        } // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event, index, caseX) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];

            switch (caseX) {
              case 'slider':
                this.data[0].page_slides[index].slide_image = this.img_service.solvImgURL(event.target.value);
                this.imageFileSlider[index] = file;
                break;

              case 'hot':
                this.data[0].page_hot_sec[index].box_image = this.img_service.solvImgURL(event.target.value);
                this.imageFileHot[index] = file;
                break;
            }
          }
        }
      }, {
        key: "oldImgValue",
        value: function oldImgValue(imgName, index) {
          this.deletingImgs[index] = imgName;
        }
      }, {
        key: "deleteImg",
        value: function deleteImg() {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.deletingImgs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var img = _step7.value;
              this.pagesImg_service.deleteImage(img).subscribe(function (res) {});
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controlers] || ================================================== |Sections| ---END---
        // [?] get all data

      }, {
        key: "getData",
        value: function getData() {
          var _this40 = this;

          this.prod_page_service.getSections().subscribe(function (res) {
            _this40.data = res;
            console.log(_this40.data);
          }, function (err) {}, function () {
            _this40.isloaded = true;
          });
        }
      }, {
        key: "postImg",
        value: function postImg() {
          var _this41 = this;

          var allImages = this.imageFileSlider.concat(this.imageFileHot);
          var count = 0;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = allImages[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var img = _step8.value;
              var formData = new FormData();

              if (img) {
                formData.append('file', img);
                this.pagesImg_service.uploadImg(formData).subscribe(function (res) {}, function (err) {
                  console.log(err);
                }, function () {
                  _this41.imageFileSlider = [];
                  _this41.imageFileHot = [];
                  _this41.deletingImgs = [];
                });
              }

              count++;
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this42 = this;

          this.prod_page_service.updateSection(this.data[0]._id, this.data[0]).subscribe(function (res) {}, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this42.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this42.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this42.notify_component.notifyMe('alert-success', 'Page is', ' up to date!');
          });
        }
      }]);

      return ProductPageComponent;
    }();

    ProductPageComponent.ctorParameters = function () {
      return [{
        type: _services_product_page_service__WEBPACK_IMPORTED_MODULE_2__["ProductPageService"]
      }, {
        type: src_app_services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_4__["PagesImgsService"]
      }, {
        type: src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_5__["ImgControlsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"], {
      static: false
    })], ProductPageComponent.prototype, "notify_component", void 0);
    ProductPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product-page/product-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-page.component.css */
      "./src/app/admin-pages/product-page/product-page.component.css")).default]
    })], ProductPageComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-color/product-color.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-color/product-color.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesProductProductColorProductColorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Side imgs */\n.s-side-imgs-holder{\n    height: 350px;\n    width: auto;\n    overflow: scroll;\n}\n.s-product-color{\n    cursor: pointer;\n    border-radius: 50%;\n    min-width: 30px !important;\n    min-height: 30px !important;\n    max-width: 30px !important;\n    max-height: 30px !important;\n    background-image: url('/assets/Icons/admin-products/add.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\n.s-page-opacity{\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 !important;\n}\n.s-page-opacity:hover {\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 !important;\n}\n.s-product-color-del{\n    border-radius: 50%;\n    min-width: 30px !important;\n    min-height: 30px !important;\n    max-width: 30px !important;\n    max-height: 30px !important;\n    background-image: url('/assets/Icons/admin-products/delete.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    opacity: .1;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n}\n.s-side-image{\n    border: 4px dashed rgba(152, 155, 155, 1);\n    min-width: 100px !important;\n    min-height: 100px !important;\n    max-width: 100px !important;\n    max-height: 100px !important;\n    background-image: url('/assets/Icons/admin-products/addNewImg.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 30px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    overflow: hidden;\n}\n.s-side-image:hover {\n  border: 4px dashed #989B9B;\n  cursor: pointer;\n\n}\n.s-side-image-delete{\n    position: absolute;\n    /* bottom: -20px; */\n    bottom: -35px;\n    left: 0;\n    height: 60px;\n    width: 100%;\n    background-image: url('/assets/Icons/admin-products/delete-light.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    border-radius: 0;\n}\n.s-selected{\n    border: 2px solid #FFFBA0 !important;\n    /* box-shadow: 0px 0px 4px 1px black !important; */\n}\n.s-border-select:hover {\n    border: 2px solid #FFFBA0 !important;\n    opacity: .8;\n}\n@media (max-width: 991px) {\n    .s-side-imgs-holder {\n      height: auto;\n      width: 350px;\n      overflow: scroll;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWNvbG9yL3Byb2R1Y3QtY29sb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsNkRBQTZEO0lBQzdELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnRUFBZ0U7SUFDaEUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsbUVBQW1FO0lBQ25FLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7O0FBRWpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzRUFBc0U7SUFDdEUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBQ0E7SUFDSTtNQUNFLFlBQVk7TUFDWixZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlcy9wcm9kdWN0L3Byb2R1Y3QtY29sb3IvcHJvZHVjdC1jb2xvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2lkZSBpbWdzICovXG4ucy1zaWRlLWltZ3MtaG9sZGVye1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5zLXByb2R1Y3QtY29sb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtaW4td2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9hZGQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbn1cbi5zLXBhZ2Utb3BhY2l0eXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xcztcbiAgICBvcGFjaXR5OiAuNiAhaW1wb3J0YW50O1xufVxuLnMtcGFnZS1vcGFjaXR5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xcztcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4ucy1wcm9kdWN0LWNvbG9yLWRlbHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWluLXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvZGVsZXRlLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICBvcGFjaXR5OiAuMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xufVxuLnMtc2lkZS1pbWFnZXtcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYSgxNTIsIDE1NSwgMTU1LCAxKTtcbiAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvYWRkTmV3SW1nLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zLXNpZGUtaW1hZ2U6aG92ZXIge1xuICBib3JkZXI6IDRweCBkYXNoZWQgIzk4OUI5QjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4ucy1zaWRlLWltYWdlLWRlbGV0ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogYm90dG9tOiAtMjBweDsgKi9cbiAgICBib3R0b206IC0zNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9kZWxldGUtbGlnaHQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucy1zZWxlY3RlZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGQkEwICFpbXBvcnRhbnQ7XG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IGJsYWNrICFpbXBvcnRhbnQ7ICovXG59XG4ucy1ib3JkZXItc2VsZWN0OmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGQkEwICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogLjg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAucy1zaWRlLWltZ3MtaG9sZGVyIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-color/product-color.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-color/product-color.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductColorComponent */

  /***/
  function srcAppAdminPagesProductProductColorProductColorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductColorComponent", function () {
      return ProductColorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/admin-product-color.model */
    "./src/app/model/admin-product-color.model.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/img-controls.service */
    "./src/app/services/img-controls.service.ts");
    /*
      ==================================================
      {=========={(@ Comments Hent)}==========}
      ==================================================
      [@] => Main block comment
      [#] => sub main block comment
      [?] => discription Comment
      <CALL> => functin calling events
    */


    var ProductColorComponent =
    /*#__PURE__*/
    function () {
      // fadeMe;
      function ProductColorComponent(pro_service, router, img_service) {
        _classCallCheck(this, ProductColorComponent);

        this.pro_service = pro_service;
        this.router = router;
        this.img_service = img_service; // ==================================================
        // {=========={([@] Main Vars)}==========}
        // ==================================================
        // { prod_color: 'red', prod_images: [{ prod_side_img: "assets/imgs/products/allProducts/laya-clode-WfDj_DWZpHA-unsplash.jpg" }] } //TODO Test

        this.productColors = [];
        this.selectedColorBtnIndex = 0;
        this.pageLoad = false;
        this.prod_colors = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prod_mainImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductColorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          //[?] check if it is new product or come from database
          var startUp = function startUp() {
            if (!_this43.pro_service.checkProductIDParam()) {
              _this43.startNew();
            }
          };

          startUp();
        } // ==================================================
        // {=========={([@] Tools )}==========}
        // ==================================================
        // [?] Redirect imgs coms from input file to asets file

      }, {
        key: "solvImgURL",
        value: function solvImgURL(imgPath) {
          var imgName = imgPath.replace(/.*[\/\\]/, '');
          var imgsFolder = 'imgs/products/allProducts';
          var solvedPath = "assets/".concat(imgsFolder, "/").concat(imgName);
          if (!imgName) return false;
          return solvedPath;
        } //[?] send product colors as output

      }, {
        key: "outputProductColors",
        value: function outputProductColors() {
          // for (let productColor of this.productColors){
          //   let index = this.productColors.indexOf(productColor)
          //   jQuery.isEmptyObject(productColor) ? this.productColors.splice(index,1): true;
          // }
          this.prod_colors.emit(this.productColors);
        }
      }, {
        key: "outPutProductMainInage",
        value: function outPutProductMainInage() {
          this.prod_mainImage.emit(this.mainImage);
        }
      }, {
        key: "isLoaded",
        value: function isLoaded() {
          this.pageLoad = true;
        }
      }, {
        key: "inputProductColorsById",
        value: function inputProductColorsById(inputProductColors) {
          this.productColors = inputProductColors;
          this.isLoaded(); // [?] select first color button

          this.selectColorBtnAuto();
        } // ==================================================
        // {=========={([@] view )}==========}
        // ==================================================
        // [# view] || ================================================== |({product color})| ===START=== 
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] set New color Button

      }, {
        key: "newColor",
        value: function newColor(btn) {
          var colorIndex = $("[data-type='color-btn']").get().indexOf(btn);

          if (!this.productColors[colorIndex].prod_color) {
            this.generateProColor($(btn).val());
          }
        } // [?] generate new product color object in color array

      }, {
        key: "generateProColor",
        value: function generateProColor(pickerValue) {
          //[?] push side imges object array
          var sideImgs = this.productColors[this.productColors.length - 1].prod_images = [];
          var newProductSideImg = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["ProductSideImgs"]();
          sideImgs.push(newProductSideImg); //[?] push color object

          this.productColors[this.productColors.length - 1].prod_color = pickerValue;
          var newProcutColor = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["ProductColor"]();
          this.productColors.push(newProcutColor);
          return true;
        } // [?] change prod_color value in color object

      }, {
        key: "pickColor",
        value: function pickColor(productColor, pickerValue) {
          productColor.prod_color = pickerValue;
        } //[?] fadeIn Animations

      }, {
        key: "fadInColor",
        value: function fadInColor(btn) {
          var colorBTN = $(btn).parent()[0];
          $(colorBTN).addClass('animated fadeIn');
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# view] || ================================================== |product color| ---END---
        ////////////
        // [# view] || ================================================== |{(product Side Image)}| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] set new side image showBox

      }, {
        key: "newSideImg",
        value: function newSideImg(event, sideImgeInp) {
          var sideImgeIndex = $("[data-type='side-img-inp']").get().indexOf(sideImgeInp);

          if (!this.productColors[this.selectedColorBtnIndex].prod_images[sideImgeIndex].prod_side_img) {
            this.generateProSideImge(event, $(sideImgeInp).val());
          }
        } // [?] generate new product side image object in array 

      }, {
        key: "generateProSideImge",
        value: function generateProSideImge(event, sideImge) {
          var sideImgsArray = this.productColors[this.selectedColorBtnIndex].prod_images;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.imageFile = file;
            var reader = new FileReader();
            var formData = new FormData();

            if (this.imageFile) {
              formData.append('file', this.imageFile);
              this.pro_service.uploadImg(formData).subscribe(function (res) {}, function (err) {
                console.log(err);
              }, function () {
                reader.onload = function (e) {
                  sideImgsArray[sideImgsArray.length - 1].prod_side_img = file.name;
                  var newProductSideImg = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["ProductSideImgs"]();
                  sideImgsArray.push(newProductSideImg);
                };

                reader.readAsDataURL(file);
              });
            }
          }
        } // [?] update side image

      }, {
        key: "updateSideImage",
        value: function updateSideImage(event, oldSideImage) {
          var _this44 = this;

          this.pro_service.deleteImage(oldSideImage.prod_side_img).subscribe(function (res) {});

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.imageFile = file;
            var reader = new FileReader();
            var formData = new FormData();

            if (this.imageFile) {
              formData.append('file', this.imageFile);
              this.pro_service.uploadImg(formData).subscribe(function (res) {}, function (err) {
                console.log(err);
              }, function () {
                reader.onload = function (e) {
                  oldSideImage.prod_side_img = file.name;

                  _this44.setMainImage();
                };

                reader.readAsDataURL(file);
              });
            }
          }
        } //[?] fadeIn Animations

      }, {
        key: "fadInSideImg",
        value: function fadInSideImg(inp) {
          var sideImgBox = $(inp).parent()[0];
          $(sideImgBox).addClass('animated fadeIn');
        }
      }, {
        key: "setMainImage",
        value: function setMainImage() {
          if (!$.isEmptyObject(this.productColors[0])) {
            this.mainImage = this.productColors[0].prod_images[0].prod_side_img;
          } else {
            this.mainImage = undefined;
          }

          this.outPutProductMainInage();
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# view] || ================================================== |product Side Image| ---END---
        // ==================================================
        // {=========={([@] Controllers )}==========}
        // ==================================================
        // [# Controllers] || ================================================== |({product color})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] setup for new product 

      }, {
        key: "startNew",
        value: function startNew() {
          // [?] push color object at colors array //*~
          var newProcutColor = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["ProductColor"]();
          this.productColors.push(newProcutColor);
          this.isLoaded(); // [?] select first color button

          this.selectColorBtnAuto();
        } //[?] store selected color btn

      }, {
        key: "selectColorBtn",
        value: function selectColorBtn(btn) {
          this.selectedColorBtn = btn;
          this.selectedColorBtnIndex = $("[data-type='color-btn']").get().indexOf(btn);
        } //[?] select color Button after delete one

      }, {
        key: "selectColorBtnAuto",
        value: function selectColorBtnAuto() {
          var _this45 = this;

          //[?] dont select the + color button if + button is the next selection and if there is more buttons , select the Previous button
          if (!this.productColors[this.selectedColorBtnIndex].prod_color) {
            if (this.productColors.length > 1) {
              this.selectedColorBtnIndex -= 1;
            } else {
              this.selectedColorBtnIndex = 0;
              return;
            }
          } // TODO
          //  else {
          //   this.selectedColorBtnIndex = this.selectedColorBtnIndex
          // }


          setTimeout(function () {
            _this45.selectedColorBtn = $("[data-type='color-btn']").get()[_this45.selectedColorBtnIndex];

            _this45.selectedColorBtn.click();
          }, 200);
        } //[?] store hoverd color button

      }, {
        key: "HoverColorBtn",
        value: function HoverColorBtn(btn) {
          this.HoverColorBtnIndex = $("[data-type='color-btn']").get().indexOf(btn);
        } //[?] remove hovered color button

      }, {
        key: "deHoverColorBtn",
        value: function deHoverColorBtn() {
          this.HoverColorBtnIndex = undefined;
        } //[?] delete color Main Function

      }, {
        key: "deleteColor",
        value: function deleteColor() {
          this.deleteColorObj(); // [?] set product main image

          this.setMainImage();
          this.selectColorBtnAuto();
        } //[?] delete color object

      }, {
        key: "deleteColorObj",
        value: function deleteColorObj() {
          var position = this.selectedColorBtnIndex;
          var imgs = this.productColors[position].prod_images;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = imgs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var img = _step9.value;
              this.pro_service.deleteImage(img.prod_side_img).subscribe(function (res) {});
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          this.productColors.splice(position, 1);
        } //[?] rest product color array to create new product

      }, {
        key: "resetForAddNew",
        value: function resetForAddNew() {
          this.productColors = [];
          this.startNew();
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controllers] || ================================================== |product color| ---END---
        ////////////
        // [# Controllers] || ================================================== |{(product Side Image)}| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] store hoverd side image div showBox

      }, {
        key: "HoverSideImage",
        value: function HoverSideImage(imgBox) {
          this.HoverSideImgeShowBoxIndex = $("[data-type='side-image-showBox']").get().indexOf(imgBox);
        } //[?] remove hovered side image div showBox

      }, {
        key: "deHoverSideImage",
        value: function deHoverSideImage() {
          this.HoverSideImgeShowBoxIndex = undefined;
        } //[?] store side image delete button

      }, {
        key: "showDeleteSideImageBtn",
        value: function showDeleteSideImageBtn(sideImageDelBtn) {
          this.selectedSideImgeDelBtn = sideImageDelBtn;
        } //[?] remove stored side image delete button

      }, {
        key: "hideDeleteSideImageBtn",
        value: function hideDeleteSideImageBtn() {
          this.selectedSideImgeDelBtn = undefined;
        } // [?] delete side image 

      }, {
        key: "deleteSideImage",
        value: function deleteSideImage(position) {
          var sideImgsArray = this.productColors[this.selectedColorBtnIndex].prod_images;
          this.pro_service.deleteImage(sideImgsArray[position].prod_side_img).subscribe(function (res) {});
          sideImgsArray.splice(position, 1); // [?] set product main image
          // let mainImage = this.productColors[0].prod_images[0].prod_side_img

          this.setMainImage();
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controllers] || ================================================== |product Side Image| ---END---
        // [#] HTTP REQ

      }, {
        key: "postImg",
        value: function postImg() {
          var formData = new FormData();

          if (this.imageFile) {
            formData.append('file', this.imageFile);
            this.pro_service.uploadImg(formData).subscribe(function (res) {}, function (err) {
              console.log(err);
            }, function () {});
          }
        }
      }]);

      return ProductColorComponent;
    }();

    ProductColorComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_img_controls_service__WEBPACK_IMPORTED_MODULE_6__["ImgControlsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductColorComponent.prototype, "prod_colors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductColorComponent.prototype, "prod_mainImage", void 0);
    ProductColorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-color',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-color.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-color/product-color.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2000ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-color.component.css */
      "./src/app/admin-pages/product/product-color/product-color.component.css")).default]
    })], ProductColorComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-menu/product-menu.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-menu/product-menu.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesProductProductMenuProductMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-modal-holder{\n height: 580px;\n overflow: scroll;\n}\n.s-product-box{\n    width: 100%;\n    height: 185px;\n    cursor: pointer;\n    background-image : url('/assets/Icons/admin-products/noImge.png');\n    background-size: 140px;\n    background-repeat: no-repeat;\n    background-position: center;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-product-box:hover{\n    background-size: 160px;\n}\n.s-product-box-holder{   \n    width: 230px;\n    height: 230px;\n}\n.s-product-box-holder:hover{\n    box-shadow: 0px 0px 0px 2px rgba(255, 251, 160,.2);\n    cursor: pointer;\n}\n.s-search-btn{\n    width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/serach.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-category-name{\n    width: 30%;\n    top: 0;\n    opacity: .85;\n    z-index: 4000;\n}\n.s-product-title{\n    width: 100%;\n    bottom: 0px;\n}\n.s-sub-categories-holder{\n width: 100%;\n height: 48px;\n overflow-x: scroll; \n overflow-y: hidden;\n}\n.s-sub-categories-btns{\n   white-space: nowrap;\n   text-align: center;\n}\n.s-sub-categories-btns:hover{\n    background-color: #FFFBA0;\n    color: #242424 !important;\n}\n.s-sub-categories-selected_btns{\n    background-color: #FFFBA0;\n    color: #242424 !important;\n}\n.s-dash{\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right{\n  right:15px;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n@media (max-width: 991px) {\n    .s-product-box{\n        height: 285px; \n        background-size: 200px;\n    }\n    .s-product-box:hover{\n        background-size: 220px;\n    }\n    .s-product-box-holder{\n        width: 330px;\n        height: 330px; \n    }\n    .s-search-bar{\n    width: 100%;\n    }\n    .s-category-name{\n    width: 70%;\n    top: 0;\n    z-index: 4000;\n    }\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 1px rgba(255, 251, 160,1);\n    cursor: pointer;\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .2);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity:hover{\n    background: rgba(34, 34, 34, .5);\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 1px rgba(255, 251, 160,1);\n    cursor: pointer;\n}\n.s-add-category-box{\n    height: 350px;\n}\n.s-all-categories-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .8);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-all-categories-box-obacity:hover{\n    background: rgba(34, 34, 34, .9);\n}\n.s-all-Categories{\n    background-image: url('/assets/Icons/admin-products/categories.png'); \n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvcHJvZHVjdC9wcm9kdWN0LW1lbnUvcHJvZHVjdC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixpRUFBaUU7SUFDakUsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0NBQTBCO0lBQTFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0RBQWtEO0lBQ2xELGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0VBQWdFO0lBQ2hFLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtHQUNHLG1CQUFtQjtHQUNuQixrQkFBa0I7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtJQUNBLFdBQVc7SUFDWDtJQUNBO0lBQ0EsVUFBVTtJQUNWLE1BQU07SUFDTixhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtLQUM5QixpREFBaUQ7SUFDbEQsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsdUNBQStCO0lBQS9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx1Q0FBK0I7SUFBL0IsK0JBQStCO0tBQzlCLGlEQUFpRDtJQUNsRCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyx1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLG9FQUFvRTtJQUNwRSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1tZW51L3Byb2R1Y3QtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtbW9kYWwtaG9sZGVye1xuIGhlaWdodDogNTgwcHg7XG4gb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5zLXByb2R1Y3QtYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTg1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvbm9JbWdlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTQwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG59XG4ucy1wcm9kdWN0LWJveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MHB4O1xufVxuLnMtcHJvZHVjdC1ib3gtaG9sZGVyeyAgIFxuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xufVxuLnMtcHJvZHVjdC1ib3gtaG9sZGVyOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjUxLCAxNjAsLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLXNlYXJjaC1idG57XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9zZXJhY2gucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnMtY2F0ZWdvcnktbmFtZXtcbiAgICB3aWR0aDogMzAlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAuODU7XG4gICAgei1pbmRleDogNDAwMDtcbn1cbi5zLXByb2R1Y3QtdGl0bGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG59XG4ucy1zdWItY2F0ZWdvcmllcy1ob2xkZXJ7XG4gd2lkdGg6IDEwMCU7XG4gaGVpZ2h0OiA0OHB4O1xuIG92ZXJmbG93LXg6IHNjcm9sbDsgXG4gb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLnMtc3ViLWNhdGVnb3JpZXMtYnRuc3tcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucy1zdWItY2F0ZWdvcmllcy1idG5zOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCQTA7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbn1cbi5zLXN1Yi1jYXRlZ29yaWVzLXNlbGVjdGVkX2J0bnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJBMDtcbiAgICBjb2xvcjogIzI0MjQyNCAhaW1wb3J0YW50O1xufVxuLnMtZGFzaHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogLjg7XG59XG4ucy1kYXNoLXJpZ2h0e1xuICByaWdodDoxNXB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IC44O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnMtcHJvZHVjdC1ib3h7XG4gICAgICAgIGhlaWdodDogMjg1cHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xuICAgIH1cbiAgICAucy1wcm9kdWN0LWJveDpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMjBweDtcbiAgICB9XG4gICAgLnMtcHJvZHVjdC1ib3gtaG9sZGVye1xuICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgIGhlaWdodDogMzMwcHg7IFxuICAgIH1cbiAgICAucy1zZWFyY2gtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucy1jYXRlZ29yeS1uYW1le1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDQwMDA7XG4gICAgfVxufVxuLnMtY2F0ZWdvcnktYm94OmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKDI1NSwgMjUxLCAxNjAsMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1jYXRlZ29yeS1ib3gtb2JhY2l0eTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC41KTtcbn1cbi5zLWNhdGVnb3J5LWJveDpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xuICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYSgyNTUsIDI1MSwgMTYwLDEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLWFkZC1jYXRlZ29yeS1ib3h7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn1cbi5zLWFsbC1jYXRlZ29yaWVzLWJveC1vYmFjaXR5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC44KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xufVxuLnMtYWxsLWNhdGVnb3JpZXMtYm94LW9iYWNpdHk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAuOSk7XG59XG4ucy1hbGwtQ2F0ZWdvcmllc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvY2F0ZWdvcmllcy5wbmcnKTsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-menu/product-menu.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-menu/product-menu.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductMenuComponent */

  /***/
  function srcAppAdminPagesProductProductMenuProductMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductMenuComponent", function () {
      return ProductMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductMenuComponent =
    /*#__PURE__*/
    function () {
      function ProductMenuComponent(pro_service, categ_service, router) {
        _classCallCheck(this, ProductMenuComponent);

        this.pro_service = pro_service;
        this.categ_service = categ_service;
        this.router = router;
        this.productsByCategories = [];
        this.productBySubCateg = [];
        this.CategoryName = 'All'; // searchedProducts=[];

        this.prodOrCateg = 'Categories';
        this.selectProductId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          $("#exampleModalCenter").on("click", "[data-select=false]", function ($e) {
            _this46.selectSubCategBtn($e.target);
          });
          this.getAllProducts();
          this.getAllCategories();
        } // [?] add class to selected button

      }, {
        key: "selectSubCategBtn",
        value: function selectSubCategBtn(btn) {
          var btns = $('[data-select=false]');
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = btns[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var btnIn = _step10.value;
              $(btnIn).removeClass("s-sub-categories-selected_btns");
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          $(btn).addClass("s-sub-categories-selected_btns");
        }
      }, {
        key: "refishMenu",
        value: function refishMenu() {
          // [?] clear search bar
          this.searchValue = undefined;
          this.productsByCategories = [];
          this.productBySubCateg = [];
          this.CategoryName = 'All';
          this.prodOrCateg = 'Categories';
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          $('#openMenuBtn').click();
          this.refishMenu();
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this47 = this;

          this.pro_service.getProducts().subscribe(function (res) {
            _this47.products = res;
          });
        } //[?] send output productId to call () from {{product-panel.component}}

      }, {
        key: "outputProductId",
        value: function outputProductId(id) {
          this.selectProductId.emit(id);
        }
      }, {
        key: "switchProdOrCateg",
        value: function switchProdOrCateg() {
          this.prodOrCateg == 'Categories' ? this.prodOrCateg = 'Products' : this.prodOrCateg = 'Categories';
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this48 = this;

          this.categ_service.getCategories().subscribe(function (res) {
            _this48.categories = res;
          });
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id, categName) {
          this.productBySubCateg = [];
          this.productsByCategories = [];
          this.CategoryName = categName;
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this.products[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var product = _step11.value;
              product.prod_category == id ? this.productsByCategories.push(product) : false;
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          if (this.productsByCategories.length <= 0) {
            this.productsByCategories = undefined;
          }
        }
      }, {
        key: "selectAllCategory",
        value: function selectAllCategory() {
          this.CategoryName = 'All';
          this.productsByCategories = [];
        } // [?] select sub categories 

      }, {
        key: "selectSubCategOfCateg",
        value: function selectSubCategOfCateg(subCategories) {
          this.selectedSubCategOfCateg = subCategories;
        }
      }, {
        key: "selectProdsOfSubCateg",
        value: function selectProdsOfSubCateg(subCategories) {
          this.productBySubCateg = [];

          if (this.productsByCategories) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = this.productsByCategories[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var product = _step12.value;
                product.prod_sub_category == subCategories ? this.productBySubCateg.push(product) : false;
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }
          }

          if (this.productBySubCateg.length <= 0) {
            this.productBySubCateg = undefined;
          }
        } // [?] select all sub categories product

      }, {
        key: "selectAllSubCategories",
        value: function selectAllSubCategories() {
          this.productBySubCateg = [];
        }
      }]);

      return ProductMenuComponent;
    }();

    ProductMenuComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductMenuComponent.prototype, "selectProductId", void 0);
    ProductMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-menu/product-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-menu.component.css */
      "./src/app/admin-pages/product/product-menu/product-menu.component.css")).default]
    })], ProductMenuComponent);
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-panel/product-panel.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-panel/product-panel.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPagesProductProductPanelProductPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* product Name */\n.s-product-named-inp{\n    background-color: rgba(152, 155, 155, .1);\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    border-radius: 0.25rem;\n}\n/* product discription */\n.s-desc-text-area{\n    background-color: rgba(152, 155, 155, .01);\n    width : 100%;\n}\n/* product info */\n/* main img */\n.s-main-image-view{\n    width: 330px;\n    height: 330px;\n    background-image: url('/assets/Icons/admin-products/image.png');\n    background-position: center ;\n    background-repeat: no-repeat;\n    background-size: 60px;\n    border: 4px dashed rgba(152,155,155,1);\n}\n.s-main-image-view:hover{\n    border: 4px dashed #989B9B;\n\n}\n.s-category-btn-icon{\n    height:100%;\n    width:50px;\n}\n.s-page-opacity{\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 !important;\n}\n.s-page-opacity:hover {\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 !important;\n}\n.s-page-opacity-2{\n    cursor: default;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 ;\n}\n.s-page-opacity-2:hover{\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 ;\n}\n/* controllers */\n.s-product-menu-btn {\n  width: 280px;\n  height: 30px;\n  background-image: url('/assets/Icons/admin-products/arrow-up.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 4000;\n}\n.s-categories-dropdown{\n    max-height: 300px;\n    min-height: 300px;\n    overflow: scroll;\n}\n.s-drop-item{\n    color: #858989 !important;\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    height: 40px\n}\n.s-drop-item:hover{\n    background-color: #989B9B !important;\n    color: #242424 !important;\n    box-shadow: 0px 0px 0px 1px rgba(255, 251, 160,1);\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .2);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-product-menu-controllers-btns{\n    width: 100px;\n    /* height: 60px; */\n}\n.s-category-switch-btn{\n    min-width: 130px;\n    min-height :40px;\n}\n@media (max-width: 991px) {\n    .s-desc-col{\n        height: 350px;\n    }\n    .s-main-img-col {\n        height: 400px;\n    }\n    .s-side-col{\n        height: 200px;\n    }\n}\n.s-controls-holder {\n    height: 200px;\n}\n.s-border-select:hover {\n    border: 2px solid #FFFBA0 !important;\n    opacity: .8;\n}\n.s-selected{\n    border: 2px solid #FFFBA0 !important;\n    /* box-shadow: 0px 0px 4px 1px black !important; */\n}\n/* price */\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-price{\n     background-image: url('/assets/Icons/admin-products/price.png');\n}\n.s-add-new-inp{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-add-new{\n   width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZXMvcHJvZHVjdC9wcm9kdWN0LXBhbmVsL3Byb2R1Y3QtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrREFBK0Q7SUFDL0QsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtFQUFrRTtFQUNsRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQjtBQUNKO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsdUNBQStCO0lBQS9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrREFBa0Q7QUFDdEQ7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLCtEQUErRDtBQUNwRTtBQUNBO0dBQ0cscUNBQXFDO0VBQ3RDLHdDQUF3QztBQUMxQztBQUNBO0dBQ0csV0FBVztBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZXMvcHJvZHVjdC9wcm9kdWN0LXBhbmVsL3Byb2R1Y3QtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByb2R1Y3QgTmFtZSAqL1xuLnMtcHJvZHVjdC1uYW1lZC1pbnB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTIsIDE1NSwgMTU1LCAuMSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4vKiBwcm9kdWN0IGRpc2NyaXB0aW9uICovXG4ucy1kZXNjLXRleHQtYXJlYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTU1LCAxNTUsIC4wMSk7XG4gICAgd2lkdGggOiAxMDAlO1xufVxuLyogcHJvZHVjdCBpbmZvICovXG4vKiBtYWluIGltZyAqL1xuLnMtbWFpbi1pbWFnZS12aWV3e1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9pbWFnZS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHB4O1xuICAgIGJvcmRlcjogNHB4IGRhc2hlZCByZ2JhKDE1MiwxNTUsMTU1LDEpO1xufVxuLnMtbWFpbi1pbWFnZS12aWV3OmhvdmVye1xuICAgIGJvcmRlcjogNHB4IGRhc2hlZCAjOTg5QjlCO1xuXG59XG4ucy1jYXRlZ29yeS1idG4taWNvbntcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDo1MHB4O1xufVxuLnMtcGFnZS1vcGFjaXR5e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xuICAgIG9wYWNpdHk6IC42ICFpbXBvcnRhbnQ7XG59XG4ucy1wYWdlLW9wYWNpdHk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5zLXBhZ2Utb3BhY2l0eS0ye1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xuICAgIG9wYWNpdHk6IC42IDtcbn1cbi5zLXBhZ2Utb3BhY2l0eS0yOmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMXM7XG4gICAgb3BhY2l0eTogMSA7XG59XG4vKiBjb250cm9sbGVycyAqL1xuLnMtcHJvZHVjdC1tZW51LWJ0biB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvYXJyb3ctdXAucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiA0MDAwO1xufVxuLnMtY2F0ZWdvcmllcy1kcm9wZG93bntcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnMtZHJvcC1pdGVte1xuICAgIGNvbG9yOiAjODU4OTg5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgICBoZWlnaHQ6IDQwcHhcbn1cbi5zLWRyb3AtaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5QjlCICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYSgyNTUsIDI1MSwgMTYwLDEpO1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1wcm9kdWN0LW1lbnUtY29udHJvbGxlcnMtYnRuc3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLyogaGVpZ2h0OiA2MHB4OyAqL1xufVxuLnMtY2F0ZWdvcnktc3dpdGNoLWJ0bntcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1pbi1oZWlnaHQgOjQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAucy1kZXNjLWNvbHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gICAgLnMtbWFpbi1pbWctY29sIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgLnMtc2lkZS1jb2x7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuLnMtY29udHJvbHMtaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLnMtYm9yZGVyLXNlbGVjdDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkJBMCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IC44O1xufVxuLnMtc2VsZWN0ZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkJBMCAhaW1wb3J0YW50O1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCBibGFjayAhaW1wb3J0YW50OyAqL1xufVxuLyogcHJpY2UgKi9cbi5zLWljb24tYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLWljb24tcHJpY2V7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9wcmljZS5wbmcnKTtcbn1cbi5zLWFkZC1uZXctaW5we1xuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zLWFkZC1uZXd7XG4gICB3aWR0aDogNjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-pages/product/product-panel/product-panel.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin-pages/product/product-panel/product-panel.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductPanelComponent */

  /***/
  function srcAppAdminPagesProductProductPanelProductPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPanelComponent", function () {
      return ProductPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/admin-product-color.model */
    "./src/app/model/admin-product-color.model.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _product_color_product_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-color/product-color.component */
    "./src/app/admin-pages/product/product-color/product-color.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../product-menu/product-menu.component */
    "./src/app/admin-pages/product/product-menu/product-menu.component.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/categories.service */
    "./src/app/services/categories.service.ts"); // Every single Code down there is BLAH BLAH BLAH :*

    /*
      ==================================================
      {=========={(@ Comments Hent)}==========}
      ==================================================
      [@] => Main block comment
      [#] => sub main block comment
      [?] => discription Comment
      <CALL> => functin calling events
    */


    var ProductPanelComponent =
    /*#__PURE__*/
    function () {
      function ProductPanelComponent(pro_service, categ_service, router, _router) {
        _classCallCheck(this, ProductPanelComponent);

        this.pro_service = pro_service;
        this.categ_service = categ_service;
        this.router = router;
        this._router = _router;
        this.product = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.productStats = 'New';
      }

      _createClass(ProductPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // ==================================================
          // {=========={([@] Winodw Event)}==========}
          // ==================================================
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#productsHolder'); // [?] validate routes 

          this.validateRoutes(); // [?] get All Categories

          this.getAllCategories();
        } // {=========={([@] Controllers )}==========}
        // ==================================================
        // [# Controllers] || ================================================== |({product Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        //[?] open product menu from productMenu component

      }, {
        key: "openProductsMenu",
        value: function openProductsMenu() {
          this.productsMenu_component.openMenu();
          this.productsMenu_component.getAllProducts();
        }
      }, {
        key: "resiveProColor",
        value: function resiveProColor($event) {
          this.proColor = $event;
        }
      }, {
        key: "resiveProdMainImage",
        value: function resiveProdMainImage($event) {
          this.mainImage = $event;
        } // [?]

      }, {
        key: "resetForAddNew",
        value: function resetForAddNew() {
          this.child.resetForAddNew();
          this.mainImage = '';
          this.selectedCategory = undefined;
          this.selectedSubCategory = undefined;
          $('#productNameInp').val('');
          $('#productDescInp').val('');
          $('#costInp').val('');
          $('#costTagInp').val('');
        } // [?] validate routes if there is an :id param then call (getProductById)

      }, {
        key: "validateRoutes",
        value: function validateRoutes() {
          this.pro_service.checkProductIDParam() ? this.getProductById(this.pro_service.checkProductIDParam()) : false;
          this.pro_service.checkProductIDParam() ? this.productStats = 'Update' : this.productStats = 'New';
        } // [?] select category

      }, {
        key: "selectCategory",
        value: function selectCategory(category) {
          this.selectedCategory = category;
          this.selectedSubCategory = null;
        } //[?] select sub category

      }, {
        key: "selectSubCategory",
        value: function selectSubCategory(subCateg) {
          this.selectedSubCategory = subCateg;
        } // [?] show sub Catgory

      }, {
        key: "showSubCatgeoryOfProd",
        value: function showSubCatgeoryOfProd() {
          this.selectedSubCategory = this.product.prod_sub_category;
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controllers] || ================================================== |product Controllers| ---END---
        // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({product Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] open as a new product

      }, {
        key: "createNewProductPage",
        value: function createNewProductPage() {} // this._router.navigateByUrl('admin/products')
        // [?] product data

      }, {
        key: "prodData",
        value: function prodData(pro_name, pro_desc, price, costTag) {
          var newProduct = new _model_admin_product_color_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
          this.child.outputProductColors(); // get the product color

          newProduct.prod_name = pro_name;
          newProduct.prod_desc = pro_desc;
          newProduct.prod_colors = this.proColor;
          newProduct.prod_category = this.selectedCategory._id;
          newProduct.prod_sub_category = this.selectedSubCategory;
          newProduct.price = {
            cost: price,
            tag: costTag
          }; //TODO

          return newProduct;
        } // [?] Post New Product

      }, {
        key: "postNewProduct",
        value: function postNewProduct(pro_name, pro_desc, price, costTag) {
          var _this49 = this;

          var newProduct = this.prodData(pro_name, pro_desc, price, costTag);
          this.pro_service.createProduct(newProduct).subscribe(function (res) {
            _this49.notify_component.notifyMe('alert-primary', '', 'loading');
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this49.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this49.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this49.notify_component.notifyMe('alert-success', 'Product is', ' saved !');

            _this49.resetForAddNew();
          });
        } // [?] get Product By Id

      }, {
        key: "getProductById",
        value: function getProductById(id) {
          var _this50 = this;

          this.pro_service.getSelectedProduct(id).subscribe(function (res) {
            _this50.product.prod_name = res['prod_name'];
            _this50.product.prod_desc = res['prod_desc'];
            _this50.product.prod_category = res['prod_category'];
            _this50.product.prod_sub_category = res['prod_sub_category'];
            _this50.product.prod_colors = res['prod_colors'];
            _this50.product.price = res['price'];
            _this50.product._id = res['_id'];

            _this50._router.navigateByUrl('admin/products/' + id);
          }, function (error) {}, function () {
            _this50.pro_service.checkProductIDParam() ? _this50.productStats = 'Update' : _this50.productStats = 'New';

            _this50.child.inputProductColorsById(_this50.product.prod_colors); //[?] Send product color to (productColorCompnent)


            _this50.getCategoryById(_this50.product.prod_category);

            _this50.showSubCatgeoryOfProd();

            _this50.child.setMainImage();
          });
        } // [?] get category by id

      }, {
        key: "getCategoryById",
        value: function getCategoryById(id) {
          var _this51 = this;

          this.categ_service.getSelectedCategories(id).subscribe(function (res) {
            _this51.selectedCategory = res;
          });
        } // [?] update product

      }, {
        key: "updateProduct",
        value: function updateProduct(pro_name, pro_desc, price, costTag) {
          var _this52 = this;

          var updatedProduct = this.prodData(pro_name, pro_desc, price, costTag);
          var id = this.product._id;
          this.pro_service.updateProduct(id, updatedProduct).subscribe(function (res) {
            _this52.notify_component.notifyMe('alert-primary', '', 'loading');
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this52.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this52.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }
          }, function () {
            _this52.notify_component.notifyMe('alert-success', 'Product is', ' up to date!');
          });
        } // [?] delete product

      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this53 = this;

          var id = this.product._id;
          this.pro_service.deleteProduct(id).subscribe(function (res) {
            _this53.notify_component.notifyMe('alert-primary', '', 'loading');
          }, function (err) {
            if (err.status == 0) {
              //[?]  No Internet Connections !
              _this53.notify_component.notifyMe('alert-danger', 'Sorry,', ' No Internet Connections !');
            } else {
              _this53.notify_component.notifyMe('alert-danger', 'Sorry,', ' Please try again !');
            }

            console.log(err);
          }, function () {
            _this53.notify_component.notifyMe('alert-danger', 'Product is', ' Deleted !');

            setTimeout(function () {
              _this53._router.navigateByUrl('admin/products');
            }, 1000);
          });
        } // [?] get All Categories

      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this54 = this;

          this.categ_service.getCategories().subscribe(function (res) {
            _this54.categories = res;
          });
        }
      }]);

      return ProductPanelComponent;
    }();

    ProductPanelComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_product_color_product_color_component__WEBPACK_IMPORTED_MODULE_4__["ProductColorComponent"], {
      static: false
    })], ProductPanelComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], {
      static: false
    })], ProductPanelComponent.prototype, "notify_component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_7__["ProductMenuComponent"], {
      static: false
    })], ProductPanelComponent.prototype, "productsMenu_component", void 0);
    ProductPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-pages/product/product-panel/product-panel.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None // to reade css classes on dynamic elements
      ,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-panel.component.css */
      "./src/app/admin-pages/product/product-panel/product-panel.component.css")).default]
    })], ProductPanelComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _admin_pages_category_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-pages/category/categories-panel/categories-panel.component */
    "./src/app/admin-pages/category/categories-panel/categories-panel.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _admin_pages_product_product_panel_product_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-pages/product/product-panel/product-panel.component */
    "./src/app/admin-pages/product/product-panel/product-panel.component.ts");
    /* harmony import */


    var _product_studio_product_studio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-studio/product-studio.component */
    "./src/app/product-studio/product-studio.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-pages/admin-panel/admin-panel.component */
    "./src/app/admin-pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _admin_pages_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-pages/home-panel/home-panel.component */
    "./src/app/admin-pages/home-panel/home-panel.component.ts");
    /* harmony import */


    var _admin_pages_about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-pages/about-panel/about-panel.component */
    "./src/app/admin-pages/about-panel/about-panel.component.ts");
    /* harmony import */


    var _admin_pages_contact_panel_contact_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-pages/contact-panel/contact-panel.component */
    "./src/app/admin-pages/contact-panel/contact-panel.component.ts");
    /* harmony import */


    var _admin_pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-pages/product-page/product-page.component */
    "./src/app/admin-pages/product-page/product-page.component.ts");
    /* harmony import */


    var _admin_pages_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-pages/category-page/category-page.component */
    "./src/app/admin-pages/category-page/category-page.component.ts");
    /* harmony import */


    var _admin_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-pages/blog/blog.component */
    "./src/app/admin-pages/blog/blog.component.ts");
    /* harmony import */


    var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./blog-page/blog-page.component */
    "./src/app/blog-page/blog-page.component.ts");
    /* harmony import */


    var _blog_topic_blog_topic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./blog-topic/blog-topic.component */
    "./src/app/blog-topic/blog-topic.component.ts");
    /* harmony import */


    var _login_user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./login/user/user.component */
    "./src/app/login/user/user.component.ts");
    /* harmony import */


    var _login_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/user/sign-up/sign-up.component */
    "./src/app/login/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./login/user/sign-in/sign-in.component */
    "./src/app/login/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _login_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./login/user-profile/user-profile.component */
    "./src/app/login/user-profile/user-profile.component.ts");
    /* harmony import */


    var _login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./login/auth/auth.guard */
    "./src/app/login/auth/auth.guard.ts"); // components
    // login
    // import { LanguagesComponent } from './languages/languages.component' //! 4 TEST


    var routes = [//users
    {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: "categories",
      component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    }, {
      path: "product",
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
    }, {
      path: "about",
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    }, {
      path: "blog",
      component: _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogPageComponent"]
    }, {
      path: "blog/:id",
      component: _blog_topic_blog_topic_component__WEBPACK_IMPORTED_MODULE_19__["BlogTopicComponent"]
    }, {
      path: "contact",
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: "product/:id",
      component: _product_studio_product_studio_component__WEBPACK_IMPORTED_MODULE_9__["ProductStudioComponent"]
    }, // admins
    {
      path: 'admin',
      component: _admin_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_11__["AdminPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: "admin/categories",
      component: _admin_pages_category_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: "admin/categories/:id",
      component: _admin_pages_category_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: "admin/products",
      component: _admin_pages_product_product_panel_product_panel_component__WEBPACK_IMPORTED_MODULE_8__["ProductPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'admin/products/:id',
      component: _admin_pages_product_product_panel_product_panel_component__WEBPACK_IMPORTED_MODULE_8__["ProductPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, // { path: "admin/blog", component: BlogComponent, canActivate: [AuthGuard] },
    {
      path: "admin/blog/:id",
      component: _admin_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, // { path: "admin/blog-tags", component: AdminTagsComponent, canActivate: [AuthGuard] },
    {
      path: 'admin/home',
      component: _admin_pages_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_12__["HomePanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'admin/about',
      component: _admin_pages_about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_13__["AboutPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'admin/contact',
      component: _admin_pages_contact_panel_contact_panel_component__WEBPACK_IMPORTED_MODULE_14__["ContactPanelComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'admin/product-page',
      component: _admin_pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_15__["ProductPageComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'admin/category-page',
      component: _admin_pages_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_16__["CategoryPageComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, // lgoin
    // {
    //   path: 'signup', component: UserComponent,
    //   children: [{ path: '', component: SignUpComponent, canActivate: [AuthGuard]}]
    // },
    {
      path: 'admin/signup',
      component: _login_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__["SignUpComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
      children: [{
        path: '',
        component: _login_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"]
      }]
    }, {
      path: 'userprofile',
      component: _login_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"],
      canActivate: [_login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/shared/user.service */
    "./src/app/login/shared/user.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(userService) {
        _classCallCheck(this, AppComponent);

        this.userService = userService;
        this.title = 'dahab';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.userService.isLoggedIn()) {
            this.userService.isAdmin = true;
          } else {
            this.userService.isAdmin = false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _login_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var ngx_summernote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-summernote */
    "./node_modules/ngx-summernote/fesm2015/ngx-summernote.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _admin_pages_category_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-pages/category/categories-panel/categories-panel.component */
    "./src/app/admin-pages/category/categories-panel/categories-panel.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _admin_pages_product_product_panel_product_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-pages/product/product-panel/product-panel.component */
    "./src/app/admin-pages/product/product-panel/product-panel.component.ts");
    /* harmony import */


    var _admin_pages_product_product_color_product_color_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-pages/product/product-color/product-color.component */
    "./src/app/admin-pages/product/product-color/product-color.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _admin_pages_product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-pages/product/product-menu/product-menu.component */
    "./src/app/admin-pages/product/product-menu/product-menu.component.ts");
    /* harmony import */


    var _admin_pages_category_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-pages/category/category-modal/category-modal.component */
    "./src/app/admin-pages/category/category-modal/category-modal.component.ts");
    /* harmony import */


    var _product_studio_product_studio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./product-studio/product-studio.component */
    "./src/app/product-studio/product-studio.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_pages_category_sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin-pages/category/sub-categories/sub-categories.component */
    "./src/app/admin-pages/category/sub-categories/sub-categories.component.ts");
    /* harmony import */


    var _admin_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin-pages/admin-panel/admin-panel.component */
    "./src/app/admin-pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _admin_pages_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin-pages/admin-nav/admin-nav.component */
    "./src/app/admin-pages/admin-nav/admin-nav.component.ts");
    /* harmony import */


    var _admin_pages_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin-pages/home-panel/home-panel.component */
    "./src/app/admin-pages/home-panel/home-panel.component.ts");
    /* harmony import */


    var _admin_pages_about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin-pages/about-panel/about-panel.component */
    "./src/app/admin-pages/about-panel/about-panel.component.ts");
    /* harmony import */


    var _admin_pages_contact_panel_contact_panel_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin-pages/contact-panel/contact-panel.component */
    "./src/app/admin-pages/contact-panel/contact-panel.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _admin_pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin-pages/product-page/product-page.component */
    "./src/app/admin-pages/product-page/product-page.component.ts");
    /* harmony import */


    var _admin_pages_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin-pages/category-page/category-page.component */
    "./src/app/admin-pages/category-page/category-page.component.ts");
    /* harmony import */


    var _admin_pages_blog_admin_tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin-pages/blog/admin-tags/admin-tags.component */
    "./src/app/admin-pages/blog/admin-tags/admin-tags.component.ts");
    /* harmony import */


    var _admin_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin-pages/blog/blog.component */
    "./src/app/admin-pages/blog/blog.component.ts");
    /* harmony import */


    var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./blog-page/blog-page.component */
    "./src/app/blog-page/blog-page.component.ts");
    /* harmony import */


    var _blog_topic_blog_topic_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./blog-topic/blog-topic.component */
    "./src/app/blog-topic/blog-topic.component.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");
    /* harmony import */


    var _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./services/blog-comments.service */
    "./src/app/services/blog-comments.service.ts");
    /* harmony import */


    var _services_about_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./services/about.service */
    "./src/app/services/about.service.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_product_page_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./services/product-page.service */
    "./src/app/services/product-page.service.ts");
    /* harmony import */


    var _login_user_user_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./login/user/user.component */
    "./src/app/login/user/user.component.ts");
    /* harmony import */


    var _login_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./login/user/sign-up/sign-up.component */
    "./src/app/login/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./login/user-profile/user-profile.component */
    "./src/app/login/user-profile/user-profile.component.ts");
    /* harmony import */


    var _login_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./login/user/sign-in/sign-in.component */
    "./src/app/login/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _login_shared_user_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./login/shared/user.service */
    "./src/app/login/shared/user.service.ts");
    /* harmony import */


    var _login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./login/auth/auth.guard */
    "./src/app/login/auth/auth.guard.ts");
    /* harmony import */


    var _login_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./login/auth/auth.interceptor */
    "./src/app/login/auth/auth.interceptor.ts");
    /* harmony import */


    var _admin_pages_blog_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./admin-pages/blog/new-topic/new-topic.component */
    "./src/app/admin-pages/blog/new-topic/new-topic.component.ts");
    /* harmony import */


    var _admin_pages_blog_all_all_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./admin-pages/blog/all/all.component */
    "./src/app/admin-pages/blog/all/all.component.ts");
    /* harmony import */


    var _blog_user_comments_blog_user_comments_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./blog-user-comments/blog-user-comments.component */
    "./src/app/blog-user-comments/blog-user-comments.component.ts");
    /* harmony import */


    var _languages_languages_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./languages/languages.component */
    "./src/app/languages/languages.component.ts");
    /* harmony import */


    var _whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./whatsapp-menu/whatsapp-menu.component */
    "./src/app/whatsapp-menu/whatsapp-menu.component.ts"); // search module
    // 
    // components
    // login
    // components
    //routes
    // import { appRoutes } from './routes';
    //other


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], _admin_pages_category_categories_panel_categories_panel_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesPanelComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _admin_pages_product_product_panel_product_panel_component__WEBPACK_IMPORTED_MODULE_16__["ProductPanelComponent"], _admin_pages_product_product_color_product_color_component__WEBPACK_IMPORTED_MODULE_17__["ProductColorComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_18__["NotificationsComponent"], _admin_pages_product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_19__["ProductMenuComponent"], _admin_pages_category_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_20__["CategoryModalComponent"], _product_studio_product_studio_component__WEBPACK_IMPORTED_MODULE_21__["ProductStudioComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _admin_pages_category_sub_categories_sub_categories_component__WEBPACK_IMPORTED_MODULE_23__["SubCategoriesComponent"], _login_user_user_component__WEBPACK_IMPORTED_MODULE_43__["UserComponent"], _login_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_44__["SignUpComponent"], _login_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_45__["UserProfileComponent"], _login_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_46__["SignInComponent"], _admin_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_24__["AdminPanelComponent"], _admin_pages_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_25__["AdminNavComponent"], _admin_pages_home_panel_home_panel_component__WEBPACK_IMPORTED_MODULE_26__["HomePanelComponent"], _admin_pages_about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_27__["AboutPanelComponent"], _admin_pages_contact_panel_contact_panel_component__WEBPACK_IMPORTED_MODULE_28__["ContactPanelComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"], _admin_pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_30__["ProductPageComponent"], _admin_pages_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_31__["CategoryPageComponent"], _admin_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_33__["BlogComponent"], _admin_pages_blog_admin_tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_32__["AdminTagsComponent"], _admin_pages_blog_new_topic_new_topic_component__WEBPACK_IMPORTED_MODULE_50__["NewTopicComponent"], _admin_pages_blog_all_all_component__WEBPACK_IMPORTED_MODULE_51__["AllComponent"], _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_34__["BlogPageComponent"], _blog_topic_blog_topic_component__WEBPACK_IMPORTED_MODULE_35__["BlogTopicComponent"], _blog_user_comments_blog_user_comments_component__WEBPACK_IMPORTED_MODULE_52__["BlogUserCommentsComponent"], _languages_languages_component__WEBPACK_IMPORTED_MODULE_53__["LanguagesComponent"], _whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_54__["WhatsappMenuComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], ngx_summernote__WEBPACK_IMPORTED_MODULE_8__["NgxSummernoteModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _login_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_49__["AuthInterceptor"],
        multi: true
      }, _services_products_service__WEBPACK_IMPORTED_MODULE_36__["ProductsService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_37__["CategoriesService"], _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_38__["BlogTagsService"], _services_about_service__WEBPACK_IMPORTED_MODULE_40__["AboutService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_41__["ContactService"], _services_product_page_service__WEBPACK_IMPORTED_MODULE_42__["ProductPageService"], _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_39__["BlogCommentsService"], _login_auth_auth_guard__WEBPACK_IMPORTED_MODULE_48__["AuthGuard"], _login_shared_user_service__WEBPACK_IMPORTED_MODULE_47__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blog-page/blog-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/blog-page/blog-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogPageBlogPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-new-icon{\n    /* background-image: url(''); */\n    background-image: url('new.png');\n}\n.s-icons{\n    min-width: 35px;\n    min-height: 35px;\n    background-position: center;\n    background-size: 30px;\n    background-repeat: no-repeat;\n}\n.s-hot-topic{\n    height: 350px;\n}\n/* Tool Bar */\n.s-dash{\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right{\n  right:0;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right-2{\n  right:15px;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-categories-holder{\n width: 100%;\n height: 48px;\n overflow-x: scroll; \n overflow-y: hidden;\n}\n.s-categories-btns{\n   white-space: nowrap;\n   text-align: center;\n}\n.s-categories-btns:hover{\n  background-color: #FFFBA0;\n}\n.s-serach-bar{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-search-btn{\n    width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/serach.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-selected-categ-btns{\n    white-space: nowrap;\n    text-align: center;\n    height: 48px;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n}\n.s-selected-tag-btn{\n    background-color:#FFFDCF;\n    color: #222222;\n}\n.s-tool-bar-holder{\n  top: 80px;\n  opacity: .97;\n  z-index: 4000;\n}\n/* Topics */\n.s-topic-box-holder{\n  height: 500px;\n  overflow: hidden;\n  -webkit-transition: all linear .2s;\n  transition: all linear .2s;\n  cursor: pointer;\n}\n.s-topic-box-holder:hover{\n  /* box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1); */\n   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.s-hot-holder{\n  -webkit-transition: all linear .2s;\n  transition: all linear .2s;\n  cursor: pointer;\n}\n.s-hot-holder:hover{\n  /* box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1); */\n   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.s-topic-img-box{\n    background-color: rgba(209, 209, 209, 0.15);\n    height: 250px;\n    background-image : url('/assets/Icons/admin-products/noImge.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-no-topics{\n  height: 400px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1wYWdlL2Jsb2ctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFzRDtBQUMxRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtHQUNHLG1CQUFtQjtHQUNuQixrQkFBa0I7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0dBQ0csb0NBQW9DO0VBQ3JDLHVDQUF1QztBQUN6QztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx3REFBd0Q7R0FDdkQsbURBQW1EO0FBQ3REO0FBQ0E7RUFDRSxrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdEQUF3RDtHQUN2RCxtREFBbUQ7QUFDdEQ7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsaUVBQWlFO0lBQ2pFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtDQUEwQjtJQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nLXBhZ2UvYmxvZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1uZXctaWNvbntcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJycpOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvSWNvbnMvYmxvZy9uZXcucG5nKTtcbn1cbi5zLWljb25ze1xuICAgIG1pbi13aWR0aDogMzVweDtcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5zLWhvdC10b3BpY3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuLyogVG9vbCBCYXIgKi9cbi5zLWRhc2h7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IC44O1xufVxuLnMtZGFzaC1yaWdodHtcbiAgcmlnaHQ6MDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAuODtcbn1cbi5zLWRhc2gtcmlnaHQtMntcbiAgcmlnaHQ6MTVweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAuODtcbn1cbi5zLWNhdGVnb3JpZXMtaG9sZGVye1xuIHdpZHRoOiAxMDAlO1xuIGhlaWdodDogNDhweDtcbiBvdmVyZmxvdy14OiBzY3JvbGw7IFxuIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5zLWNhdGVnb3JpZXMtYnRuc3tcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucy1jYXRlZ29yaWVzLWJ0bnM6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZCQTA7XG59XG4ucy1zZXJhY2gtYmFye1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1zZWFyY2gtYnRue1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC8qIGhlaWdodDogMzBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvc2VyYWNoLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLXNlbGVjdGVkLWNhdGVnLWJ0bnN7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zLXNlbGVjdGVkLXRhZy1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRENGO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuLnMtdG9vbC1iYXItaG9sZGVye1xuICB0b3A6IDgwcHg7XG4gIG9wYWNpdHk6IC45NztcbiAgei1pbmRleDogNDAwMDtcbn1cbi8qIFRvcGljcyAqL1xuLnMtdG9waWMtYm94LWhvbGRlcntcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLXRvcGljLWJveC1ob2xkZXI6aG92ZXJ7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjUxLCAxNjAsIDEpOyAqL1xuICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuLnMtaG90LWhvbGRlcntcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLWhvdC1ob2xkZXI6aG92ZXJ7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjUxLCAxNjAsIDEpOyAqL1xuICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuLnMtdG9waWMtaW1nLWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMTUpO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9ub0ltZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4ycztcbn1cbi5zLW5vLXRvcGljc3tcbiAgaGVpZ2h0OiA0MDBweFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/blog-page/blog-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/blog-page/blog-page.component.ts ***!
    \**************************************************/

  /*! exports provided: BlogPageComponent */

  /***/
  function srcAppBlogPageBlogPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function () {
      return BlogPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");
    /* harmony import */


    var _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/blog-comments.service */
    "./src/app/services/blog-comments.service.ts");

    var BlogPageComponent =
    /*#__PURE__*/
    function () {
      function BlogPageComponent(blog_topics_service, blog_tag_service, blog_comments) {
        _classCallCheck(this, BlogPageComponent);

        this.blog_topics_service = blog_topics_service;
        this.blog_tag_service = blog_tag_service;
        this.blog_comments = blog_comments;
        this.tagName = 'All';
        this.topicsIDs = [];
        this.sortedHotTopics = [];
        this.topicsAndCommentsCounter = []; //[?] topics ids without Repetition

        this.hotTopicsKey = false;
        this.selectedTopicsByTag = null;
      }

      _createClass(BlogPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#blogPageHolder'); // [?] getData

          this.getAllTopics();
          this.getHotTopics();
          this.getAllTags();
          this.getAllComments();
        } // [?]

      }, {
        key: "selectAllTags",
        value: function selectAllTags() {
          this.tagName = 'All';
          this.selectedTopicsByTag = null;
        } // [?] filter bar select tag

      }, {
        key: "selectTag",
        value: function selectTag(id, name) {
          this.selectedTopicsByTag = []; // this.selectedTagID = id

          this.tagName = name;
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this.topics[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var topic = _step13.value;

              if (topic.topic_tag == id) {
                this.selectedTopicsByTag.push(topic);
              }
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }
        }
      }, {
        key: "styleTagBtns",
        value: function styleTagBtns(btn) {
          $("[data-btn='tag-btn']").removeClass('s-selected-tag-btn');
          $(btn).addClass('s-selected-tag-btn');
        } // [?]

      }, {
        key: "sortData",
        value: function sortData() {
          return this.hotTopics.sort(function (a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at);
          });
        } // [#] HTTP REQs
        // [?] get all topics

      }, {
        key: "getAllTopics",
        value: function getAllTopics() {
          var _this55 = this;

          this.blog_topics_service.getTopics().subscribe(function (res) {
            _this55.topics = res;
          }, function (err) {}, function () {});
        } // [?] get Hot topics 
        //! this is bullshit

      }, {
        key: "getHotTopics",
        value: function getHotTopics() {
          var _this56 = this;

          this.blog_topics_service.getTopics().subscribe(function (res) {
            _this56.hotTopics = res;
          }, function (err) {}, function () {
            _this56.sortData();

            _this56.hotTopicsKey = true;
          });
        } // [?] get all tags

      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this57 = this;

          this.blog_tag_service.getTags().subscribe(function (res) {
            _this57.tags = res;
          });
        } // [?] get all comments 

      }, {
        key: "getAllComments",
        value: function getAllComments() {
          var _this58 = this;

          this.blog_comments.getcomments().subscribe(function (res) {
            _this58.comments = res;
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = _this58.comments[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var comment = _step14.value;

                _this58.topicsIDs.push(comment.topic_id);
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                  _iterator14.return();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }
          }, function (err) {}, function () {});
        }
      }]);

      return BlogPageComponent;
    }();

    BlogPageComponent.ctorParameters = function () {
      return [{
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__["BlogTopicsService"]
      }, {
        type: _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__["BlogTagsService"]
      }, {
        type: _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_4__["BlogCommentsService"]
      }];
    };

    BlogPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-page/blog-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-page.component.css */
      "./src/app/blog-page/blog-page.component.css")).default]
    })], BlogPageComponent);
    /***/
  },

  /***/
  "./src/app/blog-topic/blog-topic.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/blog-topic/blog-topic.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogTopicBlogTopicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Header Section */\n.s-topic-img-box{\n    height: 600px;\n}\n.s-arrow-up-icon{\n    background-image: url('arrow-up.png');\n    background-size: 30px;\n}\n.s-arrow-down-icon{\n    background-image: url('arrow-down.png');\n    background-size: 30px;\n}\n.s-slider-topic-holder{\n    min-height: 150px;\n    max-height: 150px;\n    overflow: hidden;\n    cursor: pointer;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-slider-topic-holder:hover{\n   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy10b3BpYy9ibG9nLXRvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUNBQTZEO0lBQzdELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksdUNBQStEO0lBQy9ELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUEwQjtJQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtHQUNHLG1EQUFtRDtBQUN0RCIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctdG9waWMvYmxvZy10b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyIFNlY3Rpb24gKi9cbi5zLXRvcGljLWltZy1ib3h7XG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cbi5zLWFycm93LXVwLWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSWNvbnMvYmxvZy9hcnJvdy11cC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG59XG4ucy1hcnJvdy1kb3duLWljb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSWNvbnMvYmxvZy9hcnJvdy1kb3duLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbn1cbi5zLXNsaWRlci10b3BpYy1ob2xkZXJ7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG59XG4ucy1zbGlkZXItdG9waWMtaG9sZGVyOmhvdmVye1xuICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/blog-topic/blog-topic.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/blog-topic/blog-topic.component.ts ***!
    \****************************************************/

  /*! exports provided: BlogTopicComponent */

  /***/
  function srcAppBlogTopicBlogTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogTopicComponent", function () {
      return BlogTopicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/blog-tags.service */
    "./src/app/services/blog-tags.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _blog_user_comments_blog_user_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../blog-user-comments/blog-user-comments.component */
    "./src/app/blog-user-comments/blog-user-comments.component.ts");

    var BlogTopicComponent =
    /*#__PURE__*/
    function () {
      function BlogTopicComponent(blog_topics_service, blog_tags_service, router, activeRouter) {
        _classCallCheck(this, BlogTopicComponent);

        this.blog_topics_service = blog_topics_service;
        this.blog_tags_service = blog_tags_service;
        this.router = router;
        this.activeRouter = activeRouter;
        this.selectedTagTopics = []; // all topics in the slected tag
        // ---

        this.nextPrevTopics = []; // ---

        this.isLoaded = false;
        this.loadedTopics = false;
      }

      _createClass(BlogTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#blogTopicHolder'); // [?] param check for (:id) & set (selectedTopicID) to this (:id)

          this.blog_topics_service.checkTopicIDParam() ? this.selectedTopicID = this.blog_topics_service.checkTopicIDParam() : this.selectedTopicID = null; // [?] DATA

          this.getSelectedTopic();
        } // [#] Controllers
        // [?] filter all topics by one tag

      }, {
        key: "filterTopicsByTag",
        value: function filterTopicsByTag() {
          this.selectedTagTopics = [];
          var tagID = this.selectedTopicTag._id;
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = this.topics[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var topic = _step15.value;
              var topicTagID = topic.topic_tag;

              if (topicTagID === tagID) {
                this.selectedTagTopics.push(topic);
              }
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                _iterator15.return();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }

          this.repositionTopic(this.indexSelectedTopicFromTagTopicsList(this.selectedTopic._id));
          this.nextPrevTopics = this.selectedTagTopics.slice(1, 4); //[?] first show one

          this.setPreAndNextV();
        } // [?] return the selected topic index of all topics in the same tag

      }, {
        key: "indexSelectedTopicFromTagTopicsList",
        value: function indexSelectedTopicFromTagTopicsList(selectedTopicID) {
          var topicsIDs = [];
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this.selectedTagTopics[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var topic = _step16.value;
              topicsIDs.push(topic._id);
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          return topicsIDs.indexOf(selectedTopicID);
        } // [?] repositioning the selected topic

      }, {
        key: "repositionTopic",
        value: function repositionTopic(startIndex) {
          var cuts = this.selectedTagTopics.splice(startIndex, this.selectedTagTopics.length - startIndex);
          this.selectedTagTopics = cuts.concat(this.selectedTagTopics);
        }
      }, {
        key: "shift3Topics",
        value: function shift3Topics(selectedTopicID, ope) {
          var topicIndex = this.indexSelectedTopicFromTagTopicsList(selectedTopicID);

          switch (ope) {
            case 'n':
              if (this.stopShifting() !== 'next') {
                this.nextPrevTopics = this.selectedTagTopics.slice(topicIndex + 1, topicIndex + 4);
              }

              break;

            case 'p':
              if (this.stopShifting() !== 'prev') {
                if (topicIndex - 4 <= 0) {
                  this.nextPrevTopics = this.selectedTagTopics.slice(1, 4);
                } else {
                  this.nextPrevTopics = this.selectedTagTopics.slice(topicIndex - 3, topicIndex);
                }
              }

              break;
          }

          this.setPreAndNextV();
        }
      }, {
        key: "stopShifting",
        value: function stopShifting() {
          if (this.nextTopic._id === this.selectedTagTopics[this.selectedTagTopics.length - 1]._id) {
            return 'next';
          }

          if (this.prevTopic._id === this.selectedTagTopics[1]._id) {
            return 'prev';
          }
        }
      }, {
        key: "setPreAndNextV",
        value: function setPreAndNextV() {
          this.nextTopic = this.nextPrevTopics[this.nextPrevTopics.length - 1];
          this.prevTopic = this.nextPrevTopics[0];
        }
      }, {
        key: "clickTopic",
        value: function clickTopic(topic) {
          var id = topic._id;
          this.selectedTopicID = id;
          this.router.navigateByUrl('/blog/' + id);
          this.getSelectedTopic();
          this.comments_component.getTopicComments(this.selectedTopicID);
        } // [#] HTTP REQ
        // [?] selected topic

      }, {
        key: "getSelectedTopic",
        value: function getSelectedTopic() {
          var _this59 = this;

          this.blog_topics_service.getSelectedTopic(this.selectedTopicID).subscribe(function (res) {
            _this59.selectedTopic = res;
          }, function (err) {}, function () {
            _this59.getSelectedTopicTag();
          });
        } // [?] selected Tag

      }, {
        key: "getSelectedTopicTag",
        value: function getSelectedTopicTag() {
          var _this60 = this;

          this.blog_tags_service.getSelectedTag(this.selectedTopic.topic_tag).subscribe(function (res) {
            _this60.selectedTopicTag = res;
          }, function (err) {}, function () {
            _this60.getAllTopic();

            _this60.isLoaded = true;
          });
        } // [?] all topics

      }, {
        key: "getAllTopic",
        value: function getAllTopic() {
          var _this61 = this;

          this.blog_topics_service.getTopics().subscribe(function (res) {
            _this61.topics = res;
          }, function (err) {}, function () {
            _this61.filterTopicsByTag();
          });
        }
      }]);

      return BlogTopicComponent;
    }();

    BlogTopicComponent.ctorParameters = function () {
      return [{
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_2__["BlogTopicsService"]
      }, {
        type: _services_blog_tags_service__WEBPACK_IMPORTED_MODULE_3__["BlogTagsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_blog_user_comments_blog_user_comments_component__WEBPACK_IMPORTED_MODULE_5__["BlogUserCommentsComponent"], {
      static: false
    })], BlogTopicComponent.prototype, "comments_component", void 0);
    BlogTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-topic/blog-topic.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-topic.component.css */
      "./src/app/blog-topic/blog-topic.component.css")).default]
    })], BlogTopicComponent);
    /***/
  },

  /***/
  "./src/app/blog-user-comments/blog-user-comments.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/blog-user-comments/blog-user-comments.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogUserCommentsBlogUserCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-form-contact-input {\n  height: 60px;\n  /* width: 100%; */\n}\n.s-form-contact-input-icon{\n  width: 60px;\n}\n.s-form-contact-send-hr{\n   bottom: 55px;\n   right: 40px;\n   width: calc(100% - 80px);\n}\n.s-blog-post-box{\n    max-height: 300px;\n    overflow: hidden;\n}\n@media (max-width: 768px) {\n  .s-blog-post-box{\n      max-height: 500px;\n      overflow: hidden;\n  }\n}\n/* .s-blog-post-box:hover{\n    transition: all ease-in-out .1s;\n    cursor: pointer;\n    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n} */\n.s-blog-post-text-box{\n    max-height: 100%;\n    width: 100%;\n    overflow: scroll;\n}\n.s-indent{\n  text-indent: 2%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy11c2VyLWNvbW1lbnRzL2Jsb2ctdXNlci1jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7R0FDRyxZQUFZO0dBQ1osV0FBVztHQUNYLHdCQUF3QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0U7TUFDSSxpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCO0FBQ0Y7QUFDQTs7OztHQUlHO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctdXNlci1jb21tZW50cy9ibG9nLXVzZXItY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zLWZvcm0tY29udGFjdC1pbnB1dCB7XG4gIGhlaWdodDogNjBweDtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG59XG4ucy1mb3JtLWNvbnRhY3QtaW5wdXQtaWNvbntcbiAgd2lkdGg6IDYwcHg7XG59XG4ucy1mb3JtLWNvbnRhY3Qtc2VuZC1ocntcbiAgIGJvdHRvbTogNTVweDtcbiAgIHJpZ2h0OiA0MHB4O1xuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xufVxuLnMtYmxvZy1wb3N0LWJveHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zLWJsb2ctcG9zdC1ib3h7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbi8qIC5zLWJsb2ctcG9zdC1ib3g6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufSAqL1xuLnMtYmxvZy1wb3N0LXRleHQtYm94e1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5zLWluZGVudHtcbiAgdGV4dC1pbmRlbnQ6IDIlXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/blog-user-comments/blog-user-comments.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/blog-user-comments/blog-user-comments.component.ts ***!
    \********************************************************************/

  /*! exports provided: BlogUserCommentsComponent */

  /***/
  function srcAppBlogUserCommentsBlogUserCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogUserCommentsComponent", function () {
      return BlogUserCommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blog-comments.service */
    "./src/app/services/blog-comments.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_va_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/va.service */
    "./src/app/services/va.service.ts");

    var BlogUserCommentsComponent =
    /*#__PURE__*/
    function () {
      function BlogUserCommentsComponent(blog_comments_service, activeRouter, va_serv) {
        _classCallCheck(this, BlogUserCommentsComponent);

        this.blog_comments_service = blog_comments_service;
        this.activeRouter = activeRouter;
        this.va_serv = va_serv;
      }

      _createClass(BlogUserCommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.activeRouter.snapshot.paramMap.get('id'));
          this.getTopicComments(this.activeRouter.snapshot.paramMap.get('id'));
        } // [#] HTTP REQ
        // [?] get comments for a topic

      }, {
        key: "getTopicComments",
        value: function getTopicComments(topicID) {
          var _this62 = this;

          // this.allTopicComments = []
          this.blog_comments_service.getSelectedComment(topicID).subscribe(function (res) {
            _this62.allTopicComments = res;
          }, function (err) {}, function () {
            console.log(topicID, _this62.allTopicComments);
          });
        } //[?] post A Comment

      }, {
        key: "postComment",
        value: function postComment(userN, mail, content) {
          var _this63 = this;

          var newComment = {
            topic_id: this.activeRouter.snapshot.paramMap.get('id'),
            userName: userN,
            mail: mail,
            comment_content: content
          };
          this.blog_comments_service.createComment(newComment).subscribe(function (res) {
            _this63.allTopicComments.push(res);
          });
        }
      }]);

      return BlogUserCommentsComponent;
    }();

    BlogUserCommentsComponent.ctorParameters = function () {
      return [{
        type: _services_blog_comments_service__WEBPACK_IMPORTED_MODULE_2__["BlogCommentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_va_service__WEBPACK_IMPORTED_MODULE_4__["VaService"]
      }];
    };

    BlogUserCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-user-comments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-user-comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-user-comments/blog-user-comments.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-user-comments.component.css */
      "./src/app/blog-user-comments/blog-user-comments.component.css")).default]
    })], BlogUserCommentsComponent);
    /***/
  },

  /***/
  "./src/app/categories/categories.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/categories/categories.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesCategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Slider ===START */\n.s-slider-image{\n    height: 100%;\n    /* background-image: url('/assets/imgs/categories/slider/slide1.jpg'); */\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n/* Slider ===END */\n.s-add-category-box{\n    height: 350px;\n    -webkit-transition: background-color ease-in-out .2s;\n    transition: background-color ease-in-out .2s;\n}\n.s-add-category-box:hover {\n    height: 350px;\n    border: none;\n    cursor: pointer;\n    color : white !important;\n}\n.s-add-category-butt{\n    font-size: 60px;\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .2);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity:hover{\n    background: rgba(34, 34, 34, .5);\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1);\n    cursor: pointer;\n}\n.s-all-categories-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .8);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-all-categories-box-obacity:hover{\n    background: rgba(34, 34, 34, .9);\n}\n.s-all-Categories{\n    background-image: url('/assets/Icons/admin-products/categories.png'); \n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n/* hot sections */\n.s-hot-box{\n  cursor: pointer;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.s-large-hot-box{\n  height: 700px;\n  background-image : url('hotc1.jpg');\n}\n.s-small-hot-box{\n  height: calc(350px - 0.5rem);\n  background-image : url('hotc3.jpg');\n}\n.s-small-hot-box-2{\n  background-image : url('hotc2.jpg');\n}\n.s-hot-desc{\n  max-height: 200px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0lBQ0ksWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQSxrQkFBa0I7QUFFbEI7SUFDSSxhQUFhO0lBQ2Isb0RBQTRDO0lBQTVDLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyx1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7S0FDOUIsa0RBQWtEO0lBQ25ELGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksb0VBQW9FO0lBQ3BFLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUNBQWdFO0FBQ2xFO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUNBQStEO0FBQ2pFO0FBQ0E7RUFDRSxtQ0FBK0Q7QUFDakU7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNsaWRlciA9PT1TVEFSVCAqL1xuLnMtc2xpZGVyLWltYWdle1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9jYXRlZ29yaWVzL3NsaWRlci9zbGlkZTEuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLyogU2xpZGVyID09PUVORCAqL1xuXG4ucy1hZGQtY2F0ZWdvcnktYm94e1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1hZGQtY2F0ZWdvcnktYm94OmhvdmVyIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3IgOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnMtYWRkLWNhdGVnb3J5LWJ1dHR7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1jYXRlZ29yeS1ib3gtb2JhY2l0eTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC41KTtcbn1cbi5zLWNhdGVnb3J5LWJveDpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xuICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyNTUsIDI1MSwgMTYwLCAxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1hbGwtY2F0ZWdvcmllcy1ib3gtb2JhY2l0eXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAuOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbn1cbi5zLWFsbC1jYXRlZ29yaWVzLWJveC1vYmFjaXR5OmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjkpO1xufVxuLnMtYWxsLUNhdGVnb3JpZXN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLXByb2R1Y3RzL2NhdGVnb3JpZXMucG5nJyk7IFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi8qIGhvdCBzZWN0aW9ucyAqL1xuLnMtaG90LWJveHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1sYXJnZS1ob3QtYm94e1xuICBoZWlnaHQ6IDcwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2NhdGVnb3JpZXMvL2hvdGMxLmpwZykgO1xufVxuLnMtc21hbGwtaG90LWJveHtcbiAgaGVpZ2h0OiBjYWxjKDM1MHB4IC0gMC41cmVtKTtcbiAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCguLi8uLi9hc3NldHMvaW1ncy9jYXRlZ29yaWVzL2hvdGMzLmpwZykgO1xufVxuLnMtc21hbGwtaG90LWJveC0ye1xuICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2NhdGVnb3JpZXMvaG90YzIuanBnKSA7XG59XG4ucy1ob3QtZGVzY3tcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categories/categories.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/categories/categories.component.ts ***!
    \****************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_categories_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/categories-page.service */
    "./src/app/services/categories-page.service.ts");
    /* harmony import */


    var _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(categ_service, _router, categ_page_service, pagesImgs_service) {
        _classCallCheck(this, CategoriesComponent);

        this.categ_service = categ_service;
        this._router = _router;
        this.categ_page_service = categ_page_service;
        this.pagesImgs_service = pagesImgs_service;
        this.isLoaded = false;
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllCategories();
          this.getPageData();
        } // [#] CONTROLLERS
        // [?] compare between the hot sections categories name and the categorie name | of equal => show it in product page

      }, {
        key: "choseCateg",
        value: function choseCateg(selectedCategName) {
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = this.categories[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var category = _step17.value;
              var categName = category.categ_name;

              if (categName === selectedCategName) {
                this.selectCategory(category._id, categName, category.sub_categories);
              } else {
                this._router.navigateByUrl('product');

                console.log('here');
              }
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }
        } // [#] HTTP REQs

      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this64 = this;

          this.categ_service.getCategories().subscribe(function (res) {
            _this64.categories = res;
          });
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id, name, subCateg) {
          this.categ_service.selectedCategId = {
            id: id,
            name: name,
            subCateg: subCateg
          };

          this._router.navigateByUrl('product');
        }
      }, {
        key: "selectAllCategory",
        value: function selectAllCategory() {
          this.categ_service.selectedCategId = undefined;

          this._router.navigateByUrl('product');
        } // [?] slider and hot data

      }, {
        key: "getPageData",
        value: function getPageData() {
          var _this65 = this;

          this.categ_page_service.getSections().subscribe(function (res) {
            _this65.categ_page_service.userPageData = res;
          }, function (err) {}, function () {
            _this65.isLoaded = true;
          });
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_categories_page_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesPageService"]
      }, {
        type: _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_5__["PagesImgsService"]
      }];
    };

    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.css */
      "./src/app/categories/categories.component.css")).default]
    })], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-contact-map{\n    /* 56px nav height */\n    /* height: calc(100% - (20px + 56px)); */\n    /* width: 500px; */\n    top: calc(56px + 10px);\n    left: 0;\n    z-index: 2;\n    position: fixed;\n    box-shadow: 3px 3px 6px 0px rgba(34, 34, 34, .1);\n}\n.s-contact-content-holder{\n    /* height: 100%; */\n    /* overflow: hidden; */\n}\n.s-iframe-map{\n    width: 100%;\n    height: 100%;\n}\n.s-open-close-map-btn{\n  height: 180px;\n  margin-left: 26px;\n  -webkit-transition: all ease-in-out .2s;\n  transition: all ease-in-out .2s;\n  box-shadow: -3px 0px 5px 0px rgba(34, 34, 34, .0);\n  background-image: url('/assets/Icons/contact-icons/arrow-right.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.s-open-close-map-btn:hover{\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .s-contact-map{\n    position: static;\n  }\n  .s-contact-content-holder{\n      overflow: scroll;\n  }\n  .s-iframe-map {\n    border-radius: 0 0 .8rem .8rem !important;\n  }\n}\n.s-form-contact-input {\n  height: 60px;\n  /* width: 100%; */\n}\n.s-form-contact-input-icon{\n  width: 60px;\n}\n.s-form-contact-send{\n  /* bottom: 0px;\n  right: 0px; */\n}\n.s-form-contact-send-hr{\n   bottom: 55px;\n   right: 40px;\n   width: calc(100% - 80px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLGlEQUFpRDtFQUNqRCxvRUFBb0U7RUFDcEUsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7ZUFDYTtBQUNmO0FBQ0E7R0FDRyxZQUFZO0dBQ1osV0FBVztHQUNYLHdCQUF3QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtY29udGFjdC1tYXB7XG4gICAgLyogNTZweCBuYXYgaGVpZ2h0ICovXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSAoMjBweCArIDU2cHgpKTsgKi9cbiAgICAvKiB3aWR0aDogNTAwcHg7ICovXG4gICAgdG9wOiBjYWxjKDU2cHggKyAxMHB4KTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IDBweCByZ2JhKDM0LCAzNCwgMzQsIC4xKTtcbn1cbi5zLWNvbnRhY3QtY29udGVudC1ob2xkZXJ7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG59XG4ucy1pZnJhbWUtbWFwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5zLW9wZW4tY2xvc2UtbWFwLWJ0bntcbiAgaGVpZ2h0OiAxODBweDtcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAwcHggcmdiYSgzNCwgMzQsIDM0LCAuMCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9jb250YWN0LWljb25zL2Fycm93LXJpZ2h0LnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLW9wZW4tY2xvc2UtbWFwLWJ0bjpob3ZlcntcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucy1jb250YWN0LW1hcHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5zLWNvbnRhY3QtY29udGVudC1ob2xkZXJ7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIC5zLWlmcmFtZS1tYXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAuOHJlbSAuOHJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ucy1mb3JtLWNvbnRhY3QtaW5wdXQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xufVxuLnMtZm9ybS1jb250YWN0LWlucHV0LWljb257XG4gIHdpZHRoOiA2MHB4O1xufVxuLnMtZm9ybS1jb250YWN0LXNlbmR7XG4gIC8qIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4OyAqL1xufVxuLnMtZm9ybS1jb250YWN0LXNlbmQtaHJ7XG4gICBib3R0b206IDU1cHg7XG4gICByaWdodDogNDBweDtcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../whatsapp-menu/whatsapp-menu.component */
    "./src/app/whatsapp-menu/whatsapp-menu.component.ts");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(contact_service) {
        _classCallCheck(this, ContactComponent);

        this.contact_service = contact_service;
        this.isLoaded = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener("resize", function () {
            resizeContentHolder();
            closeMapResize();
          }); //resize the content holder and map window to fit the window height size

          function resizeContentHolder() {
            var innerHeightWithoutNav = window.innerHeight - 56;
            $("#contactHolder").css("min-height", innerHeightWithoutNav);
            $('.s-contact-map').css('height', innerHeightWithoutNav - 20);
          } // close map


          function closeMap() {
            $('#contactMap').animate({
              left: -($('#contactMap').width() - 80)
            });
          }

          function closeMapResize() {
            var dT = $('#toggleMapBtn').attr('data-toggle');

            switch (dT) {
              case 'false':
                $('#contactMap').css({
                  left: 0
                });
                break;

              case 'true':
                $('#contactMap').css({
                  left: -($('#contactMap').width() - 80)
                });
                break;
            }
          } // on load at ther realtime


          resizeContentHolder();
          closeMap();
          this.getdata();
        }
      }, {
        key: "openWhatsappMenu",
        value: function openWhatsappMenu() {
          this.whatsapp_menu.openMenu();
        } // open and close map by click event

      }, {
        key: "toggleMap",
        value: function toggleMap(btn) {
          $('#contactMap').stop(true, true);
          var dT = $(btn).attr('data-toggle');

          switch (dT) {
            // {{Open}}
            case 'true':
              this.animateBtn(btn, 'arrow-left', .4, 'rounded-right s-opc-5', 'rounded-left', 0);
              $('#contactMap').animate({
                left: '0'
              });
              $(btn).attr('data-toggle', 'false');
              break;
            // {{Close}}

            case 'false':
              this.animateBtn(btn, 'arrow-right', 0, 'rounded-left', 'rounded-right s-opc-5', '26px');
              $('#contactMap').animate({
                left: -($('#contactMap').width() - 80)
              });
              $(btn).attr('data-toggle', 'true');
              break;
          }
        } // map btn animation

      }, {
        key: "animateBtn",
        value: function animateBtn(btn, img, shadow, removeClass, addClass, margin) {
          $(btn).css({
            "background-image": "URL(assets/Icons/contact-icons/" + img + ".png)",
            "box-shadow": "-3px 0px 2px 0px rgba(34, 34, 34," + shadow + ")",
            "margin-left": margin
          });
          $(btn).removeClass(removeClass), $(btn).addClass(addClass);
        } // [?]

      }, {
        key: "getdata",
        value: function getdata() {
          var _this66 = this;

          this.contact_service.getSections().subscribe(function (res) {
            _this66.data = res;
          }, function (err) {}, function () {
            _this66.isLoaded = true;

            _this66.map();
          });
        } // [?] get map from data and set it for iframe

      }, {
        key: "map",
        value: function map() {
          $('#frameMap').attr('src', this.data[0].map_location);
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_3__["WhatsappMenuComponent"], {
      static: false
    })], ContactComponent.prototype, "whatsapp_menu", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../whatsapp-menu/whatsapp-menu.component */
    "./src/app/whatsapp-menu/whatsapp-menu.component.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(contact_service) {
        _classCallCheck(this, FooterComponent);

        this.contact_service = contact_service;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getdata();
        }
      }, {
        key: "openWhatsappMenu",
        value: function openWhatsappMenu() {
          this.whatsapp_menu.openMenu();
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this67 = this;

          this.contact_service.getSections().subscribe(function (res) {
            _this67.data = res[0].contact_info.socialMedia;
          }, function (err) {}, function () {
            _this67.isLoaded = true;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_whatsapp_menu_whatsapp_menu_component__WEBPACK_IMPORTED_MODULE_3__["WhatsappMenuComponent"], {
      static: false
    })], FooterComponent.prototype, "whatsapp_menu", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-video-holder{\n    height: 950px;\n}\n.s-video{\n    width: 100%;\n    height :100%;\n}\n/*  */\n.s-add-category-box{\n    height: 350px;\n    -webkit-transition: background-color ease-in-out .2s;\n    transition: background-color ease-in-out .2s;\n}\n.s-add-category-box:hover {\n    height: 350px;\n    border: none;\n    cursor: pointer;\n    color : white !important;\n}\n.s-category-box:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n     box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1);\n    cursor: pointer;\n}\n.s-category-box-obacity{\n    width: 100%;\n    height: 100%;\n    background: rgba(34, 34, 34, .2);\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-category-box-obacity:hover{\n    background: rgba(34, 34, 34, .5);\n}\n/* products */\n.s-product-box{\n    background-color: rgba(209, 209, 209, 0.15);\n    height: 250px;\n    background-image : url('/assets/Icons/admin-products/noImge.png');\n    background-size: 180px;\n    background-repeat: no-repeat;\n    background-position: center;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-product-box:hover{\n  background-size: 200px;\n}\n.s-main-holder{\n  min-height: 1000px;\n}\n.s-product-box-holder{\n  height: 400px;\n  overflow: hidden;\n  -webkit-transition: all linear .2s;\n  transition: all linear .2s;\n  cursor: pointer;\n}\n.s-product-box-holder:hover{\n  box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1);\n}\n.s-no-products{\n  height: 400px\n}\n/* about */\n.s-content-background{\nright: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;\nbackground-size : 600px;\nbackground-position: right bottom;\nbackground-repeat :no-repeat;\n}\n@media (max-width: 576px) {\n    .s-content-background{\n        background-position: center bottom;\n        \n    }\n  \n}\n.s-section-row{\n    min-height: 100%;\n}\n.s-about-content-holder {\n  height: 100%;\n  overflow: hidden;\n}\n@media (max-width: 992px) {\n  .s-about-content-holder {\n    height: 100%;\n    overflow: scroll;\n  }\n  .s-content-background {\n       opacity: .4;\n\n    }\n}\n.s-about-title-hr{\n    width: 30%;\n    display: inline-block;\n}\n/* Blog */\n.s-hot-topic{\n    height: 350px;\n}\n.s-topic-img-box{\n    background-color: rgba(209, 209, 209, 0.15);\n    height: 250px;\n    background-image : url('/assets/Icons/admin-products/noImge.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-hot-holder{\n  -webkit-transition: all linear .2s;\n  transition: all linear .2s;\n  cursor: pointer;\n}\n.s-hot-holder:hover{\n   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;\n}\n/* contact form */\n@media (max-width: 992px) {\n  .s-contact-content-holder{\n      overflow: scroll;\n  }\n  .s-iframe-map {\n    border-radius: 0 0 .8rem .8rem !important;\n  }\n}\n.s-form-contact-input {\n  height: 60px;\n  /* width: 100%; */\n}\n.s-form-contact-input-icon{\n  width: 60px;\n}\n.s-form-contact-send-hr{\n   bottom: 55px;\n   right: 40px;\n   width: calc(100% - 80px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtJQUNJLGFBQWE7SUFDYixvREFBNEM7SUFBNUMsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7S0FDOUIsa0RBQWtEO0lBQ25ELGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBLGFBQWE7QUFDYjtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsaUVBQWlFO0lBQ2pFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtDQUEwQjtJQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRTtBQUNGO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTixXQUFXO0FBQ1gsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QixpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCO0FBQ0E7SUFDSTtRQUNJLGtDQUFrQzs7SUFFdEM7O0FBRUo7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7T0FDSyxXQUFXOztJQUVkO0FBQ0o7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0FBQzlCO0FBQ0E7RUFDRSxrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtHQUNHLG1EQUFtRDtBQUN0RDtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFO01BQ0ksZ0JBQWdCO0VBQ3BCO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7R0FDRyxZQUFZO0dBQ1osV0FBVztHQUNYLHdCQUF3QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtdmlkZW8taG9sZGVye1xuICAgIGhlaWdodDogOTUwcHg7XG59XG4ucy12aWRlb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQgOjEwMCU7XG59XG4vKiAgKi9cbi5zLWFkZC1jYXRlZ29yeS1ib3h7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4tb3V0IC4ycztcbn1cbi5zLWFkZC1jYXRlZ29yeS1ib3g6aG92ZXIge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvciA6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucy1jYXRlZ29yeS1ib3g6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4ycztcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTEsIDE2MCwgMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtY2F0ZWdvcnktYm94LW9iYWNpdHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1jYXRlZ29yeS1ib3gtb2JhY2l0eTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIC41KTtcbn1cbi8qIHByb2R1Y3RzICovXG4ucy1wcm9kdWN0LWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMTUpO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9ub0ltZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxODBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4ycztcbn1cbi5zLXByb2R1Y3QtYm94OmhvdmVye1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xufVxuLnMtbWFpbi1ob2xkZXJ7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbn1cbi5zLXByb2R1Y3QtYm94LWhvbGRlcntcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLXByb2R1Y3QtYm94LWhvbGRlcjpob3ZlcntcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTEsIDE2MCwgMSk7XG59XG4ucy1uby1wcm9kdWN0c3tcbiAgaGVpZ2h0OiA0MDBweFxufVxuLyogYWJvdXQgKi9cbi5zLWNvbnRlbnQtYmFja2dyb3VuZHtcbnJpZ2h0OiAwO1xudG9wOiAwO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5iYWNrZ3JvdW5kLXNpemUgOiA2MDBweDtcbmJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbmJhY2tncm91bmQtcmVwZWF0IDpuby1yZXBlYXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAucy1jb250ZW50LWJhY2tncm91bmR7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gICAgICAgIFxuICAgIH1cbiAgXG59XG4ucy1zZWN0aW9uLXJvd3tcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLnMtYWJvdXQtY29udGVudC1ob2xkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnMtYWJvdXQtY29udGVudC1ob2xkZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIC5zLWNvbnRlbnQtYmFja2dyb3VuZCB7XG4gICAgICAgb3BhY2l0eTogLjQ7XG5cbiAgICB9XG59XG4ucy1hYm91dC10aXRsZS1ocntcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi8qIEJsb2cgKi9cbi5zLWhvdC10b3BpY3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuLnMtdG9waWMtaW1nLWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMTUpO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9ub0ltZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4ycztcbn1cbi5zLWhvdC1ob2xkZXJ7XG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1ob3QtaG9sZGVyOmhvdmVye1xuICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuLyogY29udGFjdCBmb3JtICovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnMtY29udGFjdC1jb250ZW50LWhvbGRlcntcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbiAgLnMtaWZyYW1lLW1hcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIC44cmVtIC44cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zLWZvcm0tY29udGFjdC1pbnB1dCB7XG4gIGhlaWdodDogNjBweDtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG59XG4ucy1mb3JtLWNvbnRhY3QtaW5wdXQtaWNvbntcbiAgd2lkdGg6IDYwcHg7XG59XG4ucy1mb3JtLWNvbnRhY3Qtc2VuZC1ocntcbiAgIGJvdHRvbTogNTVweDtcbiAgIHJpZ2h0OiA0MHB4O1xuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var _services_product_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/product-page.service */
    "./src/app/services/product-page.service.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _services_about_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/about.service */
    "./src/app/services/about.service.ts");
    /* harmony import */


    var _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/blog-topics.service */
    "./src/app/services/blog-topics.service.ts");
    /* harmony import */


    var _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts"); // services


    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_router, productPage_service, product_service, pagesImg_service, categorie_service, about_service, blog_topics_service, home_service) {
        _classCallCheck(this, HomeComponent);

        this._router = _router;
        this.productPage_service = productPage_service;
        this.product_service = product_service;
        this.pagesImg_service = pagesImg_service;
        this.categorie_service = categorie_service;
        this.about_service = about_service;
        this.blog_topics_service = blog_topics_service;
        this.home_service = home_service;
        this.hotProductIsLoaded = false;
        this.hotTopicsKey = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHomeData();
          this.getHotProducts();
          this.getAllProducts();
          this.getAllCategories();
          this.getAllSections();
          this.getHotTopics();
        } // [#] CONTROLLERs

      }, {
        key: "setVideo",
        value: function setVideo() {
          $('#videoIframe').attr('src', this.homeData[0].page_video + '?rel=0&autoplay=0&controls=0&modestbranding=1&loop=1&autohide=1&showinfo=0');
        } // [?] sort array content by date

      }, {
        key: "sortData",
        value: function sortData(arr) {
          return arr.sort(function (a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at);
          });
        } // [?] slice from an array 

      }, {
        key: "sliceData",
        value: function sliceData(arr, size) {
          arr.splice(size, arr.length);
        } // [?] redirect to the selected product

      }, {
        key: "selectProductById",
        value: function selectProductById(id) {
          this._router.navigateByUrl('product/' + id);
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id, name, subCateg) {
          this.categorie_service.selectedCategId = {
            id: id,
            name: name,
            subCateg: subCateg
          };

          this._router.navigateByUrl('product');
        } // [#] HTTP REQs
        // [?] get home video

      }, {
        key: "getHomeData",
        value: function getHomeData() {
          var _this68 = this;

          this.home_service.getSections().subscribe(function (res) {
            _this68.homeData = res;
          }, function (err) {}, function () {
            _this68.setVideo();
          });
        } // [?] get hot prodcuts

      }, {
        key: "getHotProducts",
        value: function getHotProducts() {
          var _this69 = this;

          this.productPage_service.getSections().subscribe(function (res) {
            _this69.hotProducts = res;
          }, function (err) {}, function () {
            _this69.hotProductIsLoaded = true;
          });
        } // [?] get all products

      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this70 = this;

          this.product_service.getProducts().subscribe(function (res) {
            _this70.allProducts = res;
          }, function (err) {}, function () {
            _this70.sortData(_this70.allProducts);

            _this70.sliceData(_this70.allProducts, 8);
          });
        } // [?] get all categories

      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this71 = this;

          this.categorie_service.getCategories().subscribe(function (res) {
            _this71.allCategories = res;
          }, function (err) {}, function () {
            _this71.sortData(_this71.allCategories);

            _this71.sliceData(_this71.allCategories, 4);
          });
        } // [?] get all sections

      }, {
        key: "getAllSections",
        value: function getAllSections() {
          var _this72 = this;

          this.about_service.getSections().subscribe(function (res) {
            _this72.aboutSections = res;
          }, function (err) {}, function () {});
        } // [?] get Hot topics 
        //! this is bullshit

      }, {
        key: "getHotTopics",
        value: function getHotTopics() {
          var _this73 = this;

          this.blog_topics_service.getTopics().subscribe(function (res) {
            _this73.hotTopics = res;
          }, function (err) {}, function () {
            _this73.sortData(_this73.hotTopics);

            console.log(_this73.hotTopics);
            _this73.hotTopicsKey = true;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_page_service__WEBPACK_IMPORTED_MODULE_4__["ProductPageService"]
      }, {
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]
      }, {
        type: _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_9__["PagesImgsService"]
      }, {
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]
      }, {
        type: _services_about_service__WEBPACK_IMPORTED_MODULE_7__["AboutService"]
      }, {
        type: _services_blog_topics_service__WEBPACK_IMPORTED_MODULE_8__["BlogTopicsService"]
      }, {
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../products/products.component.css */
      "./src/app/products/products.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/languages/languages.component.css":
  /*!***************************************************!*\
    !*** ./src/app/languages/languages.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLanguagesLanguagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-language-box{\n    width: 200px;\n    cursor: pointer;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-tags{\n    background-image: url('/assets/Icons/settings/lang.png');\n}\n.s-bg-color{\n    background-color:#9870E4\n}\n.s-bg-color2{\n    background-color:#AF84FF\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksd0RBQXdEO0FBQzVEO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtbGFuZ3VhZ2UtYm94e1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1pY29uLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1pY29uLXRhZ3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL3NldHRpbmdzL2xhbmcucG5nJyk7XG59XG4ucy1iZy1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5ODcwRTRcbn1cbi5zLWJnLWNvbG9yMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBRjg0RkZcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/languages/languages.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/languages/languages.component.ts ***!
    \**************************************************/

  /*! exports provided: LanguagesComponent */

  /***/
  function srcAppLanguagesLanguagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function () {
      return LanguagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LanguagesComponent =
    /*#__PURE__*/
    function () {
      function LanguagesComponent() {
        _classCallCheck(this, LanguagesComponent);
      }

      _createClass(LanguagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguagesComponent;
    }();

    LanguagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-languages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./languages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/languages/languages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./languages.component.css */
      "./src/app/languages/languages.component.css")).default]
    })], LanguagesComponent);
    /***/
  },

  /***/
  "./src/app/login/auth/auth.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/login/auth/auth.guard.ts ***!
    \******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppLoginAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/login/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/login/auth/auth.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/login/auth/auth.interceptor.ts ***!
    \************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppLoginAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/login/shared/user.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(userService, router) {
        _classCallCheck(this, AuthInterceptor);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this74 = this;

          if (req.headers.get('noauth')) {
            return next.handle(req.clone());
          } else {
            var clonedreq = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {}, function (err) {
              if (err.error.auth == false) {
                _this74.router.navigateByUrl('/login');
              }
            }));
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/login/shared/user.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/login/shared/user.service.ts ***!
    \**********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppLoginSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.selectedUser = {
          fullName: '',
          email: '',
          password: ''
        };
        this.isAdmin = false;
        this.noAuthHeader = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'NoAuth': 'True'
          })
        };
      } //HttpMethods


      _createClass(UserService, [{
        key: "postUser",
        value: function postUser(user) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/register', user, this.noAuthHeader);
        }
      }, {
        key: "login",
        value: function login(authCredentials) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/userProfile');
        } //Helper Methods

      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "getUserPayload",
        value: function getUserPayload() {
          var token = this.getToken();

          if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
          } else return null;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayload = this.getUserPayload();
          if (userPayload) return userPayload.exp > Date.now() / 1000;else return false;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/login/user-profile/user-profile.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/login/user-profile/user-profile.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/user-profile/user-profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/login/user-profile/user-profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppLoginUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/login/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(userService, router) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this75 = this;

          this.userService.getUserProfile().subscribe(function (res) {
            _this75.userDetails = res['user'];
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.deleteToken();
          this.router.navigate(['/login']);
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/login/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/login/user/sign-in/sign-in.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/login/user/sign-in/sign-in.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginUserSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-submit:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-user{\n     background-image: url('/assets/Icons/login/user.png');\n}\n.s-icon-password{\n     background-image: url('/assets/Icons/login/password.png');\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUNBO0tBQ0sscURBQXFEO0FBQzFEO0FBQ0E7S0FDSyx5REFBeUQ7QUFDOUQ7QUFDQTtHQUNHLHFDQUFxQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtc3VibWl0OmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG59XG4ucy1pY29uLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1pY29uLXVzZXJ7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9sb2dpbi91c2VyLnBuZycpO1xufVxuLnMtaWNvbi1wYXNzd29yZHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2xvZ2luL3Bhc3N3b3JkLnBuZycpO1xufVxuLnMtbm8tcm91bmRlZC1yaWdodHtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1uby1yb3VuZGVkLWxlZnR7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/user/sign-in/sign-in.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/login/user/sign-in/sign-in.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppLoginUserSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/login/shared/user.service.ts");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(userService, router) {
        _classCallCheck(this, SignInComponent);

        this.userService = userService;
        this.router = router;
        this.model = {
          email: '',
          password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.userService.isLoggedIn()) this.router.navigateByUrl('/admin'); // [?] resize holder as winodw full size | take (holder) => the selected DOM Element

          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#signinFormHolder');
        }
      }, {
        key: "clickSubmit",
        value: function clickSubmit() {
          $('#submitLogin').click();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this76 = this;

          this.userService.login(form.value).subscribe(function (res) {
            _this76.userService.setToken(res['token']);

            _this76.userService.isAdmin = true;

            _this76.router.navigateByUrl('/admin');
          }, function (err) {
            _this76.serverErrorMessages = err.error.message;
          });
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/login/user/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/login/user/sign-up/sign-up.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/login/user/sign-up/sign-up.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginUserSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-make-me-up{\n    z-index: 4000;\n}\n.s-submit:hover{\n    -webkit-transition: all ease-in-out .2s;\n    transition: all ease-in-out .2s;\n    background-color:#FFFDCF;\n}\n.s-icon-btn{\n    width: 60px;\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-icon-user{\n     background-image: url('/assets/Icons/login/user.png');\n}\n.s-icon-email{\n     background-image: url('/assets/Icons/login/email.png');\n}\n.s-icon-password{\n     background-image: url('/assets/Icons/login/password.png');\n}\n.s-no-rounded-right{\n   border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-no-rounded-left{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtLQUNLLHFEQUFxRDtBQUMxRDtBQUNBO0tBQ0ssc0RBQXNEO0FBQzNEO0FBQ0E7S0FDSyx5REFBeUQ7QUFDOUQ7QUFDQTtHQUNHLHFDQUFxQztFQUN0Qyx3Q0FBd0M7QUFDMUM7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMtbWFrZS1tZS11cHtcbiAgICB6LWluZGV4OiA0MDAwO1xufVxuLnMtc3VibWl0OmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRENGO1xufVxuLnMtaWNvbi1idG57XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnMtaWNvbi11c2Vye1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvbG9naW4vdXNlci5wbmcnKTtcbn1cbi5zLWljb24tZW1haWx7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9sb2dpbi9lbWFpbC5wbmcnKTtcbn1cbi5zLWljb24tcGFzc3dvcmR7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JY29ucy9sb2dpbi9wYXNzd29yZC5wbmcnKTtcbn1cbi5zLW5vLXJvdW5kZWQtcmlnaHR7XG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtbm8tcm91bmRlZC1sZWZ0e1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/user/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/login/user/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppLoginUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../notifications/notifications.component */
    "./src/app/notifications/notifications.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/user.service */
    "./src/app/login/shared/user.service.ts");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(userService) {
        _classCallCheck(this, SignUpComponent);

        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // [?] resize holder as winodw full size | take (holder) => the selected DOM Element
          var holderWindowSize = function holderWindowSize(holder) {
            // [?] window reisze event | to resize holder every Browser winodw resize
            window.addEventListener("resize", function () {
              resizeContentHolder(holder);
            }); // [?] resize the content container holder to fit the window height size

            function resizeContentHolder(elem) {
              var innerWidth = window.innerWidth;
              var innerHeightWithoutNav = window.innerHeight - 56;

              if (innerWidth < 992) {
                $(elem).css("min-height", innerHeightWithoutNav);
              } else {
                if (innerHeightWithoutNav > 700) {
                  $(elem).css("min-height", innerHeightWithoutNav);
                } else {
                  $(elem).css("min-height", 700);
                }
              }
            } // [?] on load at ther realtime


            resizeContentHolder(holder);
          };

          holderWindowSize('#signupFormHolder');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this77 = this;

          this.userService.postUser(form.value).subscribe(function (res) {
            _this77.showSucessMessage = true;

            _this77.notify_component.notifyMe('alert-success', 'Account is', ' registered !');

            setTimeout(function () {
              return _this77.showSucessMessage = false;
            }, 4000);

            _this77.resetForm(form);
          }, function (err) {
            if (err.status === 422) {
              _this77.serverErrorMessages = err.error.join('<br/>');
            } else _this77.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
          };
          form.resetForm();
          this.serverErrorMessages = '';
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"], {
      static: false
    })], SignUpComponent.prototype, "notify_component", void 0);
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/login/user/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/login/user/user.component.css":
  /*!***********************************************!*\
    !*** ./src/app/login/user/user.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-no-outline{\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1uby1vdXRsaW5le1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/user/user.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/login/user/user.component.ts ***!
    \**********************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppLoginUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // sorce Code | https://github.com/CodAffection/MEAN-Stack-Login-and-Logout-in-Angular-6-Part-2


    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener("resize", function () {
            resizeContentHolder();
          }); // [?] resize the content container holder to fit the window height size

          function resizeContentHolder() {
            var innerWidth = window.innerWidth;
            var innerHeightWithoutNav = window.innerHeight - 56;

            if (innerWidth < 992) {
              $("#loginFormHolder").css("height", innerHeightWithoutNav);
            } else {
              if (innerHeightWithoutNav > 700) {
                $("#loginFormHolder").css("height", innerHeightWithoutNav);
              } else {
                $("#loginFormHolder").css("height", 700);
              }
            }
          } // [?] on load at ther realtime


          resizeContentHolder();
        }
      }]);

      return UserComponent;
    }();

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/login/user/user.component.css")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/model/admin-about-model.ts":
  /*!********************************************!*\
    !*** ./src/app/model/admin-about-model.ts ***!
    \********************************************/

  /*! exports provided: AboutSectionModel */

  /***/
  function srcAppModelAdminAboutModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutSectionModel", function () {
      return AboutSectionModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AboutSectionModel = function AboutSectionModel() {
      _classCallCheck(this, AboutSectionModel);
    };
    /***/

  },

  /***/
  "./src/app/model/admin-category.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/admin-category.model.ts ***!
    \***********************************************/

  /*! exports provided: CategoryModel */

  /***/
  function srcAppModelAdminCategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModel", function () {
      return CategoryModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CategoryModel = function CategoryModel() {
      _classCallCheck(this, CategoryModel);
    };
    /***/

  },

  /***/
  "./src/app/model/admin-product-color.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/model/admin-product-color.model.ts ***!
    \****************************************************/

  /*! exports provided: ProductColor, ProductSideImgs, Product */

  /***/
  function srcAppModelAdminProductColorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductColor", function () {
      return ProductColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSideImgs", function () {
      return ProductSideImgs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductColor = function ProductColor() {
      _classCallCheck(this, ProductColor);
    };

    var ProductSideImgs = function ProductSideImgs() {
      _classCallCheck(this, ProductSideImgs);
    };

    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  },

  /***/
  "./src/app/model/blog-topics.model.ts":
  /*!********************************************!*\
    !*** ./src/app/model/blog-topics.model.ts ***!
    \********************************************/

  /*! exports provided: BlogTopicModel */

  /***/
  function srcAppModelBlogTopicsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogTopicModel", function () {
      return BlogTopicModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BlogTopicModel = function BlogTopicModel() {
      _classCallCheck(this, BlogTopicModel);
    };
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-navbar{\n    z-index: 1500;\n}\n.s-under-nav{\n    height: 56px;\n}\n@media (max-width: 992px) {\n  .s-under-nav {\n    height: 62px;\n  }\n}\n.nav-item:hover{\n  background: #FFFDCF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zLW5hdmJhcntcbiAgICB6LWluZGV4OiAxNTAwO1xufVxuLnMtdW5kZXItbmF2e1xuICAgIGhlaWdodDogNTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucy11bmRlci1uYXYge1xuICAgIGhlaWdodDogNjJweDtcbiAgfVxufVxuLm5hdi1pdGVtOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjRkZGRENGO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "nav-bar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/notifications/notifications.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/notifications/notifications.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);

        this.notifyState = false;
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // [?] call this notifyMe from any parent compoenent and put in it alert color Class in (alertType) and put notifications Message in (notifyMessage)

      }, {
        key: "notifyMe",
        value: function notifyMe(alertType, notifyMessage, notifyMessageStrong) {
          var _this78 = this;

          clearTimeout(this.closeNotify);
          this.notifyMessage = notifyMessage;
          this.notifyMessageStrong = notifyMessageStrong;
          this.alertType = alertType;
          this.notifyState = true;
          this.closeNotify = setTimeout(function () {
            _this78.notifyState = false;
          }, 5000);
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.css */
      "./src/app/notifications/notifications.component.css")).default]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/product-studio/product-studio.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/product-studio/product-studio.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductStudioProductStudioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".s-product-named{\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    border-radius: 0.25rem;\n}\n.s-page-opacity{\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: .6 !important;\n}\n.s-page-opacity:hover {\n    cursor: pointer;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 !important;\n}\n.s-page-opacity-2{\n    /* cursor: default; */\n    -webkit-transition: all ease-in-out .4s;\n    transition: all ease-in-out .4s;\n    /* opacity: .6 ; */\n}\n.s-page-opacity-2:hover{\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n    opacity: 1 ;\n}\n.s-category-btn-icon{\n    height:100%;\n    width:50px;\n}\n/* main img */\n.s-main-image-view{\n    width: 330px;\n    height: 330px;\n    background-image: url('/assets/Icons/admin-products/image.png');\n    background-position: center ;\n    background-repeat: no-repeat;\n    background-size: 60px;\n    border: 4px dashed rgba(152,155,155,1);\n}\n.s-prod-desc{\n    overflow: scroll;\n    height: 230px;\n}\n.s-prod-sliders-box{\n   cursor: pointer;\n}\n.s-prod-slider-box-1{\n    height:45px !important;\n    width:80px !important;\n}\n.s-prod-slider-box-2{\n    height:50px !important;\n    width:100px !important;\n}\n.s-prod-slider-box-3{\n    height:60px !important;\n    width:120px !important;\n}\n.s-prod-slider-box-4{\n    height:50px !important;\n    width:100px !important;\n}\n.s-prod-slider-box-5{\n    height:45px !important;\n    width:80px !important;\n}\n.s-main-image-view:hover{\n    border: 4px dashed #989B9B;\n\n}\n.s-controls-holder {\n    height: 200px;\n}\n/* color */\n.s-side-imgs-holder{\n    height: 350px;\n    width: auto;\n    overflow: scroll;\n}\n.s-product-color{\n    cursor: pointer;\n    border-radius: 50%;\n    min-width: 30px !important;\n    min-height: 30px !important;\n    max-width: 30px !important;\n    max-height: 30px !important;\n    /* background-image: url('/assets/Icons/admin-products/add.png'); */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\n.s-side-image{\n    border: 4px dashed rgba(152, 155, 155, 1);\n    min-width: 100px !important;\n    min-height: 100px !important;\n    max-width: 100px !important;\n    max-height: 100px !important;\n    background-image: url('/assets/Icons/admin-products/addNewImg.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 30px;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    overflow: hidden;\n    -webkit-transition: all ease-in-out .1s;\n    transition: all ease-in-out .1s;\n}\n.s-side-image:hover {\n  border: 4px dashed #989B9B;\n  cursor: pointer;\n\n}\n.s-arrow-left{\n    background-image: url('/assets/Icons/user-product/arrow-left.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 50px;\n    cursor: pointer;\n}\n.s-arrow-right{\n    background-image: url('/assets/Icons/user-product/arrow-right.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 50px;\n    cursor: pointer;\n}\n.s-selected{\n    border: 1px solid rgb(255, 255, 255) !important;\n    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 1) !important;\n}\n.s-selected-image{\n    /* border: 2px solid #FFFBA0 !important; */\n    /* box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, .2) !important; */\n    /* border: 1px solid rgb(255, 255, 255) !important; */\n    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 1) !important;\n}\n@media (max-width: 991px) {\n    .s-main-img-col {\n        height: 400px;\n    }\n    .s-side-imgs-holder {\n      height: auto;\n      width: 350px;\n      overflow: scroll;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1zdHVkaW8vcHJvZHVjdC1zdHVkaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQSxhQUFhO0FBQ2I7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLCtEQUErRDtJQUMvRCw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7R0FDRyxlQUFlO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG1FQUFtRTtJQUNuRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtRUFBbUU7SUFDbkUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHVDQUErQjtJQUEvQiwrQkFBK0I7QUFDbkM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlOztBQUVqQjtBQUNBO0lBQ0ksa0VBQWtFO0lBQ2xFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1FQUFtRTtJQUNuRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsOERBQThEO0lBQzlELHFEQUFxRDtJQUNyRCw2REFBNkQ7QUFDakU7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO01BQ0UsWUFBWTtNQUNaLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtc3R1ZGlvL3Byb2R1Y3Qtc3R1ZGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucy1wcm9kdWN0LW5hbWVke1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLnMtcGFnZS1vcGFjaXR5e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xuICAgIG9wYWNpdHk6IC42ICFpbXBvcnRhbnQ7XG59XG4ucy1wYWdlLW9wYWNpdHk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5zLXBhZ2Utb3BhY2l0eS0ye1xuICAgIC8qIGN1cnNvcjogZGVmYXVsdDsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjRzO1xuICAgIC8qIG9wYWNpdHk6IC42IDsgKi9cbn1cbi5zLXBhZ2Utb3BhY2l0eS0yOmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMXM7XG4gICAgb3BhY2l0eTogMSA7XG59XG4ucy1jYXRlZ29yeS1idG4taWNvbntcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDo1MHB4O1xufVxuLyogbWFpbiBpbWcgKi9cbi5zLW1haW4taW1hZ2Utdmlld3tcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvaW1hZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjBweDtcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYSgxNTIsMTU1LDE1NSwxKTtcbn1cbi5zLXByb2QtZGVzY3tcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGhlaWdodDogMjMwcHg7XG59XG4ucy1wcm9kLXNsaWRlcnMtYm94e1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtcHJvZC1zbGlkZXItYm94LTF7XG4gICAgaGVpZ2h0OjQ1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDo4MHB4ICFpbXBvcnRhbnQ7XG59XG4ucy1wcm9kLXNsaWRlci1ib3gtMntcbiAgICBoZWlnaHQ6NTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7XG59XG4ucy1wcm9kLXNsaWRlci1ib3gtM3tcbiAgICBoZWlnaHQ6NjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjEyMHB4ICFpbXBvcnRhbnQ7XG59XG4ucy1wcm9kLXNsaWRlci1ib3gtNHtcbiAgICBoZWlnaHQ6NTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7XG59XG4ucy1wcm9kLXNsaWRlci1ib3gtNXtcbiAgICBoZWlnaHQ6NDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjgwcHggIWltcG9ydGFudDtcbn1cbi5zLW1haW4taW1hZ2Utdmlldzpob3ZlcntcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgIzk4OUI5QjtcblxufVxuLnMtY29udHJvbHMtaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLyogY29sb3IgKi9cbi5zLXNpZGUtaW1ncy1ob2xkZXJ7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnMtcHJvZHVjdC1jb2xvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1pbi13aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLXByb2R1Y3RzL2FkZC5wbmcnKTsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC4xcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xufVxuLnMtc2lkZS1pbWFnZXtcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYSgxNTIsIDE1NSwgMTU1LCAxKTtcbiAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvYWRtaW4tcHJvZHVjdHMvYWRkTmV3SW1nLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjFzO1xufVxuLnMtc2lkZS1pbWFnZTpob3ZlciB7XG4gIGJvcmRlcjogNHB4IGRhc2hlZCAjOTg5QjlCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi5zLWFycm93LWxlZnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL3VzZXItcHJvZHVjdC9hcnJvdy1sZWZ0LnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1hcnJvdy1yaWdodHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSWNvbnMvdXNlci1wcm9kdWN0L2Fycm93LXJpZ2h0LnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1zZWxlY3RlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xufVxuLnMtc2VsZWN0ZWQtaW1hZ2V7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgI0ZGRkJBMCAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIC4yKSAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAucy1tYWluLWltZy1jb2wge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgICAucy1zaWRlLWltZ3MtaG9sZGVyIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product-studio/product-studio.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/product-studio/product-studio.component.ts ***!
    \************************************************************/

  /*! exports provided: ProductStudioComponent */

  /***/
  function srcAppProductStudioProductStudioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductStudioComponent", function () {
      return ProductStudioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/categories.service */
    "./src/app/services/categories.service.ts");

    var ProductStudioComponent =
    /*#__PURE__*/
    function () {
      function ProductStudioComponent(prod_service, _route, categ_service) {
        _classCallCheck(this, ProductStudioComponent);

        this.prod_service = prod_service;
        this._route = _route;
        this.categ_service = categ_service;
        this.xs = [1, 2, 3, 4, 5];
        this.isLoaded = false;
        this.selectedColorBox = 0;
        this.selectedImageBox = 0;
      }

      _createClass(ProductStudioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener("resize", function () {
            resizeContentHolder();
          }); // [?] resize the content container holder to fit the window height size

          function resizeContentHolder() {
            var innerWidth = window.innerWidth;
            var innerHeightWithoutNav = window.innerHeight - 56;

            if (innerWidth < 992) {
              $("#productsHolder").css("height", "auto");
            } else {
              if (innerHeightWithoutNav > 700) {
                $("#productsHolder").css("height", innerHeightWithoutNav);
              } else {
                $("#productsHolder").css("height", 700);
              }
            }
          } // [?] on load at ther realtime


          resizeContentHolder();
          this.getProdId();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {} // setTimeout(() => { this.prodSliderBoxSwitcher()},200)
        // [?] view product slider box with a clasess

      }, {
        key: "prodSliderBoxSwitcher",
        value: function prodSliderBoxSwitcher() {
          var boxs = $('[data-target-box]');

          var removeAllBoxsClasses = function removeAllBoxsClasses(boxs) {
            boxs.removeClass("\n       rounded-left rounded-right \n       s-prod-slider-box-1 s-prod-slider-box-2 s-prod-slider-box-3 s-prod-slider-box-4 s-prod-slider-box-5\n       order-0 order-1 order-2 order-3 order-4\n       ");
          };

          removeAllBoxsClasses(boxs);
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = boxs[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var box = _step18.value;
              var boxPosition = $(box).attr('data-target-box');

              switch (boxPosition) {
                case '0':
                  $(box).addClass('s-prod-slider-box-1 order-0 rounded-left');
                  break;

                case '1':
                  $(box).addClass('s-prod-slider-box-2 order-1');
                  break;

                case '2':
                  $(box).addClass('s-prod-slider-box-3 order-2');
                  break;

                case '3':
                  $(box).addClass('s-prod-slider-box-4 order-3');
                  break;

                case '4':
                  $(box).addClass('s-prod-slider-box-5 order-4 rounded-right');
                  break;
              }
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }
        } //[?]//TODO

      }, {
        key: "selectProdBox",
        value: function selectProdBox(boxx) {
          var allBoxs = $('[data-target-box]');
          var index = 2;
          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = allBoxs[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var box = _step19.value;

              if (index > 4) {
                index = 0;
                $(box).attr('data-target-box', index);
              } else {
                $(box).attr('data-target-box', index);
              }

              index++;
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                _iterator19.return();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          this.prodSliderBoxSwitcher();
        } // {=========={([@] Controllers )}==========}
        // [# Controllers] || ================================================== |({product Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] select product color

      }, {
        key: "selectColor",
        value: function selectColor(index) {
          this.selectedColorIndex = index;
          this.productColorImages = this.product.prod_colors[index].prod_images;
          this.mainImage = this.product.prod_colors[index].prod_images[0].prod_side_img;
          this.selectedSideImage(0);
        } // [?] select product images color

      }, {
        key: "selectImage",
        value: function selectImage(imageIndex) {
          this.mainImage = this.product.prod_colors[this.selectedColorIndex].prod_images[imageIndex].prod_side_img;
        } //[?] view selected class for color

      }, {
        key: "selectedColor",
        value: function selectedColor(index) {
          this.selectedColorBox = index;
        } // [?] view selected class for side image

      }, {
        key: "selectedSideImage",
        value: function selectedSideImage(index) {
          this.selectedImageBox = index;
        } //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [# Controllers] || ================================================== |product Controllers| ---END---
        // {=========={([@] HTTP REQuests )}==========}
        // [# HTTP REQuests] || ================================================== |({product Controllers})| ===START===
        //:::|:::|:::|:::|:::|:::|:::|:::|:::|
        // [?] get product by id 

      }, {
        key: "getProdId",
        value: function getProdId() {
          var _this79 = this;

          var id = this.prod_service.checkProductIDParam(); //[?] check the parameter

          this.prod_service.getSelectedProduct(id).subscribe(function (res) {
            _this79.product = res;
            _this79.productColorImages = _this79.product.prod_colors[0].prod_images;
            _this79.mainImage = _this79.product.prod_colors[0].prod_images[0].prod_side_img;
            _this79.selectedColorIndex = 0;
          }, function (err) {}, function () {
            _this79.getCategById();
          });
        }
      }, {
        key: "getCategById",
        value: function getCategById() {
          var _this80 = this;

          var categId = this.product.prod_category;
          this.categ_service.getSelectedCategories(categId).subscribe(function (res) {
            _this80.category = res;
          }, function (err) {}, function () {
            _this80.isLoaded = true;
          });
        }
      }]);

      return ProductStudioComponent;
    }();

    ProductStudioComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]
      }];
    };

    ProductStudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-studio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-studio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-studio/product-studio.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2000ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-studio.component.css */
      "./src/app/product-studio/product-studio.component.css")).default]
    })], ProductStudioComponent);
    /***/
  },

  /***/
  "./src/app/products/products.component.css":
  /*!*************************************************!*\
    !*** ./src/app/products/products.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Slider ===START */\n.s-slider-image {\n  height: 100%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.s-main-holder{\n  min-height: 1000px;\n}\n.s-product-box-holder{\n  height: 400px;\n  overflow: hidden;\n  -webkit-transition: all linear .2s;\n  transition: all linear .2s;\n  cursor: pointer;\n}\n.s-product-box-holder:hover{\n  box-shadow: 0px 0px 0px 2px rgba(255, 251, 160, 1);\n}\n.s-product-box{\n    background-color: rgba(209, 209, 209, 0.15);\n    height: 250px;\n    background-image : url('/assets/Icons/admin-products/noImge.png');\n    background-size: 180px;\n    background-repeat: no-repeat;\n    background-position: center;\n    -webkit-transition: all linear .2s;\n    transition: all linear .2s;\n}\n.s-product-box:hover{\n  background-size: 200px;\n}\n.s-search-btn{\n    width: 60px;\n    /* height: 30px; */\n    background-image: url('/assets/Icons/admin-products/serach.png');\n    background-size: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.s-serach-bar{\n   border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n.s-controller-bar{\n  top: 80px;\n  opacity: .97;\n  z-index: 4000;\n}\n.s-categories-holder{\n width: 100%;\n height: 48px;\n overflow-x: scroll; \n overflow-y: hidden;\n}\n.s-dash{\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right{\n  right:0;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-dash-right-2{\n  right:15px;\n  top: 0;\n  width: 18px;\n  height: 100%;\n  opacity: .8;\n}\n.s-selected-categ-btns{\n  white-space: nowrap;\n   text-align: center;\n height: 48px;\n border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n.s-categories-btns{\n   white-space: nowrap;\n   text-align: center;\n}\n.s-sub-categories-btns:hover{\n    background-color: #FFFBA0;\n    color: #242424 !important;\n}\n.s-no-products{\n  height: 400px\n}\n.s-sub-categories-holder{\n width: 100%;\n height: 48px;\n overflow-x: scroll; \n overflow-y: hidden;\n}\n.s-sub-categories-selected_btns{\n    background-color: #FFFBA0;\n    color: #242424 !important;\n}\n@media (max-width: 991px) {\n\n}\n/* hot sections */\n.s-hot-box{\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.s-hot-text-holder{\n  background-color: rgba(34, 34, 34, .3) !important;\n}\n.s-text-shadow-slider{\n  text-shadow: 0 0 3px #505050;\n}\n.s-text-shadow{\n  text-shadow: 0 0 1px #505050;\n}\n.s-large-hot-box{\n  height: 700px;\n}\n.s-small-hot-box{\n  height: calc(350px - 0.5rem);\n}\n.s-hot-desc{\n  max-height: 200px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrREFBa0Q7QUFDcEQ7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsaUVBQWlFO0lBQ2pFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtDQUEwQjtJQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7R0FDbEIsa0JBQWtCO0NBQ3BCLFlBQVk7Q0FDWixxQ0FBcUM7RUFDcEMsd0NBQXdDO0FBQzFDO0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsa0JBQWtCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTbGlkZXIgPT09U1RBUlQgKi9cbi5zLXNsaWRlci1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnMtbWFpbi1ob2xkZXJ7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbn1cbi5zLXByb2R1Y3QtYm94LWhvbGRlcntcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zLXByb2R1Y3QtYm94LWhvbGRlcjpob3ZlcntcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTEsIDE2MCwgMSk7XG59XG4ucy1wcm9kdWN0LWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMTUpO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnL2Fzc2V0cy9JY29ucy9hZG1pbi1wcm9kdWN0cy9ub0ltZ2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxODBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4ycztcbn1cbi5zLXByb2R1Y3QtYm94OmhvdmVye1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xufVxuLnMtc2VhcmNoLWJ0bntcbiAgICB3aWR0aDogNjBweDtcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ljb25zL2FkbWluLXByb2R1Y3RzL3NlcmFjaC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucy1zZXJhY2gtYmFye1xuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4ucy1jb250cm9sbGVyLWJhcntcbiAgdG9wOiA4MHB4O1xuICBvcGFjaXR5OiAuOTc7XG4gIHotaW5kZXg6IDQwMDA7XG59XG4ucy1jYXRlZ29yaWVzLWhvbGRlcntcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDQ4cHg7XG4gb3ZlcmZsb3cteDogc2Nyb2xsOyBcbiBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4ucy1kYXNoe1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAuODtcbn1cbi5zLWRhc2gtcmlnaHR7XG4gIHJpZ2h0OjA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogLjg7XG59XG4ucy1kYXNoLXJpZ2h0LTJ7XG4gIHJpZ2h0OjE1cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogLjg7XG59XG4ucy1zZWxlY3RlZC1jYXRlZy1idG5ze1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIGhlaWdodDogNDhweDtcbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLnMtY2F0ZWdvcmllcy1idG5ze1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zLXN1Yi1jYXRlZ29yaWVzLWJ0bnM6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkJBMDtcbiAgICBjb2xvcjogIzI0MjQyNCAhaW1wb3J0YW50O1xufVxuLnMtbm8tcHJvZHVjdHN7XG4gIGhlaWdodDogNDAwcHhcbn1cbi5zLXN1Yi1jYXRlZ29yaWVzLWhvbGRlcntcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDQ4cHg7XG4gb3ZlcmZsb3cteDogc2Nyb2xsOyBcbiBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4ucy1zdWItY2F0ZWdvcmllcy1zZWxlY3RlZF9idG5ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCQTA7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuXG59XG4vKiBob3Qgc2VjdGlvbnMgKi9cbi5zLWhvdC1ib3h7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zLWhvdC10ZXh0LWhvbGRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAuMykgIWltcG9ydGFudDtcbn1cbi5zLXRleHQtc2hhZG93LXNsaWRlcntcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggIzUwNTA1MDtcbn1cbi5zLXRleHQtc2hhZG93e1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjNTA1MDUwO1xufVxuLnMtbGFyZ2UtaG90LWJveHtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cbi5zLXNtYWxsLWhvdC1ib3h7XG4gIGhlaWdodDogY2FsYygzNTBweCAtIDAuNXJlbSk7XG59XG4ucy1ob3QtZGVzY3tcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _services_product_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/product-page.service */
    "./src/app/services/product-page.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/pages-imgs.service */
    "./src/app/services/pages-imgs.service.ts");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(prod_service, categ_service, prod_page_service, pagesImgs_service, _router) {
        _classCallCheck(this, ProductsComponent);

        this.prod_service = prod_service;
        this.categ_service = categ_service;
        this.prod_page_service = prod_page_service;
        this.pagesImgs_service = pagesImgs_service;
        this._router = _router;
        this.productsByCategories = [];
        this.productBySubCateg = [];
        this.CategoryName = 'All';
        this.isLoaded = false;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this81 = this;

          $("#prodBody").on("click", "[data-select=false]", function ($e) {
            _this81.selectSubCategBtn($e.target);
          });
          this.getAllProducts();
          this.getAllCategroies();
          this.getPageData();
        }
      }, {
        key: "comeFromCategoryPage",
        value: function comeFromCategoryPage() {
          if (this.categ_service.selectedCategId) {
            var id = this.categ_service.selectedCategId.id;
            var categName = this.categ_service.selectedCategId.name;
            this.selectedSubCategOfCateg = this.categ_service.selectedCategId.subCateg;
            this.selectCategory(id, categName);
          } else {
            this.selectAllCategory();
          }
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts() {
          var _this82 = this;

          this.prod_service.getProducts().subscribe(function (res) {
            _this82.products = res;
          }, function (err) {}, function () {
            _this82.comeFromCategoryPage();
          });
        }
      }, {
        key: "getAllCategroies",
        value: function getAllCategroies() {
          var _this83 = this;

          this.categ_service.getCategories().subscribe(function (res) {
            _this83.categories = res;
          });
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id, categName) {
          this.productBySubCateg = [];
          this.productsByCategories = []; // this.selectSubCategBtn('none')

          this.selectSubCategBtn('#allProdOfSubCateg');
          this.CategoryName = categName;
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = this.products[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var product = _step20.value;
              product.prod_category == id ? this.productsByCategories.push(product) : false;
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }

          if (this.productsByCategories.length <= 0) {
            this.productsByCategories = undefined;
          }
        }
      }, {
        key: "selectAllCategory",
        value: function selectAllCategory() {
          this.CategoryName = 'All';
          this.productsByCategories = [];
          this.productBySubCateg = [];
          this.selectSubCategBtn('#allProdOfSubCateg');
        }
      }, {
        key: "selectProductById",
        value: function selectProductById(id) {
          this._router.navigateByUrl('product/' + id);
        } // [?] select sub categories 

      }, {
        key: "selectSubCategOfCateg",
        value: function selectSubCategOfCateg(subCategories) {
          this.selectedSubCategOfCateg = subCategories;
        } // [?] select all sub categories product

      }, {
        key: "selectAllSubCategories",
        value: function selectAllSubCategories() {
          this.productBySubCateg = [];
        }
      }, {
        key: "selectProdsOfSubCateg",
        value: function selectProdsOfSubCateg(subCategories) {
          this.productBySubCateg = [];

          if (this.productsByCategories) {
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
              for (var _iterator21 = this.productsByCategories[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                var product = _step21.value;
                product.prod_sub_category == subCategories ? this.productBySubCateg.push(product) : false;
              }
            } catch (err) {
              _didIteratorError21 = true;
              _iteratorError21 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                  _iterator21.return();
                }
              } finally {
                if (_didIteratorError21) {
                  throw _iteratorError21;
                }
              }
            }
          }

          if (this.productBySubCateg.length <= 0) {
            this.productBySubCateg = undefined;
          }
        } // [?] add class to selected button

      }, {
        key: "selectSubCategBtn",
        value: function selectSubCategBtn(btn) {
          var btns = $('[data-select=false]');
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = btns[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var btnIn = _step22.value;
              $(btnIn).removeClass("s-sub-categories-selected_btns");
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          $(btn).addClass("s-sub-categories-selected_btns");
        }
      }, {
        key: "getPageData",
        value: function getPageData() {
          var _this84 = this;

          this.prod_page_service.getSections().subscribe(function (res) {
            _this84.pageData = res;
            console.log(_this84.pageData);
          }, function (err) {}, function () {
            _this84.isLoaded = true;
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
      }, {
        type: _services_product_page_service__WEBPACK_IMPORTED_MODULE_4__["ProductPageService"]
      }, {
        type: _services_pages_imgs_service__WEBPACK_IMPORTED_MODULE_6__["PagesImgsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/products/products.component.css")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/services/about.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/about.service.ts ***!
    \*******************************************/

  /*! exports provided: AboutService */

  /***/
  function srcAppServicesAboutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutService", function () {
      return AboutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AboutService =
    /*#__PURE__*/
    function () {
      function AboutService(http, activeRoute) {
        _classCallCheck(this, AboutService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/about-page";
      } // [?] (GET) get All Sections


      _createClass(AboutService, [{
        key: "getSections",
        value: function getSections() {
          return this.http.get(this._url);
        } // [?] get Section by :id

      }, {
        key: "getSelectedSection",
        value: function getSelectedSection(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Section

      }, {
        key: "createSection",
        value: function createSection(newSection) {
          return this.http.post(this._url, newSection);
        } // [?] (PUT) udpate Section

      }, {
        key: "updateSection",
        value: function updateSection(id, updatedSection) {
          return this.http.put(this._url + '/' + id, updatedSection);
        } //[?] (DELETE) delete Section

      }, {
        key: "deleteSection",
        value: function deleteSection(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return AboutService;
    }();

    AboutService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AboutService);
    /***/
  },

  /***/
  "./src/app/services/blog-comments.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/blog-comments.service.ts ***!
    \***************************************************/

  /*! exports provided: BlogCommentsService */

  /***/
  function srcAppServicesBlogCommentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogCommentsService", function () {
      return BlogCommentsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlogCommentsService =
    /*#__PURE__*/
    function () {
      function BlogCommentsService(http, activeRoute) {
        _classCallCheck(this, BlogCommentsService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/blog-comments";
      } // [?] (GET) get All comments


      _createClass(BlogCommentsService, [{
        key: "getcomments",
        value: function getcomments() {
          return this.http.get(this._url);
        } // [?] get Comment by :the main topic id

      }, {
        key: "getSelectedComment",
        value: function getSelectedComment(topicId) {
          return this.http.get(this._url + '/' + topicId);
        } //[?] (POST) Create Comment

      }, {
        key: "createComment",
        value: function createComment(newComment) {
          return this.http.post(this._url, newComment);
        } // [?] (PUT) udpate Comment

      }, {
        key: "updateComment",
        value: function updateComment(id, updatedComment) {
          return this.http.put(this._url + '/' + id, updatedComment);
        } //[?] (DELETE) delete Comment

      }, {
        key: "deleteComment",
        value: function deleteComment(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return BlogCommentsService;
    }();

    BlogCommentsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BlogCommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogCommentsService);
    /***/
  },

  /***/
  "./src/app/services/blog-tags.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/blog-tags.service.ts ***!
    \***********************************************/

  /*! exports provided: BlogTagsService */

  /***/
  function srcAppServicesBlogTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogTagsService", function () {
      return BlogTagsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlogTagsService =
    /*#__PURE__*/
    function () {
      function BlogTagsService(http, activeRoute) {
        _classCallCheck(this, BlogTagsService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/blog-tags";
      } // [?] (GET) get All tags


      _createClass(BlogTagsService, [{
        key: "getTags",
        value: function getTags() {
          return this.http.get(this._url);
        } // [?] get Tag by :id

      }, {
        key: "getSelectedTag",
        value: function getSelectedTag(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Tag

      }, {
        key: "createTag",
        value: function createTag(newTag) {
          return this.http.post(this._url, newTag);
        } // [?] (PUT) udpate Tag

      }, {
        key: "updateTag",
        value: function updateTag(id, updatedTag) {
          return this.http.put(this._url + '/' + id, updatedTag);
        } //[?] (DELETE) delete Tag

      }, {
        key: "deleteTag",
        value: function deleteTag(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return BlogTagsService;
    }();

    BlogTagsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BlogTagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogTagsService);
    /***/
  },

  /***/
  "./src/app/services/blog-topics.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/blog-topics.service.ts ***!
    \*************************************************/

  /*! exports provided: BlogTopicsService */

  /***/
  function srcAppServicesBlogTopicsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogTopicsService", function () {
      return BlogTopicsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BlogTopicsService =
    /*#__PURE__*/
    function () {
      function BlogTopicsService(http, activeRoute) {
        _classCallCheck(this, BlogTopicsService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/blog-topics";
      } // [?] (GET) get All Topics


      _createClass(BlogTopicsService, [{
        key: "getTopics",
        value: function getTopics() {
          return this.http.get(this._url);
        } // [?] get Topic by :id

      }, {
        key: "getSelectedTopic",
        value: function getSelectedTopic(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Topic

      }, {
        key: "createTopic",
        value: function createTopic(newTopic) {
          return this.http.post(this._url, newTopic);
        } // [?] (PUT) udpate Topic

      }, {
        key: "updateTopic",
        value: function updateTopic(id, updatedTopic) {
          return this.http.put(this._url + '/' + id, updatedTopic);
        } //[?] (DELETE) delete Topic

      }, {
        key: "deleteTopic",
        value: function deleteTopic(id) {
          return this.http.delete(this._url + '/' + id);
        } // [?] check if there is an :id param in the route or not

      }, {
        key: "checkTopicIDParam",
        value: function checkTopicIDParam() {
          var paramId = this.activeRoute.root.firstChild.snapshot.params['id'];

          if (paramId) {
            // [?] if there is an :id 
            return paramId;
          } else {
            return false;
          }
        } // [#] IMGS

      }, {
        key: "uploadImg",
        value: function uploadImg(img) {
          return this.http.post(this._url + '/img', img);
        }
      }, {
        key: "getUrl",
        value: function getUrl(fileName) {
          return "".concat(this._url, "/img/").concat(fileName);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imgName) {
          return this.http.delete(this._url + '/img/' + imgName);
        }
      }]);

      return BlogTopicsService;
    }();

    BlogTopicsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BlogTopicsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogTopicsService);
    /***/
  },

  /***/
  "./src/app/services/categories-page.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/categories-page.service.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriesPageService */

  /***/
  function srcAppServicesCategoriesPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageService", function () {
      return CategoriesPageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CategoriesPageService =
    /*#__PURE__*/
    function () {
      function CategoriesPageService(http, activeRoute) {
        _classCallCheck(this, CategoriesPageService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/category-page";
      } // [?] (GET) get All Sections


      _createClass(CategoriesPageService, [{
        key: "getSections",
        value: function getSections() {
          return this.http.get(this._url);
        } // [?] get Section by :id

      }, {
        key: "getSelectedSection",
        value: function getSelectedSection(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Section

      }, {
        key: "createSection",
        value: function createSection(newSection) {
          return this.http.post(this._url, newSection);
        } // [?] (PUT) udpate Section

      }, {
        key: "updateSection",
        value: function updateSection(id, updatedSection) {
          return this.http.put(this._url + '/' + id, updatedSection);
        } //[?] (DELETE) delete Section

      }, {
        key: "deleteSection",
        value: function deleteSection(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return CategoriesPageService;
    }();

    CategoriesPageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoriesPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoriesPageService);
    /***/
  },

  /***/
  "./src/app/services/categories.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/categories.service.ts ***!
    \************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CategoriesService =
    /*#__PURE__*/
    function () {
      function CategoriesService(http, router) {
        _classCallCheck(this, CategoriesService);

        this.http = http;
        this.router = router;
        this._url = "http://localhost:3000/api/categories";
      } // [?] (GET) get All Categories


      _createClass(CategoriesService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(this._url);
        } // [?] get Category by :id

      }, {
        key: "getSelectedCategories",
        value: function getSelectedCategories(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Category

      }, {
        key: "createCategories",
        value: function createCategories(newCategory) {
          return this.http.post(this._url, newCategory);
        } // [?] (PUT) udpate Category

      }, {
        key: "updateCategories",
        value: function updateCategories(id, updatedCategory) {
          return this.http.put(this._url + '/' + id, updatedCategory);
        } //[?] (DELETE) delete Category

      }, {
        key: "deleteCategories",
        value: function deleteCategories(id) {
          return this.http.delete(this._url + '/' + id);
        } // [?] check if there is an :id param in the route or not

      }, {
        key: "checkCategoryIDParam",
        value: function checkCategoryIDParam() {
          var paramId = this.router.root.firstChild.snapshot.params['id'];

          if (paramId) {
            // [?] if there is an :id 
            return paramId;
          } else {
            return false;
          }
        } // [#] IMGS

      }, {
        key: "uploadImg",
        value: function uploadImg(img) {
          return this.http.post(this._url + '/img', img);
        }
      }, {
        key: "getUrl",
        value: function getUrl(fileName) {
          return "".concat(this._url, "/img/").concat(fileName);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imgName) {
          return this.http.delete(this._url + '/img/' + imgName);
        } // [?] Redirect imgs coms from input file to asets file

      }, {
        key: "solvImgURL",
        value: function solvImgURL(imgPath) {
          var imgName = imgPath.replace(/.*[\/\\]/, '');
          var solvedPath = imgName;
          if (!imgName) return false;
          return solvedPath;
        }
      }]);

      return CategoriesService;
    }();

    CategoriesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoriesService);
    /***/
  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http, activeRoute) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/contact-page";
      } // [?] (GET) get All Sections


      _createClass(ContactService, [{
        key: "getSections",
        value: function getSections() {
          return this.http.get(this._url);
        } // [?] get Section by :id

      }, {
        key: "getSelectedSection",
        value: function getSelectedSection(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Section

      }, {
        key: "createSection",
        value: function createSection(newSection) {
          return this.http.post(this._url, newSection);
        } // [?] (PUT) udpate Section

      }, {
        key: "updateSection",
        value: function updateSection(id, data) {
          return this.http.put(this._url + '/' + id, data);
        } //[?] (DELETE) delete Section

      }, {
        key: "deleteSection",
        value: function deleteSection(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return ContactService;
    }();

    ContactService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ContactService);
    /***/
  },

  /***/
  "./src/app/services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(http, activeRoute) {
        _classCallCheck(this, HomeService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/home-page";
      } // [?] (GET) get All Sections


      _createClass(HomeService, [{
        key: "getSections",
        value: function getSections() {
          return this.http.get(this._url);
        } // [?] get Section by :id

      }, {
        key: "getSelectedSection",
        value: function getSelectedSection(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Section

      }, {
        key: "createSection",
        value: function createSection(newSection) {
          return this.http.post(this._url, newSection);
        } // [?] (PUT) udpate Section

      }, {
        key: "updateSection",
        value: function updateSection(id, updatedSection) {
          return this.http.put(this._url + '/' + id, updatedSection);
        } //[?] (DELETE) delete Section

      }, {
        key: "deleteSection",
        value: function deleteSection(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeService);
    /***/
  },

  /***/
  "./src/app/services/img-controls.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/img-controls.service.ts ***!
    \**************************************************/

  /*! exports provided: ImgControlsService */

  /***/
  function srcAppServicesImgControlsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgControlsService", function () {
      return ImgControlsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ImgControlsService =
    /*#__PURE__*/
    function () {
      function ImgControlsService(http, activeRoute) {
        _classCallCheck(this, ImgControlsService);

        this.http = http;
        this.activeRoute = activeRoute;
      } // [?] Redirect imgs coms from input file to asets file


      _createClass(ImgControlsService, [{
        key: "solvImgURL",
        value: function solvImgURL(imgPath) {
          var imgName = imgPath.replace(/.*[\/\\]/, '');
          var solvedPath = imgName;
          if (!imgName) return false;
          return solvedPath;
        }
      }, {
        key: "readURL",
        value: function readURL(event) {
          var _this85 = this;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              return _this85.renderedIMG = reader.result;
            };

            reader.readAsDataURL(file);
          }
        } // [?] uplading images

      }, {
        key: "selectImage",
        value: function selectImage(event, inpV) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.imageFile = file; // this.selectedTopic.topic_image = inpV
          }
        }
      }]);

      return ImgControlsService;
    }();

    ImgControlsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ImgControlsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ImgControlsService);
    /***/
  },

  /***/
  "./src/app/services/pages-imgs.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/pages-imgs.service.ts ***!
    \************************************************/

  /*! exports provided: PagesImgsService */

  /***/
  function srcAppServicesPagesImgsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesImgsService", function () {
      return PagesImgsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PagesImgsService =
    /*#__PURE__*/
    function () {
      function PagesImgsService(http, activeRoute) {
        _classCallCheck(this, PagesImgsService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/pages";
      }

      _createClass(PagesImgsService, [{
        key: "uploadImg",
        value: function uploadImg(img) {
          return this.http.post(this._url + '/img', img);
        }
      }, {
        key: "getUrl",
        value: function getUrl(fileName) {
          return "".concat(this._url, "/img/").concat(fileName);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imgName) {
          return this.http.delete(this._url + '/img/' + imgName);
        }
      }]);

      return PagesImgsService;
    }();

    PagesImgsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PagesImgsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PagesImgsService);
    /***/
  },

  /***/
  "./src/app/services/product-page.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/product-page.service.ts ***!
    \**************************************************/

  /*! exports provided: ProductPageService */

  /***/
  function srcAppServicesProductPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageService", function () {
      return ProductPageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductPageService =
    /*#__PURE__*/
    function () {
      function ProductPageService(http, activeRoute) {
        _classCallCheck(this, ProductPageService);

        this.http = http;
        this.activeRoute = activeRoute;
        this._url = "http://localhost:3000/api/product-page";
      } // [?] (GET) get All Sections


      _createClass(ProductPageService, [{
        key: "getSections",
        value: function getSections() {
          return this.http.get(this._url);
        } // [?] get Section by :id

      }, {
        key: "getSelectedSection",
        value: function getSelectedSection(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Section

      }, {
        key: "createSection",
        value: function createSection(newSection) {
          return this.http.post(this._url, newSection);
        } // [?] (PUT) udpate Section

      }, {
        key: "updateSection",
        value: function updateSection(id, updatedSection) {
          return this.http.put(this._url + '/' + id, updatedSection);
        } //[?] (DELETE) delete Section

      }, {
        key: "deleteSection",
        value: function deleteSection(id) {
          return this.http.delete(this._url + '/' + id);
        }
      }]);

      return ProductPageService;
    }();

    ProductPageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductPageService);
    /***/
  },

  /***/
  "./src/app/services/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      // _url = "http://rest.learncode.academy/api/learncode/friends";
      function ProductsService(http, router) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.router = router;
        this._url = "http://localhost:3000/api/products";
      } // [?] (GET) get All products


      _createClass(ProductsService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this._url);
        } // [?] get Product by :id

      }, {
        key: "getSelectedProduct",
        value: function getSelectedProduct(id) {
          return this.http.get(this._url + '/' + id);
        } //[?] (POST) Create Product

      }, {
        key: "createProduct",
        value: function createProduct(newProduct) {
          return this.http.post(this._url, newProduct);
        } // [?] (PUT) udpate product

      }, {
        key: "updateProduct",
        value: function updateProduct(id, updatedProduct) {
          return this.http.put(this._url + '/' + id, updatedProduct);
        } //[?] (DELETE) delete product

      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http.delete(this._url + '/' + id);
        } // [?] check if there is an :id param in the route or not

      }, {
        key: "checkProductIDParam",
        value: function checkProductIDParam() {
          var paramId = this.router.root.firstChild.snapshot.params['id'];

          if (paramId) {
            // [?] if there is an :id 
            return paramId;
          } else {
            return false;
          }
        } // [#] IMGS

      }, {
        key: "uploadImg",
        value: function uploadImg(img) {
          return this.http.post(this._url + '/img', img);
        }
      }, {
        key: "getUrl",
        value: function getUrl(fileName) {
          return "".concat(this._url, "/img/").concat(fileName);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imgName) {
          return this.http.delete(this._url + '/img/' + imgName);
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProductsService);
    /***/
  },

  /***/
  "./src/app/services/va.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/va.service.ts ***!
    \****************************************/

  /*! exports provided: VaService */

  /***/
  function srcAppServicesVaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaService", function () {
      return VaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VaService = function VaService() {
      _classCallCheck(this, VaService);

      this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    };

    VaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VaService);
    /***/
  },

  /***/
  "./src/app/whatsapp-menu/whatsapp-menu.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/whatsapp-menu/whatsapp-menu.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWhatsappMenuWhatsappMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3doYXRzYXBwLW1lbnUvd2hhdHNhcHAtbWVudS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/whatsapp-menu/whatsapp-menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/whatsapp-menu/whatsapp-menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: WhatsappMenuComponent */

  /***/
  function srcAppWhatsappMenuWhatsappMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatsappMenuComponent", function () {
      return WhatsappMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/contact.service */
    "./src/app/services/contact.service.ts");

    var WhatsappMenuComponent =
    /*#__PURE__*/
    function () {
      function WhatsappMenuComponent(contact_service) {
        _classCallCheck(this, WhatsappMenuComponent);

        this.contact_service = contact_service;
      }

      _createClass(WhatsappMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getdata();
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          $('#menuBut').click();
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this86 = this;

          this.contact_service.getSections().subscribe(function (res) {
            _this86.data = res[0].contact_info.socialMedia[5].whatsapp;
          }, function (err) {}, function () {
            _this86.isLoaded = true;
          });
        }
      }]);

      return WhatsappMenuComponent;
    }();

    WhatsappMenuComponent.ctorParameters = function () {
      return [{
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }];
    };

    WhatsappMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-whatsapp-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./whatsapp-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/whatsapp-menu/whatsapp-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./whatsapp-menu.component.css */
      "./src/app/whatsapp-menu/whatsapp-menu.component.css")).default]
    })], WhatsappMenuComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiBaseUrl: 'http://localhost:3000/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/I/0 Life/Work/Real/CodeClub/CC Work/MEAN-CMS/MEAN-CMS/dahab/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map