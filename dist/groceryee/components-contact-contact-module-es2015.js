(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contact-contact-module"],{

/***/ "./src/app/components/contact/contact-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/contact/contact-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





const routes = [
    {
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }
];
class ContactRoutingModule {
}
ContactRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactRoutingModule });
ContactRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactRoutingModule_Factory(t) { return new (t || ContactRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/









function ContactComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mdb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mdb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mdb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mdb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mdb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r830.util.general.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r830.util.general.city, " - ", ctx_r830.util.general.country, " - ", ctx_r830.util.general.zip, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r830.util.general.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r830.util.general.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r830.util.general.email, " ");
} }
class ContactComponent {
    constructor(util, api) {
        this.util = util;
        this.api = api;
        this.contact = {
            name: '',
            email: '',
            message: '',
            status: '0',
            date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD')
        };
        console.log('general', this.util.general);
    }
    ngOnInit() {
    }
    submit() {
        console.log('contact', this.contact);
        if (this.contact.name === '' || this.contact.email === '' || this.contact.message === '') {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('All Fields are required'));
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.contact.email)) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Please enter valid email'));
            return false;
        }
        this.util.start();
        this.api.post('contacts/save', this.contact).subscribe((data) => {
            this.util.stop();
            const param = {
                email: this.contact.email
            };
            this.api.post('users/contactResponse', param).subscribe((data) => {
                console.log(data);
            }, error => {
                console.log(error);
            });
            this.contact.email = '';
            this.contact.name = '';
            this.contact.message = '';
            if (data && data.status === 200) {
                this.success();
            }
            else {
                this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.util.stop();
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    success() {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: this.util.getString('message sent successfully')
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 13, vars: 9, consts: [[1, "container"], [1, "head_title"], [1, "row"], [1, "col-lg-6"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["rows", "5", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "button", "mdbWavesEffect", "", "mdbBtn", "", 1, "btn", 3, "click"], ["class", "address_div", 4, "ngIf"], [1, "address_div"], [1, "flex_box"], ["fas", "", "icon", "home"], ["fas", "", "icon", "envelope"], ["fas", "", "icon", "phone-alt"], ["fas", "", "icon", "print"], ["for", ""]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_6_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_7_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactComponent_div_12_Template, 21, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Contact US"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name)("placeholder", ctx.util.getString("Full Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email)("placeholder", ctx.util.getString("Email ID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message)("placeholder", ctx.util.getString("Write Message.."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.util.general && ctx.util.general.address);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"]], styles: ["@charset \"UTF-8\";\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.row[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #45C261;\n  border-radius: 3px;\n  color: white;\n  width: 100px;\n  margin-top: 30px;\n  width: 160px;\n}\n.address_div[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n  padding-left: 20px;\n}\n.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  font-size: 12px;\n}\n.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%]   mdb-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n  color: #45C261;\n}\n.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksY0FBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FERUo7QUNBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBREVSO0FDRUE7RUFDSSxnQkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEQ1I7QUNBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURFWjtBQ0NRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZF90aXRsZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLmFkZHJlc3NfZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uYWRkcmVzc19kaXYgLmZsZXhfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmFkZHJlc3NfZGl2IC5mbGV4X2JveCBtZGItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzQ1QzI2MTtcbn1cbi5hZGRyZXNzX2RpdiAuZmxleF9ib3ggbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZF90aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLnJvd3tcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5pbnB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYnRue1xuICAgIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTYwcHg7XG59XG5cbi5hZGRyZXNzX2RpdntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAuZmxleF9ib3h7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWRiLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ1QzI2MTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/contact/contact.module.ts ***!
  \******************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/components/contact/contact-routing.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-contact-contact-module-es2015.js.map