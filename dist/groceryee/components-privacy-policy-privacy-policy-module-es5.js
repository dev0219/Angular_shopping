function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-privacy-policy-privacy-policy-module"], {
  /***/
  "./src/app/components/privacy-policy/privacy-policy-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: PrivacyPolicyRoutingModule */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyRoutingModule", function () {
      return PrivacyPolicyRoutingModule;
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


    var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./privacy-policy.component */
    "./src/app/components/privacy-policy/privacy-policy.component.ts");
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
      component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyComponent"]
    }];

    var PrivacyPolicyRoutingModule = function PrivacyPolicyRoutingModule() {
      _classCallCheck(this, PrivacyPolicyRoutingModule);
    };

    PrivacyPolicyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PrivacyPolicyRoutingModule
    });
    PrivacyPolicyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PrivacyPolicyRoutingModule_Factory(t) {
        return new (t || PrivacyPolicyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrivacyPolicyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyRoutingModule, [{
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
  "./src/app/components/privacy-policy/privacy-policy.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
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

    function PrivacyPolicyComponent_div_1_ngx_skeleton_loader_1_Template(rf, ctx) {
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

    function PrivacyPolicyComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_1_ngx_skeleton_loader_1_Template, 1, 2, "ngx-skeleton-loader", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function PrivacyPolicyComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
      }

      if (rf & 2) {
        var ctx_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r827.getContent(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var PrivacyPolicyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyPolicyComponent(api, util) {
        var _this = this;

        _classCallCheck(this, PrivacyPolicyComponent);

        this.api = api;
        this.util = util;
        var param = {
          id: 2
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

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getContent",
        value: function getContent() {
          return this.content;
        }
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
      return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]));
    };

    PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyPolicyComponent,
      selectors: [["app-privacy-policy"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "theme", 4, "ngFor", "ngForOf"], [3, "theme"], [3, "innerHTML"]],
      template: function PrivacyPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_1_Template, 2, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrivacyPolicyComponent_p_2_Template, 1, 1, "p", 2);

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
      styles: ["@charset \"UTF-8\";\n\n.back_image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n}\n.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 23px;\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcml2YWN5LXBvbGljeS9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcml2YWN5LXBvbGljeVxccHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0FJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QURFUjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBRENKO0FDQ0k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRENSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmhlYWRfdGl0bGUgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY29udGVudCBwIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmJhY2tfaW1hZ2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaGVhZF90aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5jb250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIHB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-privacy-policy',
          templateUrl: './privacy-policy.component.html',
          styleUrls: ['./privacy-policy.component.scss']
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
  "./src/app/components/privacy-policy/privacy-policy.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/privacy-policy/privacy-policy.module.ts ***!
    \********************************************************************/

  /*! exports provided: PrivacyPolicyModule */

  /***/
  function srcAppComponentsPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function () {
      return PrivacyPolicyModule;
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


    var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./privacy-policy-routing.module */
    "./src/app/components/privacy-policy/privacy-policy-routing.module.ts");
    /* harmony import */


    var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy-policy.component */
    "./src/app/components/privacy-policy/privacy-policy.component.ts");
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


    var PrivacyPolicyModule = function PrivacyPolicyModule() {
      _classCallCheck(this, PrivacyPolicyModule);
    };

    PrivacyPolicyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PrivacyPolicyModule
    });
    PrivacyPolicyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PrivacyPolicyModule_Factory(t) {
        return new (t || PrivacyPolicyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrivacyPolicyModule, {
        declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-privacy-policy-privacy-policy-module-es5.js.map