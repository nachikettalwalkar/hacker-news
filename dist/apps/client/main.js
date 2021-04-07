(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ul8":
/*!****************************************************************!*\
  !*** ./libs/core-data/src/lib/services/items/items.service.ts ***!
  \****************************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "KkI/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class ItemsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    items(ids) {
        return ids.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((obsIds) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(obsIds.map((id) => this.getItem(id)))));
    }
    getItem(id) {
        return this.httpClient.get(this.getUrl(`item/${id}.json`));
    }
    getUrl(model) {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint}${model}`;
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+vWs":
/*!********************************************************!*\
  !*** ./apps/client/src/app/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");




class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["hn-navbar"]], decls: 11, vars: 0, consts: [["color", "primary"], ["routerLink", "/", "mat-button", "", 1, "nav-link", "title"], [1, "nav-spacer"], ["routerLink", "/top-stories", "mat-button", "", 1, "nav-link"], ["routerLink", "/new-stories", "mat-button", "", 1, "nav-link"], ["routerLink", "/best-stories", "mat-button", "", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hacker News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Top Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Editor's Pick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: [".nav-link[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbn1cbi5uYXYtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "/2QX":
/*!******************************************************!*\
  !*** ./libs/core-state/src/lib/core-state.module.ts ***!
  \******************************************************/
/*! exports provided: coreStateRoutes, CoreStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreStateRoutes", function() { return coreStateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreStateModule", function() { return CoreStateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const coreStateRoutes = [];
class CoreStateModule {
}
CoreStateModule.ɵfac = function CoreStateModule_Factory(t) { return new (t || CoreStateModule)(); };
CoreStateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreStateModule });
CoreStateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreStateModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "/QGG":
/*!********************************************************************!*\
  !*** ./libs/core-data/src/lib/services/stories/stories.service.ts ***!
  \********************************************************************/
/*! exports provided: StoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesService", function() { return StoriesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "KkI/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class StoriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    topStoryIds() {
        return this.httpClient.get(this.getUrl('topstories'));
    }
    bestStoryIds() {
        return this.httpClient.get(this.getUrl('beststories'));
    }
    newStoryIds() {
        return this.httpClient.get(this.getUrl('newstories'));
    }
    getUrl(model) {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint}${model}.json`;
    }
}
StoriesService.ɵfac = function StoriesService_Factory(t) { return new (t || StoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StoriesService, factory: StoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./apps/client/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nachiket.talwalkar/workstation/angular-projects/hacker-news/apps/client/src/main.ts */"Zr4m");


/***/ }),

/***/ "3VV3":
/*!************************************************!*\
  !*** ./apps/client/src/app/utils/date-util.ts ***!
  \************************************************/
/*! exports provided: getFormattedDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedDate", function() { return getFormattedDate; });
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
function getFormattedDate(unixDate) {
    const milliseconds = unixDate * 1000;
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth();
    return day + ' ' + months[month];
}


/***/ }),

/***/ "3bmm":
/*!**************************************************!*\
  !*** ./libs/material/src/lib/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "8Y7J");




















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "BI0n":
/*!***********************************************!*\
  !*** ./apps/client/src/app/routing.module.ts ***!
  \***********************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "R5Lt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'top-stories', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'new-stories', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'best-stories', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', redirectTo: '/' },
];
class RoutingModule {
}
RoutingModule.ɵfac = function RoutingModule_Factory(t) { return new (t || RoutingModule)(); };
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "DIFY":
/*!***********************************!*\
  !*** ./libs/testing/src/index.ts ***!
  \***********************************/
/*! exports provided: testingRoutes, TestingModule, mockWidgetsService, mockItem, mockEmptyItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_testing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/testing.module */ "eJLb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testingRoutes", function() { return _lib_testing_module__WEBPACK_IMPORTED_MODULE_0__["testingRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestingModule", function() { return _lib_testing_module__WEBPACK_IMPORTED_MODULE_0__["TestingModule"]; });

/* harmony import */ var _lib_mocks_items_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mocks/items.mocks */ "y479");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockWidgetsService", function() { return _lib_mocks_items_mocks__WEBPACK_IMPORTED_MODULE_1__["mockWidgetsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockItem", function() { return _lib_mocks_items_mocks__WEBPACK_IMPORTED_MODULE_1__["mockItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockEmptyItem", function() { return _lib_mocks_items_mocks__WEBPACK_IMPORTED_MODULE_1__["mockEmptyItem"]; });





/***/ }),

