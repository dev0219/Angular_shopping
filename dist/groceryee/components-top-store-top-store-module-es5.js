function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-top-store-top-store-module"], {
  /***/
  "./src/app/components/top-store/top-store-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/top-store/top-store-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: TopStoreRoutingModule */

  /***/
  function srcAppComponentsTopStoreTopStoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopStoreRoutingModule", function () {
      return TopStoreRoutingModule;
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


    var _top_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-store.component */
    "./src/app/components/top-store/top-store.component.ts");
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
      component: _top_store_component__WEBPACK_IMPORTED_MODULE_2__["TopStoreComponent"]
    }];

    var TopStoreRoutingModule = function TopStoreRoutingModule() {
      _classCallCheck(this, TopStoreRoutingModule);
    };

    TopStoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TopStoreRoutingModule
    });
    TopStoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TopStoreRoutingModule_Factory(t) {
        return new (t || TopStoreRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopStoreRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopStoreRoutingModule, [{
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
  "./src/app/components/top-store/top-store.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/top-store/top-store.component.ts ***!
    \*************************************************************/

  /*! exports provided: TopStoreComponent */

  /***/
  function srcAppComponentsTopStoreTopStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopStoreComponent", function () {
      return TopStoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


    var _c0 = function _c0() {
      return {
        "border-radius": "5px",
        height: "120px",
        width: "100%"
      };
    };

    function TopStoreComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function TopStoreComponent_div_4_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
      }
    }

    function TopStoreComponent_div_4_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "background-image": a0
      };
    };

    function TopStoreComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r1098 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopStoreComponent_div_4_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1098);

          var item_r1094 = ctx.$implicit;

          var ctx_r1097 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1097.openStore(item_r1094);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopStoreComponent_div_4_img_3_Template, 1, 0, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopStoreComponent_div_4_img_4_Template, 1, 0, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopStoreComponent_div_4_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1098);

          var item_r1094 = ctx.$implicit;

          var ctx_r1099 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1099.openStore(item_r1094);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1094 = ctx.$implicit;

        var ctx_r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, "url(" + ctx_r1092.api.mediaURL + item_r1094.cover + "),url(assets/imgs/user.png)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1094.isOpen && item_r1094.isClosed === "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r1094.isOpen || item_r1094.isClosed === "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1094.name.length > 12 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 8, item_r1094.name, 0, 12) + ".." : item_r1094.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1094.address.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 12, item_r1094.address, 0, 20) + ".." : item_r1094.address, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1092.getTime(item_r1094.open_time), " - ", ctx_r1092.getTime(item_r1094.close_time), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1092.util.getString("View"), " ");
      }
    }

    var TopStoreComponent =
    /*#__PURE__*/
    function () {
      function TopStoreComponent(util, api, router) {
        _classCallCheck(this, TopStoreComponent);

        this.util = util;
        this.api = api;
        this.router = router;
        this.stores = [];
        this.dummystores = [];
        this.dummystores = Array(30);
        this.getStore();
      }

      _createClass(TopStoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStore",
        value: function getStore() {
          var _this = this;

          var param = {
            id: localStorage.getItem('city')
          };
          this.api.post('stores/getByCity', param).subscribe(function (stores) {
            console.log('stores by city', stores);
            _this.stores = [];
            _this.dummystores = [];

            if (stores && stores.status === 200 && stores.data && stores.data.length) {
              _this.stores = stores.data;

              _this.stores.forEach(function (element) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.isOpen(element.open_time, element.close_time);

                        case 2:
                          element['isOpen'] = _context.sent;

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });

              console.log('store====>>>', _this.stores);
            }
          }, function (error) {
            _this.dummystores = [];
            console.log(error);

            _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "isOpen",
        value: function isOpen(start, end) {
          var format = 'H:mm:ss';
          var ctime = moment__WEBPACK_IMPORTED_MODULE_2__().format('HH:mm:ss');
          var time = moment__WEBPACK_IMPORTED_MODULE_2__(ctime, format);
          var beforeTime = moment__WEBPACK_IMPORTED_MODULE_2__(start, format);
          var afterTime = moment__WEBPACK_IMPORTED_MODULE_2__(end, format);

          if (time.isBetween(beforeTime, afterTime)) {
            return true;
          }

          return false;
        }
      }, {
        key: "openStore",
        value: function openStore(item) {
          console.log('open store', item);
          var param = {
            queryParams: {
              id: item.uid,
              name: item.name
            }
          };
          this.router.navigate(['/stores-products'], param);
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(time, ['h:mm A']).format('hh:mm A');
        }
      }]);

      return TopStoreComponent;
    }();

    TopStoreComponent.ɵfac = function TopStoreComponent_Factory(t) {
      return new (t || TopStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    TopStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TopStoreComponent,
      selectors: [["app-top-store"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container"], [1, "row"], ["class", "col-12 col-md-6", 4, "ngFor", "ngForOf"], ["class", "content_div col-12 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6"], ["appearance", "circle", 3, "theme"], [1, "content_div", "col-12", "col-md-6"], [1, "card_div"], [1, "image_div", 3, "ngStyle", "click"], ["src", "assets/imgs/open.png", "class", "isOpen", "alt", "Veg", 4, "ngIf"], ["src", "assets/imgs/close.png", "class", "isOpen", "alt", "Non Veg", 4, "ngIf"], [1, "desc_div", 3, "click"], [1, "pro_name"], [1, "pro_detail"], [1, "price_lbl"], [1, "small_flex"], [1, "btnBtm"], [1, "ion-activatable", "ripple-parent"], ["src", "assets/imgs/open.png", "alt", "Veg", 1, "isOpen"], ["src", "assets/imgs/close.png", "alt", "Non Veg", 1, "isOpen"]],
      template: function TopStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopStoreComponent_div_2_Template, 2, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TopStoreComponent_div_4_Template, 18, 18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dummystores);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stores);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
      styles: ["@charset \"UTF-8\";\n\n.content_div[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  width: 100%;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  border: 1px solid lightgray;\n  margin: 10px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .offer_tag[_ngcontent-%COMP%] {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .off_lbl[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .isOpen[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 10px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_detail[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 11px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%] {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: #FF8E80;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3Atc3RvcmUvdG9wLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvcC1zdG9yZS9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b3Atc3RvcmVcXHRvcC1zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBREVGO0FDREU7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUVBLFlBQUE7QURBTjtBQ0NNO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FEQ1Y7QUNFTTtFQUVJLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRERWO0FDSU07RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FERlY7QUNHVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRERaO0FDR1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUREWjtBQ0dVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FERFo7QUNLTTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBREhWO0FDSVU7RUFDRSxlQUFBO0VBRUEsa0JBQUE7QURIWjtBQ0tVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREhaO0FDS1U7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QURIZDtBQ0ljO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FERmxCO0FDSWM7RUFDSSxpQkFBQTtBREZsQjtBQ0ljO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FERmxCO0FDS1U7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBREhkO0FDSWM7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FERmxCO0FDR2tCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRER0QjtBQ01RO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FESlo7QUNNWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FESmhCO0FDUVk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBRE5oQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLXN0b3JlL3RvcC1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZlcl90YWcge1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAub2ZmX2xibCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBmb250LXNpemU6IDlweDtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgLmlzT3BlbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19kZXRhaWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY29udGVudF9kaXZ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLmNhcmRfZGl2e1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAub2ZmZXJfdGFne1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgIH1cblxuICAgICAgLm9mZl9sYmx7XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIH1cblxuICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzT3BlbntcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgLnByb19uYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbWFsbF9mbGV4e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIC5idG5CdG17XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLmFic19hZGR7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-top-store',
          templateUrl: './top-store.component.html',
          styleUrls: ['./top-store.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/top-store/top-store.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/top-store/top-store.module.ts ***!
    \**********************************************************/

  /*! exports provided: TopStoreModule */

  /***/
  function srcAppComponentsTopStoreTopStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopStoreModule", function () {
      return TopStoreModule;
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


    var _top_store_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-store-routing.module */
    "./src/app/components/top-store/top-store-routing.module.ts");
    /* harmony import */


    var _top_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./top-store.component */
    "./src/app/components/top-store/top-store.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var TopStoreModule = function TopStoreModule() {
      _classCallCheck(this, TopStoreModule);
    };

    TopStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TopStoreModule
    });
    TopStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TopStoreModule_Factory(t) {
        return new (t || TopStoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _top_store_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopStoreRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopStoreModule, {
        declarations: [_top_store_component__WEBPACK_IMPORTED_MODULE_3__["TopStoreComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _top_store_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopStoreRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_top_store_component__WEBPACK_IMPORTED_MODULE_3__["TopStoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _top_store_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopStoreRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-top-store-top-store-module-es5.js.map