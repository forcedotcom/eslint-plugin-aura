module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var auraComponentConfig = __webpack_require__(1);
var codeStyleRulesConfig = __webpack_require__(2);

var _map = [__webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)].map(function (r) {
  return { create: r };
}),
    _map2 = _slicedToArray(_map, 4),
    auraApiRule = _map2[0],
    secureWindowRule = _map2[1],
    secureDocumentRule = _map2[2],
    ecmaIntrinsicsRule = _map2[3];

var rules = {
  'aura-api': auraApiRule,
  'secure-window': secureWindowRule,
  'secure-document': secureDocumentRule,
  'ecma-intrinsics': ecmaIntrinsicsRule
};

module.exports = {
  configs: {
    recommended: {
      env: auraComponentConfig.env,
      parserOptions: auraComponentConfig.parserOptions,
      globals: auraComponentConfig.globals,
      rules: Object.assign({}, auraComponentConfig.rules, codeStyleRulesConfig)

    }
  },
  rules: rules
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/lib/aura-component-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/lib/code-style-rules");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/aura-api");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/secure-window");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/secure-document");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/ecma-intrinsics");

/***/ })
/******/ ]);