/***/ "KkI/":
/*!*****************************************************!*\
  !*** ./apps/client/src/environments/environment.ts ***!
  \*****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoint: 'https://hacker-news.firebaseio.com/v0/'
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

/***/ "NpkT":
/*!****************************************************!*\
  !*** ./libs/core-data/src/lib/core-data.module.ts ***!
  \****************************************************/
/*! exports provided: coreDataRoutes, CoreDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDataRoutes", function() { return coreDataRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDataModule", function() { return CoreDataModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const coreDataRoutes = [];
class CoreDataModule {
}
CoreDataModule.ɵfac = function CoreDataModule_Factory(t) { return new (t || CoreDataModule)(); };
CoreDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreDataModule });
CoreDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreDataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "R5Lt":
/*!****************************************************!*\
  !*** ./apps/client/src/app/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _hn_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hn/core-data */ "So+l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../story-list/story-list.component */ "e/sK");








function HomeComponent_hn_story_list_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "hn-story-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentPageStoriesChange", function HomeComponent_hn_story_list_4_Template_hn_story_list_currentPageStoriesChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.currentPageStories = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentPageStories", ctx_r0.currentPageStories);
} }
class HomeComponent {
    constructor(storiesService, router) {
        this.storiesService = storiesService;
        this.router = router;
        this.stories = [];
        this.currentPageStories = [];
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 50];
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                switch (event.url) {
                    case "/top-stories":
                        this.currentPageName = "Top Stories";
                        this.getTopStories();
                        break;
                    case "/new-stories":
                        this.currentPageName = "New Stories";
                        this.getNewStories();
                        break;
                    case "/best-stories":
                        this.currentPageName = "Editor's Pick";
                        this.getBestStories();
                        break;
                    case "/":
                        this.currentPageName = "Top Stories";
                        this.getTopStories();
                        break;
                    default:
                        this.currentPageName = "Top Stories";
                        this.getTopStories();
                        break;
                }
            }
        });
    }
    ngOnInit() {
    }
    getIdsFromStories(ids, pageSize) {
        return ids.map((e, i) => {
            return i % pageSize === 0 ? this.stories.slice(i, i + pageSize) : null;
        }).filter(e => { return e; });
    }
    handlePage(e) {
        if (e.pageIndex === 0) {
            this.storyChunks = [];
            this.currentPageStories = this.getIdsFromStories(this.stories, e.pageSize)[0];
        }
        else {
            this.storyChunks = this.getIdsFromStories(this.stories, e.pageSize);
            this.currentPageStories = this.getStoryChunkAtIndex(e.pageIndex);
        }
    }
    getStoryChunkAtIndex(index) {
        return this.storyChunks[index];
    }
    getBestStories() {
        this.storiesService.bestStoryIds().subscribe((ids) => {
            this.stories = ids;
            this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
        });
    }
    getNewStories() {
        this.storiesService.newStoryIds().subscribe((ids) => {
            this.stories = ids;
            this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
        });
    }
    getTopStories() {
        this.storiesService.topStoryIds().subscribe((ids) => {
            this.stories = ids;
            this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_hn_core_data__WEBPACK_IMPORTED_MODULE_0__["StoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["hn-home"]], decls: 5, vars: 5, consts: [[1, "flex-row", "header-wrapper"], [1, "page-title"], [3, "length", "pageSize", "pageSizeOptions", "page"], [3, "currentPageStories", "currentPageStoriesChange", 4, "ngIf"], [3, "currentPageStories", "currentPageStoriesChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function HomeComponent_Template_mat_paginator_page_3_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_hn_story_list_4_Template, 1, 1, "hn-story-list", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentPageName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.stories == null ? null : ctx.stories.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentPageStories.length);
    } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"]], styles: [".page-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #838383;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM4MzgzODM7XG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7O1xufVxuXG4ubWF0LXBhZ2luYXRvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });


/***/ }),

/***/ "So+l":
/*!*************************************!*\
  !*** ./libs/core-data/src/index.ts ***!
  \*************************************/
/*! exports provided: coreDataRoutes, CoreDataModule, StoriesService, ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core-data.module */ "NpkT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coreDataRoutes", function() { return _lib_core_data_module__WEBPACK_IMPORTED_MODULE_0__["coreDataRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreDataModule", function() { return _lib_core_data_module__WEBPACK_IMPORTED_MODULE_0__["CoreDataModule"]; });

/* harmony import */ var _lib_services_stories_stories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/stories/stories.service */ "/QGG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoriesService", function() { return _lib_services_stories_stories_service__WEBPACK_IMPORTED_MODULE_1__["StoriesService"]; });

