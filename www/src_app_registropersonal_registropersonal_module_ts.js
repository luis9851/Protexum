"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registropersonal_registropersonal_module_ts"],{

/***/ 59305:
/*!*********************************************************************!*\
  !*** ./src/app/registropersonal/registropersonal-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistropersonalPageRoutingModule": () => (/* binding */ RegistropersonalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _registropersonal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registropersonal.page */ 35047);




const routes = [
    {
        path: '',
        component: _registropersonal_page__WEBPACK_IMPORTED_MODULE_0__.RegistropersonalPage
    }
];
let RegistropersonalPageRoutingModule = class RegistropersonalPageRoutingModule {
};
RegistropersonalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistropersonalPageRoutingModule);



/***/ }),

/***/ 64874:
/*!*************************************************************!*\
  !*** ./src/app/registropersonal/registropersonal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistropersonalPageModule": () => (/* binding */ RegistropersonalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _registropersonal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registropersonal-routing.module */ 59305);
/* harmony import */ var _registropersonal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registropersonal.page */ 35047);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let RegistropersonalPageModule = class RegistropersonalPageModule {
};
RegistropersonalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _registropersonal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistropersonalPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_registropersonal_page__WEBPACK_IMPORTED_MODULE_1__.RegistropersonalPage]
    })
], RegistropersonalPageModule);



/***/ }),

/***/ 35047:
/*!***********************************************************!*\
  !*** ./src/app/registropersonal/registropersonal.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistropersonalPage": () => (/* binding */ RegistropersonalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registropersonal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registropersonal.page.html */ 84598);
/* harmony import */ var _registropersonal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registropersonal.page.scss */ 45126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ 52039);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);








let RegistropersonalPage = class RegistropersonalPage {
    constructor(servicio, activatedRoute, router, toast) {
        this.servicio = servicio;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toast = toast;
        //datetime
        this.fechaNaci = new Date();
    }
    ngOnInit() {
        this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
    }
    cambioFecha(event) {
        console.log(event);
    }
    Register(form) {
        if (form.value.apellidos == "" || form.value.contrasena == "" || form.value.correoelectronico == "" ||
            form.value.curp == "" || form.value.domicilio == "" || form.value.estadocivil == "" || form.value.fechadeentrada == "" ||
            form.value.fechadenacimiento == "" || form.value.niveldeescolaridad == "" || form.value.nombre == "" || form.value.nsegurosocial == "" ||
            form.value.pensionado == "" || form.value.rfc == "" || form.value.rol == "" || form.value.cdeplayera == "" || form.value.ddeplayera == "" ||
            form.value.cdepantalon == "" || form.value.ddepantalon == "" || form.value.cdebotas == "" || form.value.ddebotas == "" ||
            form.value.cdecachucha == "" || form.value.ddecachucha == "" || form.value.cdechamarra == "" || form.value.ddechamarra == "" ||
            form.value.cdechaleco == "" || form.value.ddechaleco == "" || form.value.cdelentes == "" || form.value.ddelentes == "" ||
            form.value.telefono == "" || form.value.telefonoadicional == "") {
            this.FaltanDatos();
        }
        else {
            // pasa subir la imagem
            this.onSubmit();
            // los datos de el elemento
            this.servicio.register(form.value).subscribe((res => {
                this.exito();
                console.log(res.dataUser);
                // igualo la variable idUser para que tenga los datos de id del user
                this.idUser = res.dataUser.id;
                console.log(this.idUser);
                this.updateurl(this.idUser);
                this.router.navigate(['/main']);
            }));
        }
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type.includes("image")) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                this.file = file;
                console.log(file);
            }
            else {
                console.log("there was an error");
            }
        }
    }
    updateurl(_idUser) {
        this.servicio.disparadoridmage.subscribe(data => {
            //  aqui estoy mandando a llamar la funcion para id
            this.servicio.AgregarIdimagen(this.idUser, data.data).subscribe((res => {
            }));
        });
    }
    onSubmit() {
        const form = this.imageForm;
        console.log(form);
        form.value.name = "Foto";
        this.servicio.uploadImage(form.value.name, this.file)
            .subscribe(res => {
            this.servicio.disparadoridmage.emit({
                data: res.dataimage.fileUrl
            });
            this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
                file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null)
            });
        });
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
RegistropersonalPage.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RegistropersonalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registropersonal',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registropersonal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registropersonal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistropersonalPage);



/***/ }),

