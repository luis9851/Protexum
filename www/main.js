(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 48163)).then(m => m.RegistroPageModule)
    },
    {
        path: 'home/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 28245)).then(m => m.HomePageModule)
    },
    {
        path: 'user/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 23765)).then(m => m.UserPageModule)
    },
    {
        path: 'editar-user/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editar-user_editar-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editar-user/editar-user.module */ 37468)).then(m => m.EditarUserPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'registroclients',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registroclients_registroclients_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registroclients/registroclients.module */ 90285)).then(m => m.RegistroclientsPageModule)
    },
    {
        path: 'registropersonal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registropersonal_registropersonal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registropersonal/registropersonal.module */ 64874)).then(m => m.RegistropersonalPageModule)
    },
    {
        path: 'list-clients',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_list-clients_list-clients_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list-clients/list-clients.module */ 98086)).then(m => m.ListClientsPageModule)
    },
    {
        path: 'client/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_client_client_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./client/client.module */ 21164)).then(m => m.ClientPageModule)
    },
    {
        path: 'olvidastecontrasena',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_olvidastecontrasena_olvidastecontrasena_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./olvidastecontrasena/olvidastecontrasena.module */ 2303)).then(m => m.OlvidastecontrasenaPageModule)
    },
    {
        path: 'recuperarcontrasena/:token',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_recuperarcontrasena_recuperarcontrasena_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recuperarcontrasena/recuperarcontrasena.module */ 25305)).then(m => m.RecuperarcontrasenaPageModule)
    },
    {
        path: 'registroservices/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registroservices_registroservices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registroservices/registroservices.module */ 59575)).then(m => m.RegistroservicesPageModule)
    },
    {
        path: 'list-services',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_list-services_list-services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list-services/list-services.module */ 55222)).then(m => m.ListServicesPageModule)
    },
    {
        path: 'services/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_services_pages_services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./services.pages/services.module */ 42701)).then(m => m.ServicesPageModule)
    },
    {
        path: 'editar-service/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editar-service_editar-service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editar-service/editar-service.module */ 32873)).then(m => m.EditarServicePageModule)
    },
    {
        path: 'equiporecibido/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_equiporecibido_equiporecibido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./equiporecibido/equiporecibido.module */ 52877)).then(m => m.EquiporecibidoPageModule)
    },
    {
        path: 'editar-equip/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editar-equip_editar-equip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editar-equip/editar-equip.module */ 94148)).then(m => m.EditarEquipPageModule)
    },
    {
        path: 'borrow/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_borrow_borrow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./borrow/borrow.module */ 17408)).then(m => m.BorrowPageModule)
    },
    {
        path: 'editar-borrow/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editar-borrow_editar-borrow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editar-borrow/editar-borrow.module */ 56741)).then(m => m.EditarBorrowPageModule)
    },
    {
        path: 'table-control/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_table-control_table-control_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./table-control/table-control.module */ 64195)).then(m => m.TableControlPageModule)
    },
    {
        path: 'registroprestamos/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registroprestamos_registroprestamos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registroprestamos/registroprestamos.module */ 21508)).then(m => m.RegistroprestamosPageModule)
    },
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 74261)).then(m => m.MainPageModule)
    },
    {
        path: 'table/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_table_table_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./table/table.module */ 18137)).then(m => m.TablePageModule)
    },
    {
        path: 'nomina',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nomina_nomina_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nomina/nomina.module */ 77906)).then(m => m.NominaPageModule)
    },
    {
        path: 'pase-lista',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pase-lista_pase-lista_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pase-lista/pase-lista.module */ 78925)).then(m => m.PaseListaPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/login.service */ 52039);





let AppComponent = class AppComponent {
    constructor(servicio) {
        this.servicio = servicio;
        this.Apermisos = false;
        this.Spermisos = false;
        this.Gpermisos = false;
        this.Admin = "Admin";
        this.Guardia = "Guardia";
        this.Supervisor = "Supervisor";
        this.appPages = [
            { title: 'Registro de Elementos', url: '/registro', icon: 'people' },
        ];
        this.appSpages = [
            { title: 'Lista de Elementos', url: '/lista-elementos', icon: 'list' },
        ];
    }
    ngOnInit() {
        console.log(this.Apermisos);
        this.servicio.disparadorderol.subscribe(data => {
            console.log("recibiendo data ..", data.data);
            if (data.data == this.Admin) {
                console.log(this.Admin);
                this.Apermisos = true;
            }
            if (data.data == this.Supervisor) {
                console.log(this.Spermisos);
                this.Spermisos = true;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 57693);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.module */ 69549);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ 28245);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);





/* Componets */

/* modules */




/* Pages */


let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_4__.HomePageModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule],
        exports: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 31382:
/*!*****************************************************************!*\
  !*** ./src/app/components/card-borrow/card-borrow.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardBorrowComponent": () => (/* binding */ CardBorrowComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_borrow_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./card-borrow.component.html */ 24637);
/* harmony import */ var _card_borrow_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-borrow.component.scss */ 51370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_service_borrowing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/borrowing.service */ 13802);







