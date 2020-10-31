(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chats-chats-module"],{

/***/ "./src/app/components/chats/chats-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/chats/chats-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ChatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsRoutingModule", function() { return ChatsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.component */ "./src/app/components/chats/chats.component.ts");
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
        component: _chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"]
    }
];
class ChatsRoutingModule {
}
ChatsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsRoutingModule });
ChatsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsRoutingModule_Factory(t) { return new (t || ChatsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chats/chats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/chats/chats.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");










const _c0 = ["basicModal"];
const _c1 = ["scrollMe"];
function ChatsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatsComponent_span_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1325.message);
} }
function ChatsComponent_span_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1325.message);
} }
function ChatsComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatsComponent_span_15_div_1_Template, 5, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatsComponent_span_15_div_2_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1325 = ctx.$implicit;
    const ctx_r1321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1325.from_id != ctx_r1321.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1325.from_id == ctx_r1321.uid);
} }
function ChatsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "background-image": a0 }; };
function ChatsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r1332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_div_34_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1332); const item_r1330 = ctx.$implicit; const ctx_r1331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1331.onChat(item_r1330); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1330 = ctx.$implicit;
    const ctx_r1323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, "url(" + ctx_r1323.api.mediaURL + item_r1330.cover + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1330.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1330.mobile);
} }
const _c3 = function () { return { "border-radius": "5px", height: "120px", width: "100%" }; };
function ChatsComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return [1, 2, 3, 4, 5, 6, 7, 8]; };
function ChatsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatsComponent_div_35_div_2_Template, 2, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return { backdrop: true, ignoreBackdropClick: true }; };
const _c6 = function () { return { "background-image": "url(assets/imgs/user.png)" }; };
class ChatsComponent {
    constructor(api, util, router) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.dummy = [];
        this.users = [];
        this.msg = '';
        this.messages = [];
        this.uid = localStorage.getItem('uid');
        this.getChats();
    }
    ngOnInit() {
    }
    getChats() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.dummy = Array(10);
        this.api.post('chats/getByGroup', param).subscribe((data) => {
            console.log(data);
            if (data && data.status === 200) {
                const info = [];
                data.data.forEach(element => {
                    info.push(element.from_id);
                    info.push(element.room_id);
                });
                let uniq = [...new Set(info)];
                uniq = uniq.filter(x => x !== localStorage.getItem('uid'));
                console.log('uniq->>', uniq);
                const uid = {
                    id: uniq.join()
                };
                this.api.post('stores/getChatsNames', uid).subscribe((uids) => {
                    this.dummy = [];
                    console.log(uids);
                    if (uids && uids.status === 200) {
                        this.users = uids.data;
                    }
                }, error => {
                    console.log(error);
                    this.users = [];
                    this.dummy = [];
                    this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                });
            }
            else {
                this.dummy = [];
            }
        }, error => {
            console.log(error);
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    onAdmin() {
        this.id = 0;
        this.loaded = false;
        this.name = 'Support';
        this.getInbox();
        this.interval = setInterval(() => {
            console.log('calling in interval');
            this.getInbox();
        }, 12000);
        this.basicModal.show();
    }
    onChat(item) {
        console.log(localStorage.getItem('uid'));
        this.id = item.id;
        this.loaded = false;
        this.name = item.name;
        this.getInbox();
        this.interval = setInterval(() => {
            console.log('calling in interval');
            this.getInbox();
        }, 12000);
        this.basicModal.show();
    }
    getInbox() {
        const param = {
            id: this.id + '_' + this.uid,
            oid: this.id
        };
        this.api.post('chats/getById', param).subscribe((data) => {
            console.log(data);
            this.loaded = true;
            this.yourMessage = true;
            if (data && data.status === 200) {
                this.messages = data.data;
                this.scrollToBottom();
            }
        }, error => {
            console.log(error);
            this.loaded = true;
            this.yourMessage = true;
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    scrollToBottom() {
        console.log(this.scrollMe.nativeElement.scrollTop);
        this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
        console.log(this.scrollMe.nativeElement.scrollTop);
        // try {
        // } catch (err) { }
    }
    closeModal() {
        clearInterval(this.interval);
        this.basicModal.hide();
    }
    sendMessage() {
        // store to opponent
        console.log(this.msg);
        if (!this.msg || this.msg === '') {
            return false;
        }
        const msg = this.msg;
        this.msg = '';
        const param = {
            room_id: this.id,
            uid: this.id + '_' + this.uid,
            from_id: this.uid,
            message: msg,
            message_type: 'users',
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
        };
        // this.myContent.scrollToBottom(300);
        this.yourMessage = false;
        this.api.post('chats/save', param).subscribe((data) => {
            console.log(data);
            if (data && data.status === 200) {
                this.getInbox();
            }
            else {
                this.yourMessage = true;
            }
        }, error => {
            console.log(error);
            this.yourMessage = true;
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chats"]], viewQuery: function ChatsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollMe = _t.first);
    } }, decls: 36, vars: 13, consts: [[1, "container"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bottom", 2, "z-index", "9999", 3, "config"], ["basicModal", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100"], [1, "modal-body"], ["style", "display: flex;flex-direction: column;justify-content: center;align-items: center;", 4, "ngIf"], [1, "main_content_div"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], ["style", "display: flex;flex-direction: row-reverse;padding: 20px;", 4, "ngIf"], [1, "modal-footer"], [2, "width", "100%"], [1, "md-form"], ["type", "text", "id", "form8", "rows", "1", "mdbInput", "", "mdbValidate", "", 1, "md-textarea", "form-control", 3, "ngModel", "ngModelChange"], ["for", "form8"], ["type", "button", "mdbBtn", "", "color", "secondary", "aria-label", "Close", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", 3, "click"], [1, "row"], [1, "col-12", "col-md-6", 2, "cursor", "pointer", 3, "click"], [1, "boxed"], [1, "img_div", 3, "ngStyle"], [1, "name"], ["class", "col-12 col-md-6", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], ["class", "left_div", 4, "ngIf"], ["class", "right_div", 4, "ngIf"], [1, "left_div"], [1, "inner_div"], [1, "msg_div"], [1, "right_div"], [2, "display", "flex", "flex-direction", "row-reverse", "padding", "20px"], [1, "mbl"], [1, "row", 2, "overflow", "hidden"], ["class", "col-12 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6"], [3, "theme"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_6_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatsComponent_div_12_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatsComponent_span_15_Template, 3, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatsComponent_div_16_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatsComponent_Template_textarea_ngModelChange_20_listener($event) { return ctx.msg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_24_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_26_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_29_listener() { return ctx.onAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChatsComponent_div_34_Template, 8, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChatsComponent_div_35_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.yourMessage && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Type Here.."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Support"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dummy);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbValidateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"]], styles: ["@charset \"UTF-8\";\n\n.boxed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.boxed[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n  margin: 5px;\n}\n.boxed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0px;\n  margin-left: 20px;\n}\n.main_content_div[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div[_ngcontent-%COMP%]   .left_div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div[_ngcontent-%COMP%]   .left_div[_ngcontent-%COMP%]   .inner_div[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.main_content_div[_ngcontent-%COMP%]   .left_div[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%] {\n  background: #F0EFF5;\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-left: 5px;\n}\n.main_content_div[_ngcontent-%COMP%]   .right_div[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  justify-content: flex-end;\n}\n.main_content_div[_ngcontent-%COMP%]   .right_div[_ngcontent-%COMP%]   .inner_div[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content_div[_ngcontent-%COMP%]   .right_div[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%] {\n  background-color: #45C261 !important;\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-right: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0cy9jaGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0cy9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0c1xcY2hhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREVGO0FDREU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURHSjtBQ0RFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FER0o7QUNDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FERVI7QUNDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURDUjtBQ0NRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FEQ1o7QUNFUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEQVo7QUNHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRERSO0FDSVE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURGWjtBQ0tRO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FESFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5ib3hlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm94ZWQgLmltZ19kaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmJveGVkIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLm1zZ19kaXYge1xuICBiYWNrZ3JvdW5kOiAjRjBFRkY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAubXNnX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NUMyNjEgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYm94ZWR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5pbWdfZGl2e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAubmFtZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICB9XG5cbiAgICAubGVmdF9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIC5pbm5lcl9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMEVGRjU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NUMyNjEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chats',
                templateUrl: './chats.component.html',
                styleUrls: ['./chats.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { basicModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicModal']
        }], scrollMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollMe']
        }] }); })();


/***/ }),

/***/ "./src/app/components/chats/chats.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/chats/chats.module.ts ***!
  \**************************************************/
/*! exports provided: ChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-routing.module */ "./src/app/components/chats/chats-routing.module.ts");
/* harmony import */ var _chats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.component */ "./src/app/components/chats/chats.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








class ChatsModule {
}
ChatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsModule });
ChatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsModule_Factory(t) { return new (t || ChatsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsModule, { declarations: [_chats_component__WEBPACK_IMPORTED_MODULE_3__["ChatsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chats_component__WEBPACK_IMPORTED_MODULE_3__["ChatsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-chats-chats-module-es2015.js.map