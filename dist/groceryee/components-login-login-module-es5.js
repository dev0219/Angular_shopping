function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-login-login-module"], {
  /***/
  "./src/app/components/login/login-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/login/login-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppComponentsLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/components/login/login.component.ts");
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
      component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginRoutingModule_Factory(t) {
        return new (t || LoginRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
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
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, util, api, navCtrl) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.email = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToRegister",
        value: function goToRegister() {
          this.router.navigate(['/register']);
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          var _this = this;

          if (!this.email || !this.password) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('All Fields are required'));
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Please enter valid email'));
            return false;
          }

          var param = {
            email: this.email,
            password: this.password
          };
          this.util.start();
          this.api.post('users/login', param).subscribe(function (data) {
            _this.util.stop();

            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.type === 'user') {
                if (data.data.status === '1') {
                  localStorage.setItem('uid', data.data.id);
                  _this.util.userInfo = data.data;
                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: function onOpen(toast) {
                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
                    }
                  });
                  Toast.fire({
                    icon: 'success',
                    title: _this.util.getString('Signed in successfully')
                  }); // this.router.navigate(['/home']);

                  _this.navCtrl.back();
                } else {
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: _this.util.getString('Error'),
                    text: _this.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      localStorage.setItem('helpId', data.data.id);

                      _this.router.navigate(['inbox']);
                    }
                  });
                }
              } else {
                _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Not valid user'));

                _this.email = '';
                _this.password = '';
              }
            } else if (data && data.status === 500) {
              _this.util.toast('error', _this.util.getString('Error'), data.data.message);
            } else {
              _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);

            _this.util.stop();

            _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          console.log('reset password');
          this.router.navigate(['reset']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 18,
      vars: 8,
      consts: [[1, "container"], [1, "row", "form_row"], [1, "col-lg-4"], [1, "form_div"], [1, "head_title"], ["type", "email", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "password", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "forgot", 3, "click"], ["type", "button", 1, "btn", 3, "click"], [1, "bottom_lbl", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_label_click_10_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
            return ctx.goToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_label_click_15_listener() {
            return ctx.goToRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Login"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.util.getString("Email"))("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.util.getString("Password"))("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Forgot Password ?"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Login"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Create New Account"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["@charset \"UTF-8\";\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.form_row[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n.form_div[_ngcontent-%COMP%] {\n  padding: 25px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.form_div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  color: #45C261;\n  font-weight: 400;\n  text-align: right;\n  cursor: pointer;\n}\n.form_div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #45C261;\n  color: white;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%]:hover {\n  color: #45C261;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLGlCQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtBREdKO0FDREk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FER1I7QUNEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBREdaO0FDQ0k7RUFDSSxtQkFBQTtBRENSO0FDRUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURBUjtBQ0dJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUREUjtBQ0lJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURGUjtBQ0tJO0VBQ0ksY0FBQTtBREhSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3cge1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cblxuLmZvcm1fZGl2IHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmZvcm1fZGl2IC5oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtX2RpdiAuaGVhZF90aXRsZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3JtX2RpdiBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGNvbG9yOiAjNDVDMjYxO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm1fZGl2IC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcm1fZGl2IC5ib3R0b21fbGJsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybV9kaXYgLmJvdHRvbV9sYmw6aG92ZXIge1xuICBjb2xvcjogIzQ1QzI2MTtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3d7XG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4uZm9ybV9kaXZ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNCk7XG5cbiAgICAuaGVhZF90aXRsZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAuZm9yZ290e1xuICAgICAgICBjb2xvcjogIzQ1QzI2MTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5ib3R0b21fbGJse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuYm90dG9tX2xibDpob3ZlcntcbiAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4gICAgfVxufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/login/login.module.ts ***!
    \**************************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppComponentsLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/components/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/components/login/login.component.ts");
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


    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-login-login-module-es5.js.map