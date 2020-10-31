function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-home-home-module~components-top-offers-top-offers-module~components-top-picked-to~8f7897ef"], {
  /***/
  "./node_modules/dom7/dist/dom7.modular.js":
  /*!************************************************!*\
    !*** ./node_modules/dom7/dist/dom7.modular.js ***!
    \************************************************/

  /*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */

  /***/
  function node_modulesDom7DistDom7ModularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "$", function () {
      return $;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addClass", function () {
      return addClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeClass", function () {
      return removeClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasClass", function () {
      return hasClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleClass", function () {
      return toggleClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "attr", function () {
      return attr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeAttr", function () {
      return removeAttr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prop", function () {
      return prop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "data", function () {
      return data;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeData", function () {
      return removeData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataset", function () {
      return dataset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "val", function () {
      return val;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transform", function () {
      return transform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transition", function () {
      return transition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "on", function () {
      return on;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "off", function () {
      return off;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "once", function () {
      return once;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trigger", function () {
      return trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transitionEnd", function () {
      return transitionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animationEnd", function () {
      return animationEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "width", function () {
      return width;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outerWidth", function () {
      return outerWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "height", function () {
      return height;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outerHeight", function () {
      return outerHeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "offset", function () {
      return offset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hide", function () {
      return hide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "show", function () {
      return show;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "css", function () {
      return css;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toArray", function () {
      return toArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "each", function () {
      return each;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forEach", function () {
      return forEach;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filter", function () {
      return filter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "html", function () {
      return html;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "text", function () {
      return text;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "is", function () {
      return is;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "indexOf", function () {
      return indexOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "index", function () {
      return index;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eq", function () {
      return eq;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "append", function () {
      return append;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appendTo", function () {
      return appendTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prepend", function () {
      return prepend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prependTo", function () {
      return prependTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertBefore", function () {
      return insertBefore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertAfter", function () {
      return insertAfter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "next", function () {
      return next;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextAll", function () {
      return nextAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prev", function () {
      return prev;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prevAll", function () {
      return prevAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "siblings", function () {
      return siblings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parent", function () {
      return parent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parents", function () {
      return parents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "closest", function () {
      return closest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "find", function () {
      return find;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "children", function () {
      return children;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remove", function () {
      return remove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "detach", function () {
      return detach;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "add", function () {
      return add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "empty", function () {
      return empty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollTo", function () {
      return scrollTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollTop", function () {
      return scrollTop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollLeft", function () {
      return scrollLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animate", function () {
      return animate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stop", function () {
      return stop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "click", function () {
      return click;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blur", function () {
      return blur;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focus", function () {
      return focus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusin", function () {
      return focusin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusout", function () {
      return focusout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keyup", function () {
      return keyup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keydown", function () {
      return keydown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keypress", function () {
      return keypress;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "submit", function () {
      return submit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "change", function () {
      return change;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mousedown", function () {
      return mousedown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mousemove", function () {
      return mousemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseup", function () {
      return mouseup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseenter", function () {
      return mouseenter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseleave", function () {
      return mouseleave;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseout", function () {
      return mouseout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseover", function () {
      return mouseover;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchstart", function () {
      return touchstart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchend", function () {
      return touchend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchmove", function () {
      return touchmove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resize", function () {
      return resize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scroll", function () {
      return scroll;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/dist/ssr-window.esm.js");
    /**
     * Dom7 2.1.5
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: May 15, 2020
     */


    var Dom7 = function Dom7(arr) {
      _classCallCheck(this, Dom7);

      var self = this; // Create array-like object

      for (var i = 0; i < arr.length; i += 1) {
        self[i] = arr[i];
      }

      self.length = arr.length; // Return collection with methods

      return this;
    };

    function $(selector, context) {
      var arr = [];
      var i = 0;

      if (selector && !context) {
        if (selector instanceof Dom7) {
          return selector;
        }
      }

      if (selector) {
        // String
        if (typeof selector === 'string') {
          var els;
          var tempParent;

          var _html = selector.trim();

          if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
            var toCreate = 'div';
            if (_html.indexOf('<li') === 0) toCreate = 'ul';
            if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
            if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
            if (_html.indexOf('<tbody') === 0) toCreate = 'table';
            if (_html.indexOf('<option') === 0) toCreate = 'select';
            tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
            tempParent.innerHTML = _html;

            for (i = 0; i < tempParent.childNodes.length; i += 1) {
              arr.push(tempParent.childNodes[i]);
            }
          } else {
            if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
              // Pure ID selector
              els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
            } else {
              // Other selectors
              els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
            }

            for (i = 0; i < els.length; i += 1) {
              if (els[i]) arr.push(els[i]);
            }
          }
        } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
          // Node/element
          arr.push(selector);
        } else if (selector.length > 0 && selector[0].nodeType) {
          // Array of elements or instance of Dom
          for (i = 0; i < selector.length; i += 1) {
            arr.push(selector[i]);
          }
        }
      }

      return new Dom7(arr);
    }

    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
      var uniqueArray = [];

      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }

    function toCamelCase(string) {
      return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
      });
    }

    function requestAnimationFrame(callback) {
      if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
      return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
    }

    function cancelAnimationFrame(id) {
      if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
      return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
    } // Classes and attributes


    function addClass(className) {
      if (typeof className === 'undefined') {
        return this;
      }

      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
        }
      }

      return this;
    }

    function removeClass(className) {
      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
        }
      }

      return this;
    }

    function hasClass(className) {
      if (!this[0]) return false;
      return this[0].classList.contains(className);
    }

    function toggleClass(className) {
      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
        }
      }

      return this;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          // eslint-disable-next-line
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    } // eslint-disable-next-line


    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    } // eslint-disable-next-line


    function prop(props, value) {
      if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
      } else {
        // Set props
        for (var i = 0; i < this.length; i += 1) {
          if (arguments.length === 2) {
            // String
            this[i][props] = value;
          } else {
            // Object
            // eslint-disable-next-line
            for (var propName in props) {
              this[i][propName] = props[propName];
            }
          }
        }

        return this;
      }
    }

    function data(key, value) {
      var el;

      if (typeof value === 'undefined') {
        el = this[0]; // Get value

        if (el) {
          if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
            return el.dom7ElementDataStorage[key];
          }

          var dataKey = el.getAttribute("data-".concat(key));

          if (dataKey) {
            return dataKey;
          }

          return undefined;
        }

        return undefined;
      } // Set value


      for (var i = 0; i < this.length; i += 1) {
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
      }

      return this;
    }

    function removeData(key) {
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
          el.dom7ElementDataStorage[key] = null;
          delete el.dom7ElementDataStorage[key];
        }
      }
    }

    function dataset() {
      var el = this[0];
      if (!el) return undefined;
      var dataset = {}; // eslint-disable-line

      if (el.dataset) {
        // eslint-disable-next-line
        for (var dataKey in el.dataset) {
          dataset[dataKey] = el.dataset[dataKey];
        }
      } else {
        for (var i = 0; i < el.attributes.length; i += 1) {
          // eslint-disable-next-line
          var _attr = el.attributes[i];

          if (_attr.name.indexOf('data-') >= 0) {
            dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
          }
        }
      } // eslint-disable-next-line


      for (var key in dataset) {
        if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
      }

      return dataset;
    }

    function val(value) {
      var dom = this;

      if (typeof value === 'undefined') {
        if (dom[0]) {
          if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
            var values = [];

            for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
              values.push(dom[0].selectedOptions[i].value);
            }

            return values;
          }

          return dom[0].value;
        }

        return undefined;
      }

      for (var _i = 0; _i < dom.length; _i += 1) {
        var el = dom[_i];

        if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
          for (var j = 0; j < el.options.length; j += 1) {
            el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
          }
        } else {
          el.value = value;
        }
      }

      return dom;
    } // Transforms
    // eslint-disable-next-line


    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransform = transform;
        elStyle.transform = transform;
      }

      return this;
    }

    function transition(duration) {
      if (typeof duration !== 'string') {
        duration = "".concat(duration, "ms"); // eslint-disable-line
      }

      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransitionDuration = duration;
        elStyle.transitionDuration = duration;
      }

      return this;
    } // Events


    function on() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        var target = e.target;
        if (!target) return;
        var eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          var _parents = $(target).parents(); // eslint-disable-line


          for (var k = 0; k < _parents.length; k += 1) {
            if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      var events = eventType.split(' ');
      var j;

      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var _event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

            el.dom7LiveListeners[_event].push({
              listener: listener,
              proxyListener: handleLiveEvent
            });

            el.addEventListener(_event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      var events = eventType.split(' ');

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = void 0;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function once() {
      var dom = this;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var eventName = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventName = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      function onceHandler() {
        for (var _len4 = arguments.length, eventArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          eventArgs[_key4] = arguments[_key4];
        }

        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);

        if (onceHandler.dom7proxy) {
          delete onceHandler.dom7proxy;
        }
      }

      onceHandler.dom7proxy = listener;
      return dom.on(eventName, targetSelector, onceHandler, capture);
    }

    function trigger() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var events = args[0].split(' ');
      var eventData = args[1];

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var evt = void 0;

          try {
            evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
          } catch (e) {
            evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
            evt.initEvent(event, true, true);
            evt.detail = eventData;
          } // eslint-disable-next-line


          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }

      return this;
    }

    function transitionEnd(callback) {
      var events = ['webkitTransitionEnd', 'transitionend'];
      var dom = this;
      var i;

      function fireCallBack(e) {
        /* jshint validthis:true */
        if (e.target !== this) return;
        callback.call(this, e);

        for (i = 0; i < events.length; i += 1) {
          dom.off(events[i], fireCallBack);
        }
      }

      if (callback) {
        for (i = 0; i < events.length; i += 1) {
          dom.on(events[i], fireCallBack);
        }
      }

      return this;
    }

    function animationEnd(callback) {
      var events = ['webkitAnimationEnd', 'animationend'];
      var dom = this;
      var i;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);

        for (i = 0; i < events.length; i += 1) {
          dom.off(events[i], fireCallBack);
        }
      }

      if (callback) {
        for (i = 0; i < events.length; i += 1) {
          dom.on(events[i], fireCallBack);
        }
      }

      return this;
    } // Sizing/Styles


    function width() {
      if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
        return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
      }

      if (this.length > 0) {
        return parseFloat(this.css('width'));
      }

      return null;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var _styles = this.styles();

          return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function height() {
      if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
        return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
      }

      if (this.length > 0) {
        return parseFloat(this.css('height'));
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var _styles2 = this.styles();

          return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;

        var _scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;

        var _scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;

        return {
          top: box.top + _scrollTop - clientTop,
          left: box.left + _scrollLeft - clientLeft
        };
      }

      return null;
    }

    function hide() {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.display = 'none';
      }

      return this;
    }

    function show() {
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.style.display === 'none') {
          el.style.display = '';
        }

        if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
          // Still not visible
          el.style.display = 'block';
        }
      }

      return this;
    }

    function styles() {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      var i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          for (i = 0; i < this.length; i += 1) {
            // eslint-disable-next-line
            for (var _prop in props) {
              this[i].style[_prop] = props[_prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    } // Dom manipulation


    function toArray() {
      var arr = [];

      for (var i = 0; i < this.length; i += 1) {
        arr.push(this[i]);
      }

      return arr;
    } // Iterate over the collection passing elements to `callback`


    function each(callback) {
      // Don't bother continuing without a callback
      if (!callback) return this; // Iterate over the current collection

      for (var i = 0; i < this.length; i += 1) {
        // If the callback returns false
        if (callback.call(this[i], i, this[i]) === false) {
          // End the loop early
          return this;
        }
      } // Return `this` to allow chained DOM operations


      return this;
    }

    function forEach(callback) {
      // Don't bother continuing without a callback
      if (!callback) return this; // Iterate over the current collection

      for (var i = 0; i < this.length; i += 1) {
        // If the callback returns false
        if (callback.call(this[i], this[i], i) === false) {
          // End the loop early
          return this;
        }
      } // Return `this` to allow chained DOM operations


      return this;
    }

    function filter(callback) {
      var matchedItems = [];
      var dom = this;

      for (var i = 0; i < dom.length; i += 1) {
        if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
      }

      return new Dom7(matchedItems);
    }

    function map(callback) {
      var modifiedItems = [];
      var dom = this;

      for (var i = 0; i < dom.length; i += 1) {
        modifiedItems.push(callback.call(dom[i], i, dom[i]));
      }

      return new Dom7(modifiedItems);
    } // eslint-disable-next-line


    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : undefined;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    } // eslint-disable-next-line


    function text(text) {
      if (typeof text === 'undefined') {
        if (this[0]) {
          return this[0].textContent.trim();
        }

        return null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      var el = this[0];
      var compareWith;
      var i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function indexOf(el) {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i] === el) return i;
      }

      return -1;
    }

    function index() {
      var child = this[0];
      var i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    } // eslint-disable-next-line


    function eq(index) {
      if (typeof index === 'undefined') return this;
      var length = this.length;
      var returnIndex;

      if (index > length - 1) {
        return new Dom7([]);
      }

      if (index < 0) {
        returnIndex = length + index;
        if (returnIndex < 0) return new Dom7([]);
        return new Dom7([this[returnIndex]]);
      }

      return new Dom7([this[index]]);
    }

    function append() {
      var newChild;

      for (var k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    } // eslint-disable-next-line


    function appendTo(parent) {
      $(parent).append(this);
      return this;
    }

    function prepend(newChild) {
      var i;
      var j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    } // eslint-disable-next-line


    function prependTo(parent) {
      $(parent).prepend(this);
      return this;
    }

    function insertBefore(selector) {
      var before = $(selector);

      for (var i = 0; i < this.length; i += 1) {
        if (before.length === 1) {
          before[0].parentNode.insertBefore(this[i], before[0]);
        } else if (before.length > 1) {
          for (var j = 0; j < before.length; j += 1) {
            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
          }
        }
      }
    }

    function insertAfter(selector) {
      var after = $(selector);

      for (var i = 0; i < this.length; i += 1) {
        if (after.length === 1) {
          after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        } else if (after.length > 1) {
          for (var j = 0; j < after.length; j += 1) {
            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
          }
        }
      }
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return new Dom7([this[0].nextElementSibling]);
          }

          return new Dom7([]);
        }

        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
        return new Dom7([]);
      }

      return new Dom7([]);
    }

    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];
      if (!el) return new Dom7([]);

      while (el.nextElementSibling) {
        var _next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_next).is(selector)) nextEls.push(_next);
        } else nextEls.push(_next);

        el = _next;
      }

      return new Dom7(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return new Dom7([el.previousElementSibling]);
          }

          return new Dom7([]);
        }

        if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
        return new Dom7([]);
      }

      return new Dom7([]);
    }

    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];
      if (!el) return new Dom7([]);

      while (el.previousElementSibling) {
        var _prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_prev).is(selector)) prevEls.push(_prev);
        } else prevEls.push(_prev);

        el = _prev;
      }

      return new Dom7(prevEls);
    }

    function siblings(selector) {
      return this.nextAll(selector).add(this.prevAll(selector));
    }

    function parent(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(unique(parents));
    }

    function parents(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var _parent = this[i].parentNode; // eslint-disable-line

        while (_parent) {
          if (selector) {
            if ($(_parent).is(selector)) parents.push(_parent);
          } else {
            parents.push(_parent);
          }

          _parent = _parent.parentNode;
        }
      }

      return $(unique(parents));
    }

    function closest(selector) {
      var closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return new Dom7([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      var foundElements = [];

      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);

        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return new Dom7(foundElements);
    }

    function children(selector) {
      var children = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].childNodes;

        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector) {
            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
          } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return new Dom7(unique(children));
    }

    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    function detach() {
      return this.remove();
    }

    function add() {
      var dom = this;
      var i;
      var j;

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      for (i = 0; i < args.length; i += 1) {
        var toAdd = $(args[i]);

        for (j = 0; j < toAdd.length; j += 1) {
          dom[dom.length] = toAdd[j];
          dom.length += 1;
        }
      }

      return dom;
    }

    function empty() {
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.nodeType === 1) {
          for (var j = 0; j < el.childNodes.length; j += 1) {
            if (el.childNodes[j].parentNode) {
              el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            }
          }

          el.textContent = '';
        }
      }

      return this;
    }

    function scrollTo() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var left = args[0],
          top = args[1],
          duration = args[2],
          easing = args[3],
          callback = args[4];

      if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        left = args[0];
        top = args[1];
        duration = args[2];
        callback = args[3];
        easing = args[4];
      }

      if (typeof easing === 'undefined') easing = 'swing';
      return this.each(function animate() {
        var el = this;
        var currentTop;
        var currentLeft;
        var maxTop;
        var maxLeft;
        var newTop;
        var newLeft;
        var scrollTop; // eslint-disable-line

        var scrollLeft; // eslint-disable-line

        var animateTop = top > 0 || top === 0;
        var animateLeft = left > 0 || left === 0;

        if (typeof easing === 'undefined') {
          easing = 'swing';
        }

        if (animateTop) {
          currentTop = el.scrollTop;

          if (!duration) {
            el.scrollTop = top;
          }
        }

        if (animateLeft) {
          currentLeft = el.scrollLeft;

          if (!duration) {
            el.scrollLeft = left;
          }
        }

        if (!duration) return;

        if (animateTop) {
          maxTop = el.scrollHeight - el.offsetHeight;
          newTop = Math.max(Math.min(top, maxTop), 0);
        }

        if (animateLeft) {
          maxLeft = el.scrollWidth - el.offsetWidth;
          newLeft = Math.max(Math.min(left, maxLeft), 0);
        }

        var startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;

        function render() {
          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

          if (startTime === null) {
            startTime = time;
          }

          var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
          var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
          var done;
          if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
          if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

          if (animateTop && newTop > currentTop && scrollTop >= newTop) {
            el.scrollTop = newTop;
            done = true;
          }

          if (animateTop && newTop < currentTop && scrollTop <= newTop) {
            el.scrollTop = newTop;
            done = true;
          }

          if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
            el.scrollLeft = newLeft;
            done = true;
          }

          if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
            el.scrollLeft = newLeft;
            done = true;
          }

          if (done) {
            if (callback) callback();
            return;
          }

          if (animateTop) el.scrollTop = scrollTop;
          if (animateLeft) el.scrollLeft = scrollLeft;
          requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      });
    } // scrollTop(top, duration, easing, callback) {


    function scrollTop() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      var top = args[0],
          duration = args[1],
          easing = args[2],
          callback = args[3];

      if (args.length === 3 && typeof easing === 'function') {
        top = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
      }

      var dom = this;

      if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
      }

      return dom.scrollTo(undefined, top, duration, easing, callback);
    }

    function scrollLeft() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      var left = args[0],
          duration = args[1],
          easing = args[2],
          callback = args[3];

      if (args.length === 3 && typeof easing === 'function') {
        left = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
      }

      var dom = this;

      if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
      }

      return dom.scrollTo(left, undefined, duration, easing, callback);
    }

    function animate(initialProps, initialParams) {
      var els = this;
      var a = {
        props: Object.assign({}, initialProps),
        params: Object.assign({
          duration: 300,
          easing: 'swing' // or 'linear'

          /* Callbacks
          begin(elements)
          complete(elements)
          progress(elements, complete, remaining, start, tweenValue)
          */

        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress: function easingProgress(easing, progress) {
          if (easing === 'swing') {
            return 0.5 - Math.cos(progress * Math.PI) / 2;
          }

          if (typeof easing === 'function') {
            return easing(progress);
          }

          return progress;
        },
        stop: function stop() {
          if (a.frameId) {
            cancelAnimationFrame(a.frameId);
          }

          a.animating = false;
          a.elements.each(function (index, el) {
            var element = el;
            delete element.dom7AnimateInstance;
          });
          a.que = [];
        },
        done: function done(complete) {
          a.animating = false;
          a.elements.each(function (index, el) {
            var element = el;
            delete element.dom7AnimateInstance;
          });
          if (complete) complete(els);

          if (a.que.length > 0) {
            var que = a.que.shift();
            a.animate(que[0], que[1]);
          }
        },
        animate: function animate(props, params) {
          if (a.animating) {
            a.que.push([props, params]);
            return a;
          }

          var elements = []; // Define & Cache Initials & Units

          a.elements.each(function (index, el) {
            var initialFullValue;
            var initialValue;
            var unit;
            var finalValue;
            var finalFullValue;
            if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
            elements[index] = {
              container: el
            };
            Object.keys(props).forEach(function (prop) {
              initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
              initialValue = parseFloat(initialFullValue);
              unit = initialFullValue.replace(initialValue, '');
              finalValue = parseFloat(props[prop]);
              finalFullValue = props[prop] + unit;
              elements[index][prop] = {
                initialFullValue: initialFullValue,
                initialValue: initialValue,
                unit: unit,
                finalValue: finalValue,
                finalFullValue: finalFullValue,
                currentValue: initialValue
              };
            });
          });
          var startTime = null;
          var time;
          var elementsDone = 0;
          var propsDone = 0;
          var done;
          var began = false;
          a.animating = true;

          function render() {
            time = new Date().getTime();
            var progress;
            var easeProgress; // let el;

            if (!began) {
              began = true;
              if (params.begin) params.begin(els);
            }

            if (startTime === null) {
              startTime = time;
            }

            if (params.progress) {
              // eslint-disable-next-line
              params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
            }

            elements.forEach(function (element) {
              var el = element;
              if (done || el.done) return;
              Object.keys(props).forEach(function (prop) {
                if (done || el.done) return;
                progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                easeProgress = a.easingProgress(params.easing, progress);
                var _el$prop = el[prop],
                    initialValue = _el$prop.initialValue,
                    finalValue = _el$prop.finalValue,
                    unit = _el$prop.unit;
                el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                var currentValue = el[prop].currentValue;

                if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                  el.container.style[prop] = finalValue + unit;
                  propsDone += 1;

                  if (propsDone === Object.keys(props).length) {
                    el.done = true;
                    elementsDone += 1;
                  }

                  if (elementsDone === elements.length) {
                    done = true;
                  }
                }

                if (done) {
                  a.done(params.complete);
                  return;
                }

                el.container.style[prop] = currentValue + unit;
              });
            });
            if (done) return; // Then call

            a.frameId = requestAnimationFrame(render);
          }

          a.frameId = requestAnimationFrame(render);
          return a;
        }
      };

      if (a.elements.length === 0) {
        return els;
      }

      var animateInstance;

      for (var i = 0; i < a.elements.length; i += 1) {
        if (a.elements[i].dom7AnimateInstance) {
          animateInstance = a.elements[i].dom7AnimateInstance;
        } else a.elements[i].dom7AnimateInstance = a;
      }

      if (!animateInstance) {
        animateInstance = a;
      }

      if (initialProps === 'stop') {
        animateInstance.stop();
      } else {
        animateInstance.animate(a.props, a.params);
      }

      return els;
    }

    function stop() {
      var els = this;

      for (var i = 0; i < els.length; i += 1) {
        if (els[i].dom7AnimateInstance) {
          els[i].dom7AnimateInstance.stop();
        }
      }
    }

    var noTrigger = 'resize scroll'.split(' ');

    function eventShortcut(name) {
      for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
        args[_key10 - 1] = arguments[_key10];
      }

      if (typeof args[0] === 'undefined') {
        for (var i = 0; i < this.length; i += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i]) this[i][name]();else {
              $(this[i]).trigger(name);
            }
          }
        }

        return this;
      }

      return this.on.apply(this, [name].concat(args));
    }

    function click() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      return eventShortcut.bind(this).apply(void 0, ['click'].concat(args));
    }

    function blur() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      return eventShortcut.bind(this).apply(void 0, ['blur'].concat(args));
    }

    function focus() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      return eventShortcut.bind(this).apply(void 0, ['focus'].concat(args));
    }

    function focusin() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      return eventShortcut.bind(this).apply(void 0, ['focusin'].concat(args));
    }

    function focusout() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      return eventShortcut.bind(this).apply(void 0, ['focusout'].concat(args));
    }

    function keyup() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      return eventShortcut.bind(this).apply(void 0, ['keyup'].concat(args));
    }

    function keydown() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      return eventShortcut.bind(this).apply(void 0, ['keydown'].concat(args));
    }

    function keypress() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      return eventShortcut.bind(this).apply(void 0, ['keypress'].concat(args));
    }

    function submit() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      return eventShortcut.bind(this).apply(void 0, ['submit'].concat(args));
    }

    function change() {
      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      return eventShortcut.bind(this).apply(void 0, ['change'].concat(args));
    }

    function mousedown() {
      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      return eventShortcut.bind(this).apply(void 0, ['mousedown'].concat(args));
    }

    function mousemove() {
      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      return eventShortcut.bind(this).apply(void 0, ['mousemove'].concat(args));
    }

    function mouseup() {
      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      return eventShortcut.bind(this).apply(void 0, ['mouseup'].concat(args));
    }

    function mouseenter() {
      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      return eventShortcut.bind(this).apply(void 0, ['mouseenter'].concat(args));
    }

    function mouseleave() {
      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      return eventShortcut.bind(this).apply(void 0, ['mouseleave'].concat(args));
    }

    function mouseout() {
      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }

      return eventShortcut.bind(this).apply(void 0, ['mouseout'].concat(args));
    }

    function mouseover() {
      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }

      return eventShortcut.bind(this).apply(void 0, ['mouseover'].concat(args));
    }

    function touchstart() {
      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }

      return eventShortcut.bind(this).apply(void 0, ['touchstart'].concat(args));
    }

    function touchend() {
      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
        args[_key29] = arguments[_key29];
      }

      return eventShortcut.bind(this).apply(void 0, ['touchend'].concat(args));
    }

    function touchmove() {
      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
        args[_key30] = arguments[_key30];
      }

      return eventShortcut.bind(this).apply(void 0, ['touchmove'].concat(args));
    }

    function resize() {
      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        args[_key31] = arguments[_key31];
      }

      return eventShortcut.bind(this).apply(void 0, ['resize'].concat(args));
    }

    function scroll() {
      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        args[_key32] = arguments[_key32];
      }

      return eventShortcut.bind(this).apply(void 0, ['scroll'].concat(args));
    }
    /***/

  },

  /***/
  "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js ***!
    \*************************************************************************************/

  /*! exports provided: SWIPER_CONFIG, SwiperComponent, SwiperConfig, SwiperDirective, SwiperModule */

  /***/
  function node_modulesNgxSwiperWrapper__ivy_ngcc__Fesm2015NgxSwiperWrapperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SWIPER_CONFIG", function () {
      return SWIPER_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperComponent", function () {
      return SwiperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperConfig", function () {
      return SwiperConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperDirective", function () {
      return SwiperDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperModule", function () {
      return SwiperModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! swiper */
    "./node_modules/swiper/js/swiper.esm.bundle.js");

    var _c0 = ["swiperSlides"];
    var _c1 = ["*"];
    var SWIPER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SWIPER_CONFIG');
    var SwiperEvents = ['init', 'beforeDestroy', 'scroll', 'progress', 'keyPress', 'resize', 'loopFix', 'breakpoint', 'zoomChange', 'beforeResize', 'beforeLoopFix', 'sliderMove', 'slideChange', 'setTranslate', 'setTransition', 'fromEdge', 'reachEnd', 'reachBeginning', 'autoplay', 'autoplayStop', 'autoplayStart', 'imagesReady', 'lazyImageLoad', 'lazyImageReady', 'scrollbarDragEnd', 'scrollbarDragMove', 'scrollbarDragStart', 'navigationHide', 'navigationShow', 'paginationRender', 'paginationUpdate', 'paginationHide', 'paginationShow', 'swiperTap', 'swiperClick', 'swiperDoubleTap', 'swiperTouchEnd', 'swiperTouchMove', 'swiperTouchStart', 'swiperTouchMoveOpposite', 'swiperTransitionEnd', 'swiperTransitionStart', 'slideNextTransitionEnd', 'slideNextTransitionStart', 'slidePrevTransitionEnd', 'slidePrevTransitionStart', 'slideChangeTransitionEnd', 'slideChangeTransitionStart'];

    var SwiperConfig =
    /*#__PURE__*/
    function () {
      function SwiperConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SwiperConfig);

        this.assign(config);
      }

      _createClass(SwiperConfig, [{
        key: "assign",
        value: function assign() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var target = arguments.length > 1 ? arguments[1] : undefined;
          target = target || this;

          for (var key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' && (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
              target[key] = {};
              this.assign(config[key], target[key]);
            } else {
              target[key] = config[key];
            }
          }
        }
      }]);

      return SwiperConfig;
    }();

    var SwiperDirective =
    /*#__PURE__*/
    function () {
      function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
        _classCallCheck(this, SwiperDirective);

        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.initialIndex = null;
        this.configDiff = null;
        this.disabled = false;
        this.performance = false;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SwiperDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
          }

          var params = new SwiperConfig(this.defaults);
          params.assign(this.config); // Custom configuration

          if (params.scrollbar === true) {
            params.scrollbar = {
              el: '.swiper-scrollbar'
            };
          }

          if (params.pagination === true) {
            params.pagination = {
              el: '.swiper-pagination'
            };
          }

          if (params.navigation === true) {
            params.navigation = {
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            };
          }

          if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
          }

          if (this.initialIndex != null) {
            params.initialSlide = this.initialIndex;
            this.initialIndex = null;
          }

          params.on = {
            slideChange: function slideChange() {
              if (_this.instance && _this.indexChange.observers.length) {
                _this.emit(_this.indexChange, _this.instance.realIndex);
              }
            }
          };
          this.zone.runOutsideAngular(function () {
            _this.instance = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](_this.elementRef.nativeElement, params);
          });

          if (params.init !== false && this.S_INIT.observers.length) {
            this.emit(this.S_INIT, this.instance);
          } // Add native Swiper event handling


          SwiperEvents.forEach(function (eventName) {
            var swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);

            _this.instance.on(swiperEvent, function () {
              for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
                args[_key33] = arguments[_key33];
              }

              if (args.length === 1) {
                args = args[0];
              }

              var output = "S_".concat(swiperEvent.toUpperCase());
              var emitter = _this[output];

              if (emitter.observers.length) {
                _this.emit(emitter, args);
              }
            });
          });

          if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          if (this.instance) {
            this.zone.runOutsideAngular(function () {
              _this2.instance.destroy(true, _this2.instance.initialized || false);
            });
            this.instance = null;
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.configDiff) {
            var changes = this.configDiff.diff(this.config || {});

            if (changes) {
              this.initialIndex = this.getIndex(true);
              this.ngOnDestroy();
              this.ngAfterViewInit();
              this.update();
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this3 = this;

          if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
              if (changes['disabled'].currentValue === true) {
                this.zone.runOutsideAngular(function () {
                  _this3.ngOnDestroy();

                  _this3.ngAfterViewInit();
                });
              } else if (changes['disabled'].currentValue === false) {
                this.zone.runOutsideAngular(function () {
                  _this3.ngOnDestroy();

                  _this3.ngAfterViewInit();
                });
              }
            }
          }
        }
      }, {
        key: "emit",
        value: function emit(emitter, value) {
          if (this.performance) {
            emitter.emit(value);
          } else {
            this.zone.run(function () {
              return emitter.emit(value);
            });
          }
        }
      }, {
        key: "swiper",
        value: function swiper() {
          return this.instance;
        }
      }, {
        key: "init",
        value: function init() {
          var _this4 = this;

          if (this.instance) {
            this.zone.runOutsideAngular(function () {
              _this4.instance.init();
            });
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this5 = this;

          setTimeout(function () {
            if (_this5.instance) {
              _this5.zone.runOutsideAngular(function () {
                _this5.instance.update();
              });
            }
          }, 0);
        }
      }, {
        key: "getIndex",
        value: function getIndex(real) {
          if (!this.instance) {
            return this.initialIndex || 0;
          } else {
            return real ? this.instance.realIndex : this.instance.activeIndex;
          }
        }
      }, {
        key: "setIndex",
        value: function setIndex(index, speed, silent) {
          var _this6 = this;

          if (!this.instance) {
            this.initialIndex = index;
          } else {
            var realIndex = index * this.instance.params.slidesPerGroup;

            if (this.instance.params.loop) {
              realIndex += this.instance.loopedSlides;
            }

            this.zone.runOutsideAngular(function () {
              _this6.instance.slideTo(realIndex, speed, !silent);
            });
          }
        }
      }, {
        key: "prevSlide",
        value: function prevSlide(speed, silent) {
          var _this7 = this;

          if (this.instance) {
            this.zone.runOutsideAngular(function () {
              _this7.instance.slidePrev(speed, !silent);
            });
          }
        }
      }, {
        key: "nextSlide",
        value: function nextSlide(speed, silent) {
          var _this8 = this;

          if (this.instance) {
            this.zone.runOutsideAngular(function () {
              _this8.instance.slideNext(speed, !silent);
            });
          }
        }
      }, {
        key: "stopAutoplay",
        value: function stopAutoplay(reset) {
          var _this9 = this;

          if (reset) {
            this.setIndex(0);
          }

          if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
              _this9.instance.autoplay.stop();
            });
          }
        }
      }, {
        key: "startAutoplay",
        value: function startAutoplay(reset) {
          var _this10 = this;

          if (reset) {
            this.setIndex(0);
          }

          if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(function () {
              _this10.instance.autoplay.start();
            });
          }
        }
      }, {
        key: "index",
        set: function set(index) {
          if (index != null) {
            this.setIndex(index);
          }
        }
      }]);

      return SwiperDirective;
    }();

    SwiperDirective.ɵfac = function SwiperDirective_Factory(t) {
      return new (t || SwiperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8));
    };

    SwiperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SwiperDirective,
      selectors: [["", "swiper", ""]],
      inputs: {
        disabled: "disabled",
        performance: "performance",
        index: "index",
        config: ["swiper", "config"]
      },
      outputs: {
        indexChange: "indexChange",
        S_INIT: "init",
        S_BEFOREDESTROY: "beforeDestroy",
        S_SCROLL: "scroll",
        S_PROGRESS: "progress",
        S_KEYPRESS: "keyPress",
        S_RESIZE: "resize",
        S_BREAKPOINT: "breakpoint",
        S_ZOOMCHANGE: "zoomChange",
        S_AFTERRESIZE: "afterResize",
        S_BEFORERESIZE: "beforeResize",
        S_LOOPFIX: "loopFix",
        S_BEFORELOOPFIX: "beforeLoopFix",
        S_SLIDERMOVE: "sliderMove",
        S_SLIDECHANGE: "slideChange",
        S_SETTRANSLATE: "setTranslate",
        S_SETTRANSITION: "setTransition",
        S_FROMEDGE: "fromEdge",
        S_REACHEND: "reachEnd",
        S_REACHBEGINNING: "reachBeginning",
        S_AUTOPLAY: "autoplay",
        S_AUTOPLAYSTART: "autoplayStart",
        S_AUTOPLAYSTOP: "autoplayStop",
        S_IMAGESREADY: "imagesReady",
        S_LAZYIMAGELOAD: "lazyImageLoad",
        S_LAZYIMAGEREADY: "lazyImageReady",
        S_SCROLLDRAGEND: "scrollDragEnd",
        S_SCROLLDRAGMOVE: "scrollDragMove",
        S_SCROLLDRAGSTART: "scrollDragStart",
        S_NAVIGATIONHIDE: "navigationHide",
        S_NAVIGATIONSHOW: "navigationShow",
        S_PAGINATIONRENDER: "paginationRender",
        S_PAGINATIONUPDATE: "paginationUpdate",
        S_PAGINATIONHIDE: "paginationHide",
        S_PAGINATIONSHOW: "paginationShow",
        S_TAP: "swiperTap",
        S_CLICK: "swiperClick",
        S_DOUBLETAP: "swiperDoubleTap",
        S_TOUCHEND: "swiperTouchEnd",
        S_TOUCHMOVE: "swiperTouchMove",
        S_TOUCHSTART: "swiperTouchStart",
        S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite",
        S_TRANSITIONEND: "swiperTransitionEnd",
        S_TRANSITIONSTART: "swiperTransitionStart",
        S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd",
        S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart",
        S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd",
        S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart",
        S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd",
        S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart"
      },
      exportAs: ["ngxSwiper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    SwiperDirective.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [SWIPER_CONFIG]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperDirective.prototype, "index", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperDirective.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperDirective.prototype, "performance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('swiper')], SwiperDirective.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SwiperDirective.prototype, "indexChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('init')], SwiperDirective.prototype, "S_INIT", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeDestroy')], SwiperDirective.prototype, "S_BEFOREDESTROY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scroll')], SwiperDirective.prototype, "S_SCROLL", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('progress')], SwiperDirective.prototype, "S_PROGRESS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('keyPress')], SwiperDirective.prototype, "S_KEYPRESS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('resize')], SwiperDirective.prototype, "S_RESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('breakpoint')], SwiperDirective.prototype, "S_BREAKPOINT", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('zoomChange')], SwiperDirective.prototype, "S_ZOOMCHANGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('afterResize')], SwiperDirective.prototype, "S_AFTERRESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeResize')], SwiperDirective.prototype, "S_BEFORERESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('loopFix')], SwiperDirective.prototype, "S_LOOPFIX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeLoopFix')], SwiperDirective.prototype, "S_BEFORELOOPFIX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('sliderMove')], SwiperDirective.prototype, "S_SLIDERMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChange')], SwiperDirective.prototype, "S_SLIDECHANGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('setTranslate')], SwiperDirective.prototype, "S_SETTRANSLATE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('setTransition')], SwiperDirective.prototype, "S_SETTRANSITION", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('fromEdge')], SwiperDirective.prototype, "S_FROMEDGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('reachEnd')], SwiperDirective.prototype, "S_REACHEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('reachBeginning')], SwiperDirective.prototype, "S_REACHBEGINNING", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplay')], SwiperDirective.prototype, "S_AUTOPLAY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplayStart')], SwiperDirective.prototype, "S_AUTOPLAYSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplayStop')], SwiperDirective.prototype, "S_AUTOPLAYSTOP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('imagesReady')], SwiperDirective.prototype, "S_IMAGESREADY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('lazyImageLoad')], SwiperDirective.prototype, "S_LAZYIMAGELOAD", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('lazyImageReady')], SwiperDirective.prototype, "S_LAZYIMAGEREADY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragEnd')], SwiperDirective.prototype, "S_SCROLLDRAGEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragMove')], SwiperDirective.prototype, "S_SCROLLDRAGMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragStart')], SwiperDirective.prototype, "S_SCROLLDRAGSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('navigationHide')], SwiperDirective.prototype, "S_NAVIGATIONHIDE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('navigationShow')], SwiperDirective.prototype, "S_NAVIGATIONSHOW", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationRender')], SwiperDirective.prototype, "S_PAGINATIONRENDER", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationUpdate')], SwiperDirective.prototype, "S_PAGINATIONUPDATE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationHide')], SwiperDirective.prototype, "S_PAGINATIONHIDE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationShow')], SwiperDirective.prototype, "S_PAGINATIONSHOW", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTap')], SwiperDirective.prototype, "S_TAP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperClick')], SwiperDirective.prototype, "S_CLICK", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperDoubleTap')], SwiperDirective.prototype, "S_DOUBLETAP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchEnd')], SwiperDirective.prototype, "S_TOUCHEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchMove')], SwiperDirective.prototype, "S_TOUCHMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchStart')], SwiperDirective.prototype, "S_TOUCHSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchMoveOpposite')], SwiperDirective.prototype, "S_TOUCHMOVEOPPOSITE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTransitionEnd')], SwiperDirective.prototype, "S_TRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTransitionStart')], SwiperDirective.prototype, "S_TRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slidePrevTransitionEnd')], SwiperDirective.prototype, "S_SLIDEPREVTRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slidePrevTransitionStart')], SwiperDirective.prototype, "S_SLIDEPREVTRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideNextTransitionEnd')], SwiperDirective.prototype, "S_SLIDENEXTTRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideNextTransitionStart')], SwiperDirective.prototype, "S_SLIDENEXTTRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChangeTransitionEnd')], SwiperDirective.prototype, "S_SLIDECHANGETRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChangeTransitionStart')], SwiperDirective.prototype, "S_SLIDECHANGETRANSITIONSTART", void 0);
    SwiperDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SWIPER_CONFIG))], SwiperDirective);

    var SwiperComponent =
    /*#__PURE__*/
    function () {
      function SwiperComponent(zone, cdRef, platformId, defaults) {
        _classCallCheck(this, SwiperComponent);

        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
        this.index = null;
        this.disabled = false;
        this.performance = false;
        this.useSwiperClass = true;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SwiperComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this11 = this;

          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return;
          }

          this.zone.runOutsideAngular(function () {
            _this11.updateClasses();

            if (_this11.swiperSlides && typeof MutationObserver !== 'undefined') {
              _this11.mo = new MutationObserver(function () {
                _this11.updateClasses();
              });

              _this11.mo.observe(_this11.swiperSlides.nativeElement, {
                childList: true
              });
            }
          });
          window.setTimeout(function () {
            if (_this11.directiveRef) {
              _this11.S_INIT.emit();

              _this11.directiveRef.indexChange = _this11.indexChange;
              SwiperEvents.forEach(function (eventName) {
                if (_this11.directiveRef) {
                  var output = "S_".concat(eventName.replace('swiper', '').toUpperCase());
                  var directiveOutput = output;
                  var componentOutput = output;
                  _this11.directiveRef[directiveOutput] = _this11[componentOutput];
                }
              });
            }
          }, 0);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.mo) {
            this.mo.disconnect();
          }

          if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
          }
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          var _this12 = this;

          this.swiperConfig = new SwiperConfig(this.defaults);
          this.swiperConfig.assign(this.config); // Custom configuration

          if (this.swiperSlides && (this.swiperConfig.pagination === true || this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' && (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') && !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
            this.config = this.config || {};

            if (!this.paginationConfig) {
              this.paginationBackup = this.config.pagination;
              this.paginationConfig = {
                el: '.swiper-pagination',
                renderBullet: function renderBullet(index, className) {
                  var children = _this12.swiperSlides ? Array.from(_this12.swiperSlides.nativeElement.children) : [];
                  children = children.filter(function (child) {
                    return child.classList.contains('swiper-slide');
                  });
                  var bullet = "<span class=\"".concat(className, " ").concat(className, "-middle\" index=\"").concat(index, "\"></span>");

                  if (index === 0) {
                    bullet = "<span class=\"".concat(className, " ").concat(className, "-first\" index=\"").concat(index, "\"></span>");
                  } else if (index === children.length - 1) {
                    bullet = "<span class=\"".concat(className, " ").concat(className, "-last\" index=\"").concat(index, "\"></span>");
                  }

                  return "<span class=\"swiper-pagination-handle\" index=\"".concat(index, "\">").concat(bullet, "</span>");
                }
              };
            }

            if (this.swiperConfig.pagination === true) {
              this.config.pagination = this.paginationConfig;
            } else {
              this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
          }

          return this.config;
        }
      }, {
        key: "updateClasses",
        value: function updateClasses() {
          if (this.swiperSlides) {
            var updateNeeded = false;
            var children = this.swiperSlides.nativeElement.children;

            for (var i = 0; i < children.length; i++) {
              if (/swiper-.*/.test(children[i].className) === false) {
                updateNeeded = true;
                children[i].classList.add('swiper-slide');
              }
            }

            if (updateNeeded && this.directiveRef) {
              this.directiveRef.update();
            }
          }

          this.cdRef.detectChanges();
        }
      }, {
        key: "onPaginationClick",
        value: function onPaginationClick(index) {
          if (this.config && this.directiveRef && (this.config.pagination === true || this.config.pagination && typeof this.config.pagination === 'object' && (!this.config.pagination.type || this.config.pagination.type === 'bullets') && this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')) {
            this.directiveRef.setIndex(index);
          }
        }
      }, {
        key: "isAtLast",
        get: function get() {
          return !this.directiveRef || !this.directiveRef.swiper() ? false : this.directiveRef.swiper()['isEnd'];
        }
      }, {
        key: "isAtFirst",
        get: function get() {
          return !this.directiveRef || !this.directiveRef.swiper() ? false : this.directiveRef.swiper()['isBeginning'];
        }
      }]);

      return SwiperComponent;
    }();

    SwiperComponent.ɵfac = function SwiperComponent_Factory(t) {
      return new (t || SwiperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8));
    };

    SwiperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SwiperComponent,
      selectors: [["swiper"]],
      viewQuery: function SwiperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](SwiperDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.swiperSlides = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      inputs: {
        index: "index",
        disabled: "disabled",
        performance: "performance",
        useSwiperClass: "useSwiperClass",
        config: "config"
      },
      outputs: {
        indexChange: "indexChange",
        S_INIT: "init",
        S_BEFOREDESTROY: "beforeDestroy",
        S_SCROLL: "scroll",
        S_PROGRESS: "progress",
        S_KEYPRESS: "keyPress",
        S_RESIZE: "resize",
        S_BREAKPOINT: "breakpoint",
        S_ZOOMCHANGE: "zoomChange",
        S_AFTERRESIZE: "afterResize",
        S_BEFORERESIZE: "beforeResize",
        S_BEFORELOOPFIX: "beforeLoopFix",
        S_LOOPFIX: "loopFix",
        S_SLIDERMOVE: "sliderMove",
        S_SLIDECHANGE: "slideChange",
        S_SETTRANSLATE: "setTranslate",
        S_SETTRANSITION: "setTransition",
        S_FROMEDGE: "fromEdge",
        S_REACHEND: "reachEnd",
        S_REACHBEGINNING: "reachBeginning",
        S_AUTOPLAY: "autoplay",
        S_AUTOPLAYSTART: "autoplayStart",
        S_AUTOPLAYSTOP: "autoplayStop",
        S_IMAGESREADY: "imagesReady",
        S_LAZYIMAGELOAD: "lazyImageLoad",
        S_LAZYIMAGEREADY: "lazyImageReady",
        S_SCROLLDRAGEND: "scrollDragEnd",
        S_SCROLLDRAGMOVE: "scrollDragMove",
        S_SCROLLDRAGSTART: "scrollDragStart",
        S_NAVIGATIONHIDE: "navigationHide",
        S_NAVIGATIONSHOW: "navigationShow",
        S_PAGINATIONRENDER: "paginationRender",
        S_PAGINATIONUPDATE: "paginationUpdate",
        S_PAGINATIONHIDE: "paginationHide",
        S_PAGINATIONSHOW: "paginationShow",
        S_TAP: "swiperTap",
        S_CLICK: "swiperClick",
        S_DOUBLETAP: "swiperDoubleTap",
        S_TOUCHEND: "swiperTouchEnd",
        S_TOUCHMOVE: "swiperTouchMove",
        S_TOUCHSTART: "swiperTouchStart",
        S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite",
        S_TRANSITIONEND: "swiperTransitionEnd",
        S_TRANSITIONSTART: "swiperTransitionStart",
        S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd",
        S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart",
        S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd",
        S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart",
        S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd",
        S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart"
      },
      exportAs: ["ngxSwiper"],
      ngContentSelectors: _c1,
      decls: 9,
      vars: 14,
      consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]],
      template: function SwiperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwiperComponent_Template_div_click_8_listener($event) {
            return ctx.onPaginationClick($event.target.getAttribute("index"));
          })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) {
            return ctx.onPaginationClick($event.target.getAttribute("index"));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.isAtFirst || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.isAtLast || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
        }
      },
      directives: [SwiperDirective],
      styles: ["swiper[fxflex]{display:-webkit-box;display:flex;flex-direction:inherit;min-width:0;min-height:0;-webkit-box-direction:inherit;-webkit-box-orient:inherit}swiper[fxflex]>.swiper.s-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}swiper>.swiper.s-wrapper{width:100%;height:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{will-change:transform;overflow:auto;width:100%;height:100%;max-width:100%;max-height:100%}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{position:relative;display:inline-block;padding:4px;margin:2px;cursor:pointer;pointer-events:all}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{top:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{top:auto;bottom:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{width:8px;-webkit-transition:width 250ms ease-in-out;transition:width 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;-webkit-transition:height 250ms ease-in-out;transition:height 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff;--swiper-navigation-size:44px}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:1s linear infinite swiper-preloader-spin;animation:1s linear infinite swiper-preloader-spin;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}"],
      encapsulation: 2
    });

    SwiperComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [SWIPER_CONFIG]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperComponent.prototype, "performance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SwiperComponent.prototype, "useSwiperClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SwiperComponent.prototype, "indexChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('swiperSlides', {
      "static": false
    })], SwiperComponent.prototype, "swiperSlides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(SwiperDirective, {
      "static": false
    })], SwiperComponent.prototype, "directiveRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('init')], SwiperComponent.prototype, "S_INIT", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeDestroy')], SwiperComponent.prototype, "S_BEFOREDESTROY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scroll')], SwiperComponent.prototype, "S_SCROLL", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('progress')], SwiperComponent.prototype, "S_PROGRESS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('keyPress')], SwiperComponent.prototype, "S_KEYPRESS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('resize')], SwiperComponent.prototype, "S_RESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('breakpoint')], SwiperComponent.prototype, "S_BREAKPOINT", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('zoomChange')], SwiperComponent.prototype, "S_ZOOMCHANGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('afterResize')], SwiperComponent.prototype, "S_AFTERRESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeResize')], SwiperComponent.prototype, "S_BEFORERESIZE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('beforeLoopFix')], SwiperComponent.prototype, "S_BEFORELOOPFIX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('loopFix')], SwiperComponent.prototype, "S_LOOPFIX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('sliderMove')], SwiperComponent.prototype, "S_SLIDERMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChange')], SwiperComponent.prototype, "S_SLIDECHANGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('setTranslate')], SwiperComponent.prototype, "S_SETTRANSLATE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('setTransition')], SwiperComponent.prototype, "S_SETTRANSITION", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('fromEdge')], SwiperComponent.prototype, "S_FROMEDGE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('reachEnd')], SwiperComponent.prototype, "S_REACHEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('reachBeginning')], SwiperComponent.prototype, "S_REACHBEGINNING", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplay')], SwiperComponent.prototype, "S_AUTOPLAY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplayStart')], SwiperComponent.prototype, "S_AUTOPLAYSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('autoplayStop')], SwiperComponent.prototype, "S_AUTOPLAYSTOP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('imagesReady')], SwiperComponent.prototype, "S_IMAGESREADY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('lazyImageLoad')], SwiperComponent.prototype, "S_LAZYIMAGELOAD", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('lazyImageReady')], SwiperComponent.prototype, "S_LAZYIMAGEREADY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragEnd')], SwiperComponent.prototype, "S_SCROLLDRAGEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragMove')], SwiperComponent.prototype, "S_SCROLLDRAGMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('scrollDragStart')], SwiperComponent.prototype, "S_SCROLLDRAGSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('navigationHide')], SwiperComponent.prototype, "S_NAVIGATIONHIDE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('navigationShow')], SwiperComponent.prototype, "S_NAVIGATIONSHOW", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationRender')], SwiperComponent.prototype, "S_PAGINATIONRENDER", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationUpdate')], SwiperComponent.prototype, "S_PAGINATIONUPDATE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationHide')], SwiperComponent.prototype, "S_PAGINATIONHIDE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('paginationShow')], SwiperComponent.prototype, "S_PAGINATIONSHOW", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTap')], SwiperComponent.prototype, "S_TAP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperClick')], SwiperComponent.prototype, "S_CLICK", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperDoubleTap')], SwiperComponent.prototype, "S_DOUBLETAP", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchEnd')], SwiperComponent.prototype, "S_TOUCHEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchMove')], SwiperComponent.prototype, "S_TOUCHMOVE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchStart')], SwiperComponent.prototype, "S_TOUCHSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTouchMoveOpposite')], SwiperComponent.prototype, "S_TOUCHMOVEOPPOSITE", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTransitionEnd')], SwiperComponent.prototype, "S_TRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('swiperTransitionStart')], SwiperComponent.prototype, "S_TRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slidePrevTransitionEnd')], SwiperComponent.prototype, "S_SLIDEPREVTRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slidePrevTransitionStart')], SwiperComponent.prototype, "S_SLIDEPREVTRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideNextTransitionEnd')], SwiperComponent.prototype, "S_SLIDENEXTTRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideNextTransitionStart')], SwiperComponent.prototype, "S_SLIDENEXTTRANSITIONSTART", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChangeTransitionEnd')], SwiperComponent.prototype, "S_SLIDECHANGETRANSITIONEND", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('slideChangeTransitionStart')], SwiperComponent.prototype, "S_SLIDECHANGETRANSITIONSTART", void 0);
    SwiperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SWIPER_CONFIG))], SwiperComponent);

    var SwiperModule = function SwiperModule() {
      _classCallCheck(this, SwiperModule);
    };

    SwiperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SwiperModule
    });
    SwiperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SwiperModule_Factory(t) {
        return new (t || SwiperModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwiperDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[swiper]',
          exportAs: 'ngxSwiper'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [SWIPER_CONFIG]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        performance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        indexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        S_INIT: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['init']
        }],
        S_BEFOREDESTROY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeDestroy']
        }],
        S_SCROLL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scroll']
        }],
        S_PROGRESS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['progress']
        }],
        S_KEYPRESS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['keyPress']
        }],
        S_RESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['resize']
        }],
        S_BREAKPOINT: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['breakpoint']
        }],
        S_ZOOMCHANGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['zoomChange']
        }],
        S_AFTERRESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['afterResize']
        }],
        S_BEFORERESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeResize']
        }],
        S_LOOPFIX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['loopFix']
        }],
        S_BEFORELOOPFIX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeLoopFix']
        }],
        S_SLIDERMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['sliderMove']
        }],
        S_SLIDECHANGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChange']
        }],
        S_SETTRANSLATE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setTranslate']
        }],
        S_SETTRANSITION: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setTransition']
        }],
        S_FROMEDGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['fromEdge']
        }],
        S_REACHEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['reachEnd']
        }],
        S_REACHBEGINNING: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['reachBeginning']
        }],
        S_AUTOPLAY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplay']
        }],
        S_AUTOPLAYSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplayStart']
        }],
        S_AUTOPLAYSTOP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplayStop']
        }],
        S_IMAGESREADY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['imagesReady']
        }],
        S_LAZYIMAGELOAD: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['lazyImageLoad']
        }],
        S_LAZYIMAGEREADY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['lazyImageReady']
        }],
        S_SCROLLDRAGEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragEnd']
        }],
        S_SCROLLDRAGMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragMove']
        }],
        S_SCROLLDRAGSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragStart']
        }],
        S_NAVIGATIONHIDE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['navigationHide']
        }],
        S_NAVIGATIONSHOW: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['navigationShow']
        }],
        S_PAGINATIONRENDER: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationRender']
        }],
        S_PAGINATIONUPDATE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationUpdate']
        }],
        S_PAGINATIONHIDE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationHide']
        }],
        S_PAGINATIONSHOW: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationShow']
        }],
        S_TAP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTap']
        }],
        S_CLICK: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperClick']
        }],
        S_DOUBLETAP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperDoubleTap']
        }],
        S_TOUCHEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchEnd']
        }],
        S_TOUCHMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchMove']
        }],
        S_TOUCHSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchStart']
        }],
        S_TOUCHMOVEOPPOSITE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchMoveOpposite']
        }],
        S_TRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTransitionEnd']
        }],
        S_TRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTransitionStart']
        }],
        S_SLIDEPREVTRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slidePrevTransitionEnd']
        }],
        S_SLIDEPREVTRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slidePrevTransitionStart']
        }],
        S_SLIDENEXTTRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideNextTransitionEnd']
        }],
        S_SLIDENEXTTRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideNextTransitionStart']
        }],
        S_SLIDECHANGETRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChangeTransitionEnd']
        }],
        S_SLIDECHANGETRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChangeTransitionStart']
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['swiper']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwiperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'swiper',
          exportAs: 'ngxSwiper',
          template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n  <div #swiperSlides class=\"swiper-wrapper\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\n  <div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\xA0null\"></div>\n  <div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\n  <div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          styles: ["swiper[fxflex]{display:-webkit-box;display:flex;flex-direction:inherit;min-width:0;min-height:0;-webkit-box-direction:inherit;-webkit-box-orient:inherit}swiper[fxflex]>.swiper.s-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}swiper>.swiper.s-wrapper{width:100%;height:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{will-change:transform;overflow:auto;width:100%;height:100%;max-width:100%;max-height:100%}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{position:relative;display:inline-block;padding:4px;margin:2px;cursor:pointer;pointer-events:all}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{top:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{top:auto;bottom:10px;left:50%;margin-top:0;margin-left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{width:8px;-webkit-transition:width 250ms ease-in-out;transition:width 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;-webkit-transition:height 250ms ease-in-out;transition:height 250ms ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff;--swiper-navigation-size:44px}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:1s linear infinite swiper-preloader-spin;animation:1s linear infinite swiper-preloader-spin;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [SWIPER_CONFIG]
          }]
        }];
      }, {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        performance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        useSwiperClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        indexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        S_INIT: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['init']
        }],
        S_BEFOREDESTROY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeDestroy']
        }],
        S_SCROLL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scroll']
        }],
        S_PROGRESS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['progress']
        }],
        S_KEYPRESS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['keyPress']
        }],
        S_RESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['resize']
        }],
        S_BREAKPOINT: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['breakpoint']
        }],
        S_ZOOMCHANGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['zoomChange']
        }],
        S_AFTERRESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['afterResize']
        }],
        S_BEFORERESIZE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeResize']
        }],
        S_BEFORELOOPFIX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['beforeLoopFix']
        }],
        S_LOOPFIX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['loopFix']
        }],
        S_SLIDERMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['sliderMove']
        }],
        S_SLIDECHANGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChange']
        }],
        S_SETTRANSLATE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setTranslate']
        }],
        S_SETTRANSITION: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setTransition']
        }],
        S_FROMEDGE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['fromEdge']
        }],
        S_REACHEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['reachEnd']
        }],
        S_REACHBEGINNING: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['reachBeginning']
        }],
        S_AUTOPLAY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplay']
        }],
        S_AUTOPLAYSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplayStart']
        }],
        S_AUTOPLAYSTOP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['autoplayStop']
        }],
        S_IMAGESREADY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['imagesReady']
        }],
        S_LAZYIMAGELOAD: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['lazyImageLoad']
        }],
        S_LAZYIMAGEREADY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['lazyImageReady']
        }],
        S_SCROLLDRAGEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragEnd']
        }],
        S_SCROLLDRAGMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragMove']
        }],
        S_SCROLLDRAGSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['scrollDragStart']
        }],
        S_NAVIGATIONHIDE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['navigationHide']
        }],
        S_NAVIGATIONSHOW: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['navigationShow']
        }],
        S_PAGINATIONRENDER: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationRender']
        }],
        S_PAGINATIONUPDATE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationUpdate']
        }],
        S_PAGINATIONHIDE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationHide']
        }],
        S_PAGINATIONSHOW: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['paginationShow']
        }],
        S_TAP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTap']
        }],
        S_CLICK: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperClick']
        }],
        S_DOUBLETAP: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperDoubleTap']
        }],
        S_TOUCHEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchEnd']
        }],
        S_TOUCHMOVE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchMove']
        }],
        S_TOUCHSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchStart']
        }],
        S_TOUCHMOVEOPPOSITE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTouchMoveOpposite']
        }],
        S_TRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTransitionEnd']
        }],
        S_TRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['swiperTransitionStart']
        }],
        S_SLIDEPREVTRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slidePrevTransitionEnd']
        }],
        S_SLIDEPREVTRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slidePrevTransitionStart']
        }],
        S_SLIDENEXTTRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideNextTransitionEnd']
        }],
        S_SLIDENEXTTRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideNextTransitionStart']
        }],
        S_SLIDECHANGETRANSITIONEND: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChangeTransitionEnd']
        }],
        S_SLIDECHANGETRANSITIONSTART: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['slideChangeTransitionStart']
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        swiperSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['swiperSlides', {
            "static": false
          }]
        }],
        directiveRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [SwiperDirective, {
            "static": false
          }]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SwiperModule, {
        declarations: function declarations() {
          return [SwiperComponent, SwiperDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], SwiperComponent, SwiperDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwiperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [SwiperComponent, SwiperDirective],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], SwiperComponent, SwiperDirective]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-swiper-wrapper.js.map

    /***/

  },

  /***/
  "./node_modules/ssr-window/dist/ssr-window.esm.js":
  /*!********************************************************!*\
    !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
    \********************************************************/

  /*! exports provided: document, extend, window */

  /***/
  function node_modulesSsrWindowDistSsrWindowEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "document", function () {
      return doc;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "window", function () {
      return win;
    });
    /**
     * SSR Window 2.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: May 12, 2020
     */

    /* eslint-disable no-param-reassign */


    function isObject(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
          extend(target[key], src[key]);
        }
      });
    }

    var doc = typeof document !== 'undefined' ? document : {};
    var ssrDocument = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ''
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };
    extend(doc, ssrDocument);
    var win = typeof window !== 'undefined' ? window : {};
    var ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return '';
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      }
    };
    extend(win, ssrWindow);
    /***/
  },

  /***/
  "./node_modules/swiper/js/swiper.esm.bundle.js":
  /*!*****************************************************!*\
    !*** ./node_modules/swiper/js/swiper.esm.bundle.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperJsSwiperEsmBundleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dom7/dist/dom7.modular */
    "./node_modules/dom7/dist/dom7.modular.js");
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/dist/ssr-window.esm.js");
    /**
     * Swiper 5.4.5
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * http://swiperjs.com
     *
     * Copyright 2014-2020 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: June 16, 2020
     */


    var Methods = {
      addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["addClass"],
      removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
      hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
      toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
      attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["attr"],
      removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
      data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["data"],
      transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transform"],
      transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transition"],
      on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["on"],
      off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["off"],
      trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["trigger"],
      transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
      outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
      outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
      offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["offset"],
      css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["css"],
      each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["each"],
      html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["html"],
      text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["text"],
      is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["is"],
      index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["index"],
      eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["eq"],
      append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["append"],
      prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prepend"],
      next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["next"],
      nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
      prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prev"],
      prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
      parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parent"],
      parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parents"],
      closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["closest"],
      find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["find"],
      children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["children"],
      filter: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["filter"],
      remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["remove"],
      add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["add"],
      styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["styles"]
    };
    Object.keys(Methods).forEach(function (methodName) {
      dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] || Methods[methodName];
    });
    var Utils = {
      deleteProps: function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
          try {
            object[key] = null;
          } catch (e) {// no getter for object
          }

          try {
            delete object[key];
          } catch (e) {// something got wrong
          }
        });
      },
      nextTick: function nextTick(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return setTimeout(callback, delay);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(el) {
        var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el, null);

        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) {
          curTransform = curStyle.transform || curStyle.webkitTransform;

          if (curTransform.split(',').length > 6) {
            curTransform = curTransform.split(', ').map(function (a) {
              return a.replace(',', '.');
            }).join(', ');
          } // Some old versions of Webkit choke when 'none' is passed; pass
          // empty string instead in this case


          transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
          transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
          matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
          // Latest Chrome and webkits Fix
          if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
          else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }

        if (axis === 'y') {
          // Latest Chrome and webkits Fix
          if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
          else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }

        return curTransform || 0;
      },
      parseUrlQuery: function parseUrlQuery(url) {
        var query = {};
        var urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.href;
        var i;
        var params;
        var param;
        var length;

        if (typeof urlToParse === 'string' && urlToParse.length) {
          urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
          params = urlToParse.split('&').filter(function (paramsPart) {
            return paramsPart !== '';
          });
          length = params.length;

          for (i = 0; i < length; i += 1) {
            param = params[i].replace(/#\S+/g, '').split('=');
            query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
          }
        }

        return query;
      },
      isObject: function isObject(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
      },
      extend: function extend() {
        var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

        for (var i = 1; i < arguments.length; i += 1) {
          var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

          if (nextSource !== undefined && nextSource !== null) {
            var keysArray = Object.keys(Object(nextSource));

            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

              if (desc !== undefined && desc.enumerable) {
                if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  to[nextKey] = {};
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
        }

        return to;
      }
    };

    var Support = function Support() {
      return {
        touch: !!('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"] instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch),
        pointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].PointerEvent && 'maxTouchPoints' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.maxTouchPoints >= 0,
        observer: function checkObserver() {
          return 'MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
        }(),
        passiveListener: function checkPassiveListener() {
          var supportsPassive = false;

          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              }
            });
            ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
        }()
      };
    }();

    var SwiperClass =
    /*#__PURE__*/
    function () {
      function SwiperClass() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SwiperClass);

        var self = this;
        self.params = params; // Events

        self.eventsListeners = {};

        if (self.params && self.params.on) {
          Object.keys(self.params.on).forEach(function (eventName) {
            self.on(eventName, self.params.on[eventName]);
          });
        }
      }

      _createClass(SwiperClass, [{
        key: "on",
        value: function on(events, handler, priority) {
          var self = this;
          if (typeof handler !== 'function') return self;
          var method = priority ? 'unshift' : 'push';
          events.split(' ').forEach(function (event) {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
          });
          return self;
        }
      }, {
        key: "once",
        value: function once(events, handler, priority) {
          var self = this;
          if (typeof handler !== 'function') return self;

          function onceHandler() {
            self.off(events, onceHandler);

            if (onceHandler.f7proxy) {
              delete onceHandler.f7proxy;
            }

            for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
              args[_key34] = arguments[_key34];
            }

            handler.apply(self, args);
          }

          onceHandler.f7proxy = handler;
          return self.on(events, onceHandler, priority);
        }
      }, {
        key: "off",
        value: function off(events, handler) {
          var self = this;
          if (!self.eventsListeners) return self;
          events.split(' ').forEach(function (event) {
            if (typeof handler === 'undefined') {
              self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
              self.eventsListeners[event].forEach(function (eventHandler, index) {
                if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
                  self.eventsListeners[event].splice(index, 1);
                }
              });
            }
          });
          return self;
        }
      }, {
        key: "emit",
        value: function emit() {
          var self = this;
          if (!self.eventsListeners) return self;
          var events;
          var data;
          var context;

          for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
            args[_key35] = arguments[_key35];
          }

          if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
          } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
          }

          var eventsArray = Array.isArray(events) ? events : events.split(' ');
          eventsArray.forEach(function (event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
              var handlers = [];
              self.eventsListeners[event].forEach(function (eventHandler) {
                handlers.push(eventHandler);
              });
              handlers.forEach(function (eventHandler) {
                eventHandler.apply(context, data);
              });
            }
          });
          return self;
        }
      }, {
        key: "useModulesParams",
        value: function useModulesParams(instanceParams) {
          var instance = this;
          if (!instance.modules) return;
          Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName]; // Extend params

            if (module.params) {
              Utils.extend(instanceParams, module.params);
            }
          });
        }
      }, {
        key: "useModules",
        value: function useModules() {
          var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var instance = this;
          if (!instance.modules) return;
          Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

            if (module.instance) {
              Object.keys(module.instance).forEach(function (modulePropName) {
                var moduleProp = module.instance[modulePropName];

                if (typeof moduleProp === 'function') {
                  instance[modulePropName] = moduleProp.bind(instance);
                } else {
                  instance[modulePropName] = moduleProp;
                }
              });
            } // Add event listeners


            if (module.on && instance.on) {
              Object.keys(module.on).forEach(function (moduleEventName) {
                instance.on(moduleEventName, module.on[moduleEventName]);
              });
            } // Module create callback


            if (module.create) {
              module.create.bind(instance)(moduleParams);
            }
          });
        }
      }], [{
        key: "installModule",
        value: function installModule(module) {
          var Class = this;
          if (!Class.prototype.modules) Class.prototype.modules = {};
          var name = module.name || "".concat(Object.keys(Class.prototype.modules).length, "_").concat(Utils.now());
          Class.prototype.modules[name] = module; // Prototype

          if (module.proto) {
            Object.keys(module.proto).forEach(function (key) {
              Class.prototype[key] = module.proto[key];
            });
          } // Class


          if (module["static"]) {
            Object.keys(module["static"]).forEach(function (key) {
              Class[key] = module["static"][key];
            });
          } // Callback


          if (module.install) {
            for (var _len36 = arguments.length, params = new Array(_len36 > 1 ? _len36 - 1 : 0), _key36 = 1; _key36 < _len36; _key36++) {
              params[_key36 - 1] = arguments[_key36];
            }

            module.install.apply(Class, params);
          }

          return Class;
        }
      }, {
        key: "use",
        value: function use(module) {
          var Class = this;

          if (Array.isArray(module)) {
            module.forEach(function (m) {
              return Class.installModule(m);
            });
            return Class;
          }

          for (var _len37 = arguments.length, params = new Array(_len37 > 1 ? _len37 - 1 : 0), _key37 = 1; _key37 < _len37; _key37++) {
            params[_key37 - 1] = arguments[_key37];
          }

          return Class.installModule.apply(Class, [module].concat(params));
        }
      }, {
        key: "components",
        set: function set(components) {
          var Class = this;
          if (!Class.use) return;
          Class.use(components);
        }
      }]);

      return SwiperClass;
    }();

    function updateSize() {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined') {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined') {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
      height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
      Utils.extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl,
          swiperSize = swiper.size,
          rtl = swiper.rtlTranslate,
          wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];

      function slidesForMargin(slideIndex) {
        if (!params.cssMode) return true;

        if (slideIndex === slides.length - 1) {
          return false;
        }

        return true;
      }

      var offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      var offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.snapGrid.length;
      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: ''
      });
      var slidesNumberEvenToRows;

      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }

        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      } // Calc slides


      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;

        var _slide = slides.eq(i);

        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = void 0;
          var column = void 0;
          var row = void 0;

          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;

            _slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex
            });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;

            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              row += 1;

              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }

          _slide.css("margin-".concat(swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && "".concat(params.spaceBetween, "px"));
        }

        if (_slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          var slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(_slide[0], null);
          var currentTransform = _slide[0].style.transform;
          var currentWebKitTransform = _slide[0].style.webkitTransform;

          if (currentTransform) {
            _slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            _slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            if (swiper.isHorizontal()) {
              var width = parseFloat(slideStyles.getPropertyValue('width'));
              var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
              var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
              var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
              var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
              var boxSizing = slideStyles.getPropertyValue('box-sizing');

              if (boxSizing && boxSizing === 'border-box') {
                slideSize = width + marginLeft + marginRight;
              } else {
                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
              }
            } else {
              var height = parseFloat(slideStyles.getPropertyValue('height'));
              var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
              var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
              var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
              var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));

              var _boxSizing = slideStyles.getPropertyValue('box-sizing');

              if (_boxSizing && _boxSizing === 'border-box') {
                slideSize = height + marginTop + marginBottom;
              } else {
                slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
              }
            }
          }

          if (currentTransform) {
            _slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            _slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            if (swiper.isHorizontal()) {
              slides[i].style.width = "".concat(slideSize, "px");
            } else {
              slides[i].style.height = "".concat(slideSize, "px");
            }
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
        });
      }

      if (params.setWrapperSize) {
        if (swiper.isHorizontal()) $wrapperEl.css({
          width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
        });else $wrapperEl.css({
          height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
        });
      }

      if (params.slidesPerColumn > 1) {
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        if (swiper.isHorizontal()) $wrapperEl.css({
          width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
        });else $wrapperEl.css({
          height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
        });

        if (params.centeredSlides) {
          newSlidesGrid = [];

          for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
            var slidesGridItem = snapGrid[_i2];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[_i2] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i3 = 0; _i3 < snapGrid.length; _i3 += 1) {
          var _slidesGridItem = snapGrid[_i3];
          if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

          if (snapGrid[_i3] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(_slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        if (swiper.isHorizontal()) {
          if (rtl) slides.filter(slidesForMargin).css({
            marginLeft: "".concat(spaceBetween, "px")
          });else slides.filter(slidesForMargin).css({
            marginRight: "".concat(spaceBetween, "px")
          });
        } else slides.filter(slidesForMargin).css({
          marginBottom: "".concat(spaceBetween, "px")
        });
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        var _allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        _allSlidesSize -= params.spaceBetween;

        if (_allSlidesSize < swiperSize) {
          var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Utils.extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
      });

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }

    function updateAutoHeight(speed) {
      var swiper = this;
      var activeSlides = [];
      var newHeight = 0;
      var i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      } // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(function (index, slide) {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length) break;
            activeSlides.push(swiper.slides.eq(index)[0]);
          }
        }
      } else {
        activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
    }

    function updateSlidesOffset() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress() {
      var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides,
          rtl = swiper.rtlTranslate;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      var offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (var i = 0; i < slides.length; i += 1) {
        var _slide2 = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);

        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
          var slideBefore = -(offsetCenter - _slide2.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

          if (isVisible) {
            swiper.visibleSlides.push(_slide2);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }

        _slide2.progress = rtl ? -slideProgress : slideProgress;
      }

      swiper.visibleSlides = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.visibleSlides);
    }

    function updateProgress(translate) {
      var swiper = this;

      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress,
          isBeginning = swiper.isBeginning,
          isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Utils.extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
      });
      if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      var swiper = this;
      var slides = swiper.slides,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex,
          realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
      var activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
        }
      }
    }

    function updateActiveIndex(newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          params = swiper.params,
          previousIndex = swiper.activeIndex,
          previousRealIndex = swiper.realIndex,
          previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Utils.extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      var swiper = this;
      var params = swiper.params;
      var slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(".".concat(params.slideClass))[0];
      var slideFound = false;

      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) slideFound = true;
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).index();
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize: updateSize,
      updateSlides: updateSlides,
      updateAutoHeight: updateAutoHeight,
      updateSlidesOffset: updateSlidesOffset,
      updateSlidesProgress: updateSlidesProgress,
      updateProgress: updateProgress,
      updateSlidesClasses: updateSlidesClasses,
      updateActiveIndex: updateActiveIndex,
      updateClickedSlide: updateClickedSlide
    };

    function getTranslate() {
      var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
      var swiper = this;
      var params = swiper.params,
          rtl = swiper.rtlTranslate,
          translate = swiper.translate,
          $wrapperEl = swiper.$wrapperEl;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          wrapperEl = swiper.wrapperEl,
          progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo() {
      var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var translateBounds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var internal = arguments.length > 4 ? arguments[4] : undefined;
      var swiper = this;
      var params = swiper.params,
          wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        var isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;

            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), _defineProperty(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getTranslate,
      setTranslate: setTranslate,
      minTranslate: minTranslate,
      maxTranslate: maxTranslate,
      translateTo: translateTo
    };

    function setTransition(duration, byController) {
      var swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionStart() {
      var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var direction = arguments.length > 1 ? arguments[1] : undefined;
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          params = swiper.params,
          previousIndex = swiper.previousIndex;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionStart');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }

        swiper.emit('slideChangeTransitionStart');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }

    function transitionEnd() {
      var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var direction = arguments.length > 1 ? arguments[1] : undefined;
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          previousIndex = swiper.previousIndex,
          params = swiper.params;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionEnd');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }

        swiper.emit('slideChangeTransitionEnd');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }

    var transition = {
      setTransition: setTransition,
      transitionStart: transitionStart,
      transitionEnd: transitionEnd
    };

    function slideTo() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var internal = arguments.length > 3 ? arguments[3] : undefined;
      var swiper = this;
      var slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      var params = swiper.params,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          previousIndex = swiper.previousIndex,
          activeIndex = swiper.activeIndex,
          rtl = swiper.rtlTranslate,
          wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      var translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      var direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;

        if (rtl) {
          t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        }

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo2;

            wrapperEl.scrollTo((_wrapperEl$scrollTo2 = {}, _defineProperty(_wrapperEl$scrollTo2, isH ? 'left' : 'top', t), _defineProperty(_wrapperEl$scrollTo2, "behavior", 'smooth'), _wrapperEl$scrollTo2));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }

      return true;
    }

    function slideToLoop() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var internal = arguments.length > 3 ? arguments[3] : undefined;
      var swiper = this;
      var newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideNext() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var internal = arguments.length > 2 ? arguments[2] : undefined;
      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

      if (params.loop) {
        if (animating) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slidePrev() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var internal = arguments.length > 2 ? arguments[2] : undefined;
      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          rtlTranslate = swiper.rtlTranslate;

      if (params.loop) {
        if (animating) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      var translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) {
        return normalize(val);
      });
      var normalizedSlidesGrid = slidesGrid.map(function (val) {
        return normalize(val);
      });
      var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
        });
      }

      var prevIndex;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideReset() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var internal = arguments.length > 2 ? arguments[2] : undefined;
      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideToClosest() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var internal = arguments.length > 2 ? arguments[2] : undefined;
      var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var _currentSnap = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl;
      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;

      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
            Utils.nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo: slideTo,
      slideToLoop: slideToLoop,
      slideNext: slideNext,
      slidePrev: slidePrev,
      slideReset: slideReset,
      slideToClosest: slideToClosest,
      slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
      var slides = $wrapperEl.children(".".concat(params.slideClass));

      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
            $wrapperEl.append(blankNode);
          }

          slides = $wrapperEl.children(".".concat(params.slideClass));
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (index, el) {
        var slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
      });

      for (var _i4 = 0; _i4 < appendSlides.length; _i4 += 1) {
        $wrapperEl.append(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(appendSlides[_i4].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (var _i5 = prependSlides.length - 1; _i5 >= 0; _i5 -= 1) {
        $wrapperEl.prepend(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(prependSlides[_i5].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      var swiper = this;
      swiper.emit('beforeLoopFix');
      var activeIndex = swiper.activeIndex,
          slides = swiper.slides,
          loopedSlides = swiper.loopedSlides,
          allowSlidePrev = swiper.allowSlidePrev,
          allowSlideNext = swiper.allowSlideNext,
          snapGrid = swiper.snapGrid,
          rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;

        var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (_slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          slides = swiper.slides;
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, ",.").concat(params.slideClass, ".").concat(params.slideBlankClass)).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate: loopCreate,
      loopFix: loopFix,
      loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
      var swiper = this;
      if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      var swiper = this;
      if (Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      swiper.el.style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor: setGrabCursor,
      unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;

      if (params.loop) {
        swiper.loopDestroy();
      }

      var newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
      }

      var baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      var slidesBuffer = [];

      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var _i6 = 0; _i6 < slides.length; _i6 += 1) {
          if (slides[_i6]) $wrapperEl.append(slides[_i6]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (var _i7 = 0; _i7 < slidesBuffer.length; _i7 += 1) {
        $wrapperEl.append(slidesBuffer[_i7]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
      }

      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      var swiper = this;
      var slidesIndexes = [];

      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      addSlide: addSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides
    };

    var Device = function Device() {
      var platform = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.platform;
      var ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent;
      var device = {
        ios: false,
        android: false,
        androidChrome: false,
        desktop: false,
        iphone: false,
        ipod: false,
        ipad: false,
        edge: false,
        ie: false,
        firefox: false,
        macos: false,
        windows: false,
        cordova: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap),
        phonegap: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap),
        electron: false
      };
      var screenWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width;
      var screenHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.height;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      var edge = ua.indexOf('Edge/') >= 0;
      var firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
      var windows = platform === 'Win32';
      var electron = ua.toLowerCase().indexOf('electron') >= 0;
      var macos = platform === 'MacIntel'; // iPadOs 13 fix

      if (!ipad && macos && Support.touch && (screenWidth === 1024 && screenHeight === 1366 || // Pro 12.9
      screenWidth === 834 && screenHeight === 1194 // Pro 11
      || screenWidth === 834 && screenHeight === 1112 // Pro 10.5
      || screenWidth === 768 && screenHeight === 1024 // other
      )) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        macos = false;
      }

      device.ie = ie;
      device.edge = edge;
      device.firefox = firefox; // Android

      if (android && !windows) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // iOS


      if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
      }

      if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
      }

      if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.ipod = true;
      } // iOS 8+ changed UA


      if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
          device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
      } // Webview


      device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.standalone)) || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].matchMedia && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].matchMedia('(display-mode: standalone)').matches;
      device.webview = device.webView;
      device.standalone = device.webView; // Desktop

      device.desktop = !(device.ios || device.android) || electron;

      if (device.desktop) {
        device.electron = electron;
        device.macos = macos;
        device.windows = windows;

        if (device.macos) {
          device.os = 'macos';
        }

        if (device.windows) {
          device.os = 'windows';
        }
      } // Pixel Ratio


      device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].devicePixelRatio || 1; // Export object

      return device;
    }();

    function onTouchStart(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      var e = event;
      if (e.originalEvent) e = e.originalEvent;
      var $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return;

      if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass))[0]) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width - edgeSwipeThreshold)) {
        return;
      }

      Utils.extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = Utils.now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.formElements)) preventDefault = false;

        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement).is(data.formElements) && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement !== $targetEl[0]) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.blur();
        }

        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if (params.touchStartForcePreventDefault || shouldPreventDefault) {
          e.preventDefault();
        }
      }

      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;

        if (data.isTouched) {
          Utils.extend(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = Utils.now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement) {
        if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data.formElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: Utils.now()
        });
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          $wrapperEl = swiper.$wrapperEl,
          slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      var touchEndTime = Utils.now();
      var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = Utils.now();
      Utils.nextTick(function () {
        if (!swiper.destroyed) swiper.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      var currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeModeMomentumVelocityRatio;
          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;
          var newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeModeSticky) {
            var nextSlide;

            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(function () {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        return;
      } // Find current slide


      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];

      for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + _increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + _increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size


      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      var swiper = this;
      var params = swiper.params,
          el = swiper.el;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      var allowSlideNext = swiper.allowSlideNext,
          allowSlidePrev = swiper.allowSlidePrev,
          snapGrid = swiper.snapGrid; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      var swiper = this;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl,
          rtlTranslate = swiper.rtlTranslate;
      swiper.previousTranslate = swiper.translate;

      if (swiper.isHorizontal()) {
        if (rtlTranslate) {
          swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
        } else {
          swiper.translate = -wrapperEl.scrollLeft;
        }
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
      var swiper = this;
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);
      var capture = !!params.nested; // Touch Events

      if (!Support.touch && Support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }

          if (!dummyEventAttached) {
            ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.onTouchMove, capture);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper.on('observerUpdate', onResize, true);
      }
    }

    function detachEvents() {
      var swiper = this;
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl;
      var capture = !!params.nested; // Touch Events

      if (!Support.touch && Support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.onTouchMove, capture);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      } // Resize handler


      swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
      attachEvents: attachEvents,
      detachEvents: detachEvents
    };

    function setBreakpoint() {
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          initialized = swiper.initialized,
          _swiper$loopedSlides = swiper.loopedSlides,
          loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
          params = swiper.params,
          $el = swiper.$el;
      var breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      var breakpoint = swiper.getBreakpoint(breakpoints);

      if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
        var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

        if (breakpointOnlyParams) {
          ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
            var paramValue = breakpointOnlyParams[param];
            if (typeof paramValue === 'undefined') return;

            if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
              breakpointOnlyParams[param] = 'auto';
            } else if (param === 'slidesPerView') {
              breakpointOnlyParams[param] = parseFloat(paramValue);
            } else {
              breakpointOnlyParams[param] = parseInt(paramValue, 10);
            }
          });
        }

        var breakpointParams = breakpointOnlyParams || swiper.originalParams;
        var wasMultiRow = params.slidesPerColumn > 1;
        var isMultiRow = breakpointParams.slidesPerColumn > 1;

        if (wasMultiRow && !isMultiRow) {
          $el.removeClass("".concat(params.containerModifierClass, "multirow ").concat(params.containerModifierClass, "multirow-column"));
        } else if (!wasMultiRow && isMultiRow) {
          $el.addClass("".concat(params.containerModifierClass, "multirow"));

          if (breakpointParams.slidesPerColumnFill === 'column') {
            $el.addClass("".concat(params.containerModifierClass, "multirow-column"));
          }
        }

        var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

        if (directionChanged && initialized) {
          swiper.changeDirection();
        }

        Utils.extend(swiper.params, breakpointParams);
        Utils.extend(swiper, {
          allowTouchMove: swiper.params.allowTouchMove,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev
        });
        swiper.currentBreakpoint = breakpoint;

        if (needsReLoop && initialized) {
          swiper.loopDestroy();
          swiper.loopCreate();
          swiper.updateSlides();
          swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
        }

        swiper.emit('breakpoint', breakpointParams);
      }
    }

    function getBreakpoint(breakpoints) {
      // Get breakpoint for window width
      if (!breakpoints) return undefined;
      var breakpoint = false;
      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight * minRatio;
          return {
            value: value,
            point: point
          };
        }

        return {
          value: point,
          point: point
        };
      });
      points.sort(function (a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
      });

      for (var i = 0; i < points.length; i += 1) {
        var _points$i = points[i],
            point = _points$i.point,
            value = _points$i.value;

        if (value <= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint: setBreakpoint,
      getBreakpoint: getBreakpoint
    };

    function addClasses() {
      var swiper = this;
      var classNames = swiper.classNames,
          params = swiper.params,
          rtl = swiper.rtl,
          $el = swiper.$el;
      var suffixes = [];
      suffixes.push('initialized');
      suffixes.push(params.direction);

      if (params.freeMode) {
        suffixes.push('free-mode');
      }

      if (params.autoHeight) {
        suffixes.push('autoheight');
      }

      if (rtl) {
        suffixes.push('rtl');
      }

      if (params.slidesPerColumn > 1) {
        suffixes.push('multirow');

        if (params.slidesPerColumnFill === 'column') {
          suffixes.push('multirow-column');
        }
      }

      if (Device.android) {
        suffixes.push('android');
      }

      if (Device.ios) {
        suffixes.push('ios');
      }

      if (params.cssMode) {
        suffixes.push('css-mode');
      }

      suffixes.forEach(function (suffix) {
        classNames.push(params.containerModifierClass + suffix);
      });
      $el.addClass(classNames.join(' '));
    }

    function removeClasses() {
      var swiper = this;
      var $el = swiper.$el,
          classNames = swiper.classNames;
      $el.removeClass(classNames.join(' '));
    }

    var classes = {
      addClasses: addClasses,
      removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      var image;

      function onReady() {
        if (callback) callback();
      }

      var isPicture = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }

      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage: loadImage,
      preloadImages: preloadImages
    };

    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked; // events

      if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) swiper.navigation.update();
      }
    }

    var checkOverflow$1 = {
      checkOverflow: checkOverflow
    };
    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      //
      preventInteractionOnTransition: false,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-container-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true
    };
    /* eslint no-param-reassign: "off" */

    var prototypes = {
      update: update,
      translate: translate,
      transition: transition,
      slide: slide,
      loop: loop,
      grabCursor: grabCursor,
      manipulation: manipulation,
      events: events,
      breakpoints: breakpoints,
      checkOverflow: checkOverflow$1,
      classes: classes,
      images: images
    };
    var extendedDefaults = {};

    var Swiper =
    /*#__PURE__*/
    function (_SwiperClass) {
      _inherits(Swiper, _SwiperClass);

      var _super = _createSuper(Swiper);

      function Swiper() {
        var _this13;

        _classCallCheck(this, Swiper);

        var el;
        var params;

        for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
          args[_key38] = arguments[_key38];
        }

        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
          params = args[0];
        } else {
          el = args[0];
          params = args[1];
        }

        if (!params) params = {};
        params = Utils.extend({}, params);
        if (el && !params.el) params.el = el;
        _this13 = _super.call(this, params);
        Object.keys(prototypes).forEach(function (prototypeGroup) {
          Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
            if (!Swiper.prototype[protoMethod]) {
              Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }
          });
        }); // Swiper Instance

        var swiper = _assertThisInitialized(_this13);

        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }

        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];

          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) return;
            if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }

            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }

            if (!params[moduleParamName]) params[moduleParamName] = {
              enabled: false
            };
          }
        }); // Extend defaults with modules params

        var swiperParams = Utils.extend({}, defaults);
        swiper.useModulesParams(swiperParams); // Extend defaults with passed params

        swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Utils.extend({}, swiper.params);
        swiper.passedParams = Utils.extend({}, params); // Save Dom lib

        swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"]; // Find el

        var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.el);
        el = $el[0];

        if (!el) {
          return _possibleConstructorReturn(_this13, undefined);
        }

        if ($el.length > 1) {
          var swipers = [];
          $el.each(function (index, containerEl) {
            var newParams = Utils.extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return _possibleConstructorReturn(_this13, swipers);
        }

        el.swiper = swiper;
        $el.data('swiper', swiper); // Find Wrapper

        var $wrapperEl;

        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          $wrapperEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el.shadowRoot.querySelector(".".concat(swiper.params.wrapperClass))); // Children needs to return slot items

          $wrapperEl.children = function (options) {
            return $el.children(options);
          };
        } else {
          $wrapperEl = $el.children(".".concat(swiper.params.wrapperClass));
        } // Extend Swiper


        Utils.extend(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          // Classes
          classNames: [],
          // Slides
          slides: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box',
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];

            if (Support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }

            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            formElements: 'input, select, option, textarea, button, video, label',
            // Last click time
            lastClickTime: Utils.now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        }); // Install Modules

        swiper.useModules(); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return _possibleConstructorReturn(_this13, swiper);
      }

      _createClass(Swiper, [{
        key: "slidesPerViewDynamic",
        value: function slidesPerViewDynamic() {
          var swiper = this;
          var params = swiper.params,
              slides = swiper.slides,
              slidesGrid = swiper.slidesGrid,
              swiperSize = swiper.size,
              activeIndex = swiper.activeIndex;
          var spv = 1;

          if (params.centeredSlides) {
            var slideSize = slides[activeIndex].swiperSlideSize;
            var breakLoop;

            for (var i = activeIndex + 1; i < slides.length; i += 1) {
              if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
              }
            }

            for (var _i8 = activeIndex - 1; _i8 >= 0; _i8 -= 1) {
              if (slides[_i8] && !breakLoop) {
                slideSize += slides[_i8].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
              }
            }
          } else {
            for (var _i9 = activeIndex + 1; _i9 < slides.length; _i9 += 1) {
              if (slidesGrid[_i9] - slidesGrid[activeIndex] < swiperSize) {
                spv += 1;
              }
            }
          }

          return spv;
        }
      }, {
        key: "update",
        value: function update() {
          var swiper = this;
          if (!swiper || swiper.destroyed) return;
          var snapGrid = swiper.snapGrid,
              params = swiper.params; // Breakpoints

          if (params.breakpoints) {
            swiper.setBreakpoint();
          }

          swiper.updateSize();
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          function setTranslate() {
            var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }

          var translated;

          if (swiper.params.freeMode) {
            setTranslate();

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
              translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
              translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            }

            if (!translated) {
              setTranslate();
            }
          }

          if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
          }

          swiper.emit('update');
        }
      }, {
        key: "changeDirection",
        value: function changeDirection(newDirection) {
          var needUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var swiper = this;
          var currentDirection = swiper.params.direction;

          if (!newDirection) {
            // eslint-disable-next-line
            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
          }

          if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
            return swiper;
          }

          swiper.$el.removeClass("".concat(swiper.params.containerModifierClass).concat(currentDirection)).addClass("".concat(swiper.params.containerModifierClass).concat(newDirection));
          swiper.params.direction = newDirection;
          swiper.slides.each(function (slideIndex, slideEl) {
            if (newDirection === 'vertical') {
              slideEl.style.width = '';
            } else {
              slideEl.style.height = '';
            }
          });
          swiper.emit('changeDirection');
          if (needUpdate) swiper.update();
          return swiper;
        }
      }, {
        key: "init",
        value: function init() {
          var swiper = this;
          if (swiper.initialized) return;
          swiper.emit('beforeInit'); // Set breakpoint

          if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
          } // Add Classes


          swiper.addClasses(); // Create loop

          if (swiper.params.loop) {
            swiper.loopCreate();
          } // Update size


          swiper.updateSize(); // Update slides

          swiper.updateSlides();

          if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
          } // Set Grab Cursor


          if (swiper.params.grabCursor) {
            swiper.setGrabCursor();
          }

          if (swiper.params.preloadImages) {
            swiper.preloadImages();
          } // Slide To Initial Slide


          if (swiper.params.loop) {
            swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
          } else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
          } // Attach events


          swiper.attachEvents(); // Init Flag

          swiper.initialized = true; // Emit

          swiper.emit('init');
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var swiper = this;
          var params = swiper.params,
              $el = swiper.$el,
              $wrapperEl = swiper.$wrapperEl,
              slides = swiper.slides;

          if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null;
          }

          swiper.emit('beforeDestroy'); // Init Flag

          swiper.initialized = false; // Detach events

          swiper.detachEvents(); // Destroy loop

          if (params.loop) {
            swiper.loopDestroy();
          } // Cleanup styles


          if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');

            if (slides && slides.length) {
              slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
            }
          }

          swiper.emit('destroy'); // Detach emitter events

          Object.keys(swiper.eventsListeners).forEach(function (eventName) {
            swiper.off(eventName);
          });

          if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            swiper.$el.data('swiper', null);
            Utils.deleteProps(swiper);
          }

          swiper.destroyed = true;
          return null;
        }
      }], [{
        key: "extendDefaults",
        value: function extendDefaults(newDefaults) {
          Utils.extend(extendedDefaults, newDefaults);
        }
      }, {
        key: "extendedDefaults",
        get: function get() {
          return extendedDefaults;
        }
      }, {
        key: "defaults",
        get: function get() {
          return defaults;
        }
      }, {
        key: "Class",
        get: function get() {
          return SwiperClass;
        }
      }, {
        key: "$",
        get: function get() {
          return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];
        }
      }]);

      return Swiper;
    }(SwiperClass);

    var Device$1 = {
      name: 'device',
      proto: {
        device: Device
      },
      "static": {
        device: Device
      }
    };
    var Support$1 = {
      name: 'support',
      proto: {
        support: Support
      },
      "static": {
        support: Support
      }
    };

    var Browser = function Browser() {
      function isSafari() {
        var ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent)
      };
    }();

    var Browser$1 = {
      name: 'browser',
      proto: {
        browser: Browser
      },
      "static": {
        browser: Browser
      }
    };
    var Resize = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          resize: {
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('orientationchange');
            }
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this; // Emit resize

          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          var swiper = this;
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('resize', swiper.resize.resizeHandler);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
      }
    };
    var Observer = {
      func: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebkitMutationObserver,
      attach: function attach(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var swiper = this;
        var ObserverFunc = Observer.func;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }

          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };

          if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame) {
            ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(observerUpdate);
          } else {
            ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;
        if (!Support.observer || !swiper.params.observer) return;

        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();

          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        } // Observe container


        swiper.observer.attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        swiper.observer.attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      }
    };
    var Observer$1 = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          observer: {
            init: Observer.init.bind(swiper),
            attach: Observer.attach.bind(swiper),
            destroy: Observer.destroy.bind(swiper),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.observer.init();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.observer.destroy();
        }
      }
    };
    var Virtual = {
      update: function update(force) {
        var swiper = this;
        var _swiper$params = swiper.params,
            slidesPerView = _swiper$params.slidesPerView,
            slidesPerGroup = _swiper$params.slidesPerGroup,
            centeredSlides = _swiper$params.centeredSlides;
        var _swiper$params$virtua = swiper.params.virtual,
            addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
            addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
        var _swiper$virtual = swiper.virtual,
            previousFrom = _swiper$virtual.from,
            previousTo = _swiper$virtual.to,
            slides = _swiper$virtual.slides,
            previousSlidesGrid = _swiper$virtual.slidesGrid,
            renderSlide = _swiper$virtual.renderSlide,
            previousOffset = _swiper$virtual.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;
        var offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        var slidesAfter;
        var slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
          slidesBefore = slidesPerGroup + addSlidesAfter;
        }

        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Utils.extend(swiper.virtual, {
          from: from,
          to: to,
          offset: offset,
          slidesGrid: swiper.slidesGrid
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, "".concat(offset, "px"));
          }

          swiper.updateProgress();
          return;
        }

        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset: offset,
            from: from,
            to: to,
            slides: function getSlides() {
              var slidesToRender = [];

              for (var i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });
          onRendered();
          return;
        }

        var prependIndexes = [];
        var appendIndexes = [];

        if (force) {
          swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
        } else {
          for (var i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
            }
          }
        }

        for (var _i10 = 0; _i10 < slides.length; _i10 += 1) {
          if (_i10 >= from && _i10 <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(_i10);
            } else {
              if (_i10 > previousTo) appendIndexes.push(_i10);
              if (_i10 < previousFrom) prependIndexes.push(_i10);
            }
          }
        }

        appendIndexes.forEach(function (index) {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function (a, b) {
          return b - a;
        }).forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset, "px"));
        onRendered();
      },
      renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;

        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }

        var $slideEl = params.renderSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.renderSlide.call(swiper, slide, index)) : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index, "\">").concat(slide, "</div>"));
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      },
      appendSlide: function appendSlide(slides) {
        var swiper = this;

        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }

        swiper.virtual.update(true);
      },
      prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }

        if (swiper.params.virtual.cache) {
          var cache = swiper.virtual.cache;
          var newCache = {};
          Object.keys(cache).forEach(function (cachedIndex) {
            var $cachedEl = cache[cachedIndex];
            var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }

        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
      },
      removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        var activeIndex = swiper.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }

        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];

        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }

        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
      }
    };
    var Virtual$1 = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          virtual: {
            update: Virtual.update.bind(swiper),
            appendSlide: Virtual.appendSlide.bind(swiper),
            prependSlide: Virtual.prependSlide.bind(swiper),
            removeSlide: Virtual.removeSlide.bind(swiper),
            removeAllSlides: Virtual.removeAllSlides.bind(swiper),
            renderSlide: Virtual.renderSlide.bind(swiper),
            slides: swiper.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (!swiper.params.virtual.enabled) return;
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
          var overwriteParams = {
            watchSlidesProgress: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);

          if (!swiper.params.initialSlide) {
            swiper.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (!swiper.params.virtual.enabled) return;
          swiper.virtual.update();
        }
      }
    };
    var Keyboard = {
      handle: function handle(event) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        var kc = e.keyCode || e.charCode;
        var pageUpDown = swiper.params.keyboard.pageUpDown;
        var isPageUp = pageUpDown && kc === 33;
        var isPageDown = pageUpDown && kc === 34;
        var isArrowLeft = kc === 37;
        var isArrowRight = kc === 39;
        var isArrowUp = kc === 38;
        var isArrowDown = kc === 40; // Directions locks

        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }

        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          var inView = false; // Check that swiper should be inside of visible area of window

          if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
            return undefined;
          }

          var windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
          var windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight;
          var swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

          for (var i = 0; i < swiperCoord.length; i += 1) {
            var point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              inView = true;
            }
          }

          if (!inView) return undefined;
        }

        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }

        swiper.emit('keyPress', kc);
        return undefined;
      },
      enable: function enable() {
        var swiper = this;
        if (swiper.keyboard.enabled) return;
        Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
      },
      disable: function disable() {
        var swiper = this;
        if (!swiper.keyboard.enabled) return;
        Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
      }
    };
    var Keyboard$1 = {
      name: 'keyboard',
      params: {
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          keyboard: {
            enabled: false,
            enable: Keyboard.enable.bind(swiper),
            disable: Keyboard.disable.bind(swiper),
            handle: Keyboard.handle.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.keyboard.enabled) {
            swiper.keyboard.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.keyboard.enabled) {
            swiper.keyboard.disable();
          }
        }
      }
    };

    function isEventSupported() {
      var eventName = 'onwheel';
      var isSupported = eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"];

      if (!isSupported) {
        var element = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
      }

      if (!isSupported && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('', '') !== true) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('Events.wheel', '3.0');
      }

      return isSupported;
    }

    var Mousewheel = {
      lastScrollTime: Utils.now(),
      lastEventBeforeSnap: undefined,
      recentWheelEvents: [],
      event: function event() {
        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
        return isEventSupported() ? 'wheel' : 'mousewheel';
      },
      normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY

        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        swiper.mouseEntered = true;
      },
      handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        swiper.mouseEntered = false;
      },
      handle: function handle(event) {
        var e = event;
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
        }

        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) return true;
        if (params.invert) delta = -delta;

        if (!swiper.params.freeMode) {
          // Register the new event in a variable which stores the relevant data
          var newEvent = {
            time: Utils.now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              swiper.mousewheel.animateSlider(newEvent);
            }
          } else {
            swiper.mousewheel.animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (swiper.mousewheel.releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          var _newEvent = {
            time: Utils.now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
          var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            swiper.mousewheel.lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }

            var position = swiper.getTranslate() + delta * params.sensitivity;
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeModeSticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(swiper.mousewheel.timeout);
              swiper.mousewheel.timeout = undefined;
              var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

              if (_recentWheelEvents.length >= 15) {
                _recentWheelEvents.shift(); // only store the last N events

              }

              var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

              var firstEvent = _recentWheelEvents[0];

              _recentWheelEvents.push(_newEvent);

              if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                _recentWheelEvents.splice(0);
              } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                _recentWheelEvents.splice(0);

                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!swiper.mousewheel.timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  var snapToThreshold = 0.5;
                  swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                  _recentWheelEvents.splice(0);

                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      },
      animateSlider: function animateSlider(newEvent) {
        var swiper = this; // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).

        if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        swiper.mousewheel.lastScrollTime = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Date().getTime(); // Return false as a default

        return false;
      },
      releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      },
      enable: function enable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) return false;
        if (swiper.mousewheel.enabled) return false;
        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
        }

        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
      },
      disable: function disable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) return false;
        if (!swiper.mousewheel.enabled) return false;
        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
        }

        target.off(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
      }
    };
    var Mousewheel$1 = {
      name: 'mousewheel',
      params: {
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarged: 'container'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          mousewheel: {
            enabled: false,
            enable: Mousewheel.enable.bind(swiper),
            disable: Mousewheel.disable.bind(swiper),
            handle: Mousewheel.handle.bind(swiper),
            handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
            handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
            animateSlider: Mousewheel.animateSlider.bind(swiper),
            releaseScroll: Mousewheel.releaseScroll.bind(swiper),
            lastScrollTime: Utils.now(),
            lastEventBeforeSnap: undefined,
            recentWheelEvents: []
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            swiper.mousewheel.disable();
          }

          if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.cssMode) {
            swiper.mousewheel.enable();
          }

          if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
        }
      }
    };
    var Navigation = {
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;
        if (swiper.params.loop) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            $prevEl.addClass(params.disabledClass);
          } else {
            $prevEl.removeClass(params.disabledClass);
          }

          $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            $nextEl.addClass(params.disabledClass);
          } else {
            $nextEl.removeClass(params.disabledClass);
          }

          $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        if (!(params.nextEl || params.prevEl)) return;
        var $nextEl;
        var $prevEl;

        if (params.nextEl) {
          $nextEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.nextEl);

          if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }

        if (params.prevEl) {
          $prevEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.prevEl);

          if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }

        Utils.extend(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var _swiper$navigation2 = swiper.navigation,
            $nextEl = _swiper$navigation2.$nextEl,
            $prevEl = _swiper$navigation2.$prevEl;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
    };
    var Navigation$1 = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          navigation: {
            init: Navigation.init.bind(swiper),
            update: Navigation.update.bind(swiper),
            destroy: Navigation.destroy.bind(swiper),
            onNextClick: Navigation.onNextClick.bind(swiper),
            onPrevClick: Navigation.onPrevClick.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        fromEdge: function fromEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.navigation.destroy();
        },
        click: function click(e) {
          var swiper = this;
          var _swiper$navigation3 = swiper.navigation,
              $nextEl = _swiper$navigation3.$nextEl,
              $prevEl = _swiper$navigation3.$prevEl;

          if (swiper.params.navigation.hideOnClick && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($prevEl) && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($nextEl)) {
            var isHidden;

            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }

            if (isHidden === true) {
              swiper.emit('navigationShow', swiper);
            } else {
              swiper.emit('navigationHide', swiper);
            }

            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }

            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        }
      }
    };
    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total

        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;

          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(swiper.pagination.bulletSize * (params.dynamicMainBullets + 4), "px"));

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

              if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }

            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass("".concat(params.bulletActiveClass, " ").concat(params.bulletActiveClass, "-next ").concat(params.bulletActiveClass, "-next-next ").concat(params.bulletActiveClass, "-prev ").concat(params.bulletActiveClass, "-prev-prev ").concat(params.bulletActiveClass, "-main"));

          if ($el.length > 1) {
            bullets.each(function (index, bullet) {
              var $bullet = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bullet);
              var bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
                }

                if (bulletIndex === firstIndex) {
                  $bullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
                }

                if (bulletIndex === lastIndex) {
                  $bullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);

              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var _i11 = params.dynamicMainBullets; _i11 >= 0; _i11 -= 1) {
                    bullets.eq(bullets.length - _i11).addClass("".concat(params.bulletActiveClass, "-main"));
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass("".concat(params.bulletActiveClass, "-prev"));
                } else {
                  $firstDisplayedBullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
                  $lastDisplayedBullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
                }
              } else {
                $firstDisplayedBullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
                $lastDisplayedBullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
              }
            }
          }

          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
          }
        }

        if (params.type === 'fraction') {
          $el.find(".".concat(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(".".concat(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          var progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(".".concat(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', swiper, $el[0]);
        } else {
          swiper.emit('paginationUpdate', swiper, $el[0]);
        }

        $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';

        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(".".concat(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el) return;
        var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
        if ($el.length === 0) return;

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el);
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          swiper.pagination.dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', ".".concat(params.bulletClass), function onClick(e) {
            e.preventDefault();
            var index = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }

        Utils.extend(swiper.pagination, {
          $el: $el,
          el: $el[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', ".".concat(params.bulletClass));
        }
      }
    };
    var Pagination$1 = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(number) {
            return number;
          },
          formatFractionTotal: function formatFractionTotal(number) {
            return number;
          },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-',
          // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable',
          // NEW
          lockClass: 'swiper-pagination-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          pagination: {
            init: Pagination.init.bind(swiper),
            render: Pagination.render.bind(swiper),
            update: Pagination.update.bind(swiper),
            destroy: Pagination.destroy.bind(swiper),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          var swiper = this;

          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange() {
          var swiper = this;

          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange() {
          var swiper = this;

          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange() {
          var swiper = this;

          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.pagination.destroy();
        },
        click: function click(e) {
          var swiper = this;

          if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

            if (isHidden === true) {
              swiper.emit('paginationShow', swiper);
            } else {
              swiper.emit('paginationHide', swiper);
            }

            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        }
      }
    };
    var Scrollbar = {
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate,
            progress = swiper.progress;
        var dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper.isHorizontal()) {
          $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
          $dragEl[0].style.width = "".concat(newSize, "px");
        } else {
          $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
          $dragEl[0].style.height = "".concat(newSize, "px");
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.timeout);
          $el[0].style.opacity = 1;
          swiper.scrollbar.timeout = setTimeout(function () {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      },
      updateSize: function updateSize() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;

        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = "".concat(dragSize, "px");
        } else {
          $dragEl[0].style.height = "".concat(dragSize, "px");
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        Utils.extend(scrollbar, {
          trackSize: trackSize,
          divider: divider,
          moveDivider: moveDivider,
          dragSize: dragSize
        });
        scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
      },
      getPointerPosition: function getPointerPosition(e) {
        var swiper = this;

        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el,
            dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }

        swiper.emit('scrollbarDragStart', e);
      },
      onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        if (!swiper.scrollbar.isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
      },
      onDragEnd: function onDragEnd(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        if (!swiper.scrollbar.isTouched) return;
        swiper.scrollbar.isTouched = false;

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.dragTimeout);
          swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        swiper.emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      },
      enableDraggable: function enableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (!Support.touch) {
          target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      disableDraggable: function disableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (!Support.touch) {
          target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            $swiperEl = swiper.$el;
        var params = swiper.params.scrollbar;
        var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));

        if ($dragEl.length === 0) {
          $dragEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
          $el.append($dragEl);
        }

        Utils.extend(scrollbar, {
          $el: $el,
          el: $el[0],
          $dragEl: $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          scrollbar.enableDraggable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
      }
    };
    var Scrollbar$1 = {
      name: 'scrollbar',
      params: {
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          scrollbar: {
            init: Scrollbar.init.bind(swiper),
            destroy: Scrollbar.destroy.bind(swiper),
            updateSize: Scrollbar.updateSize.bind(swiper),
            setTranslate: Scrollbar.setTranslate.bind(swiper),
            setTransition: Scrollbar.setTransition.bind(swiper),
            enableDraggable: Scrollbar.enableDraggable.bind(swiper),
            disableDraggable: Scrollbar.disableDraggable.bind(swiper),
            setDragPosition: Scrollbar.setDragPosition.bind(swiper),
            getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
            onDragStart: Scrollbar.onDragStart.bind(swiper),
            onDragMove: Scrollbar.onDragMove.bind(swiper),
            onDragEnd: Scrollbar.onDragEnd.bind(swiper),
            isTouched: false,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.scrollbar.init();
          swiper.scrollbar.updateSize();
          swiper.scrollbar.setTranslate();
        },
        update: function update() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        resize: function resize() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          swiper.scrollbar.setTransition(duration);
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.scrollbar.destroy();
        }
      }
    };
    var Parallax = {
      setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;
        var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
        var rtlFactor = rtl ? -1 : 1;
        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
        } else {
          x = "".concat(x * progress * rtlFactor, "px");
        }

        if (y.indexOf('%') >= 0) {
          y = "".concat(parseInt(y, 10) * progress, "%");
        } else {
          y = "".concat(y * progress, "px");
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
        } else {
          var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides,
            progress = swiper.progress,
            snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
        slides.each(function (slideIndex, slideEl) {
          var slideProgress = slideEl.progress;

          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
        });
      },
      setTransition: function setTransition() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, parallaxEl) {
          var $parallaxEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      }
    };
    var Parallax$1 = {
      name: 'parallax',
      params: {
        parallax: {
          enabled: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          parallax: {
            setTransform: Parallax.setTransform.bind(swiper),
            setTranslate: Parallax.setTranslate.bind(swiper),
            setTransition: Parallax.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) return;
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTransition(duration);
        }
      }
    };
    var Zoom = {
      // Calc Scale From Multi-touches
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
      },
      // Events
      onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;

        if (!Support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureTouched = true;
          gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(".".concat(swiper.params.slideClass));
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }

        swiper.zoom.isScaling = true;
      },
      onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!Support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureMoved = true;
          gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (Support.gestures) {
          zoom.scale = e.scale * zoom.currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
        }

        gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
      },
      onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!Support.gestures) {
          if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
            return;
          }

          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      },
      onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (Device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      },
      onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);

          if (swiper.rtl) {
            image.startX = -image.startX;
            image.startY = -image.startY;
          }
        } // Define if we need image drag


        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !zoom.isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        if (e.cancelable) {
          e.preventDefault();
        }

        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
        } // Velocity


        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
      },
      onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
      },
      onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }

          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          zoom.currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      },
      // Toggle Zoom
      toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoom.out();
        } else {
          // Zoom In
          zoom["in"](e);
        }
      },
      "in": function _in(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left;
          offsetY = gesture.$slideEl.offset().top;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
      },
      out: function out() {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
        gesture.$slideEl = undefined;
      },
      // Attach/Detach Events
      enable: function enable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = Support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = ".".concat(swiper.params.slideClass); // Scale image

        if (Support.gestures) {
          swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove, activeListenerWithCapture);
      },
      disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled) return;
        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = Support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = ".".concat(swiper.params.slideClass); // Scale image

        if (Support.gestures) {
          swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove, activeListenerWithCapture);
      }
    };
    var Zoom$1 = {
      name: 'zoom',
      params: {
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      },
      create: function create() {
        var swiper = this;
        var zoom = {
          enabled: false,
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          }
        };
        'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
        Utils.extend(swiper, {
          zoom: zoom
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
          get: function get() {
            return scale;
          },
          set: function set(value) {
            if (scale !== value) {
              var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
              var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
              swiper.emit('zoomChange', value, imageEl, slideEl);
            }

            scale = value;
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.zoom.enabled) {
            swiper.zoom.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.zoom.disable();
        },
        touchStart: function touchStart(e) {
          var swiper = this;
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          var swiper = this;
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          var swiper = this;

          if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            swiper.zoom.toggle(e);
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            swiper.zoom.onTransitionEnd();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            swiper.zoom.onTransitionEnd();
          }
        }
      }
    };
    var Lazy = {
      loadInSlide: function loadInSlide(index) {
        var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var swiper = this;
        var params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")) : swiper.slides.eq(index);
        var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images = $images.add($slideEl[0]);
        }

        if ($images.length === 0) return;
        $images.each(function (imageIndex, imageEl) {
          var $imageEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl);
          $imageEl.addClass(params.loadingClass);
          var background = $imageEl.attr('data-background');
          var src = $imageEl.attr('data-src');
          var srcset = $imageEl.attr('data-srcset');
          var sizes = $imageEl.attr('data-sizes');
          var $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

            if (background) {
              $imageEl.css('background-image', "url(\"".concat(background, "\")"));
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if ($pictureEl.length) {
                $pictureEl.children('source').each(function (sourceIndex, sourceEl) {
                  var $source = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(".".concat(params.preloaderClass)).remove();

            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }

            swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      },
      load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            swiperParams = swiper.params,
            slides = swiper.slides,
            activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;
        var slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")).length) {
              return true;
            }
          } else if (slides[index]) return true;

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index');
          }

          return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
        }

        if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

        if (swiper.params.watchSlidesVisibility) {
          $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (elIndex, slideEl) {
            var index = isVirtual ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index') : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) swiper.lazy.loadInSlide(i);
          }
        } else {
          swiper.lazy.loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            var amount = params.loadPrevNextAmount;
            var spv = slidesPerView;
            var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (var _i12 = activeIndex + slidesPerView; _i12 < maxIndex; _i12 += 1) {
              if (slideExist(_i12)) swiper.lazy.loadInSlide(_i12);
            } // Prev Slides


            for (var _i13 = minIndex; _i13 < activeIndex; _i13 += 1) {
              if (slideExist(_i13)) swiper.lazy.loadInSlide(_i13);
            }
          } else {
            var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
            if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
            var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
            if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    };
    var Lazy$1 = {
      name: 'lazy',
      params: {
        lazy: {
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          lazy: {
            initialImageLoaded: false,
            load: Lazy.load.bind(swiper),
            loadInSlide: Lazy.loadInSlide.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
            swiper.params.preloadImages = false;
          }
        },
        init: function init() {
          var swiper = this;

          if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
            swiper.lazy.load();
          }
        },
        scroll: function scroll() {
          var swiper = this;

          if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
            swiper.lazy.load();
          }
        },
        resize: function resize() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        scrollbarDragMove: function scrollbarDragMove() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        transitionStart: function transitionStart() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
              swiper.lazy.load();
            }
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            swiper.lazy.load();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.params.lazy.enabled && swiper.params.cssMode) {
            swiper.lazy.load();
          }
        }
      }
    };
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

    var Controller = {
      LinearSpline: function LinearSpline(x, y) {
        var binarySearch = function search() {
          var maxIndex;
          var minIndex;
          var guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        var i1;
        var i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      },
      // xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;

        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      },
      setTranslate: function setTranslate(_setTranslate, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

          if (swiper.params.controller.by === 'slide') {
            swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              Utils.nextTick(function () {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(function () {
              if (!controlled) return;

              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    var Controller$1 = {
      name: 'controller',
      params: {
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          controller: {
            control: swiper.params.controller.control,
            getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
            setTranslate: Controller.setTranslate.bind(swiper),
            setTransition: Controller.setTransition.bind(swiper)
          }
        });
      },
      on: {
        update: function update() {
          var swiper = this;
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        resize: function resize() {
          var swiper = this;
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        setTranslate: function setTranslate(translate, byController) {
          var swiper = this;
          if (!swiper.controller.control) return;
          swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(duration, byController) {
          var swiper = this;
          if (!swiper.controller.control) return;
          swiper.controller.setTransition(duration, byController);
        }
      }
    };
    var a11y = {
      makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      makeElNotFocusable: function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
        return $el;
      },
      addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function onEnterKey(e) {
        var swiper = this;
        var params = swiper.params.a11y;
        if (e.keyCode !== 13) return;
        var $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);

        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }

          if (swiper.isEnd) {
            swiper.a11y.notify(params.lastSlideMessage);
          } else {
            swiper.a11y.notify(params.nextSlideMessage);
          }
        }

        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }

          if (swiper.isBeginning) {
            swiper.a11y.notify(params.firstSlideMessage);
          } else {
            swiper.a11y.notify(params.prevSlideMessage);
          }
        }

        if (swiper.pagination && $targetEl.is(".".concat(swiper.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      },
      notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      },
      updateNavigation: function updateNavigation() {
        var swiper = this;
        if (swiper.params.loop || !swiper.navigation) return;
        var _swiper$navigation4 = swiper.navigation,
            $nextEl = _swiper$navigation4.$nextEl,
            $prevEl = _swiper$navigation4.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            swiper.a11y.disableEl($prevEl);
            swiper.a11y.makeElNotFocusable($prevEl);
          } else {
            swiper.a11y.enableEl($prevEl);
            swiper.a11y.makeElFocusable($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            swiper.a11y.disableEl($nextEl);
            swiper.a11y.makeElNotFocusable($nextEl);
          } else {
            swiper.a11y.enableEl($nextEl);
            swiper.a11y.makeElFocusable($nextEl);
          }
        }
      },
      updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;

        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
            var $bulletEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);
            swiper.a11y.addElRole($bulletEl, 'button');
            swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
          });
        }
      },
      init: function init() {
        var swiper = this;
        swiper.$el.append(swiper.a11y.liveRegion); // Navigation

        var params = swiper.params.a11y;
        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          swiper.a11y.makeElFocusable($nextEl);
          swiper.a11y.addElRole($nextEl, 'button');
          swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
          $nextEl.on('keydown', swiper.a11y.onEnterKey);
        }

        if ($prevEl) {
          swiper.a11y.makeElFocusable($prevEl);
          swiper.a11y.addElRole($prevEl, 'button');
          swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
          $prevEl.on('keydown', swiper.a11y.onEnterKey);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.on('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', swiper.a11y.onEnterKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', swiper.a11y.onEnterKey);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.off('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
        }
      }
    };
    var A11y = {
      name: 'a11y',
      params: {
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          a11y: {
            liveRegion: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
          }
        });
        Object.keys(a11y).forEach(function (methodName) {
          swiper.a11y[methodName] = a11y[methodName].bind(swiper);
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.init();
          swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updatePagination();
        },
        destroy: function destroy() {
          var swiper = this;
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.destroy();
        }
      }
    };
    var History = {
      init: function init() {
        var swiper = this;
        if (!swiper.params.history) return;

        if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }

        var history = swiper.history;
        history.initialized = true;
        history.paths = History.getPathValues();
        if (!history.paths.key && !history.paths.value) return;
        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

        if (!swiper.params.history.replaceState) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (!swiper.params.history.replaceState) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History.getPathValues();
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
      },
      getPathValues: function getPathValues() {
        var pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.slice(1).split('/').filter(function (part) {
          return part !== '';
        });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return {
          key: key,
          value: value
        };
      },
      setHistory: function setHistory(key, index) {
        var swiper = this;
        if (!swiper.history.initialized || !swiper.params.history.enabled) return;
        var slide = swiper.slides.eq(index);
        var value = History.slugify(slide.attr('data-history'));

        if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.includes(key)) {
          value = "".concat(key, "/").concat(value);
        }

        var currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper.params.history.replaceState) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState({
            value: value
          }, null, value);
        } else {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState({
            value: value
          }, null, value);
        }
      },
      slugify: function slugify(text) {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      },
      scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;

        if (value) {
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var _slide3 = swiper.slides.eq(i);

            var slideHistory = History.slugify(_slide3.attr('data-history'));

            if (slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)) {
              var index = _slide3.index();

              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      }
    };
    var History$1 = {
      name: 'history',
      params: {
        history: {
          enabled: false,
          replaceState: false,
          key: 'slides'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          history: {
            init: History.init.bind(swiper),
            setHistory: History.setHistory.bind(swiper),
            setHistoryPopState: History.setHistoryPopState.bind(swiper),
            scrollToSlide: History.scrollToSlide.bind(swiper),
            destroy: History.destroy.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.history.enabled) {
            swiper.history.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.history.enabled) {
            swiper.history.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.history.initialized) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.history.initialized && swiper.params.cssMode) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        }
      }
    };
    var HashNavigation = {
      onHashCange: function onHashCange() {
        var swiper = this;
        swiper.emit('hashChange');
        var newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      },
      setHash: function setHash() {
        var swiper = this;
        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

        if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || '');
          swiper.emit('hashSet');
        } else {
          var _slide4 = swiper.slides.eq(swiper.activeIndex);

          var hash = _slide4.attr('data-hash') || _slide4.attr('data-history');

          ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash = hash || '';
          swiper.emit('hashSet');
        }
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        swiper.hashNavigation.initialized = true;
        var hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');

        if (hash) {
          var speed = 0;

          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var _slide5 = swiper.slides.eq(i);

            var slideHash = _slide5.attr('data-hash') || _slide5.attr('data-history');

            if (slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)) {
              var index = _slide5.index();

              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper.params.hashNavigation.watchState) {
          Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).on('hashchange', swiper.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.params.hashNavigation.watchState) {
          Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).off('hashchange', swiper.hashNavigation.onHashCange);
        }
      }
    };
    var HashNavigation$1 = {
      name: 'hash-navigation',
      params: {
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          hashNavigation: {
            initialized: false,
            init: HashNavigation.init.bind(swiper),
            destroy: HashNavigation.destroy.bind(swiper),
            setHash: HashNavigation.setHash.bind(swiper),
            onHashCange: HashNavigation.onHashCange.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
            swiper.hashNavigation.setHash();
          }
        }
      }
    };
    /* eslint no-underscore-dangle: "off" */

    var Autoplay = {
      run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }

        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = Utils.nextTick(function () {
          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isBeginning) {
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isEnd) {
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }

          if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
        }, delay);
      },
      start: function start() {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
      },
      stop: function stop() {
        var swiper = this;
        if (!swiper.autoplay.running) return false;
        if (typeof swiper.autoplay.timeout === 'undefined') return false;

        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = undefined;
        }

        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
      },
      pause: function pause(speed) {
        var swiper = this;
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.paused = true;

        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          swiper.autoplay.run();
        } else {
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        }
      }
    };
    var Autoplay$1 = {
      name: 'autoplay',
      params: {
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          autoplay: {
            running: false,
            paused: false,
            run: Autoplay.run.bind(swiper),
            start: Autoplay.start.bind(swiper),
            stop: Autoplay.stop.bind(swiper),
            pause: Autoplay.pause.bind(swiper),
            onVisibilityChange: function onVisibilityChange() {
              if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
              }

              if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
              }
            },
            onTransitionEnd: function onTransitionEnd(e) {
              if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
              swiper.autoplay.paused = false;

              if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
              } else {
                swiper.autoplay.run();
              }
            }
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.autoplay.enabled) {
            swiper.autoplay.start();
            document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
          }
        },
        beforeTransitionStart: function beforeTransitionStart(speed, internal) {
          var swiper = this;

          if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.pause(speed);
            } else {
              swiper.autoplay.stop();
            }
          }
        },
        sliderFirstMove: function sliderFirstMove() {
          var swiper = this;

          if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.pause();
            }
          }
        },
        touchEnd: function touchEnd() {
          var swiper = this;

          if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.run();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }

          document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      }
    };
    var Fade = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = swiper.slides.eq(i);
          var offset = $slideEl[0].swiperSlideOffset;
          var tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          var ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl.css({
            opacity: slideOpacity
          }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides,
            $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration);

        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false;
          slides.transitionEnd(function () {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFade = {
      name: 'effect-fade',
      params: {
        fadeEffect: {
          crossFade: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          fadeEffect: {
            setTranslate: Fade.setTranslate.bind(swiper),
            setTransition: Fade.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'fade') return;
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTransition(duration);
        }
      }
    };
    var Cube = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides,
            swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            rtl = swiper.rtlTranslate,
            swiperSize = swiper.size;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: "".concat(swiperWidth, "px")
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          var slideAngle = slideIndex * 90;
          var round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          var tx = 0;
          var ty = 0;
          var tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          var transform = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            // Set shadows
            var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
          '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
          '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
          'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
          } else {
            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            var scale1 = params.shadowScale;
            var scale2 = params.shadowScale / multiplier;
            var offset = params.shadowOffset;
            $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
          }
        }

        var zFactor = Browser.isSafari || Browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      }
    };
    var EffectCube = {
      name: 'effect-cube',
      params: {
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          cubeEffect: {
            setTranslate: Cube.setTranslate.bind(swiper),
            setTransition: Cube.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'cube') return;
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTransition(duration);
        }
      }
    };
    var Flip = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          var offset = $slideEl[0].swiperSlideOffset;
          var rotate = -180 * progress;
          var rotateY = rotate;
          var rotateX = 0;
          var tx = -offset;
          var ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }

          $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides,
            activeIndex = swiper.activeIndex,
            $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false; // eslint-disable-next-line

          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFlip = {
      name: 'effect-flip',
      params: {
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          flipEffect: {
            setTranslate: Flip.setTranslate.bind(swiper),
            setTransition: Flip.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'flip') return;
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTransition(duration);
        }
      }
    };
    var Coverflow = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            slides = swiper.slides,
            $wrapperEl = swiper.$wrapperEl,
            slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth; // Each slide offset from center

        for (var i = 0, length = slides.length; i < length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideSize = slidesSizesGrid[i];
          var slideOffset = $slideEl[0].swiperSlideOffset;
          var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          var translateZ = -translate * Math.abs(offsetMultiplier);
          var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(").concat(scale, ")");
          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
              $slideEl.append($shadowBeforeEl);
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
              $slideEl.append($shadowAfterEl);
            }

            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        } // Set correct perspective for IE10


        if (Support.pointerEvents || Support.prefixedPointerEvents) {
          var ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = "".concat(center, "px 50%");
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      }
    };
    var EffectCoverflow = {
      name: 'effect-coverflow',
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          coverflowEffect: {
            setTranslate: Coverflow.setTranslate.bind(swiper),
            setTransition: Coverflow.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') return;
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
          swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTransition(duration);
        }
      }
    };
    var Thumbs = {
      init: function init() {
        var swiper = this;
        var thumbsParams = swiper.params.thumbs;
        var SwiperClass = swiper.constructor;

        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Utils.extend(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Utils.extend(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (Utils.isObject(thumbsParams.swiper)) {
          swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false
          }));
          swiper.thumbs.swiperCreated = true;
        }

        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        var slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper.params.loop) {
          var currentIndex = swiper.activeIndex;

          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }

          var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
          var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }

        swiper.slideTo(slideToIndex);
      },
      update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          var currentThumbsIndex = thumbsSwiper.activeIndex;
          var newThumbsIndex;
          var direction;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
            var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
            if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }

          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - slidesPerView + 1;
            }

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs


        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (var i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
          }
        } else {
          for (var _i14 = 0; _i14 < thumbsToActivate; _i14 += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + _i14).addClass(thumbActiveClass);
          }
        }
      }
    };
    var Thumbs$1 = {
      name: 'thumbs',
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-container-thumbs'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          thumbs: {
            swiper: null,
            init: Thumbs.init.bind(swiper),
            update: Thumbs.update.bind(swiper),
            onThumbClick: Thumbs.onThumbClick.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          var thumbs = swiper.params.thumbs;
          if (!thumbs || !thumbs.swiper) return;
          swiper.thumbs.init();
          swiper.thumbs.update(true);
        },
        slideChange: function slideChange() {
          var swiper = this;
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        update: function update() {
          var swiper = this;
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        resize: function resize() {
          var swiper = this;
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;
          thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy() {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;

          if (swiper.thumbs.swiperCreated && thumbsSwiper) {
            thumbsSwiper.destroy();
          }
        }
      }
    }; // Swiper Class

    var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

    if (typeof Swiper.use === 'undefined') {
      Swiper.use = Swiper.Class.use;
      Swiper.installModule = Swiper.Class.installModule;
    }

    Swiper.use(components);
    /* harmony default export */

    __webpack_exports__["default"] = Swiper; //# sourceMappingURL=swiper.esm.bundle.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~components-home-home-module~components-top-offers-top-offers-module~components-top-picked-to~8f7897ef-es5.js.map