(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-top-offers-top-offers-module"],{

/***/ "./src/app/components/top-offers/top-offers-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/top-offers/top-offers-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TopOffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopOffersRoutingModule", function() { return TopOffersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _top_offers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-offers.component */ "./src/app/components/top-offers/top-offers.component.ts");
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
        component: _top_offers_component__WEBPACK_IMPORTED_MODULE_2__["TopOffersComponent"]
    }
];
class TopOffersRoutingModule {
}
TopOffersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TopOffersRoutingModule });
TopOffersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TopOffersRoutingModule_Factory(t) { return new (t || TopOffersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopOffersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopOffersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/top-offers/top-offers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/top-offers/top-offers.component.ts ***!
  \***************************************************************/
/*! exports provided: TopOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopOffersComponent", function() { return TopOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");











function TopOffersComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.discount, "% ");
} }
function TopOffersComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1108.util.getString("Out of Stoke"), " ");
} }
function TopOffersComponent_div_19_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function TopOffersComponent_div_19_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function TopOffersComponent_div_19_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} }
function TopOffersComponent_div_19_div_10_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].price ? product_r1105.variations[0].items[product_r1105.variant].price : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount ? product_r1105.variations[0].items[product_r1105.variant].discount : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].price ? product_r1105.variations[0].items[product_r1105.variant].price : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_10_span_7_span_2_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_10_span_7_span_3_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_div_10_span_7_span_4_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1119.util.currecny, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount === 0 && !product_r1105.variations[0].items[product_r1105.variant].discount);
} }
function TopOffersComponent_div_19_div_10_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].price ? product_r1105.variations[0].items[product_r1105.variant].price : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount ? product_r1105.variations[0].items[product_r1105.variant].discount : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].price ? product_r1105.variations[0].items[product_r1105.variant].price : 0, " ");
} }
function TopOffersComponent_div_19_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_19_div_10_span_8_span_1_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_10_span_8_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_10_span_8_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].discount === 0 && !product_r1105.variations[0].items[product_r1105.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1120.util.currecny, " ");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1141.util.currecny, " ", option_r1139.price, " ");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1139.price, " ", ctx_r1142.util.currecny, "");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1146.util.currecny, " ", option_r1139.price, " ");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1147.util.currecny, " ", option_r1139.discount, " ");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1139.price, " ", ctx_r1148.util.currecny, "");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1139.discount, " ", ctx_r1149.util.currecny, "");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_1_Template, 2, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_2_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_3_Template, 2, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_span_4_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1143.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1143.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1143.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1143.util.cside === "right");
} }
function TopOffersComponent_div_19_div_10_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_div_10_ng_template_10_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1156); const ix_r1140 = ctx.index; const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; return product_r1105.variant = ix_r1140; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_2_Template, 2, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_3_Template, 2, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_div_10_ng_template_10_div_0_span_4_Template, 5, 4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1139 = ctx.$implicit;
    const ctx_r1138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1139.title, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1139.discount === 0 && ctx_r1138.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1139.discount === 0 && ctx_r1138.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1139.discount !== 0);
} }
function TopOffersComponent_div_19_div_10_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopOffersComponent_div_19_div_10_ng_template_10_div_0_Template, 5, 4, "div", 46);
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r1105.variations[0].items);
} }
function TopOffersComponent_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r1159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1159); const _r1118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1118.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TopOffersComponent_div_19_div_10_span_7_Template, 5, 4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopOffersComponent_div_19_div_10_span_8_Template, 5, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopOffersComponent_div_19_div_10_ng_template_10_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r1121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.variations && product_r1105.variations[0] && product_r1105.variations[0].items[product_r1105.variant] && product_r1105.variations[0].items[product_r1105.variant].title ? product_r1105.variations[0].items[product_r1105.variant].title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1112.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1112.util.cside === "right");
} }
function TopOffersComponent_div_19_p_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.gram, " ", ctx_r1161.util.getString("grams"), " ");
} }
function TopOffersComponent_div_19_p_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.kg, " ", ctx_r1162.util.getString("kg"), " ");
} }
function TopOffersComponent_div_19_p_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.liter, " ", ctx_r1163.util.getString("ltr"), " ");
} }
function TopOffersComponent_div_19_p_11_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.ml, " ", ctx_r1164.util.getString("ml"), " ");
} }
function TopOffersComponent_div_19_p_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.pcs, " ", ctx_r1165.util.getString("pcs"), " ");
} }
function TopOffersComponent_div_19_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_19_p_11_span_1_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_p_11_span_2_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_p_11_span_3_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_p_11_span_4_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopOffersComponent_div_19_p_11_span_5_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.have_gram === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.have_kg === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.have_liter === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.have_ml === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.have_pcs === "1");
} }
function TopOffersComponent_div_19_div_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1172.util.currecny, " ", product_r1105.original_price, " ");
} }
function TopOffersComponent_div_19_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.original_price, " ", ctx_r1173.util.currecny, "");
} }
function TopOffersComponent_div_19_div_12_p_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r1177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1177.util.currecny, " ", product_r1105.original_price, " ");
} }
function TopOffersComponent_div_19_div_12_p_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r1178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1178.util.currecny, " ", product_r1105.sell_price, " ");
} }
function TopOffersComponent_div_19_div_12_p_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r1179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.original_price, " ", ctx_r1179.util.currecny, "");
} }
function TopOffersComponent_div_19_div_12_p_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r1180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1105.sell_price, " ", ctx_r1180.util.currecny, "");
} }
function TopOffersComponent_div_19_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_19_div_12_p_3_span_1_Template, 2, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_12_p_3_span_2_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_12_p_3_span_3_Template, 2, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_div_12_p_3_span_4_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1174.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1174.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1174.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1174.util.cside === "right");
} }
function TopOffersComponent_div_19_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_19_div_12_p_1_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_12_p_2_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_12_p_3_Template, 5, 4, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.discount === "0" && ctx_r1114.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.discount === "0" && ctx_r1114.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.discount !== "0");
} }
function TopOffersComponent_div_19_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r1188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1188); const ctx_r1187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r1105 = ctx_r1187.$implicit; const i_r1106 = ctx_r1187.index; const ctx_r1186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1186.addToCart(product_r1105, i_r1106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1115.util.getString("Add"), " ");
} }
function TopOffersComponent_div_19_div_14_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1105.quantiy);
} }
function TopOffersComponent_div_19_div_14_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
} }
function TopOffersComponent_div_19_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r1194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1194); const ctx_r1193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r1105 = ctx_r1193.$implicit; const i_r1106 = ctx_r1193.index; const ctx_r1192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1192.remove(product_r1105, i_r1106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_14_p_3_Template, 2, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_div_14_p_4_Template, 1, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_div_14_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1194); const ctx_r1196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const product_r1105 = ctx_r1196.$implicit; const i_r1106 = ctx_r1196.index; const ctx_r1195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1195.add(product_r1105, i_r1106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.quantiy !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.quantiy === 0);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function TopOffersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r1199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1199); const product_r1105 = ctx.$implicit; const ctx_r1198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1198.singleProduct(product_r1105); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopOffersComponent_div_19_div_2_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopOffersComponent_div_19_div_3_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopOffersComponent_div_19_img_4_Template, 1, 0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopOffersComponent_div_19_img_5_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopOffersComponent_div_19_img_6_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_19_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1199); const product_r1105 = ctx.$implicit; const ctx_r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1200.singleProduct(product_r1105); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopOffersComponent_div_19_div_10_Template, 12, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopOffersComponent_div_19_p_11_Template, 6, 5, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TopOffersComponent_div_19_div_12_Template, 4, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopOffersComponent_div_19_div_13_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopOffersComponent_div_19_div_14_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1105 = ctx.$implicit;
    const ctx_r1101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "url(" + ctx_r1101.api.mediaURL + product_r1105.cover + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.discount !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.in_stoke === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.kind === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.kind === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.in_offer === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1105.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, product_r1105.name, 0, 20) + ".." : product_r1105.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.size === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1105.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1101.cart.itemId.includes(product_r1105.id) && product_r1105.quantiy <= 0 && product_r1105.in_stoke === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1101.cart.itemId.includes(product_r1105.id));
} }
function TopOffersComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r1202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopOffersComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const ctx_r1201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1201.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1102.util.getString("Show more"), " ");
} }
function TopOffersComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "border-radius": "5px", height: "120px", width: "120px" }; };
function TopOffersComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function TopOffersComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopOffersComponent_div_22_div_1_Template, 2, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1104.dummyTopProducts);
} }
class TopOffersComponent {
    constructor(api, util, cart, router) {
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.products = [];
        this.dummyTopProducts = [];
        this.filter = '1';
        this.limit = 1;
        this.loaded = false;
        this.dummyTopProducts = Array(30);
        this.getOffers();
    }
    getOffers() {
        const param = {
            id: localStorage.getItem('city'),
            limit: this.limit * 12
        };
        this.api.post('products/getOffersList', param).subscribe((data) => {
            console.log('top products', data);
            this.maxLimit = (this.limit * 12) - 1;
            this.dummyTopProducts = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                data.data.forEach(element => {
                    if (element.variations && element.size === '1' && element.variations !== '') {
                        if (((x) => { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(element.status)) {
                            element.variations = JSON.parse(element.variations);
                            element['variant'] = 0;
                        }
                        else {
                            element.variations = [];
                            element['variant'] = 1;
                        }
                    }
                    else {
                        element.variations = [];
                        element['variant'] = 1;
                    }
                    if (this.cart.itemId.includes(element.id)) {
                        const index = this.cart.cart.filter(x => x.id === element.id);
                        element['quantiy'] = index[0].quantiy;
                    }
                    else {
                        element['quantiy'] = 0;
                    }
                    this.products.push(element);
                });
            }
            if (this.loaded) {
                this.loaded = false;
            }
        }, error => {
            console.log(error);
            this.dummyTopProducts = [];
        });
    }
    ngOnInit() {
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
        this.getOffers();
    }
}
TopOffersComponent.ɵfac = function TopOffersComponent_Factory(t) { return new (t || TopOffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TopOffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopOffersComponent, selectors: [["app-top-offers"]], decls: 23, vars: 11, consts: [[1, "container"], ["content", ""], [2, "padding-bottom", "100px"], [1, "flexer"], [1, "selecltItem", 3, "ngModel", "ngModelChange", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "row"], ["class", "col-6 col-md-3 boxs", 4, "ngFor", "ngForOf"], ["class", "centerItem", 3, "click", 4, "ngIf"], ["class", "centerItem", 4, "ngIf"], ["class", "row", "style", "overflow: hidden;", 4, "ngIf"], [1, "col-6", "col-md-3", "boxs"], [1, "productimage", 3, "ngStyle", "click"], ["class", "percent", 4, "ngIf"], ["class", "notInStoke", 4, "ngIf"], ["src", "assets/imgs/veg.png", "class", "kind", "alt", "Veg", 4, "ngIf"], ["src", "assets/imgs/non.png", "class", "kind", "alt", "Non Veg", 4, "ngIf"], ["src", "assets/imgs/offer.png", "class", "offer", "alt", "Offer", 4, "ngIf"], [1, "producttext", 3, "click"], ["class", "variant", 4, "ngIf"], ["class", "itemsKind", 4, "ngIf"], [4, "ngIf"], ["class", "btnBtm", 4, "ngIf"], ["class", "cartBtn", 4, "ngIf"], [1, "percent"], [1, "notInStoke"], [1, "text"], ["src", "assets/imgs/veg.png", "alt", "Veg", 1, "kind"], ["src", "assets/imgs/non.png", "alt", "Non Veg", 1, "kind"], ["src", "assets/imgs/offer.png", "alt", "Offer", 1, "offer"], [1, "variant"], ["placement", "bottom", "triggers", "manual", 1, "selecter", 3, "ngbPopover", "click"], ["p1", "ngbPopover"], ["class", "price_lbl", 4, "ngIf"], ["fas", "", "icon", "angle-down"], ["popContent", ""], [1, "price_lbl"], ["class", "original", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "original"], [1, "sell"], ["class", "normalItem", 3, "click", 4, "ngFor", "ngForOf"], [1, "normalItem", 3, "click"], [1, "itemsKind"], [1, "btnBtm"], [1, "ion-activatable", "ripple-parent", 3, "click"], [1, "cartBtn"], [1, "abs_add"], ["src", "assets/imgs/remove.png", 3, "click"], ["src", "assets/imgs/add.png", 3, "click"], [1, "centerItem", 3, "click"], [1, "loadMore"], [1, "centerItem"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "row", 2, "overflow", "hidden"], ["class", "col-4 col-md-2", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2"], [3, "theme"]], template: function TopOffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopOffersComponent_Template_select_ngModelChange_5_listener($event) { return ctx.filter = $event; })("change", function TopOffersComponent_Template_select_change_5_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TopOffersComponent_div_19_Template, 15, 18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopOffersComponent_div_20_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TopOffersComponent_div_21_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TopOffersComponent_div_22_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Popularity"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Price - Low to High"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Price - High to Low"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("A - Z"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Z - A"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("% Off - High to Low"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxLimit < ctx.products.length && ctx.loaded === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dummyTopProducts == null ? null : ctx.dummyTopProducts.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopover"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["FasDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: ["@charset \"UTF-8\";\n\n.mnu-selected[_ngcontent-%COMP%] {\n  border-left: 3px solid #45C261 !important;\n  color: #45C261 !important;\n}\nion-label[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.boxs[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n}\n.flexer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.flexer[_ngcontent-%COMP%]   .selecltItem[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 5px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.centerItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.centerItem[_ngcontent-%COMP%]   .loadMore[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #45C261;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.product[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 2px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.coverimage[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.menutext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.productimage[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 100%;\n  margin: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-width: 100%;\n  position: relative;\n}\n.producttext[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin: 0px;\n  margin-top: 5px;\n}\n.itemsKind[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  margin: 0px;\n}\n.variant[_ngcontent-%COMP%]   .selecter[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.normalItem[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 0px;\n  text-align: start;\n  cursor: pointer;\n}\n.normalItem[_ngcontent-%COMP%]:hover {\n  color: #45C261;\n}\n.kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.offer[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.percent[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 8px;\n  color: white;\n}\n.notInStoke[_ngcontent-%COMP%] {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 2px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  margin: 0px;\n}\n.price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.btnBtm[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n.btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 5px;\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 14px;\n}\n.cartBtn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #45C261;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  margin: 0px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #FF8E80;\n  width: 25px;\n  cursor: pointer;\n}\n.textconten[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-top: 5%;\n}\n.toolbartop[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n.menu-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.menu-content[_ngcontent-%COMP%]   .side_col[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n}\n.text_head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n}\n.brand[_ngcontent-%COMP%] {\n  background-color: #ededed;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3Atb2ZmZXJzL3RvcC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLW9mZmVycy9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b3Atb2ZmZXJzXFx0b3Atb2ZmZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBREVGO0FDQUE7RUFDRSx5QkFBQTtBREdGO0FDREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FESUY7QUNGQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FES0Y7QUNKRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FETUo7QUNGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLRjtBQ0pFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRE1KO0FDSEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURNRjtBQ0pBO0VBQ0UsaUJBQUE7QURPRjtBQ0xBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURRRjtBQ1BFO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURTTjtBQ05BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEU0Y7QUNQQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VB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RjtFQ3hDRTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFRDBDTjtFQ3hDTTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VEMENWO0VDdENNO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VEd0NWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvcC1vZmZlcnMvdG9wLW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubW51LXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNDVDMjYxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDVDMjYxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmZsZXhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4ZXIgLnNlbGVjbHRJdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jZW50ZXJJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2VudGVySXRlbSAubG9hZE1vcmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NUMyNjE7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmNvdmVyaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLm1lbnV0ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3R0ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pdGVtc0tpbmQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udmFyaWFudCAuc2VsZWN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5vcm1hbEl0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3JtYWxJdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM0NUMyNjE7XG59XG5cbi5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cblxuLm9mZmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJ0QnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcnRCdG4gLmFic19hZGQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uY2FydEJ0biAuYWJzX2FkZCBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0Y29udGVuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnRvb2xiYXJ0b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS1jb250ZW50IC5zaWRlX2NvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50ZXh0X2hlYWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJyYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuLyogaXBob25lIDYsIDZzLCA3LCA4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1lbnV0ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXRleHQgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZHVjdHRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5pdGVtc0tpbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmtpbmQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5vZmZlciB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5wZXJjZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90SW5TdG9rZSB7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnByaWNlX2xibCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnByaWNlX2xibCAuc2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByaWNlX2xibCAuZGljb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYnRuQnRtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi8qIGlwaG9uZSA2KywgNnMrLCA3KywgOCsgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5vdEluU3Rva2UgLnRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAucHJpY2VfbGJsIC5zZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2FydEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLyogaXBob25lIFggLCBYUywgMTEgUHJvICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1lbnV0ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXRleHQgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZHVjdHRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5pdGVtc0tpbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmtpbmQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5vZmZlciB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5wZXJjZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90SW5TdG9rZSB7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnByaWNlX2xibCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnByaWNlX2xibCAuc2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByaWNlX2xibCAuZGljb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYnRuQnRtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi8qIGlwaG9uZSBYUiwgMTEgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5vdEluU3Rva2UgLnRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAucHJpY2VfbGJsIC5zZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2FydEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLyogaXBob25lIFhTIE1heCwgMTEgUHJvIE1heCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubm90SW5TdG9rZSAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5wcmljZV9sYmwgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcmljZV9sYmwgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gICAgY29sb3I6ICNGRjhFODA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tbnUtc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0NUMyNjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NUMyNjEgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uYm94c3tcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5mbGV4ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnNlbGVjbHRJdGVte1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG59XG4uY2VudGVySXRlbXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5sb2FkTW9yZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QzI2MTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLmNvdmVyaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pdGVtc0tpbmR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udmFyaWFudHtcbiAgICAuc2VsZWN0ZXJ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cbi5ub3JtYWxJdGVte1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm9ybWFsSXRlbTpob3ZlcntcbiAgY29sb3I6ICM0NUMyNjE7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLmFic19hZGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRleHRjb250ZW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4udG9vbGJhcnRvcCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuXG4ubWVudS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBvdmVyZmxvdzogYXV0bztcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgLnNpZGVfY29se1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxufVxuXG4udGV4dF9oZWFke1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJyYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuXG5cbi8qIGlwaG9uZSA2LCA2cywgNywgOCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW1zS2luZHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmtpbmR7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ub2ZmZXJ7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm90SW5TdG9rZXtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLnRleHR7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4ucHJpY2VfbGJse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuYWJzX2FkZHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuLyogaXBob25lIDYrLCA2cyssIDcrLCA4KyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW1zS2luZHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmtpbmR7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ub2ZmZXJ7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm90SW5TdG9rZXtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLnRleHR7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4ucHJpY2VfbGJse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuYWJzX2FkZHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuIH1cblxuLyogaXBob25lIFggLCBYUywgMTEgUHJvICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmljb24tbWVudSB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgfVxufVxuLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaXRlbXNLaW5ke1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICAub3JpZ2luYWx7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuc2VsbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kaWNvdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4gLmJ0bkJ0bXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5jYXJ0QnRue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hYnNfYWRke1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG59XG5cbi8qIGlwaG9uZSBYUiwgMTEgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodCA6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMikge1xuLm1lbnV0ZXh0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG4ucHJvZHVjdGltYWdlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3R0ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pdGVtc0tpbmR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5raW5ke1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm9mZmVye1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnBlcmNlbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm5vdEluU3Rva2V7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC50ZXh0e1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLnByaWNlX2xibHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIC5vcmlnaW5hbHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICAgIC5zZWxse1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmRpY291bnR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbiAuYnRuQnRte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLmNhcnRCdG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLmFic19hZGR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuLyogaXBob25lIFhTIE1heCwgMTEgUHJvIE1heCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0IDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbiAgLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaXRlbXNLaW5ke1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICAub3JpZ2luYWx7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuc2VsbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kaWNvdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4gLmJ0bkJ0bXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5jYXJ0QnRue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hYnNfYWRke1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopOffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-offers',
                templateUrl: './top-offers.component.html',
                styleUrls: ['./top-offers.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/top-offers/top-offers.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/top-offers/top-offers.module.ts ***!
  \************************************************************/
/*! exports provided: TopOffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopOffersModule", function() { return TopOffersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _top_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-offers-routing.module */ "./src/app/components/top-offers/top-offers-routing.module.ts");
/* harmony import */ var _top_offers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-offers.component */ "./src/app/components/top-offers/top-offers.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/












class TopOffersModule {
}
TopOffersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TopOffersModule });
TopOffersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TopOffersModule_Factory(t) { return new (t || TopOffersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _top_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopOffersRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopOffersModule, { declarations: [_top_offers_component__WEBPACK_IMPORTED_MODULE_3__["TopOffersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _top_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopOffersRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopOffersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_top_offers_component__WEBPACK_IMPORTED_MODULE_3__["TopOffersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _top_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopOffersRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-top-offers-top-offers-module-es2015.js.map