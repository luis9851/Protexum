"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registroclients_registroclients_module_ts"],{

/***/ 22758:
/*!*******************************************************************!*\
  !*** ./src/app/registroclients/registroclients-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroclientsPageRoutingModule": () => (/* binding */ RegistroclientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _registroclients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroclients.page */ 42504);




const routes = [
    {
        path: '',
        component: _registroclients_page__WEBPACK_IMPORTED_MODULE_0__.RegistroclientsPage
    }
];
let RegistroclientsPageRoutingModule = class RegistroclientsPageRoutingModule {
};
RegistroclientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroclientsPageRoutingModule);



/***/ }),

/***/ 90285:
/*!***********************************************************!*\
  !*** ./src/app/registroclients/registroclients.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroclientsPageModule": () => (/* binding */ RegistroclientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _registroclients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroclients-routing.module */ 22758);
/* harmony import */ var _registroclients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroclients.page */ 42504);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let RegistroclientsPageModule = class RegistroclientsPageModule {
};
RegistroclientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _registroclients_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroclientsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_registroclients_page__WEBPACK_IMPORTED_MODULE_1__.RegistroclientsPage]
    })
], RegistroclientsPageModule);



/***/ }),

/***/ 42504:
/*!*********************************************************!*\
  !*** ./src/app/registroclients/registroclients.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroclientsPage": () => (/* binding */ RegistroclientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registroclients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registroclients.page.html */ 66318);
/* harmony import */ var _registroclients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroclients.page.scss */ 58917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/clients.service */ 88694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);







