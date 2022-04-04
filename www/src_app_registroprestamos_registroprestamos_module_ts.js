"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registroprestamos_registroprestamos_module_ts"],{

/***/ 28475:
/*!***********************************************************************!*\
  !*** ./src/app/registroprestamos/registroprestamos-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroprestamosPageRoutingModule": () => (/* binding */ RegistroprestamosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _registroprestamos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroprestamos.page */ 12356);




const routes = [
    {
        path: '',
        component: _registroprestamos_page__WEBPACK_IMPORTED_MODULE_0__.RegistroprestamosPage
    }
];
let RegistroprestamosPageRoutingModule = class RegistroprestamosPageRoutingModule {
};
RegistroprestamosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroprestamosPageRoutingModule);



/***/ }),

/***/ 21508:
/*!***************************************************************!*\
  !*** ./src/app/registroprestamos/registroprestamos.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroprestamosPageModule": () => (/* binding */ RegistroprestamosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _registroprestamos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroprestamos-routing.module */ 28475);
/* harmony import */ var _registroprestamos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroprestamos.page */ 12356);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let RegistroprestamosPageModule = class RegistroprestamosPageModule {
};
RegistroprestamosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registroprestamos_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroprestamosPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_registroprestamos_page__WEBPACK_IMPORTED_MODULE_1__.RegistroprestamosPage]
    })
], RegistroprestamosPageModule);



/***/ }),

/***/ 12356:
/*!*************************************************************!*\
  !*** ./src/app/registroprestamos/registroprestamos.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroprestamosPage": () => (/* binding */ RegistroprestamosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registroprestamos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registroprestamos.page.html */ 20272);
/* harmony import */ var _registroprestamos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroprestamos.page.scss */ 69839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_borrowing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/borrowing.service */ 13802);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);








let RegistroprestamosPage = class RegistroprestamosPage {
    constructor(servicio, router, toast, activatedRoute, fb) {
        this.servicio = servicio;
        this.router = router;
        this.toast = toast;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.borrowingForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            montoprestado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            fechadeprestamo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            numerodepagos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
    }
    ngOnInit() {
        this.consultardatos();
    }
    consultardatos() {
        if (this.id !== null) {
            this.servicio.obteneruser(this.id).subscribe(data => {
                console.log(data.user);
                let user = data.user;
                this.borrowingForm.patchValue(user);
            });
        }
    }
    Register() {
        if (this.borrowingForm.value.nombre == "" || this.borrowingForm.value.montoprestado == "" || this.borrowingForm.value.fechadeprestamo == "") {
            this.FaltanDatos();
        }
        else {
            // los datos de el elemento
            this.servicio.registrar(this.id, this.borrowingForm.value).subscribe((res => {
                console.log(res.dataPrestamo.id);
                this.exito();
                this.agregaridDeServicioausuario(res.dataPrestamo.id);
                this.router.navigate(['/main']);
            }));
        }
    }
    agregaridDeServicioausuario(idprestamo) {
        this.servicio.actualizar_usuarioid(this.id, idprestamo).subscribe((res => {
            console.log(res);
        }));
    }
    exito() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "El registro fue exitoso",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    FaltanDatos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "Por Favor llena todos los datos",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
RegistroprestamosPage.ctorParameters = () => [
    { type: _service_borrowing_service__WEBPACK_IMPORTED_MODULE_2__.BorrowingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RegistroprestamosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registroprestamos',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registroprestamos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registroprestamos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroprestamosPage);



/***/ }),

/***/ 20272:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/registroprestamos/registroprestamos.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <app-navbar></app-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"login\" style=\"position: absolute;width: 100%; height: auto;\">\n    <main>\n      <h2 class=\"login-header\">Registra Prestamo</h2>\n  \n    <form [formGroup]=\"borrowingForm\" class=\"formulario\" (ngSubmit)=\"Register()\">\n      <div class=\"formulario__grupo\">\n        <div class=\"formulario__grupo-input\">\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nombre\" placeholder=\"Nombre de guardia\" formControlName=\"nombre\"  required=\"\"> </ion-input> </p>\n        </div>\n      </div>\n      <div class=\"formulario__grupo\">\n        <div class=\"formulario__grupo-input\">\n          <p><ion-input class=\"formulario__input\" type=\"number\" name=\"montoprestado\" placeholder=\"montoprestado\" formControlName=\"montoprestado\"  required=\"\"> </ion-input> </p>\n        </div>\n      </div> \n      <div class=\"formulario__grupo\">\n        <div class=\"formulario__grupo-input\">\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadeprestamo\"  formControlName=\"fechadeprestamo\"  required=\"\"> </ion-input> </p>\n        </div>\n      </div>\n  \n       <div class=\"formulario__grupo\">\n        <div class=\"formulario__grupo-input\">\n          <p><ion-input class=\"formulario__input\" type=\"number\" name=\"numerodepagos\" placeholder=\"ejemplo 3\" formControlName=\"numerodepagos\"  required=\"\"> </ion-input> </p>\n        </div>\n      </div>\n    \n   \n   \n     \n      <p><input class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #FE693D; color: #ffff;\" type=\"submit\" value=\"Registrar\"> </p>\n    </form>\n  </main>\n   \n  </div>\n</ion-content>\n\n\n  ");