/* harmony import */ var _lib_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/items/items.service */ "+ul8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return _lib_services_items_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]; });






/***/ }),

/***/ "Zr4m":
/*!*********************************!*\
  !*** ./apps/client/src/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "q7cF");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "KkI/");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "e/sK":
/*!****************************************************************!*\
  !*** ./apps/client/src/app/story-list/story-list.component.ts ***!
  \****************************************************************/
/*! exports provided: StoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryListComponent", function() { return StoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _hn_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hn/core-data */ "So+l");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-util */ "3VV3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");










function StoryListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoryListComponent_mat_list_item_3_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.getUrl(item_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.by);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getComments(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getTime(item_r2.time));
} }
function StoryListComponent_mat_list_item_3_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Oops! something went wrong.. Failed to load the story. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please try again later.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoryListComponent_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoryListComponent_mat_list_item_3_mat_card_1_Template, 24, 6, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoryListComponent_mat_list_item_3_mat_card_2_Template, 6, 0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2);
} }
class StoryListComponent {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    ngOnInit() {
        this.storyItems$ = this.getStoryItems(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.currentPageStories));
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('currentPageStories')) {
            this.storyItems$ = this.getStoryItems(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.currentPageStories));
        }
    }
    showUserDetails(user) {
        console.log(user);
    }
    getTime(time) {
        return Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_3__["getFormattedDate"])(time);
    }
    getComments(item) {
        if (item.hasOwnProperty('kids')) {
            return (item.kids).length;
        }
        else {
            return 0;
        }
    }
    getUrl(item) {
        if (item.hasOwnProperty('url')) {
            return item.url;
        }
        else {
            return null;
        }
    }
    getStoryItems(ids) {
        return this.itemsService.items(ids);
    }
}
StoryListComponent.ɵfac = function StoryListComponent_Factory(t) { return new (t || StoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hn_core_data__WEBPACK_IMPORTED_MODULE_1__["ItemsService"])); };
StoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryListComponent, selectors: [["hn-story-list"]], inputs: { currentPageStories: "currentPageStories" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 6, consts: [["class", "loader", 4, "ngIf"], ["class", "mat-elevation-z2", 4, "ngFor", "ngForOf"], [1, "loader"], [1, "mat-elevation-z2"], ["class", "example-card", 4, "ngIf"], [1, "example-card"], [1, "story-title"], ["target", "_balnk", 1, "story-link", 3, "href"], [1, "flex-row", "story-metadata"], ["aria-hidden", "false", "aria-label", "user"], [1, "story-user"], ["aria-hidden", "false", "aria-label", "favorite"], ["aria-hidden", "false", "aria-label", "comment"], ["aria-hidden", "false", "aria-label", "time"], [1, "flex-row"]], template: function StoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoryListComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoryListComponent_mat_list_item_3_Template, 3, 2, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.storyItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.storyItems$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".mat-list .mat-list-item {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  border-bottom: darkorange;\n}\n\n  .mat-list .mat-list-item {\n  height: 120px !important;\n  border-bottom: darkorange;\n}\n\n .mat-card-header-text {\n  width: 100%;\n  border-bottom: darkorange;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 50%;\n  padding: 10px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  color: gray;\n}\n\n.story-link[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-weight: 500;\n}\n\n.story-title[_ngcontent-%COMP%] {\n  --text-opacity: 1;\n  color: #161e2e;\n  color: rgba(22, 30, 46, var(--text-opacity));\n  font-size: 20px;\n}\n\n.story-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n  vertical-align: middle;\n  margin-left: 5px;\n  font-size: 16px;\n  color: gray;\n}\n\n.story-metadata[_ngcontent-%COMP%] {\n  margin-left: -35px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  margin: 2em;\n  padding-top: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQztFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFDTDs7QUFFQztFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUNMOztBQUVDO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDTDs7QUFDSztFQUNJLFNBQUE7RUFDQSxhQUFBO0FBQ1Q7O0FBR0M7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFBTDs7QUFHQztFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUw7O0FBR0M7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUFBTDs7QUFHQztFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBTDs7QUFHQztFQUNJLGtCQUFBO0FBQUw7O0FBR0M7RUFDSSxzQkFBQTtBQUFMOztBQUdDO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTCIsImZpbGUiOiJzdG9yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiBkYXJrb3JhbmdlO1xuIH1cbiBcbiA6Om5nLWRlZXAgIC5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbXtcbiAgICAgaGVpZ2h0OjEyMHB4IWltcG9ydGFudDtcbiAgICAgYm9yZGVyLWJvdHRvbTogZGFya29yYW5nZTtcbiB9XG4gXG4gOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGJvcmRlci1ib3R0b206IGRhcmtvcmFuZ2U7XG4gfVxuIFxuIC5mbGV4LXJvdyB7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gXG4gICAgID4gZGl2IHtcbiAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIH1cbiB9XG4gXG4gbWF0LWljb24ge1xuICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgY29sb3I6IGdyYXk7XG4gfVxuIFxuIC5zdG9yeS1saW5rIHtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gfVxuIFxuIC5zdG9yeS10aXRsZXtcbiAgICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgIGNvbG9yOiAjMTYxZTJlO1xuICAgICBjb2xvcjogcmdiYSgyMiwzMCw0Nix2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuIH1cbiBcbiAuc3RvcnktdXNlciB7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICBjb2xvcjogZ3JheTtcbiB9XG4gXG4gLnN0b3J5LW1ldGFkYXRhIHtcbiAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xuIH1cbiBcbiAubWF0LWljb24ge1xuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbiBcbiAuZXhhbXBsZS1jYXJkIHtcbiAgICAgbWFyZ2luOjJlbTtcbiAgICAgcGFkZGluZy10b3A6MDtcbiAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgIHBhZGRpbmctcmlnaHQ6MFxuIH1cbiAiXX0= */"] });