let CardBorrowComponent = class CardBorrowComponent {
    constructor(router, servicio, toast) {
        this.router = router;
        this.servicio = servicio;
        this.toast = toast;
        this.borrow = {};
        this.userSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    verPrestamo(_id) {
        this.indexP = _id;
        this.router.navigate(['/borrow', this.indexP]);
        console.log(this.indexP);
    }
    Editar_P(_id) {
        this.indexEP = _id;
        this.router.navigate(['/editar-borrow', this.indexEP]);
        console.log(this.indexEP);
    }
    delete(_id) {
        this.servicio.deletePrestamos(_id).subscribe(data => {
            this.presentToast();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "Prestamo pagado con exito",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
CardBorrowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_borrowing_service__WEBPACK_IMPORTED_MODULE_2__.BorrowingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
CardBorrowComponent.propDecorators = {
    borrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexEP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userSeleccionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CardBorrowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-card-borrow',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_borrow_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_card_borrow_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardBorrowComponent);



/***/ }),

/***/ 97385:
/*!*****************************************************************!*\
  !*** ./src/app/components/card-client/card-client.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardClientComponent": () => (/* binding */ CardClientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_client_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./card-client.component.html */ 55546);
/* harmony import */ var _card_client_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-client.component.scss */ 39414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_service_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/clients.service */ 88694);







let CardClientComponent = class CardClientComponent {
    constructor(router, servicio, toast) {
        this.router = router;
        this.servicio = servicio;
        this.toast = toast;
        this.clients = {};
        this.userSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    services(_id) {
        this.indexc = _id;
        this.router.navigate(['/registroservices', this.indexc]);
        console.log(this.indexc);
    }
    verClient(_id) {
        this.indexc = _id;
        this.router.navigate(['/client', this.indexc]);
        console.log(this.indexc);
    }
    Editar_U(_id) {
        this.indexEc = _id;
        this.router.navigate(['/editar-client', this.indexEc]);
        console.log(this.indexEc);
    }
    delete(_id) {
        this.servicio.deletecliente(_id).subscribe(data => {
            this.presentToast();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "El Usuario fue eliminado con exito",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
CardClientComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
CardClientComponent.propDecorators = {
    clients: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexEc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userSeleccionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CardClientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-card-client',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_client_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_card_client_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardClientComponent);



/***/ }),

/***/ 27920:
/*!*******************************************************************!*\
  !*** ./src/app/components/card-service/card-service.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardServiceComponent": () => (/* binding */ CardServiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_service_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./card-service.component.html */ 39531);
/* harmony import */ var _card_service_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-service.component.scss */ 1016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_service_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/services/service.service */ 65868);







let CardServiceComponent = class CardServiceComponent {
    constructor(router, servicio, toast) {
        this.router = router;
        this.servicio = servicio;
        this.toast = toast;
        this.services = {};
        this.userSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    Controldeplaneacion(_id) {
        this.indexs = _id;
        this.router.navigate(['/table-control', this.indexs]);
        console.log(this.indexs);
    }
    AgregarGuardia(_id) {
        this.indexs = _id;
        this.router.navigate(['/home', this.indexs]);
        console.log(this.indexs);
    }
    verService(_id) {
        this.indexs = _id;
        this.router.navigate(['/services', this.indexs]);
        console.log(this.indexs);
    }
    Editar_U(_id) {
        this.indexS = _id;
        this.router.navigate(['/editar-service', this.indexS]);
        console.log(this.indexS);
    }
    delete(_id) {
        this.servicio.deleteservice(_id).subscribe(data => {
            this.presentToast();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "El Usuario fue eliminado con exito",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
CardServiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
CardServiceComponent.propDecorators = {
    services: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    indexS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userSeleccionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
CardServiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-card-service',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_service_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_card_service_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardServiceComponent);



/***/ }),

/***/ 1729:
/*!*************************************************************!*\
  !*** ./src/app/components/card-user/card-user.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardUserComponent": () => (/* binding */ CardUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./card-user.component.html */ 97057);
/* harmony import */ var _card_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-user.component.scss */ 31979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/login.service */ 52039);
/* harmony import */ var src_app_service_services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/services/service.service */ 65868);








let CardUserComponent = class CardUserComponent {
    constructor(router, activateRouter, servicio, toast, servicio2) {
        this.router = router;
        this.activateRouter = activateRouter;
        this.servicio = servicio;
        this.toast = toast;
        this.servicio2 = servicio2;
        this.users = {};
        this.ismodelShown = false;
        this.id = "";
        this.hayservicio = false;
        this.userSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(params => {
            this.idservice = params['id'];
            console.log(this.users.Servicio._id);
            // falto cambiarle para que si ya le toco le servicio no aparezca
            if (this.idservice != null && this.users.rol == 'Guardia') {
                this.hayservicio = true;
            }
            else if (this.users.rol != 'Guardia') {
                this.hayservicio = false;
            }
        });
    }
    Agregar(_id) {
        this.servicio.AgregarServicios(_id, this.idservice).subscribe((res => {
            console.log(res);
            this.router.navigate(['/list-services']);
            this.AgregaraServicio(_id);
        }));
    }
    AgregaraServicio(_id) {
        this.servicio2.AgregarGuardias(this.idservice, _id).subscribe((res => {
            console.log(res);
        }));
    }
    prestamos(_id) {
        this.indexp = _id;
        this.router.navigate(['/registroprestamos', this.indexp]);
        console.log(this.indexp);
    }
    confirmar() {
        this.ismodelShown = false;
    }
    cerrarModal(configuracion) {
        this.ismodelShown = false;
        if (configuracion) {
            console.log('Eliminar' + this.ismodelShown);
            /* this.delete(); */
            console.log('Eliminado' + this.id);
        }
        else {
            console.log('No elimar' + this.ismodelShown);
        }
    }
    verUser(_id) {
        this.index = _id;
        this.router.navigate(['/user', this.index]);
        console.log(this.index);
    }
    Editar_U(_id) {
        this.indexE = _id;
        this.router.navigate(['/editar-user', this.indexE]);
        console.log(this.indexE);
    }
    delete(_id) {
        this.id == _id;
        this.servicio.eliminarusuario(_id).subscribe(data => {
            this.presentToast();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "El Usuario fue eliminado con exito",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
CardUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_service_services_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService }
];
CardUserComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    indexE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    indexp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    userSeleccionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
CardUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-card-user',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_card_user_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardUserComponent);



/***/ }),

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 72439);
/* harmony import */ var _card_user_card_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-user/card-user.component */ 1729);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _card_client_card_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-client/card-client.component */ 97385);
/* harmony import */ var _card_service_card_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-service/card-service.component */ 27920);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message/message.component */ 44155);
/* harmony import */ var _card_borrow_card_borrow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-borrow/card-borrow.component */ 31382);










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent,
            _card_user_card_user_component__WEBPACK_IMPORTED_MODULE_1__.CardUserComponent,
            _card_client_card_client_component__WEBPACK_IMPORTED_MODULE_2__.CardClientComponent,
            _card_service_card_service_component__WEBPACK_IMPORTED_MODULE_3__.CardServiceComponent,
            _message_message_component__WEBPACK_IMPORTED_MODULE_4__.MessageComponent,
            _card_borrow_card_borrow_component__WEBPACK_IMPORTED_MODULE_5__.CardBorrowComponent
        ],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent,
            _card_user_card_user_component__WEBPACK_IMPORTED_MODULE_1__.CardUserComponent,
            _card_client_card_client_component__WEBPACK_IMPORTED_MODULE_2__.CardClientComponent,
            _card_service_card_service_component__WEBPACK_IMPORTED_MODULE_3__.CardServiceComponent,
            _message_message_component__WEBPACK_IMPORTED_MODULE_4__.MessageComponent,
            _card_borrow_card_borrow_component__WEBPACK_IMPORTED_MODULE_5__.CardBorrowComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 44155:
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message.component.html */ 29944);
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.component.scss */ 43044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let MessageComponent = class MessageComponent {
    constructor() {
        this.ismodelShown = false;
        this.confirmEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.title = "Confirmar";
        this.body = "¿Estas seguro que deseas eliminarlo?";
    }
    ngOnInit() {
        this.ismodelShown = false;
    }
    confirmar() {
        this.confirmEmitter.emit(true);
        this.ismodelShown = false;
    }
    dismiss() {
        this.confirmEmitter.emit(false);
        this.ismodelShown = false;
    }
};
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    confirmEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ['onConfirm',] }]
};
MessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageComponent);



