function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-order-detail-order-detail-module"], {
  /***/
  "./src/app/components/order-detail/order-detail-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/order-detail/order-detail-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: OrderDetailRoutingModule */

  /***/
  function srcAppComponentsOrderDetailOrderDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailRoutingModule", function () {
      return OrderDetailRoutingModule;
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


    var _order_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order-detail.component */
    "./src/app/components/order-detail/order-detail.component.ts");
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
      component: _order_detail_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailComponent"]
    }];

    var OrderDetailRoutingModule = function OrderDetailRoutingModule() {
      _classCallCheck(this, OrderDetailRoutingModule);
    };

    OrderDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderDetailRoutingModule
    });
    OrderDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderDetailRoutingModule_Factory(t) {
        return new (t || OrderDetailRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderDetailRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailRoutingModule, [{
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
  "./src/app/components/order-detail/order-detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/order-detail/order-detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderDetailComponent */

  /***/
  function srcAppComponentsOrderDetailOrderDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function () {
      return OrderDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    function OrderDetailComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.gram, " grams ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.kg, " kg ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.liter, " ltr ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.ml, " ml");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.pcs, " pcs ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r565.util.currecny, " ", order_r555.discount === "0" ? order_r555.original_price : order_r555.sell_price, " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.discount === "0" ? order_r555.original_price : order_r555.sell_price, " ", ctx_r566.util.currecny, " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_2_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_3_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_4_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_5_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_6_Template, 2, 1, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_7_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_span_8_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r555.name, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_gram === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_kg === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_liter === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_ml === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_pcs === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r557.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r557.util.cside === "right");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.gram, " ", ctx_r575.util.getString("grams"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r576 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.kg, " ", ctx_r576.util.getString("kg"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.liter, " ", ctx_r577.util.getString("ltr"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r578 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.ml, " ", ctx_r578.util.getString("ml"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r579 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", order_r555.pcs, " ", ctx_r579.util.getString("pcs"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_2_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_3_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_4_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_5_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_span_6_Template, 2, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r555.name, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_gram === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_kg === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_liter === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_ml === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.have_pcs === "1");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.name, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r555.variations[0].items[order_r555.variant].title, " ");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailComponent_div_6_div_4_div_1_p_6_span_1_Template, 9, 8, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailComponent_div_6_div_4_div_1_p_6_span_2_Template, 7, 6, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDetailComponent_div_6_div_4_div_1_p_6_span_3_Template, 4, 2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r555 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !order_r555.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.size === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r555.size === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", order_r555.quantiy, "");
      }
    }

    function OrderDetailComponent_div_6_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailComponent_div_6_div_4_div_1_p_6_Template, 6, 4, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r553 = ctx.$implicit;

        var ctx_r552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r552.getStoreName(item_r553.id), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r552.getOrderStatus(item_r553.id), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r553.order);
      }
    }

    function OrderDetailComponent_div_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailComponent_div_6_div_4_div_1_Template, 7, 3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r545 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r545.orders);
      }
    }

    function OrderDetailComponent_div_6_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mdb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r546.address, " ");
      }
    }

    function OrderDetailComponent_div_6_span_32_mdb_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mdb-icon", 34);
      }
    }

    function OrderDetailComponent_div_6_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailComponent_div_6_span_32_mdb_icon_2_Template, 1, 0, "mdb-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r587 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("line_div_darkgray", item_r587.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r587.status === 1);
      }
    }

    function OrderDetailComponent_div_6_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r589 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("round_div_red", item_r589.status === 1)("round_div_darkgray", item_r589.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r589.time, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("round_div_red", item_r589.status === 1)("round_div_darkgray", item_r589.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r589.value, " ");
      }
    }

    function OrderDetailComponent_div_6_p_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r549.util.getString("Driver Informations"), " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function OrderDetailComponent_div_6_div_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r593 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailComponent_div_6_div_36_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r593);

          var item_r591 = ctx.$implicit;

          var ctx_r592 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r592.contanctDriver(item_r591);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mdb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r591 = ctx.$implicit;

        var ctx_r590 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx_r590.api.mediaURL + item_r591.cover + "),url(assets/imgs/closed.png)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r591.first_name, " ", item_r591.last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r591.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r591.mobile, " ");
      }
    }

    function OrderDetailComponent_div_6_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailComponent_div_6_div_36_div_1_Template, 11, 7, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r550.driverInfo);
      }
    }

    function OrderDetailComponent_div_6_div_37_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r594 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r594.util.getString("Stores Informations"), " ");
      }
    }

    function OrderDetailComponent_div_6_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r598 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailComponent_div_6_div_37_div_2_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r598);

          var item_r596 = ctx.$implicit;

          var ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r597.contanct(item_r596);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mdb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mdb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r596 = ctx.$implicit;

        var ctx_r595 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + ctx_r595.api.mediaURL + item_r596.cover + "),url(assets/imgs/closed.png)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r596.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r596.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r596.mobile, " ");
      }
    }

    function OrderDetailComponent_div_6_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailComponent_div_6_div_37_p_1_Template, 2, 1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderDetailComponent_div_6_div_37_div_2_Template, 13, 6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r551.stores);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r551.stores);
      }
    }

    function OrderDetailComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderDetailComponent_div_6_div_4_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderDetailComponent_div_6_div_10_Template, 4, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OrderDetailComponent_div_6_span_32_Template, 3, 3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OrderDetailComponent_div_6_span_34_Template, 6, 10, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OrderDetailComponent_div_6_p_35_Template, 2, 1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OrderDetailComponent_div_6_div_36_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OrderDetailComponent_div_6_div_37_Template, 3, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r544 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r544.util.getString("Orders"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r544.orders == null ? null : ctx_r544.orders.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Deliver to"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r544.orderAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r544.orderAt === "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Basic Details"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Order ID"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r544.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Payment Method"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r544.payMethod, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Delivery On"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r544.datetime, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r544.util.getString("Order Tracking"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r544.orderDetail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r544.orderDetail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r544.driverInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r544.driverInfo && ctx_r544.driverInfo.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r544.stores && (ctx_r544.stores == null ? null : ctx_r544.stores.length));
      }
    }

    var OrderDetailComponent =
    /*#__PURE__*/
    function () {
      function OrderDetailComponent(router, route, api, util, navCtrl) {
        var _this = this;

        _classCallCheck(this, OrderDetailComponent);

        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.driverInfo = [];
        this.stores = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;
            _this.loaded = false;

            _this.getOrder();
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(OrderDetailComponent, [{
        key: "getOrder",
        value: function getOrder() {
          var _this2 = this;

          var param = {
            id: this.id
          };
          this.api.post('orders/getById', param).subscribe(function (data) {
            console.log(data);
            _this2.loaded = true;

            if (data && data.status === 200 && data.data.length > 0) {
              var info = data.data[0];
              console.log(info);
              _this2.orderDetail = JSON.parse(info.notes);
              var order = JSON.parse(info.orders);
              console.log('order=====>>', order);
              var finalOrder = [];

              var ids = _toConsumableArray(new Set(order.map(function (item) {
                return item.store_id;
              })));

              ids.forEach(function (element) {
                var param = {
                  id: element,
                  order: []
                };
                finalOrder.push(param);
              });
              ids.forEach(function (element, index) {
                order.forEach(function (cart) {
                  if (cart.variations && cart.variations !== '' && typeof cart.variations === 'string') {
                    cart.variations = JSON.parse(cart.variations);
                    console.log(cart['variant']);

                    if (cart["variant"] === undefined) {
                      cart['variant'] = 0;
                    }
                  }

                  if (cart.store_id === element) {
                    finalOrder[index].order.push(cart);
                  }
                });
              });
              console.log('final order', finalOrder);
              _this2.orders = finalOrder;
              _this2.status = JSON.parse(info.status);
              console.log('order status--------------------', _this2.status);

              var status = _this2.status.filter(function (x) {
                return x.status === 'created';
              });

              if (status.length === _this2.status.length) {
                _this2.canCancle = true;
              } else {
                _this2.canCancle = false;
              }

              var delivered = _this2.status.filter(function (x) {
                return x.status === 'delivered';
              });

              if (delivered.length === _this2.status.length) {
                _this2.isDelivered = true;
              } else {
                _this2.isDelivered = false;
              } // if()


              _this2.datetime = moment__WEBPACK_IMPORTED_MODULE_1__(info.date_time).format('dddd, MMMM Do YYYY');
              _this2.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
              _this2.orderAt = info.order_to;
              _this2.driverId = info.driver_id;

              if (_this2.driverId && _this2.driverId !== '') {
                var userinfo = {
                  id: _this2.driverId
                };

                _this2.api.post('drivers/getDriversData', userinfo).subscribe(function (data) {
                  console.log('driverid>', data);

                  if (data && data.status === 200 && data.data && data.data.length) {
                    _this2.driverInfo = data.data;
                    console.log(_this2.driverInfo);
                  }
                }, function (error) {
                  console.log(error);
                });
              }

              var stores = {
                id: info.store_id
              };

              _this2.api.post('stores/getStoresData', stores).subscribe(function (data) {
                console.log('store=-============>>', data);
                console.log('store=-============>>', data);

                if (data && data.status === 200 && data.data.length) {
                  _this2.stores = data.data;
                } else {
                  // this.util.showToast('No Stores Found', 'danger', 'bottom');
                  _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('No Stores Found'));

                  _this2.back();
                }
              }, function (error) {
                console.log('error', error);

                _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('Something went wrong'));
              });

              if (_this2.orderAt === 'home') {
                var address = JSON.parse(info.address);
                console.log('---address', address);

                if (address && address.address) {
                  _this2.userLat = address.lat;
                  _this2.userLng = address.lng;
                  _this2.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;

                  _this2.getDrivers();
                }
              }
            } else {
              _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this2.loaded = true;

            _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          var param = {
            id: this.driverId
          };
          this.api.post('drivers/getById', param).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getStoreName",
        value: function getStoreName(id) {
          var item = this.stores.filter(function (x) {
            return x.uid === id;
          });

          if (item && item.length) {
            return item[0].name;
          }

          return 'Store';
        }
      }, {
        key: "getOrderStatus",
        value: function getOrderStatus(id) {
          var item = this.status.filter(function (x) {
            return x.id === id;
          });

          if (item && item.length) {
            return item[0].status;
          }

          return 'created';
        }
      }, {
        key: "goToTracker",
        value: function goToTracker() {
          this.router.navigate(['/tracker']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "contanct",
        value: function contanct(item) {
          console.log(item);
        }
      }, {
        key: "contanctDriver",
        value: function contanctDriver(item) {
          console.log(item);
        }
      }]);

      return OrderDetailComponent;
    }();

    OrderDetailComponent.ɵfac = function OrderDetailComponent_Factory(t) {
      return new (t || OrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    OrderDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDetailComponent,
      selectors: [["app-order-detail"]],
      decls: 7,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "justify-content", "flex-start"], ["mdbWavesEffect", "", 3, "click"], ["fas", "", "icon", "arrow-left", 1, "mr-1"], ["style", "display: flex;flex-direction: column;justify-content: center;align-items: center;", 4, "ngIf"], ["class", "main_content_div", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "main_content_div"], [1, "titles"], [1, "desc_div"], ["class", "border_bottom", 4, "ngIf"], [1, "flex_div"], [1, "values"], ["class", "flex_div", 4, "ngIf"], [1, "tracking_div"], [1, "left"], ["style", "display: flex;flex-direction: column;justify-content: center;align-items: center;", 4, "ngFor", "ngForOf"], [1, "right"], ["class", "titles", 4, "ngIf"], ["class", "card_div", 4, "ngIf"], [4, "ngIf"], [1, "border_bottom"], [4, "ngFor", "ngForOf"], [1, "storeName"], [1, "name"], [1, "status"], ["class", "items", 4, "ngFor", "ngForOf"], [1, "items"], ["fas", "", "icon", "map-marker-alt"], [1, "line_div"], ["fas", "", "icon", "check-circle", 4, "ngIf"], ["fas", "", "icon", "check-circle"], [1, "round_div_gray"], [1, "card_div"], ["class", "resto_detail", 4, "ngFor", "ngForOf"], [1, "resto_detail"], [1, "back_image", 3, "ngStyle"], [2, "margin-left", "10px", 3, "click"], [1, "res_name"], [1, "res_location"]],
      template: function OrderDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailComponent_Template_a_click_3_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mdb-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderDetailComponent_div_5_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailComponent_div_6_Template, 38, 18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["@charset \"UTF-8\";\n\n.main_content_div[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #45C261;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: block;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .storeName[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .storeName[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .storeName[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .itemss[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div[_ngcontent-%COMP%]   .hr_line_div[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .line_div_darkgray[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .round_div_gray[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .round_div_darkgray[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .round_div_red[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background-color: #45C261;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: -7px;\n  color: #45C261;\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .round_div_gray[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .round_div_red[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div[_ngcontent-%COMP%]   .tracking_div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .round_div_darkgray[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btn_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div[_ngcontent-%COMP%]   .reject[_ngcontent-%COMP%] {\n  --background:var(--ion-color-danger);\n}\n.btn_div[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  --background: #45C261;\n}\n.status_div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #45C261;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWRldGFpbC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcmRlci1kZXRhaWxcXG9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNESTtFQUNJLGFBQUE7QURHUjtBQ0RRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREdaO0FDRFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FER2hCO0FDQVk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURFZDtBQ0FZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QURFaEI7QUNDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBRENoQjtBQ0NnQjtFQUNHLGlCQUFBO0FEQ25CO0FDSUk7RUFDSSxrQkFBQTtBREZSO0FDR1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FERFo7QUNHWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FERGhCO0FDR1k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FERGhCO0FDR2E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUREZDtBQ01ZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREpoQjtBQ01ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FESmhCO0FDT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QURMaEI7QUNRWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRE5oQjtBQ1VZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURSaEI7QUNZSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFZSO0FDWUk7RUFDSSxjQUFBO0FEVlI7QUNhSztFQUNHLFdBQUE7QURYUjtBQ1lRO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FEVlo7QUNXWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFRoQjtBQ1VnQjtFQUNJLGlCQUFBO0FEUnBCO0FDVWdCO0VBQ0ksaUJBQUE7QURScEI7QUNXWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBRFRoQjtBQ1dZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURUaEI7QUNnQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtBRGZSO0FDZ0JRO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBRGRaO0FDa0JJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEaEJSO0FDbUJJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURqQlI7QUNvQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QURsQlo7QUNtQlk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEakJoQjtBQ29CWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURsQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDc0JZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURwQmhCO0FDd0JRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FEdEJaO0FDd0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUR0QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEdkJoQjtBQ3lCWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUR2QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0FEeEJoQjtBQzhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRDNCSjtBQzZCSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FEM0JSO0FDNkJJO0VBQ0ksb0NBQUE7QUQzQlI7QUM2Qkk7RUFDSSxxQkFBQTtBRDNCUjtBQytCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRDVCSjtBQzhCSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRDVCUjtBQytCSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUQ3QlI7QUNpQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQ5Qko7QUNnQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQ3QkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19sb2NhdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAub3JkZXJfaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAub3JkZXJfaWQgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ1QzI2MTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5oZWFkX2dyYXkge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGl0bGVzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIC5zdGF0dXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuaXRlbXMge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5pdGVtc3Mge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnZhbHVlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ocl9saW5lX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAubGluZV9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NUMyNjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgY29sb3I6ICM0NUMyNjE7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAubGluZV9kaXYge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlIHB4O1xuICBjb2xvcjogI0M4QzdDRTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfcmVkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJSBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG5fZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLmJ0bl9kaXYgLnJlamVjdCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbi5idG5fZGl2IC5hY2NlcHQge1xuICAtLWJhY2tncm91bmQ6ICM0NUMyNjE7XG59XG5cbi5zdGF0dXNfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzX2RpdiBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTozcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXR1c19kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ3JlZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ1QzI2MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yZGVyX2lke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfZGl2MntcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAucGVyc29uYWxfZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZTF7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsX2xibDJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudGl0bGVze1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgIC5kZXNjX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ib3JkZXJfYm90dG9te1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5zdG9yZU5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1c3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAudmFsdWVze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ocl9saW5lX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0ZBRkFGQTtcblxuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpbmVfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NUMyNjE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgLmxpbmVfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ0bl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5yZWplY3R7XG4gICAgICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmFjY2VwdHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDVDMjYxOztcbiAgICB9XG59XG5cbi5zdGF0dXNfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tIDozcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmdyZWVue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDVDMjYxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8vIGxhYmVsIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gLmhlYWRfdGl0bGV7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbi8vICAgICBsYWJlbCB7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAucm93e1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gLmJvbGRfbGJse1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vLyAuY2FyZF9kaXZ7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgcGFkZGluZzogMTVweDtcblxuLy8gICAgIC8vIC51cHBfZGl2e1xuLy8gICAgIC8vICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuLy8gICAgIC8vICAgICBtYXJnaW4tbGVmdDogMHB4O1xuLy8gICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbi8vICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgLy8gICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4vLyAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG5cbi8vICAgICAgICAgLmZsZXhfZGl2e1xuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbi8vICAgICAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzVweDtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgLmNvbnRlbnRfZGl2e1xuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgICAgICAgICAgICAgICAuaGVhcnRfaWNue1xuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDVDMjYxO1xuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIC50cmFzaF9pY257XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIC50aXRsZV9sYmx7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLmRlc2NfbGJse1xuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAucHJpY2V7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAucXVhbnRpdHlfZGl2e1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICAgICAgICAgICAgICAuZ3JlZW5fZGl2e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtZGItaWNvbntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC5idG5fZmxleHtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuLy8gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuLy8gICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuLy8gICAgICAgICAgICAgLnN0YXR1c3tcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBidXR0b257XG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIC5ncmVlbl9idG57XG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgLmdyYXlfYnRue1xuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ODkwOWM7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuZmxleF9kaXYye1xuLy8gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuLy8gICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuLy8gICAgICAgICAgICAgLmhlYWRfbGJse1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAuaGVhZF9sYmwye1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4vLyAgICAgICAgICAgICAgICAgc3Bhbntcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIC5wYXltZW50X2xibHtcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuLy8gICAgICAgICAgICAgICAgIHNwYW57XG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIC8vIH1cblxuLy8gICAgIC8vIC5sb3dlcl9kaXZ7XG4vLyAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIC8vICAgICBtYXJnaW46IDA7XG5cbi8vICAgICAvLyAgICAgbGFiZWwge1xuLy8gICAgIC8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuLy8gICAgIC8vICAgICB9XG5cbi8vICAgICAvLyAgICAgLnRpdGxlX2xibHtcbi8vICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgLy8gICAgIH1cblxuLy8gICAgIC8vICAgICAuc21hbGxfbGJse1xuLy8gICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vICAgICAvLyAgICAgfVxuXG4vLyAgICAgLy8gICAgIC5ib3R0b21fZGl2e1xuLy8gICAgIC8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbi8vICAgICAvLyAgICAgICAgIGRpdntcbi8vICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuLy8gICAgIC8vICAgICAgICAgfVxuLy8gICAgIC8vICAgICB9XG5cbi8vICAgICAvLyAgICAgLmJvdHRvbV9yaWdodHtcbi8vICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgIC8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH1cbi8vIH1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-detail',
          templateUrl: './order-detail.component.html',
          styleUrls: ['./order-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/order-detail/order-detail.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/order-detail/order-detail.module.ts ***!
    \****************************************************************/

  /*! exports provided: OrderDetailModule */

  /***/
  function srcAppComponentsOrderDetailOrderDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailModule", function () {
      return OrderDetailModule;
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


    var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order-detail-routing.module */
    "./src/app/components/order-detail/order-detail-routing.module.ts");
    /* harmony import */


    var _order_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-detail.component */
    "./src/app/components/order-detail/order-detail.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrderDetailModule = function OrderDetailModule() {
      _classCallCheck(this, OrderDetailModule);
    };

    OrderDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderDetailModule
    });
    OrderDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderDetailModule_Factory(t) {
        return new (t || OrderDetailModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderDetailRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderDetailModule, {
        declarations: [_order_detail_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderDetailRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_order_detail_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderDetailRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-order-detail-order-detail-module-es5.js.map