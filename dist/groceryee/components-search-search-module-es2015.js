(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-search-search-module"],{

/***/ "./src/app/components/search/search-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/search/search-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/components/search/search.component.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





const routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    }
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SearchComponent_div_3_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r1209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_3_p_7_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1209); const item_r1207 = ctx.$implicit; const ctx_r1208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1208.openProduct(item_r1207); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1207 = ctx.$implicit;
    const ctx_r1206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1206.api.mediaURL + item_r1207.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1207.name, " ");
} }
function SearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_3_p_7_Template, 3, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1205.products);
} }
const _c0 = function () { return { standalone: true }; };
class SearchComponent {
    constructor(util, api, router) {
        this.util = util;
        this.api = api;
        this.router = router;
        this.terms = '';
        this.products = [];
    }
    ngOnInit() {
    }
    search(event) {
        console.log(event);
        const param = {
            id: localStorage.getItem('city'),
            search: event
        };
        this.util.start();
        this.api.post('products/getSearchItems', param).subscribe((data) => {
            console.log('search data==>', data);
            this.util.stop();
            if (data && data.status === 200 && data.data) {
                this.products = data.data;
            }
        }, error => {
            console.log('error in searhc filess--->>', error);
            this.util.stop();
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    openProduct(item) {
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product-detail'], param);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 5, consts: [[1, "container", 2, "display", "flex", "flex-direction", "row"], ["type", "text", "aria-label", "Search", 1, "searchText", 3, "ngModel", "ngModelOptions", "placeholder", "keydown.enter", "ngModelChange"], ["fas", "", "icon", "search", 2, "padding", "10px", "background", "#f3f3f3", "cursor", "pointer", 3, "click"], ["class", "stack-top", 4, "ngIf"], [1, "stack-top"], [1, "container"], [1, "row"], [1, "col-lg-1"], [1, "col-lg-2"], [1, "col-lg-6"], [1, "searchItem"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["alt", "", "onError", "this.src='assets/imgs/user.png'", 1, "imgs", 3, "src"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function SearchComponent_Template_input_keydown_enter_1_listener($event) { return ctx.search($event.target.value); })("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_mdb_icon_click_2_listener() { return ctx.search(ctx.terms); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_3_Template, 10, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.terms)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("placeholder", ctx.util.getString("Search for products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.products == null ? null : ctx.products.length) && ctx.terms !== "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FasDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n.searchText[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #f3f3f3;\n  padding: 6px;\n}\n.stack-top[_ngcontent-%COMP%] {\n  z-index: 9999;\n  position: absolute;\n  width: 100%;\n}\n.stack-top[_ngcontent-%COMP%]   .searchItem[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n.stack-top[_ngcontent-%COMP%]   .searchItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0px;\n  border-bottom: 1px solid lightgray;\n  color: gray;\n  cursor: pointer;\n}\n.stack-top[_ngcontent-%COMP%]   .searchItem[_ngcontent-%COMP%]   .imgs[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREVGO0FDREU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QURHSjtBQ0ZJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FESU47QUNGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURJTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uc2VhcmNoVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5zdGFjay10b3Age1xuICB6LWluZGV4OiA5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YWNrLXRvcCAuc2VhcmNoSXRlbSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4uc3RhY2stdG9wIC5zZWFyY2hJdGVtIHAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFjay10b3AgLnNlYXJjaEl0ZW0gLmltZ3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5zZWFyY2hUZXh0e1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgcGFkZGluZzogNnB4O1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3RhY2stdG9we1xuICB6LWluZGV4OiA5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICAuc2VhcmNoSXRlbXtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmltZ3N7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/components/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-search-search-module-es2015.js.map