let RegistroclientsPage = class RegistroclientsPage {
    constructor(servicio, router, toast) {
        this.servicio = servicio;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
    }
    Registerclient(form) {
        console.log(form);
        if (form.value.nombre == "" || form.value.rfc == "" || form.value.correoelectronico == "" ||
            form.value.servicio == "" || form.value.domicilio == "" || form.value.telefono == "" || form.value.cdnombre == "" ||
            form.value.cdtelefono == "" || form.value.cdcorreoelectronicoempresa == "" || form.value.cdcorreoelectronico == "" || form.value.rfcdefacturacion == "" ||
            form.value.domciliofiscal == "" || form.value.cfdi == "" || form.value.formadepago == "" || form.value.metododepago == "" ||
            form.value.fechadefacturacion == "" || form.value.tipodecredito == "" || form.value.comentarios == "") {
            this.FaltanDatos();
        }
        else {
            // los datos de el elemento
            this.servicio.register(form.value).subscribe((res => {
                console.log(res.dataClient.id);
                this.exito();
                this.router.navigate(['/list-clients']);
            }));
        }
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
RegistroclientsPage.ctorParameters = () => [
    { type: _service_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RegistroclientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registroclients',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registroclients_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registroclients_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroclientsPage);



/***/ }),

/***/ 66318:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/registroclients/registroclients.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <app-navbar></app-navbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login\" style=\"position: absolute;width: 100%; height: auto;\">\r\n    <main>\r\n      <h2 class=\"login-header\">Registra a tu nuevo Cliente</h2>\r\n  \r\n    <form #frmRegister=\"ngForm\" class=\"formulario\" (ngSubmit)=\"Registerclient(frmRegister)\">\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nombre\" placeholder=\"Nombre\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"rfc\" placeholder=\"RFC\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div> \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-item class=\"formulario__input\" >\r\n            <ion-label>Tipo de Servicio brindando:</ion-label>\r\n            <ion-select   ngModel   name=\"servicio\" required=\"\" >\r\n                <ion-select-option value=\"Industrial\">Industria</ion-select-option>\r\n                <ion-select-option value=\"Residencial\">Residencial</ion-select-option>\r\n                <ion-select-option value=\"Centro-comercial\">Centro comercial</ion-select-option>\r\n                <ion-select-option value=\"Empresarial\">Empresarial</ion-select-option>\r\n                <ion-select-option value=\"Codependencia-de-gobierno\">Dependencia-de-gobierno</ion-select-option>\r\n                \r\n                \r\n              \r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"domicilio\" placeholder=\"Ejemplo:Av.Chicahuales, JesusMaria, Ags, codigo postal: 20000 \" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"telefono\" placeholder=\"Telefono\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdnombre\" placeholder=\"Nombre del contacto directo\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"cdtelefono\" placeholder=\"Telefono del contacto directo\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"email\" name=\"cdcorreoelectronicoempresa\" placeholder=\"Correoelectronico Empresa del contacto directo\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"email\" name=\"cdcorreoelectronico\" placeholder=\"Correoelectronico  del contacto directo\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"email\" name=\"correoelectronicofacturacion\" placeholder=\"Correoelectronico de facturacion\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div> \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"rfcdefacturacion\" placeholder=\"RFC de Facturacion\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"domciliofiscal\" placeholder=\"Domicilio fiscal\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-item class=\"formulario__input\" >\r\n            <ion-label>Uso del CFDI:</ion-label>\r\n            <ion-select   ngModel   name=\"cfdi\" required=\"\" >\r\n                <ion-select-option value=\"Por-definir\">Por definir</ion-select-option>\r\n                <ion-select-option value=\"Gastos-en-general\">Gastos en general</ion-select-option>\r\n                \r\n              \r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-item class=\"formulario__input\" >\r\n            <ion-label>Agrega la forma de pago:</ion-label>\r\n            <ion-select   ngModel   name=\"formadepago\" required=\"\" >\r\n                <ion-select-option value=\"Efectivo\">Efectivo</ion-select-option>\r\n                <ion-select-option value=\"Transferencia-electronica\">Transferencia electronica</ion-select-option>\r\n                <ion-select-option value=\"Tarjeta-de-credito\">Tarjeta de credito</ion-select-option>\r\n                <ion-select-option value=\"Tarjeta-de-debito\">Tarjeta de debito</ion-select-option>\r\n                <ion-select-option value=\"Por-definir\">por definir</ion-select-option>\r\n                \r\n              \r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-item class=\"formulario__input\" >\r\n            <ion-label> Metodo de pago:</ion-label>\r\n            <ion-select   ngModel   name=\"metododepago\" required=\"\" >\r\n                <ion-select-option value=\"Por-definir\">Por definir</ion-select-option>\r\n                <ion-select-option value=\"Parcialidades-o-deferido\">Parcialidades o deferido</ion-select-option>\r\n                <ion-select-option value=\"Pago-en-una-exibicion\">Pago en una exibicion</ion-select-option>\r\n              \r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label class=\"formulario__label\">Fecha de facturacion </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadefacturacion\" placeholder=\"Fecha de facturacion\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"tipodecredito\" placeholder=\"Tipo de credito\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"comentarios\" placeholder=\"Comentarios\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n   \r\n   \r\n     \r\n      <p><input class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #000000; color: #FFFFFF;\" type=\"submit\" value=\"Registrar\"> </p>\r\n    </form>\r\n  </main>\r\n   \r\n  </div>\r\n</ion-content>\r\n\r\n\r\n  ");

/***/ }),

