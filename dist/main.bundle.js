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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live_location_live_location_component__ = __webpack_require__("../../../../../src/app/live-location/live-location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/routes', pathMatch: 'full' },
    { path: 'routes', component: __WEBPACK_IMPORTED_MODULE_2__routes_routes_component__["a" /* RoutesComponent */] },
    { path: 'route/:id', component: __WEBPACK_IMPORTED_MODULE_2__routes_routes_component__["a" /* RoutesComponent */] },
    { path: 'live-locations', component: __WEBPACK_IMPORTED_MODULE_3__live_location_live_location_component__["a" /* LiveLocationComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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

module.exports = "<main class=\"container\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n</main>\n<br /><br />"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__);
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
            __WEBPACK_IMPORTED_MODULE_7__live_location_live_location_component__["a" /* LiveLocationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_daterangepicker__["Daterangepicker"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_datepicker__["NgDatepickerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */], { provide: __WEBPACK_IMPORTED_MODULE_14__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_14__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes?Phone_number='; // URL to web api
    }
    DataService.prototype.getRoutes = function (phone_numbers, dates) {
        return this.http.get(this.heroesUrl + phone_numbers + "&Date_time=" + dates, {})
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getLiveLocations = function (phone_numbers) {
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/live?Phone_number=" + phone_numbers, {})
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getDistinctPhoneNumber = function () {
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/getDistinctPhoneNumber", {})
            .toPromise()
            .then(function (response) { return response.json()['json']; });
    };
    DataService.prototype.getCordinates = function (routeId) {
        return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/codinates/" + routeId, {})
            .toPromise()
            .then(function (response) { return response.json()['json']; });
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

module.exports = "<angular2-multiselect *ngIf=\"!showMap\" [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"></angular2-multiselect>\n<br/>\n<button class=\"btn btn-primary btn-md\" *ngIf=\"!showMap\" [disabled]=\"selectedItems.length === 0\" (click)=\"showMarker()\">Submit</button>\n<br/>\n<div>\n\t<button class=\"btn btn-primary btn-md\" *ngIf=\"showMap\" style=\"float: right;margin-bottom:7px\" (click)=\"clearMarker()\">Clear Map</button>\n\t<div #map style=\"width:100%;height:440px;margin-top: 5px;\"></div>\n</div>\t\n\n"

/***/ }),

/***/ "../../../../../src/app/live-location/live-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    }
    LiveLocationComponent.prototype.showLiveLocation = function () {
        var position;
        var locations = [];
        var bounds = new google.maps.LatLngBounds();
        console.log(this.routes);
        this.routes.forEach(function (route, key) {
            var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key];
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
            console.log(locations[i][0]);
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
            text: "Select Phone Numbers",
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
                var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key];
                locations.push(temp_array);
            });
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            //	this.map.setCenter(new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long));
            for (i = 0; i < locations.length; i++) {
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

module.exports = "<nav class=\"navbar navbar-inner navbar-fixed-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\" style=\"\">\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/routes\">\n\t\t\t\t<img src=\"assets/images/people.png\" alt=\"logo\" />\n\t\t\t\t<span class=\"app-title\">Right Track</span>\n\t\t\t</a>\n\t\t\t<span class=\"navbar-collapse\">\n\t\t\t\t<ul class=\"nav navbar-nav nav-pills navBarPadding\">\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/routes\">Routes</a></li>\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/live-locations\">Live Locations</a></li>\n\t\t\t\t</ul>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

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

module.exports = "<div id=\"map-canvas\" style=\"width:100%;height:400px;\"></div>\n\n"

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
    }
    RouteMapComponent.prototype.initMap = function () {
        var stations = [];
        var service = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map-canvas'));
        this.mapRoute.directions.map(function (direction) {
            stations.push({ lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long) });
        });
        stations[0].name = "Source";
        stations[stations.length - 1].name = "Destination";
        // list of points
        // var stations1 = [
        //     {lat: 48.9812840, lng: 21.2171920, name: 'Source'},
        //     {lat: 48.9832841, lng: 21.2176398, },
        //     {lat: 48.9856443, lng: 21.2209088, },
        //     {lat: 48.9861461, lng: 21.2261563, },
        //     {lat: 48.9874682, lng: 21.2294855, },
        //     {lat: 48.9909244, lng: 21.2295512, },
        //     {lat: 48.9928871, lng: 21.2292352, },
        //     {lat: 48.9921334, lng: 21.2246742, },
        //     {lat: 48.9943196, lng: 21.2234792, },
        //     {lat: 48.9966345, lng: 21.2221262, },
        //     {lat: 48.9981191, lng: 21.2271386, },
        //     {lat: 49.0009168, lng: 21.2359527, },
        //     {lat: 49.0017950, lng: 21.2392890, },
        //     {lat: 48.9991912, lng: 21.2398272, },
        //     {lat: 48.9959850, lng: 21.2418410, },
        //     {lat: 48.9931772, lng: 21.2453901, },
        //     {lat: 48.9963512, lng: 21.2525850, },
        //     {lat: 48.9985134, lng: 21.2508423, },
        //     {lat: 49.0085000, lng: 21.2508000, },
        //     {lat: 49.0093000, lng: 21.2528000, },
        //     {lat: 49.0103000, lng: 21.2560000, },
        //     {lat: 49.0112000, lng: 21.2590000, },
        //     {lat: 49.0124000, lng: 21.2620000, },
        //     {lat: 49.0135000, lng: 21.2650000, },
        //     {lat: 49.0149000, lng: 21.2680000, },
        //     {lat: 49.0171000, lng: 21.2710000, },
        //     {lat: 49.0198000, lng: 21.2740000, },
        //     {lat: 49.0305000, lng: 21.3000000, name: 'Destination'},
        // ];
        //var stations = this.mapRoute.directions;
        // Zoom and center map automatically by stations (each station will be in visible map area)
        var lngs = stations.map(function (station) { return station.lng; });
        var lats = stations.map(function (station) { return station.lat; });
        map.fitBounds({
            west: Math.min.apply(null, lngs),
            east: Math.max.apply(null, lngs),
            north: Math.min.apply(null, lats),
            south: Math.max.apply(null, lats),
        });
        // Show stations on the map as markers
        for (var i = 0; i < stations.length; i++) {
            if (!stations[i]['name'])
                continue;
            new google.maps.Marker({
                position: stations[i],
                map: map
            });
        }
        // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
        for (var i = 0, parts = [], max = 25 - 1; i < stations.length; i = i + max)
            parts.push(stations.slice(i, i + max + 1));
        // Callback function to process service results
        var service_callback = function (response, status) {
            if (status != 'OK') {
                console.log('Directions request failed due to ' + status);
                return;
            }
            var renderer = new google.maps.DirectionsRenderer;
            renderer.setMap(map);
            renderer.setOptions({ suppressMarkers: true, preserveViewport: true });
            renderer.setDirections(response);
        };
        // Send requests to service to get route (for stations count <= 25 only one request will be sent)
        for (var i = 0; i < parts.length; i++) {
            // Waypoints does not include first station (origin) and last station (destination)
            var waypoints = [];
            for (var j = 1; j < parts[i].length - 1; j++)
                waypoints.push({ location: parts[i][j], stopover: false });
            // Service options
            var service_options = {
                origin: parts[i][0],
                destination: parts[i][parts[i].length - 1],
                waypoints: waypoints,
                travelMode: 'DRIVING'
            };
            // Send request
            service.route(service_options, service_callback);
        }
    };
    RouteMapComponent.prototype.ngAfterViewInit = function () {
    };
    RouteMapComponent.prototype.ngOnInit = function () {
        window.googleMapsReady = this.initMap.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&callback=googleMapsReady";
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
RouteMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route-map',
        template: __webpack_require__("../../../../../src/app/route-map/route-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/route-map/route-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], RouteMapComponent);

var _a, _b;
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

module.exports = "<div class=\"container\" >\n\t<div class=\"row\" style=\"margin-top: 7px\">\n\t\t<div class=\"col-md-2\" [hidden]=\"!showDropdowns\">\n\t\t\t<angular2-multiselect *ngIf=\"!showMap\" [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\"></angular2-multiselect>\n\t\t</div>\n\t\t<div class=\"col-md-4\" [hidden]=\"!showDropdowns\">\t\n\t\t\t<input type=\"text\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedDate($event, daterange)\" />\n\t\t\t<button (click)=\"showRouteTable()\">Add</button>\t\n\t\t</div>\n\t\t<div class=\"col-md-6\" [hidden]=\"showDropdowns\">\n\t\t\t<div class=\"dropdown\">\n\t\t\t  <button class=\"btn btn-primary\">Routes List</button>\n\t\t\t  <div class=\"dropdown-content\">\n\t\t\t  \t<a [routerLink]=\"['/route',route.Route_number]\" *ngFor=\"let route of routes\" href=\"#\">\n\t\t\t  \t\t{{route.Route_number}}\n\t\t\t  \t</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row grid-container\" [hidden]=\"tableView\">\n\t\t<div class=\"col-md-10\">\n\t\t\t<div class=\"table\">\n\t\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\t\n\t\t\t\t\t\t\t<th>Accuracy</th>\n\t\t\t\t            <th>Imei</th>\n\t\t\t\t            <th>Direction</th>\n\t\t\t\t            <th>Speed</th>\n\t\t\t\t            <th>Distance</th>\n\t\t\t\t            <th>Route_number</th>\n\t\t\t\t            <th>Phone_number</th>\n\t\t\t\t            <th>Date_Time</th>\n\t\t\t\t     \t\t<th>Source</th>\n\t\t\t\t     \t\t<th>Destination</th>   \n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let route of routes\">\n\t\t\t\t\t\t\t<td>{{route.Accuracy}}</td>\n\t\t\t\t            <td>{{route.Imei}}</td>\n\t\t\t\t            <td>{{route.Direction}}</td>\n\t\t\t\t            <td>{{route.Speed}}</td>\n\t\t\t\t            <td>{{route.Distance}}</td>\n\t\t\t\t            <td>{{route.Route_number}}</td>\n\t\t\t\t            <td>{{route.Phone_number}}</td>\n\t\t\t\t            <td>{{route.Date_time}}</td>\n\t\t\t\t            <td>{{route.source}}</td>\n\t\t\t\t            <td>{{route.destination}}</td>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/route',route.Route_number]\">View Map</a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"!routes.length\">\n\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t<td colspan=\"7\">No Records Found</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div [hidden]=\"mapView\">\n\t<div *ngIf=\"singleRoute\">\n\t  <div class=\"row\">\n\t    <div class=\"col-md-10\">\n\t      <h4>    \n\t        Route Number  {{ singleRoute.id  }}         \n\t      </h4>\n\t    </div>\n\t  </div>    \n\t  <br /><br />\n\t  <div class=\"row\">\n\t    <div class=\"col-md-12\">\n\t      <app-route-map  [routes]=\"routes\" [map-route]=\"singleRoute\" \n\t      [hidden]=\"mapSingleView\" \n\t           ></app-route-map>\n\t    </div>\n\t  </div>\n\t</div>     \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
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
    RoutesComponent.prototype.getRoutes = function (phone_numbers, dates) {
        var _this = this;
        this.tableView = false;
        this.DataService.getRoutes(phone_numbers, dates)
            .then(function (routes) {
            localStorage.setItem('routes', JSON.stringify(routes));
            _this.updateTheRoute(routes);
        });
    };
    RoutesComponent.prototype.updateTheRoute = function (routes) {
        var sourcePromises = this.getAddress(routes, "source");
        Promise.all(sourcePromises);
        var destinationPromises = this.getAddress(routes, "destination");
        Promise.all(destinationPromises);
        this.routes = routes;
        console.log(this.routes);
    };
    RoutesComponent.prototype.getAddress = function (routes, key) {
        var promises = [];
        routes.forEach(function (route) {
            var promise = new Promise(function (resolve, reject) {
                var geocoder, address;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(route[key].Lat, route[key].Long);
                console.log(route[key]);
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
    RoutesComponent.prototype.getRoute = function (id) {
        var _this = this;
        this.DataService.getCordinates(id)
            .then(function (coordinates) {
            _this.showDropdowns = false;
            _this.coordinates = coordinates;
            _this.mapView = false;
            console.log(_this.routes);
            _this.singleRoute = {
                "id": id,
                "source": "Baner",
                "destination": "Anudh",
                "directions": _this.coordinates[0].Location
            };
            console.log(_this.singleRoute);
        });
        // console.log(this.coordinates[0].Location);
        // });
    };
    RoutesComponent.prototype.onChange = function ($event) {
        console.log(this.selectedItems);
    };
    RoutesComponent.prototype.selectedDate = function (value, datepicker) {
        // this is the date the iser selected
        console.log(value);
        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;
        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    };
    RoutesComponent.prototype.showRouteTable = function () {
        var dates = this.daterange.start.format("MM-DD-YYYY") + "," + this.daterange.end.format("MM-DD-YYYY HH:mm:ss");
        console.log(this.daterange.start.format("MM-DD-YYYY"), this.daterange.end.format("MM-DD-YYYY"));
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
    RoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DataService.getDistinctPhoneNumber()
            .then(function (options) { return _this.setMyOptions(options); });
        this.routeParams.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.routes = JSON.parse(localStorage.getItem('routes'));
                _this.getRoute(_this.id);
            }
        });
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Phone Numbers",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 1
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], RoutesComponent);

var _a, _b;
//# sourceMappingURL=routes.component.js.map

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