/***/ 84598:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/registropersonal/registropersonal.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <app-navbar></app-navbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login\" style=\"position: absolute;width: 100%; height: auto;\">\r\n    <main>\r\n      <h2 class=\"login-header\">Registra a tu nuevo elemento</h2>\r\n  \r\n    <form #frmRegister=\"ngForm\" class=\"formulario\" (ngSubmit)=\"Register(frmRegister)\">\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nombre\" placeholder=\"Nombre\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"apellidos\" placeholder=\"apellidos\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"curp\" placeholder=\"CURP\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nsegurosocial\" placeholder=\"Numero de seguro social\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"rfc\" placeholder=\"RFC\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"domicilio\" placeholder=\"Ejemplo:Av.Chicahuales, JesusMaria, Ags, codigo postal: 20000 \" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label class=\"formulario__label\">Fecha de entrada </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadeentrada\" placeholder=\"Fecha de entrada\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label class=\"formulario__label\">Fecha de Nacimiento</ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadenacimiento\" placeholder=\"Fecha de Nacimiento\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"telefono\" placeholder=\"Telefono \" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"telefonoadicional\" placeholder=\"Telefono Adicional\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"creditodeInfonavit\" placeholder=\"Ingrese el numero de credito de Infonavit si lo tiene\" ngModel required=\"\" maxlength=\"15\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <!-- <p><ion-input type=\"text\" name=\"estadocivil\" placeholder=\"Cual es su estado Civil\" ngModel required=\"\"> </ion-input> </p> -->\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item class=\"formulario__input\" >\r\n              <ion-label>Cual es su estado Civil:</ion-label>\r\n              <ion-select   ngModel   name=\"estadocivil\" required=\"\" >\r\n                  <ion-select-option value=\"Soltero\">Soltero</ion-select-option>\r\n                  <ion-select-option value=\"Casado\">Casado</ion-select-option>\r\n                  <ion-select-option value=\"Divorciado\">Divorciado</ion-select-option>\r\n                  <ion-select-option value=\"Viudo\">Viudo</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"email\" name=\"correoelectronico\" placeholder=\"correoelectronico\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de playera </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdeplayera\" placeholder=\"Cantidad de playera\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddeplayera\" placeholder=\"Descripcion de playera\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de pantalon </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdepantalon\" placeholder=\"Cantidad de pantalon\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddepantalon\" placeholder=\"Descripcion de pantalon\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de botas </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdebotas\" placeholder=\"Cantidad de calzado\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddebotas\" placeholder=\"Descripcion de calzado\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de cachucha </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdecachucha\" placeholder=\"Cantidad de cachucha\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddecachucha\" placeholder=\"Descripcion de cachucha\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de chamarra </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdechamarra\" placeholder=\"Cantidad de chamarra\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddechamarra\" placeholder=\"Descripcion de chamarra\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de chaleco </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdechaleco\" placeholder=\"Cantidad de chaleco\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddechaleco\" placeholder=\"Descripcion de chaleco\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label > Cantidad y Descripcion de lentes </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"cdelentes\" placeholder=\"Cantidad de lentes\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"ddelentes\" placeholder=\"Descripcion de lentes\" ngModel required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n        <!-- <p><ion-input type=\"text\" name=\"pensionado\" placeholder=\"Es pensionado\" ngModel required=\"\"> </ion-input> </p>   -->\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item  class=\"formulario__input\">\r\n              <ion-label>Es pensionado:</ion-label>\r\n              <ion-select   ngModel   name=\"pensionado\" required=\"\" >\r\n                  <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                  <ion-select-option value=\"No\">No</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- <p><ion-input type=\"text\" name=\"niveldeescolaridad\" placeholder=\"Nivel de Escolaridad\" ngModel required=\"\"> </ion-input> </p>   -->\r\n    \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item  class=\"formulario__input\">\r\n              <ion-label>Nivel de Escolaridad:</ion-label>\r\n              <ion-select ngModel   name=\"niveldeescolaridad\" required=\"\" >\r\n                  <ion-select-option value=\"Primaria\">Primaria</ion-select-option>\r\n                  <ion-select-option value=\"Secundaria\">Secundaria </ion-select-option>\r\n                  <ion-select-option value=\"Preparatoria\">Preparatoria</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div> \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item class=\"formulario__input\" >\r\n              <ion-label>Cual es el rol:</ion-label>\r\n              <ion-select   ngModel name=\"rol\" required=\"\"  >\r\n                  <ion-select-option value=\"Guardia\">Guardia</ion-select-option>\r\n                  <ion-select-option value=\"Supervisor\">Supervisor</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"password\" name=\"contrasena\" placeholder=\"Contrasena\" ngModel required> </ion-input></p>\r\n        </div> \r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label>Agrega Foto del Elemento</ion-label>\r\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit()\">\r\n            <input type=\"file\" placeholder=\"File\" (change)=\"onFileChange($event)\"\r\n          formControlName=\"file\" >\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <p><input class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"submit\" value=\"Registrar\"> </p>\r\n    </form>\r\n  </main>\r\n   \r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n\r\n  ");

