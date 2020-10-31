(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"],{

/***/ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r282.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const i_r281 = ctx.index; const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r284.onKeyUp($event, i_r281); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r280 = ctx.$implicit;
    const i_r281 = ctx.index;
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r279.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r281, "_", ctx_r279.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r279.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r279.inputType)("placeholder", (ctx_r279.config == null ? null : ctx_r279.config.placeholder) || "")("disabledNumberOnly", !ctx_r279.config.allowNumbersOnly)("ngStyle", ctx_r279.config.inputStyles)("formControl", ctx_r279.otpForm.controls[item_r280]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r278.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r278.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r278.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r278.otpForm == null ? null : ctx_r278.otpForm.controls));
} }
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            /** @type {?} */
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            /** @type {?} */
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); }, providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent,
        KeysPipe,
        NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]; }, exports: function () { return [NgOtpInputComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "./src/app/components/register/register-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/components/register/register.component.ts");
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
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
class RegisterRoutingModule {
}
RegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterRoutingModule });
RegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterRoutingModule_Factory(t) { return new (t || RegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/











const _c0 = ["frame"];
function RegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r843 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_40_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r843); const item_r841 = ctx.$implicit; const ctx_r842 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r842.selectedCC(item_r841); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r841 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("+", item_r841.dialling_code, " ", item_r841.country_name, "");
} }
const _c1 = function () { return { backdrop: true, ignoreBackdropClick: true }; };
const _c2 = function () { return { "width": "30px", "height": "30px" }; };
const _c3 = function (a1) { return { length: 6, inputStyles: a1 }; };
class RegisterComponent {
    constructor(router, api, util) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.fname = '';
        this.lname = '';
        this.mobile = '';
        this.gender = '1';
        this.email = '';
        this.password = '';
        this.textCode = '';
        this.userCode = '';
        this.cc = '';
        this.ccCode = '';
        this.countries = [];
        this.dummy = [];
        this.dummy = this.util.countrys;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    selectedCC(item) {
        this.countries = [];
        console.log(item);
        this.cc = '+' + item.dialling_code + ' ' + item.country_name;
        this.ccCode = item.dialling_code;
    }
    onCountryInput(events) {
        console.log(events);
        if (events !== '') {
            this.countries = this.dummy.filter((item) => {
                return item.country_name.toLowerCase().indexOf(events.toLowerCase()) > -1;
            });
        }
        else {
            this.countries = [];
        }
    }
    sendOTP() {
        console.log('uid-->>', this.uid);
        this.umobile = '+' + this.ccCode + this.mobile;
        console.log(this.umobile);
        const message = this.util.getString('Your Grocery app verification code : ');
        const param = {
            msg: message,
            to: this.umobile
        };
        console.log(param);
        this.util.start();
        this.api.post('users/twilloMessage', param).subscribe((data) => {
            console.log(data);
            this.id = data.data.id;
            this.util.stop();
        }, error => {
            console.log(error);
            this.util.stop();
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
        });
    }
    continue() {
        console.log(this.userCode);
        console.log('uid-->>', this.uid);
        if (this.userCode === '' || !this.userCode) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Not valid code'));
            return false;
        }
        if (this.userCode) {
            const param = {
                id: this.id,
                otp: this.userCode
            };
            this.util.start();
            this.api.post('users/verifyOTP', param).subscribe((data) => {
                console.log(data);
                if (data && data.status === 200) {
                    const params = {
                        status: 1,
                        id: this.uid
                    };
                    this.api.post('users/edit_profile', params).subscribe((data) => {
                        this.util.stop();
                        console.log(data);
                        localStorage.setItem('uid', this.uid);
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            onOpen: (toast) => {
                                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.stopTimer);
                                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.resumeTimer);
                            }
                        });
                        Toast.fire({
                            icon: 'success',
                            title: this.util.getString('Signed up successfully')
                        });
                        this.router.navigate(['/home']);
                    }, error => {
                        this.util.stop();
                        console.log(error);
                        this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                    });
                }
                else {
                    this.util.stop();
                    if (data && data.status === 500 && data.data && data.data.message) {
                        // this.util.errorToast(data.data.message);
                        this.util.toast('error', this.util.getString('Error'), data.data.message);
                        return false;
                    }
                    this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
                    return false;
                }
            }, error => {
                this.util.stop();
                console.log(error);
                this.util.toast('error', this.util.getString('Error'), this.util.getString('Something went wrong'));
            });
        }
        else {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Not valid code'));
            return false;
        }
    }
    goToHome() {
        if (!this.fname || !this.lname || !this.mobile || !this.email || !this.password || this.ccCode === '' || !this.ccCode) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('All Fields are required'));
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.util.toast('error', this.util.getString('Error'), this.util.getString('Please enter valid email'));
            return false;
        }
        const param = {
            first_name: this.fname,
            last_name: this.lname,
            email: this.email,
            password: this.password,
            gender: this.gender,
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
            type: 'user',
            lat: '',
            lng: '',
            cover: 'NA',
            mobile: this.ccCode + this.mobile,
            status: this.util.twillo === '1' ? 0 : 1,
            verified: 0,
            others: 1,
            date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
            stripe_key: ''
        };
        this.util.start();
        this.api.post('users/registerUser', param).subscribe((data) => {
            this.util.stop();
            console.log(data);
            if (data && data.status === 200) {
                if (this.util.twillo === '1') {
                    this.uid = data.data.id;
                    this.sendOTP();
                    this.frame.show();
                    setTimeout(() => {
                        this.resendCode = true;
                    }, 30000);
                }
                else {
                    localStorage.setItem('uid', data.data.id);
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.stopTimer);
                            toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.resumeTimer);
                        }
                    });
                    Toast.fire({
                        icon: 'success',
                        title: this.util.getString('Signed up successfully')
                    });
                    this.sendVerification(this.email, this.api.baseUrl + 'users/verify?uid=' + data.data.id);
                    this.router.navigate(['/home']);
                }
            }
            else if (data && data.status === 500) {
                this.util.toast('error', this.util.getString('Error'), data.data.message);
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
    sendVerification(mail, link) {
        const param = {
            email: mail,
            url: link
        };
        this.api.post('users/sendVerificationMail', param).subscribe((data) => {
            console.log('mail', data);
        }, error => {
            console.log(error);
        });
    }
    onOtpChange(event) {
        console.log(event);
        this.userCode = event;
    }
    resend() {
        this.sendOTP();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.frame = _t.first);
    } }, decls: 55, vars: 33, consts: [[1, "container"], ["mdbModal", "", "id", "frameModalTop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", "center", 2, "z-index", "9999", 3, "config"], ["frame", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-success"], [1, "modal-content"], [1, "modal-header"], [1, "heading", "lead", 2, "text-align", "center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "white-text"], [1, "modal-body"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "contents"], [1, "headerText"], [1, "subTitleText"], [1, "otpInputs"], [3, "config", "onInputChange"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "modal-footer", "justify-content-center"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], [1, "row", "form_row"], [1, "col-lg-4"], [1, "form_div"], [1, "head_title"], ["type", "email", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "password", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["class", "cCode", 3, "click", 4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "browser-default", "custom-select", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "0"], ["value", "2"], ["type", "button", 1, "btn", 3, "click"], [1, "bottom_lbl", 3, "click"], [1, "cCode", 3, "click"], [1, "ccLbl"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r844 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r844); const _r839 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r839.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-otp-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function RegisterComponent_Template_ng_otp_input_onInputChange_22_listener($event) { return ctx.onOtpChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_23_listener() { return ctx.resend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_26_listener() { return ctx.continue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_37_listener($event) { return ctx.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_38_listener($event) { return ctx.lname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) { return ctx.cc = $event; })("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) { return ctx.onCountryInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_div_40_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_41_listener($event) { return ctx.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_42_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_49_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_label_click_52_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Verify"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Verification"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("We texted you a code to verify"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.util.getString("your phone"), " ", ctx.umobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.util.getString("Resend code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Create Account"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("placeholder", ctx.util.getString("Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("placeholder", ctx.util.getString("Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fname)("placeholder", ctx.util.getString("First Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lname)("placeholder", ctx.util.getString("Last Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cc)("placeholder", ctx.util.getString("Select your Country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobile)("placeholder", ctx.util.getString("Mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Male"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Female"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Others"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Create Account"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.util.getString("Already have an account ? Login"), " ");
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["ɵa"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], styles: ["@charset \"UTF-8\";\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.form_row[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n.contents[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.form_div[_ngcontent-%COMP%] {\n  padding: 25px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.form_div[_ngcontent-%COMP%]   .head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 26px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.form_div[_ngcontent-%COMP%]   .cCode[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.form_div[_ngcontent-%COMP%]   .cCode[_ngcontent-%COMP%]   .ccLbl[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #45C261;\n  padding: 5px;\n}\n.form_div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #45C261;\n  color: white;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n}\n.form_div[_ngcontent-%COMP%]   .bottom_lbl[_ngcontent-%COMP%]:hover {\n  color: #45C261;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLGlCQUFBO0FERUo7QUNDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLDBDQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURFUjtBQ0FRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FERVo7QUNFSTtFQUNJLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBREFSO0FDQ1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURDVjtBQ0VJO0VBQ0ksbUJBQUE7QURBUjtBQ0dJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUREUjtBQ0lJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURGUjtBQ0tJO0VBQ0ksY0FBQTtBREhSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3cge1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cblxuLmNvbnRlbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtX2RpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5mb3JtX2RpdiAuaGVhZF90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybV9kaXYgLmhlYWRfdGl0bGUgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDA7XG59XG4uZm9ybV9kaXYgLmNDb2RlIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mb3JtX2RpdiAuY0NvZGUgLmNjTGJsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjNDVDMjYxO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZm9ybV9kaXYgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm1fZGl2IC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcm1fZGl2IC5ib3R0b21fbGJsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZm9ybV9kaXYgLmJvdHRvbV9sYmw6aG92ZXIge1xuICBjb2xvcjogIzQ1QzI2MTtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yb3d7XG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG5cbi5jb250ZW50c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtX2RpdntcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC40KTtcblxuICAgIC5oZWFkX3RpdGxle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jQ29kZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgLmNjTGJse1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNDVDMjYxO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVDMjYxO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5ib3R0b21fbGJse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICAuYm90dG9tX2xibDpob3ZlcntcbiAgICAgICAgY29sb3I6ICM0NUMyNjE7XG4gICAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }]; }, { frame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['frame']
        }] }); })();


/***/ }),

/***/ "./src/app/components/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/components/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/









class RegisterModule {
}
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegisterModule_Factory(t) { return new (t || RegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_6__["NgOtpInputModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_6__["NgOtpInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    ng_otp_input__WEBPACK_IMPORTED_MODULE_6__["NgOtpInputModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-register-register-module-es2015.js.map