/***/ }),

/***/ 72439:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./navbar.component.html */ 67653);
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ 78529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/login.service */ 52039);






let NavbarComponent = class NavbarComponent {
    constructor(router, servicio) {
        this.router = router;
        this.servicio = servicio;
        this.find = "";
        this.Apermisos = false;
        this.Spermisos = false;
        this.Gpermisos = false;
        this.Admin = "Admin";
        this.Guardia = "Guardia";
        this.Supervisor = "Supervisor";
    }
    ngOnInit() {
        console.log(this.Apermisos);
        this.servicio.disparadorderol.subscribe(data => {
            console.log("recibiendo data ..", data.data);
            if (data.data == this.Admin) {
                console.log(this.Admin);
                this.Apermisos = true;
            }
            if (data.data == this.Supervisor) {
                console.log(this.Spermisos);
                this.Spermisos = true;
            }
        });
    }
    buscar(termino) {
        this.find = termino;
        this.router.navigate(['/home'], { queryParams: { search: this.find } });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-navbar',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 53949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 47464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 28245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 53949);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 47464);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 47464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 12056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 60968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/services/service.service */ 65868);






let HomePage = class HomePage {
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
HomePage.ctorParameters = () => [
    { type: _service_services_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 90845:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/login.service */ 52039);





let ErrorInterceptor = class ErrorInterceptor {
    constructor(servicio) {
        this.servicio = servicio;
    }
    intercept(req, next) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if ([401, 403, 404, 409].indexOf(err.status) !== -1) {
                console.log(err.status);
                this.servicio.disparadoralertas.emit({
                    data: err.status
                });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 62359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 69549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 62359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 60955);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interceptors/error.interceptor */ 90845);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
                multi: true
            }
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 60955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ 52039);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);







let LoginPage = class LoginPage {
    constructor(servicio, toast, router, alertController) {
        this.servicio = servicio;
        this.toast = toast;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    Login(form) {
        if (form.value.correoelectronico == "" || form.value.contrasena == "") {
            this.FaltanDatos();
        }
        else {
            this.servicio.disparadoralertas.subscribe(data => {
                if (data.data == '409') {
                    this.algofallo();
                }
            });
        }
        this.servicio.login(form.value).subscribe(res => {
            console.log(res.dataUser);
            this.servicio.disparadorderol.emit({
                data: res.dataUser.rol
            });
            this.router.navigate(['/main']);
        });
    }
    FaltanDatos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "Porfavor llena todos los datos",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    algofallo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: "La contraseña o correo que ingresaste no es valido, Por favor, intentalo de nuevo",
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    exelente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Bienvenido",
                buttons: ["ok"]
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _C_Users_ivanp_Documents_Protexum_uta_181423_restserver_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 13802:
/*!**********************************************!*\
  !*** ./src/app/service/borrowing.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorrowingService": () => (/* binding */ BorrowingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9500);





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
};
let BorrowingService = class BorrowingService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://ionic-proyect.herokuapp.com/api/";
        //this.apiUrl ="http://localhost:3001/api/";
    }
    //detector de errores
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        else {
            console.error(`Error status: ${error.status}, error: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Hubo un error en la aplicacion. Verificar logs');
    }
    // aqui empieza lo del modulo de prestamo
    registrar(id, prestamo) {
        return this.http.put(`${this.apiUrl}registerprestamo/${id}`, prestamo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    //actualizar el id de prestamo a usuario
    actualizar_usuarioid(id, idprestamo) {
        return this.http.put(`${this.apiUrl}idimage/idUserprestamo/${id}`, { prestamos: idprestamo }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // me trae los datos de user para posterio mente para agregar un prestamo
    obteneruser(id) {
        return this.http.get(`${this.apiUrl}idimage/consultap/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    //Eliminar prestamos pagados
    deletePrestamos(_id) {
        return this.http.delete(`${this.apiUrl}/api/deleteprestamo/${_id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // me trae los datos de prestamo para editarlos
    obtenerPrestamos(id) {
        return this.http.get(`${this.apiUrl}obtenerprestamo/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // actualizar los datos de prstamos
    Editar_P(id, prestamo) {
        return this.http.put(`${this.apiUrl}/api/updateprestamo/${id}`, prestamo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // obtiene la info del prestamo para ponerlo en el perfil
    getobtenerprestamo(id) {
        let url = `${this.apiUrl}idimage/consultaPrestamo/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
};
BorrowingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
BorrowingService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], BorrowingService);



/***/ }),

/***/ 88694:
/*!********************************************!*\
  !*** ./src/app/service/clients.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsService": () => (/* binding */ ClientsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9500);





let ClientsService = class ClientsService {
    // AUTH_SERVER: string = 'http://localhost:3001';
    constructor(http) {
        this.http = http;
        this.AUTH_SERVER = 'https://ionic-proyect.herokuapp.com';
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
    // registrar cliente
    register(client) {
        return this.http.post(`${this.AUTH_SERVER}/api/registerclients`, client).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // me trae los datos de cliente para posterio mente modificar los datos con el metodo de Editar_C
    obtenerClient(id) {
        return this.http.get(`${this.AUTH_SERVER}/api/obtenerclienteA/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //eliminar clientes
    deletecliente(_id) {
        return this.http.delete(`${this.AUTH_SERVER}/api/deleteclients/${_id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // actualizar los datos de cliente
    Editar_C(id, client) {
        return this.http.put(`${this.AUTH_SERVER}/api/updateclients/${id}`, client).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
};
ClientsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ClientsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ClientsService);



/***/ }),

/***/ 52039:
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);






let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.AUTH_SERVER = 'https://ionic-proyect.herokuapp.com';
        //AUTH_SERVER: string = 'http://localhost:3001';
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.idimage = [];
        this.disparadorderol = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.disparadoridmage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.disparadoralertas = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.disparadoractualizadorId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        else {
            console.error(`Error status: ${error.status}, error: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)('Hubo un error en la aplicacion. Verificar logs');
    }
    // me trae los datos de usuario para posterio mente modificar los datos con el metodo de editar_u
    obtenerUser(id) {
        return this.http.get(`${this.AUTH_SERVER}/api/obtener/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // registrar usuario
    register(user) {
        return this.http.post(`${this.AUTH_SERVER}/api/register`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
            if (res) {
                //guardar token
                this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    Editar_U(id, user) {
        return this.http.put(`${this.AUTH_SERVER}/api/update/${id}`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    //agregar la imagen en usuario
    AgregarIdimagen(idUser, fileUrl) {
        return this.http.put(`${this.AUTH_SERVER}/api/idimage/image/${idUser}`, { url: fileUrl }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // actualizar la imagen de usuario
    actualizarimagen(id, fileUrl) {
        return this.http.put(`${this.AUTH_SERVER}/api/idimage/actualizarimg/${id}`, { url: fileUrl }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    //eliminar usuarios
    eliminarusuario(_id) {
        return this.http.delete(`${this.AUTH_SERVER}/api/delete/${_id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // enviar correo 
    enviarcorreo(user) {
        return this.http.post(`${this.AUTH_SERVER}/api/olvidastecontrasena`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // cambiar contraseña 
    cambiarcontraseña(token, user) {
        return this.http.put(`${this.AUTH_SERVER}/api/crearcontrasena/${token}`, { contrasena: user }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // login 
    login(user) {
        return this.http.post(`${this.AUTH_SERVER}/api/login`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
            if (res) {
                //guardar token
                this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            }
        }));
    }
    //agregar el id de servicio a usuarios
    AgregarServicios(id, Servicio) {
        return this.http.put(`${this.AUTH_SERVER}/api/idimage/idservecio/${id}`, { Servicio: Servicio }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // subir la imagen
    uploadImage(name, file) {
        const form1 = new FormData();
        form1.append('name', name);
        form1.append('file', file, 'form-data');
        return this.http.post(`${this.AUTH_SERVER}/api/upload`, form1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(
        // aqui ya la variable la mandas a llamar para poder usarla
        (res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    logout() {
        this.token = '';
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
    }
    saveToken(token, expiresIn) {
        localStorage.setItem("ACCESS_TOKEN", token);
        localStorage.setItem("EXPIRES_IN", expiresIn);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
LoginService.propDecorators = {
    disparadorderol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    disparadoridmage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    disparadoralertas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    disparadoractualizadorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 65868:
/*!*****************************************************!*\
  !*** ./src/app/service/services/service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
};
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        this.disparadordedias = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.apiUrl = "https://ionic-proyect.herokuapp.com/api/";
        // this.apiUrl ="http://localhost:3001/api/";
    }
    //detector de errores
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(error.error.message);
        }
        else {
            console.error(`Error status: ${error.status}, error: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)('Hubo un error en la aplicacion. Verificar logs');
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    // trae los usuarios de la base de datos al home
    getobtener() {
        let url = `${this.apiUrl}idimage/consulta`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // trea los clientes de la base de datos al list-client
    getobtenerclients() {
        let url = `${this.apiUrl}idimage/consultaclients`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // trea los clientes de la base de datos al list-client
    getobtenerservices() {
        let url = `${this.apiUrl}idimage/consultaservice`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // obtiene la info del usuario para ponerlo en el perfil
    getobtenerid(id) {
        let url = `${this.apiUrl}idimage/consulta/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // obtiene la info del cliente para ponerlo en el perfil
    getobteneridcliente(id) {
        let url = `${this.apiUrl}idimage/consultaclients/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // obtiene la info del servicio para ponerlo en el perfil
    getobteneridservice(id) {
        let url = `${this.apiUrl}idimage/consultaservice/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // usar el buscador de usuarios
    getSearch(search) {
        let url = `${this.apiUrl}idimage/buscar/${search}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // aqui empieza lo del modulo de servicio
    registrarS(id, service) {
        return this.http.put(`${this.apiUrl}registerservice/${id}`, service).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // me trae los datos de service para posterio mente modificar los datos con el metodo de Editar_S
    obtenerservice(id) {
        return this.http.get(`${this.apiUrl}obtenerservice/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // me trae los datos de equipo para posterio mente modificar los datos con el metodo de Editar_Se
    obtenerequip(id) {
        return this.http.get(`${this.apiUrl}obtenerequips/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => {
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    //eliminar servicio
    deleteservice(_id) {
        return this.http.delete(`${this.apiUrl}deleteservice/${_id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // actualizar los datos de servicio
    Editar_S(id, service) {
        return this.http.put(`${this.apiUrl}updateservice/${id}`, service).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // actualizar los datos de equipo
    Editar_Se(id, equip) {
        return this.http.put(`${this.apiUrl}updateequips/${id}`, equip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    //actualizar el id de servicio en Client
    actualizar_servicioid(id, idservicio) {
        return this.http.put(`${this.apiUrl}idimage/idClienteservicio/${id}`, { servicios: idservicio }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    //agregar el id de usuarios a servicios
    AgregarGuardias(id, Guardias) {
        return this.http.put(`${this.apiUrl}idimage/idGuardia/${id}`, { Guardias: Guardias }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // para regitrar los turnos
    registrarL(id, turno) {
        return this.http.put(`${this.apiUrl}idimage/paselista/${id}`, turno).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((res) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ServiceService.propDecorators = {
    disparadordedias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
ServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <!-- <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content >\r\n        <ion-list id=\"inbox-list\" >\r\n          <ion-list-header >Inbox</ion-list-header>\r\n          <ion-note>hi@ionicframework.com</ion-note>\r\n\r\n          <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\" >\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\"  *ngIf=\"Apermisos\" >\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label >{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appSpages; let i = index\"  >\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\"  *ngIf=\"Apermisos || Spermisos \" >\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label >{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          \r\n        </ion-list>\r\n\r\n      \r\n      </ion-content>\r\n    </ion-menu> -->\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n  \r\n</ion-app>");

/***/ }),

/***/ 24637:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/card-borrow/card-borrow.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngIf=\"borrow.activo\">\n\n  <ion-label>\n    <h2>Nombre: {{ borrow.nombre }}  </h2>\n    <h2>monto prestado: {{ borrow.montoprestado }}</h2>\n    <h3>fechadeprestamo: {{ borrow.fechadeprestamo }}</h3>\n    <p>numerodepagos: {{ borrow.numerodepagos }}</p>\n   \n\n  </ion-label>\n  \n \n  <button (click)=verPrestamo(borrow._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;margin: 10px;\" type=\"button\">Ver más</button>\n  <ion-icon name=\"trash\" (click)=\"delete(borrow._id)\"></ion-icon>\n  <ion-icon name=\"create-outline\" (click)=\"Editar_P(borrow._id)\"></ion-icon> \n</ion-item>");

/***/ }),

/***/ 55546:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/card-client/card-client.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngIf=\"clients.activo\">\r\n\r\n  <ion-label>\r\n    <h2>Nombre: {{ clients.nombre }}  </h2>\r\n    <h2>RFC: {{ clients.rfc }}</h2>\r\n    <h3>Correo: {{ clients.correoelectronico }}</h3>\r\n    <p>Domicilio: {{ clients.domicilio }}</p>\r\n    <p>Telefono: {{ clients.telefono }}</p>\r\n\r\n  </ion-label>\r\n  \r\n  <button (click)=services(clients._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold; margin: 10px;\" type=\"button\">Agregar Servicio</button>\r\n  <button (click)=verClient(clients._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;margin: 10px;\" type=\"button\">Ver más</button>\r\n  <ion-icon name=\"trash\" (click)=\"delete(clients._id)\"></ion-icon>\r\n  <ion-icon name=\"create-outline\" (click)=\"Editar_U(clients._id)\"></ion-icon> \r\n</ion-item>");

/***/ }),

/***/ 39531:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/card-service/card-service.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-item *ngIf=\"services.activo\">\r\n\r\n  <ion-label>\r\n    <h2>Nombre: {{ services.nombre }}  </h2>\r\n    <h2>jefe de turno : {{ services.jefedeservicio }}</h2>\r\n    <h3>telefono protexum: {{ services.telefonoprotexum }}</h3>\r\n    \r\n\r\n  </ion-label>\r\n  <button (click)=Controldeplaneacion(services._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"button\">Tabla de Planeacion</button>\r\n  <button (click)=AgregarGuardia(services._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"button\">lista de Guardia</button>\r\n  <button (click)=verService(services._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"button\">Ver más</button>\r\n  <ion-icon name=\"trash\" (click)=\"delete(services._id)\"></ion-icon>\r\n  <ion-icon name=\"create-outline\" (click)=\"Editar_U(services._id)\"></ion-icon> \r\n</ion-item>");

/***/ }),

/***/ 97057:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/card-user/card-user.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngIf=\"users.activo\">\r\n  <ion-avatar slot=\"start\">\r\n    <img src=\"{{ users.fileUrl }}\" style=\"width: 40px;height: 40px; border-radius: 150px;\"/>\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2>Nombre: {{ users.nombre }} {{ users.apellidos }} </h2>\r\n    <h2>Rol: {{ users.rol }}</h2>\r\n    <h3>Correo: {{ users.correoelectronico }}</h3>\r\n    <p>Domicilio: {{ users.domicilio }}</p>\r\n    <p>Telefono: {{ users.telefono }}</p>\r\n  </ion-label>\r\n  <button (click)=Agregar(users._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold; margin: 10px;\" type=\"button\" *ngIf=\"hayservicio\" >Agregar Guardia</button>\r\n  <button (click)=prestamos(users._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold; margin: 10px;\" type=\"button\">Agregar Prestamos</button>\r\n  <button (click)=verUser(users._id) class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"button\">Ver más</button>\r\n  <!-- <ion-icon name=\"trash\" (click)=\"delete(users._id)\"></ion-icon> -->\r\n  <ion-icon name=\"trash\" data-toggle=\"modal\" data-backdrop=\"false\" data-target=\"#messageModal\"></ion-icon>\r\n  <ion-icon name=\"create-outline\" (click)=\"Editar_U(users._id)\"></ion-icon>\r\n</ion-item>\r\n<app-message *ngIf=\"!ismodelShown\" (onConfirm)=\"cerrarModal($event)\"></app-message>");

/***/ }),

/***/ 29944:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/message/message.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal\" *ngIf=\"!ismodelShown\"  id=\"messageModal\" tabindex=\"1050\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ title }}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{ body }}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" ngbAutofocus class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"confirmar()\">Confirmar</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"dismiss()\"data-dismiss=\"modal\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 67653:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/navbar/navbar.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #FED03D !important;\">\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <a class=\"navbar-brand\" href=\"home\">\r\n    <img src=\"https://www.protexum.com.mx/wp-content/uploads/2018/01/logonew01.png\" height=\"30px\" width=\"mr-auto\" alt=\"Logo\">\r\n  </a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      <!-- active es la clase para hacer que resalte en el menu -->\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"main\">Inicio</a>\r\n      </li>\r\n      <!--  aqui van los *ngif en el li para los permisos-->\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"main\">Usuarios</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\"   >\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"list-clients\" >Clientes</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\"  >\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"list-services\">Servicios</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"#\">Prestamos</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\"  >\r\n        <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"\">Planeacion</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar usuario\" (keyup.enter)=\"buscar(buscarTexto.value)\"\r\n        #buscarTexto>\r\n      <button (click)=\"buscar(buscarTexto.value)\" class=\"btn my-2 my-sm-0\" style=\"background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"button\">Buscar</button>\r\n    </div>\r\n\r\n  </div>\r\n</nav>");

/***/ }),

/***/ 12056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"loading show\" *ngIf=\"load\">\r\n  <div class=\"spin\"></div>\r\n  \r\n</div>\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <app-navbar></app-navbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"row animated fadeIn fast\" *ngIf=\"users.length == 0\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"alert alert-info\" role=\"alert\">\r\n        No existen resultados con el termino: {{ this.busc.search }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-list>\r\n    <app-card-user (userSeleccionado)=\"verUser( $event )\" [users]= \"foo\" [index]=\"i\" *ngFor=\"let foo of users; let i = index\"></app-card-user>\r\n\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n   \r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- \r\n  <ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-title>Footer - No Border</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer> -->\r\n</ion-content>\r\n\r\n<style>\r\n  .loading {\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      background-color: white;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      z-index: 9999;\r\n      transition: 1s all;\r\n      opacity: 0;\r\n  }\r\n\r\n  .loading.show {\r\n      opacity: 1;\r\n  }\r\n\r\n  .loading .spin {\r\n      border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n      border-top-color: #3cefff;\r\n      border-radius: 50%;\r\n      width: 3em;\r\n      height: 3em;\r\n      animation: spin 1s linear infinite;\r\n  }\r\n\r\n  @keyframes spin {\r\n      to {\r\n          transform: rotate(360deg);\r\n      }\r\n  }\r\n</style>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar class=\"color2\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #FED03D !important;\">\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://www.protexum.com.mx/wp-content/uploads/2018/01/logonew01.png\" height=\"30px\" width=\"mr-auto\" alt=\"Logo\">\r\n      </a>\r\n    \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <!-- active es la clase para hacer que resalte en el menu -->\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"#\">Inicio</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a style=\"color: #000000;font-weight: bold;\" class=\"nav-link\" href=\"/registro\">Registrarse</a>\r\n          </li>\r\n        </ul>\r\n    \r\n      </div>\r\n    </nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid class=\"login\"> \r\n    <h2 class=\"login-header\">\r\n    </h2>\r\n    <img class=\"logo\" src=\"../../assets/logonew01_v.png\" width=\"80%\" alt=\"logotipo\"/>\r\n    \r\n\r\n    <form #frmLogin=\"ngForm\" class=\"login-container\" (ngSubmit)=\"Login(frmLogin)\">\r\n      <p><ion-input class=\"login-inputs\" type=\"email\" name=\"correoelectronico\" placeholder=\"correoelectronico\"  ngModel required=\"\"> </ion-input> </p>\r\n      <p><ion-input class=\"login-inputs\" type=\"password\" name=\"contrasena\" placeholder=\"contrasena\" ngModel required=\"\"> </ion-input></p>\r\n      <p><button class=\"btn my-2 my-sm-0 btn-lg button\" style=\"width: 100%; background-color: #FE693D; color: #000000;font-weight: bold;\" type=\"submit\" value=\"Iniciar Sesion\">Iniciar Sesion</button></p>\r\n      <ion-label class=\"link\" [routerLink]=\"['/olvidastecontrasena']\" > ¿Olvidaste tu contraseña? </ion-label>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content> \r\n\r\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */";

/***/ }),

/***/ 51370:
/*!*******************************************************************!*\
  !*** ./src/app/components/card-borrow/card-borrow.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWJvcnJvdy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 39414:
/*!*******************************************************************!*\
  !*** ./src/app/components/card-client/card-client.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1016:
/*!*********************************************************************!*\
  !*** ./src/app/components/card-service/card-service.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 31979:
/*!***************************************************************!*\
  !*** ./src/app/components/card-user/card-user.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 43044:
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 78529:
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "body {\n  padding-bottom: 50px;\n}\n\n.main-container {\n  margin-top: 20px;\n}\n\n.img-logo {\n  width: 120px;\n}\n\n/* Animaciones */\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUtBLGdCQUFBOztBQUNBO0VBRUUsc0JBQUE7RUFFQSx5QkFBQTtBQUZGOztBQUtBO0VBRUUsd0JBQUE7RUFFQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0VBRkY7RUFLQTtJQUNFLFVBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0Usc0JBQUE7QUFKRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBBbmltYWNpb25lcyAqL1xyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn0iXX0= */";

/***/ }),