/***/ 58917:
/*!***********************************************************!*\
  !*** ./src/app/registroclients/registroclients.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\n/* body {\n  background: #456;\n  font-family: 'Open Sans', sans-serif;\n} */\n.login {\n  width: auto;\n  margin: 16px auto;\n  font-size: 16px;\n}\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #28d;\n}\n.login-header {\n  background: #000000;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  font-weight: bold;\n  height: 100%;\n}\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #28d;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n.login input[type=submit]:focus {\n  border-color: #05a;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 0px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    background-color: #FFFFFF;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/* CSS de prueba */\nmain {\n  max-width: 800px;\n  width: 90%;\n  margin: auto;\n  padding: 0px;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  background-color: #e4e4e4;\n}\n.formulario__label {\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n}\n.formulario__grupo-input {\n  position: relative;\n}\n.formulario__input {\n  width: 100%;\n  /* background: #E5E5E5; */\n  background: #FFFFFF;\n  border: 3px solid transparent;\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n.formulario__input:focus {\n  border: 3px solid #0075FF;\n  outline: none;\n  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n}\n.formulario__input-error {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n.formulario__input-error-activo {\n  display: block;\n}\n.formulario__validacion-estado {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n}\n.formulario__checkbox {\n  margin-right: 10px;\n}\n.formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n  grid-column: span 2;\n}\n.formulario__mensaje {\n  height: 45px;\n  line-height: 45px;\n  background: #F66060;\n  padding: 0 15px;\n  border-radius: 3px;\n  display: none;\n}\n.formulario__mensaje-activo {\n  display: block;\n}\n.formulario__mensaje p {\n  margin: 0;\n}\n.formulario__grupo-btn-enviar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.formulario__grupo-btn-regresar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100% !important;\n}\n.formulario__btn {\n  height: 45px;\n  line-height: 45px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n}\n.formulario__btn:hover:not([disabled]) {\n  box-shadow: 3px 0px 30px #f04400;\n}\n.formulario__mensaje-exito {\n  font-size: 14px;\n  color: #119200;\n  display: none;\n}\n.formulario__mensaje-exito-activo {\n  display: block;\n}\n/* ----- -----  Estilos para Validacion ----- ----- */\n.formulario__grupo-correcto .formulario__validacion-estado {\n  color: #1ed12d;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__label {\n  color: #bb2929;\n}\n.formulario__grupo-incorrecto .formulario__validacion-estado {\n  color: #bb2929;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__input {\n  border: 3px solid #bb2929;\n}\n/* ----- -----  Mediaqueries ----- ----- */\n@media screen and (max-width: 992px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n\n  .formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n    grid-column: 1;\n  }\n\n  .formulario__btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvY2xpZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQXFCUSxzRUFBQTtBQXJCUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkEsdUNBQUE7QUFHQTs7O0dBQUE7QUFLQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGRjtBQU1BOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtBQUhGO0FBT0E7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFKRjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUpGO0FBUUE7RUFDRSxhQUFBO0FBTEY7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBTEY7QUFRQTs7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxGO0FBU0E7O0VBRUUsa0JBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0FBTkY7QUFVQTtFQUNFLGtCQUFBO0FBUEY7QUFXQTtFQUVFLHlCQUFBO0FBVEY7QUFZQSxpQkFBQTtBQUNBO0VBQ0Usb0JBQUE7QUFURjtBQVlBO0VBQ0UsZUFBQTtBQVRGO0FBWUE7RUFDSSxZQUFBO0FBVEo7QUFlQSxnQkFBQTtBQUNBO0VBRUUsc0JBQUE7RUFFQSx5QkFBQTtBQVpGO0FBZUE7RUFFRSx3QkFBQTtFQUVBLHlCQUFBO0FBWkY7QUFlQTtFQUNFO0lBQ0UsVUFBQTtFQVpGO0VBZUE7SUFDRSxVQUFBO0VBYkY7QUFDRjtBQWdCQTtFQUNFLHNCQUFBO0FBZEY7QUFpQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxjQUFBO0FBZEY7QUFnQkE7RUFDRTtJQUNFLGdCQUFBO0VBYkY7O0VBZUE7SUFDRSxVQUFBO0lBQ0EseUJBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFFRSwrQkFBQTtFQVpKO0FBQ0Y7QUFlQSxrQkFBQTtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFiRDtBQWdCQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0MseUJBQUE7QUFiRjtBQWdCQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBYkQ7QUFnQkE7RUFDQyxrQkFBQTtBQWJEO0FBaUJBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWREO0FBaUJBO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFkRDtBQWlCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFkRDtBQWlCQTtFQUNDLGNBQUE7QUFkRDtBQWlCQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFkRDtBQWlCQTtFQUNDLGtCQUFBO0FBZEQ7QUFpQkE7Ozs7RUFJQyxtQkFBQTtBQWREO0FBaUJBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZEQ7QUFpQkE7RUFDQyxjQUFBO0FBZEQ7QUFpQkE7RUFDQyxTQUFBO0FBZEQ7QUFpQkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWREO0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWJEO0FBZ0JBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBYkQ7QUFnQkE7RUFDQyxnQ0FBQTtBQWJEO0FBZ0JBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0FBYkQ7QUFnQkEscURBQUE7QUFDQTtFQUNDLGNBQUE7RUFDQSxVQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0FBYkQ7QUFnQkE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQWJEO0FBZ0JBO0VBQ0MseUJBQUE7QUFiRDtBQWtCQSwwQ0FBQTtBQUNBO0VBQ0M7SUFDQywwQkFBQTtFQWZBOztFQWtCRDs7OztJQUlDLGNBQUE7RUFmQTs7RUFrQkQ7SUFDQyxXQUFBO0VBZkE7QUFDRiIsImZpbGUiOiJyZWdpc3Ryb2NsaWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIDAxLzI4LzIwMTZcclxuICogVGhpcyBwZW4gaXMgeWVhcnMgb2xkLCBhbmQgd2F0Y2hpbmcgYXQgdGhlIGNvZGUgYWZ0ZXIgYWxsXHJcbiAqIHRob3NlIHllYXJzIG1hZGUgbWUgZmFsbCBmcm9tIG15IGNoYWlyLCBzbyBJOlxyXG4gKiAtIGNoYW5nZWQgYWxsIElEcyB0byBjbGFzc2VzXHJcbiAqIC0gY29udmVydGVkIGFsbCB1bml0cyB0byBwaXhlbHMgYW5kIGVtIHVuaXRzXHJcbiAqIC0gY2hhbmdlZCBhbGwgZ2xvYmFsIGVsZW1lbnRzIHRvIGNsYXNzZXMgb3IgY2hpbGRyZW4gb2ZcclxuICogICAubG9naW5cclxuICogLSBjbGVhbmVkIHRoZSBzeW50YXggdG8gYmUgbW9yZSBjb25zaXN0ZW50XHJcbiAqIC0gYWRkZWQgYSBsb3Qgb2Ygc3BhY2VzIHRoYXQgSSBzbyBoYXJkIHRyaWVkIHRvIGF2b2lkXHJcbiAqICAgYSBmZXcgeWVhcnMgYWdvXHJcbiAqICAgKGJlY2F1c2UgaXQncyBjb29sIHRvIG5vdCB1c2UgdGhlbSlcclxuICogLSBhbmQgcHJvYmFibHkgc29tZXRoaW5nIGVsc2UgdGhhdCBJIGNhbid0IHJlbWVtYmVyIGFueW1vcmVcclxuICpcclxuICogSSBzdGlja2VkIHRvIHRoZSBzYW1lIHBoaWxvc29waHksIG1lYW5pbmc6XHJcbiAqIC0gdGhlIGRlc2lnbiBpcyBhbG1vc3QgdGhlIHNhbWVcclxuICogLSBvbmx5IHB1cmUgSFRNTCBhbmQgQ1NTXHJcbiAqIC0gbm8gZnJhbWV3b3JrcywgcHJlcHJvY2Vzc29ycyBvciByZXNldHNcclxuICovXHJcblxyXG4vKiAnT3BlbiBTYW5zJyBmb250IGZyb20gR29vZ2xlIEZvbnRzICovXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCk7XHJcblxyXG4vKiBib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjNDU2O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufSAqL1xyXG5cclxuLmxvZ2luIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi8vIFJlc2V0IHRvcCBhbmQgYm90dG9tIG1hcmdpbnMgZnJvbSBjZXJ0YWluIGVsZW1lbnRzXHJcbi5sb2dpbi1oZWFkZXIsXHJcbi5sb2dpbiBwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8vIFRoZSB0cmlhbmdsZSBmb3JtIGlzIGFjaGlldmVkIGJ5IGEgQ1NTIGhhY2sgXHJcbi5sb2dpbi10cmlhbmdsZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjhkO1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4vLyBFdmVyeSByb3cgaW5zaWRlIC5sb2dpbi1jb250YWluZXIgaXMgZGVmaW5lZCB3aXRoIHAgdGFncyBcclxuLmxvZ2luIHAge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVlbTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi8vIFRleHQgZmllbGRzJyBmb2N1cyBlZmZlY3QgXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICMyOGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTdjO1xyXG59XHJcblxyXG4vLyBCdXR0b25zJyBmb2N1cyBlZmZlY3QgXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwNWE7XHJcbn1cclxuXHJcblxyXG4ubWF5dXNjdWxhc3tcclxuICAvLyBlcyBwYXJhIGhhY2VyIGxhcyBsZXRyYXMgbWF5dXNjdWxhcyBlbiBjdXJwIFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBsb2dpbiAqL1xyXG5ib2R5e1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uaW1nLWxvZ297XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIEFuaW1hY2lvbmVzICovXHJcbi5hbmltYXRlZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5mYXN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLWNvbGxhcHNlIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICB9XHJcbiAgLmxvZ2luIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYigwLCAwLCAwKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMClcclxuICB9XHJcbn1cclxuXHJcbi8qIENTUyBkZSBwcnVlYmEgKi9cclxubWFpbiB7XHJcblx0bWF4LXdpZHRoOiA4MDBweDtcclxuXHR3aWR0aDogOTAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRnYXA6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2xhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8taW5wdXQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5mb3JtdWxhcmlvX19pbnB1dCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0LyogYmFja2dyb3VuZDogI0U1RTVFNTsgKi9cclxuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0cGFkZGluZzogMCA0MHB4IDAgMTBweDtcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19pbnB1dDpmb2N1cyB7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgIzAwNzVGRjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJveC1zaGFkb3c6IDNweCAwcHggMzBweCByZ2JhKDE2MywxNjMsMTYzLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQtZXJyb3Ige1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19pbnB1dC1lcnJvci1hY3Rpdm8ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fdmFsaWRhY2lvbi1lc3RhZG8ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMTBweDtcclxuXHRib3R0b206IDE1cHg7XHJcblx0ei1pbmRleDogMTAwO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fY2hlY2tib3gge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLXRlcm1pbm9zLCBcclxuLmZvcm11bGFyaW9fX21lbnNhamUsXHJcbi5mb3JtdWxhcmlvX19ncnVwby1idG4tcmVncmVzYXIsXHJcbi5mb3JtdWxhcmlvX19ncnVwby1idG4tZW52aWFyIHtcclxuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZSB7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdGJhY2tncm91bmQ6ICNGNjYwNjA7XHJcblx0cGFkZGluZzogMCAxNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZS1hY3Rpdm8ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZSBwIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1idG4tZW52aWFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLXJlZ3Jlc2FyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fYnRuIHtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiAuMXMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19idG46aG92ZXI6bm90KFtkaXNhYmxlZF0pe1xyXG5cdGJveC1zaGFkb3c6IDNweCAwcHggMzBweCAjZjA0NDAwO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZS1leGl0byB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiAjMTE5MjAwO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLWV4aXRvLWFjdGl2byB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIC0tLS0tIC0tLS0tICBFc3RpbG9zIHBhcmEgVmFsaWRhY2lvbiAtLS0tLSAtLS0tLSAqL1xyXG4uZm9ybXVsYXJpb19fZ3J1cG8tY29ycmVjdG8gLmZvcm11bGFyaW9fX3ZhbGlkYWNpb24tZXN0YWRvIHtcclxuXHRjb2xvcjogIzFlZDEyZDtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8taW5jb3JyZWN0byAuZm9ybXVsYXJpb19fbGFiZWwge1xyXG5cdGNvbG9yOiAjYmIyOTI5O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8taW5jb3JyZWN0byAuZm9ybXVsYXJpb19fdmFsaWRhY2lvbi1lc3RhZG8ge1xyXG5cdGNvbG9yOiAjYmIyOTI5O1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbmNvcnJlY3RvIC5mb3JtdWxhcmlvX19pbnB1dCB7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgI2JiMjkyOTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLSAtLS0tLSAgTWVkaWFxdWVyaWVzIC0tLS0tIC0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcblx0LmZvcm11bGFyaW8ge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0fVxyXG5cclxuXHQuZm9ybXVsYXJpb19fZ3J1cG8tdGVybWlub3MsIFxyXG5cdC5mb3JtdWxhcmlvX19tZW5zYWplLFxyXG5cdC5mb3JtdWxhcmlvX19ncnVwby1idG4tcmVncmVzYXIsXHJcblx0LmZvcm11bGFyaW9fX2dydXBvLWJ0bi1lbnZpYXIge1xyXG5cdFx0Z3JpZC1jb2x1bW46IDE7XHJcblx0fVxyXG5cdFxyXG5cdC5mb3JtdWxhcmlvX19idG4ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdFxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_registroclients_registroclients_module_ts.js.map