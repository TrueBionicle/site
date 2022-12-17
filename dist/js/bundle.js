/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals.js */ "./src/js/modals.js");
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modals_js__WEBPACK_IMPORTED_MODULE_2__);
 // import '../scss/style.scss'




var readMore = document.querySelectorAll('.read-more');

function showContent() {
  readMore.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var target = e.target;
      target.previousElementSibling.classList.toggle("content--state--height");
      target.classList.toggle("read-more--state-transform");

      if (target.textContent == "Скрыть") {
        target.classList.contains("read-more--text--true") ? target.textContent = "Читать далее" : target.textContent = "Показать всё";
      } else {
        target.textContent = "Скрыть";
      }
    });
  });
}

showContent();

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var body = document.querySelector("body");
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu-wrapper");
var burgerClose = document.querySelector('.close');
var menuBtn = document.querySelectorAll(".menu-main__button");
var scrollbarBtn = document.querySelectorAll('.scrollbar__item');
menuBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    menuBtn.forEach(function (item) {
      item.classList.remove('menu-main__button--selected');
    });
    e.currentTarget.classList.add("menu-main__button--selected");
  });
});
scrollbarBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    scrollbarBtn.forEach(function (btn) {
      btn.classList.remove('scrollbar__item--active');
    });
    e.target.classList.add("scrollbar__item--active");
  });
});
window.addEventListener('click', function (e) {
  if (e.target.classList.contains("menu-wrapper")) {
    menu.classList.remove('menu-wrapper--selected');
    body.classList.remove("body--overflow--hidden");
  }
});
burger.addEventListener('click', function (e) {
  menu.classList.add('menu-wrapper--selected');
  body.classList.add("body--overflow--hidden");
});
burgerClose.addEventListener('click', function () {
  menu.classList.remove('menu-wrapper--selected');
  body.classList.remove("body--overflow--hidden");
});

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = document.querySelectorAll(".social__call");
var callBack = document.querySelectorAll(".social__chat");
var modal = document.querySelector(".modal");
var modalFeedBack = document.querySelector(".modal--feedback");
var modalCallBack = document.querySelector(".modal--callback");
var closeSelector = document.querySelectorAll('.close');

function showModal(target, modal, close, className) {
  target.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.classList.add(className);
    });
  });
  close.forEach(function (item) {
    item.addEventListener('click', function (e) {
      modal.classList.remove('modal--show');
    });
  });
}

showModal(call, modalCallBack, closeSelector, 'modal--show');
showModal(callBack, modalFeedBack, closeSelector, 'modal--show');

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map