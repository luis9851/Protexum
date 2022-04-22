"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editar-user_editar-user_module_ts"],{

/***/ 27270:
/*!***********************************************************!*\
  !*** ./src/app/editar-user/editar-user-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUserPageRoutingModule": () => (/* binding */ EditarUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _editar_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-user.page */ 36370);




const routes = [
    {
        path: '',
        component: _editar_user_page__WEBPACK_IMPORTED_MODULE_0__.EditarUserPage
    }
];
let EditarUserPageRoutingModule = class EditarUserPageRoutingModule {
};
EditarUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarUserPageRoutingModule);



/***/ }),

/***/ 37468:
/*!***************************************************!*\
  !*** ./src/app/editar-user/editar-user.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUserPageModule": () => (/* binding */ EditarUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _editar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-user-routing.module */ 27270);
/* harmony import */ var _editar_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-user.page */ 36370);






// import { MAT_DATE_LOCALE} from '@angular/material/core'

let EditarUserPageModule = class EditarUserPageModule {
};
EditarUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarUserPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_editar_user_page__WEBPACK_IMPORTED_MODULE_1__.EditarUserPage],
        // providers:[
        //   {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
        // ]
    })
], EditarUserPageModule);



/***/ }),

/***/ 36370:
/*!*************************************************!*\
  !*** ./src/app/editar-user/editar-user.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUserPage": () => (/* binding */ EditarUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editar-user.page.html */ 50727);
/* harmony import */ var _editar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-user.page.scss */ 33698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ 52039);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);







let EditarUserPage = class EditarUserPage {
    constructor(servicio, activatedRoute, router, fb) {
        this.servicio = servicio;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fb = fb;
        //imagen del usuario
        this.urlfile = [];
        this.userForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            apellidos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            curp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            nsegurosocial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            rfc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            domicilio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            fechadeentrada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            fechadenacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            telefonoadicional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            creditodeInfonavit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            estadocivil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            correoelectronico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdeplayera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddeplayera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdepantalon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddepantalon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdebotas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddebotas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdecachucha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddecachucha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdechamarra: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddechamarra: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdechaleco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddechaleco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            cdelentes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ddelentes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            pensionado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            niveldeescolaridad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            sueldo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
    }
    ngOnInit() {
        this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
        this.Editar();
    }
    // este metodo es para mandar a traer los datos del usuario
    Editar() {
        if (this.id !== null) {
            this.servicio.obtenerUser(this.id).subscribe(data => {
                console.log(data.user);
                this.urlfile = data.user.fileUrl;
                let user = data.user;
                this.userForm.patchValue(user);
            });
        }
    }
    actualizar() {
        console.log(this.userForm);
        // recorada ponerle una alerta para cuando actualizar las imagenes y preguntar si los datos esta bien puestos
        this.servicio.Editar_U(this.id, this.userForm.value).subscribe((res => {
            console.log(res.dataUser);
            //  // igualo la variable idUser para que tenga los datos de id del user
            this.idUser = this.id;
            this.router.navigate(['/main']);
        }));
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
    updateurl2() {
        this.servicio.disparadoridmage.subscribe(data => {
            console.log(this.id);
            //  aqui estoy mandando a llamar la funcion para id
            this.servicio.actualizarimagen(this.id, data.data).subscribe((res => {
                console.log(res);
            }));
        });
    }
    onSubmit() {
        const form = this.imageForm;
        form.value.name = "Foto";
        this.servicio.uploadImage(form.value.name, this.file)
            .subscribe(res => {
            this.updateurl2();
            this.servicio.disparadoridmage.emit({
                data: res.dataimage.fileUrl
            });
            this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
                file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null)
            });
        });
    }
};
EditarUserPage.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
EditarUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editar-user',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditarUserPage);



/***/ }),

