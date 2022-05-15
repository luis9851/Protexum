"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_equiporecibido_equiporecibido_module_ts"],{

/***/ 47717:
/*!*****************************************************************!*\
  !*** ./src/app/equiporecibido/equiporecibido-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiporecibidoPageRoutingModule": () => (/* binding */ EquiporecibidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _equiporecibido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equiporecibido.page */ 77761);




const routes = [
    {
        path: '',
        component: _equiporecibido_page__WEBPACK_IMPORTED_MODULE_0__.EquiporecibidoPage
    }
];
let EquiporecibidoPageRoutingModule = class EquiporecibidoPageRoutingModule {
};
EquiporecibidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EquiporecibidoPageRoutingModule);



/***/ }),

/***/ 52877:
/*!*********************************************************!*\
  !*** ./src/app/equiporecibido/equiporecibido.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiporecibidoPageModule": () => (/* binding */ EquiporecibidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _equiporecibido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equiporecibido-routing.module */ 47717);
/* harmony import */ var _equiporecibido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equiporecibido.page */ 77761);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let EquiporecibidoPageModule = class EquiporecibidoPageModule {
};
EquiporecibidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _equiporecibido_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquiporecibidoPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_equiporecibido_page__WEBPACK_IMPORTED_MODULE_1__.EquiporecibidoPage]
    })
], EquiporecibidoPageModule);



/***/ }),

/***/ 77761:
/*!*******************************************************!*\
  !*** ./src/app/equiporecibido/equiporecibido.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiporecibidoPage": () => (/* binding */ EquiporecibidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_equiporecibido_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./equiporecibido.page.html */ 10293);
/* harmony import */ var _equiporecibido_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equiporecibido.page.scss */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_equipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/equipo.service */ 5011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);







let EquiporecibidoPage = class EquiporecibidoPage {
    constructor(servicio, toast, activateRoute, router) {
        this.servicio = servicio;
        this.toast = toast;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
    }
    Register(form) {
        console.log(form);
        if (form.value.celular == "" || form.value.radio == "" || form.value.lamparas == "" ||
            form.value.dcelular == "" || form.value.dradio == "" || form.value.dlamparas == "" ||
            form.value.fornitura == "" || form.value.tonfa == "" || form.value.gas == "" || form.value.teaser == "" ||
            form.value.dfornitura == "" || form.value.dtonfa == "" || form.value.dgas == "" || form.value.dteaser == "" ||
            form.value.impermeable == "" || form.value.espejoderevision == "" || form.value.detectordemetales == "" || form.value.mazo == "" ||
            form.value.dimpermeable == "" || form.value.despejoderevision == "" || form.value.ddetectordemetales == "" || form.value.dmazo == "" ||
            form.value.botasimpermeables == "" || form.value.bicicleta == "" || form.value.patrulla == "" || form.value.rondinero == "" ||
            form.value.dbotasimpermeables == "" || form.value.dbicicleta == "" || form.value.dpatrulla == "" || form.value.drondinero == "") {
            this.FaltanDatos();
        }
        else {
            // los datos de el equipo
            this.servicio.registerE(this.id, form.value).subscribe((res => {
                this.exito();
                console.log(res.dataEquip);
                this.agregaridenequipo(res.dataEquip.id);
                this.router.navigate(['/list-clients']);
            }));
        }
    }
    agregaridenequipo(idservicio) {
        this.servicio.actualizarIdUsuario(this.id, idservicio).subscribe((res => {
            console.log(res);
        }));
    }
    exito() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "El registro fue exitoso",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    FaltanDatos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "Por Favor llena todos los datos",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
EquiporecibidoPage.ctorParameters = () => [
    { type: _service_equipo_service__WEBPACK_IMPORTED_MODULE_2__.EquipoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
EquiporecibidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-equiporecibido',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_equiporecibido_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_equiporecibido_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EquiporecibidoPage);



/***/ }),

/***/ 5011:
/*!*******************************************!*\
  !*** ./src/app/service/equipo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipoService": () => (/* binding */ EquipoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9500);





