webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_routes_component__ = __webpack_require__("../../../../../src/app/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__live_location_live_location_component__ = __webpack_require__("../../../../../src/app/live-location/live-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__can_activate_guard__ = __webpack_require__("../../../../../src/app/can-activate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__can_activate_guard__["a" /* CanActivateGuard */]] },
    { path: 'routes', component: __WEBPACK_IMPORTED_MODULE_2__routes_routes_component__["a" /* RoutesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__can_activate_guard__["a" /* CanActivateGuard */]] },
    { path: 'route/:id', component: __WEBPACK_IMPORTED_MODULE_2__routes_routes_component__["a" /* RoutesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__can_activate_guard__["a" /* CanActivateGuard */]] },
    { path: 'live-locations', component: __WEBPACK_IMPORTED_MODULE_4__live_location_live_location_component__["a" /* LiveLocationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__can_activate_guard__["a" /* CanActivateGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__can_activate_guard__["a" /* CanActivateGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <app-navbar></app-navbar>\n    <angular4-notify-notifications-container></angular4-notify-notifications-container>\n    <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_routes_component__ = __webpack_require__("../../../../../src/app/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_map_route_map_component__ = __webpack_require__("../../../../../src/app/route-map/route-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__live_location_live_location_component__ = __webpack_require__("../../../../../src/app/live-location/live-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular4_notify__ = __webpack_require__("../../../../angular4-notify/angular4-notify.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular4_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular4_notify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__routes_routes_component__["a" /* RoutesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__route_map_route_map_component__["a" /* RouteMapComponent */],
            __WEBPACK_IMPORTED_MODULE_7__live_location_live_location_component__["a" /* LiveLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_daterangepicker__["Daterangepicker"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_datepicker__["NgDatepickerModule"],
            __WEBPACK_IMPORTED_MODULE_18__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_19_angular4_notify__["NotificationsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19_angular4_notify__["NotificationsService"], { provide: __WEBPACK_IMPORTED_MODULE_15__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_15__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
        this.authUrl = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000";
        this.authChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthService.prototype.login = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        data.username = data.username;
        data.grant_type = "password";
        data.client_id = "system";
        data.client_secret = "f558ba166258089b2ef322c340554c";
        delete data.email_id;
        delete data.address;
        delete data.phone_number;
        return this.http.post(this.authUrl + '/oauth/token', data, opts)
            .map(function (response) {
            var loggedIn = response.json();
            _this.isAuthenticated = true;
            localStorage.setItem('loggedIn', loggedIn.access_token.access_token);
            localStorage.setItem('userType', loggedIn.access_token.type);
            _this.authChanged.emit(true);
            return true;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.checkforAuthentication = function () {
        if (localStorage.getItem('loggedIn')) {
            return true;
        }
        return false;
    };
    AuthService.prototype.checkforUserType = function () {
        var userType = localStorage.getItem('userType');
        if (userType) {
            return userType;
        }
        return "user";
    };
    AuthService.prototype.handleError = function (error) {
        console.log('server error:', error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Node.js server error');
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userType');
        this.authChanged.emit(false);
    };
    return AuthService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AuthService.prototype, "authChanged", void 0);
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/can-activate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateGuard = (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.checkforAuthentication()) {
            return true;
        }
        //Track URL user is trying to go to so we can send them there after logging in
        // this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return CanActivateGuard;
}());
CanActivateGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], CanActivateGuard);

var _a, _b;
//# sourceMappingURL=can-activate.guard.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes?Imei='; // URL to web api
        this.tokenDetails = localStorage.getItem('loggedIn');
    }
    DataService.prototype.getRoutes = function (imei_numbers, dates) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = 'bearer ' + this.tokenDetails;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get(this.heroesUrl + imei_numbers + "&Date_time=" + dates, opts)
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getLiveLocations = function (imei) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = 'bearer ' + this.tokenDetails;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/live?Imei=" + imei, opts)
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getDistinctPhoneNumber = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = 'bearer ' + this.tokenDetails;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/getDistinctPhoneNumber", opts)
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getCordinates = function (routeId, imei) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = 'bearer ' + this.tokenDetails;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/codinates/" + routeId + "/" + imei, opts)
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.createUser = function (userData) {
        var url = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/user";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.post(url, userData, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.createSuperAdmin = function (accept) {
        var url = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/user/superadmin";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        opts.headers = headers;
        return this.http.post(url, accept, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.log('server error:', error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error || 'Node.js server error');
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div #map style=\"width:100%;height:553px;\"></div>\n\n<!-- <div class=\"map-wrapper\">\n      <ui-gmap-google-map> ...</ui-gmap-google-map>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.renderMap = function () {
        var options = {
            zoom: 4,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        this.showIndiaMap();
    };
    HomeComponent.prototype.showIndiaMap = function () {
        var geocoder = new google.maps.Geocoder();
        var indianMap = this.map;
        geocoder.geocode({ 'address': "india" }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                indianMap.setCenter(results[0].geometry.location);
            }
        });
    };
    HomeComponent.prototype.ensureScript = function () {
        var _this = this;
        this.loadingScript = true;
        var document = this.mapDiv.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            this.renderMap();
        }
        else {
            var script_1 = document.createElement('script');
            script_1.id = 'googlemaps';
            script_1.type = 'text/javascript';
            script_1.async = true;
            script_1.defer = true;
            script_1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&region=IN';
            script_1.onload = function () {
                _this.loadingScript = false;
                _this.renderMap();
            };
            document.body.appendChild(script_1);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ensureScript();
        }, 200);
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "mapDiv", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/live-location/live-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/live-location/live-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header-row\" [hidden]=\"showMap\">\n\t<div class=\"col-md-8\">\n\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" style=\"float: right;\"></angular2-multiselect>\n\t</div>\n</div>\n<div class=\"row header-row\" *ngIf=\"showMap\">\n\t<div class=\"col-md-8\">\n\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"clearMarker()\" style=\"float: right;margin-right: 59px;\">Clear Map</button>\n\t</div>\n</div>\n<div #map style=\"width:100%;\" [ngStyle] = \"heightStyle\"></div>\n\n"

/***/ }),