/***/ 50727:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/editar-user/editar-user.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://www.protexum.com.mx/wp-content/uploads/2018/01/logonew01.png\" height=\"30px\" width=\"mr-auto\" alt=\"Logo\">\r\n      </a>\r\n<ion-content  class=\"fondo\" [fullscreen]=\"true\">\r\n<ion-grid class=\"login\" >\r\n  <ion-grid class=\"\"></ion-grid>\r\n\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"https://www.protexum.com.mx/wp-content/uploads/2018/01/logonew01.png\" height=\"60px\" width=\"mr-auto\" alt=\"Logo\">\r\n  </a>\r\n  \r\n  <h2 class=\"login-header\">Actualizar informacion</h2>\r\n\r\n\r\n  \r\n  <form [formGroup]=\"userForm\" class=\"login-container\" (ngSubmit)=\"actualizar()\" >\r\n\r\n\r\n     <!-- creo que esto ya podria funcionar solo un detallito con lo del diseño pero lo resuelvo una vez el diseño este echo-->\r\n    <!-- <div class=\"perfil-usuario-header\" >\r\n\r\n      <div class=\"perfil-usuario-portada\">\r\n          <div class=\"perfil-usuario-avatar\">\r\n              <img src=\"{{urlfile.fileUrl }}\" alt=\"img-avatar\">\r\n              <button type=\"button\" class=\"boton-avatar\">\r\n                  <i class=\"far fa-image\"></i>\r\n              </button>\r\n          </div>\r\n          <button type=\"button\" class=\"boton-portada\">\r\n              <i class=\"far fa-image\"></i> Cambiar fondo\r\n          </button>\r\n      </div>\r\n  </div> -->\r\n\r\n    <p><ion-input type=\"text\" placeholder=\"Nombre\" formControlName=\"nombre\" require=\"\" > </ion-input>\r\n    <p><ion-input type=\"text\" name=\"apellidos\" placeholder=\"apellidos\" formControlName=\"apellidos\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"curp\" placeholder=\"CURP\"  required=\"\" formControlName=\"curp\"  class=\"mayusculas\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"nsegurosocial\" placeholder=\"Numero de seguro social\"  formControlName=\"nsegurosocial\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"rfc\" placeholder=\"RFC\"  formControlName=\"rfc\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"domicilio\" placeholder=\"domicilio\" formControlName=\"domicilio\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"tel\" name=\"telefono\" placeholder=\"Telefono\" formControlName=\"telefono\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"tel\" name=\"telefonoadicional\" placeholder=\"Telefono Adicional\" formControlName=\"telefonoadicional\"  required=\"\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"creditodeInfonavit\" placeholder=\"Ingrese el numero de credito si lo tiene\"  formControlName=\"creditodeInfonavit\"  required=\"\" maxlength=\"15\"> </ion-input> </p>\r\n    <!-- <p><ion-input type=\"text\" name=\"estadocivil\" placeholder=\"Cual es su estado Civil\" ngModel required=\"\"> </ion-input> </p> -->\r\n    <ion-item  >\r\n      <ion-label>Cual es su estado Civil:</ion-label>\r\n      <ion-select  formControlName=\"estadocivil\"     name=\"estadocivil\" required=\"\" >\r\n          <ion-select-option value=\"Soltero\">Soltero</ion-select-option>\r\n          <ion-select-option value=\"Casado\">Casado</ion-select-option>\r\n          <ion-select-option value=\"Divorciado\">Divorciado</ion-select-option>\r\n          <ion-select-option value=\"Viudo\">Viudo</ion-select-option>\r\n        \r\n      </ion-select>\r\n  </ion-item>\r\n  \r\n    <p><ion-input type=\"email\" name=\"correoelectronico\" placeholder=\"correoelectronico\" formControlName=\"correoelectronico\"  required=\"\"> </ion-input> </p>\r\n     <ion-label > Cantidad y Descripcion de playera </ion-label>\r\n    <p><ion-input type=\"number\"name=\"cdeplayera\" placeholder=\"Cantidad de playeras\" formControlName=\"cdeplayera\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddeplayera\" placeholder=\"Descripcion de playeras\" formControlName=\"ddeplayera\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de pantalon </ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdepantalon\" placeholder=\"Cantidad de pantalon\" formControlName=\"cdepantalon\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddepantalon\" placeholder=\"Descripcion de pantalon\" formControlName=\"ddepantalon\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de botas </ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdebotas\" placeholder=\"Cantidad de botas\" formControlName=\"cdebotas\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddebotas\" placeholder=\"Descripcion de botas\" formControlName=\"ddebotas\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de cachucha</ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdecachucha\" placeholder=\"Cantidad de cachucha\" formControlName=\"cdecachucha\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddecachucha\" placeholder=\"Descripcion de cachucha\" formControlName=\"ddecachucha\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de chamarra</ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdechamarra\" placeholder=\"Cantidad de chamarra\" formControlName=\"cdechamarra\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddechamarra\" placeholder=\"Descripcion de chamarra\" formControlName=\"ddechamarra\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de chaleco </ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdechaleco\" placeholder=\"Cantidad de chaleco\" formControlName=\"cdechaleco\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"cdechaleco\" placeholder=\"Descripcion de chaleco\" formControlName=\"ddechaleco\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <ion-label > Cantidad y Descripcion de lentes </ion-label>\r\n    <p><ion-input type=\"number\" name=\"cdelentes\" placeholder=\"Cantidad de lentes\"formControlName=\"cdelentes\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n    <p><ion-input type=\"text\" name=\"ddelentes\" placeholder=\"Descripcion de lentes\" formControlName=\"ddelentes\"  required=\"\" maxlength=\"25\"> </ion-input> </p>\r\n   \r\n       <ion-item  >\r\n      <ion-label>Es pensionado:</ion-label>\r\n      <ion-select  formControlName=\"pensionado\"    name=\"pensionado\" required=\"\" >\r\n          <ion-select-option value=\"Si\">Si</ion-select-option>\r\n          <ion-select-option value=\"No\">No</ion-select-option>\r\n        \r\n        \r\n      </ion-select>\r\n  </ion-item>\r\n      \r\n  \r\n    <ion-item  >\r\n      <ion-label>Nivel de Escolaridad:</ion-label>\r\n      <ion-select    formControlName=\"niveldeescolaridad\"   name=\"niveldeescolaridad\" required=\"\" >\r\n          <ion-select-option value=\"Primaria\">Primaria</ion-select-option>\r\n          <ion-select-option value=\"Secundaria\">Secundaria </ion-select-option>\r\n          <ion-select-option value=\"Preparatoria\">Preparatoria</ion-select-option>\r\n        \r\n      </ion-select>\r\n  </ion-item>\r\n  <p><ion-input type=\"Number\" placeholder=\"Sueldo \" formControlName=\"sueldo\" require=\"\" > </ion-input>\r\n \r\n\r\n\r\n\r\n  <ion-label>Seleccione una nueva fotografía</ion-label>\r\n\r\n  <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit()\">\r\n    <input type=\"file\" placeholder=\"File\" (change)=\"onFileChange($event)\"\r\n   formControlName=\"file\" >\r\n\r\n   <p>\r\n   <input style=\"background-color: #FE693D\"  type=\"submit\" value=\"Actualizar Foto\">\r\n  </p>\r\n   </form>\r\n \r\n  <p> \r\n    <input  class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"submit\" value=\"Actualizar\">\r\n</p> \r\n    \r\n  </form>\r\n\r\n \r\n</ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 33698:
/*!***************************************************!*\
  !*** ./src/app/editar-user/editar-user.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n/**\n * 01/28/2016\n * This pen is years old, and watching at the code after all\n * those years made me fall from my chair, so I:\n * - changed all IDs to classes\n * - converted all units to pixels and em units\n * - changed all global elements to classes or children of\n *   .login\n * - cleaned the syntax to be more consistent\n * - added a lot of spaces that I so hard tried to avoid\n *   a few years ago\n *   (because it's cool to not use them)\n * - and probably something else that I can't remember anymore\n *\n * I sticked to the same philosophy, meaning:\n * - the design is almost the same\n * - only pure HTML and CSS\n * - no frameworks, preprocessors or resets\n */\n/* 'Open Sans' font from Google Fonts */\nbody {\n  background: white;\n  font-family: \"Open Sans\", sans-serif;\n}\n.login {\n  width: 400px;\n  margin: 16px auto;\n  background-color: #FED03D;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  font-size: 16px;\n  background: #FED03D;\n  border-radius: 15px;\n  box-shadow: 0 30px 60px 0 black;\n}\n/* Reset top and bottom margins from certain elements */\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n/* The triangle form is achieved by a CSS hack */\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n}\n.login-header {\n  background: #FED03D;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: black;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n}\n.login-container {\n  border-radius: 15px;\n  background: #ffffff;\n  padding: 12px;\n  font-size: 0.95em;\n  border-width: 1px;\n  border-style: solid;\n  box-sizing: border-box;\n  display: grid;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n}\n/* Every row inside .login-container is defined with p tags */\n.login p {\n  padding: 12px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n  background-color: #d3d3d3;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: black;\n  border-color: black;\n  color: #555;\n}\n/* Text fields' focus effect */\n.login input[type=email]:focus,\n.login input[type=password]:focus {\n  border-color: #888;\n}\n.login input[type=submit] {\n  background: #FE693D;\n  border-color: #FED03D;\n  border-radius: 35px;\n  font-size: 0.97em;\n  color: white;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #17c;\n}\n/* Buttons' focus effect */\n.login input[type=submit]:focus {\n  border-color: #FE693D;\n}\n.mayusculas {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBcUJRLHNFQUFBO0FBckJSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQW9CQSx1Q0FBQTtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxvQ0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVFLCtCQUFBO0FBRE47QUFJQSx1REFBQTtBQUNBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUEsZ0RBQUE7QUFDQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFERjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNFLGFBQUE7RUFFQSxzQkFBQTtFQUNBLHlCQUFBO0FBSko7QUFNQSw2REFBQTtBQUNBO0VBQ0UsYUFBQTtBQUhGO0FBTUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBSEY7QUFNQTs7RUFFRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUEsOEJBQUE7QUFDQTs7RUFFRSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEY7QUFNQTtFQUNFLGdCQUFBO0FBSEY7QUFNQSwwQkFBQTtBQUNBO0VBQ0UscUJBQUE7QUFIRjtBQU9BO0VBRUUseUJBQUE7QUFMRiIsImZpbGUiOiJlZGl0YXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogMDEvMjgvMjAxNlxyXG4gKiBUaGlzIHBlbiBpcyB5ZWFycyBvbGQsIGFuZCB3YXRjaGluZyBhdCB0aGUgY29kZSBhZnRlciBhbGxcclxuICogdGhvc2UgeWVhcnMgbWFkZSBtZSBmYWxsIGZyb20gbXkgY2hhaXIsIHNvIEk6XHJcbiAqIC0gY2hhbmdlZCBhbGwgSURzIHRvIGNsYXNzZXNcclxuICogLSBjb252ZXJ0ZWQgYWxsIHVuaXRzIHRvIHBpeGVscyBhbmQgZW0gdW5pdHNcclxuICogLSBjaGFuZ2VkIGFsbCBnbG9iYWwgZWxlbWVudHMgdG8gY2xhc3NlcyBvciBjaGlsZHJlbiBvZlxyXG4gKiAgIC5sb2dpblxyXG4gKiAtIGNsZWFuZWQgdGhlIHN5bnRheCB0byBiZSBtb3JlIGNvbnNpc3RlbnRcclxuICogLSBhZGRlZCBhIGxvdCBvZiBzcGFjZXMgdGhhdCBJIHNvIGhhcmQgdHJpZWQgdG8gYXZvaWRcclxuICogICBhIGZldyB5ZWFycyBhZ29cclxuICogICAoYmVjYXVzZSBpdCdzIGNvb2wgdG8gbm90IHVzZSB0aGVtKVxyXG4gKiAtIGFuZCBwcm9iYWJseSBzb21ldGhpbmcgZWxzZSB0aGF0IEkgY2FuJ3QgcmVtZW1iZXIgYW55bW9yZVxyXG4gKlxyXG4gKiBJIHN0aWNrZWQgdG8gdGhlIHNhbWUgcGhpbG9zb3BoeSwgbWVhbmluZzpcclxuICogLSB0aGUgZGVzaWduIGlzIGFsbW9zdCB0aGUgc2FtZVxyXG4gKiAtIG9ubHkgcHVyZSBIVE1MIGFuZCBDU1NcclxuICogLSBubyBmcmFtZXdvcmtzLCBwcmVwcm9jZXNzb3JzIG9yIHJlc2V0c1xyXG4gKi9cclxuXHJcbi8qICdPcGVuIFNhbnMnIGZvbnQgZnJvbSBHb29nbGUgRm9udHMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDAzRDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRUQwM0Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApXHJcbiAgfVxyXG5cclxuLyogUmVzZXQgdG9wIGFuZCBib3R0b20gbWFyZ2lucyBmcm9tIGNlcnRhaW4gZWxlbWVudHMgKi9cclxuLmxvZ2luLWhlYWRlcixcclxuLmxvZ2luIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogVGhlIHRyaWFuZ2xlIGZvcm0gaXMgYWNoaWV2ZWQgYnkgYSBDU1MgaGFjayAqL1xyXG4ubG9naW4tdHJpYW5nbGUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiBcclxuXHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRUQwM0Q7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDAgNDBweCAwIDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGxcclxuICB9XHJcbi8qIEV2ZXJ5IHJvdyBpbnNpZGUgLmxvZ2luLWNvbnRhaW5lciBpcyBkZWZpbmVkIHdpdGggcCB0YWdzICovXHJcbi5sb2dpbiBwIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkM1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi8qIFRleHQgZmllbGRzJyBmb2N1cyBlZmZlY3QgKi9cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogI0ZFNjkzRDtcclxuICBib3JkZXItY29sb3I6ICNGRUQwM0Q7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBmb250LXNpemU6IDAuOTdlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2M7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMnIGZvY3VzIGVmZmVjdCAqL1xyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRkU2OTNEO1xyXG59XHJcblxyXG5cclxuLm1heXVzY3VsYXN7XHJcbiAgLy8gZXMgcGFyYSBoYWNlciBsYXMgbGV0cmFzIG1heXVzY3VsYXMgZW4gY3VycCBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_editar-user_editar-user_module_ts.js.map