(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-drawer-container \"><router-outlet></router-outlet></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/currency-selector/currency-selector.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/currency-selector/currency-selector.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isSelectCurrency\" (click)=\"displaySelectCurrency()\" class=\"flex-container center\">\r\n    <div *ngIf=\"selectedCurrency flex-item\">\r\n        <mat-list>\r\n            <mat-list-item class=\" currency\">\r\n                <img mat-list-avatar [src]=\"icon_currency\" [alt]=\"selectedCurrency.text\">\r\n                <span >\r\n                    {{selectedCurrency.text}}\r\n                </span>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n    <div *ngIf=\"!selectedCurrency\">\r\n        <mat-list>\r\n            <mat-list-item class=\" currency\">\r\n                <img mat-list-avatar [src]=\"icon_currency\" alt=\"Select Currency\">\r\n                <span >\r\n                    Select Currency\r\n                </span>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"isSelectCurrency\" class=\"currency-list\"  class=\"mat-drawer-container \">\r\n    <mat-list>\r\n        <mat-list-item class=\" currency\">\r\n            <input #myInput placeholder=\"Item name...\"  (input)=\"filterItem(myInput.value)\" />\r\n        </mat-list-item>\r\n    </mat-list>\r\n    <div mat-button *ngFor=\"let currency of filteredItems\" (click)=\"select(currency)\">\r\n        <mat-list>\r\n            <mat-list-item class=\" currency\">\r\n                <img mat-list-avatar [src]=\"currency.flag\" [alt]=\"currency.text\">\r\n                <span class=\"currency-name\">\r\n                    {{currency.text}}\r\n                </span>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"welcome\" >\r\n  <form [formGroup]=\"addAccountForm\">\r\n    <div>\r\n\r\n      <div *ngIf=\"step == 0\">\r\n        <div class=\"header_text\">Choose a default currency</div>\r\n        <app-currency-selector class=\"center\" [(ngModel)]=\"currency\" formControlName=\"currency\"></app-currency-selector>\r\n        <div class=\"button_row\" (click)=\"next(step)\">\r\n          <div class=\"button\">Continue</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"step == 1\">\r\n        <div class=\"header_text\">Choose wallet</div>\r\n        <div class=\"center row_content\">\r\n          <mat-list>\r\n            <mat-list-item>\r\n              <!-- <app-category-icon-input formControlName=\"icon\"></app-category-icon-input> -->\r\n              <mat-form-field class=\"row_content\" style=\"padding-left: 20px;\">\r\n                <input matInput type=\"text\" formControlName=\"name\" />\r\n              </mat-form-field>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n        <div class=\"button_row\" (click)=\"next(step)\">\r\n          <div class=\"button\">Continue</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"step ==2\">\r\n        <div class=\"header_text\">Balance</div>\r\n        <div class=\"subheader_text\">How much do you have in wallet\r\n          <b>{{addAccountForm.value.name}}</b>\r\n        </div>\r\n        <mat-list>\r\n          <mat-list-item class=\"balance\">{{ addAccountForm.value.balance}} </mat-list-item>\r\n        </mat-list>\r\n        <div style=\"position: absolute; bottom: 230px;\">\r\n          <div>\r\n            <div>\r\n              <div style=\" height: 48px; font-size:36px;\">\r\n                <div class=\"keypad\">\r\n                  <div *ngFor=\"let row of phoneKeyboard\" class=\"row\">\r\n                    <button type=\"button\" color=\"white\" *ngFor=\"let item of row\" class=\"key mat-raised-button mat-white\"\r\n                      mat-raised-button (click)=\"key(item)\">\r\n                      <span *ngIf=\"item!='back_space'\">{{item}}</span>\r\n                      <i *ngIf=\"item=='back_space'\" class=\"material-icons\">\r\n                        backspace\r\n                      </i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"amount_button_row\" (click)=\"onSubmit(addAccountForm)\">\r\n          <div class=\"button\">Done</div>\r\n        </div>\r\n      </div>\r\n      <!-- <div *ngIf=\"step==3\">\r\n            <app-category-icon-input formControlName=\"icon\"></app-category-icon-input>\r\n            <div class=\"button_row\" (click)=\"onSubmit(addAccountForm)\">\r\n                <div class=\"button\">Done</div>\r\n              </div>\r\n        </div> -->\r\n    </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");




const routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MoneyViewer';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_wallet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/wallet.service */ "./src/app/shared/services/wallet.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-components/common-components.module */ "./src/app/common-components/common-components.module.ts");
/* harmony import */ var _welcome_welcome_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./welcome/welcome.module */ "./src/app/welcome/welcome.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_14__["CommonComponentsModule"],
            _welcome_welcome_module__WEBPACK_IMPORTED_MODULE_15__["WelcomeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production })
        ],
        providers: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _shared_services_wallet_service__WEBPACK_IMPORTED_MODULE_10__["WalletService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common-components/common-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/common-components/common-components.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-selector/currency-selector.component */ "./src/app/common-components/currency-selector/currency-selector.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CommonComponentsModule = class CommonComponentsModule {
};
CommonComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_3__["CurrencySelectorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]
        ],
        exports: [
            _currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_3__["CurrencySelectorComponent"]
        ]
    })
], CommonComponentsModule);



/***/ }),

/***/ "./src/app/common-components/currency-selector/currency-selector.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/common-components/currency-selector/currency-selector.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".currency-list {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 400;\n  width: 100%;\n  background: white;\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.currency {\n  width: 50%;\n  float: left;\n}\n\n.currency {\n  padding: 20px 0px;\n  transition: 0.3s;\n  font-size: 0.8em;\n  width: 100%;\n}\n\n.currency-name {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY3VycmVuY3ktc2VsZWN0b3IvQzpcXFVzZXJzXFxhbmlsLmdhbmdhZGhhcmFpYWhcXERvY3VtZW50c1xcYW5ndWxhclxcTW9uZXlWaWV3ZXIvc3JjXFxhcHBcXGNvbW1vbi1jb21wb25lbnRzXFxjdXJyZW5jeS1zZWxlY3RvclxcY3VycmVuY3ktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2N1cnJlbmN5LXNlbGVjdG9yL2N1cnJlbmN5LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50cy9jdXJyZW5jeS1zZWxlY3Rvci9jdXJyZW5jeS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW5jeS1saXN0e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDQwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG5cclxufVxyXG4uY3VycmVuY3l7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG5cclxufVxyXG4uY3VycmVuY3kge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmN1cnJlbmN5LW5hbWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG59IiwiLmN1cnJlbmN5LWxpc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDQwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmN1cnJlbmN5IHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jdXJyZW5jeSB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1cnJlbmN5LW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/common-components/currency-selector/currency-selector.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/common-components/currency-selector/currency-selector.component.ts ***!
  \************************************************************************************/
/*! exports provided: CurrencySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySelectorComponent", function() { return CurrencySelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/currency.service */ "./src/app/shared/services/currency.service.ts");
var CurrencySelectorComponent_1;




let CurrencySelectorComponent = CurrencySelectorComponent_1 = class CurrencySelectorComponent {
    constructor(currencyService) {
        this.currencyService = currencyService;
        this.isSelectCurrency = false;
        this.icon_currency = '/assets/myicons/ml/currency.png';
        this.propagateChange = () => { };
        this.validateFn = () => { };
        currencyService.options().subscribe(data => this.filteredItems = data);
    }
    ngOnInit() {
    }
    displaySelectCurrency() {
        this.isSelectCurrency = true;
    }
    get counterValue() {
        return this.selectedCurrency;
    }
    set counterValue(val) {
        this.selectedCurrency = val;
        this.propagateChange(val);
    }
    ngOnChanges(inputs) {
        this.propagateChange(this.counterValue);
    }
    writeValue(value) {
        if (value) {
            this.selectedCurrency = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    select(currency) {
        this.counterValue = currency;
        this.isSelectCurrency = false;
    }
    validate(c) {
        return this.validateFn(c);
    }
    filterItem(value) {
        if (!value)
            this.filteredItems = this.currencyService.options().subscribe(data => this.filteredItems = data); //when nothing has typed
        this.currencyService.options().subscribe(data => this.filteredItems = data.filter(item => item.text.toLowerCase().indexOf(value.toLowerCase()) > -1));
    }
};
CurrencySelectorComponent.ctorParameters = () => [
    { type: _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CurrencySelectorComponent.prototype, "currency", void 0);
CurrencySelectorComponent = CurrencySelectorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-currency-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/currency-selector/currency-selector.component.html")).default,
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CurrencySelectorComponent_1), multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CurrencySelectorComponent_1), multi: true }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency-selector.component.scss */ "./src/app/common-components/currency-selector/currency-selector.component.scss")).default]
    })
], CurrencySelectorComponent);