let EquipoService = class EquipoService {
    constructor(http) {
        this.http = http;
        this.AUTH_SERVER = '/admin';
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        else {
            console.error(`Error status: ${error.status}, error: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)('Hubo un error en la aplicacion. Verificar logs');
    }
    // registrar Equipo
    registerE(id, equip) {
        return this.http.put(`${this.AUTH_SERVER}/api/registerequips/${id}`, equip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
            if (res) {
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // para agregar el id de equipo y ponerselo al servicio
    actualizarIdUsuario(id, idservicio) {
        return this.http.put(`${this.AUTH_SERVER}/api/idimage/idservicio/${id}`, { equiporecibido: idservicio }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
};
EquipoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
EquipoService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EquipoService);



/***/ }),

/***/ 10293:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/equiporecibido/equiporecibido.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <app-navbar></app-navbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login\" style=\"position: absolute;width: 100%; height: auto;\">\r\n    <main>\r\n      <h2 class=\"login-header\">Agrega el Equipo que le entregaras a tu Guardia</h2>\r\n  \r\n    <form #frmRegister=\"ngForm\" class=\"formulario\" (ngSubmit)=\"Register(frmRegister)\">\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de Celulares </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"celular\" placeholder=\"Celular\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dcelular\" placeholder=\"Descripcion Celular\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de radio </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"radio\" placeholder=\"Radio\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dradio\" placeholder=\"Descripcion Radio\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de lamparas </ion-label>\r\n          <p><ion-input class=\"formulario__input \" type=\"text\" name=\"lamparas\" placeholder=\"Lamparas\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input \" type=\"text\" name=\"dlamparas\" placeholder=\"Descripcion Lamparas\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de fornitura </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"fornitura\" placeholder=\"Fornitura\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dfornitura\" placeholder=\"Descripcion Fornitura\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de tonfa </ion-label>\r\n          <p><ion-input class=\"formulario__input \" type=\"text\" name=\"tonfa\" placeholder=\"Tonfa\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input \" type=\"text\" name=\"dtonfa\" placeholder=\"Descripcion Tonfa\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de gas </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"gas\" placeholder=\"Gas\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dgas\" placeholder=\"Descripcion Gas\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de teaser </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"teaser\" placeholder=\"Teaser\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n         \r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dteaser\" placeholder=\"Descripcion Teaser\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de impermeable </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"impermeable\" placeholder=\"Impermeable\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          \r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dimpermeable\" placeholder=\"Descripcion Impermeable\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de espejo de revision </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"espejoderevision\" placeholder=\"Espejo de revision\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"despejoderevision\" placeholder=\"Descripcion Espejo de revision\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de detector de metales </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"detectordemetales\" placeholder=\"Detector de metales\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"ddetectordemetales\" placeholder=\"Descripcion Detector de metales\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de mazo </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"mazo\" placeholder=\"Mazo\" ngModel required=\"\" > </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dmazo\" placeholder=\"Descripcion Mazo\" ngModel required=\"\" > </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de botas impermeables </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"botasimpermeables\" placeholder=\"botas impermeables\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dbotasimpermeables\" placeholder=\"Descripcion botas impermeables\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de bicicleta </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"bicicleta\" placeholder=\"Bicicleta\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dbicicleta\" placeholder=\"Descripcion Bicicleta\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de patrulla </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"patrulla\" placeholder=\"Patrulla\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"dpatrulla\" placeholder=\"Descripcion Patrulla\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n     \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de rondinero </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"rondinero\" placeholder=\"Rondinero\" ngModel required> </ion-input></p>\r\n        </div> \r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"drondinero\" placeholder=\"Descripcion Rondinero\" ngModel required> </ion-input></p>\r\n        </div> \r\n      </div>\r\n      \r\n      <p><input class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #000000; color: #FFFFFF;\" type=\"submit\" value=\"Registrar\"> </p>\r\n    </form>\r\n  </main>\r\n   \r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n\r\n  ");

/***/ }),

/***/ 9151:
/*!*********************************************************!*\
  !*** ./src/app/equiporecibido/equiporecibido.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\n/* body {\n  background: #456;\n  font-family: 'Open Sans', sans-serif;\n} */\n.login {\n  width: auto;\n  margin: 16px auto;\n  font-size: 16px;\n}\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #28d;\n}\n.login-header {\n  background: #FED03D;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  height: 100%;\n}\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #28d;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n.login input[type=submit]:focus {\n  border-color: #05a;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 0px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    background-color: #FFFFFF;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/* CSS de prueba */\nmain {\n  max-width: 800px;\n  width: 90%;\n  margin: auto;\n  padding: 0px;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  background-color: #e4e4e4;\n}\n.formulario__label {\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n}\n.formulario__grupo-input {\n  position: relative;\n}\n.formulario__input {\n  width: 100%;\n  /* background: #E5E5E5; */\n  background: #FFFFFF;\n  border: 3px solid transparent;\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n.formulario__input:focus {\n  border: 3px solid #0075FF;\n  outline: none;\n  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n}\n.formulario__input-error {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n.formulario__input-error-activo {\n  display: block;\n}\n.formulario__validacion-estado {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n}\n.formulario__checkbox {\n  margin-right: 10px;\n}\n.formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n  grid-column: span 2;\n}\n.formulario__mensaje {\n  height: 45px;\n  line-height: 45px;\n  background: #F66060;\n  padding: 0 15px;\n  border-radius: 3px;\n  display: none;\n}\n.formulario__mensaje-activo {\n  display: block;\n}\n.formulario__mensaje p {\n  margin: 0;\n}\n.formulario__grupo-btn-enviar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.formulario__grupo-btn-regresar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100% !important;\n}\n.formulario__btn {\n  height: 45px;\n  line-height: 45px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n}\n.formulario__btn:hover:not([disabled]) {\n  box-shadow: 3px 0px 30px #f04400;\n}\n.formulario__mensaje-exito {\n  font-size: 14px;\n  color: #119200;\n  display: none;\n}\n.formulario__mensaje-exito-activo {\n  display: block;\n}\n/* ----- -----  Estilos para Validacion ----- ----- */\n.formulario__grupo-correcto .formulario__validacion-estado {\n  color: #1ed12d;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__label {\n  color: #bb2929;\n}\n.formulario__grupo-incorrecto .formulario__validacion-estado {\n  color: #bb2929;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__input {\n  border: 3px solid #bb2929;\n}\n/* ----- -----  Mediaqueries ----- ----- */\n@media screen and (max-width: 992px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n\n  .formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n    grid-column: 1;\n  }\n\n  .formulario__btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwb3JlY2liaWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBcUJRLHNFQUFBO0FBckJSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQW9CQSx1Q0FBQTtBQUdBOzs7R0FBQTtBQUtBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBTUE7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFPQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUpGO0FBUUE7RUFDRSxhQUFBO0FBTEY7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBTEY7QUFRQTs7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxGO0FBU0E7O0VBRUUsa0JBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0FBTkY7QUFVQTtFQUNFLGtCQUFBO0FBUEY7QUFXQTtFQUVFLHlCQUFBO0FBVEY7QUFZQSxpQkFBQTtBQUNBO0VBQ0Usb0JBQUE7QUFURjtBQVlBO0VBQ0UsZUFBQTtBQVRGO0FBWUE7RUFDSSxZQUFBO0FBVEo7QUFlQSxnQkFBQTtBQUNBO0VBRUUsc0JBQUE7RUFFQSx5QkFBQTtBQVpGO0FBZUE7RUFFRSx3QkFBQTtFQUVBLHlCQUFBO0FBWkY7QUFlQTtFQUNFO0lBQ0UsVUFBQTtFQVpGO0VBZUE7SUFDRSxVQUFBO0VBYkY7QUFDRjtBQWdCQTtFQUNFLHNCQUFBO0FBZEY7QUFpQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxjQUFBO0FBZEY7QUFnQkE7RUFDRTtJQUNFLGdCQUFBO0VBYkY7O0VBZUE7SUFDRSxVQUFBO0lBQ0EseUJBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFFRSwrQkFBQTtFQVpKO0FBQ0Y7QUFlQSxrQkFBQTtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFiRDtBQWdCQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0MseUJBQUE7QUFiRjtBQWdCQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBYkQ7QUFnQkE7RUFDQyxrQkFBQTtBQWJEO0FBaUJBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWREO0FBaUJBO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFkRDtBQWlCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFkRDtBQWlCQTtFQUNDLGNBQUE7QUFkRDtBQWlCQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFkRDtBQWlCQTtFQUNDLGtCQUFBO0FBZEQ7QUFpQkE7Ozs7RUFJQyxtQkFBQTtBQWREO0FBaUJBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZEQ7QUFpQkE7RUFDQyxjQUFBO0FBZEQ7QUFpQkE7RUFDQyxTQUFBO0FBZEQ7QUFpQkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWREO0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWJEO0FBZ0JBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBYkQ7QUFnQkE7RUFDQyxnQ0FBQTtBQWJEO0FBZ0JBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0FBYkQ7QUFnQkEscURBQUE7QUFDQTtFQUNDLGNBQUE7RUFDQSxVQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQWJEO0FBZ0JBO0VBQ0MseUJBQUE7QUFiRDtBQWtCQSwwQ0FBQTtBQUNBO0VBQ0M7SUFDQywwQkFBQTtFQWZBOztFQWtCRDs7OztJQUlDLGNBQUE7RUFmQTs7RUFrQkQ7SUFDQyxXQUFBO0VBZkE7QUFDRiIsImZpbGUiOiJlcXVpcG9yZWNpYmlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogMDEvMjgvMjAxNlxyXG4gKiBUaGlzIHBlbiBpcyB5ZWFycyBvbGQsIGFuZCB3YXRjaGluZyBhdCB0aGUgY29kZSBhZnRlciBhbGxcclxuICogdGhvc2UgeWVhcnMgbWFkZSBtZSBmYWxsIGZyb20gbXkgY2hhaXIsIHNvIEk6XHJcbiAqIC0gY2hhbmdlZCBhbGwgSURzIHRvIGNsYXNzZXNcclxuICogLSBjb252ZXJ0ZWQgYWxsIHVuaXRzIHRvIHBpeGVscyBhbmQgZW0gdW5pdHNcclxuICogLSBjaGFuZ2VkIGFsbCBnbG9iYWwgZWxlbWVudHMgdG8gY2xhc3NlcyBvciBjaGlsZHJlbiBvZlxyXG4gKiAgIC5sb2dpblxyXG4gKiAtIGNsZWFuZWQgdGhlIHN5bnRheCB0byBiZSBtb3JlIGNvbnNpc3RlbnRcclxuICogLSBhZGRlZCBhIGxvdCBvZiBzcGFjZXMgdGhhdCBJIHNvIGhhcmQgdHJpZWQgdG8gYXZvaWRcclxuICogICBhIGZldyB5ZWFycyBhZ29cclxuICogICAoYmVjYXVzZSBpdCdzIGNvb2wgdG8gbm90IHVzZSB0aGVtKVxyXG4gKiAtIGFuZCBwcm9iYWJseSBzb21ldGhpbmcgZWxzZSB0aGF0IEkgY2FuJ3QgcmVtZW1iZXIgYW55bW9yZVxyXG4gKlxyXG4gKiBJIHN0aWNrZWQgdG8gdGhlIHNhbWUgcGhpbG9zb3BoeSwgbWVhbmluZzpcclxuICogLSB0aGUgZGVzaWduIGlzIGFsbW9zdCB0aGUgc2FtZVxyXG4gKiAtIG9ubHkgcHVyZSBIVE1MIGFuZCBDU1NcclxuICogLSBubyBmcmFtZXdvcmtzLCBwcmVwcm9jZXNzb3JzIG9yIHJlc2V0c1xyXG4gKi9cclxuXHJcbi8qICdPcGVuIFNhbnMnIGZvbnQgZnJvbSBHb29nbGUgRm9udHMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcclxuXHJcbi8qIGJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICM0NTY7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59ICovXHJcblxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLy8gUmVzZXQgdG9wIGFuZCBib3R0b20gbWFyZ2lucyBmcm9tIGNlcnRhaW4gZWxlbWVudHNcclxuLmxvZ2luLWhlYWRlcixcclxuLmxvZ2luIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLy8gVGhlIHRyaWFuZ2xlIGZvcm0gaXMgYWNoaWV2ZWQgYnkgYSBDU1MgaGFjayBcclxuLmxvZ2luLXRyaWFuZ2xlIHtcclxuICB3aWR0aDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyOGQ7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRUQwM0Q7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi8vIEV2ZXJ5IHJvdyBpbnNpZGUgLmxvZ2luLWNvbnRhaW5lciBpcyBkZWZpbmVkIHdpdGggcCB0YWdzIFxyXG4ubG9naW4gcCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLy8gVGV4dCBmaWVsZHMnIGZvY3VzIGVmZmVjdCBcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogIzI4ZDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2M7XHJcbn1cclxuXHJcbi8vIEJ1dHRvbnMnIGZvY3VzIGVmZmVjdCBcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzA1YTtcclxufVxyXG5cclxuXHJcbi5tYXl1c2N1bGFze1xyXG4gIC8vIGVzIHBhcmEgaGFjZXIgbGFzIGxldHJhcyBtYXl1c2N1bGFzIGVuIGN1cnAgXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLyogTmF2YmFyIGxvZ2luICovXHJcbmJvZHl7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5pbWctbG9nb3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogQW5pbWFjaW9uZXMgKi9cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXRze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gIH1cclxuICAubG9naW4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYigwLCAwLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLyogQ1NTIGRlIHBydWViYSAqL1xyXG5tYWluIHtcclxuXHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm11bGFyaW8ge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cdGdhcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbGFiZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbnB1dCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiBiYWNrZ3JvdW5kOiAjRTVFNUU1OyAqL1xyXG5cdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRwYWRkaW5nOiAwIDQwcHggMCAxMHB4O1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0OmZvY3VzIHtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjMDA3NUZGO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogM3B4IDBweCAzMHB4IHJnYmEoMTYzLDE2MywxNjMsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19pbnB1dC1lcnJvciB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0LWVycm9yLWFjdGl2byB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG5cdGJvdHRvbTogMTVweDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19jaGVja2JveCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tdGVybWlub3MsIFxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZSxcclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhcixcclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1lbnZpYXIge1xyXG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplIHtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0YmFja2dyb3VuZDogI0Y2NjA2MDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLWFjdGl2byB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplIHAge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1lbnZpYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3JtdWxhcmlvX19ncnVwby1idG4tcmVncmVzYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19idG4ge1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IC4xcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2J0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSl7XHJcblx0Ym94LXNoYWRvdzogM3B4IDBweCAzMHB4ICNmMDQ0MDA7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLWV4aXRvIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICMxMTkyMDA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtZXhpdG8tYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gLS0tLS0gIEVzdGlsb3MgcGFyYSBWYWxpZGFjaW9uIC0tLS0tIC0tLS0tICovXHJcbi5mb3JtdWxhcmlvX19ncnVwby1jb3JyZWN0byAuZm9ybXVsYXJpb19fdmFsaWRhY2lvbi1lc3RhZG8ge1xyXG5cdGNvbG9yOiAjMWVkMTJkO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbmNvcnJlY3RvIC5mb3JtdWxhcmlvX19sYWJlbCB7XHJcblx0Y29sb3I6ICNiYjI5Mjk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbmNvcnJlY3RvIC5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0Y29sb3I6ICNiYjI5Mjk7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX2lucHV0IHtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjYmIyOTI5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tIC0tLS0tICBNZWRpYXF1ZXJpZXMgLS0tLS0gLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHQuZm9ybXVsYXJpbyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHR9XHJcblxyXG5cdC5mb3JtdWxhcmlvX19ncnVwby10ZXJtaW5vcywgXHJcblx0LmZvcm11bGFyaW9fX21lbnNhamUsXHJcblx0LmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhcixcclxuXHQuZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0XHRncmlkLWNvbHVtbjogMTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm11bGFyaW9fX2J0biB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_equiporecibido_equiporecibido_module_ts.js.map