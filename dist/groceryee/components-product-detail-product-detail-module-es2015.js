(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-product-detail-product-detail-module"],{

/***/ "./src/app/components/product-detail/product-detail-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function() { return ProductDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





const routes = [{
        path: '',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]
    }];
class ProductDetailRoutingModule {
}
ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDetailRoutingModule });
ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDetailRoutingModule_Factory(t) { return new (t || ProductDetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/










const _c0 = ["topContent"];
function ProductDetailComponent_mdb_carousel_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} }
function ProductDetailComponent_mdb_carousel_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function ProductDetailComponent_mdb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_mdb_carousel_3_img_2_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_mdb_carousel_3_img_3_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "carousel-thumbnails")("animation", "fade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "url(" + ctx_r407.api.mediaURL + ctx_r407.coverImage + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r407.veg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r407.veg);
} }
function ProductDetailComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r422); const item_r420 = ctx.$implicit; const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r421.coverImage = item_r420; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r420 = ctx.$implicit;
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r419.coverImage === item_r420 ? "bordered" : "none")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "url(" + ctx_r419.api.mediaURL + item_r420 + ")"));
} }
function ProductDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_4_div_1_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r408.gallery);
} }
function ProductDetailComponent_div_6_p_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r428.gram, " ", ctx_r428.util.getString("grams"), " ");
} }
function ProductDetailComponent_div_6_p_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r429.kg, " ", ctx_r429.util.getString("kg"), " ");
} }
function ProductDetailComponent_div_6_p_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r430.liter, " ", ctx_r430.util.getString("ltr"), " ");
} }
function ProductDetailComponent_div_6_p_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r431.ml, " ", ctx_r431.util.getString("ml"), " ");
} }
function ProductDetailComponent_div_6_p_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r432.pcs, " ", ctx_r432.util.getString("pcs"), " ");
} }
function ProductDetailComponent_div_6_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_6_p_3_span_1_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_p_3_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_p_3_span_3_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_p_3_span_4_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_div_6_p_3_span_5_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r423.have_gram === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r423.have_kg === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r423.have_liter === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r423.have_ml === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r423.have_pcs === "1");
} }
function ProductDetailComponent_div_6_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r433.util.getString("MRP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r433.util.currecny, " ", ctx_r433.realPrice, " ");
} }
function ProductDetailComponent_div_6_div_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r434.util.getString("MRP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r434.realPrice, " ", ctx_r434.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_4_p_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r436.util.currecny, " ", ctx_r436.realPrice, " ");
} }
function ProductDetailComponent_div_6_div_4_p_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r437.util.currecny, " ", ctx_r437.sellPrice, " ");
} }
function ProductDetailComponent_div_6_div_4_p_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r438.realPrice, " ", ctx_r438.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_4_p_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r439.sellPrice, " ", ctx_r439.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_4_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_4_p_3_span_3_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_div_4_p_3_span_4_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_div_6_div_4_p_3_span_5_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailComponent_div_6_div_4_p_3_span_6_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r435.util.getString("MRP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r435.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r435.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r435.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r435.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r435.util.getString("You Save"), " : ", ctx_r435.discount, " %");
} }
function ProductDetailComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_6_div_4_p_1_Template, 4, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_div_4_p_2_Template, 4, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_4_p_3_Template, 9, 7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r424.discount === "0" && ctx_r424.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r424.discount === "0" && ctx_r424.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r424.discount !== "0");
} }
function ProductDetailComponent_div_6_div_5_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r445.variations && ctx_r445.variations[0] && ctx_r445.variations[0].items[ctx_r445.variant] && ctx_r445.variations[0].items[ctx_r445.variant].price ? ctx_r445.variations[0].items[ctx_r445.variant].price : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r446.variations && ctx_r446.variations[0] && ctx_r446.variations[0].items[ctx_r446.variant] && ctx_r446.variations[0].items[ctx_r446.variant].discount ? ctx_r446.variations[0].items[ctx_r446.variant].discount : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r447.variations && ctx_r447.variations[0] && ctx_r447.variations[0].items[ctx_r447.variant] && ctx_r447.variations[0].items[ctx_r447.variant].price ? ctx_r447.variations[0].items[ctx_r447.variant].price : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_div_5_span_7_span_2_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_5_span_7_span_3_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_div_5_span_7_span_4_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r441.util.currecny, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r441.variations && ctx_r441.variations[0] && ctx_r441.variations[0].items[ctx_r441.variant] && ctx_r441.variations[0].items[ctx_r441.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r441.variations && ctx_r441.variations[0] && ctx_r441.variations[0].items[ctx_r441.variant] && ctx_r441.variations[0].items[ctx_r441.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r441.variations && ctx_r441.variations[0] && ctx_r441.variations[0].items[ctx_r441.variant] && ctx_r441.variations[0].items[ctx_r441.variant].discount === 0 && !ctx_r441.variations[0].items[ctx_r441.variant].discount);
} }
function ProductDetailComponent_div_6_div_5_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r448.variations && ctx_r448.variations[0] && ctx_r448.variations[0].items[ctx_r448.variant] && ctx_r448.variations[0].items[ctx_r448.variant].price ? ctx_r448.variations[0].items[ctx_r448.variant].price : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r449.variations && ctx_r449.variations[0] && ctx_r449.variations[0].items[ctx_r449.variant] && ctx_r449.variations[0].items[ctx_r449.variant].discount ? ctx_r449.variations[0].items[ctx_r449.variant].discount : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r450.variations && ctx_r450.variations[0] && ctx_r450.variations[0].items[ctx_r450.variant] && ctx_r450.variations[0].items[ctx_r450.variant].price ? ctx_r450.variations[0].items[ctx_r450.variant].price : 0, " ");
} }
function ProductDetailComponent_div_6_div_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_6_div_5_span_8_span_1_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_div_5_span_8_span_2_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_5_span_8_span_3_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r442.variations && ctx_r442.variations[0] && ctx_r442.variations[0].items[ctx_r442.variant] && ctx_r442.variations[0].items[ctx_r442.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r442.variations && ctx_r442.variations[0] && ctx_r442.variations[0].items[ctx_r442.variant] && ctx_r442.variations[0].items[ctx_r442.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r442.variations && ctx_r442.variations[0] && ctx_r442.variations[0].items[ctx_r442.variant] && ctx_r442.variations[0].items[ctx_r442.variant].discount === 0 && !ctx_r442.variations[0].items[ctx_r442.variant].discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r442.util.currecny, " ");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r455.util.currecny, " ", option_r453.price, " ");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r453.price, " ", ctx_r456.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r460.util.currecny, " ", option_r453.price, " ");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r461.util.currecny, " ", option_r453.discount, " ");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r453.price, " ", ctx_r462.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r453.discount, " ", ctx_r463.util.currecny, "");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_1_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_2_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_3_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_span_4_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r457.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r457.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r457.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r457.util.cside === "right");
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_div_5_ng_template_10_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r469); const ix_r454 = ctx.index; const ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r468.changes(ix_r454); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_2_Template, 2, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_3_Template, 2, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_span_4_Template, 5, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r453 = ctx.$implicit;
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r453.title, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r453.discount === 0 && ctx_r452.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r453.discount === 0 && ctx_r452.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r453.discount !== 0);
} }
function ProductDetailComponent_div_6_div_5_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_div_6_div_5_ng_template_10_div_0_Template, 5, 4, "div", 44);
} if (rf & 2) {
    const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r444.variations[0].items);
} }
function ProductDetailComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r471); const _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r440.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailComponent_div_6_div_5_span_7_Template, 5, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailComponent_div_6_div_5_span_8_Template, 5, 4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_6_div_5_ng_template_10_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r443);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r425.variations && ctx_r425.variations[0] && ctx_r425.variations[0].items[ctx_r425.variant] && ctx_r425.variations[0].items[ctx_r425.variant].title ? ctx_r425.variations[0].items[ctx_r425.variant].title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r425.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r425.util.cside === "right");
} }
function ProductDetailComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r473); const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r472.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r426.util.getString("Add to Cart"), " ");
} }
function ProductDetailComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_div_7_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r475); const ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r474.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_div_7_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r475); const ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r476.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r427.getQuanity());
} }
function ProductDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_6_p_3_Template, 6, 5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_6_div_4_Template, 4, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_div_6_div_5_Template, 12, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailComponent_div_6_div_6_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailComponent_div_6_div_7_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_6_Template_p_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r477.openStore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r409.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r409.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r409.size === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r409.size === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r409.cart.itemId.includes(ctx_r409.id) && ctx_r409.status === "1" && ctx_r409.in_stoke === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r409.cart.itemId.includes(ctx_r409.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r409.storeName, " ");
} }
function ProductDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r410.util.getString("Descriptions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r410.description, " ");
} }
function ProductDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r411.util.getString("Key features"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r411.key_features, " ");
} }
function ProductDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r412.util.getString("Disclaimer"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r412.disclaimer, " ");
} }
function ProductDetailComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r413.util.getString("Related Products"), " ");
} }
function ProductDetailComponent_div_11_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r484); const ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r483.scrollLefttopContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_11_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r485.discount, "% ");
} }
function ProductDetailComponent_div_11_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r488 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r488.util.getString("Out of Stoke"), " ");
} }
function ProductDetailComponent_div_11_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 74);
} }
function ProductDetailComponent_div_11_div_4_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 75);
} }
function ProductDetailComponent_div_11_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.gram, " ", ctx_r491.util.getString("grams"), " ");
} }
function ProductDetailComponent_div_11_div_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.kg, " ", ctx_r492.util.getString("kg"), " ");
} }
function ProductDetailComponent_div_11_div_4_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.liter, " ", ctx_r493.util.getString("ltr"), " ");
} }
function ProductDetailComponent_div_11_div_4_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.ml, " ", ctx_r494.util.getString("ml"), " ");
} }
function ProductDetailComponent_div_11_div_4_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.pcs, " ", ctx_r495.util.getString("pcs"), " ");
} }
function ProductDetailComponent_div_11_div_4_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r496.util.currecny, " ", item_r485.original_price, " ");
} }
function ProductDetailComponent_div_11_div_4_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.original_price, " ", ctx_r497.util.currecny, "");
} }
function ProductDetailComponent_div_11_div_4_p_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r507.util.currecny, " ", item_r485.original_price, " ");
} }
function ProductDetailComponent_div_11_div_4_p_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r508.util.currecny, " ", item_r485.sell_price, " ");
} }
function ProductDetailComponent_div_11_div_4_p_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.original_price, " ", ctx_r509.util.currecny, "");
} }
function ProductDetailComponent_div_11_div_4_p_18_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r485.sell_price, " ", ctx_r510.util.currecny, "");
} }
function ProductDetailComponent_div_11_div_4_p_18_Template(rf, ctx) { if (rf & 1) {
    const _r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_div_4_p_18_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r517); const item_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r515.goToProductDetail(item_r485); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_11_div_4_p_18_span_1_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_11_div_4_p_18_span_2_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_11_div_4_p_18_span_3_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_11_div_4_p_18_span_4_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.util.cside === "right");
} }
function ProductDetailComponent_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r519); const item_r485 = ctx.$implicit; const ctx_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r518.goToProductDetail(item_r485); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_11_div_4_div_2_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_11_div_4_div_3_Template, 3, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_11_div_4_img_4_Template, 1, 0, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_div_11_div_4_img_5_Template, 1, 0, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_div_4_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r519); const item_r485 = ctx.$implicit; const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r520.goToProductDetail(item_r485); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductDetailComponent_div_11_div_4_span_11_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailComponent_div_11_div_4_span_12_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductDetailComponent_div_11_div_4_span_13_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductDetailComponent_div_11_div_4_span_14_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductDetailComponent_div_11_div_4_span_15_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductDetailComponent_div_11_div_4_p_16_Template, 2, 2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductDetailComponent_div_11_div_4_p_17_Template, 2, 2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductDetailComponent_div_11_div_4_p_18_Template, 5, 4, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r485 = ctx.$implicit;
    const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, "url(" + ctx_r481.api.mediaURL + item_r485.cover + "),url(assets/imgs/user.png)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.discount !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.in_stoke === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.kind === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.kind === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r485.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 14, item_r485.name, 0, 20) + ".." : item_r485.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.have_gram === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.have_kg === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.have_liter === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.have_ml === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.have_pcs === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.discount === "0" && ctx_r481.util.cside === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.discount === "0" && ctx_r481.util.cside === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r485.discount !== "0");
} }
function ProductDetailComponent_div_11_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r522 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_11_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r522); const ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r521.scrollRighttopContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_11_a_1_Template, 2, 0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_11_div_4_Template, 19, 20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailComponent_div_11_a_5_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r414.related == null ? null : ctx_r414.related.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r414.related);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r414.related == null ? null : ctx_r414.related.length);
} }
const _c2 = function () { return { "border-radius": "5px", height: "15px", width: "80px" }; };
const _c3 = function () { return { "border-radius": "5px", height: "15px", width: "100%" }; };
function ProductDetailComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
const _c4 = function () { return { "border-radius": "5px", height: "150px", width: "100%" }; };
const _c5 = function () { return { "border-radius": "5px", height: "15px", width: "100px" }; };
const _c6 = function () { return { "border-radius": "5px", height: "15px", width: "90px" }; };
const _c7 = function () { return [1, 2, 3]; };
function ProductDetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_12_div_10_Template, 9, 8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c7));
} }
const _c8 = function () { return { "border-radius": "5px", height: "120px", width: "120px" }; };
function ProductDetailComponent_ngx_skeleton_loader_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 83);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
} }
class ProductDetailComponent {
    constructor(route, router, navCtrl, api, util, cart) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.name = '';
        this.coverImage = '';
        this.key_features = '';
        this.disclaimer = '';
        this.gallery = [];
        this.related = [];
        this.dummyTopProducts = Array(5);
        this.quantiy = 0;
        this.route.queryParams.subscribe(data => {
            if (data && data.id) {
                this.id = data.id;
                this.getProduct();
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    getProduct() {
        const param = {
            id: this.id
        };
        this.loaded = false;
        this.api.post('products/getById', param).subscribe((data) => {
            this.loaded = true;
            console.log(data);
            this.gallery = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                const info = data.data[0];
                this.productt = info;
                this.productt['quantiy'] = 0;
                this.name = info.name;
                this.description = info.descriptions;
                this.subId = info.sub_cate_id;
                this.coverImage = info.cover;
                this.key_features = info.key_features;
                this.disclaimer = info.disclaimer;
                this.discount = info.discount;
                this.exp_date = info.exp_date;
                this.gram = info.gram;
                this.have_gram = info.have_gram;
                this.kg = info.kg;
                this.have_kg = info.have_kg;
                this.liter = info.liter;
                this.have_liter = info.have_liter;
                this.ml = info.ml;
                this.have_ml = info.have_ml;
                this.pcs = info.pcs;
                this.have_pcs = info.have_pcs;
                this.in_offer = info.in_offer;
                this.in_stoke = info.in_stoke;
                this.is_single = info.is_single;
                this.veg = info.kind;
                this.realPrice = parseFloat(info.original_price);
                this.sellPrice = parseFloat(info.sell_price);
                this.status = info.status;
                this.storeId = info.store_id;
                this.storeName = info.s_name;
                this.gallery.push(this.coverImage);
                this.size = info.size;
                if (info.variations && info.size === '1' && info.variations !== '') {
                    if (((x) => { try {
                        JSON.parse(x);
                        return true;
                    }
                    catch (e) {
                        return false;
                    } })(info.status)) {
                        this.variations = JSON.parse(info.variations);
                        this.variant = 0;
                        this.productt['variations'] = JSON.parse(info.variations);
                        this.productt['variant'] = 0;
                    }
                    else {
                        info.variations = [];
                        this.productt['variations'] = [];
                        this.variant = 1;
                        this.productt['variant'] = 1;
                    }
                }
                else {
                    this.variations = [];
                    this.variant = 1;
                    this.productt['variations'] = [];
                    this.productt['variant'] = 1;
                }
                this.checkCartItems();
                if (info.images) {
                    const images = JSON.parse(info.images);
                    console.log('images======>>>', images);
                    if (images[0]) {
                        this.gallery.push(images[0]);
                    }
                    if (images[1]) {
                        this.gallery.push(images[1]);
                    }
                    if (images[2]) {
                        this.gallery.push(images[2]);
                    }
                    if (images[3]) {
                        this.gallery.push(images[3]);
                    }
                    if (images[4]) {
                        this.gallery.push(images[4]);
                    }
                    if (images[5]) {
                        this.gallery.push(images[5]);
                    }
                }
                this.getRelated();
            }
            else {
                this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loaded = true;
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    onFav() {
        if (this.util.favIds.includes(this.id)) {
            console.log('remove this');
            this.util.removeFav(this.id);
            console.log('after removed', this.util.favIds);
            console.log('edit');
            const param = {
                id: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
            };
            this.util.haveFav = true;
            console.log('parama', param);
            this.api.post('favourite/editList', param).subscribe((data) => {
                console.log('save response', data);
                if (data && data.status !== 200) {
                    this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                }
            }, error => {
                console.log('error on save', error);
                this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
            });
        }
        else {
            console.log('add new');
            this.util.setFav(this.id);
            console.log('after added', this.util.favIds);
            if (this.util.haveFav) {
                console.log('edit');
                const param = {
                    id: localStorage.getItem('uid'),
                    ids: this.util.favIds.join()
                };
                this.util.haveFav = true;
                console.log('parama', param);
                this.api.post('favourite/editList', param).subscribe((data) => {
                    console.log('save response', data);
                    if (data && data.status !== 200) {
                        this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                    }
                }, error => {
                    console.log('error on save', error);
                    this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                });
            }
            else {
                console.log('save');
                const param = {
                    uid: localStorage.getItem('uid'),
                    ids: this.util.favIds.join()
                };
                this.util.haveFav = true;
                console.log('parama', param);
                this.api.post('favourite/save', param).subscribe((data) => {
                    console.log('save response', data);
                    if (data && data.status !== 200) {
                        this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                    }
                }, error => {
                    console.log('error on save', error);
                    this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                });
            }
        }
    }
    openStore() {
        console.log('open store');
        const param = {
            queryParams: {
                id: this.storeId,
                name: this.storeName
            }
        };
        this.router.navigate(['stores-products'], param);
    }
    changes(index) {
        this.variant = index;
        this.cart.calcuate();
        this.productt['variant'] = this.variant;
    }
    getRelated() {
        const param = {
            id: this.subId,
            limit: 5,
            cid: localStorage.getItem('city')
        };
        this.related = [];
        this.dummyTopProducts = Array(5);
        this.api.post('products/getRelated', param).subscribe((data) => {
            console.log('=>related=>', data);
            this.dummyTopProducts = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                const products = data.data;
                this.related = products.filter(x => x.id !== this.id);
            }
        }, error => {
            console.log(error);
            this.dummyTopProducts = [];
        });
    }
    checkCartItems() {
        const item = this.cart.cart.filter(x => x.id === this.id);
        console.log('cart=====>>>>>>', item);
        if (item && item.length) {
            this.quantiy = item[0].quantiy;
        }
    }
    addToCart() {
        this.quantiy = 1;
        this.productt.quantiy = 1;
        this.cart.addItem(this.productt);
    }
    add() {
        this.quantiy = this.quantiy + 1;
        this.cart.addQuantity(this.quantiy, this.id);
    }
    remove() {
        if (this.quantiy === 1) {
            this.quantiy = 0;
            this.cart.removeItem(this.id);
        }
        else {
            this.quantiy = this.quantiy - 1;
            this.cart.addQuantity(this.quantiy, this.id);
        }
    }
    getQuanity() {
        const data = this.cart.cart.filter(x => x.id === this.id);
        this.quantiy = data[0].quantiy;
        return data[0].quantiy;
    }
    ngOnInit() {
    }
    goToProductDetail(item) {
        this.id = item.id;
        this.name = '';
        this.loaded = false;
        this.getProduct();
    }
    scrollRighttopContent() {
        this.topContent.nativeElement.scrollLeft += 450;
    }
    scrollLefttopContent() {
        this.topContent.nativeElement.scrollLeft -= 450;
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], viewQuery: function ProductDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.topContent = _t.first);
    } }, decls: 15, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-md-6", "col-12", 2, "margin-top", "60px"], ["class", "carousel slide carousel-fade", 3, "type", "animation", 4, "ngIf"], ["class", "bottomBar", 4, "ngIf"], ["class", "details", 4, "ngIf"], ["class", "header_div2", 4, "ngIf"], ["class", "header_div", 4, "ngIf"], ["class", "topCates", 4, "ngIf"], ["class", "row", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row"], ["appearance", "circle", 3, "theme", 4, "ngFor", "ngForOf"], [1, "carousel", "slide", "carousel-fade", 3, "type", "animation"], [1, "coverImage", 3, "ngStyle"], ["src", "assets/imgs/veg.png", "class", "typeImg", 4, "ngIf"], ["src", "assets/imgs/non-veg.png", "class", "typeImg", 4, "ngIf"], ["src", "assets/imgs/veg.png", 1, "typeImg"], ["src", "assets/imgs/non-veg.png", 1, "typeImg"], [1, "bottomBar"], ["class", "galleryImg", 4, "ngFor", "ngForOf"], [1, "galleryImg"], [1, "img_div", 3, "ngClass", "ngStyle", "click"], [1, "details"], [1, "name"], ["class", "itemsKind", 4, "ngIf"], [4, "ngIf"], ["class", "variant", 4, "ngIf"], ["class", "addBtn", 4, "ngIf"], ["class", "abs_add", 4, "ngIf"], [1, "storeName", 3, "click"], [1, "itemsKind"], ["class", "price_lbl", 4, "ngIf"], [1, "price_lbl"], [1, "mrptag"], ["class", "original", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "redDB"], [1, "original"], [1, "sell"], [1, "variant"], ["placement", "bottom", "triggers", "manual", 1, "selecter", 3, "ngbPopover", "click"], ["p1", "ngbPopover"], ["fas", "", "icon", "angle-down"], ["popContent", ""], ["class", "normalItem", 3, "click", 4, "ngFor", "ngForOf"], [1, "normalItem", 3, "click"], [1, "addBtn"], [1, "ion-activatable", "ripple-parent", 3, "click"], [1, "abs_add"], ["src", "assets/imgs/remove.png", 3, "click"], ["src", "assets/imgs/add.png", 3, "click"], [1, "header_div2"], [1, "head_lbl"], [1, "smallLbl"], [1, "header_div"], [1, "topCates"], ["mdbBtn", "", "class", "arrowBtnsL", "floating", "true", "color", "light", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], [1, "sliders"], ["topContent", ""], ["class", "boxBold", 4, "ngFor", "ngForOf"], ["mdbBtn", "", "class", "arrowBtnsR", "floating", "true", "color", "light", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["mdbBtn", "", "floating", "true", "color", "light", "mdbWavesEffect", "", 1, "arrowBtnsL", 3, "click"], ["fas", "", "icon", "angle-left"], [1, "boxBold"], [1, "image_div", 3, "ngStyle", "click"], ["class", "percent", 4, "ngIf"], ["class", "notInStoke", 4, "ngIf"], ["src", "assets/imgs/veg.png", "class", "kind", "alt", "Veg", 4, "ngIf"], ["src", "assets/imgs/non.png", "class", "kind", "alt", "Non Veg", 4, "ngIf"], [1, "pro_name", 3, "click"], ["class", "price_lbl", 3, "click", 4, "ngIf"], [1, "percent"], [1, "notInStoke"], [1, "text"], ["src", "assets/imgs/veg.png", "alt", "Veg", 1, "kind"], ["src", "assets/imgs/non.png", "alt", "Non Veg", 1, "kind"], [1, "price_lbl", 3, "click"], ["mdbBtn", "", "floating", "true", "color", "light", "mdbWavesEffect", "", 1, "arrowBtnsR", 3, "click"], ["fas", "", "icon", "angle-right"], [1, "col-md-6", "col-12"], [3, "theme"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], ["appearance", "circle", 3, "theme"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_mdb_carousel_3_Template, 4, 7, "mdb-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailComponent_div_6_Template, 10, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailComponent_div_7_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailComponent_div_8_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductDetailComponent_div_9_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductDetailComponent_div_11_Template, 6, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailComponent_div_12_Template, 11, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductDetailComponent_ngx_skeleton_loader_14_Template, 1, 2, "ngx-skeleton-loader", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key_features && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disclaimer && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.related == null ? null : ctx.related.length) && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dummyTopProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopover"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".container[_ngcontent-%COMP%]   .coverImage[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 100%;\n  min-width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n  margin: 5px;\n  margin-top: 60px;\n}\n.container[_ngcontent-%COMP%]   .coverImage[_ngcontent-%COMP%]   .typeImg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 20px;\n  width: 20px;\n}\n.container[_ngcontent-%COMP%]   .bottomBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  overflow: scroll;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  overflow: auto;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n}\n.container[_ngcontent-%COMP%]   .bottomBar[_ngcontent-%COMP%]   .galleryImg[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%] {\n  border: 1px solid #157ed2;\n}\n.container[_ngcontent-%COMP%]   .bottomBar[_ngcontent-%COMP%]   .galleryImg[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  min-width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .bottomBar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 5px 0px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .itemsKind[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 5px 0px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .variant[_ngcontent-%COMP%]   .selecter[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n  width: 50%;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .normalItem[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 0px;\n  text-align: start;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .normalItem[_ngcontent-%COMP%]:hover {\n  color: #157ed2;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .mrptag[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: gray;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 15px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .redDB[_ngcontent-%COMP%] {\n  color: #157ed2;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .addBtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .addBtn[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #157ed2;\n  border-radius: 5px;\n  width: 100px;\n  text-align: center;\n  margin: 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #157ed2;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #FF8E80;\n  width: 25px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .storeName[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #48aff9;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .header_div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n.container[_ngcontent-%COMP%]   .header_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .header_div[_ngcontent-%COMP%]   .smallLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .header_div2[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n}\n.container[_ngcontent-%COMP%]   .header_div2[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.container[_ngcontent-%COMP%]   .header_div2[_ngcontent-%COMP%]   .smallLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .arrowBtnsL[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  border-radius: 50%;\n  line-height: 30px;\n  position: absolute;\n  top: 35%;\n  left: -15px;\n  z-index: 999;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .arrowBtnsR[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  border-radius: 50%;\n  line-height: 30px;\n  position: absolute;\n  top: 35%;\n  right: -15px;\n  z-index: 999;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  padding: 16px 0px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  overflow: auto;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .categoryIcon[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  text-align: center;\n  width: 100px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .categoryIcon[_ngcontent-%COMP%]   .imgs[_ngcontent-%COMP%] {\n  padding: 5px;\n  line-height: 80px;\n  height: 80px;\n  width: 80px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .categoryIcon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .categoryIcon[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  color: gray;\n  margin: 10px 0px;\n  white-space: pre-wrap;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px grey;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  min-width: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 5px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background: #48aff9;\n  left: 5px;\n  top: 2px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .notInStoke[_ngcontent-%COMP%] {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-align: left;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .pro_name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: gray;\n  margin: 0px;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .itemsKind[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  margin: 0px;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 11px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #48aff9;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #48aff9;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  margin: 0px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .boxBold[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #48aff9;\n  width: 25px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .offer_tag[_ngcontent-%COMP%] {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .off_lbl[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .isOpen[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_detail[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #48aff9;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #4af3d7;\n  width: 25px;\n}\n.container[_ngcontent-%COMP%]   .topCates[_ngcontent-%COMP%]   .sliders[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBTjtBRElFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES007RUFDRSx5QkFBQTtBQ0hSO0FETU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNKUjtBRFNFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUNQSjtBRFdJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDVE47QURZSTtFQUNFLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUNYTjtBRGVNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDYlI7QURpQkk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNmTjtBRGtCSTtFQUNFLGNBQUE7QUNoQk47QURtQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDakJOO0FEbUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2pCUjtBRG9CTTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ2xCUjtBRHFCTTtFQUNFLGlCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDcEJSO0FEdUJNO0VBQ0UsY0FBQTtBQ3JCUjtBRHlCSTtFQUNFLGVBQUE7QUN2Qk47QUR5Qk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7QUQ2Qkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzNCTjtBRDZCTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzNCUjtBRDhCTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzVCUjtBRGdDSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM5Qk47QURrQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQ2hDSjtBRGtDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2hDTjtBRG1DSTtFQUNFLGVBQUE7QUNqQ047QURxQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQ25DSjtBRHFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ25DTjtBRHNDSTtFQUNFLGVBQUE7QUNwQ047QUR3Q0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3RDSjtBRHdDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN0Q047QUR5Q0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDdkNOO0FEMENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN4Q047QUQwQ007RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3hDUjtBRDBDUTtFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUMxQ1Y7QUQ2Q1E7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDNUNWO0FEK0NRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUM3Q1Y7QURpRE07RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDL0NSO0FEaURRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMvQ1Y7QURpRFU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUMvQ1o7QURrRFU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNoRFo7QURtRFU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ2pEWjtBRHFEWTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ25EZDtBRHdEUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDdERWO0FEd0RVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN0RFo7QUR5RFU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDdkRaO0FEMERVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDeERaO0FEMERZO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3hEZDtBRDJEWTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ3pEZDtBRDREWTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUMxRGQ7QUQ4RFU7RUFJRSxnQkFBQTtBQy9EWjtBRGlFWTtFQUlFLGtCQUFBO0FDbEVkO0FEb0VjO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2xFaEI7QUR1RVU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDckVaO0FEdUVZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDckVkO0FEd0VZO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUN0RWQ7QUQ0RU07RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUMxRVI7QUQ0RVE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUMzRVY7QUQ2RVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUMzRVo7QUQ4RVU7RUFFRSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUM3RVo7QURnRlU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDOUVaO0FEZ0ZZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDOUVkO0FEaUZZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDL0VkO0FEa0ZZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDaEZkO0FEb0ZVO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDbEZaO0FEb0ZZO0VBQ0UsZUFBQTtFQUVBLGtCQUFBO0FDbkZkO0FEc0ZZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3BGZDtBRHVGWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3JGZDtBRHVGYztFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ3JGaEI7QUR3RmM7RUFDRSxpQkFBQTtBQ3RGaEI7QUR5RmM7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUN2RmhCO0FEMkZZO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUN6RmQ7QUQyRmM7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDekZoQjtBRDJGZ0I7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDekZsQjtBRDhGWTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzVGZDtBRDhGYztFQUNFLFlBQUE7RUFDQSxlQUFBO0FDNUZoQjtBRGdHYztFQUNFLGNBQUE7RUFDQSxXQUFBO0FDOUZoQjtBRHNHSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FDcEdOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAuY292ZXJJbWFnZSB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gICAgLnR5cGVJbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIH1cblxuICAuYm90dG9tQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKiBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgICAuZ2FsbGVyeUltZyB7XG4gICAgICAuYm9yZGVyZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTU3ZWQyO1xuICAgICAgfVxuXG4gICAgICAuaW1nX2RpdiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbUJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICAubmFtZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB9XG5cbiAgICAuaXRlbXNLaW5kIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgfVxuXG4gICAgLnZhcmlhbnQge1xuICAgICAgLnNlbGVjdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vcm1hbEl0ZW0ge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5ub3JtYWxJdGVtOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMTU3ZWQyO1xuICAgIH1cblxuICAgIC5wcmljZV9sYmwge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIG1hcmdpbjogNXB4O1xuXG4gICAgICAubXJwdGFnIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5vcmlnaW5hbCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5kaWNvdW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLnJlZERCIHtcbiAgICAgICAgY29sb3I6ICMxNTdlZDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFkZEJ0biB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRcblxuICAgIC5hYnNfYWRkIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxNTdlZDI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdG9yZU5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzQ4YWZmOTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyX2RpdiB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgLmhlYWRfbGJsIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnNtYWxsTGJsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyX2RpdjIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgIC5oZWFkX2xibCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zbWFsbExibCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLnRvcENhdGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFycm93QnRuc0wge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzUlO1xuICAgICAgbGVmdDogLTE1cHg7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuXG4gICAgLmFycm93QnRuc1Ige1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzUlO1xuICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cblxuICAgIC5zbGlkZXJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cbiAgICAgIC5jYXRlZ29yeUljb24ge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG5cbiAgICAgICAgLmltZ3Mge1xuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgLy8gaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3hCb2xkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCBncmV5O1xuICAgICAgICBtYXJnaW46IDVweDtcblxuICAgICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIC5raW5kIHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wZXJjZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ4YWZmOTtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm90SW5TdG9rZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAgIC5wcm9fbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLml0ZW1zS2luZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNlX2xibCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICAgICAgLm9yaWdpbmFsIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxsIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGljb3VudCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbWFsbF9mbGV4IHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAuYnRuQnRtIHtcbiAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDhhZmY5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hYnNfYWRkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ4YWZmOTtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDhhZmY5O1xuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5jYXJkX2RpdiB7XG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgLm9mZmVyX3RhZyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub2ZmX2xibCB7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG5cbiAgICAgICAgICAgIC5raW5kIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzT3BlbiB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVzY19kaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgICAgICAucHJvX25hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvX2RldGFpbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaWNlX2xibCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcblxuICAgICAgICAgICAgICAub3JpZ2luYWwge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zZWxsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kaWNvdW50IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsX2ZsZXgge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgICAgLmJ0bkJ0bSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYnNfYWRkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDhhZmY5O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0YWYzZDc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2xpZGVyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG59IiwiLmNvbnRhaW5lciAuY292ZXJJbWFnZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLmNvbnRhaW5lciAuY292ZXJJbWFnZSAudHlwZUltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5jb250YWluZXIgLmJvdHRvbUJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uY29udGFpbmVyIC5ib3R0b21CYXIgLmdhbGxlcnlJbWcgLmJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE1N2VkMjtcbn1cbi5jb250YWluZXIgLmJvdHRvbUJhciAuZ2FsbGVyeUltZyAuaW1nX2RpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5ib3R0b21CYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuaXRlbXNLaW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAubm9ybWFsSXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5vcm1hbEl0ZW06aG92ZXIge1xuICBjb2xvcjogIzE1N2VkMjtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcmljZV9sYmwgLm1ycHRhZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcmljZV9sYmwgLnJlZERCIHtcbiAgY29sb3I6ICMxNTdlZDI7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5hZGRCdG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5hZGRCdG4gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMTU3ZWQyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzE1N2VkMjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5hYnNfYWRkIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuc3RvcmVOYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDhhZmY5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGFpbmVyIC5oZWFkZXJfZGl2IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY29udGFpbmVyIC5oZWFkZXJfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250YWluZXIgLmhlYWRlcl9kaXYgLnNtYWxsTGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyX2RpdjIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb250YWluZXIgLmhlYWRlcl9kaXYyIC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250YWluZXIgLmhlYWRlcl9kaXYyIC5zbWFsbExibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLmFycm93QnRuc0wge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IC0xNXB4O1xuICB6LWluZGV4OiA5OTk7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuYXJyb3dCdG5zUiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgcmlnaHQ6IC0xNXB4O1xuICB6LWluZGV4OiA5OTk7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNhdGVnb3J5SWNvbiAuaW1ncyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jYXRlZ29yeUljb24gLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jYXRlZ29yeUljb24gLm5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IGdyZXk7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuYm94Qm9sZCAuaW1hZ2VfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5pbWFnZV9kaXYgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM0OGFmZjk7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmltYWdlX2RpdiAubm90SW5TdG9rZSB7XG4gIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmltYWdlX2RpdiAubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmRldGFpbHMgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmRldGFpbHMgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuYm94Qm9sZCAuZGV0YWlscyAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuYm94Qm9sZCAuZGV0YWlscyAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmRldGFpbHMgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5kZXRhaWxzIC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5kZXRhaWxzIC5zbWFsbF9mbGV4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5kZXRhaWxzIC5zbWFsbF9mbGV4IC5idG5CdG0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuYm94Qm9sZCAuZGV0YWlscyAuc21hbGxfZmxleCAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzQ4YWZmOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmRldGFpbHMgLmFic19hZGQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzQ4YWZmOTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmJveEJvbGQgLmRldGFpbHMgLmFic19hZGQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5ib3hCb2xkIC5kZXRhaWxzIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjNDhhZmY5O1xuICB3aWR0aDogMjVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9mZmVyX3RhZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZfbGJsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6IDRweDtcbiAgbGVmdDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAuaXNPcGVuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX2RldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC50b3BDYXRlcyAuc2xpZGVycyAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDhhZmY5O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5jb250YWluZXIgLnRvcENhdGVzIC5zbGlkZXJzIC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnMgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICM0YWYzZDc7XG4gIHdpZHRoOiAyNXB4O1xufVxuLmNvbnRhaW5lciAudG9wQ2F0ZXMgLnNsaWRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }, { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }]; }, { topContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['topContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/product-detail/product-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/components/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/









class ProductDetailModule {
}
ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDetailModule });
ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDetailModule_Factory(t) { return new (t || ProductDetailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailModule, { declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-product-detail-product-detail-module-es2015.js.map