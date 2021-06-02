(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n  <div class=\"push\"></div>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"about\" class=\"body-content\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"container\">\n    <div class=\"columns\" style=\"padding-right: 10px;\">\n      <div class=\"column is-one-fifth\">\n        <figure class=\"image\">\n          <img class=\"is-rounded\" src=\"assets/images/profile.jpg\" />\n        </figure>\n      </div>\n      <div class=\"column\" id=\"about-text\">\n        <p class=\"title\">I'm Sam — a Sacramento-based software engineer.</p>\n        <p>\n          I currently work at SemanticBits, where I build software to improve how\n          thousands of health care providers manage and analyze patient data. In\n          2019, I graduated from University of California, Davis with a BS in\n          Computer Science; while there, I led an on-campus organization, #include, built\n          around fostering a community of undergraduate web developers.\n        </p>\n        <p id='projects-link'>\n          Some of my past and current projects can be found over \n          <a routerLink=\"../projects\" class=\"underline\">here</a>, as well as my\n          GitHub and LinkedIn down below.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"experience\" class=\"body-content\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"columns\">\n    <div class=\"column\">\n      <app-projectcard\n        [imgSrc]=\"'assets/images/sb.png'\"\n        [title]=\"'SemanticBits'\"\n        subtitle=\"Software Engineer<br>November 2020 - Present<br>Remote\"\n        description='<ul>\n            <li>Design and implement production-scale ETL solutions for healthcare data using Python, Airflow, Docker, PostgreSQL, and AWS DMS</li>           \n            <li>Maintain and contribute new features to several Node.js microservices and a React.js frontend</li>\n          </ul>'\n        >\n      </app-projectcard>\n    </div>\n    <div class=\"column\">      \n      <app-projectcard\n        [imgSrc]=\"'assets/images/ecointeractive.png'\"\n        [title]=\"'EcoInteractive'\"\n        subtitle=\"Software Developer<br>July 2019 - November 2020<br>Davis, CA\"\n        description='<ul>\n            <li>Completed enhancements and bugfixes on a multi-tenant web application used by government agencies in management of infrastructure and transportation projects.</li>           \n            <li>Frequently led discussions and carried out code-first implementation of data models</li>\n            <li>Utilized the following development tools:\n              <ul>\n                <li>Current stack: React, TypeScript, C#, .NET Core, EF Core, PostgreSQL, Docker, AWS</li>\n                <li>Legacy stack: ASP Classic, JavaScript, JQuery, Oracle, PowerShell, IIS</li>\n              </ul>\n            </li>\n          </ul>'\n        >\n      </app-projectcard>\n    </div>\n    <div class=\"column\">\n      <app-projectcard\n        [imgSrc]=\"'assets/images/plantsciences.png'\"\n        [title]=\"'UC Davis'\"\n        subtitle=\"Junior Web Developer<br>October 2018 - July 2019<br>Davis, CA\"\n        description='<ul>\n            <li>Migrated legacy ASP.NET university administrator web app to a .NET core MVC solution.</li>\n            <li>Adhered to design guidelines and client specifications to create websites for staff using Drupal.</li>\n            <li>Associated technologies: HTML, CSS, JavaScript, JQuery, Bootstrap, SQL Server, .NET, MVC.</li>\n          </ul>'\n      ></app-projectcard>\n    </div>\n    <div class=\"column\">\n      <app-projectcard\n        [imgSrc]=\"'assets/images/powerschool.png'\"\n        [title]=\"'Powerschool'\"\n        subtitle=\"Software Engineering Intern<br>June 2018 - Sep. 2018<br>Chico, CA\"\n        description='<ul>\n              <li>Assisted in enhancing and maintaining PowerSchool’s accounting software, BusinessPlus. Worked on a team of 5 in an Agile/Scrum development cycle.</li>\n              <li>Project and Tasks:\n                <ul>\n                  <li>UI redesign (SASS/LESS/Kendo Framework)</li>\n                  <li>General functionality improvements (Angular 4, RxJS, C#, C++)</li>\n                  <li>Front-end unit testing (Java, Selenide Testing Framework)</li>\n                </ul>\n              </li>\n            </ul>'\n      ></app-projectcard>\n    </div>\n    <div class=\"column\">\n      <app-projectcard\n        [imgSrc]=\"'assets/images/renlylogo.png'\"\n        [title]=\"'Renly'\"\n        subtitle=\"Web Development Intern<br>June 2017 - Sep. 2017<br>Carson, CA\"\n        description='<ul>\n              <li>Collaborated on a team of 4 to build search pages, web scrapers, and browser-based image galleries using .NET, JavaScript, HTML, CSS, and SQL.</li>\n              <li>Additional tasks: query optimizations, Google Maps API integration, and manual QA testing.</li>\n            </ul>'\n      ></app-projectcard>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"content\" id=\"footer-content\">\n    <div class=\"columns has-text-centered is-centered\">\n      <div class=\"column is-one-third footer-icon is-dark\">\n        <a href=\"https://www.instagram.com/srcwaters/\" target=\"_blank\"><img src=\"assets/images/instagram.png\" alt=\"Instagram: @srcwaters\"></a>\n      </div>\n      <div class=\"column is-one-third footer-icon\">\n        <a href=\"https://github.com/samrcwaters\" target=\"_blank\"><img id=\"github-img\" src=\"assets/images/github.png\" alt=\"Github: @samrcwaters\"></a>\n      </div>\n      <div class=\"column is-one-third footer-icon\">\n        <a href=\"https://www.linkedin.com/in/samuel-waters-4509a1115/\" target=\"_blank\"><img class='footer-icon-img' src=\"assets/images/linkedin.png\" alt=\"Linkedin: Samuel Waters\"></a>\n      </div>\n      </div>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hero is-info is-medium\" id=\"hero\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"hero-body\" id=\"hero-body\">\n    <app-about></app-about>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\" role=\"navigation\" id=\"navbar\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" id=\"logo\">\n      <h1>sam waters</h1>\n    </a>\n    <a\n      role=\"button\"\n      class=\"navbar-burger burger\"\n      aria-label=\"menu\"\n      aria-expanded=\"false\"\n      data-target=\"portfolioNav\"\n      (click)=\"toggleNav()\"\n      [ngClass]=\"{'is-active': expandedNav}\"\n    >\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n  <div class=\"navbar-menu\" id=\"portfolioNav\" [ngClass]=\"{'is-active': expandedNav}\">\n    <div class=\"navbar-end\">\n      <a\n        class=\"navbar-item\"\n        routerLink=\"../\"\n        [ngClass]=\"{ 'red-bt-bdr': activeTab === 'about' }\"\n        (click)=\"setActiveTab($event.target.innerText)\"\n        >about</a\n      >\n      <a\n        class=\"navbar-item\"\n        routerLink=\"../experience\"\n        [ngClass]=\"{ 'red-bt-bdr': activeTab === 'experience' }\"\n        (click)=\"setActiveTab($event.target.innerText)\"\n        >experience</a\n      >\n      <a\n        class=\"navbar-item\"\n        routerLink=\"../projects\"\n        [ngClass]=\"{ 'red-bt-bdr': activeTab === 'projects' }\"\n        (click)=\"setActiveTab($event.target.innerText)\"\n        >projects</a\n      >\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projectcard/projectcard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projectcard/projectcard.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-image\">\n    <figure class=\"image\">\n      <img src={{imgSrc}}>\n    </figure>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"media\">\n      <div class=\"media-content\">\n        <p class=\"title is-4\">{{title}}</p>\n        <p class=\"subtitle is-6\" [innerHTML]=\"subtitle\"></p>\n      </div>\n    </div>\n    <div class=\"content\" [innerHTML]=\"description\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"projects\" class=\"body-content tp-pad\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"container\" *ngIf=\"projects\">\n    <div class=\"columns is-multiline\">\n      <div *ngFor=\"let p of projects; let i=index\" class=\"column is-one-third\">\n        <app-projectcard\n          imgSrc={{p.imgSrc}}\n          title={{p.title}}\n          subtitle={{p.subtitle}}\n          description={{p.description}}\n        >\n        </app-projectcard>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'srcw-portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/projectcard/projectcard.component */ "./src/app/components/projectcard/projectcard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
                _components_projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_11__["ProjectcardComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about-text {\n  border-bottom: 12px solid black; \n  margin: 10px;\n}\n\n#projects-link {\n  padding-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCBibGFjazsgXG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RzLWxpbmsge1xuICBwYWRkaW5nLXRvcDogMmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.navLinkClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "navLinkClicked", void 0);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __importDefault(__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\n  display: inline-block;\n\tmargin: 0 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7Q0FDdEIsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAwIDRweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  max-width: 70%;\n  text-align: right;\n  font-size: 300%;\n  border-right: 12px solid red;\n}\n\n@media only screen and (min-width: 487px) {\n  #logo {\n    max-width: 40%;\n  }\n}\n\n@media only screen and (min-width: 730px) {\n  #logo {\n    max-width: 30%;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  #logo {\n    max-width: 70%;\n  }\n}\n\n.navbar-end a:hover {\n  border-bottom: 12px solid red;\n  margin-bottom: -12px;\n}\n\n.red-bt-bdr {\n  border-bottom: 12px solid red;\n  margin-bottom: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHJlZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODdweCkge1xuICAjbG9nbyB7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzBweCkge1xuICAjbG9nbyB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgI2xvZ28ge1xuICAgIG1heC13aWR0aDogNzAlO1xuICB9XG59XG5cbi5uYXZiYXItZW5kIGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHJlZDtcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG59XG5cbi5yZWQtYnQtYmRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.activeTab = "about";
        this.expandedNav = false;
        this.setActiveTab(this.getActiveTab());
    }
    NavbarComponent.prototype.getActiveTab = function () {
        return new URL(window.location.href).hash.substring(2);
    };
    NavbarComponent.prototype.setActiveTab = function (activeTab) {
        this.activeTab = activeTab;
    };
    NavbarComponent.prototype.toggleNav = function () {
        this.expandedNav = !this.expandedNav;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/projectcard/projectcard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/projectcard/projectcard.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: -9px 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBib3gtc2hhZG93OiAtOXB4IDlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/projectcard/projectcard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/projectcard/projectcard.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectcardComponent", function() { return ProjectcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProjectcardComponent = /** @class */ (function () {
    function ProjectcardComponent() {
    }
    ProjectcardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectcardComponent.prototype, "imgSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectcardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectcardComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectcardComponent.prototype, "description", void 0);
    ProjectcardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectcard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projectcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projectcard/projectcard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./projectcard.component.css */ "./src/app/components/projectcard/projectcard.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectcardComponent);
    return ProjectcardComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/projects.json */ "./src/assets/data/projects.json");
var _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/projects.json */ "./src/assets/data/projects.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_2__.projects;
        console.log(this.projects);
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('simpleFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/assets/data/projects.json":
/*!***************************************!*\
  !*** ./src/assets/data/projects.json ***!
  \***************************************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"imgSrc\":\"assets/images/rs_home.png\",\"title\":\"RowStream\",\"subtitle\":\"React Native / Node.js / TypeScript / ElasticSearch\",\"description\":\"Mobile application to track rowing data and remotely collaborate with other rowers\"},{\"imgSrc\":\"assets/images/ca.png\",\"title\":\"Challonger Approaching\",\"subtitle\":\"Angular 8 / Node.js / Challonge API\",\"description\":\"Data aggregation web application built to help track long-term tournament results/rankings (primarily intended for Super Smash Bros. Melee). Try it out over <a href='https://challonger-approaching.herokuapp.com/'>here</a>!\"},{\"imgSrc\":\"assets/images/PosterLowRes.png\",\"title\":\"Senior Design Project: Speech Prep Pal\",\"subtitle\":\"Java / Android SDK / Google Cloud Platform APIs\",\"description\":\"Worked on a team of 4 (plus 2 Google mentors) to develop an Android application aimed at honing a user’s speaking patterns through machine learning technology. Features include: video recording and playback, script accuracy detection through GCP speech-to-text API and Google’s Diff-Match-Patch API.\"},{\"imgSrc\":\"assets/images/wea.png\",\"title\":\"Where's Everybody At?'\",\"subtitle\":\"Angular 7 / Firebase / Heroku\",\"description\":\"Worked on a team of 3 to create a lightweight web application to create/join current study groups around campus. As this was our final for a course in human computer interaction, we developed this project with an emphasis on user-centered design and iterated on our prototype throughout several rounds of user feedback/testing.\"},{\"imgSrc\":\"assets/images/warcraft2.png\",\"title\":\"Warcraft II Website\",\"subtitle\":\"Angular 7 / Node.js / MongoDB\",\"description\":\"Quarter-long, team-based project for ECS160: Software Engineering. Features implemented: JWT-based user authentication, real-time messaging system using Socket.io and RxJS, map rendering, file uploads/downloads,friends system, and email verification.\"},{\"imgSrc\":\"assets/images/newSudoku.png\",\"title\":\"Sudoku Puzzle Generator/Solver\",\"subtitle\":\"HTML / CSS / JavaScript\",\"description\":\"Random sudoku puzzle generator and solver utilizing a simple recursive algorithm. Check it out <a href='https://samrcwaters.github.io/sudoku/'>here</a>.\"}]}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samwaters/Development/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map