(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-flutterwavecallback-flutterwavecallback-module"],{

/***/ "./src/app/components/flutterwavecallback/flutterwavecallback-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/flutterwavecallback/flutterwavecallback-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FlutterwavecallbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterwavecallbackRoutingModule", function() { return FlutterwavecallbackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _flutterwavecallback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flutterwavecallback.component */ "./src/app/components/flutterwavecallback/flutterwavecallback.component.ts");
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
        component: _flutterwavecallback_component__WEBPACK_IMPORTED_MODULE_2__["FlutterwavecallbackComponent"]
    }
];
class FlutterwavecallbackRoutingModule {
}
FlutterwavecallbackRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlutterwavecallbackRoutingModule });
FlutterwavecallbackRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlutterwavecallbackRoutingModule_Factory(t) { return new (t || FlutterwavecallbackRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlutterwavecallbackRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlutterwavecallbackRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/flutterwavecallback/flutterwavecallback.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/flutterwavecallback/flutterwavecallback.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FlutterwavecallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterwavecallbackComponent", function() { return FlutterwavecallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







class FlutterwavecallbackComponent {
    constructor(route, api, util, cart, router) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.status === 'successful') {
                console.log(data.transaction_id);
                console.log(localStorage.getItem('payTMOrderID'));
                console.log('deliveryAddress===============', localStorage.getItem('deliveryAddress'));
                this.cart.deliveryAt = localStorage.getItem('deliveryAt');
                this.cart.datetime = localStorage.getItem('datetime');
                console.log('date time->>>', this.cart.datetime);
                console.log('cart--->>>', this.cart.deliveryAt, localStorage.getItem('deliveryAt'));
                if (this.cart.deliveryAt === 'home') {
                    this.cart.deliveryAddress = JSON.parse(localStorage.getItem('deliveryAddress'));
                }
                const couponadded = localStorage.getItem('couponadded');
                console.log('couponaddedcouponaddedcouponaddedcouponaddedcouponaddedcouponadded', couponadded);
                if (couponadded && couponadded !== 'undefined' && couponadded !== undefined) {
                    this.cart.coupon = JSON.parse(couponadded);
                }
                this.cart.calcuate();
                this.createOrder('flutterwave', data.transaction_id);
            }
            else {
                localStorage.removeItem('payTMOrderID');
                localStorage.removeItem('deliveryAt');
                localStorage.removeItem('deliveryAddress');
                localStorage.removeItem('datetime');
                localStorage.removeItem('couponadded');
                this.router.navigate(['']);
            }
        });
    }
    ngOnInit() {
    }
    createOrder(payMethod, payKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //////////// new
            //////////// new
            const storeId = [...new Set(this.cart.cart.map(item => item.store_id))];
            const orderStatus = [];
            storeId.forEach(element => {
                const info = {
                    id: element,
                    status: 'created'
                };
                orderStatus.push(info);
            });
            const notes = [
                {
                    status: 1,
                    value: 'Order Created',
                    time: moment__WEBPACK_IMPORTED_MODULE_2__().format('lll'),
                }
            ];
            this.cart.deliveryAt = this.cart.deliveryAt ? this.cart.deliveryAt : '';
            const param = {
                uid: localStorage.getItem('uid'),
                store_id: storeId.join(),
                date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                paid_method: payMethod,
                order_to: this.cart.deliveryAt,
                orders: JSON.stringify(this.cart.cart),
                notes: JSON.stringify(notes),
                address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                driver_id: '',
                total: this.cart.totalPrice,
                tax: this.cart.orderTax,
                grand_total: this.cart.grandTotal,
                delivery_charge: this.cart.deliveryPrice,
                coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                discount: this.cart.discount,
                pay_key: payKey,
                status: JSON.stringify(orderStatus),
                assignee: ''
            };
            console.log('param----->', param);
            this.util.start();
            this.api.post('orders/save', param).subscribe((data) => {
                console.log(data);
                this.util.stop();
                localStorage.removeItem('payTMOrderID');
                localStorage.removeItem('deliveryAt');
                localStorage.removeItem('deliveryAddress');
                localStorage.removeItem('datetime');
                localStorage.removeItem('couponadded');
                this.api.createOrderNotification(this.cart.stores);
                this.cart.clearCart();
                this.util.publishNewOrder();
                this.router.navigate(['orders']);
            }, error => {
                console.log(error);
                this.util.stop();
                this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
            });
        });
    }
}
FlutterwavecallbackComponent.ɵfac = function FlutterwavecallbackComponent_Factory(t) { return new (t || FlutterwavecallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FlutterwavecallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FlutterwavecallbackComponent, selectors: [["app-flutterwavecallback"]], decls: 2, vars: 1, consts: [[2, "text-align", "center"]], template: function FlutterwavecallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Please wait, we are processing your order"), " ");
    } }, styles: ["@charset \"UTF-8\";\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbHV0dGVyd2F2ZWNhbGxiYWNrL2ZsdXR0ZXJ3YXZlY2FsbGJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmx1dHRlcndhdmVjYWxsYmFjay9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbHV0dGVyd2F2ZWNhbGxiYWNrXFxmbHV0dGVyd2F2ZWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmx1dHRlcndhdmVjYWxsYmFjay9mbHV0dGVyd2F2ZWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi8iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlutterwavecallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-flutterwavecallback',
                templateUrl: './flutterwavecallback.component.html',
                styleUrls: ['./flutterwavecallback.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }, { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/flutterwavecallback/flutterwavecallback.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/flutterwavecallback/flutterwavecallback.module.ts ***!
  \******************************************************************************/
/*! exports provided: FlutterwavecallbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterwavecallbackModule", function() { return FlutterwavecallbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _flutterwavecallback_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flutterwavecallback-routing.module */ "./src/app/components/flutterwavecallback/flutterwavecallback-routing.module.ts");
/* harmony import */ var _flutterwavecallback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flutterwavecallback.component */ "./src/app/components/flutterwavecallback/flutterwavecallback.component.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





class FlutterwavecallbackModule {
}
FlutterwavecallbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlutterwavecallbackModule });
FlutterwavecallbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlutterwavecallbackModule_Factory(t) { return new (t || FlutterwavecallbackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _flutterwavecallback_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlutterwavecallbackRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlutterwavecallbackModule, { declarations: [_flutterwavecallback_component__WEBPACK_IMPORTED_MODULE_3__["FlutterwavecallbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _flutterwavecallback_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlutterwavecallbackRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlutterwavecallbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_flutterwavecallback_component__WEBPACK_IMPORTED_MODULE_3__["FlutterwavecallbackComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _flutterwavecallback_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlutterwavecallbackRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-flutterwavecallback-flutterwavecallback-module-es2015.js.map