/***/ 60968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\nbody {\n  background: white;\n  font-family: \"Open Sans\", sans-serif;\n}\n.logo {\n  position: relative;\n  left: 10%;\n}\n.login {\n  width: 70%;\n  margin: 16px auto;\n  background-color: #FED03D;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  font-size: 16px;\n  background: #FED03D;\n  border-radius: 15px;\n  box-shadow: 0 30px 60px 0 black;\n}\n/* Reset top and bottom margins from certain elements */\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.link {\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n/* The triangle form is achieved by a CSS hack */\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: rgba(248, 248, 248, 0.664);\n}\n.login-header {\n  background: #FED03D;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: black;\n}\n.login-container {\n  background: #FED03D;\n  padding: 12px;\n}\n/* Every row inside .login-container is defined with p tags */\n.login p {\n  padding: 20px;\n}\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n.login input[type=email],\n.login input[type=password] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.inputs {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n/* Text fields' focus effect */\n.inputs:focus {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n.login input[type=submit] {\n  background: #FE693D;\n  border-radius: 10px;\n  border-color: transparent;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.97em;\n  color: black;\n  cursor: pointer;\n}\n.login input[type=submit]:hover {\n  background: #FE693D;\n}\n/* Buttons' focus effect */\n.login input[type=submit]:focus {\n  border-color: #FE693D;\n}\n/* Navbar login */\nbody {\n  padding-bottom: 50px;\n}\n.main-container {\n  margin-top: 20px;\n}\n.img-logo {\n  width: 120px;\n}\n/* Animaciones */\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.fast {\n  animation-duration: 0.4s;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n.login-inputs {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.navbar-expand-lg .navbar-collapse {\n  margin-left: 0;\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-collapse {\n    margin-left: 70%;\n  }\n\n  .login {\n    width: 30%;\n    margin: 16px auto;\n    background-color: #FED03D;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    font-size: 16px;\n    background: #FED03D;\n    border-radius: 15px;\n    box-shadow: 0 30px 60px 0 black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRUFBQTtBQUdSO0VBQ0UsaUJBQUE7RUFDQSxvQ0FBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFERjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFRSwrQkFBQTtBQUFKO0FBR0EsdURBQUE7QUFDQTs7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNBLGdEQUFBO0FBQ0E7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0NBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFFRjtBQUVBLDZEQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTs7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUEsOEJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBRUEsMEJBQUE7QUFDQTtFQUNFLHFCQUFBO0FBQ0Y7QUFFQSxpQkFBQTtBQUNBO0VBQ0Usb0JBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBS0EsZ0JBQUE7QUFDQTtFQUVFLHNCQUFBO0VBRUEseUJBQUE7QUFGRjtBQUtBO0VBRUUsd0JBQUE7RUFFQSx5QkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNFLFVBQUE7RUFGRjtFQUtBO0lBQ0UsVUFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFLHNCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUpGO0FBTUE7RUFDRTtJQUNFLGdCQUFBO0VBSEY7O0VBS0E7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUVFLCtCQUFBO0VBRko7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDApO1xyXG5cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuLmxvZ2luIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUQwM0Q7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZFRDAzRDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMClcclxufVxyXG5cclxuLyogUmVzZXQgdG9wIGFuZCBib3R0b20gbWFyZ2lucyBmcm9tIGNlcnRhaW4gZWxlbWVudHMgKi9cclxuLmxvZ2luLWhlYWRlcixcclxuLmxvZ2luIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ubGlua3tcclxuICBmb250LXNpemU6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBUaGUgdHJpYW5nbGUgZm9ybSBpcyBhY2hpZXZlZCBieSBhIENTUyBoYWNrICovXHJcbi5sb2dpbi10cmlhbmdsZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuNjY0KTtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI0ZFRDAzRDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgXHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI0ZFRDAzRDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIFxyXG59XHJcblxyXG4vKiBFdmVyeSByb3cgaW5zaWRlIC5sb2dpbi1jb250YWluZXIgaXMgZGVmaW5lZCB3aXRoIHAgdGFncyAqL1xyXG4ubG9naW4gcCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDAuOTVlbTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuLyogVGV4dCBmaWVsZHMnIGZvY3VzIGVmZmVjdCAqL1xyXG4uaW5wdXRzOmZvY3Vze1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogI0ZFNjkzRDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOTdlbTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRTY5M0Q7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMnIGZvY3VzIGVmZmVjdCAqL1xyXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRkU2OTNEO1xyXG59XHJcblxyXG4vKiBOYXZiYXIgbG9naW4gKi9cclxuYm9keXtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWctbG9nb3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogQW5pbWFjaW9uZXMgKi9cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXRze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gIH1cclxuICAubG9naW4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDAzRDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRUQwM0Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiKDAsIDAsIDApXHJcbiAgfVxyXG59Il19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map