/***/ }),

/***/ "eJLb":
/*!************************************************!*\
  !*** ./libs/testing/src/lib/testing.module.ts ***!
  \************************************************/
/*! exports provided: testingRoutes, TestingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testingRoutes", function() { return testingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingModule", function() { return TestingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const testingRoutes = [];
class TestingModule {
}
TestingModule.ɵfac = function TestingModule_Factory(t) { return new (t || TestingModule)(); };
TestingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestingModule });
TestingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "i0E/":
/*!**********************************************!*\
  !*** ./apps/client/src/app/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "+vWs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["hn-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hn-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 300px;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuIl19 */"] });


/***/ }),

/***/ "q7cF":
/*!*******************************************!*\
  !*** ./apps/client/src/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _hn_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hn/core-data */ "So+l");
/* harmony import */ var _hn_core_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hn/core-state */ "vaZa");
/* harmony import */ var _hn_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hn/material */ "uLmI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "i0E/");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "R5Lt");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "+vWs");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing.module */ "BI0n");
/* harmony import */ var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./story-list/story-list.component */ "e/sK");
/* harmony import */ var _hn_testing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hn/testing */ "DIFY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "8Y7J");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _hn_core_data__WEBPACK_IMPORTED_MODULE_4__["CoreDataModule"],
            _hn_core_state__WEBPACK_IMPORTED_MODULE_5__["CoreStateModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _hn_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
            _hn_testing__WEBPACK_IMPORTED_MODULE_12__["TestingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__["StoryListComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _hn_core_data__WEBPACK_IMPORTED_MODULE_4__["CoreDataModule"],
        _hn_core_state__WEBPACK_IMPORTED_MODULE_5__["CoreStateModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _hn_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
        _hn_testing__WEBPACK_IMPORTED_MODULE_12__["TestingModule"]] }); })();


/***/ }),

/***/ "uLmI":
/*!************************************!*\
  !*** ./libs/material/src/index.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/material.module */ "3bmm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _lib_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "vaZa":
/*!**************************************!*\
  !*** ./libs/core-state/src/index.ts ***!
  \**************************************/
/*! exports provided: coreStateRoutes, CoreStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_state_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core-state.module */ "/2QX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coreStateRoutes", function() { return _lib_core_state_module__WEBPACK_IMPORTED_MODULE_0__["coreStateRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStateModule", function() { return _lib_core_state_module__WEBPACK_IMPORTED_MODULE_0__["CoreStateModule"]; });




/***/ }),

/***/ "y479":
/*!***************************************************!*\
  !*** ./libs/testing/src/lib/mocks/items.mocks.ts ***!
  \***************************************************/
/*! exports provided: mockWidgetsService, mockItem, mockEmptyItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockWidgetsService", function() { return mockWidgetsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockItem", function() { return mockItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockEmptyItem", function() { return mockEmptyItem; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const mockWidgetsService = {
    items: () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]),
    getItem: () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object.assign({}, mockItem)),
};
const mockItem = {
    id: 111,
    title: "mock",
    by: "mock",
    time: 1617801950,
    type: "story",
    poll: 30,
    kids: 20,
};
const mockEmptyItem = {
    id: null,
    title: 'mockEmpty',
    description: 'mockEmpty',
};


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map