/***/ "../../../../../src/app/live-location/live-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveLocationComponent = (function () {
    function LiveLocationComponent(DataService) {
        this.DataService = DataService;
        this.routes = [];
        this.locations = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.markers = [];
        this.heightStyle = {
            height: "512px"
        };
    }
    LiveLocationComponent.prototype.showLiveLocation = function () {
        this.heightStyle = {
            height: "512px"
        };
        var position;
        var locations = [];
        var bounds = new google.maps.LatLngBounds();
        console.log(this.routes);
        this.routes.forEach(function (route, key) {
            var temp_array = [route.Imei, route.Location.Lat, route.Location.Long, key];
            locations.push(temp_array);
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        this.map.setCenter(new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long));
        for (i = 0; i < locations.length; i++) {
            position = new google.maps.LatLng(locations[i][1], locations[i][2]);
            marker = new google.maps.Marker({
                position: position,
                map: this.map
            });
            console.log(locations[i]);
            // //console.log(marker);
            var temp_hash = {
                number: locations[i][0],
                marker: marker,
                lat: locations[i][1],
                long: locations[i][2]
            };
            this.markers.push(temp_hash);
            bounds.extend(position);
            // markerBounds.extend(new google.maps.LatLng(locations[i][1], locations[i][2]));
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(this.map, marker);
                };
            })(marker, i));
        }
        if (locations.length === 1) {
            this.map.setZoom(17);
        }
        else {
            this.map.fitBounds(bounds);
        }
    };
    LiveLocationComponent.prototype.onItemSelect = function ($event) {
        console.log(this.selectedItems);
    };
    LiveLocationComponent.prototype.clearMarker = function () {
        this.showMap = false;
        this.markers = [];
        this.selectedItems = [];
        var buttonHtml = "<div class='custom-dropdown-button'>";
        buttonHtml += "<button id='custom-ok-button' class='btn btn-outline-secondary btn-sm'>OK</button>";
        buttonHtml += "<button id='custom-cancel-button' class='btn btn-outline-secondary btn-sm'>Cancel</button>";
        buttonHtml += "</div>";
        this.renderMap();
    };
    LiveLocationComponent.prototype.showMarker = function () {
        var _this = this;
        this.showMap = true;
        var locationLists = [];
        this.selectedItems.forEach(function (list) {
            locationLists.push(list.id);
        });
        this.DataService.getLiveLocations(locationLists.join(","))
            .then(function (routes) {
            _this.routes = routes;
            _this.showLiveLocation();
        });
    };
    LiveLocationComponent.prototype.setMyOptions = function (options) {
        var temp_options = [];
        options.forEach(function (option) {
            temp_options.push({
                id: option, itemName: option
            });
        });
        this.dropdownList = temp_options;
    };
    LiveLocationComponent.prototype.ensureScript = function () {
        var _this = this;
        this.loadingScript = true;
        var document = this.mapDiv.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            this.renderMap();
        }
        else {
            var script_1 = document.createElement('script');
            script_1.id = 'googlemaps';
            script_1.type = 'text/javascript';
            script_1.async = true;
            script_1.defer = true;
            script_1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&region=IN';
            script_1.onload = function () {
                _this.loadingScript = false;
                _this.renderMap();
            };
            document.body.appendChild(script_1);
        }
    };
    LiveLocationComponent.prototype.showIndiaMap = function () {
        this.heightStyle = {
            height: "512px"
        };
        var geocoder = new google.maps.Geocoder();
        var indianMap = this.map;
        geocoder.geocode({ 'address': "india" }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                indianMap.setCenter(results[0].geometry.location);
            }
        });
    };
    LiveLocationComponent.prototype.renderMap = function () {
        var options = {
            zoom: 4,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        if (this.showMap) {
            this.showLiveLocation();
        }
        else {
            this.showIndiaMap();
        }
    };
    LiveLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //		SlidingMarker.initializeGlobally();
        setTimeout(function () {
            _this.ensureScript();
        }, 200);
        this.showMap = false;
        this.DataService.getDistinctPhoneNumber()
            .then(function (options) { return _this.setMyOptions(options); });
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(1000, 5000);
        this.sub = this.timer.subscribe(function (t) { return _this.onTimeOut(); });
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select User",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 1
        };
    };
    LiveLocationComponent.prototype.updateLocation = function () {
        //var newLatLng = new google.maps.LatLng("18.5597", "73.7799");
        console.log(this.markers);
        var locations = [];
        if (this.markers.length > 0) {
            this.routes.forEach(function (route, key) {
                var temp_array = [route.Imei, route.Location.Lat, route.Location.Long, key];
                locations.push(temp_array);
            });
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            //	this.map.setCenter(new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long));
            for (i = 0; i < locations.length; i++) {
                console.log(locations);
                console.log(this.markers);
                var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
                var markerObj = this.markers.find(function (obj) { return obj.number === locations[i][0]; });
                markerObj.marker.setPosition(position);
                if (locations.length === 1)
                    this.map.panTo(position);
            }
        }
        //if(this.markers[0])
        //this.markers[0].setPosition(newLatLng);
    };
    LiveLocationComponent.prototype.onTimeOut = function () {
        var _this = this;
        if (this.selectedItems.length > 0) {
            var locationLists = [];
            this.selectedItems.forEach(function (list) {
                locationLists.push(list.id);
            });
            this.DataService.getLiveLocations(locationLists.join(","))
                .then(function (routes) { return _this.routes = routes; });
            this.updateLocation();
        }
    };
    LiveLocationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var buttonHtml = "<div class='custom-dropdown-button'>";
        buttonHtml += "<button id='custom-ok-button' class='btn btn-outline-secondary btn-sm'>OK</button>";
        buttonHtml += "<button id='custom-cancel-button' class='btn btn-outline-secondary btn-sm'>Cancel</button>";
        buttonHtml += "</div>";
        __WEBPACK_IMPORTED_MODULE_3_jquery__(buttonHtml).insertAfter(".lazyContainer");
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#custom-cancel-button")
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.dropdown-list').prop("hidden", true);
            _this.selectedItems = [];
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#custom-ok-button")
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.dropdown-list').prop("hidden", true);
            _this.showMarker();
        });
    };
    LiveLocationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return LiveLocationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LiveLocationComponent.prototype, "mapDiv", void 0);
LiveLocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-live-location',
        template: __webpack_require__("../../../../../src/app/live-location/live-location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/live-location/live-location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object])
], LiveLocationComponent);

var _a, _b;
//# sourceMappingURL=live-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inner nav-top\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav \">\n        <li routerLinkActive=\"active\" style=\"padding-top:5px\"><a routerLink=\"/home\"><img src=\"assets/images/side-logo.jpeg\" class=\"side-nav\"alt=\"logo\" /></a></li>\n        <li routerLinkActive=\"active\" class=\"nav-li\" style=\"margin-left:270px;\"><a routerLink=\"/routes\"><img src=\"assets/images/logo.png\" class=\"app-logo\" alt=\"logo\" /></a></li>\n      </ul>\n  </div>\n</nav>\n<nav class=\"navbar navbar-inner\">\n  <div class=\"container-fluid nav-container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"> <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n\n      </button>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav \">\n      \t<li *ngIf= \"showNavLinks\" routerLinkActive=\"active\" class=\"nav-li\"><a routerLink=\"/home\">Home</a></li>\n      \t<li *ngIf= \"showNavLinks\" routerLinkActive=\"active\" class=\"nav-li\"><a routerLink=\"/routes\">Routes</a></li>\n\t\t    <li *ngIf= \"showNavLinks\" routerLinkActive=\"active\" class=\"nav-li\"><a routerLink=\"/live-locations\">Live Tracking</a></li>\n        <li *ngIf= \"showNavLinks && (userType === 'admin' || userType === 'superadmin')\" routerLinkActive=\"active\" class=\"nav-li\"><a routerLink=\"/register\">Add User</a></li>\n        <li routerLinkActive=\"active\" (click)=\"loginOrOut()\" class=\"nav-li\"><a>{{ loginLogoutText }}</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.loginLogoutText = 'Login';
        this.showNavLinks = false;
        this.userType = "user";
    }
    NavbarComponent.prototype.loginOrOut = function () {
        var isAuthenticated = this.authservice.isAuthenticated;
        if (this.authservice.checkforAuthentication()) {
            this.authservice.logout();
        }
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLoginLogoutText();
        this.sub = this.authservice.authChanged
            .subscribe(function (loggedIn) {
            _this.setLoginLogoutText();
        }, function (err) { return console.log(err); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.setLoginLogoutText = function () {
        console.log("ssss");
        this.loginLogoutText = (this.authservice.checkforAuthentication()) ? 'Logout' : 'Login';
        this.showNavLinks = (this.authservice.checkforAuthentication()) ? true : false;
        this.userType = this.authservice.checkforUserType();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/route-map/route-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route-map/route-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div #map style=\"width:100%;\" [ngStyle] = \"heightStyle\"   [hidden]=\"!tableView\"></div>"

/***/ }),

/***/ "../../../../../src/app/route-map/route-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteMapComponent = (function () {
    function RouteMapComponent(DataService, route) {
        this.DataService = DataService;
        this.route = route;
        this.loadingMap = false;
        this.directionsResultsReturned = 0;
        this.heightStyle = {
            height: "512px"
        };
    }
    RouteMapComponent.prototype.initMap = function () {
        var infowindow = new google.maps.InfoWindow();
        this.directionsResultsReturned = 0;
        this.heightStyle = {
            height: "472px"
        };
        //this.loadingMap = false;
        var stations = [];
        var waypoints = [];
        this.mapRoute.directions.map(function (direction) {
            stations.push({ lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long) });
        });
        console.log(this.mapRoute.directions);
        console.log(stations);
        for (var i = 0, parts = [], max = 20 - 1; i < stations.length; i = i + max) {
            parts.push(stations.slice(i, i + max + 1));
        }
        this.routeLength = parts.length;
        console.log("parts");
        console.log(parts);
        var mapOptions = {
            zoom: 13,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }, map = new google.maps.Map(this.mapDiv.nativeElement, mapOptions), directionsService = new google.maps.DirectionsService, directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            polylineOptions: {
                strokeColor: "#1a8ff4",
                strokeOpacity: 1.0,
                strokeWeight: 7,
            },
            suppressMarkers: true
        });
        // this.heightStyle = {
        //      height : "477px"
        // }
        var start = new google.maps.LatLng(stations[0].lat, stations[0].lng);
        var end = new google.maps.LatLng(stations[stations.length - 1].lat, stations[stations.length - 1].lng);
        //this.createMarker(start, 'start', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/source.png");
        //this.createMarker(end, 'end', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/destination.png");
        for (var i = 0; i < parts.length; ++i) {
            this.getRouteStations(parts[i], directionsService, directionsDisplay, map, infowindow);
        }
    };
    RouteMapComponent.prototype.createMarker = function (latlng, title, map, infowindow, iconImgUrl) {
        var marker = new google.maps.Marker({
            position: latlng,
            title: title,
            map: map,
            icon: iconImgUrl,
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(title);
            infowindow.open(map, marker);
        });
    };
    // pinSymbol(color) {
    //     return {
    //         path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
    //         fillColor: color,
    //         fillOpacity: 2,
    //         strokeColor: '#000',
    //         strokeWeight: 0.5,
    //         scale: 1,
    //    };
    // }
    RouteMapComponent.prototype.getRouteStations = function (stations, directionsService, directionsDisplay, map, infowindow) {
        console.log("getRouteStations");
        console.log(stations);
        var waypoints = [];
        var source = new google.maps.LatLng(stations[0].lat, stations[0].lng), destination = new google.maps.LatLng(stations[stations.length - 1].lat, stations[stations.length - 1].lng);
        for (var i = 1; i < 24; i++) {
            waypoints.push({ location: new google.maps.LatLng(stations[1].lat, stations[1].lng), stopover: false });
        }
        this.calculateAndDisplayRoute(directionsService, directionsDisplay, source, destination, waypoints, map, infowindow);
    };
    RouteMapComponent.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay, source, destionation, waypoints, map, infowindow) {
        var _this = this;
        var combinedLength = this.routeLength;
        directionsService.route({
            origin: source,
            destination: destionation,
            // waypoints: waypoints,
            optimizeWaypoints: true,
            avoidTolls: true,
            avoidHighways: false,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                var lat = response.routes[0].legs[0].start_location.lat();
                var lng = response.routes[0].legs[0].start_location.lng();
                if (_this.directionsResultsReturned === 0) {
                    var lat = response.routes[0].legs[0].start_location.lat();
                    var lng = response.routes[0].legs[0].start_location.lng();
                    var start = new google.maps.LatLng(lat, lng);
                    _this.createMarker(start, 'start', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/source.png");
                }
                if (_this.directionsResultsReturned == 0) {
                    _this.combinedResults = response;
                    _this.directionsResultsReturned++;
                }
                else {
                    _this.combinedResults.routes[0].legs = _this.combinedResults.routes[0].legs.concat(response.routes[0].legs);
                    _this.combinedResults.routes[0].overview_path = _this.combinedResults.routes[0].overview_path.concat(response.routes[0].overview_path);
                    _this.combinedResults.routes[0].bounds = _this.combinedResults.routes[0].bounds.extend(response.routes[0].bounds.getNorthEast());
                    _this.combinedResults.routes[0].bounds = _this.combinedResults.routes[0].bounds.extend(response.routes[0].bounds.getSouthWest());
                    _this.directionsResultsReturned++;
                }
                //this.mapLoop++;
                console.log(_this.directionsResultsReturned, combinedLength);
                if (_this.directionsResultsReturned == combinedLength) {
                    var lat = response.routes[0].legs[0].end_location.lat();
                    var lng = response.routes[0].legs[0].end_location.lng();
                    var end = new google.maps.LatLng(lat, lng);
                    _this.createMarker(end, 'end', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/destination.png");
                    setTimeout(function () {
                        directionsDisplay.setDirections(_this.combinedResults);
                    }, 2);
                }
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    RouteMapComponent.prototype.showIndiaMap = function () {
        var options = {
            zoom: 4,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var geocoder = new google.maps.Geocoder();
        var indianMap = new google.maps.Map(this.mapDiv.nativeElement, options);
        geocoder.geocode({ 'address': "india" }, function (results, status) {
            console.log(status);
            if (status == google.maps.GeocoderStatus.OK) {
                indianMap.setCenter(results[0].geometry.location);
            }
        });
    };
    RouteMapComponent.prototype.ensureScript = function (mapType) {
        var _this = this;
        var document = this.mapDiv.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        console.log(script);
        if (script) {
            if (this.mapRoute.directions && mapType === "route") {
                this.initMap();
            }
            else if (this.tableView && mapType === "india") {
                this.showIndiaMap();
            }
        }
        else {
            var script_1 = document.createElement('script');
            script_1.id = 'googlemaps';
            script_1.type = 'text/javascript';
            script_1.async = true;
            script_1.defer = true;
            script_1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&region=IN&libraries=geometry';
            script_1.onload = function () {
                console.log(_this.tableView);
                if (_this.mapRoute.directions && mapType === "route") {
                    _this.initMap();
                }
                else if (_this.tableView && mapType === "india") {
                    _this.showIndiaMap();
                }
            };
            document.body.appendChild(script_1);
        }
    };
    RouteMapComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var _loop_1 = function (propName) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            setTimeout(function () {
                if (cur && prev && propName === "mapRoute") {
                    console.log(propName);
                    console.log(cur);
                    console.log(prev);
                    console.log("In ngonchanges");
                    _this.ensureScript("route");
                }
            }, 200);
            //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        };
        for (var propName in changes) {
            _loop_1(propName);
        }
    };
    RouteMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.mapRoute);
        setTimeout(function () {
            _this.loadingMap = true;
            _this.ensureScript("india");
        }, 200);
    };
    return RouteMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map-route'),
    __metadata("design:type", Object)
], RouteMapComponent.prototype, "mapRoute", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RouteMapComponent.prototype, "routes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table-view'),
    __metadata("design:type", Object)
], RouteMapComponent.prototype, "tableView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], RouteMapComponent.prototype, "mapDiv", void 0);
RouteMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route-map',
        template: __webpack_require__("../../../../../src/app/route-map/route-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/route-map/route-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], RouteMapComponent);

var _a, _b, _c;
//# sourceMappingURL=route-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.dropdown:hover .dropbtn {\n    background-color: #3e8e41;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row header-row\">\n\t<div *ngIf=\"showDropdowns\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<angular2-multiselect *ngIf=\"!showMap\" [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" style=\"float: right;\">\n\n\t\t\t</angular2-multiselect>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\t\n\t\t\t<input type=\"text\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedDate($event, daterange)\" />\n\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"showRouteTable()\">Submit</button>\t\n\t\t</div>\n\t</div>\t\n\t<div class=\"col-md-12\" *ngIf=\"!showDropdowns\" style=\"text-align: center;\">\n\t\t<div class=\"dropdown\">\n\t\t  <button class=\"btn btn-primary btn-sm\">Routes List</button>\n\t\t  <div class=\"dropdown-content\">\n\t\t  \t<a [routerLink]=\"['/route',route.Route_number]\" *ngFor=\"let route of routes\" href=\"#\">\n\t\t  \t\t{{route.Route_number}}\n\t\t  \t</a>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row grid-container\" *ngIf=\"!tableView\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"table\">\n\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\t\n\t\t\t            <th>User ID</th>\n\t\t\t            <th>Route Number</th>\n\t\t\t            <th>Date  Time</th>\n\t\t\t            <th>View Route on Map</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let route of routes\">\n\t\t\t            <td>{{route.Imei}}</td>\n\t\t\t            <td>{{route.Route_number}}</td>\n\t\t\t            <td style=\"white-space:pre\">{{route.Date_time}}</td>\n\t\t\t\t\t\t<td><a [routerLink]=\"['/route',route.Route_number]\">View Route</a></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"!routes.length\">\n\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t<td colspan=\"7\">No Records Found</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr></tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n<div>\n\t<div>\n\t  <div *ngIf=\"!mapView\" class=\"row\">\n\t    <div class=\"col-md-10\">\n\t      <div class=\"route-div\">    \n\t        Route Number  {{ singleRoute.id  }} for User {{singleRoute.imei}}\n\t      </div>\n\t    </div>\n\t  </div>   \n\t  <div class=\"row\">\n\t    <div class=\"col-md-12\">\n\t      <app-route-map  [routes]=\"routes\" [map-route]=\"singleRoute\" [table-view]=\"tableView\"\n\t           ></app-route-map>\n\t    </div>\n\t  </div>\n\t</div>     \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoutesComponent = (function () {
    function RoutesComponent(routeParams, DataService) {
        this.routeParams = routeParams;
        this.DataService = DataService;
        this.routes = [];
        this.singleRoute = {};
        this.tableView = true;
        this.mapView = true;
        this.showDropdowns = true;
        this.id = 0;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.daterange = {};
        this.options = {
            singleDatePicker: true,
            locale: { format: 'MM-DD-YYYY' },
            alwaysShowCalendars: true,
            showDropdowns: true,
            maxDate: new Date(),
            minDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10))
        };
    }
    RoutesComponent.prototype.getRoutes = function (imei_numbers, dates) {
        var _this = this;
        this.tableView = false;
        this.DataService.getRoutes(imei_numbers, dates)
            .then(function (routes) {
            _this.updateTheRoute(routes);
        });
    };
    RoutesComponent.prototype.updateTheRoute = function (routes) {
        var sourcePromises = this.getAddress(routes, "source");
        Promise.all(sourcePromises);
        var destinationPromises = this.getAddress(routes, "destination");
        Promise.all(destinationPromises);
        this.routes = routes;
        localStorage.setItem('routes', JSON.stringify(this.routes));
        //console.log(this.routes);
    };
    RoutesComponent.prototype.getAddress = function (routes, key) {
        var promises = [];
        routes.forEach(function (route) {
            var promise = new Promise(function (resolve, reject) {
                var geocoder, address;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(route[key].Lat, route[key].Long);
                //console.log(route[key]);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            address = results[0].formatted_address;
                        }
                        else {
                            address = "No Address";
                        }
                    }
                    else {
                        address = "No Address";
                    }
                    delete route[key];
                    route[key] = address;
                    resolve(route);
                });
            });
            promises.push(promise);
        });
        return promises;
    };
    RoutesComponent.prototype.getRoute = function (id, imei) {
        var _this = this;
        this.DataService.getCordinates(id, imei)
            .then(function (coordinates) {
            _this.showDropdowns = false;
            _this.coordinates = coordinates;
            _this.mapView = false;
            //console.log(this.routes);
            var selectedRoute = _this.routes.filter(function (route) { return route.Route_number === id; });
            //console.log("selectedRoute");
            //console.log(this.coordinates);
            _this.singleRoute = {
                "id": id,
                "imei": selectedRoute[0].Imei,
                "directions": _this.coordinates[_this.coordinates.length - 1].Location
            };
            //console.log(this.singleRoute);
        });
        // //console.log(this.coordinates[0].Location);
        // });
    };
    RoutesComponent.prototype.onChange = function ($event) {
        //console.log(this.selectedItems);
    };
    RoutesComponent.prototype.selectedDate = function (value, datepicker) {
        datepicker.start = value.start;
        datepicker.end = value.end;
        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    };
    RoutesComponent.prototype.showRouteTable = function () {
        var dates = this.daterange.start.format("MM-DD-YYYY") + "," + this.daterange.end.format("MM-DD-YYYY HH:mm:ss");
        var locationLists = [];
        this.selectedItems.forEach(function (list) {
            locationLists.push(list.id);
        });
        this.getRoutes(locationLists.join(","), dates);
    };
    RoutesComponent.prototype.setMyOptions = function (options) {
        var temp_options = [];
        options.forEach(function (option) {
            temp_options.push({
                id: option, itemName: option
            });
        });
        this.dropdownList = temp_options;
    };
    RoutesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var buttonHtml = "<div class='custom-dropdown-button'>";
        buttonHtml += "<button id='custom-ok-button' class='btn btn-outline-secondary btn-sm'>OK</button>";
        buttonHtml += "<button id='custom-cancel-button' class='btn btn-outline-secondary btn-sm'>Cancel</button>";
        buttonHtml += "</div>";
        __WEBPACK_IMPORTED_MODULE_3_jquery__(buttonHtml).insertAfter(".lazyContainer");
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#custom-cancel-button")
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.dropdown-list').prop("hidden", true);
            _this.selectedItems = [];
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#custom-ok-button")
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.dropdown-list').prop("hidden", true);
        });
    };
    RoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DataService.getDistinctPhoneNumber()
            .then(function (options) { return _this.setMyOptions(options); });
        this.routeParams.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.routes = JSON.parse(localStorage.getItem('routes'));
                var selectedRoute = _this.routes.filter(function (route) { return route.Route_number === _this.id; });
                _this.getRoute(_this.id, selectedRoute[0].Imei);
            }
        });
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select User",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 1,
            classes: "myclass custom-class"
        };
    };
    return RoutesComponent;
}());
RoutesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-routes',
        template: __webpack_require__("../../../../../src/app/routes/routes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/routes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], RoutesComponent);

var _a, _b;
//# sourceMappingURL=routes.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n      <h3>\n        {{ title }}\n      </h3>\n    </header>\n    <h1>Login</h1>\n    <div [hidden]=\"!invalidLogin\"\n             class=\"alert alert-danger\">\n          Username or password is invalid\n        </div>\n    <form #userRegistionForm=\"ngForm\" (ngSubmit)=\"validateUser()\">\n      <div class=\"form-group\">\n        <label for=\"username\">User Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" required #username=\"ngModel\">\n        <div [hidden]=\"username.valid || username.pristine\"\n             class=\"alert alert-danger\">\n          UserName is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\">\n        <div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is invalid\n        </div>\n      </div>\n       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userRegistionForm.form.valid\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(data, auth, router) {
        this.data = data;
        this.auth = auth;
        this.router = router;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]('', '', '', '', null, '');
    };
    LoginComponent.prototype.validateUser = function () {
        var _this = this;
        console.log(this.user);
        this.auth.login(this.user)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/home']);
            }
        }, function (err) { return _this.invalidLogin = true; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Add New User</h1>\n    <form #userRegistionForm=\"ngForm\" (ngSubmit)=\"saveUser()\">\n      <div class=\"form-group\">\n        <label for=\"username\">User Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" required #username=\"ngModel\">\n        <div [hidden]=\"username.valid || username.pristine\"\n             class=\"alert alert-danger\">\n          UserName is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\">\n        <div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email Id</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email_id\" required #email=\"ngModel\">\n       <div [hidden]=\"email.valid || email.pristine\"\n             class=\"alert alert-danger\">\n          Email is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"address\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"user.address\" required #address=\"ngModel\">\n        <div [hidden]=\"address.valid || address.pristine\"\n             class=\"alert alert-danger\">\n          Address is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone_number\">Phone Number</label>\n        <input type=\"text\" pattern=\"\\d*\" maxlength=\"10\" minlength=\"10\" class=\"form-control\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"user.phone_number\" required #phone_number=\"ngModel\">\n        <div [hidden]=\"phone_number.valid || phone_number.pristine\"\n             class=\"alert alert-danger\">\n          Phone Number is invalid\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userRegistionForm.form.valid\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_notify__ = __webpack_require__("../../../../angular4-notify/angular4-notify.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular4_notify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(DataService, authservice, router, routeParams, notificationsService) {
        this.DataService = DataService;
        this.authservice = authservice;
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.setUser();
    };
    RegisterComponent.prototype.saveUser = function () {
        var _this = this;
        this.DataService.createUser(this.user)
            .subscribe(function (customerResponse) {
            if (customerResponse.status === "error") {
                _this.notificationsService.addError(customerResponse.err);
            }
            else {
                //this.setUser();
                _this.notificationsService.addInfo("User Added Succesfully");
            }
        });
    };
    RegisterComponent.prototype.setUser = function () {
        var _this = this;
        this.user_types = {
            superadmin: 'admin',
            admin: 'user',
            user: 'user'
        };
        var userType = this.authservice.checkforUserType();
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]('', '', '', '', null, this.user_types[userType]);
        this.routeParams.params.subscribe(function (params) {
            if (params["superadmin"] === "true") {
                console.log("add super user");
                _this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]('', '', '', '', null, "superadmin");
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular4_notify__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular4_notify__["NotificationsService"]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/superadmin/superadmin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/superadmin/superadmin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Accept Super Admin Request</h1>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"acceptRequest(true)\">Yes</button>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"acceptRequest(false)\">No</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/superadmin/superadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_notify__ = __webpack_require__("../../../../angular4-notify/angular4-notify.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular4_notify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuperadminComponent = (function () {
    function SuperadminComponent(DataService, authservice, router, routeParams, notificationsService) {
        this.DataService = DataService;
        this.authservice = authservice;
        this.router = router;
        this.routeParams = routeParams;
        this.notificationsService = notificationsService;
    }
    SuperadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams.params.subscribe(function (params) {
            _this.verficationId = params['id'];
            // if(params["superadmin"] === "true"){
            // }
        });
    };
    SuperadminComponent.prototype.acceptRequest = function (accept) {
        var _this = this;
        var superAdminData = {
            accept: accept,
            verificationUUID: this.verficationId
        };
        this.DataService.createSuperAdmin(superAdminData)
            .subscribe(function (customerResponse) {
            if (customerResponse.status === "error") {
                _this.notificationsService.addError(customerResponse.err);
            }
            else {
                if (accept)
                    _this.notificationsService.addInfo("SuperAdmin added successfully");
                else
                    _this.notificationsService.addInfo("Request is declined");
            }
        });
    };
    return SuperadminComponent;
}());
SuperadminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-superadmin',
        template: __webpack_require__("../../../../../src/app/user/superadmin/superadmin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/superadmin/superadmin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular4_notify__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular4_notify__["NotificationsService"]) === "function" && _e || Object])
], SuperadminComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=superadmin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__superadmin_superadmin_component__ = __webpack_require__("../../../../../src/app/user/superadmin/superadmin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'register/:superadmin/superadmin', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'superuser/confirmation/:id', component: __WEBPACK_IMPORTED_MODULE_4__superadmin_superadmin_component__["a" /* SuperadminComponent */] },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], UserRoutingModule);

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__superadmin_superadmin_component__ = __webpack_require__("../../../../../src/app/user/superadmin/superadmin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__user_routing_module__["a" /* UserRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_8__superadmin_superadmin_component__["a" /* SuperadminComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, email_id, password, address, phone_number, user_type) {
        this.username = username;
        this.email_id = email_id;
        this.password = password;
        this.address = address;
        this.phone_number = phone_number;
        this.user_type = user_type;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map