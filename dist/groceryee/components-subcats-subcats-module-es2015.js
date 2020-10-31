(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-subcats-subcats-module"],{

/***/ "./src/app/components/subcats/subcats-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/subcats/subcats-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SubcatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatsRoutingModule", function() { return SubcatsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subcats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcats.component */ "./src/app/components/subcats/subcats.component.ts");
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
        component: _subcats_component__WEBPACK_IMPORTED_MODULE_2__["SubcatsComponent"]
    }
];
class SubcatsRoutingModule {
}
SubcatsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubcatsRoutingModule });
SubcatsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubcatsRoutingModule_Factory(t) { return new (t || SubcatsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubcatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubcatsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/subcats/subcats.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/subcats/subcats.component.ts ***!
  \*********************************************************/
/*! exports provided: SubcatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatsComponent", function() { return SubcatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











const _c0 = ["content"];
function SubcatsComponent_mdb_breadcrumb_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-breadcrumb-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r845.subName, " ");
} }
function SubcatsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "border-radius": "5px", height: "120px", width: "120px" }; };
function SubcatsComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { "width": "120px", "height": "10px" }; };
function SubcatsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_7_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubcatsComponent_div_7_div_7_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r846 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r846.dummyCates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r846.dummyProducts);
} }
function SubcatsComponent_div_8_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const item_r858 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r859 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r859.api.mediaURL + item_r858.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SubcatsComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r862 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r862); const item_r858 = ctx.$implicit; const ctx_r861 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r861.onMenuClick(item_r858.id, item_r858.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_3_img_3_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r858 = ctx.$implicit;
    const ctx_r852 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mnu-selected", item_r858.id == ctx_r852.tabSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "mnu_", item_r858.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r852.util.deviceType !== "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r858.name, "");
} }
function SubcatsComponent_div_8_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.discount, "% ");
} }
function SubcatsComponent_div_8_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r866 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r866.util.getString("Out of Stoke"), " ");
} }
function SubcatsComponent_div_8_div_23_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 51);
} }
function SubcatsComponent_div_8_div_23_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
} }
function SubcatsComponent_div_8_div_23_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
} }
function SubcatsComponent_div_8_div_23_div_10_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].price ? product_r863.variations[0].items[product_r863.variant].price : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount ? product_r863.variations[0].items[product_r863.variant].discount : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].price ? product_r863.variations[0].items[product_r863.variant].price : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_10_span_7_span_2_Template, 2, 1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_10_span_7_span_3_Template, 2, 1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_div_10_span_7_span_4_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r877 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r877.util.currecny, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount === 0 && !product_r863.variations[0].items[product_r863.variant].discount);
} }
function SubcatsComponent_div_8_div_23_div_10_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].price ? product_r863.variations[0].items[product_r863.variant].price : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount ? product_r863.variations[0].items[product_r863.variant].discount : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].price ? product_r863.variations[0].items[product_r863.variant].price : 0, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_23_div_10_span_8_span_1_Template, 2, 1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_10_span_8_span_2_Template, 2, 1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_10_span_8_span_3_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r878 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].discount === 0 && !product_r863.variations[0].items[product_r863.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r878.util.currecny, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r899 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r899.util.currecny, " ", option_r897.price, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r897.price, " ", ctx_r900.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r904 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r904.util.currecny, " ", option_r897.price, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r905.util.currecny, " ", option_r897.discount, " ");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r897.price, " ", ctx_r906.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r897.discount, " ", ctx_r907.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_1_Template, 2, 2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_2_Template, 2, 2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_3_Template, 2, 2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_span_4_Template, 2, 2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r901 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r901.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r901.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r901.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r901.util.cside === "right");
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r914); const ix_r898 = ctx.index; const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; return product_r863.variant = ix_r898; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_2_Template, 2, 2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_3_Template, 2, 2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_span_4_Template, 5, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r897 = ctx.$implicit;
    const ctx_r896 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r897.title, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r897.discount === 0 && ctx_r896.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r897.discount === 0 && ctx_r896.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r897.discount !== 0);
} }
function SubcatsComponent_div_8_div_23_div_10_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubcatsComponent_div_8_div_23_div_10_ng_template_10_div_0_Template, 5, 4, "div", 65);
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r863.variations[0].items);
} }
function SubcatsComponent_div_8_div_23_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r917 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r917); const _r876 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r876.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubcatsComponent_div_8_div_23_div_10_span_7_Template, 5, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SubcatsComponent_div_8_div_23_div_10_span_8_Template, 5, 4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SubcatsComponent_div_8_div_23_div_10_ng_template_10_Template, 1, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r879 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r870 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r879);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.variations && product_r863.variations[0] && product_r863.variations[0].items[product_r863.variant] && product_r863.variations[0].items[product_r863.variant].title ? product_r863.variations[0].items[product_r863.variant].title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r870.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r870.util.cside === "right");
} }
function SubcatsComponent_div_8_div_23_p_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.gram, " ", ctx_r919.util.getString("grams"), " ");
} }
function SubcatsComponent_div_8_div_23_p_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r920 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.kg, " ", ctx_r920.util.getString("kg"), " ");
} }
function SubcatsComponent_div_8_div_23_p_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r921 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.liter, " ", ctx_r921.util.getString("ltr"), " ");
} }
function SubcatsComponent_div_8_div_23_p_11_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r922 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.ml, " ", ctx_r922.util.getString("ml"), " ");
} }
function SubcatsComponent_div_8_div_23_p_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r923 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.pcs, " ", ctx_r923.util.getString("pcs"), " ");
} }
function SubcatsComponent_div_8_div_23_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_23_p_11_span_1_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_p_11_span_2_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_p_11_span_3_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_p_11_span_4_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubcatsComponent_div_8_div_23_p_11_span_5_Template, 2, 2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.have_gram === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.have_kg === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.have_liter === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.have_ml === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.have_pcs === "1");
} }
function SubcatsComponent_div_8_div_23_div_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r930 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r930.util.currecny, " ", product_r863.original_price, " ");
} }
function SubcatsComponent_div_8_div_23_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.original_price, " ", ctx_r931.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_12_p_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r935 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r935.util.currecny, " ", product_r863.original_price, " ");
} }
function SubcatsComponent_div_8_div_23_div_12_p_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r936 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r936.util.currecny, " ", product_r863.sell_price, " ");
} }
function SubcatsComponent_div_8_div_23_div_12_p_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.original_price, " ", ctx_r937.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_12_p_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r863.sell_price, " ", ctx_r938.util.currecny, "");
} }
function SubcatsComponent_div_8_div_23_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_23_div_12_p_3_span_1_Template, 2, 2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_12_p_3_span_2_Template, 2, 2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_12_p_3_span_3_Template, 2, 2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_div_12_p_3_span_4_Template, 2, 2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r932.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r932.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r932.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r932.util.cside === "right");
} }
function SubcatsComponent_div_8_div_23_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_23_div_12_p_1_Template, 2, 2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_12_p_2_Template, 2, 2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_12_p_3_Template, 5, 4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.discount === "0" && ctx_r872.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.discount === "0" && ctx_r872.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.discount !== "0");
} }
function SubcatsComponent_div_8_div_23_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r946 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r946); const ctx_r945 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r863 = ctx_r945.$implicit; const i_r864 = ctx_r945.index; const ctx_r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r944.addToCart(product_r863, i_r864); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r873 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r873.util.getString("Add"), " ");
} }
function SubcatsComponent_div_8_div_23_div_14_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r863.quantiy);
} }
function SubcatsComponent_div_8_div_23_div_14_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
} }
function SubcatsComponent_div_8_div_23_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r952 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r952); const ctx_r951 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r863 = ctx_r951.$implicit; const i_r864 = ctx_r951.index; const ctx_r950 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r950.remove(product_r863, i_r864); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_14_p_3_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_div_14_p_4_Template, 1, 0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_div_14_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r952); const ctx_r954 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r863 = ctx_r954.$implicit; const i_r864 = ctx_r954.index; const ctx_r953 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r953.add(product_r863, i_r864); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.quantiy !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.quantiy === 0);
} }
const _c3 = function (a0) { return { "background-image": a0 }; };
function SubcatsComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r957 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r957); const product_r863 = ctx.$implicit; const ctx_r956 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r956.singleProduct(product_r863); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubcatsComponent_div_8_div_23_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_23_div_3_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubcatsComponent_div_8_div_23_img_4_Template, 1, 0, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubcatsComponent_div_8_div_23_img_5_Template, 1, 0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubcatsComponent_div_8_div_23_img_6_Template, 1, 0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_23_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r957); const product_r863 = ctx.$implicit; const ctx_r958 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r958.singleProduct(product_r863); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SubcatsComponent_div_8_div_23_div_10_Template, 12, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubcatsComponent_div_8_div_23_p_11_Template, 6, 5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SubcatsComponent_div_8_div_23_div_12_Template, 4, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SubcatsComponent_div_8_div_23_div_13_Template, 3, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SubcatsComponent_div_8_div_23_div_14_Template, 6, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r863 = ctx.$implicit;
    const ctx_r854 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, "url(" + ctx_r854.api.mediaURL + product_r863.cover + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.discount !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.in_stoke === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.kind === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.kind === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.in_offer === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r863.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, product_r863.name, 0, 20) + ".." : product_r863.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.size === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r863.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r854.cart.itemId.includes(product_r863.id) && product_r863.quantiy <= 0 && product_r863.in_stoke === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r854.cart.itemId.includes(product_r863.id));
} }
function SubcatsComponent_div_8_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r960 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubcatsComponent_div_8_div_24_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r960); const ctx_r959 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r959.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r855 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r855.util.getString("Show more"), " ");
} }
function SubcatsComponent_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubcatsComponent_div_8_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function SubcatsComponent_div_8_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubcatsComponent_div_8_div_26_div_1_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r857 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r857.dummyProducts);
} }
function SubcatsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r964 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubcatsComponent_div_8_div_3_Template, 5, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubcatsComponent_div_8_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r964); const ctx_r963 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r963.filter = $event; })("change", function SubcatsComponent_div_8_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r964); const ctx_r965 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r965.onChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SubcatsComponent_div_8_div_23_Template, 15, 18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SubcatsComponent_div_8_div_24_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SubcatsComponent_div_8_div_25_Template, 4, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SubcatsComponent_div_8_div_26_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r847 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r847.subCates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r847.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("Popularity"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("Price - Low to High"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("Price - High to Low"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("A - Z"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("Z - A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r847.util.getString("% Off - High to Low"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r847.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r847.maxLimit < ctx_r847.products.length && ctx_r847.loaded === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r847.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r847.dummyProducts == null ? null : ctx_r847.dummyProducts.length);
} }
class SubcatsComponent {
    constructor(route, navCtrl, util, api, cart, router) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cart = cart;
        this.router = router;
        this.dummyCates = [];
        this.cates = [];
        this.dummyProducts = [];
        this.products = [];
        this.id = '';
        this.cname = '';
        this.subId = '';
        this.subName = '';
        this.subCates = [];
        this.dummys = Array(20);
        this.filter = '1';
        this.route.queryParams.subscribe((data) => {
            console.log('prama', data);
            if (data && data.cid && data.cname) {
                this.dummyCates = Array(10);
                this.dummyProducts = Array(16);
                this.cname = data.cname;
                this.id = data.cid;
                this.limit = 1;
                this.loaded = false;
                if (data.subid && data.sname) {
                    this.subId = data.subid;
                    this.subName = data.sname;
                    this.tabSelected = this.subId;
                }
                this.getCategories();
            }
            else {
                this.util.toast('error', this.util.getString('Error'), this.util.getString('wrong input'));
                this.navCtrl.back();
            }
        });
    }
    getCategories() {
        const param = {
            id: this.id
        };
        this.api.post('subcate/getByCId', param).subscribe((data) => {
            if (data && data.status === 200 && data.data && data.data.length) {
                console.log('subcates', data.data);
                this.dummyCates = [];
                this.subCates = data.data.filter(x => x.status === '1');
                if (!this.tabSelected || this.tabSelected === '') {
                    this.tabSelected = this.subCates[0].id;
                }
                this.getSubProducts();
            }
            else {
                this.navCtrl.back();
                this.dummyCates = [];
                this.dummyProducts = [];
            }
            this.getSubProducts();
        }, error => {
            console.log(error);
            this.dummyCates = [];
            this.dummyProducts = [];
            this.util.toast('error', this.util.getString('Error'), this.util.getString('wrong input'));
        });
    }
    getSubProducts() {
        const city = {
            id: this.id,
            cid: localStorage.getItem('city'),
            sid: this.tabSelected,
            limit: this.limit * 12
        };
        console.log('parma', city);
        // this.loaded = false;
        this.api.post('products/getByCSID', city).subscribe((cates) => {
            console.log(cates);
            this.dummyProducts = [];
            if (cates && cates.status === 200 && cates.data && cates.data.length) {
                this.maxLimit = (this.limit * 12) - 1;
                console.log('Max Limit0000', this.maxLimit);
                console.log('products', cates.data);
                const products = cates.data;
                this.products = products.filter(x => x.status === '1');
                // this.dummyProducts = this.products;
                // const cart = this.cart.cart;
                console.log('cart===============>>>>>>', this.cart.cart);
                this.products.forEach(info => {
                    if (info.variations && info.size === '1' && info.variations !== '') {
                        if (((x) => { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(info.status)) {
                            info.variations = JSON.parse(info.variations);
                            info['variant'] = 0;
                        }
                        else {
                            info.variations = [];
                            info['variant'] = 1;
                        }
                    }
                    else {
                        info.variations = [];
                        info['variant'] = 1;
                    }
                    if (this.cart.itemId.includes(info.id)) {
                        const index = this.cart.cart.filter(x => x.id === info.id);
                        info['quantiy'] = index[0].quantiy;
                    }
                    else {
                        info['quantiy'] = 0;
                    }
                });
                this.onChange(this.filter);
                this.dummys = [];
            }
            else {
                this.dummys = [];
            }
            if (this.loaded) {
                this.loaded = false;
            }
        }, error => {
            console.log(error);
            this.dummys = [];
            this.dummyProducts = [];
            this.util.toast('error', this.util.getString('Error'), this.util.getString('wrong input'));
        });
    }
    ngOnInit() {
    }
    onMenuClick(cid, name) {
        console.log(cid);
        this.tabSelected = cid;
        this.products = [];
        this.limit = 1;
        this.subName = name;
        this.dummyProducts = Array(20);
        this.getSubProducts();
        this.loaded = false;
    }
    singleProduct(item) {
        console.log('-->', item);
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product-detail'], param);
    }
    addToCart(item, index) {
        console.log(item);
        this.products[index].quantiy = 1;
        this.cart.addItem(item);
    }
    add(product, index) {
        console.log(product);
        if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    }
    remove(product, index) {
        console.log(product, index);
        if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    }
    loadData() {
        this.limit = this.limit + 1;
        this.loaded = true;
        this.getSubProducts();
    }
    onChange(value) {
        console.log(value, this.filter);
        switch (this.filter) {
            case '1':
                console.log('its rating');
                // this.products = this.products.sort((a, b) => parseInt(b.total_rating) - parseInt(a.total_rating));
                this.products = this.products.sort((a, b) => parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1
                    : (parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0));
                break;
            case '2':
                console.log('its low to high');
                this.products = this.products.sort((a, b) => parseFloat(a.original_price) < parseFloat(b.original_price) ? -1
                    : (parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0));
                break;
            case '3':
                console.log('its highht to low');
                this.products = this.products.sort((a, b) => parseFloat(b.original_price) < parseFloat(a.original_price) ? -1
                    : (parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0));
                break;
            case '4':
                console.log('its a - z');
                this.products = this.products.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '5':
                console.log('its z - a');
                this.products = this.products.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '6':
                console.log('its % off');
                this.products = this.products.sort((a, b) => parseFloat(b.discount) < parseFloat(a.discount) ? -1
                    : (parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0));
                break;
            default:
                break;
        }
    }
}
SubcatsComponent.ɵfac = function SubcatsComponent_Factory(t) { return new (t || SubcatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SubcatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubcatsComponent, selectors: [["app-subcats"]], viewQuery: function SubcatsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 9, vars: 4, consts: [[1, "container"], [1, "blue-text"], [1, "active"], ["class", "active", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-3", 2, "border-right", "1px solid lightgray"], [4, "ngFor", "ngForOf"], [1, "col-9"], [3, "theme"], [1, "row", 2, "overflow", "hidden"], ["class", "col-4 col-md-2", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2"], [1, "col-3"], ["scrollY", "true", 1, "menu-content"], ["class", "row", 3, "mnu-selected", "id", 4, "ngFor", "ngForOf"], ["content", ""], [2, "padding-bottom", "100px"], [1, "flexer"], [1, "selecltItem", 3, "ngModel", "ngModelChange", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["class", "col-6 col-md-3 boxs", 4, "ngFor", "ngForOf"], ["class", "centerItem", 3, "click", 4, "ngIf"], ["class", "centerItem", 4, "ngIf"], ["class", "row", "style", "overflow: hidden;", 4, "ngIf"], [1, "row", 3, "id"], [1, "side_col", 3, "click"], [1, "menutext"], ["alt", "", "class", "icon-menu", 3, "src", 4, "ngIf"], ["alt", "", 1, "icon-menu", 3, "src"], [1, "col-6", "col-md-3", "boxs"], [1, "productimage", 3, "ngStyle", "click"], ["class", "percent", 4, "ngIf"], ["class", "notInStoke", 4, "ngIf"], ["src", "assets/imgs/veg.png", "class", "kind", "alt", "Veg", 4, "ngIf"], ["src", "assets/imgs/non.png", "class", "kind", "alt", "Non Veg", 4, "ngIf"], ["src", "assets/imgs/offer.png", "class", "offer", "alt", "Offer", 4, "ngIf"], [1, "producttext", 3, "click"], ["class", "variant", 4, "ngIf"], ["class", "itemsKind", 4, "ngIf"], [4, "ngIf"], ["class", "btnBtm", 4, "ngIf"], ["class", "cartBtn", 4, "ngIf"], [1, "percent"], [1, "notInStoke"], [1, "text"], ["src", "assets/imgs/veg.png", "alt", "Veg", 1, "kind"], ["src", "assets/imgs/non.png", "alt", "Non Veg", 1, "kind"], ["src", "assets/imgs/offer.png", "alt", "Offer", 1, "offer"], [1, "variant"], ["placement", "bottom", "triggers", "manual", 1, "selecter", 3, "ngbPopover", "click"], ["p1", "ngbPopover"], ["class", "price_lbl", 4, "ngIf"], ["fas", "", "icon", "angle-down"], ["popContent", ""], [1, "price_lbl"], ["class", "original", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "original"], [1, "sell"], ["class", "normalItem", 3, "click", 4, "ngFor", "ngForOf"], [1, "normalItem", 3, "click"], [1, "itemsKind"], [1, "btnBtm"], [1, "ion-activatable", "ripple-parent", 3, "click"], [1, "cartBtn"], [1, "abs_add"], ["src", "assets/imgs/remove.png", 3, "click"], ["src", "assets/imgs/add.png", 3, "click"], [1, "centerItem", 3, "click"], [1, "loadMore"], [1, "centerItem"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"]], template: function SubcatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-breadcrumb-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-breadcrumb-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubcatsComponent_mdb_breadcrumb_item_6_Template, 2, 1, "mdb-breadcrumb-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubcatsComponent_div_7_Template, 8, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SubcatsComponent_div_8_Template, 27, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dummyCates == null ? null : ctx.dummyCates.length) && (ctx.dummyProducts == null ? null : ctx.dummyProducts.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subCates == null ? null : ctx.subCates.length);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBreadcrumbComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBreadcrumbItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopover"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["@charset \"UTF-8\";\n\n.mnu-selected[_ngcontent-%COMP%] {\n  border-left: 3px solid #157ed2 !important;\n  color: #157ed2 !important;\n}\nion-label[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.boxs[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n}\n.flexer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.flexer[_ngcontent-%COMP%]   .selecltItem[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 5px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.centerItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.centerItem[_ngcontent-%COMP%]   .loadMore[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #157ed2;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.product[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 2px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.coverimage[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.menutext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.productimage[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 100%;\n  margin: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-width: 100%;\n  position: relative;\n}\n.producttext[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin: 0px;\n  margin-top: 5px;\n}\n.itemsKind[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  margin: 0px;\n}\n.variant[_ngcontent-%COMP%]   .selecter[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.normalItem[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 0px;\n  text-align: start;\n  cursor: pointer;\n}\n.normalItem[_ngcontent-%COMP%]:hover {\n  color: #157ed2;\n}\n.kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.offer[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.percent[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 8px;\n  color: white;\n}\n.notInStoke[_ngcontent-%COMP%] {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 2px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  margin: 0px;\n}\n.price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.btnBtm[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n.btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 5px;\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 14px;\n}\n.cartBtn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #45C261;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  margin: 0px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #FF8E80;\n  width: 25px;\n  cursor: pointer;\n}\n.textconten[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-top: 5%;\n}\n.toolbartop[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n.menu-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.menu-content[_ngcontent-%COMP%]   .side_col[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n}\n.text_head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n}\n.brand[_ngcontent-%COMP%] {\n  background-color: #ededed;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #157ed2;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #157ed2;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #157ed2;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #157ed2;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJjYXRzL3N1YmNhdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3ViY2F0cy9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdWJjYXRzXFxzdWJjYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBREVGO0FDQ0E7RUFDRSx5QkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FERUY7QUNBRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FERUo7QUNHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURBRjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBREFKO0FDSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURERjtBQ0lBO0VBQ0UsaUJBQUE7QURERjtBQ0lBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURERjtBQ0dFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURESjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERkY7QUNLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FERkY7QUNLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURGRjtBQ01FO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ09BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FESkY7QUNPQTtFQUNFLGNBQUE7QURKRjtBQ09BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FESkY7QUNPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBREpGO0FDT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBREpGO0FDT0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREpGO0FDTUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURKSjtBQ1FBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRExGO0FDT0U7RUFDRSw2QkFBQTtBRExKO0FDUUU7RUFDRSxpQkFBQTtBRE5KO0FDU0U7RUFDRSxpQkFBQTtBRFBKO0FDV0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRFJGO0FDVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEUko7QUNZQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QURURjtBQ1dFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNXSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRFROO0FDWUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURWTjtBQ2VBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FEWkY7QUNlQTtFQUNFLGVBQUE7QURaRjtBQ2dCQTtFQUNFLFlBQUE7QURiRjtBQ2lCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRGZKO0FDbUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURoQkY7QUNtQkE7RUFDRSx5QkFBQTtBRGhCRjtBQ3FCQSx1QkFBQTtBQUNBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFRGxCRjtFQ29CRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VEbEJKOztFQ3NCQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFRG5CRjs7RUNzQkE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VEbkJGOztFQ3NCQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFRG5CRjs7RUNzQkE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7RURuQkY7O0VDc0JBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0VEbkJGOztFQ3NCQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VEbkJGOztFQ3NCQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VEbkJGO0VDcUJFO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VEbkJKOztFQ3VCQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFRHBCRjtFQ3NCRTtJQUNFLDZCQUFBO0VEcEJKO0VDdUJFO0lBQ0UsaUJBQUE7RURyQko7RUN3QkU7SUFDRSxpQkFBQTtFRHRCSjs7RUMwQkE7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0VEdkJGO0VDeUJFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFRHZCSjs7RUMyQkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFRHhCRjtFQzBCRTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFRHhCSjtFQzBCSTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VEeEJOO0VDMkJJO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VEekJOO0FBQ0Y7QUM4QkEsMkJBQUE7QUFDQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUQ1QkY7RUM4QkU7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFRDVCSjs7RUNnQ0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQ3QkY7O0VDZ0NBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFRDdCRjs7RUNnQ0E7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUQ3QkY7O0VDZ0NBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VEN0JGOztFQ2dDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtFRDdCRjs7RUNnQ0E7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFRDdCRjs7RUNnQ0E7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFRDdCRjtFQytCRTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFRDdCSjs7RUNpQ0E7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUQ5QkY7RUNnQ0U7SUFDRSw2QkFBQTtFRDlCSjtFQ2lDRTtJQUNFLGlCQUFBO0VEL0JKO0VDa0NFO0lBQ0UsaUJBQUE7RURoQ0o7O0VDb0NBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtFRGpDRjtFQ21DRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RURqQ0o7O0VDcUNBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RURsQ0Y7RUNvQ0U7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RURsQ0o7RUNvQ0k7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFRGxDTjtFQ3NDSTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFRHBDTjtBQUNGO0FDeUNBLDBCQUFBO0FBQ0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxjQUFBO0VEdkNGO0VDeUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUR2Q0o7O0VDMkNBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VEeENGOztFQzJDQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUR4Q0Y7O0VDMkNBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VEeENGOztFQzJDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtFRHhDRjs7RUMyQ0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7RUR4Q0Y7O0VDMkNBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUR4Q0Y7O0VDMkNBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUR4Q0Y7RUMwQ0U7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUR4Q0o7O0VDNENBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VEekNGO0VDMkNFO0lBQ0UsNkJBQUE7RUR6Q0o7RUM0Q0U7SUFDRSxpQkFBQTtFRDFDSjtFQzZDRTtJQUNFLGlCQUFBO0VEM0NKOztFQytDQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLGVBQUE7RUQ1Q0Y7RUM4Q0U7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VENUNKOztFQ2dEQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VEN0NGO0VDK0NFO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VEN0NKO0VDK0NJO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUQ3Q047RUNpREk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUQvQ047QUFDRjtBQ29EQSxrQkFBQTtBQUNBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFRGxERjtFQ29ERTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VEbERKOztFQ3NEQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFRG5ERjs7RUNzREE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VEbkRGOztFQ3NEQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFRG5ERjs7RUNzREE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7RURuREY7O0VDc0RBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0VEbkRGOztFQ3NEQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VEbkRGOztFQ3NEQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VEbkRGO0VDcURFO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VEbkRKOztFQ3VEQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFRHBERjtFQ3NERTtJQUNFLDZCQUFBO0VEcERKO0VDdURFO0lBQ0UsaUJBQUE7RURyREo7RUN3REU7SUFDRSxpQkFBQTtFRHRESjs7RUMwREE7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0VEdkRGO0VDeURFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFRHZESjs7RUMyREE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFRHhERjtFQzBERTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFRHhESjtFQzBESTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VEeEROO0VDNERJO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VEMUROO0FBQ0Y7QUMrREEsOEJBQUE7QUFDQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUQ3REY7RUMrREU7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFRDdESjs7RUNpRUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQ5REY7O0VDaUVBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFRDlERjs7RUNpRUE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUQ5REY7O0VDaUVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VEOURGOztFQ2lFQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtFRDlERjs7RUNpRUE7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFRDlERjs7RUNpRUE7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFRDlERjtFQ2dFRTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFRDlESjs7RUNrRUE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUQvREY7RUNpRUU7SUFDRSw2QkFBQTtFRC9ESjtFQ2tFRTtJQUNFLGlCQUFBO0VEaEVKO0VDbUVFO0lBQ0UsaUJBQUE7RURqRUo7O0VDcUVBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtFRGxFRjtFQ29FRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RURsRUo7O0VDc0VBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RURuRUY7RUNxRUU7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RURuRUo7RUNxRUk7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFRG5FTjtFQ3VFSTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFRHJFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWJjYXRzL3N1YmNhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1udS1zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzE1N2VkMiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzE1N2VkMiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYm94cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5mbGV4ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleGVyIC5zZWxlY2x0SXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2VudGVySXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlckl0ZW0gLmxvYWRNb3JlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU3ZWQyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5jb3ZlcmltYWdlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudXRleHQgLmljb24tbWVudSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaXRlbXNLaW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ub3JtYWxJdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm9ybWFsSXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjMTU3ZWQyO1xufVxuXG4ua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5vZmZlciB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90SW5TdG9rZSB7XG4gIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm5vdEluU3Rva2UgLnRleHQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FydEJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmNhcnRCdG4gLmFic19hZGQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dGNvbnRlbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi50b29sYmFydG9wIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnUtY29udGVudCAuc2lkZV9jb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4udGV4dF9oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG5cbi8qIGlwaG9uZSA2LCA2cywgNywgOCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubm90SW5TdG9rZSAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5wcmljZV9sYmwgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcmljZV9sYmwgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNTdlZDI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gICAgY29sb3I6ICNGRjhFODA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4vKiBpcGhvbmUgNissIDZzKywgNyssIDgrICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1lbnV0ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXRleHQgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZHVjdHRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5pdGVtc0tpbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmtpbmQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5vZmZlciB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5wZXJjZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90SW5TdG9rZSB7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnByaWNlX2xibCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnByaWNlX2xibCAuc2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByaWNlX2xibCAuZGljb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYnRuQnRtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi8qIGlwaG9uZSBYICwgWFMsIDExIFBybyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDgxMnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubm90SW5TdG9rZSAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5wcmljZV9sYmwgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcmljZV9sYmwgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNTdlZDI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gICAgY29sb3I6ICNGRjhFODA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4vKiBpcGhvbmUgWFIsIDExICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1lbnV0ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXRleHQgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZHVjdHRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5pdGVtc0tpbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmtpbmQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5vZmZlciB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5wZXJjZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90SW5TdG9rZSB7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnByaWNlX2xibCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnByaWNlX2xibCAuc2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByaWNlX2xibCAuZGljb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYnRuQnRtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi8qIGlwaG9uZSBYUyBNYXgsIDExIFBybyBNYXggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5vdEluU3Rva2UgLnRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAucHJpY2VfbGJsIC5zZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2FydEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubW51LXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTU3ZWQyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTU3ZWQyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmZsZXhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VsZWNsdEl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG59XG5cbi5jZW50ZXJJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxvYWRNb3JlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1N2VkMjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ucHJvZHVjdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5jb3ZlcmltYWdlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaXRlbXNLaW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnZhcmlhbnQge1xuICAuc2VsZWN0ZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuXG4ubm9ybWFsSXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vcm1hbEl0ZW06aG92ZXIge1xuICBjb2xvcjogIzE1N2VkMjtcbn1cblxuLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4ub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcblxuICAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG4ucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcblxuICAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG5cbiAgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLnJpcHBsZS1wYXJlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmNhcnRCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4udGV4dGNvbnRlbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi50b29sYmFydG9wIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG5cbi5tZW51LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLy8gb3ZlcmZsb3c6IGF1dG87XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIC5zaWRlX2NvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi50ZXh0X2hlYWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJyYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuXG5cbi8qIGlwaG9uZSA2LCA2cywgNywgOCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG5cbiAgICAub3JpZ2luYWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuXG4gICAgLnNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRpY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmFic19hZGQge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIGlwaG9uZSA2KywgNnMrLCA3KywgOCsgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgLmljb24tbWVudSB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICB9XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuXG4gICAgLm9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cblxuICAgIC5zZWxsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kaWNvdW50IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5hYnNfYWRkIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxNTdlZDI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIGlwaG9uZSBYICwgWFMsIDExIFBybyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDgxMnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG5cbiAgICAub3JpZ2luYWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuXG4gICAgLnNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRpY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmFic19hZGQge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogaXBob25lIFhSLCAxMSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0IDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG5cbiAgICAub3JpZ2luYWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuXG4gICAgLnNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRpY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmFic19hZGQge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogaXBob25lIFhTIE1heCwgMTEgUHJvIE1heCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0IDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG5cbiAgICAub3JpZ2luYWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuXG4gICAgLnNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmRpY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmFic19hZGQge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubcatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subcats',
                templateUrl: './subcats.component.html',
                styleUrls: ['./subcats.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/subcats/subcats.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/subcats/subcats.module.ts ***!
  \******************************************************/
/*! exports provided: SubcatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatsModule", function() { return SubcatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _subcats_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcats-routing.module */ "./src/app/components/subcats/subcats-routing.module.ts");
/* harmony import */ var _subcats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcats.component */ "./src/app/components/subcats/subcats.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/










class SubcatsModule {
}
SubcatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubcatsModule });
SubcatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubcatsModule_Factory(t) { return new (t || SubcatsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _subcats_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubcatsRoutingModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubcatsModule, { declarations: [_subcats_component__WEBPACK_IMPORTED_MODULE_3__["SubcatsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _subcats_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubcatsRoutingModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubcatsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_subcats_component__WEBPACK_IMPORTED_MODULE_3__["SubcatsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _subcats_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubcatsRoutingModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-subcats-subcats-module-es2015.js.map