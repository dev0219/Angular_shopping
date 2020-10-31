function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-orders-orders-module"], {
  /***/
  "./src/app/components/orders/orders-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/orders/orders-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppComponentsOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
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


    var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/components/orders/orders.component.ts");
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
      component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersRoutingModule
    });
    OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersRoutingModule_Factory(t) {
        return new (t || OrdersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
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
  "./src/app/components/orders/orders.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/orders/orders.component.ts ***!
    \*******************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppComponentsOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    function OrdersComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrdersComponent_div_12_div_6_p_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", order_r534.variations[0].items[order_r534.variant].title, " ");
      }
    }

    function OrdersComponent_div_12_div_6_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrdersComponent_div_12_div_6_p_1_span_3_Template, 2, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r534 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r534.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r534.size === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X ", order_r534.quantiy, "");
      }
    }

    function OrdersComponent_div_12_div_6_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r532.util.currecny, "", item_r529.grand_total, " ");
      }
    }

    function OrdersComponent_div_12_div_6_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r529.grand_total, " ", ctx_r533.util.currecny, " ");
      }
    }

    function OrdersComponent_div_12_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersComponent_div_12_div_6_p_1_Template, 6, 3, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrdersComponent_div_12_div_6_span_5_Template, 2, 2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrdersComponent_div_12_div_6_span_6_Template, 2, 2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r529.orders);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r530.util.cside === "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r530.util.cside === "right");
      }
    }

    function OrdersComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r542 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r542);

          var item_r529 = ctx.$implicit;

          var ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r541.goToOrder(item_r529);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrdersComponent_div_12_div_6_Template, 7, 3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r529 = ctx.$implicit;

        var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r527.api.mediaURL + item_r529.orders[0].cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r527.util.getString("ORDER"), " #", item_r529.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r529.orders == null ? null : item_r529.orders.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r529.date_time);
      }
    }

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(router, util, api) {
        _classCallCheck(this, OrdersComponent);

        this.router = router;
        this.util = util;
        this.api = api;
        this.dummy = [];
        this.orders = [];
        this.getOrders();
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this = this;

          this.dummy = Array(15);
          this.orders = [];
          var param = {
            id: localStorage.getItem('uid')
          };
          this.api.post('orders/getByUid', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];

            if (data && data.status === 200 && data.data.length > 0) {
              // this.orders = data.data;
              var orders = data.data;
              orders.forEach(function (element) {
                if (function (x) {
                  try {
                    JSON.parse(x);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }(element.orders)) {
                  element.orders = JSON.parse(element.orders);
                  element.date_time = moment__WEBPACK_IMPORTED_MODULE_1__(element.date_time).format('dddd, MMMM Do YYYY');
                  element.orders.forEach(function (order) {
                    console.log(element.id, '=>', order.variations);

                    if (order.variations && order.variations !== '' && typeof order.variations === 'string') {
                      console.log('strings', element.id);
                      order.variations = JSON.parse(order.variations);
                      console.log(order['variant']);

                      if (order["variant"] === undefined) {
                        order['variant'] = 0;
                      }
                    }
                  });
                }
              });
              _this.orders = orders;
              console.log('orderss==>?', _this.orders);
            }
          }, function (error) {
            console.log(error);
            _this.dummy = [];
            _this.orders = [];

            _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "goToOrder",
        value: function goToOrder(item) {
          console.log(item);
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['/order-detail'], param);
        }
      }, {
        key: "goToOrderDetail",
        value: function goToOrderDetail() {
          this.router.navigate(['/order-detail']);
        }
      }, {
        key: "goToTracker",
        value: function goToTracker() {
          this.router.navigate(['/tracker']);
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 13,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "head_title"], [1, "row", 2, "width", "100%"], [1, "col-lg-6"], [1, "col-lg-12"], ["class", "dummyCard", 4, "ngFor", "ngForOf"], ["class", "card_div", 3, "click", 4, "ngFor", "ngForOf"], [1, "dummyCard"], [1, "card_div", 3, "click"], [1, "image_div"], ["onError", "this.src='assets/imgs/user.png'", 3, "src"], [1, "desc_div"], [2, "font-weight", "bold", "color", "gray", "font-size", "12px"], ["class", "border_bottom", 4, "ngIf"], [1, "datetime"], [1, "border_bottom"], ["class", "items", 4, "ngFor", "ngForOf"], [1, "itemss"], [4, "ngIf"], [1, "items"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_11_Template, 5, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrdersComponent_div_12_Template, 9, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Your Orders"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dummy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["@charset \"UTF-8\";\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n}\n.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n}\n.head_title[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.head_title[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #45C261;\n  color: white;\n  font-weight: 500;\n  margin-left: 5px;\n  border-radius: 3px;\n  height: 38px;\n  width: 100px;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 16px;\n}\n.filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border-color: lightgray;\n  padding: 5px 0px;\n  width: 200px;\n}\n.dummyCard[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n}\n.dummyCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.card_div[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n}\n.card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%] {\n  height: 95px;\n  width: 95px;\n  min-width: 95px;\n}\n.card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.card_div[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0px;\n  padding: 5px;\n  background: var(--ion-color-primary);\n  border-bottom-right-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n}\n.card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 5px;\n}\n.card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]   .itemss[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGNBQUE7QURFSjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtBRENKO0FDQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBRENSO0FDRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURBUjtBQ0VRO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURBWjtBQ0tBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBREZKO0FDSUk7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FERlI7QUNLQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FERko7QUNHSTtFQUNFLFdBQUE7QURETjtBQ0lBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRERKO0FDR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUREUjtBQ0dRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FERFo7QUNLSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBREhSO0FDTUk7RUFDSSxXQUFBO0FESlI7QUNLUTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBREhaO0FDSVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QURGaEI7QUNJWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERmhCO0FDTVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QURKWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaGVhZF90aXRsZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uaGVhZF90aXRsZSAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRfdGl0bGUgLmZsZXhfZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmlsdGVyIHNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmR1bW15Q2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmR1bW15Q2FyZCBwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jYXJkX2RpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNhcmRfZGl2IC5pbWFnZV9kaXYge1xuICBoZWlnaHQ6IDk1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBtaW4td2lkdGg6IDk1cHg7XG59XG4uY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uY2FyZF9kaXYgLnN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmRfZGl2IC5kZXNjX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkX2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLml0ZW1zIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcmRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuaXRlbXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcmRfZGl2IC5kZXNjX2RpdiAuZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ1QzI2MTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmlsdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgc2VsZWN0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxufVxuLmR1bW15Q2FyZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICBwe1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufVxuLmNhcmRfZGl2e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgIGhlaWdodDogOTVweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIG1pbi13aWR0aDogOTVweDtcblxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXR1c3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kZXNjX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ib3JkZXJfYm90dG9te1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRldGltZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cblxuICAgIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/orders/orders.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/orders/orders.module.ts ***!
    \****************************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppComponentsOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
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


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/components/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/components/orders/orders.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersModule
    });
    OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersModule_Factory(t) {
        return new (t || OrdersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, {
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-orders-orders-module-es5.js.map