/***/ }),

/***/ 45126:
/*!*************************************************************!*\
  !*** ./src/app/registropersonal/registropersonal.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\n/* body {\n  background: #456;\n  font-family: 'Open Sans', sans-serif;\n} */\n.login {\n  width: auto;\n  margin: 16px auto;\n  font-size: 16px;\n}\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #28d;\n}\n.login-header {\n  background: #000000;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  font-weight: bold;\n  height: 100%;\n}\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #28d;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n.login input[type=submit]:focus {\n  border-color: #05a;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 0px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    background-color: #FFFFFF;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/* CSS de prueba */\nmain {\n  max-width: 800px;\n  width: 90%;\n  margin: auto;\n  padding: 0px;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  background-color: #e4e4e4;\n}\n.formulario__label {\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n}\n.formulario__grupo-input {\n  position: relative;\n}\n.formulario__input {\n  width: 100%;\n  /* background: #E5E5E5; */\n  background: #FFFFFF;\n  border: 3px solid transparent;\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n.formulario__input:focus {\n  border: 3px solid #0075FF;\n  outline: none;\n  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n}\n.formulario__input-error {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n.formulario__input-error-activo {\n  display: block;\n}\n.formulario__validacion-estado {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n}\n.formulario__checkbox {\n  margin-right: 10px;\n}\n.formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n  grid-column: span 2;\n}\n.formulario__mensaje {\n  height: 45px;\n  line-height: 45px;\n  background: #F66060;\n  padding: 0 15px;\n  border-radius: 3px;\n  display: none;\n}\n.formulario__mensaje-activo {\n  display: block;\n}\n.formulario__mensaje p {\n  margin: 0;\n}\n.formulario__grupo-btn-enviar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.formulario__grupo-btn-regresar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100% !important;\n}\n.formulario__btn {\n  height: 45px;\n  line-height: 45px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n}\n.formulario__btn:hover:not([disabled]) {\n  box-shadow: 3px 0px 30px #f04400;\n}\n.formulario__mensaje-exito {\n  font-size: 14px;\n  color: #119200;\n  display: none;\n}\n.formulario__mensaje-exito-activo {\n  display: block;\n}\n/* ----- -----  Estilos para Validacion ----- ----- */\n.formulario__grupo-correcto .formulario__validacion-estado {\n  color: #1ed12d;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__label {\n  color: #bb2929;\n}\n.formulario__grupo-incorrecto .formulario__validacion-estado {\n  color: #bb2929;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__input {\n  border: 3px solid #bb2929;\n}\n/* ----- -----  Mediaqueries ----- ----- */\n@media screen and (max-width: 992px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n\n  .formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n    grid-column: 1;\n  }\n\n  .formulario__btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvcGVyc29uYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFxQlEsc0VBQUE7QUFyQlI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBb0JBLHVDQUFBO0FBR0E7OztHQUFBO0FBS0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRkY7QUFNQTs7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU9BO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFKRjtBQVFBO0VBQ0UsYUFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUxGO0FBUUE7O0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFMRjtBQVNBOztFQUVFLGtCQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5GO0FBU0E7RUFDRSxnQkFBQTtBQU5GO0FBVUE7RUFDRSxrQkFBQTtBQVBGO0FBV0E7RUFFRSx5QkFBQTtBQVRGO0FBWUEsaUJBQUE7QUFDQTtFQUNFLG9CQUFBO0FBVEY7QUFZQTtFQUNFLGVBQUE7QUFURjtBQVlBO0VBQ0ksWUFBQTtBQVRKO0FBZUEsZ0JBQUE7QUFDQTtFQUVFLHNCQUFBO0VBRUEseUJBQUE7QUFaRjtBQWVBO0VBRUUsd0JBQUE7RUFFQSx5QkFBQTtBQVpGO0FBZUE7RUFDRTtJQUNFLFVBQUE7RUFaRjtFQWVBO0lBQ0UsVUFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRSxzQkFBQTtBQWRGO0FBaUJBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWRGO0FBaUJBO0VBQ0UsY0FBQTtBQWRGO0FBZ0JBO0VBQ0U7SUFDRSxnQkFBQTtFQWJGOztFQWVBO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBRUUsK0JBQUE7RUFaSjtBQUNGO0FBZUEsa0JBQUE7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBYkQ7QUFnQkE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNDLHlCQUFBO0FBYkY7QUFnQkE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWJEO0FBZ0JBO0VBQ0Msa0JBQUE7QUFiRDtBQWlCQTtFQUNDLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFkRDtBQWlCQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBZEQ7QUFpQkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBZEQ7QUFpQkE7RUFDQyxjQUFBO0FBZEQ7QUFpQkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZEQ7QUFpQkE7RUFDQyxrQkFBQTtBQWREO0FBaUJBOzs7O0VBSUMsbUJBQUE7QUFkRDtBQWlCQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWREO0FBaUJBO0VBQ0MsY0FBQTtBQWREO0FBaUJBO0VBQ0MsU0FBQTtBQWREO0FBaUJBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkRDtBQWdCQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFiRDtBQWdCQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWJEO0FBZ0JBO0VBQ0MsZ0NBQUE7QUFiRDtBQWdCQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWJEO0FBZ0JBO0VBQ0MsY0FBQTtBQWJEO0FBZ0JBLHFEQUFBO0FBQ0E7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQWJEO0FBZ0JBO0VBQ0MsY0FBQTtBQWJEO0FBZ0JBO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFiRDtBQWdCQTtFQUNDLHlCQUFBO0FBYkQ7QUFrQkEsMENBQUE7QUFDQTtFQUNDO0lBQ0MsMEJBQUE7RUFmQTs7RUFrQkQ7Ozs7SUFJQyxjQUFBO0VBZkE7O0VBa0JEO0lBQ0MsV0FBQTtFQWZBO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm9wZXJzb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogMDEvMjgvMjAxNlxyXG4gKiBUaGlzIHBlbiBpcyB5ZWFycyBvbGQsIGFuZCB3YXRjaGluZyBhdCB0aGUgY29kZSBhZnRlciBhbGxcclxuICogdGhvc2UgeWVhcnMgbWFkZSBtZSBmYWxsIGZyb20gbXkgY2hhaXIsIHNvIEk6XHJcbiAqIC0gY2hhbmdlZCBhbGwgSURzIHRvIGNsYXNzZXNcclxuICogLSBjb252ZXJ0ZWQgYWxsIHVuaXRzIHRvIHBpeGVscyBhbmQgZW0gdW5pdHNcclxuICogLSBjaGFuZ2VkIGFsbCBnbG9iYWwgZWxlbWVudHMgdG8gY2xhc3NlcyBvciBjaGlsZHJlbiBvZlxyXG4gKiAgIC5sb2dpblxyXG4gKiAtIGNsZWFuZWQgdGhlIHN5bnRheCB0byBiZSBtb3JlIGNvbnNpc3RlbnRcclxuICogLSBhZGRlZCBhIGxvdCBvZiBzcGFjZXMgdGhhdCBJIHNvIGhhcmQgdHJpZWQgdG8gYXZvaWRcclxuICogICBhIGZldyB5ZWFycyBhZ29cclxuICogICAoYmVjYXVzZSBpdCdzIGNvb2wgdG8gbm90IHVzZSB0aGVtKVxyXG4gKiAtIGFuZCBwcm9iYWJseSBzb21ldGhpbmcgZWxzZSB0aGF0IEkgY2FuJ3QgcmVtZW1iZXIgYW55bW9yZVxyXG4gKlxyXG4gKiBJIHN0aWNrZWQgdG8gdGhlIHNhbWUgcGhpbG9zb3BoeSwgbWVhbmluZzpcclxuICogLSB0aGUgZGVzaWduIGlzIGFsbW9zdCB0aGUgc2FtZVxyXG4gKiAtIG9ubHkgcHVyZSBIVE1MIGFuZCBDU1NcclxuICogLSBubyBmcmFtZXdvcmtzLCBwcmVwcm9jZXNzb3JzIG9yIHJlc2V0c1xyXG4gKi9cclxuXHJcbi8qICdPcGVuIFNhbnMnIGZvbnQgZnJvbSBHb29nbGUgRm9udHMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcclxuXHJcbi8qIGJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICM0NTY7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59ICovXHJcblxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLy8gUmVzZXQgdG9wIGFuZCBib3R0b20gbWFyZ2lucyBmcm9tIGNlcnRhaW4gZWxlbWVudHNcclxuLmxvZ2luLWhlYWRlcixcclxuLmxvZ2luIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLy8gVGhlIHRyaWFuZ2xlIGZvcm0gaXMgYWNoaWV2ZWQgYnkgYSBDU1MgaGFjayBcclxuLmxvZ2luLXRyaWFuZ2xlIHtcclxuICB3aWR0aDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyOGQ7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi8vIEV2ZXJ5IHJvdyBpbnNpZGUgLmxvZ2luLWNvbnRhaW5lciBpcyBkZWZpbmVkIHdpdGggcCB0YWdzIFxyXG4ubG9naW4gcCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLy8gVGV4dCBmaWVsZHMnIGZvY3VzIGVmZmVjdCBcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogIzI4ZDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2M7XHJcbn1cclxuXHJcbi8vIEJ1dHRvbnMnIGZvY3VzIGVmZmVjdCBcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzA1YTtcclxufVxyXG5cclxuXHJcbi5tYXl1c2N1bGFze1xyXG4gIC8vIGVzIHBhcmEgaGFjZXIgbGFzIGxldHJhcyBtYXl1c2N1bGFzIGVuIGN1cnAgXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLyogTmF2YmFyIGxvZ2luICovXHJcbmJvZHl7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5pbWctbG9nb3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogQW5pbWFjaW9uZXMgKi9cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXRze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gIH1cclxuICAubG9naW4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYigwLCAwLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLyogQ1NTIGRlIHBydWViYSAqL1xyXG5tYWluIHtcclxuXHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm11bGFyaW8ge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cdGdhcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbGFiZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbnB1dCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvKiBiYWNrZ3JvdW5kOiAjRTVFNUU1OyAqL1xyXG5cdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRwYWRkaW5nOiAwIDQwcHggMCAxMHB4O1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0OmZvY3VzIHtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjMDA3NUZGO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogM3B4IDBweCAzMHB4IHJnYmEoMTYzLDE2MywxNjMsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19pbnB1dC1lcnJvciB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0LWVycm9yLWFjdGl2byB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG5cdGJvdHRvbTogMTVweDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19jaGVja2JveCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tdGVybWlub3MsIFxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZSxcclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhcixcclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1lbnZpYXIge1xyXG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplIHtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0YmFja2dyb3VuZDogI0Y2NjA2MDtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLWFjdGl2byB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplIHAge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1lbnZpYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3JtdWxhcmlvX19ncnVwby1idG4tcmVncmVzYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19idG4ge1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IC4xcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2J0bjpob3Zlcjpub3QoW2Rpc2FibGVkXSl7XHJcblx0Ym94LXNoYWRvdzogM3B4IDBweCAzMHB4ICNmMDQ0MDA7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLWV4aXRvIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICMxMTkyMDA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtZXhpdG8tYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogLS0tLS0gLS0tLS0gIEVzdGlsb3MgcGFyYSBWYWxpZGFjaW9uIC0tLS0tIC0tLS0tICovXHJcbi5mb3JtdWxhcmlvX19ncnVwby1jb3JyZWN0byAuZm9ybXVsYXJpb19fdmFsaWRhY2lvbi1lc3RhZG8ge1xyXG5cdGNvbG9yOiAjMWVkMTJkO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbmNvcnJlY3RvIC5mb3JtdWxhcmlvX19sYWJlbCB7XHJcblx0Y29sb3I6ICNiYjI5Mjk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby1pbmNvcnJlY3RvIC5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0Y29sb3I6ICNiYjI5Mjk7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX2lucHV0IHtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjYmIyOTI5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tIC0tLS0tICBNZWRpYXF1ZXJpZXMgLS0tLS0gLS0tLS0gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHQuZm9ybXVsYXJpbyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHR9XHJcblxyXG5cdC5mb3JtdWxhcmlvX19ncnVwby10ZXJtaW5vcywgXHJcblx0LmZvcm11bGFyaW9fX21lbnNhamUsXHJcblx0LmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhcixcclxuXHQuZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0XHRncmlkLWNvbHVtbjogMTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm11bGFyaW9fX2J0biB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_registropersonal_registropersonal_module_ts.js.map