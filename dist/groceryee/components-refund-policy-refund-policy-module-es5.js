function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-refund-policy-refund-policy-module"], {
  /***/
  "./src/app/components/refund-policy/refund-policy-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/refund-policy/refund-policy-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RefundPolicyRoutingModule */

  /***/
  function srcAppComponentsRefundPolicyRefundPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyRoutingModule", function () {
      return RefundPolicyRoutingModule;
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


    var _refund_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./refund-policy.component */
    "./src/app/components/refund-policy/refund-policy.component.ts");
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
      component: _refund_policy_component__WEBPACK_IMPORTED_MODULE_2__["RefundPolicyComponent"]
    }];

    var RefundPolicyRoutingModule = function RefundPolicyRoutingModule() {
      _classCallCheck(this, RefundPolicyRoutingModule);
    };

    RefundPolicyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RefundPolicyRoutingModule
    });
    RefundPolicyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RefundPolicyRoutingModule_Factory(t) {
        return new (t || RefundPolicyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundPolicyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundPolicyRoutingModule, [{
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
  "./src/app/components/refund-policy/refund-policy.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/refund-policy/refund-policy.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RefundPolicyComponent */

  /***/
  function srcAppComponentsRefundPolicyRefundPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyComponent", function () {
      return RefundPolicyComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
        height: "10px",
        width: "100%"
      };
    };

    function RefundPolicyComponent_div_1_ngx_skeleton_loader_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 4);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };

    function RefundPolicyComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundPolicyComponent_div_1_ngx_skeleton_loader_1_Template, 1, 2, "ngx-skeleton-loader", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function RefundPolicyComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
      }

      if (rf & 2) {
        var ctx_r832 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r832.getContent(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var RefundPolicyComponent =
    /*#__PURE__*/
    function () {
      function RefundPolicyComponent(api, util) {
        var _this = this;

        _classCallCheck(this, RefundPolicyComponent);

        this.api = api;
        this.util = util;
        var param = {
          id: 4
        };
        this.loaded = false;
        this.api.post('pages/getById', param).subscribe(function (data) {
          console.log(data);
          _this.loaded = true;

          if (data && data.status === 200 && data.data.length > 0) {
            var info = data.data[0];
            _this.content = info.content;
          }
        }, function (error) {
          console.log(error);
          _this.loaded = true;

          _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
        });
      }

      _createClass(RefundPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getContent",
        value: function getContent() {
          return this.content;
        }
      }]);

      return RefundPolicyComponent;
    }();

    RefundPolicyComponent.ɵfac = function RefundPolicyComponent_Factory(t) {
      return new (t || RefundPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]));
    };

    RefundPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RefundPolicyComponent,
      selectors: [["app-refund-policy"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "theme", 4, "ngFor", "ngForOf"], [3, "theme"], [3, "innerHTML"]],
      template: function RefundPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundPolicyComponent_div_1_Template, 2, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundPolicyComponent_p_2_Template, 1, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderComponent"]],
      styles: ["@charset \"UTF-8\";\n\n.back_image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n}\n.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 23px;\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZ1bmQtcG9saWN5L3JlZnVuZC1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVmdW5kLXBvbGljeS9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWZ1bmQtcG9saWN5XFxyZWZ1bmQtcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QURFSjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FERUo7QUNBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FERVI7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QURDSjtBQ0NJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmdW5kLXBvbGljeS9yZWZ1bmQtcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhlYWRfdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaGVhZF90aXRsZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5jb250ZW50IHAge1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYmFja19pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5oZWFkX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuLmNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgcHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-refund-policy',
          templateUrl: './refund-policy.component.html',
          styleUrls: ['./refund-policy.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/refund-policy/refund-policy.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/refund-policy/refund-policy.module.ts ***!
    \******************************************************************/

  /*! exports provided: RefundPolicyModule */

  /***/
  function srcAppComponentsRefundPolicyRefundPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyModule", function () {
      return RefundPolicyModule;
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


    var _refund_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./refund-policy-routing.module */
    "./src/app/components/refund-policy/refund-policy-routing.module.ts");
    /* harmony import */


    var _refund_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./refund-policy.component */
    "./src/app/components/refund-policy/refund-policy.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


    var RefundPolicyModule = function RefundPolicyModule() {
      _classCallCheck(this, RefundPolicyModule);
    };

    RefundPolicyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RefundPolicyModule
    });
    RefundPolicyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RefundPolicyModule_Factory(t) {
        return new (t || RefundPolicyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _refund_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundPolicyModule, {
        declarations: [_refund_policy_component__WEBPACK_IMPORTED_MODULE_3__["RefundPolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _refund_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundPolicyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_refund_policy_component__WEBPACK_IMPORTED_MODULE_3__["RefundPolicyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _refund_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-refund-policy-refund-policy-module-es5.js.map