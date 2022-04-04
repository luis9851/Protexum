"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pase-lista_pase-lista_module_ts"],{

/***/ 75331:
/*!*********************************************************!*\
  !*** ./src/app/pase-lista/pase-lista-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaseListaPageRoutingModule": () => (/* binding */ PaseListaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pase_lista_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pase-lista.page */ 57213);




const routes = [
    {
        path: '',
        component: _pase_lista_page__WEBPACK_IMPORTED_MODULE_0__.PaseListaPage
    }
];
let PaseListaPageRoutingModule = class PaseListaPageRoutingModule {
};
PaseListaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaseListaPageRoutingModule);



/***/ }),

/***/ 78925:
/*!*************************************************!*\
  !*** ./src/app/pase-lista/pase-lista.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaseListaPageModule": () => (/* binding */ PaseListaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pase_lista_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pase-lista-routing.module */ 75331);
/* harmony import */ var _pase_lista_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pase-lista.page */ 57213);







let PaseListaPageModule = class PaseListaPageModule {
};
PaseListaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pase_lista_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaseListaPageRoutingModule
        ],
        declarations: [_pase_lista_page__WEBPACK_IMPORTED_MODULE_1__.PaseListaPage]
    })
], PaseListaPageModule);



/***/ }),

/***/ 57213:
/*!***********************************************!*\
  !*** ./src/app/pase-lista/pase-lista.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaseListaPage": () => (/* binding */ PaseListaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pase_lista_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pase-lista.page.html */ 43220);
/* harmony import */ var _pase_lista_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pase-lista.page.scss */ 84495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let PaseListaPage = class PaseListaPage {
    constructor() { }
    ngOnInit() {
    }
};
PaseListaPage.ctorParameters = () => [];
PaseListaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pase-lista',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pase_lista_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pase_lista_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaseListaPage);



/***/ }),

/***/ 43220:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pase-lista/pase-lista.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>pase-lista</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 84495:
/*!*************************************************!*\
  !*** ./src/app/pase-lista/pase-lista.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNlLWxpc3RhLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pase-lista_pase-lista_module_ts.js.map