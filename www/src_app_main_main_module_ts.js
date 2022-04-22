"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 15471:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 48937);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 74261:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 15471);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 48937);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 48937:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main.page.html */ 60328);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 87379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/services/service.service */ 65868);






let MainPage = class MainPage {
    constructor(servicio, router, activatedRoute) {
        this.servicio = servicio;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // recuerden que si le mueven documenten el para saber para que sirven las cosas
        this.load = false;
        this.res = [];
        this.users = [];
        this.busc = [];
        this.search = "";
    }
    // obtener los usuario
    ngOnInit() {
        // setInterval(() => this. obteneruser(), 15000)
        this.activatedRoute.queryParams.subscribe((params) => {
            this.load = true;
            this.busc = params;
            console.log(this.busc.search);
            if (this.busc.search) {
                this.Bsearch(this.busc.search);
            }
            else {
                this.obteneruser();
            }
        });
    }
    // se usa para mandar a llamar los usuarios que estan activos en la base de datos
    obteneruser() {
        this.servicio.getobtener().subscribe(res => {
            console.log(res.user);
            this.users = res.user;
            this.load = false;
        }, error => {
            console.log(error);
        });
    }
    //
    Bsearch(sea) {
        this.servicio.getSearch(sea).subscribe(res => {
            console.log(res.user);
            this.users = res.user;
            this.load = false;
        }, error => {
            console.log(error);
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-main',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 60328:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/main/main.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"loading show\" *ngIf=\"load\">\r\n  <div class=\"spin\"></div>\r\n  \r\n</div>\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <app-navbar></app-navbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"row animated fadeIn fast\" *ngIf=\"users.length == 0\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"alert alert-info\" role=\"alert\">\r\n        No existen resultados con el termino: {{ this.busc.search }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-list>\r\n    <app-card-user (userSeleccionado)=\"verUser( $event )\" [users]= \"foo\" [index]=\"i\" *ngFor=\"let foo of users; let i = index\"></app-card-user>\r\n\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\" [routerLink]=\"['/registropersonal'] \"> </ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- \r\n  <ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-title>Footer - No Border</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer> -->\r\n</ion-content>\r\n\r\n<style>\r\n  .loading {\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      background-color: white;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      z-index: 9999;\r\n      transition: 1s all;\r\n      opacity: 0;\r\n  }\r\n\r\n  .loading.show {\r\n      opacity: 1;\r\n  }\r\n\r\n  .loading .spin {\r\n      border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n      border-top-color: #3cefff;\r\n      border-radius: 50%;\r\n      width: 3em;\r\n      height: 3em;\r\n      animation: spin 1s linear infinite;\r\n  }\r\n\r\n  @keyframes spin {\r\n      to {\r\n          transform: rotate(360deg);\r\n      }\r\n  }\r\n</style>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 87379:
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map