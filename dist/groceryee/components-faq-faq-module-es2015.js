(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-faq-faq-module"],{

/***/ "./src/app/components/faq/faq-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/faq/faq-routing.module.ts ***!
  \******************************************************/
/*! exports provided: FaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function() { return FaqRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component */ "./src/app/components/faq/faq.component.ts");
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
        component: _faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
    }
];
class FaqRoutingModule {
}
FaqRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqRoutingModule });
FaqRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqRoutingModule_Factory(t) { return new (t || FaqRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






const _c0 = function () { return { "border-radius": "5px", height: "10px", width: "100%" }; };
function FaqComponent_div_1_ngx_skeleton_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9]; };
function FaqComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqComponent_div_1_ngx_skeleton_loader_1_Template, 1, 2, "ngx-skeleton-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function FaqComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
} if (rf & 2) {
    const ctx_r983 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r983.getContent(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FaqComponent {
    constructor(api, util) {
        this.api = api;
        this.util = util;
        const param = {
            id: 5
        };
        this.loaded = false;
        this.api.post('pages/getById', param).subscribe((data) => {
            console.log(data);
            this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                const info = data.data[0];
                this.content = info.content;
            }
        }, error => {
            console.log(error);
            this.loaded = true;
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    ngOnInit() {
    }
    getContent() {
        return this.content;
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "theme", 4, "ngFor", "ngForOf"], [3, "theme"], [3, "innerHTML"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FaqComponent_p_2_Template, 1, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderComponent"]], styles: ["@charset \"UTF-8\";\n\n.back_image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 2;\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em;\n  font-weight: normal;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  margin-left: 1em;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);\n}\n.tab[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  background: #45C261;\n  font-weight: 500;\n  cursor: pointer;\n  \n}\n.tab-label[_ngcontent-%COMP%]:hover {\n  background: #3bb356;\n}\n.tab-label[_ngcontent-%COMP%]::after {\n  content: \"\u276F\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding: 0 1em;\n  color: #45C261;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: #45C261;\n  cursor: pointer;\n}\n.tab-close[_ngcontent-%COMP%]:hover {\n  background: #34a04c;\n}\ninput[_ngcontent-%COMP%]:checked    + .tab-label[_ngcontent-%COMP%] {\n  background: #34a04c;\n}\ninput[_ngcontent-%COMP%]:checked    + .tab-label[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n}\ninput[_ngcontent-%COMP%]:checked    ~ .tab-content[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  padding: 1em;\n}\n.answer_lbl[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n  line-height: 26px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZhcS9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXFcXGZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FERko7QUNLQTtFQUNJLGdCQUFBO0FERko7QUNLQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FERko7QUNLQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURGSjtBQ0lBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEREo7QUNJQTtFQUNJLGFBQUE7QURESjtBQ0VJO0VBQ1EsT0FBQTtBREFaO0FDRVk7RUFDSSxnQkFBQTtBREFoQjtBQ0lBLHFCQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QURESjtBQ0dBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREFKO0FDRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBOURHO0VBK0RILGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QURBUjtBQ0VRO0VBQ0ksbUJBQUE7QURBWjtBQ0dRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRERaO0FDS0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBbkZHO0VBb0ZILGlCQUFBO0VBQ0EscUJBQUE7QURIUjtBQ0tJO0VBQ1EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBNUZEO0VBNkZDLGVBQUE7QURIWjtBQ0lZO0VBQ0EsbUJBQUE7QURGWjtBQ1NJO0VBQ1EsbUJBQUE7QUROWjtBQ1FZO0VBQ0ksd0JBQUE7QUROaEI7QUNTSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBRFBSO0FDWUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDAuNWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJvdyAuY29sIHtcbiAgZmxleDogMTtcbn1cbi5yb3cgLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLyogQWNjb3JkaW9uIHN0eWxlcyAqL1xuLnRhYnMge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6ICM0NUMyNjE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYmIzNTY7XG59XG4udGFiLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogIzQ1QzI2MTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM0YTA0Yztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMzRhMDRjO1xufVxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWw6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5hbnN3ZXJfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4kbWlkbmlnaHQ6ICM0NUMyNjE7XG4kY2xvdWRzOiAjZWNmMGYxO1xuLy8gR2VuZXJhbFxuXG4uYmFja19pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxubGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgyIHtcbiAgICBtYXJnaW46IDAgMCAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAtMTtcbn1cbi8vIExheW91dFxuLnJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIC5jb2wge1xuICAgICAgICAgICAgZmxleDoxO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBBY2NvcmRpb24gc3R5bGVzICovXG4udGFicyB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjUpO1xufVxuLnRhYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICRtaWRuaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvKiBJY29uICovXG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1pZG5pZ2h0LCA1JSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjc2RlwiO1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgY29sb3I6ICRtaWRuaWdodDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuICAgIH1cbiAgICAmLWNsb3NlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkbWlkbmlnaHQsIDEwJSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIDpjaGVja2VkXG5pbnB1dDpjaGVja2VkIHtcbiAgICArIC50YWItbGFiZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRtaWRuaWdodCwgMTAlKTtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgfiAudGFiLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbn1cblxuXG4uYW5zd2VyX2xibHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/faq/faq.module.ts":
/*!**********************************************!*\
  !*** ./src/app/components/faq/faq.module.ts ***!
  \**********************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/components/faq/faq-routing.module.ts");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






class FaqModule {
}
FaqModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqModule });
FaqModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqModule_Factory(t) { return new (t || FaqModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqModule, { declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-faq-faq-module-es2015.js.map