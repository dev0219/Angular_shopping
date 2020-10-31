function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-reset-reset-module"], {
  /***/
  "./src/app/components/reset/reset-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/reset/reset-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: ResetRoutingModule */

  /***/
  function srcAppComponentsResetResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetRoutingModule", function () {
      return ResetRoutingModule;
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


    var _reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reset.component */
    "./src/app/components/reset/reset.component.ts");
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
      component: _reset_component__WEBPACK_IMPORTED_MODULE_2__["ResetComponent"]
    }];

    var ResetRoutingModule = function ResetRoutingModule() {
      _classCallCheck(this, ResetRoutingModule);
    };

    ResetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResetRoutingModule
    });
    ResetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResetRoutingModule_Factory(t) {
        return new (t || ResetRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetRoutingModule, [{
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
  "./src/app/components/reset/reset.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/reset/reset.component.ts ***!
    \*****************************************************/

  /*! exports provided: ResetComponent */

  /***/
  function srcAppComponentsResetResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
      return ResetComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


    function ResetComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r971 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetComponent_div_8_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r971);

          var ctx_r970 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r970.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_8_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r971);

          var ctx_r972 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r972.sendOTP();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r966 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r966.util.getString("Email"))("ngModel", ctx_r966.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r966.util.getString("Send OTP"), " ");
      }
    }

    function ResetComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r974 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetComponent_div_9_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r974);

          var ctx_r973 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r973.otp = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_9_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r974);

          var ctx_r975 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r975.verifyOTP();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r967 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r967.util.getString("OTP"))("ngModel", ctx_r967.otp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r967.util.getString("Verify OTP"), " ");
      }
    }

    function ResetComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r977 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetComponent_div_10_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r977);

          var ctx_r976 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r976.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetComponent_div_10_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r977);

          var ctx_r978 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r978.repass = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_div_10_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r977);

          var ctx_r979 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r979.sendEmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r968 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r968.util.getString("New Password"))("ngModel", ctx_r968.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r968.util.getString("Confirm Password"))("ngModel", ctx_r968.repass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r968.util.getString("Reset Password"), " ");
      }
    }

    function ResetComponent_label_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r981 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetComponent_label_12_Template_label_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r981);

          var ctx_r980 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r980.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r969 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r969.util.getString("Login Back"), " ");
      }
    }

    var ResetComponent =
    /*#__PURE__*/
    function () {
      function ResetComponent(navCtrl, api, util) {
        _classCallCheck(this, ResetComponent);

        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.currentDiv = 1;
        this.sent = false;
        this.email = '';
        this.otp = '';
        this.password = '';
        this.repass = '';
        this.verified = false;
      }

      _createClass(ResetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.back();
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this = this;

          console.log(this.email, ';sendOTPDriver');

          if (!this.email) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('email is required'));
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Please enter valid email'));
            return false;
          } // this.util.start();


          this.util.start();
          var param = {
            email: this.email
          };
          this.api.post('users/sendOTP', param).subscribe(function (data) {
            console.log(data);

            _this.util.stop();

            if (data && data.status === 200) {
              _this.id = data.data.id;

              _this.util.stop();

              _this.currentDiv = 2;
            } else {
              if (data && data.status === 500 && data.data && data.data.message) {
                // this.util.errorToast(data.data.message);
                _this.util.toast('error', _this.util.getString('Error'), data.data.message);

                return false;
              } // this.util.errorToast('Something went wrong');


              _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));

              return false;
            }
          }, function (error) {
            console.log(error);

            _this.util.stop();

            _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP() {
          var _this2 = this;

          // this.currentDiv = 3;
          if (!this.otp || this.otp === '') {
            // this.util.showToast('otp is required', 'dark', 'bottom');
            this.util.toast('error', this.util.getString('Error'), this.util.getString('otp is required'));
            return false;
          }

          this.util.start();
          var param = {
            id: this.id,
            otp: this.otp
          };
          this.api.post('users/verifyOTP', param).subscribe(function (data) {
            console.log(data);

            _this2.util.stop();

            if (data && data.status === 200) {
              _this2.util.stop();

              _this2.currentDiv = 3;
            } else {
              if (data && data.status === 500 && data.data && data.data.message) {
                _this2.util.toast('error', _this2.util.getString('Error'), data.data.message);

                return false;
              }

              _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('Something went wrong'));

              return false;
            }
          }, function (error) {
            console.log(error);

            _this2.util.stop();

            _this2.util.toast('error', _this2.util.getString('Error'), _this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this3 = this;

          console.log('pwddd0<<<<<<', this.password);

          if (!this.password || !this.repass || this.password === '' || this.repass === '') {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('All Field are required'));
            return false;
          }

          var param = {
            email: this.email,
            pwd: this.password
          };
          this.util.start();
          this.api.post('users/update_password', param).subscribe(function (data) {
            console.log(data);

            _this3.util.stop();

            if (data && data.status === 200) {
              _this3.util.stop();

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
                title: _this3.util.getString('Password Updated')
              });

              _this3.back();
            } else {
              if (data && data.status === 500 && data.data && data.data.message) {
                _this3.util.toast('error', _this3.util.getString('Error'), data.data.message);

                return false;
              }

              _this3.util.toast('error', _this3.util.getString('Error'), _this3.util.getString('Something went wrong'));

              return false;
            }
          }, function (error) {
            console.log(error);

            _this3.util.stop();

            _this3.util.toast('error', _this3.util.getString('Error'), _this3.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return ResetComponent;
    }();

    ResetComponent.ɵfac = function ResetComponent_Factory(t) {
      return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]));
    };

    ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetComponent,
      selectors: [["app-reset"]],
      decls: 14,
      vars: 5,
      consts: [[1, "container"], [1, "row", "form_row"], [1, "col-lg-4"], [1, "form_div"], [1, "head_title"], [4, "ngIf"], ["class", "bottom_lbl", 3, "click", 4, "ngIf"], ["type", "email", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", 3, "click"], ["type", "number", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "password", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "bottom_lbl", 3, "click"]],
      template: function ResetComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetComponent_div_8_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetComponent_div_9_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetComponent_div_10_Template, 5, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResetComponent_label_12_Template, 2, 1, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Reset Password"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentDiv === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentDiv === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentDiv === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.util.userInfo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]],
      styles: ["@charset \"UTF-8\";\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.form_row[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n.form_div[_ngcontent-%COMP%] {\n  padding: 25px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.form_div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  color: #45C261;\n  font-weight: 400;\n  text-align: right;\n  cursor: pointer;\n}\n.form_div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #45C261;\n  color: white;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%]:hover {\n  color: #45C261;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNldC9yZXNldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXNldC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXNldFxccmVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLGlCQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtBREdKO0FDREk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FER1I7QUNEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBREdaO0FDQ0k7RUFDSSxtQkFBQTtBRENSO0FDRUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURBUjtBQ0dJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUREUjtBQ0lJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURGUjtBQ0tJO0VBQ0ksY0FBQTtBREhSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNldC9yZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3cge1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cblxuLmZvcm1fZGl2IHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmZvcm1fZGl2IC5oZWFkX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtX2RpdiAuaGVhZF90aXRsZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3JtX2RpdiBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGNvbG9yOiAjNDVDMjYxO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm1fZGl2IC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcm1fZGl2IC5ib3R0b21fbGJsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybV9kaXYgLmJvdHRvbV9sYmw6aG92ZXIge1xuICBjb2xvcjogIzQ1QzI2MTtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3d7XG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4uZm9ybV9kaXZ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNCk7XG5cbiAgICAuaGVhZF90aXRsZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAuZm9yZ290e1xuICAgICAgICBjb2xvcjogIzQ1QzI2MTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5ib3R0b21fbGJse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuYm90dG9tX2xibDpob3ZlcntcbiAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4gICAgfVxufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset',
          templateUrl: './reset.component.html',
          styleUrls: ['./reset.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reset/reset.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/reset/reset.module.ts ***!
    \**************************************************/

  /*! exports provided: ResetModule */

  /***/
  function srcAppComponentsResetResetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetModule", function () {
      return ResetModule;
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


    var _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reset-routing.module */
    "./src/app/components/reset/reset-routing.module.ts");
    /* harmony import */


    var _reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset.component */
    "./src/app/components/reset/reset.component.ts");
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


    var ResetModule = function ResetModule() {
      _classCallCheck(this, ResetModule);
    };

    ResetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResetModule
    });
    ResetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResetModule_Factory(t) {
        return new (t || ResetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetModule, {
        declarations: [_reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-reset-reset-module-es5.js.map