function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-help-help-module"], {
  /***/
  "./src/app/components/help/help-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/help/help-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: HelpRoutingModule */

  /***/
  function srcAppComponentsHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpRoutingModule", function () {
      return HelpRoutingModule;
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


    var _help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help.component */
    "./src/app/components/help/help.component.ts");
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
      component: _help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"]
    }];

    var HelpRoutingModule = function HelpRoutingModule() {
      _classCallCheck(this, HelpRoutingModule);
    };

    HelpRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HelpRoutingModule
    });
    HelpRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HelpRoutingModule_Factory(t) {
        return new (t || HelpRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelpRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpRoutingModule, [{
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
  "./src/app/components/help/help.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/help/help.component.ts ***!
    \***************************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppComponentsHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
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

    function HelpComponent_div_1_ngx_skeleton_loader_1_Template(rf, ctx) {
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

    function HelpComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HelpComponent_div_1_ngx_skeleton_loader_1_Template, 1, 2, "ngx-skeleton-loader", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function HelpComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
      }

      if (rf & 2) {
        var ctx_r836 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r836.getContent(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var HelpComponent =
    /*#__PURE__*/
    function () {
      function HelpComponent(api, util) {
        var _this = this;

        _classCallCheck(this, HelpComponent);

        this.api = api;
        this.util = util;
        var param = {
          id: 5
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

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getContent",
        value: function getContent() {
          return this.content;
        }
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]));
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "theme", 4, "ngFor", "ngForOf"], [3, "theme"], [3, "innerHTML"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HelpComponent_div_1_Template, 2, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HelpComponent_p_2_Template, 1, 1, "p", 2);

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
      styles: ["@charset \"UTF-8\";\n.back_image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 2;\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em;\n  font-weight: normal;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  margin-left: 1em;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n.tab[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #45C261;\n  font-weight: 500;\n  cursor: pointer;\n  \n}\n.tab-label[_ngcontent-%COMP%]:hover {\n  background: #3bb356;\n}\n.tab-label[_ngcontent-%COMP%]::after {\n  content: \"\u276F\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding: 0 1em;\n  color: #45C261;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #45C261;\n  cursor: pointer;\n}\n.tab-close[_ngcontent-%COMP%]:hover {\n  background: #34a04c;\n}\ninput[_ngcontent-%COMP%]:checked    + .tab-label[_ngcontent-%COMP%] {\n  background: #34a04c;\n}\ninput[_ngcontent-%COMP%]:checked    + .tab-label[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n}\ninput[_ngcontent-%COMP%]:checked    ~ .tab-content[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  padding: 1em;\n}\n.answer_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n  line-height: 26px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWxwXFxoZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0loQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FERko7QUNLQTtFQUNJLGdCQUFBO0FERko7QUNLQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FERko7QUNLQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURGSjtBQ0tBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBREZKO0FDS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FERko7QUNNQTtFQUNJLGFBQUE7QURISjtBQ0tJO0VBQ0ksT0FBQTtBREhSO0FDS1E7RUFDSSxnQkFBQTtBREhaO0FDUUEscUJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBRExKO0FDUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FETEo7QUNPSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFuRUc7RUFvRUgsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBRExSO0FDT1E7RUFDSSxtQkFBQTtBRExaO0FDUVE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FETlo7QUNVSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0F4Rkc7RUF5RkgsaUJBQUE7RUFDQSxxQkFBQTtBRFJSO0FDV0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFsR0c7RUFtR0gsZUFBQTtBRFRSO0FDV1E7RUFDSSxtQkFBQTtBRFRaO0FDZ0JJO0VBQ0ksbUJBQUE7QURiUjtBQ2VRO0VBQ0ksd0JBQUE7QURiWjtBQ2lCSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBRGZSO0FDb0JBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEakJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDAuNWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJvdyAuY29sIHtcbiAgZmxleDogMTtcbn1cbi5yb3cgLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLyogQWNjb3JkaW9uIHN0eWxlcyAqL1xuLnRhYnMge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYmIzNTY7XG59XG4udGFiLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogIzQ1QzI2MTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM0YTA0Yztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMzRhMDRjO1xufVxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWw6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5hbnN3ZXJfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIiRtaWRuaWdodDogIzQ1QzI2MTtcbiRjbG91ZHM6ICNlY2YwZjE7XG4vLyBHZW5lcmFsXG5cbi5iYWNrX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAwIDAgLjVlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4vLyBMYXlvdXRcbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuY29sIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogQWNjb3JkaW9uIHN0eWxlcyAqL1xuLnRhYnMge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRhYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICRtaWRuaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvKiBJY29uICovXG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCA1JSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjc2RlwiO1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgY29sb3I6ICRtaWRuaWdodDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuICAgIH1cblxuICAgICYtY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIDpjaGVja2VkXG5pbnB1dDpjaGVja2VkIHtcbiAgICArLnRhYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgfi50YWItY29udGVudCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxufVxuXG5cbi5hbnN3ZXJfbGJsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.scss']
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
  "./src/app/components/help/help.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/help/help.module.ts ***!
    \************************************************/

  /*! exports provided: HelpModule */

  /***/
  function srcAppComponentsHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpModule", function () {
      return HelpModule;
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


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/components/help/help-routing.module.ts");
    /* harmony import */


    var _help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.component */
    "./src/app/components/help/help.component.ts");
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


    var HelpModule = function HelpModule() {
      _classCallCheck(this, HelpModule);
    };

    HelpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HelpModule
    });
    HelpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HelpModule_Factory(t) {
        return new (t || HelpModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelpModule, {
        declarations: [_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-help-help-module-es5.js.map