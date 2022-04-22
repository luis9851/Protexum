"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 56651:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 91142);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 48163:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 56651);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 91142);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 91142:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./registro.page.html */ 41913);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 73329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ 52039);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);








let RegistroPage = class RegistroPage {
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
            form.value.pensionado == "" || form.value.rfc == "" || form.value.rol == "" ||
            form.value.telefono == "" || form.value.telefonoadicional == "") {
            this.FaltanDatos();
        }
        else {
            // pasa subir la imagem
            this.onSubmit();
            this.exito();
            // los datos de el elemento
            this.servicio.register(form.value).subscribe((res => {
                console.log(res.dataUser);
                // igualo la variable idUser para que tenga los datos de id del user
                this.idUser = res.dataUser.id;
                console.log(this.idUser);
                this.updateurl(this.idUser);
                this.router.navigate(['/login']);
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
RegistroPage.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_registro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 41913:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/registro/registro.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar class=\"color2\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #FED03D !important;\">\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://www.protexum.com.mx/wp-content/uploads/2018/01/logonew01.png\" height=\"30px\" width=\"mr-auto\" alt=\"Logo\">\r\n      </a>\r\n    \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <!-- active es la clase para hacer que resalte en el menu -->\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"#\">Inicio</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"/registro\">Registrarse</a>\r\n          </li>\r\n        </ul>\r\n    \r\n      </div>\r\n    </nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"login\" style=\"position: absolute;width: 100%; height: auto;\">\r\n    <main>\r\n      <h2 class=\"login-header\">Registra a tu nuevo elemento</h2>\r\n  \r\n    <form #frmRegister=\"ngForm\" class=\"formulario\" (ngSubmit)=\"Register(frmRegister)\">\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nombre\" placeholder=\"Nombre\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"apellidos\" placeholder=\"apellidos\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"curp\" placeholder=\"CURP\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"nsegurosocial\" placeholder=\"Numero de seguro social\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n        </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input mayusculas\" type=\"text\" name=\"rfc\" placeholder=\"RFC\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"domicilio\" placeholder=\"Av.Chicahuales, JesusMaria, Ags, codigo postal: 20000 \" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label class=\"formulario__label\">Fecha de entrada </ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadeentrada\" placeholder=\"Fecha de entrada\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <ion-label class=\"formulario__label\">Fecha de Nacimiento</ion-label>\r\n          <p><ion-input class=\"formulario__input\" type=\"date\" name=\"fechadenacimiento\" placeholder=\"Fecha de Nacimiento\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"telefono\" placeholder=\"Telefono \" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"tel\" name=\"telefonoadicional\" placeholder=\"Telefono Adicional\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"text\" name=\"creditodeInfonavit\" placeholder=\"Ingrese el numero de credito de Infonavit si lo tiene\" ngModel required=\"\" maxlength=\"15\"> </ion-input> </p>\r\n        </div>\r\n      </div>\r\n      <!-- <p><ion-input type=\"text\" name=\"estadocivil\" placeholder=\"Cual es su estado Civil\" ngModel required=\"\"> </ion-input> </p> -->\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item class=\"formulario__input\" >\r\n              <ion-label>Cual es su estado Civil:</ion-label>\r\n              <ion-select   ngModel   name=\"estadocivil\" required=\"\" >\r\n                  <ion-select-option value=\"Soltero\">Soltero</ion-select-option>\r\n                  <ion-select-option value=\"Casado\">Casado</ion-select-option>\r\n                  <ion-select-option value=\"Divorciado\">Divorciado</ion-select-option>\r\n                  <ion-select-option value=\"Viudo\">Viudo</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"email\" name=\"correoelectronico\" placeholder=\"correoelectronico\" ngModel required=\"\"> </ion-input> </p>\r\n        </div>\r\n      </div> \r\n        <!-- <p><ion-input type=\"text\" name=\"pensionado\" placeholder=\"Es pensionado\" ngModel required=\"\"> </ion-input> </p>   -->\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item  class=\"formulario__input\">\r\n              <ion-label>Es pensionado:</ion-label>\r\n              <ion-select   ngModel   name=\"pensionado\" required=\"\" >\r\n                  <ion-select-option value=\"Si\">Si</ion-select-option>\r\n                  <ion-select-option value=\"No\">No</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- <p><ion-input type=\"text\" name=\"niveldeescolaridad\" placeholder=\"Nivel de Escolaridad\" ngModel required=\"\"> </ion-input> </p>   -->\r\n    \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p>\r\n            <ion-item  class=\"formulario__input\">\r\n              <ion-label>Nivel de Escolaridad:</ion-label>\r\n              <ion-select ngModel   name=\"niveldeescolaridad\" required=\"\" >\r\n                  <ion-select-option value=\"Primaria\">Primaria</ion-select-option>\r\n                  <ion-select-option value=\"Secundaria\">Secundaria </ion-select-option>\r\n                  <ion-select-option value=\"Preparatoria\">Preparatoria</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </p>\r\n        </div>\r\n      </div>\r\n     \r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-input class=\"formulario__input\" type=\"password\" name=\"contrasena\" placeholder=\"Contrasena\" ngModel required> </ion-input></p>\r\n        </div> \r\n      </div>\r\n      <div class=\"formulario__grupo\">\r\n        <div class=\"formulario__grupo-input\">\r\n          <p><ion-label>Agrega Foto del Elemento</ion-label></p>\r\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit()\">\r\n            <input type=\"file\" placeholder=\"File\" (change)=\"onFileChange($event)\"\r\n          formControlName=\"file\" >\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <p><input class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #000000; color: #FFFFFF;font-weight: bold;\" type=\"submit\" value=\"Registrar\"> </p>\r\n    </form>\r\n  </main>\r\n   \r\n  </div>\r\n</ion-content>\r\n\r\n\r\n  ");

/***/ }),

/***/ 73329:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\n/* body {\n  background: #456;\n  font-family: 'Open Sans', sans-serif;\n} */\n.login {\n  width: auto;\n  margin: 16px auto;\n  font-size: 16px;\n}\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #28d;\n}\n.login-header {\n  background: #000000;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  font-weight: bold;\n  height: 100%;\n}\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #28d;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n.login input[type=submit]:focus {\n  border-color: #05a;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 0px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    background-color: #FFFFFF;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/* CSS de prueba */\nmain {\n  max-width: 800px;\n  width: 90%;\n  margin: auto;\n  padding: 0px;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  background-color: #e4e4e4;\n}\n.formulario__label {\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n}\n.formulario__grupo-input {\n  position: relative;\n}\n.formulario__input {\n  width: 100%;\n  /* background: #E5E5E5; */\n  background: #FFFFFF;\n  border: 3px solid transparent;\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n.formulario__input:focus {\n  border: 3px solid #0075FF;\n  outline: none;\n  box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n}\n.formulario__input-error {\n  font-size: 12px;\n  margin-bottom: 0;\n  display: none;\n}\n.formulario__input-error-activo {\n  display: block;\n}\n.formulario__validacion-estado {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n}\n.formulario__checkbox {\n  margin-right: 10px;\n}\n.formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n  grid-column: span 2;\n}\n.formulario__mensaje {\n  height: 45px;\n  line-height: 45px;\n  background: #F66060;\n  padding: 0 15px;\n  border-radius: 3px;\n  display: none;\n}\n.formulario__mensaje-activo {\n  display: block;\n}\n.formulario__mensaje p {\n  margin: 0;\n}\n.formulario__grupo-btn-enviar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.formulario__grupo-btn-regresar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100% !important;\n}\n.formulario__btn {\n  height: 45px;\n  line-height: 45px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n}\n.formulario__btn:hover:not([disabled]) {\n  box-shadow: 3px 0px 30px #f04400;\n}\n.formulario__mensaje-exito {\n  font-size: 14px;\n  color: #119200;\n  display: none;\n}\n.formulario__mensaje-exito-activo {\n  display: block;\n}\n/* ----- -----  Estilos para Validacion ----- ----- */\n.formulario__grupo-correcto .formulario__validacion-estado {\n  color: #1ed12d;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__label {\n  color: #bb2929;\n}\n.formulario__grupo-incorrecto .formulario__validacion-estado {\n  color: #bb2929;\n  opacity: 1;\n}\n.formulario__grupo-incorrecto .formulario__input {\n  border: 3px solid #bb2929;\n}\n/* ----- -----  Mediaqueries ----- ----- */\n@media screen and (max-width: 992px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n\n  .formulario__grupo-terminos,\n.formulario__mensaje,\n.formulario__grupo-btn-regresar,\n.formulario__grupo-btn-enviar {\n    grid-column: 1;\n  }\n\n  .formulario__btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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O0FBZEQ7QUFnQkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBYkQ7QUFnQkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFiRDtBQWdCQTtFQUNDLGdDQUFBO0FBYkQ7QUFnQkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7QUFiRDtBQWdCQSxxREFBQTtBQUNBO0VBQ0MsY0FBQTtFQUNBLFVBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7QUFiRDtBQWdCQTtFQUNDLGNBQUE7RUFDQSxVQUFBO0FBYkQ7QUFnQkE7RUFDQyx5QkFBQTtBQWJEO0FBa0JBLDBDQUFBO0FBQ0E7RUFDQztJQUNDLDBCQUFBO0VBZkE7O0VBa0JEOzs7O0lBSUMsY0FBQTtFQWZBOztFQWtCRDtJQUNDLFdBQUE7RUFmQTtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiAwMS8yOC8yMDE2XHJcbiAqIFRoaXMgcGVuIGlzIHllYXJzIG9sZCwgYW5kIHdhdGNoaW5nIGF0IHRoZSBjb2RlIGFmdGVyIGFsbFxyXG4gKiB0aG9zZSB5ZWFycyBtYWRlIG1lIGZhbGwgZnJvbSBteSBjaGFpciwgc28gSTpcclxuICogLSBjaGFuZ2VkIGFsbCBJRHMgdG8gY2xhc3Nlc1xyXG4gKiAtIGNvbnZlcnRlZCBhbGwgdW5pdHMgdG8gcGl4ZWxzIGFuZCBlbSB1bml0c1xyXG4gKiAtIGNoYW5nZWQgYWxsIGdsb2JhbCBlbGVtZW50cyB0byBjbGFzc2VzIG9yIGNoaWxkcmVuIG9mXHJcbiAqICAgLmxvZ2luXHJcbiAqIC0gY2xlYW5lZCB0aGUgc3ludGF4IHRvIGJlIG1vcmUgY29uc2lzdGVudFxyXG4gKiAtIGFkZGVkIGEgbG90IG9mIHNwYWNlcyB0aGF0IEkgc28gaGFyZCB0cmllZCB0byBhdm9pZFxyXG4gKiAgIGEgZmV3IHllYXJzIGFnb1xyXG4gKiAgIChiZWNhdXNlIGl0J3MgY29vbCB0byBub3QgdXNlIHRoZW0pXHJcbiAqIC0gYW5kIHByb2JhYmx5IHNvbWV0aGluZyBlbHNlIHRoYXQgSSBjYW4ndCByZW1lbWJlciBhbnltb3JlXHJcbiAqXHJcbiAqIEkgc3RpY2tlZCB0byB0aGUgc2FtZSBwaGlsb3NvcGh5LCBtZWFuaW5nOlxyXG4gKiAtIHRoZSBkZXNpZ24gaXMgYWxtb3N0IHRoZSBzYW1lXHJcbiAqIC0gb25seSBwdXJlIEhUTUwgYW5kIENTU1xyXG4gKiAtIG5vIGZyYW1ld29ya3MsIHByZXByb2Nlc3NvcnMgb3IgcmVzZXRzXHJcbiAqL1xyXG5cclxuLyogJ09wZW4gU2FucycgZm9udCBmcm9tIEdvb2dsZSBGb250cyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDApO1xyXG5cclxuLyogYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzQ1NjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn0gKi9cclxuXHJcbi5sb2dpbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vLyBSZXNldCB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zIGZyb20gY2VydGFpbiBlbGVtZW50c1xyXG4ubG9naW4taGVhZGVyLFxyXG4ubG9naW4gcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vLyBUaGUgdHJpYW5nbGUgZm9ybSBpcyBhY2hpZXZlZCBieSBhIENTUyBoYWNrIFxyXG4ubG9naW4tdHJpYW5nbGUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI4ZDtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLy8gRXZlcnkgcm93IGluc2lkZSAubG9naW4tY29udGFpbmVyIGlzIGRlZmluZWQgd2l0aCBwIHRhZ3MgXHJcbi5sb2dpbiBwIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4vLyBUZXh0IGZpZWxkcycgZm9jdXMgZWZmZWN0IFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhkO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzE3YztcclxufVxyXG5cclxuLy8gQnV0dG9ucycgZm9jdXMgZWZmZWN0IFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDVhO1xyXG59XHJcblxyXG5cclxuLm1heXVzY3VsYXN7XHJcbiAgLy8gZXMgcGFyYSBoYWNlciBsYXMgbGV0cmFzIG1heXVzY3VsYXMgZW4gY3VycCBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBOYXZiYXIgbG9naW4gKi9cclxuYm9keXtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBBbmltYWNpb25lcyAqL1xyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgfVxyXG4gIC5sb2dpbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApXHJcbiAgfVxyXG59XHJcblxyXG4vKiBDU1MgZGUgcHJ1ZWJhICovXHJcbm1haW4ge1xyXG5cdG1heC13aWR0aDogODAwcHg7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0Z2FwOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19sYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWlucHV0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC8qIGJhY2tncm91bmQ6ICNFNUU1RTU7ICovXHJcblx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdHBhZGRpbmc6IDAgNDBweCAwIDEwcHg7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQ6Zm9jdXMge1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICMwMDc1RkY7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3gtc2hhZG93OiAzcHggMHB4IDMwcHggcmdiYSgxNjMsMTYzLDE2MywgMC40KTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2lucHV0LWVycm9yIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19faW5wdXQtZXJyb3ItYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX3ZhbGlkYWNpb24tZXN0YWRvIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym90dG9tOiAxNXB4O1xyXG5cdHotaW5kZXg6IDEwMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2NoZWNrYm94IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX19ncnVwby10ZXJtaW5vcywgXHJcbi5mb3JtdWxhcmlvX19tZW5zYWplLFxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLXJlZ3Jlc2FyLFxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUge1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjRjY2MDYwO1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtYWN0aXZvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8tYnRuLWVudmlhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm11bGFyaW9fX2dydXBvLWJ0bi1yZWdyZXNhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2J0biB7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjFzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fYnRuOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtcclxuXHRib3gtc2hhZG93OiAzcHggMHB4IDMwcHggI2YwNDQwMDtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX21lbnNhamUtZXhpdG8ge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzExOTIwMDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fbWVuc2FqZS1leGl0by1hY3Rpdm8ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiAtLS0tLSAtLS0tLSAgRXN0aWxvcyBwYXJhIFZhbGlkYWNpb24gLS0tLS0gLS0tLS0gKi9cclxuLmZvcm11bGFyaW9fX2dydXBvLWNvcnJlY3RvIC5mb3JtdWxhcmlvX192YWxpZGFjaW9uLWVzdGFkbyB7XHJcblx0Y29sb3I6ICMxZWQxMmQ7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX2xhYmVsIHtcclxuXHRjb2xvcjogI2JiMjkyOTtcclxufVxyXG5cclxuLmZvcm11bGFyaW9fX2dydXBvLWluY29ycmVjdG8gLmZvcm11bGFyaW9fX3ZhbGlkYWNpb24tZXN0YWRvIHtcclxuXHRjb2xvcjogI2JiMjkyOTtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb19fZ3J1cG8taW5jb3JyZWN0byAuZm9ybXVsYXJpb19faW5wdXQge1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICNiYjI5Mjk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0gLS0tLS0gIE1lZGlhcXVlcmllcyAtLS0tLSAtLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cdC5mb3JtdWxhcmlvIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdH1cclxuXHJcblx0LmZvcm11bGFyaW9fX2dydXBvLXRlcm1pbm9zLCBcclxuXHQuZm9ybXVsYXJpb19fbWVuc2FqZSxcclxuXHQuZm9ybXVsYXJpb19fZ3J1cG8tYnRuLXJlZ3Jlc2FyLFxyXG5cdC5mb3JtdWxhcmlvX19ncnVwby1idG4tZW52aWFyIHtcclxuXHRcdGdyaWQtY29sdW1uOiAxO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXVsYXJpb19fYnRuIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHRcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map