"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list-clients_list-clients_module_ts"],{

/***/ 32576:
/*!*************************************************************!*\
  !*** ./src/app/list-clients/list-clients-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListClientsPageRoutingModule": () => (/* binding */ ListClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-clients.page */ 55302);




const routes = [
    {
        path: '',
        component: _list_clients_page__WEBPACK_IMPORTED_MODULE_0__.ListClientsPage
    }
];
let ListClientsPageRoutingModule = class ListClientsPageRoutingModule {
};
ListClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListClientsPageRoutingModule);



/***/ }),

/***/ 98086:
/*!*****************************************************!*\
  !*** ./src/app/list-clients/list-clients.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListClientsPageModule": () => (/* binding */ ListClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _list_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-clients-routing.module */ 32576);
/* harmony import */ var _list_clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-clients.page */ 55302);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let ListClientsPageModule = class ListClientsPageModule {
};
ListClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListClientsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_list_clients_page__WEBPACK_IMPORTED_MODULE_1__.ListClientsPage]
    })
], ListClientsPageModule);



/***/ }),

/***/ 55302:
/*!***************************************************!*\
  !*** ./src/app/list-clients/list-clients.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListClientsPage": () => (/* binding */ ListClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-clients.page.html */ 62453);
/* harmony import */ var _list_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-clients.page.scss */ 24866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/services/service.service */ 65868);






let ListClientsPage = class ListClientsPage {
    constructor(servicio, router, activatedRoute) {
        this.servicio = servicio;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.load = false;
        this.res = [];
        this.clients = [];
        this.busc = [];
        this.search = "";
    }
    ngOnInit() {
        // setInterval(() => this. obteneruser(), 15000)
        this.obtenerclient();
        // this.activatedRoute.queryParams.subscribe((params)=>{
        //   this.load = true;
        //   this.busc = params;
        //   console.log(this.busc.search);
        //   if(this.busc.search){
        //     this.Bsearch(this.busc.search);
        //   }else{
        //     this.obtenerclient();
        //   }
        // })
    }
    // se usa para mandar a llamar los clientes que estan activos en la base de datos
    obtenerclient() {
        this.servicio.getobtenerclients().subscribe(res => {
            console.log(res.client);
            this.clients = res.client;
            this.load = false;
        }, error => {
            console.log(error);
        });
    }
};
ListClientsPage.ctorParameters = () => [
    { type: _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ListClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-list-clients',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_clients_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListClientsPage);



/***/ }),

/***/ 62453:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/list-clients/list-clients.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"loading show\" *ngIf=\"load\">\n  <div class=\"spin\"></div>\n  \n</div>\n\n<ion-header>\n  <ion-toolbar>\n    <app-navbar></app-navbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row animated fadeIn fast\" *ngIf=\"clients.length == 0\">\n    <div class=\"col-md-12\">\n      <div class=\"alert alert-info\" role=\"alert\">\n        No existen resultados con el termino: {{ this.busc.search }}\n      </div>\n    </div>\n  </div>\n  <ion-list>\n    <app-card-client (userSeleccionado)=\"verUser( $event )\" [clients]=\"foo\" [indexc]=\"i\" *ngFor=\"let foo of clients; let i = index\"></app-card-client>\n\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" [routerLink]=\"['/registroclients'] \"> </ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- \n  <ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title>Footer - No Border</ion-title>\n    </ion-toolbar>\n  </ion-footer> -->\n</ion-content>\n\n<style>\n  .loading {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 9999;\n      transition: 1s all;\n      opacity: 0;\n  }\n\n  .loading.show {\n      opacity: 1;\n  }\n\n  .loading .spin {\n      border: 3px solid hsla(185, 100%, 62%, 0.2);\n      border-top-color: #3cefff;\n      border-radius: 50%;\n      width: 3em;\n      height: 3em;\n      animation: spin 1s linear infinite;\n  }\n\n  @keyframes spin {\n      to {\n          transform: rotate(360deg);\n      }\n  }\n</style>\n\n\n\n");

/***/ }),

/***/ 24866:
/*!*****************************************************!*\
  !*** ./src/app/list-clients/list-clients.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNsaWVudHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_list-clients_list-clients_module_ts.js.map