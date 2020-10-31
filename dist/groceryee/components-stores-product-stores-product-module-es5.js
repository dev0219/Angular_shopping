function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-stores-product-stores-product-module"], {
  /***/
  "./src/app/components/stores-product/stores-product-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/stores-product/stores-product-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: StoresProductRoutingModule */

  /***/
  function srcAppComponentsStoresProductStoresProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoresProductRoutingModule", function () {
      return StoresProductRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _stores_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stores-product.component */
    "./src/app/components/stores-product/stores-product.component.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _stores_product_component__WEBPACK_IMPORTED_MODULE_2__["StoresProductComponent"]
    }];

    var StoresProductRoutingModule = function StoresProductRoutingModule() {
      _classCallCheck(this, StoresProductRoutingModule);
    };

    StoresProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoresProductRoutingModule
    });
    StoresProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoresProductRoutingModule_Factory(t) {
        return new (t || StoresProductRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoresProductRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/stores-product/stores-product.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/stores-product/stores-product.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StoresProductComponent */

  /***/
  function srcAppComponentsStoresProductStoresProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoresProductComponent", function () {
      return StoresProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");

    function StoresProductComponent_div_21_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.discount, "% ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1219.util.getString("Out of Stoke"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
      }
    }

    function StoresProductComponent_div_21_div_1_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
      }
    }

    function StoresProductComponent_div_21_div_1_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_7_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].price ? product_r1216.variations[0].items[product_r1216.variant].price : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount ? product_r1216.variations[0].items[product_r1216.variant].discount : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_7_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].price ? product_r1216.variations[0].items[product_r1216.variant].price : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_10_span_7_span_2_Template, 2, 1, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_10_span_7_span_3_Template, 2, 1, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_div_10_span_7_span_4_Template, 2, 1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1230.util.currecny, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount === 0 && !product_r1216.variations[0].items[product_r1216.variant].discount);
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].price ? product_r1216.variations[0].items[product_r1216.variant].price : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_8_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount ? product_r1216.variations[0].items[product_r1216.variant].discount : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_8_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].price ? product_r1216.variations[0].items[product_r1216.variant].price : 0, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_div_10_span_8_span_1_Template, 2, 1, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_10_span_8_span_2_Template, 2, 1, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_10_span_8_span_3_Template, 2, 1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].discount === 0 && !product_r1216.variations[0].items[product_r1216.variant].discount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1231.util.currecny, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r1252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1252.util.currecny, " ", option_r1250.price, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r1253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1250.price, " ", ctx_r1253.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1257.util.currecny, " ", option_r1250.price, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1258.util.currecny, " ", option_r1250.discount, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1250.price, " ", ctx_r1259.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1250.discount, " ", ctx_r1260.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_1_Template, 2, 2, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_2_Template, 2, 2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_3_Template, 2, 2, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_span_4_Template, 2, 2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1254.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1254.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1254.util.cside === "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1254.util.cside === "right");
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r1267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1267);

          var ix_r1251 = ctx.index;

          var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          return product_r1216.variant = ix_r1251;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_2_Template, 2, 2, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_3_Template, 2, 2, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_span_4_Template, 5, 4, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1250 = ctx.$implicit;

        var ctx_r1249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1250.title, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1250.discount === 0 && ctx_r1249.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1250.discount === 0 && ctx_r1249.util.cside === "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1250.discount !== 0);
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoresProductComponent_div_21_div_1_div_10_ng_template_10_div_0_Template, 5, 4, "div", 49);
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r1216.variations[0].items);
      }
    }

    function StoresProductComponent_div_21_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_div_10_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1270);

          var _r1229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r1229.open();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoresProductComponent_div_21_div_1_div_10_span_7_Template, 5, 4, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StoresProductComponent_div_21_div_1_div_10_span_8_Template, 5, 4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoresProductComponent_div_21_div_1_div_10_ng_template_10_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r1223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r1232);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.variations && product_r1216.variations[0] && product_r1216.variations[0].items[product_r1216.variant] && product_r1216.variations[0].items[product_r1216.variant].title ? product_r1216.variations[0].items[product_r1216.variant].title : "", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1223.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1223.util.cside === "right");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.gram, " ", ctx_r1272.util.getString("grams"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.kg, " ", ctx_r1273.util.getString("kg"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.liter, " ", ctx_r1274.util.getString("ltr"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.ml, " ", ctx_r1275.util.getString("ml"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.pcs, " ", ctx_r1276.util.getString("pcs"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_p_11_span_1_Template, 2, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_p_11_span_2_Template, 2, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_p_11_span_3_Template, 2, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_p_11_span_4_Template, 2, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoresProductComponent_div_21_div_1_p_11_span_5_Template, 2, 2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.have_gram === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.have_kg === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.have_liter === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.have_ml === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.have_pcs === "1");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1283.util.currecny, " ", product_r1216.original_price, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r1284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.original_price, " ", ctx_r1284.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r1288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1288.util.currecny, " ", product_r1216.original_price, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_3_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r1289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1289.util.currecny, " ", product_r1216.sell_price, " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_3_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r1290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.original_price, " ", ctx_r1290.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_3_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r1291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", product_r1216.sell_price, " ", ctx_r1291.util.currecny, "");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_div_12_p_3_span_1_Template, 2, 2, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_12_p_3_span_2_Template, 2, 2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_12_p_3_span_3_Template, 2, 2, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_div_12_p_3_span_4_Template, 2, 2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1285.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1285.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1285.util.cside === "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1285.util.cside === "right");
      }
    }

    function StoresProductComponent_div_21_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_div_12_p_1_Template, 2, 2, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_12_p_2_Template, 2, 2, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_12_p_3_Template, 5, 4, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r1225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.discount === "0" && ctx_r1225.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.discount === "0" && ctx_r1225.util.cside === "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.discount !== "0");
      }
    }

    function StoresProductComponent_div_21_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r1299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_div_13_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1299);

          var ctx_r1298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var product_r1216 = ctx_r1298.$implicit;
          var i_r1217 = ctx_r1298.index;

          var ctx_r1297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1297.addToCart(product_r1216, i_r1217);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1226.util.getString("Add"), " ");
      }
    }

    function StoresProductComponent_div_21_div_1_div_14_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1216.quantiy);
      }
    }

    function StoresProductComponent_div_21_div_1_div_14_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
      }
    }

    function StoresProductComponent_div_21_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r1305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_div_14_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1305);

          var ctx_r1304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var product_r1216 = ctx_r1304.$implicit;
          var i_r1217 = ctx_r1304.index;

          var ctx_r1303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1303.remove(product_r1216, i_r1217);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_14_p_3_Template, 2, 1, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_div_14_p_4_Template, 1, 0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_div_14_Template_img_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1305);

          var ctx_r1307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var product_r1216 = ctx_r1307.$implicit;
          var i_r1217 = ctx_r1307.index;

          var ctx_r1306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1306.add(product_r1216, i_r1217);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.quantiy !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.quantiy === 0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function StoresProductComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r1310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1310);

          var product_r1216 = ctx.$implicit;

          var ctx_r1309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1309.singleProduct(product_r1216);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoresProductComponent_div_21_div_1_div_2_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoresProductComponent_div_21_div_1_div_3_Template, 3, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoresProductComponent_div_21_div_1_img_4_Template, 1, 0, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoresProductComponent_div_21_div_1_img_5_Template, 1, 0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoresProductComponent_div_21_div_1_img_6_Template, 1, 0, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_21_div_1_Template_p_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1310);

          var product_r1216 = ctx.$implicit;

          var ctx_r1311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1311.singleProduct(product_r1216);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoresProductComponent_div_21_div_1_div_10_Template, 12, 4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StoresProductComponent_div_21_div_1_p_11_Template, 6, 5, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StoresProductComponent_div_21_div_1_div_12_Template, 4, 3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StoresProductComponent_div_21_div_1_div_13_Template, 3, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StoresProductComponent_div_21_div_1_div_14_Template, 6, 2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1216 = ctx.$implicit;

        var ctx_r1215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "url(" + ctx_r1215.api.mediaURL + product_r1216.cover + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.discount !== "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.in_stoke === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.kind === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.kind === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.in_offer === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1216.name.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, product_r1216.name, 0, 20) + ".." : product_r1216.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.size === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.size === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1216.size === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1215.cart.itemId.includes(product_r1216.id) && product_r1216.quantiy <= 0 && product_r1216.in_stoke === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1215.cart.itemId.includes(product_r1216.id));
      }
    }

    function StoresProductComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_21_div_1_Template, 15, 18, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1211.products);
      }
    }

    function StoresProductComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r1313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresProductComponent_div_22_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1313);

          var ctx_r1312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1312.loadData();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1212.util.getString("Show more"), " ");
      }
    }

    function StoresProductComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return {
        "border-radius": "5px",
        height: "120px",
        width: "120px"
      };
    };

    function StoresProductComponent_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function StoresProductComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoresProductComponent_div_24_div_1_Template, 2, 2, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1214.dummyTopProducts);
      }
    }

    var StoresProductComponent =
    /*#__PURE__*/
    function () {
      function StoresProductComponent(api, util, cart, router, route, navCtrl) {
        var _this = this;

        _classCallCheck(this, StoresProductComponent);

        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.products = [];
        this.dummyTopProducts = [];
        this.filter = '1';
        this.mode = 'grid';
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;
            _this.limit = 1;
            _this.loaded = false;
            _this.name = data.name;
            _this.dummyTopProducts = Array(30);

            _this.getOffers();
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(StoresProductComponent, [{
        key: "getOffers",
        value: function getOffers() {
          var _this2 = this;

          var param = {
            id: this.id,
            limit: this.limit * 12
          };
          this.api.post('products/getProductByStores', param).subscribe(function (data) {
            console.log('top products', data);
            _this2.maxLimit = _this2.limit * 12 - 1;
            _this2.dummyTopProducts = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              data.data.forEach(function (element) {
                if (element.variations && element.size === '1' && element.variations !== '') {
                  if (function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(element.status)) {
                    element.variations = JSON.parse(element.variations);
                    element['variant'] = 0;
                  } else {
                    element.variations = [];
                    element['variant'] = 1;
                  }
                } else {
                  element.variations = [];
                  element['variant'] = 1;
                }

                if (_this2.cart.itemId.includes(element.id)) {
                  var index = _this2.cart.cart.filter(function (x) {
                    return x.id === element.id;
                  });

                  element['quantiy'] = index[0].quantiy;
                } else {
                  element['quantiy'] = 0;
                }

                _this2.products.push(element);
              });

              if (_this2.loaded) {
                _this2.loaded = false;
              }
            } else {
              _this2.navCtrl.back();
            }
          }, function (error) {
            console.log(error);
            _this2.dummyTopProducts = [];
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeMode",
        value: function changeMode() {
          this.mode = this.mode === 'grid' ? 'list' : 'grid';
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          console.log(value, this.filter);

          switch (this.filter) {
            case '1':
              console.log('its rating'); // this.products = this.products.sort((a, b) => parseInt(b.total_rating) - parseInt(a.total_rating));

              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1 : parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0;
              });
              break;

            case '2':
              console.log('its low to high');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(a.original_price) < parseFloat(b.original_price) ? -1 : parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0;
              });
              break;

            case '3':
              console.log('its highht to low');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.original_price) < parseFloat(a.original_price) ? -1 : parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0;
              });
              break;

            case '4':
              console.log('its a - z');
              this.products = this.products.sort(function (a, b) {
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
              this.products = this.products.sort(function (a, b) {
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
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.discount) < parseFloat(a.discount) ? -1 : parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0;
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "singleProduct",
        value: function singleProduct(item) {
          console.log('-->', item);
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['product-detail'], param);
        }
      }, {
        key: "addToCart",
        value: function addToCart(item, index) {
          console.log(item);
          this.products[index].quantiy = 1;
          this.cart.addItem(item);
        }
      }, {
        key: "add",
        value: function add(product, index) {
          console.log(product);

          if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "remove",
        value: function remove(product, index) {
          console.log(product, index);

          if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
          } else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "loadData",
        value: function loadData() {
          this.limit = this.limit + 1;
          this.loaded = true;
          this.getOffers();
        }
      }]);

      return StoresProductComponent;
    }();

    StoresProductComponent.ɵfac = function StoresProductComponent_Factory(t) {
      return new (t || StoresProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    StoresProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoresProductComponent,
      selectors: [["app-stores-product"]],
      decls: 25,
      vars: 12,
      consts: [[1, "container"], ["content", ""], [2, "padding-bottom", "100px"], [1, "flexer"], [1, "storename"], [1, "flexerr"], [1, "selecltItem", 3, "ngModel", "ngModelChange", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["class", "row", 4, "ngIf"], ["class", "centerItem", 3, "click", 4, "ngIf"], ["class", "centerItem", 4, "ngIf"], ["class", "row", "style", "overflow: hidden;", 4, "ngIf"], [1, "row"], ["class", "col-6 col-md-3 boxs", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-3", "boxs"], [1, "productimage", 3, "ngStyle", "click"], ["class", "percent", 4, "ngIf"], ["class", "notInStoke", 4, "ngIf"], ["src", "assets/imgs/veg.png", "class", "kind", "alt", "Veg", 4, "ngIf"], ["src", "assets/imgs/non.png", "class", "kind", "alt", "Non Veg", 4, "ngIf"], ["src", "assets/imgs/offer.png", "class", "offer", "alt", "Offer", 4, "ngIf"], [1, "producttext", 3, "click"], ["class", "variant", 4, "ngIf"], ["class", "itemsKind", 4, "ngIf"], [4, "ngIf"], ["class", "btnBtm", 4, "ngIf"], ["class", "cartBtn", 4, "ngIf"], [1, "percent"], [1, "notInStoke"], [1, "text"], ["src", "assets/imgs/veg.png", "alt", "Veg", 1, "kind"], ["src", "assets/imgs/non.png", "alt", "Non Veg", 1, "kind"], ["src", "assets/imgs/offer.png", "alt", "Offer", 1, "offer"], [1, "variant"], ["placement", "bottom", "triggers", "manual", 1, "selecter", 3, "ngbPopover", "click"], ["p1", "ngbPopover"], ["class", "price_lbl", 4, "ngIf"], ["fas", "", "icon", "angle-down"], ["popContent", ""], [1, "price_lbl"], ["class", "original", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "original"], [1, "sell"], ["class", "normalItem", 3, "click", 4, "ngFor", "ngForOf"], [1, "normalItem", 3, "click"], [1, "itemsKind"], [1, "btnBtm"], [1, "ion-activatable", "ripple-parent", 3, "click"], [1, "cartBtn"], [1, "abs_add"], ["src", "assets/imgs/remove.png", 3, "click"], ["src", "assets/imgs/add.png", 3, "click"], [1, "centerItem", 3, "click"], [1, "loadMore"], [1, "centerItem"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "row", 2, "overflow", "hidden"], ["class", "col-4 col-md-2", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2"], [3, "theme"]],
      template: function StoresProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoresProductComponent_Template_select_ngModelChange_8_listener($event) {
            return ctx.filter = $event;
          })("change", function StoresProductComponent_Template_select_change_8_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StoresProductComponent_div_21_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StoresProductComponent_div_22_Template, 3, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StoresProductComponent_div_23_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StoresProductComponent_div_24_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxLimit < ctx.products.length && ctx.loaded === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dummyTopProducts == null ? null : ctx.dummyTopProducts.length);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopover"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["FasDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__["NgxSkeletonLoaderComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
      styles: ["@charset \"UTF-8\";\n\n.mnu-selected[_ngcontent-%COMP%] {\n  border-left: 3px solid #45C261 !important;\n  color: #45C261 !important;\n}\nion-label[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.boxs[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n}\n.flexer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.flexer[_ngcontent-%COMP%]   .storename[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.flexerr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n.flexerr[_ngcontent-%COMP%]   .selecltItem[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 5px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.centerItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.centerItem[_ngcontent-%COMP%]   .loadMore[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #45C261;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.product[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 2px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.coverimage[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.menutext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: block;\n}\n.menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.productimage[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 100%;\n  margin: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-width: 100%;\n  position: relative;\n}\n.producttext[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin: 0px;\n  margin-top: 5px;\n}\n.itemsKind[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n  margin: 0px;\n}\n.variant[_ngcontent-%COMP%]   .selecter[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.normalItem[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 0px;\n  text-align: start;\n  cursor: pointer;\n}\n.normalItem[_ngcontent-%COMP%]:hover {\n  color: #45C261;\n}\n.kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.offer[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.percent[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 8px;\n  color: white;\n}\n.notInStoke[_ngcontent-%COMP%] {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 2px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 12px;\n  margin: 0px;\n}\n.price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.btnBtm[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n}\n.btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 5px;\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 14px;\n}\n.cartBtn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #45C261;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  margin: 0px;\n}\n.cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #FF8E80;\n  width: 25px;\n  cursor: pointer;\n}\n.textconten[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-top: 5%;\n}\n.toolbartop[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n.menu-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.menu-content[_ngcontent-%COMP%]   .side_col[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n}\n.text_head[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n}\n.brand[_ngcontent-%COMP%] {\n  background-color: #ededed;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .menutext[_ngcontent-%COMP%] {\n    font-size: 8px;\n    display: block;\n  }\n  .menutext[_ngcontent-%COMP%]   .icon-menu[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n  }\n\n  .productimage[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 100%;\n    margin: auto;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-width: 100%;\n    position: relative;\n  }\n\n  .producttext[_ngcontent-%COMP%] {\n    font-size: 11px;\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    margin-top: 5px;\n  }\n\n  .itemsKind[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 10px;\n  }\n\n  .kind[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    position: absolute;\n    right: 20px;\n    top: 5px;\n  }\n\n  .percent[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background: red;\n    left: 5px;\n    top: 2px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-weight: bold;\n    font-size: 8px;\n    color: white;\n  }\n\n  .notInStoke[_ngcontent-%COMP%] {\n    background: #8373735c;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 90%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n  }\n  .notInStoke[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    padding: 2px;\n    border-radius: 5px;\n    background: white;\n    color: gray;\n    font-size: 10px;\n  }\n\n  .price_lbl[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 8px;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .btnBtm[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    cursor: pointer;\n  }\n  .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    padding: 5px;\n    color: white;\n    background: #f27474;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 10px;\n  }\n\n  .cartBtn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n    width: 100px;\n    background: #45C261;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 3px;\n    padding-right: 3px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 10px;\n  }\n  .cartBtn[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    color: #FF8E80;\n    width: 25px;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZXMtcHJvZHVjdC9zdG9yZXMtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZXMtcHJvZHVjdC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9yZXMtcHJvZHVjdFxcc3RvcmVzLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FERUY7QUNBQTtFQUNFLHlCQUFBO0FER0Y7QUNEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QURJRjtBQ0ZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBREtGO0FDSkU7RUFDRSxpQkFBQTtBRE1KO0FDSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FETUY7QUNMRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FET0o7QUNIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURNRjtBQ0xFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRE9KO0FDSkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURPRjtBQ0xBO0VBQ0UsaUJBQUE7QURRRjtBQ05BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURTRjtBQ1JFO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURVTjtBQ1BBO0VBQ0UsYUFBQTtF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QUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUQwQ047O0VDdkNGO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RUQwQ0Y7RUN6Q0U7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUQyQ047RUN6Q007SUFDSSxZQUFBO0lBQ0EsZUFBQTtFRDJDVjtFQ3ZDTTtJQUNJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFRHlDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZXMtcHJvZHVjdC9zdG9yZXMtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubW51LXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNDVDMjYxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDVDMjYxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmZsZXhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mbGV4ZXIgLnN0b3JlbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmxleGVyciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleGVyciAuc2VsZWNsdEl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNlbnRlckl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jZW50ZXJJdGVtIC5sb2FkTW9yZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QzI2MTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uY292ZXJpbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ucHJvZHVjdGltYWdlIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubm9ybWFsSXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vcm1hbEl0ZW06aG92ZXIge1xuICBjb2xvcjogIzQ1QzI2MTtcbn1cblxuLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4ub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcnRCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2FydEJ0biAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5jYXJ0QnRuIC5hYnNfYWRkIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHRjb250ZW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4udG9vbGJhcnRvcCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51LWNvbnRlbnQgLnNpZGVfY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRleHRfaGVhZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnJhbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuXG4vKiBpcGhvbmUgNiwgNnMsIDcsIDggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NjdweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5vdEluU3Rva2UgLnRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAucHJpY2VfbGJsIC5zZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2FydEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLyogaXBob25lIDYrLCA2cyssIDcrLCA4KyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubm90SW5TdG9rZSAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5wcmljZV9sYmwgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcmljZV9sYmwgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gICAgY29sb3I6ICNGRjhFODA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4vKiBpcGhvbmUgWCAsIFhTLCAxMSBQcm8gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWVudXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51dGV4dCAuaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdGltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9kdWN0dGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAua2luZCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLm9mZmVyIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgLnBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ub3RJblN0b2tlIHtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5vdEluU3Rva2UgLnRleHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAucHJpY2VfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAucHJpY2VfbGJsIC5zZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG5CdG0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuY2FydEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLyogaXBob25lIFhSLCAxMSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tZW51dGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV0ZXh0IC5pY29uLW1lbnUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5wcm9kdWN0aW1hZ2Uge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2R1Y3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuaXRlbXNLaW5kIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5raW5kIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAub2ZmZXIge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA1cHg7XG4gIH1cblxuICAucGVyY2VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm5vdEluU3Rva2Uge1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubm90SW5TdG9rZSAudGV4dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5wcmljZV9sYmwgLnNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcmljZV9sYmwgLmRpY291bnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bkJ0bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5jYXJ0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gICAgY29sb3I6ICNGRjhFODA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4vKiBpcGhvbmUgWFMgTWF4LCAxMSBQcm8gTWF4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1lbnV0ZXh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXRleHQgLmljb24tbWVudSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucHJvZHVjdHRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5pdGVtc0tpbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmtpbmQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5vZmZlciB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxuXG4gIC5wZXJjZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90SW5TdG9rZSB7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLnByaWNlX2xibCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnByaWNlX2xibCAuc2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnByaWNlX2xibCAuZGljb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYnRuQnRtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNhcnRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgfVxuICAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1udS1zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzQ1QzI2MSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ1QzI2MSAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5ib3hze1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLmZsZXhlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAuc3RvcmVuYW1le1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4uZmxleGVycntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLnNlbGVjbHRJdGVte1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG59XG4uY2VudGVySXRlbXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5sb2FkTW9yZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QzI2MTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLmNvdmVyaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pdGVtc0tpbmR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udmFyaWFudHtcbiAgICAuc2VsZWN0ZXJ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cbi5ub3JtYWxJdGVte1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm9ybWFsSXRlbTpob3ZlcntcbiAgY29sb3I6ICM0NUMyNjE7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLmFic19hZGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRleHRjb250ZW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4udG9vbGJhcnRvcCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuXG4ubWVudS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBvdmVyZmxvdzogYXV0bztcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgLnNpZGVfY29se1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxufVxuXG4udGV4dF9oZWFke1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJyYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuXG5cbi8qIGlwaG9uZSA2LCA2cywgNywgOCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW1zS2luZHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmtpbmR7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ub2ZmZXJ7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm90SW5TdG9rZXtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLnRleHR7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4ucHJpY2VfbGJse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuYWJzX2FkZHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuLyogaXBob25lIDYrLCA2cyssIDcrLCA4KyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5wcm9kdWN0aW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW1zS2luZHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmtpbmR7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ub2ZmZXJ7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm90SW5TdG9rZXtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLnRleHR7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4ucHJpY2VfbGJse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4uY2FydEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuYWJzX2FkZHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuIH1cblxuLyogaXBob25lIFggLCBYUywgMTEgUHJvICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbi5tZW51dGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmljb24tbWVudSB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgfVxufVxuLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaXRlbXNLaW5ke1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICAub3JpZ2luYWx7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuc2VsbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kaWNvdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4gLmJ0bkJ0bXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5jYXJ0QnRue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hYnNfYWRke1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG59XG5cbi8qIGlwaG9uZSBYUiwgMTEgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodCA6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMikge1xuLm1lbnV0ZXh0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAuaWNvbi1tZW51IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG4ucHJvZHVjdGltYWdlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3R0ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pdGVtc0tpbmR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5raW5ke1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm9mZmVye1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnBlcmNlbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm5vdEluU3Rva2V7XG4gICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC50ZXh0e1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLnByaWNlX2xibHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIC5vcmlnaW5hbHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICAgIC5zZWxse1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmRpY291bnR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbiAuYnRuQnRte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLmNhcnRCdG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLmFic19hZGR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuLyogaXBob25lIFhTIE1heCwgMTEgUHJvIE1heCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0IDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pY29uLW1lbnUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbiAgLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaXRlbXNLaW5ke1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ua2luZHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5vZmZlcntcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RJblN0b2tle1xuICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAudGV4dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5wcmljZV9sYmx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICAub3JpZ2luYWx7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuc2VsbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kaWNvdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4gLmJ0bkJ0bXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5jYXJ0QnRue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hYnNfYWRke1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stores-product',
          templateUrl: './stores-product.component.html',
          styleUrls: ['./stores-product.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/stores-product/stores-product.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/stores-product/stores-product.module.ts ***!
    \********************************************************************/

  /*! exports provided: StoresProductModule */

  /***/
  function srcAppComponentsStoresProductStoresProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoresProductModule", function () {
      return StoresProductModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _stores_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stores-product-routing.module */
    "./src/app/components/stores-product/stores-product-routing.module.ts");
    /* harmony import */


    var _stores_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stores-product.component */
    "./src/app/components/stores-product/stores-product.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StoresProductModule = function StoresProductModule() {
      _classCallCheck(this, StoresProductModule);
    };

    StoresProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoresProductModule
    });
    StoresProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoresProductModule_Factory(t) {
        return new (t || StoresProductModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _stores_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoresProductRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoresProductModule, {
        declarations: [_stores_product_component__WEBPACK_IMPORTED_MODULE_3__["StoresProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _stores_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoresProductRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_stores_product_component__WEBPACK_IMPORTED_MODULE_3__["StoresProductComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _stores_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoresProductRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-stores-product-stores-product-module-es5.js.map