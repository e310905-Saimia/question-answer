(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 10px;\r\n}\r\n\r\n.mat-slider-horizontal {\r\n  width: 300px;\r\n}\r\n\r\n.mat-slider-vertical {\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LXNsaWRlci12ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  X <mat-slider class=\"example-margin\"></mat-slider> X\n\n  <mat-slider\n    class=\"example-margin\"\n    [disabled]=\"disabled\"\n    [invert]=\"invert\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [step]=\"step\"\n    [thumbLabel]=\"thumbLabel\"\n    [displayWith]=\"formatLabel\"\n    [tickInterval]=\"tickInterval\"\n    [(ngModel)]=\"value\"\n    [vertical]=\"vertical\"\n  (click)=\"GetValue()\">\n\n\n  </mat-slider>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Questions-app';
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 10;
        this.min = 0;
        this.showTicks = true;
        this.step = 2;
        this.thumbLabel = true;
        this.value = 3;
        this.vertical = false;
        this.tickInterval = 1;
    }
    Object.defineProperty(AppComponent.prototype, "tickIntervalX", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
        },
        set: function (value) {
            this.tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _question_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question-details/question-details.component */ "./src/app/question/question-details/question-details.component.ts");
/* harmony import */ var _question_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question-list/question-list.component */ "./src/app/question/question-list/question-list.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _question_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_6__["QuestionDetailsComponent"],
                _question_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__["QuestionListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/question/question-details/question-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/question/question-details/question-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLWRldGFpbHMvcXVlc3Rpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/question/question-details/question-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/question/question-details/question-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>{{question.title | uppercase}} Arvot</h1>\n<div><span>id: </span>{{question.id}}</div>\n<div><span>title: </span>{{question.title}}</div>\n<div><span>MinValue: </span>{{question.minValue}}</div>\n<div><span>MAxValue: </span>{{question.maxValue}}</div>\n<div><span>DefaultValue: </span>{{question.defaultValue}}</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/question/question-details/question-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/question/question-details/question-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuestionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailsComponent", function() { return QuestionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// @ts-ignore
var QuestionDetailsComponent = /** @class */ (function () {
    function QuestionDetailsComponent() {
        this.question = {
            id: 1,
            title: 'Kysymys 1',
            minValue: 0,
            maxValue: 10,
            defaultValue: 5,
            showThumpLabel: true,
            disalbed: false,
        };
    }
    QuestionDetailsComponent.prototype.ngOnInit = function () {
    };
    QuestionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question-details.component.html */ "./src/app/question/question-details/question-details.component.html"),
            styles: [__webpack_require__(/*! ./question-details.component.css */ "./src/app/question/question-details/question-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionDetailsComponent);
    return QuestionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/question/question-list/question-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/question/question-list/question-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.questions {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.questions li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.questions li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n.questions li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.questions .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.questions .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnF1ZXN0aW9ucyB7XHJcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE1ZW07XHJcbn1cclxuLnF1ZXN0aW9ucyBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucXVlc3Rpb25zIGxpLnNlbGVjdGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5xdWVzdGlvbnMgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG4ucXVlc3Rpb25zIC50ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtM3B4O1xyXG59XHJcbi5xdWVzdGlvbnMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/question/question-list/question-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/question/question-list/question-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Questions</h2>\n<ul class=\"questions\">\n  <li *ngFor=\"let question of questions\" (click)=\"onSelect(question)\">\n    <span class=\"badge\">{{question.id}}</span> {{question.title}}\n  </li>\n</ul>\n\n<div *ngIf=\"selectedQuestion\">\n\n  <h2>{{selectedQuestion.title | uppercase}} Details</h2>\n  <div><span>id: </span>{{selectedQuestion.id}}</div>\n  <div>\n    <label>Title:\n      <input value=\"selectedQuestion.title\" placeholder=\"Halle luja\"/>\n    </label>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/question/question-list/question-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question/question-list/question-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_mock_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mock/mock-questions */ "./src/mock/mock-questions.ts");



var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent() {
        this.questions = _mock_mock_questions__WEBPACK_IMPORTED_MODULE_2__["QUESTIONS"];
        // this.questions = [];
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        // this.questions.push(new Question ( 110, 'Kysymys 101',  0,  10,  5, true,  false );
    };
    QuestionListComponent.prototype.onSelect = function (question) {
        this.selectedQuestion = question;
        console.log(this.selectedQuestion);
    };
    QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/question/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/question/question-list/question-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/mock/mock-questions.ts":
/*!************************************!*\
  !*** ./src/mock/mock-questions.ts ***!
  \************************************/
/*! exports provided: QUESTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTIONS", function() { return QUESTIONS; });
var QUESTIONS = [
    { id: 11, title: 'Kysymys 101', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 12, title: 'Kysymys 102', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 13, title: 'Kysymys 103', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 14, title: 'Kysymys 104', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 15, title: 'Kysymys 105', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 16, title: 'Kysymys 106', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 17, title: 'Kysymys 107', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 18, title: 'Kysymys 108', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 19, title: 'Kysymys 109', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false },
    { id: 20, title: 'Kysymys 110', minValue: 0, maxValue: 10, defaultValue: 5, showThumpLabel: true, disalbed: false }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\projektit\question-answer\web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map