function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-categories-categories-module"], {
  /***/
  "./src/app/components/categories/categories-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/categories/categories-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: CategoriesRoutingModule */

  /***/
  function srcAppComponentsCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function () {
      return CategoriesRoutingModule;
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


    var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./categories.component */
    "./src/app/components/categories/categories.component.ts");
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
      component: _categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]
    }];

    var CategoriesRoutingModule = function CategoriesRoutingModule() {
      _classCallCheck(this, CategoriesRoutingModule);
    };

    CategoriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CategoriesRoutingModule
    });
    CategoriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CategoriesRoutingModule_Factory(t) {
        return new (t || CategoriesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesRoutingModule, [{
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
  "./src/app/components/categories/categories.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/categories/categories.component.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppComponentsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


    function CategoriesComponent_div_1_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r123.name, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function CategoriesComponent_div_1_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_div_1_div_2_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var sub_r128 = ctx.$implicit;

          var item_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r129.subItems(item_r123, sub_r128);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_r128 = ctx.$implicit;

        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r127.api.mediaURL + sub_r128.cover + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_r128.name.length > 12 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, sub_r128.name, 0, 12) + ".." : sub_r128.name, " ");
      }
    }

    function CategoriesComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesComponent_div_1_div_2_div_1_Template, 6, 8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r123.subCates);
      }
    }

    function CategoriesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesComponent_div_1_p_1_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_1_div_2_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r123 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r123.subCates.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r123.subCates.length);
      }
    }

    var _c1 = function _c1() {
      return {
        "border-radius": "5px",
        height: "120px",
        width: "120px"
      };
    };

    function CategoriesComponent_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return {
        "border-radius": "5px",
        height: "10px",
        width: "120px"
      };
    };

    var _c3 = function _c3() {
      return [1, 2, 3, 4, 5, 6, 7, 8];
    };

    function CategoriesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesComponent_div_2_div_4_Template, 2, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
      }
    }

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(router, route, api, util) {
        _classCallCheck(this, CategoriesComponent);

        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.bottomcategory = [];
        this.dummyBottomCates = Array(2);
        this.getCategorys();
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCategorys",
        value: function getCategorys() {
          var _this = this;

          this.api.get('categories').subscribe(function (datas) {
            console.log('categories', datas);
            var cates = [];

            if (datas && datas.data && datas.data.length) {
              datas.data.forEach(function (element) {
                if (element.status === '1') {
                  var data = {
                    id: element.id,
                    name: element.name,
                    cover: element.cover,
                    subCates: []
                  };
                  cates.push(data);
                }
              });

              _this.api.get('subcate').subscribe(function (subCates) {
                console.log('sub cates', subCates);

                if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
                  cates.forEach(function (element, i) {
                    subCates.data.forEach(function (sub) {
                      if (sub.status === '1' && element.id === sub.cate_id) {
                        cates[i].subCates.push(sub);
                      }
                    });
                  }); // console.log('=>>', this.categories);

                  _this.dummyBottomCates = [];
                  _this.bottomcategory = cates;
                  console.log('bottomcategory cates==========>', _this.bottomcategory);
                } else {
                  _this.dummyBottomCates = [];
                }
              }, function (error) {
                console.log(error);

                _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));

                _this.dummyBottomCates = [];
              });
            } else {
              _this.dummyBottomCates = [];
            }
          }, function (error) {
            console.log(error);

            _this.util.toast('error', _this.util.getString('Error'), _this.util.getString('Something went wrong'));

            _this.dummyBottomCates = [];
          });
        }
      }, {
        key: "subItems",
        value: function subItems(item, sub) {
          console.log(item, sub);
          var param = {
            queryParams: {
              cid: item.id,
              cname: item.name,
              subid: sub.id,
              sname: sub.name
            }
          };
          this.router.navigate(['sub-categoris'], param);
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
      return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]));
    };

    CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container"], ["class", "btmCates", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "btmCates"], ["class", "cateName", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "cateName"], [1, "row"], ["class", "col-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-3"], [1, "boxs", 3, "click"], [1, "img_div", 3, "ngStyle"], [1, "subName"], [2, "text-align", "center"], [3, "theme"], [1, "row", 2, "overflow", "hidden"], ["class", "col-4 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-3"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriesComponent_div_1_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_2_Template, 5, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bottomcategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dummyBottomCates);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
      styles: ["@charset \"UTF-8\";\n\n.btmCates[_ngcontent-%COMP%]   .cateName[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-weight: 400;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%] {\n  border: 2px solid #f1dea4;\n  cursor: pointer;\n  margin-bottom: 5px;\n}\n.btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  min-width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n  margin: 5px;\n}\n.btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .subName[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  margin: 0px;\n  padding: 10px 0px;\n  font-weight: 400;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .btmCates[_ngcontent-%COMP%]   .cateName[_ngcontent-%COMP%] {\n    text-align: center;\n    color: black;\n    font-weight: 400;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 10px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%] {\n    border: 2px solid #f1dea4;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 100%;\n    min-width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    position: relative;\n    margin: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .subName[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 10px;\n    margin: 0px;\n    padding: 10px 0px;\n    font-weight: 400;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .btmCates[_ngcontent-%COMP%]   .cateName[_ngcontent-%COMP%] {\n    text-align: center;\n    color: black;\n    font-weight: 400;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 10px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%] {\n    border: 2px solid #f1dea4;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 100%;\n    min-width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    position: relative;\n    margin: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .subName[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 10px;\n    margin: 0px;\n    padding: 10px 0px;\n    font-weight: 400;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .btmCates[_ngcontent-%COMP%]   .cateName[_ngcontent-%COMP%] {\n    text-align: center;\n    color: black;\n    font-weight: 400;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 10px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%] {\n    border: 2px solid #f1dea4;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .img_div[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 100%;\n    min-width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    position: relative;\n    margin: 5px;\n  }\n  .btmCates[_ngcontent-%COMP%]   .boxs[_ngcontent-%COMP%]   .subName[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 10px;\n    margin: 0px;\n    padding: 10px 0px;\n    font-weight: 400;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9FOlxcV29ya3NwYWNlX2FuZ3VsYXJcXFdlYl9WZXJzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVVFO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FEQ047QUNDRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNBSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREVOO0FDQUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREVOO0FDR0EsMEJBQUE7QUFDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQ0FBQTtJQUNBLG9CQUFBO0VERE47RUNHRTtJQUNFLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VEREo7RUNFSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFREFOO0VDRUk7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFREFOO0FBQ0Y7QUNLQSxrQkFBQTtBQUNBO0VBRUk7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtDQUFBO0lBQ0Esb0JBQUE7RURKTjtFQ01FO0lBQ0UseUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RURKSjtFQ0tJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VESE47RUNLSTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VESE47QUFDRjtBQ1FBLDhCQUFBO0FBQ0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0NBQUE7SUFDQSxvQkFBQTtFRFBOO0VDU0U7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFRFBKO0VDUUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUROTjtFQ1FJO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUROTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmJ0bUNhdGVzIC5jYXRlTmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5idG1DYXRlcyAuYm94cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJ0bUNhdGVzIC5ib3hzIC5pbWdfZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4uYnRtQ2F0ZXMgLmJveHMgLnN1Yk5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vKiBpcGhvbmUgWCAsIFhTLCAxMSBQcm8gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAuYnRtQ2F0ZXMgLmNhdGVOYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYnRtQ2F0ZXMgLmJveHMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuYnRtQ2F0ZXMgLmJveHMgLmltZ19kaXYge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuYnRtQ2F0ZXMgLmJveHMgLnN1Yk5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuLyogaXBob25lIFhSLCAxMSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5idG1DYXRlcyAuY2F0ZU5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5idG1DYXRlcyAuYm94cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxZGVhNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5idG1DYXRlcyAuYm94cyAuaW1nX2RpdiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5idG1DYXRlcyAuYm94cyAuc3ViTmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG4vKiBpcGhvbmUgWFMgTWF4LCAxMSBQcm8gTWF4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLmJ0bUNhdGVzIC5jYXRlTmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJ0bUNhdGVzIC5ib3hzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjFkZWE0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJ0bUNhdGVzIC5ib3hzIC5pbWdfZGl2IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmJ0bUNhdGVzIC5ib3hzIC5zdWJOYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmJ0bUNhdGVze1xuICAuY2F0ZU5hbWV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5ib3hze1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAuaW1nX2RpdntcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgLnN1Yk5hbWV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cbn1cblxuLyogaXBob25lIFggLCBYUywgMTEgUHJvICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLmJ0bUNhdGVze1xuICAgIC5jYXRlTmFtZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuYm94c3tcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAuaW1nX2RpdntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cbiAgICAgIC5zdWJOYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBpcGhvbmUgWFIsIDExICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQgOiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcbiAgLmJ0bUNhdGVze1xuICAgIC5jYXRlTmFtZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuYm94c3tcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAuaW1nX2RpdntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cbiAgICAgIC5zdWJOYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBpcGhvbmUgWFMgTWF4LCAxMSBQcm8gTWF4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQgOiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHtcbiAgLmJ0bUNhdGVze1xuICAgIC5jYXRlTmFtZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuYm94c3tcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWRlYTQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAuaW1nX2RpdntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cbiAgICAgIC5zdWJOYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categories',
          templateUrl: './categories.component.html',
          styleUrls: ['./categories.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/categories/categories.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/categories/categories.module.ts ***!
    \************************************************************/

  /*! exports provided: CategoriesModule */

  /***/
  function srcAppComponentsCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesModule", function () {
      return CategoriesModule;
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


    var _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./categories-routing.module */
    "./src/app/components/categories/categories-routing.module.ts");
    /* harmony import */


    var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories.component */
    "./src/app/components/categories/categories.component.ts");
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


    var CategoriesModule = function CategoriesModule() {
      _classCallCheck(this, CategoriesModule);
    };

    CategoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CategoriesModule
    });
    CategoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CategoriesModule_Factory(t) {
        return new (t || CategoriesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriesModule, {
        declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-categories-categories-module-es5.js.map