/***/ }),

/***/ 69839:
/*!***************************************************************!*\
  !*** ./src/app/registroprestamos/registroprestamos.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\n/* body {\n  background: #456;\n  font-family: 'Open Sans', sans-serif;\n} */\n.login {\n  width: auto;\n  margin: 16px auto;\n  font-size: 16px;\n}\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #28d;\n}\n.login-header {\n  background: #FE693D;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  font-weight: bold;\n  height: 100%;\n}\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #28d;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n.login input[type=submit]:focus {\n  border-color: #05a;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 0px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    background-color: #FFFFFF;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/* CSS de prueba */\nmain {\n  max-width: 800px;\n  width: 90%;\n  margin: auto;\n  padding: 0px;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  background-color: #e4e4e4;\n}\n.formulario__label {\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n}\n.formulario__grupo-input {\n  position: relative;\n}\n.formulario__input {\n  width: 100%;\n  /* background: #E5E5E5; */\n  background: #FFFFFF;\n  border: 3px solid transparent;\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n.formulario__input:focus {\n  border: 3px solid #0075FF;\n  outline: none;\n  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n}\n.formulario__input-error {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n.formulario__input-error-activo {\n  display: block;\n}\n.formulario__validacion-estado {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n}\n.formulario__checkbox {\n  margin-right: 10px;\n}\n.formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n  grid-column: span 2;\n}\n.formulario__mensaje {\n  height: 45px;\n  line-height: 45px;\n  background: #F66060;\n  padding: 0 15px;\n  border-radius: 3px;\n  display: none;\n}\n.formulario__mensaje-activo {\n  display: block;\n}\n.formulario__mensaje p {\n  margin: 0;\n}\n.formulario__grupo-btn-enviar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.formulario__grupo-btn-regresar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100% !important;\n}\n.formulario__btn {\n  height: 45px;\n  line-height: 45px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n}\n.formulario__btn:hover:not([disabled]) {\n  box-shadow: 3px 0px 30px #f04400;\n}\n.formulario__mensaje-exito {\n  font-size: 14px;\n  color: #119200;\n  display: none;\n}\n.formulario__mensaje-exito-activo {\n  display: block;\n}\n/* ----- -----  Estilos para Validacion ----- ----- */\n.formulario__grupo-correcto .formulario__validacion-estado {\n  color: #1ed12d;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__label {\n  color: #bb2929;\n}\n.formulario__grupo-incorrecto .formulario__validacion-estado {\n  color: #bb2929;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__input {\n  border: 3px solid #bb2929;\n}\n/* ----- -----  Mediaqueries ----- ----- */\n@media screen and (max-width: 992px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n\n  .formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n    grid-column: 1;\n  }\n\n  .formulario__btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvcHJlc3RhbW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBcUJRLHNFQUFBO0FBckJSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQW9CQSx1Q0FBQTtBQUdBOzs7R0FBQTtBQUtBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBTUE7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFPQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBSkY7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQVFBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQVFBOztFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTEY7QUFTQTs7RUFFRSxrQkFBQTtBQU5GO0FBU0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7QUFORjtBQVVBO0VBQ0Usa0JBQUE7QUFQRjtBQVdBO0VBRUUseUJBQUE7QUFURjtBQVlBLGlCQUFBO0FBQ0E7RUFDRSxvQkFBQTtBQVRGO0FBWUE7RUFDRSxlQUFBO0FBVEY7QUFZQTtFQUNJLFlBQUE7QUFUSjtBQWVBLGdCQUFBO0FBQ0E7RUFFRSxzQkFBQTtFQUVBLHlCQUFBO0FBWkY7QUFlQTtFQUVFLHdCQUFBO0VBRUEseUJBQUE7QUFaRjtBQWVBO0VBQ0U7SUFDRSxVQUFBO0VBWkY7RUFlQTtJQUNFLFVBQUE7RUFiRjtBQUNGO0FBZ0JBO0VBQ0Usc0JBQUE7QUFkRjtBQWlCQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWlCQTtFQUNFLGNBQUE7QUFkRjtBQWdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUFiRjs7RUFlQTtJQUNFLFVBQUE7SUFDQSx5QkFBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUVFLCtCQUFBO0VBWko7QUFDRjtBQWVBLGtCQUFBO0FBQ0E7RUFDQyxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWJEO0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQyx5QkFBQTtBQWJGO0FBZ0JBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFiRDtBQWdCQTtFQUNDLGtCQUFBO0FBYkQ7QUFpQkE7RUFDQyxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBZEQ7QUFpQkE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtBQWREO0FBaUJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWREO0FBaUJBO0VBQ0MsY0FBQTtBQWREO0FBaUJBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWREO0FBaUJBO0VBQ0Msa0JBQUE7QUFkRDtBQWlCQTs7OztFQUlDLG1CQUFBO0FBZEQ7QUFpQkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFkRDtBQWlCQTtFQUNDLGNBQUE7QUFkRDtBQWlCQTtFQUNDLFNBQUE7QUFkRDtBQWlCQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZEQ7QUFnQkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBYkQ7QUFnQkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFiRDtBQWdCQTtFQUNDLGdDQUFBO0FBYkQ7QUFnQkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7QUFiRDtBQWdCQSxxREFBQTtBQUNBO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7RUFDQSxVQUFBO0FBYkQ7QUFnQkE7RUFDQyx5QkFBQTtBQWJEO0FBa0JBLDBDQUFBO0FBQ0E7RUFDQztJQUNDLDBCQUFBO0VBZkE7O0VBa0JEOzs7O0lBSUMsY0FBQTtFQWZBOztFQWtCRDtJQUNDLFdBQUE7RUFmQTtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvcHJlc3RhbW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiAwMS8yOC8yMDE2XHJcbiAqIFRoaXMgcGVuIGlzIHllYXJzIG9sZCwgYW5kIHdhdGNoaW5nIGF0IHRoZSBjb2RlIGFmdGVyIGFsbFxyXG4gKiB0aG9zZSB5ZWFycyBtYWRlIG1lIGZhbGwgZnJvbSBteSBjaGFpciwgc28gSTpcclxuICogLSBjaGFuZ2VkIGFsbCBJRHMgdG8gY2xhc3Nlc1xyXG4gKiAtIGNvbnZlcnRlZCBhbGwgdW5pdHMgdG8gcGl4ZWxzIGFuZCBlbSB1bml0c1xyXG4gKiAtIGNoYW5nZWQgYWxsIGdsb2JhbCBlbGVtZW50cyB0byBjbGFzc2VzIG9yIGNoaWxkcmVuIG9mXHJcbiAqICAgLmxvZ2luXHJcbiAqIC0gY2xlYW5lZCB0aGUgc3ludGF4IHRvIGJlIG1vcmUgY29uc2lzdGVudFxyXG4gKiAtIGFkZGVkIGEgbG90IG9mIHNwYWNlcyB0aGF0IEkgc28gaGFyZCB0cmllZCB0byBhdm9pZFxyXG4gKiAgIGEgZmV3IHllYXJzIGFnb1xyXG4gKiAgIChiZWNhdXNlIGl0J3MgY29vbCB0byBub3QgdXNlIHRoZW0pXHJcbiAqIC0gYW5kIHByb2JhYmx5IHNvbWV0aGluZyBlbHNlIHRoYXQgSSBjYW4ndCByZW1lbWJlciBhbnltb3JlXHJcbiAqXHJcbiAqIEkgc3RpY2tlZCB0byB0aGUgc2FtZSBwaGlsb3NvcGh5LCBtZWFuaW5nOlxyXG4gKiAtIHRoZSBkZXNpZ24gaXMgYWxtb3N0IHRoZSBzYW1lXHJcbiAqIC0gb25seSBwdXJlIEhUTUwgYW5kIENTU1xyXG4gKiAtIG5vIGZyYW1ld29ya3MsIHByZXByb2Nlc3NvcnMgb3IgcmVzZXRzXHJcbiAqL1xyXG5cclxuLyogJ09wZW4gU2FucycgZm9udCBmcm9tIEdvb2dsZSBGb250cyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDApO1xyXG5cclxuLyogYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzQ1NjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn0gKi9cclxuXHJcbi5sb2dpbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vLyBSZXNldCB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zIGZyb20gY2VydGFpbiBlbGVtZW50c1xyXG4ubG9naW4taGVhZGVyLFxyXG4ubG9naW4gcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vLyBUaGUgdHJpYW5nbGUgZm9ybSBpcyBhY2hpZXZlZCBieSBhIENTUyBoYWNrIFxyXG4ubG9naW4tdHJpYW5nbGUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI4ZDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI0ZFNjkzRDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLy8gRXZlcnkgcm93IGluc2lkZSAubG9naW4tY29udGFpbmVyIGlzIGRlZmluZWQgd2l0aCBwIHRhZ3MgXHJcbi5sb2dpbiBwIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4vLyBUZXh0IGZpZWxkcycgZm9jdXMgZWZmZWN0IFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhkO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzE3YztcclxufVxyXG5cclxuLy8gQnV0dG9ucycgZm9jdXMgZWZmZWN0IFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDVhO1xyXG59XHJcblxyXG5cclxuLm1heXVzY3VsYXN7XHJcbiAgLy8gZXMgcGFyYSBoYWNlciBsYXMgbGV0cmFzIG1heXVzY3VsYXMgZW4gY3VycCBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBOYXZiYXIgbG9naW4gKi9cclxuYm9keXtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBBbmltYWNpb25lcyAqL1xyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgfVxyXG4gIC5sb2dpbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApXHJcbiAgfVxyXG59XHJcblxyXG4vKiBDU1MgZGUgcHJ1ZWJhICovXHJcbm1haW4ge1xyXG5cdG1heC13aWR0aDogODAwcHg7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0Z2FwOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19sYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWlucHV0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC8qIGJhY2tncm91bmQ6ICNFNUU1RTU7ICovXHJcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdHBhZGRpbmc6IDAgNDBweCAwIDEwcHg7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQ6Zm9jdXMge1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICMwMDc1RkY7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3gtc2hhZG93OiAzcHggMHB4IDMwcHggcmdiYSgxNjMsMTYzLDE2MywgMC40KTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0LWVycm9yIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQtZXJyb3ItYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX3ZhbGlkYWNpb24tZXN0YWRvIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym90dG9tOiAxNXB4O1xyXG5cdHotaW5kZXg6IDEwMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2NoZWNrYm94IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby10ZXJtaW5vcywgXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLFxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLXJlZ3Jlc2FyLFxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUge1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjRjY2MDYwO1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2J0biB7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjFzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtcclxuXHRib3gtc2hhZG93OiAzcHggMHB4IDMwcHggI2YwNDQwMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtZXhpdG8ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzExOTIwMDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZS1leGl0by1hY3Rpdm8ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiAtLS0tLSAtLS0tLSAgRXN0aWxvcyBwYXJhIFZhbGlkYWNpb24gLS0tLS0gLS0tLS0gKi9cclxuLmZvcm11bGFyaW9fX2dydXBvLWNvcnJlY3RvIC5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0Y29sb3I6ICMxZWQxMmQ7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX2xhYmVsIHtcclxuXHRjb2xvcjogI2JiMjkyOTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX3ZhbGlkYWNpb24tZXN0YWRvIHtcclxuXHRjb2xvcjogI2JiMjkyOTtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8taW5jb3JyZWN0byAuZm9ybXVsYXJpb19faW5wdXQge1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICNiYjI5Mjk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0gLS0tLS0gIE1lZGlhcXVlcmllcyAtLS0tLSAtLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cdC5mb3JtdWxhcmlvIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdH1cclxuXHJcblx0LmZvcm11bGFyaW9fX2dydXBvLXRlcm1pbm9zLCBcclxuXHQuZm9ybXVsYXJpb19fbWVuc2FqZSxcclxuXHQuZm9ybXVsYXJpb19fZ3J1cG8tYnRuLXJlZ3Jlc2FyLFxyXG5cdC5mb3JtdWxhcmlvX19ncnVwby1idG4tZW52aWFyIHtcclxuXHRcdGdyaWQtY29sdW1uOiAxO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXVsYXJpb19fYnRuIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHRcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_registroprestamos_registroprestamos_module_ts.js.map