/***/ }),

/***/ "./src/app/shared/services/currency.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/currency.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const API_URL = 'https://thps6qlf34.execute-api.us-east-1.amazonaws.com/latest/';
const CURRENCY = {
    AED: { name: 'Emirati Dirham', symbol: '.د.ب', exp: 2, flag: '/assets/myicons/ml/ic_currency_aed.png' },
    AFN: { name: 'Afghan Afghani', symbol: '؋', exp: 2, flag: '/assets/myicons/ml/ic_currency_afn.png' },
    ALL: { name: 'Albanian lek', symbol: 'lek', exp: 2, flag: '/assets/myicons/ml/ic_currency_all.png' },
    AMD: { name: 'Armenian dram', symbol: 'AMD', exp: 2, flag: '/assets/myicons/ml/ic_currency_amd.png' },
    ANG: { name: 'Dutch Guilder', symbol: 'ƒ', exp: 2, flag: '/assets/myicons/ml/ic_currency_ang.png' },
    AOA: { name: 'Angolan Kwanza', symbol: 'Kz', exp: 2, flag: '/assets/myicons/ml/ic_currency_aoa.png' },
    ARS: { name: 'Argentine peso', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_ars.png' },
    AUD: { name: 'Australian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_aud.png' },
    AWG: { name: 'Arubin florin', symbol: 'ƒ', exp: 2, flag: '/assets/myicons/ml/ic_currency_awg.png' },
    AZN: { name: 'Azerbaijani manat', symbol: 'ман', exp: 2, flag: '/assets/myicons/ml/ic_currency_azn.png' },
    BAM: { name: 'Bosnian Convertible Marka', symbol: 'KM', exp: 2, flag: '/assets/myicons/ml/ic_currency_bam.png' },
    BBD: { name: 'Barbadian dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_bbd.png' },
    BDT: { name: 'Bangladeshi Taka', symbol: 'Tk', exp: 2, flag: '/assets/myicons/ml/ic_currency_bdt.png' },
    BGN: { name: 'Bulgarian lev', symbol: 'лв', exp: 2, flag: '/assets/myicons/ml/ic_currency_bgn.png' },
    BHD: { name: 'Bahraini Dinar', symbol: '.د.ب or BD', exp: 3, flag: '/assets/myicons/ml/ic_currency_bhd.png' },
    BIF: { name: 'Burundian Franc', symbol: 'FBu', exp: 0, flag: '/assets/myicons/ml/ic_currency_bif.png' },
    BMD: { name: 'Bermudian dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_bmd.png' },
    BND: { name: 'Bruneian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_bnd.png' },
    BOB: { name: 'Bolivian Boliviano', symbol: '$b', exp: 2, flag: '/assets/myicons/ml/ic_currency_bob.png' },
    BRL: { name: 'Brazilian real', symbol: 'R$', exp: 2, flag: '/assets/myicons/ml/ic_currency_brl.png' },
    BSD: { name: 'Bahamian dollar', symbol: 'B$', exp: 2, flag: '/assets/myicons/ml/ic_currency_bsd.png' },
    BTN: { name: 'Bhutanese Ngultrum', symbol: 'Nu.', exp: 2, flag: '/assets/myicons/ml/ic_currency_btn.png' },
    BWP: { name: 'Botswana Pula', symbol: 'P', exp: 2, flag: '/assets/myicons/ml/ic_currency_bwp.png' },
    BYR: { name: 'Belarusian ruble', symbol: 'р', exp: 2, flag: '/assets/myicons/ml/ic_currency_byr.png' },
    BZD: { name: 'Belize dollar', symbol: 'BZ$', exp: 2, flag: '/assets/myicons/ml/ic_currency_bzd.png' },
    CAD: { name: 'Canadian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_cad.png' },
    CHF: { name: 'Swiss Franc', symbol: 'CHF', exp: 2, flag: '/assets/myicons/ml/ic_currency_chf.png' },
    CLP: { name: 'Chilean Peso', symbol: '$', exp: 0, flag: '/assets/myicons/ml/ic_currency_clp.png' },
    CNY: { name: 'Yuan or chinese renminbi', symbol: '¥', exp: 2, flag: '/assets/myicons/ml/ic_currency_cny.png' },
    COP: { name: 'Colombian peso', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_cop.png' },
    CRC: { name: 'Costa Rican colón', symbol: '₡', exp: 2, flag: '/assets/myicons/ml/ic_currency_crc.png' },
    CUC: { name: 'Cuban convertible peso', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_cuc.png' },
    CUP: { name: 'Cuban peso', symbol: '₱', exp: 2, flag: '/assets/myicons/ml/ic_currency_cup.png' },
    CVE: { name: 'Cape Verdean Escudo', symbol: '$', exp: 0, flag: '/assets/myicons/ml/ic_currency_cve.png' },
    CZK: { name: 'Czech koruna', symbol: 'Kč', exp: 2, flag: '/assets/myicons/ml/ic_currency_czk.png' },
    DJF: { name: 'Djiboutian Franc', symbol: 'fdj', exp: 0, flag: '/assets/myicons/ml/ic_currency_djf.png' },
    DKK: { name: 'Danish krone', symbol: 'kr', exp: 2, flag: '/assets/myicons/ml/ic_currency_dkk.png' },
    DOP: { name: 'Dominican peso', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_dop.png' },
    DZD: { name: 'Algerian Dinar', symbol: 'جد', exp: 2, flag: '/assets/myicons/ml/ic_currency_dzd.png' },
    EGP: { name: 'Egyptian Pound', symbol: '£ ', exp: 2, flag: '/assets/myicons/ml/ic_currency_egp.png' },
    ERN: { name: 'Eritrean nakfa', symbol: 'ናቕፋ', exp: 2, flag: '/assets/myicons/ml/ic_currency_ern.png' },
    ETB: { name: 'Ethiopian Birr', symbol: 'Br', exp: 2, flag: '/assets/myicons/ml/ic_currency_etb.png' },
    EUR: { name: 'Euro', symbol: '€', exp: 2, flag: '/assets/myicons/ml/ic_currency_eur.png' },
    FJD: { name: 'Fijian dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_fjd.png' },
    FKP: { name: 'Falkland Island Pound', symbol: '£', exp: 2, flag: '/assets/myicons/ml/ic_currency_fkp.png' },
    GBP: { name: 'British Pound', symbol: '£', exp: 2, flag: '/assets/myicons/ml/ic_currency_gbp.png' },
    GEL: { name: 'Georgian lari', symbol: 'ლ', exp: 2, flag: '/assets/myicons/ml/ic_currency_gel.png' },
    GHS: { name: 'Ghanaian Cedi', symbol: 'GH¢', exp: 2, flag: '/assets/myicons/ml/ic_currency_ghs.png' },
    GIP: { name: 'Gibraltar pound', symbol: '£', exp: 2, flag: '/assets/myicons/ml/ic_currency_gip.png' },
    GMD: { name: 'Gambian dalasi', symbol: 'D', exp: 2, flag: '/assets/myicons/ml/ic_currency_gmd.png' },
    GNF: { name: 'Guinean Franc', symbol: 'GNF', exp: 0, flag: '/assets/myicons/ml/ic_currency_gnf.png' },
    GTQ: { name: 'Guatemalan Quetzal', symbol: 'Q', exp: 2, flag: '/assets/myicons/ml/ic_currency_gtq.png' },
    GYD: { name: 'Guyanese dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_gyd.png' },
    HKD: { name: 'Hong Kong dollar', symbol: 'HK$', exp: 2, flag: '/assets/myicons/ml/ic_currency_hkd.png' },
    HNL: { name: 'Honduran lempira', symbol: 'L', exp: 2, flag: '/assets/myicons/ml/ic_currency_hnl.png' },
    HRK: { name: 'Croatian kuna', symbol: 'kn', exp: 2, flag: '/assets/myicons/ml/ic_currency_hrk.png' },
    HTG: { name: 'Haitian gourde', symbol: 'G', exp: 2, flag: '/assets/myicons/ml/ic_currency_htg.png' },
    HUF: { name: 'Hungarian forint', symbol: 'Ft', exp: 2, flag: '/assets/myicons/ml/ic_currency_huf.png' },
    IDR: { name: 'Indonesian Rupiah', symbol: 'Rp', exp: 2, flag: '/assets/myicons/ml/ic_currency_idr.png' },
    ILS: { name: 'Israeli Shekel', symbol: '₪', exp: 2, flag: '/assets/myicons/ml/ic_currency_ils.png' },
    INR: { name: 'Indian Rupee', symbol: '₹', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    IQD: { name: 'Iraqi Dinar', symbol: 'ع.د', exp: 3, flag: '/assets/myicons/ml/ic_currency_iqd.png' },
    IRR: { name: 'Iranian Rial', symbol: '﷼', exp: 2, flag: '/assets/myicons/ml/ic_currency_irr.png' },
    ISK: { name: 'Icelandic Krona', symbol: 'kr', exp: 0, flag: '/assets/myicons/ml/ic_currency_isk.png' },
    JMD: { name: 'Jamaican dollar', symbol: 'J$', exp: 2, flag: '/assets/myicons/ml/ic_currency_jmd.png' },
    JOD: { name: 'Jordanian Dinar', symbol: 'JOD', exp: 3, flag: '/assets/myicons/ml/ic_currency_jod.png' },
    JPY: { name: 'Japanese yen', symbol: '¥', exp: 0, flag: '/assets/myicons/ml/ic_currency_jpy.png' },
    KES: { name: 'Kenyan Shilling', symbol: 'KSh', exp: 2, flag: '/assets/myicons/ml/ic_currency_kes.png' },
    KGS: { name: 'Kyrgyzstani som', symbol: 'лв', exp: 2, flag: '/assets/myicons/ml/ic_currency_kgs.png' },
    KHR: { name: 'Cambodian Riel', symbol: '៛', exp: 2, flag: '/assets/myicons/ml/ic_currency_khr.png' },
    KMF: { name: 'Comoro Franc', symbol: 'KMF', exp: 0, flag: '/assets/myicons/ml/ic_currency_kmf.png' },
    KPW: { name: 'North Korean won', symbol: '₩', exp: 2, flag: '/assets/myicons/ml/ic_currency_kpw.png' },
    KRW: { name: 'South Korean won', symbol: '₩', exp: 0, flag: '/assets/myicons/ml/ic_currency_krw.png' },
    KWD: { name: 'Kuwaiti Dinar', symbol: 'ك', exp: 3, flag: '/assets/myicons/ml/ic_currency_kwd.png' },
    KYD: { name: 'Caymanian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_kyd.png' },
    KZT: { name: 'Kazakhstani tenge', symbol: '₸', exp: 2, flag: '/assets/myicons/ml/ic_currency_kzt.png' },
    LAK: { name: 'Lao or Laotian Kip', symbol: '₭', exp: 2, flag: '/assets/myicons/ml/ic_currency_lak.png' },
    LBP: { name: 'Lebanese Pound', symbol: 'ل.ل', exp: 2, flag: '/assets/myicons/ml/ic_currency_lbp.png' },
    LKR: { name: 'Sri Lankan Rupee', symbol: 'Rs', exp: 2, flag: '/assets/myicons/ml/ic_currency_lkr.png' },
    LRD: { name: 'Liberian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_lrd.png' },
    LSL: { name: 'Lesotho loti', symbol: 'L or M', exp: 2, flag: '/assets/myicons/ml/ic_currency_lsl.png' },
    LTL: { name: 'Lithuanian litas', symbol: 'Lt', exp: 2, flag: '/assets/myicons/ml/ic_currency_ltl.png' },
    LYD: { name: 'Libyan Dinar', symbol: ' د.ل', exp: 3, flag: '/assets/myicons/ml/ic_currency_lyd.png' },
    MAD: { name: 'Moroccan Dirham', symbol: 'م.د.', exp: 2, flag: '/assets/myicons/ml/ic_currency_mad.png' },
    MDL: { name: 'Moldovan Leu', symbol: 'L', exp: 2, flag: '/assets/myicons/ml/ic_currency_mdl.png' },
    MGA: { name: 'Malagasy Ariary', symbol: 'Ar', exp: 2, flag: '/assets/myicons/ml/ic_currency_mga.png' },
    MKD: { name: 'Macedonian Denar', symbol: 'ден', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MMK: { name: 'Burmese Kyat', symbol: 'K', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MNT: { name: 'Mongolian Tughrik', symbol: '₮', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MOP: { name: 'Macau Pataca', symbol: 'MOP$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MRO: { name: 'Mauritanian Ouguiya', symbol: 'UM', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MUR: { name: 'Mauritian rupee', symbol: 'Rs', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MVR: { name: 'Maldivian Rufiyaa', symbol: 'rf', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MWK: { name: 'Malawian Kwacha', symbol: 'MK', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MXN: { name: 'Mexico Peso', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MYR: { name: 'Malaysian Ringgit', symbol: 'RM', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    MZN: { name: 'Mozambican Metical', symbol: 'MT', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NAD: { name: 'Namibian Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NGN: { name: 'Nigerian Naira', symbol: '₦', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NIO: { name: 'Nicaraguan córdoba', symbol: 'C$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NOK: { name: 'Norwegian krone', symbol: 'kr', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NPR: { name: 'Nepalese Rupee', symbol: 'Rs', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    NZD: { name: 'New Zealand Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    OMR: { name: 'Omani Rial', symbol: 'ع.ر.', exp: 3, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PAB: { name: 'Balboa panamérn', symbol: 'B/', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PEN: { name: 'Peruvian nuevo sol', symbol: 'S/', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PGK: { name: 'Papua New Guinean Kina', symbol: 'K', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PHP: { name: 'Philippine Peso', symbol: '₱', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PKR: { name: 'Pakistani Rupee', symbol: 'Rs', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PLN: { name: 'Polish złoty', symbol: 'zł', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    PYG: { name: 'Paraguayan guarani', symbol: '₲', exp: 0, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    QAR: { name: 'Qatari Riyal', symbol: 'ق.ر ', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    RON: { name: 'Romanian leu', symbol: 'lei', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    RSD: { name: 'Serbian Dinar', symbol: 'РСД', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    RUB: { name: 'Russian Rouble', symbol: '₽', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    RWF: { name: 'Rwandan franc', symbol: 'FRw, RF, R₣', exp: 0, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SAR: { name: 'Saudi Arabian Riyal', symbol: 'ر.س', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SBD: { name: 'Solomon Islander Dollar', symbol: 'SI$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SCR: { name: 'Seychellois Rupee', symbol: 'Rs', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SDG: { name: 'Sudanese Pound', symbol: 'SDG', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SEK: { name: 'Swedish krona', symbol: 'kr', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SGD: { name: 'Singapore Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SLL: { name: 'Sierra Leonean Leone', symbol: 'Le', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SOS: { name: 'Somali Shilling', symbol: 'S', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SRD: { name: 'Surinamese dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SYP: { name: 'Syrian Pound', symbol: '£', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    SZL: { name: 'Swazi Lilangeni', symbol: 'L or E', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    THB: { name: 'Thai Baht', symbol: '฿', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TJS: { name: 'Tajikistani somoni', symbol: 'TJS', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TMT: { name: 'Turkmenistan manat', symbol: 'T', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TND: { name: 'Tunisian Dinar', symbol: 'TND', exp: 3, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TOP: { name: 'Tongan Pa\'anga', symbol: 'T$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TRY: { name: 'Turkish Lira', symbol: '₺', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TTD: { name: 'Trinidadian dollar', symbol: 'TT$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TWD: { name: 'Taiwan New Dollar', symbol: 'NT$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    TZS: { name: 'Tanzanian Shilling', symbol: 'Sh', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    UAH: { name: 'Ukrainian Hryvnia', symbol: '₴', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    UGX: { name: 'Ugandan Shilling', symbol: 'USh', exp: 0, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    USD: { name: 'US Dollar', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_usd.png' },
    UYU: { name: 'Uruguayan peso', symbol: '$U', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    UZS: { name: 'Uzbekistani som', symbol: 'лв', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    VEF: { name: 'Venezuelan bolivar', symbol: 'Bs', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    VND: { name: 'Vietnamese Dong', symbol: '₫', exp: 0, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    VUV: { name: 'Vanuatu Vatu', symbol: 'VT', exp: 0, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    WST: { name: 'Samoan Tālā', symbol: '$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    YER: { name: 'Yemeni Rial', symbol: 'YER', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    ZAR: { name: 'South African Rand', symbol: 'R', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    ZMW: { name: 'Zambian Kwacha', symbol: 'ZMK', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    ZWD: { name: 'Zimbabwean Dollar', symbol: 'Z$', exp: 2, flag: '/assets/myicons/ml/ic_currency_inr.png' },
    XAU: { name: 'Gold, troy ounce', symbol: 'XAU', exp: 2 }
};
let CurrencyService = class CurrencyService {
    constructor(http) {
        this.http = http;
    }
    options() {
        return this.http.get(API_URL + 'currency')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currencyList) => {
            let currencyMap = [];
            currencyList && currencyList.forEach((currency) => {
                currencyMap.push({
                    key: currency.id,
                    flag: '/assets/myicons/ml/ic_currency_' + currency.id.toLowerCase() + '.png',
                    text: `${currency.id}, ${currency.name}`,
                    exp: currency.exp
                });
            });
            return currencyMap;
        }));
    }
    ;
    name(code) {
        return CURRENCY[code].name;
    }
    ;
    symbol(code) {
        return CURRENCY[code].symbol;
    }
    ;
    minamount(code) {
        return Number(`1e-${CURRENCY[code].exp}`);
    }
    ;
    /**
     * Convert value to currency's subunit (e.g. cents for USD).
     * Subunit is the minimal currency unit and it is always whole integer.
     *
     * @param {number} value
     * @param {string} code
     */
    toInt(value, code) {
        console.log(value, code, CURRENCY[code], `${value}e${CURRENCY[code].exp}`);
        return Math.round(Number(`${value}e${CURRENCY[code].exp}`));
    }
    ;
    /**
     * Convert value from subunit back to float representation with formatting.
     * For example 199001 USD becomes 1,990.01 USD
     *
     * @param {number} value
     * @param {string} code
     * @param {bool} format
     */
    toFloat(value, code, format = true) {
        const exp = 2; //CURRENCY[code].exp;
        const num = Number(`${value}e-${exp}`);
        return format
            ? num.toLocaleString(undefined, {
                minimumFractionDigits: exp,
                maximumFractionDigits: exp
            })
            : num.toString();
    }
    ;
    convert(value, rate, from, to) {
        return value / rate * Math.pow(10, CURRENCY[from].exp - CURRENCY[to].exp);
    }
    ;
};
CurrencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CurrencyService);



/***/ }),

/***/ "./src/app/shared/services/wallet.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/wallet.service.ts ***!
  \***************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const API_URL = 'https://thps6qlf34.execute-api.us-east-1.amazonaws.com/latest/';
let WalletService = class WalletService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(API_URL + 'wallet')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((wallets) => {
            let walletMap = [];
            wallets && wallets.forEach((user) => {
                walletMap.push({
                    id: user['id'],
                    name: user['name'],
                    balance: user['balance'],
                    currency: user['currency'],
                    icon: user['icon']
                });
            });
            return walletMap;
        }));
    }
    create(wallet) {
        return this.http.post(API_URL + 'wallet', wallet);
    }
    mutateBalance({ accountId, currency, amount }) {
        return this.http.post(API_URL + 'wallet/mutate/' + accountId, { currency: currency, amount: amount });
    }
};
WalletService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WalletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WalletService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/currency.service */ "./src/app/shared/services/currency.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]
        ],
        providers: [
            _services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]
        ],
        exports: []
    })
], SharedModule);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome {\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n}\n\n.row_content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 16px;\n  position: relative;\n  height: inherit;\n}\n\n.header_text {\n  font-size: 24px;\n  margin: 0 10%;\n  text-align: center;\n  font-family: monospace;\n}\n\n.subheader_text {\n  font-size: 18px;\n  margin: 0 10%;\n  text-align: center;\n  font-family: monospace;\n}\n\n.button_row {\n  position: absolute;\n  font-family: monospace;\n  display: flex;\n  justify-content: center;\n  margin-top: 30vh;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin-bottom: 10vh;\n}\n\n.amount_button_row {\n  font-family: monospace;\n  display: flex;\n  justify-content: center;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.button {\n  background-color: #53449D;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.amount-input-wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 400;\n  width: 100%;\n  background: white;\n  height: 100%;\n}\n\n.mat-button,\n.mat-icon-button,\n.mat-raised-button {\n  min-width: 64px;\n  min-height: 64px;\n  padding: 0;\n  margin: 2px;\n  font-size: 32px;\n  line-height: 32px;\n}\n\n.mat-button.spacer,\n.mat-icon-button.spacer,\n.mat-raised-button.spacer {\n  background-color: transparent;\n}\n\n.mat-list .mat-list-item .mat-list-item-content {\n  padding: 0 !important;\n}\n\n.keyboard {\n  position: absolute;\n  width: 100vw;\n  bottom: 0;\n}\n\n.row {\n  width: 100vw;\n}\n\n.key {\n  width: 31vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXGFuaWwuZ2FuZ2FkaGFyYWlhaFxcRG9jdW1lbnRzXFxhbmd1bGFyXFxNb25leVZpZXdlci9zcmNcXGFwcFxcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNJUjs7QURESTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSVI7O0FERkk7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0tSOztBREhJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTVI7O0FEREk7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0lSOztBRERJOzs7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0lSOztBRERJOzs7RUFHSSw2QkFBQTtBQ0lSOztBREZJO0VBQ0kscUJBQUE7QUNLUjs7QURGSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNLUjs7QURGSTtFQUNJLFlBQUE7QUNLUjs7QURGSTtFQUNJLFdBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuICAgIC5jZW50ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gICAgLnJvd19jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX3RleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjowIDEwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1cclxuICAgIC5zdWJoZWFkZXJfdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luOjAgMTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25fcm93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIH1cclxuICAgIC5hbW91bnRfYnV0dG9uX3JvdyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNDQ5RCA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmFtb3VudC1pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDQwMDs7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4gICAgLm1hdC1idXR0b24sXHJcbiAgICAubWF0LWljb24tYnV0dG9uLFxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDY0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcclxuICAgICAgICBwYWRkaW5nOiAwOztcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcblxyXG59XHJcbiAgICAubWF0LWJ1dHRvbi5zcGFjZXIsXHJcbiAgICAubWF0LWljb24tYnV0dG9uLnNwYWNlcixcclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbi5zcGFjZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiAgICAubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgICAua2V5Ym9hcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG5cclxufVxyXG4gICAgLnJvd3sgXHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG5cclxufVxyXG4gICAgLmtleSB7XHJcbiAgICAgICAgd2lkdGg6IDMxdnc7XHJcblxyXG59IiwiLndlbGNvbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93X2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uaGVhZGVyX3RleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLnN1YmhlYWRlcl90ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAgMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5idXR0b25fcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLmFtb3VudF9idXR0b25fcm93IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM0NDlEO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW1vdW50LWlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDQwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtYnV0dG9uLFxuLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNjRweDtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAycHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5tYXQtYnV0dG9uLnNwYWNlcixcbi5tYXQtaWNvbi1idXR0b24uc3BhY2VyLFxuLm1hdC1yYWlzZWQtYnV0dG9uLnNwYWNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmtleWJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJvdHRvbTogMDtcbn1cblxuLnJvdyB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmtleSB7XG4gIHdpZHRoOiAzMXZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/wallet.service */ "./src/app/shared/services/wallet.service.ts");





let WelcomeComponent = class WelcomeComponent {
    constructor(wallet, 
    // private navbarService: SidebarService,
    // private categoryService: CategoryService,
    // private transactionService: TransactionService,
    router) {
        this.wallet = wallet;
        this.router = router;
        this.step = 0;
        // key: "AED", value: "AED", flag: "/assets/myicons/ml/ic_currency_aed.png", text: "AED, Emirati Dirham", exp: 2
        this.currency = {
            key: "USD",
            value: "USD",
            exp: 2,
            flag: "/assets/myicons/ml/ic_currency_usd.png",
            text: "US Dollar",
            symbol: "$"
        };
        this.phoneKeyboard = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, 'back_space']];
        // this.accountService.loadAll().then(accounts => {
        //   console.log(accounts);
        //   if (accounts.length > 0) {
        //     this.router.navigate(['/transaction']);
        //   }
        // });
    }
    ngOnInit() {
        this.wallet.getAll().subscribe(data => console.log(data));
        this.addAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Cash'),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0'),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('/assets/myicons/ml/icon_59.png')
        });
    }
    next(step) {
        this.step += 1;
    }
    key(value) {
        console.log(value);
        console.log(value != 'back_space');
        if (value != '.' && value != 'back_space') {
            this.addAccountForm.value.balance = this.addAccountForm.value.balance * 10 + value;
        }
        else if (value == 'back_space') {
            this.addAccountForm.value.balance = (this.addAccountForm.value.balance / 10) | 0;
        }
    }
    onSubmit({ valid, value }) {
        console.log(value);
        var wallet = {
            id: '123',
            currency: value.currency.key,
            balance: value.balance,
            name: value.name,
            icon: ''
        };
        this.wallet.create(wallet).subscribe(data => {
            this.router.navigate(['/home/home/transactions']);
        });
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-components/common-components.module */ "./src/app/common-components/common-components.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let WelcomeModule = class WelcomeModule {
};
WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"]
        ],
        exports: [
            _welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
        ]
    })
], WelcomeModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anil.gangadharaiah\Documents\angular\MoneyViewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map