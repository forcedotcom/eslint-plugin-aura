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


var _auraComponentConfig = __webpack_require__(1);

var _auraComponentConfig2 = _interopRequireDefault(_auraComponentConfig);

var _codeStyleRules = __webpack_require__(3);

var _codeStyleRules2 = _interopRequireDefault(_codeStyleRules);

var _auraApi = __webpack_require__(4);

var _auraApi2 = _interopRequireDefault(_auraApi);

var _secureWindow = __webpack_require__(5);

var _secureWindow2 = _interopRequireDefault(_secureWindow);

var _secureDocument = __webpack_require__(6);

var _secureDocument2 = _interopRequireDefault(_secureDocument);

var _ecmaIntrinsics = __webpack_require__(7);

var _ecmaIntrinsics2 = _interopRequireDefault(_ecmaIntrinsics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Marat Vyshegorodtsev
 * @license BSD-3-Clause
 * For full license text, see LICENSE file in the repo root
 * or https://opensource.org/licenses/BSD-3-Clause
 */

delete _auraApi2.default.schema;
delete _secureWindow2.default.schema;
delete _secureDocument2.default.schema;
delete _ecmaIntrinsics2.default.schema;

var rules = {
  'aura-api': { create: _auraApi2.default },
  'secure-window': { create: _secureWindow2.default },
  'secure-document': { create: _secureDocument2.default },
  'ecma-intrinsics': { create: _ecmaIntrinsics2.default }
};

var rulesConfig = Object.assign({}, _auraComponentConfig2.default.rules, _codeStyleRules2.default.rules);
delete rulesConfig['new-rule-template'];

['ecma-intrinsics', 'secure-document', 'aura-api', 'secure-window'].forEach(function (r) {
  delete rulesConfig[r];
  rulesConfig['@salesforce/aura/' + r] = 2;
});

module.exports = {
  configs: {
    recommended: {
      env: _auraComponentConfig2.default.env,
      parserOptions: _auraComponentConfig2.default.parserOptions,
      globals: _auraComponentConfig2.default.globals,
      rules: rulesConfig
    }
  },
  rules: rules
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2016 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



// to guarantee that all custom rules are loaded before creating the config
__webpack_require__(2);

var ERROR = 2;
var WARNING = 1;
var IGNORE = 0;

// eslint config
module.exports = {
    version: false,
    eslintrc: false,
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: 5
    },
    globals: {
        "$A": true,
        "AuraContext": true,
        "AuraSerializationService": true,
        "AuraExpressionService": true,
        "AuraEventService": true,
        "AuraLocalizationService": true,
        "AuraStorageService": true,
        "AuraStyleService": true,
        "MetricsService": true,
        "AuraDevToolService": true,
        "Component": true,
        "CKEDITOR": true,
        "FORCE": true,
        "moment": true,
        "exports": true,
        "iScroll": true,
        "unescape": true,
        "Promise": true
    },
    rules: {
        // custom rules
        "ecma-intrinsics": ERROR,
        "new-rule-template": IGNORE,
        "secure-document": ERROR,
        "aura-api": ERROR,
        "secure-window": ERROR,

        // platform rules that as immutable
        "no-alert": ERROR,
        "no-array-constructor": ERROR, // help with instanceof
        "no-bitwise": WARNING, // usually a typo | -> ||
        "no-caller": ERROR, // strict mode compliance
        "no-catch-shadow": ERROR,
        "no-cond-assign": ERROR,
        "no-console": ERROR,
        "no-constant-condition": ERROR,
        "no-control-regex": WARNING,
        "no-debugger": ERROR,
        "no-delete-var": WARNING, // for perf reasons, we might want to set this to 2
        "no-div-regex": WARNING,
        "no-dupe-keys": ERROR,
        "no-dupe-args": ERROR,
        "no-duplicate-case": ERROR,
        "no-else-return": IGNORE,
        "no-empty-character-class": ERROR,
        "no-eq-null": WARNING,
        "no-eval": ERROR,
        "no-ex-assign": ERROR,
        "no-extend-native": ERROR,
        "no-extra-bind": ERROR,
        "no-extra-boolean-cast": ERROR,
        "no-fallthrough": ERROR, // switch fallthrough
        "no-floating-decimal": WARNING, // var num = .5;
        "no-func-assign": ERROR,
        "no-implied-eval": ERROR,
        "no-inner-declarations": [ERROR, "functions"],
        "no-invalid-regexp": ERROR,
        "no-irregular-whitespace": ERROR,
        "no-iterator": ERROR,
        "no-label-var": ERROR,
        "no-labels": ERROR,
        "no-loop-func": ERROR,
        "no-multi-str": ERROR,
        "no-native-reassign": ERROR,
        "no-negated-in-lhs": ERROR,
        "no-nested-ternary": WARNING,
        "no-new": ERROR,
        "no-new-func": ERROR,
        "no-new-object": ERROR,
        "no-new-wrappers": ERROR,
        "no-obj-calls": ERROR,
        "no-octal": ERROR,
        "no-octal-escape": ERROR,
        "no-param-reassign": WARNING,
        "no-plusplus": WARNING,
        "no-proto": ERROR,
        "no-redeclare": ERROR,
        "no-regex-spaces": ERROR,
        "no-return-assign": ERROR,
        "no-script-url": ERROR,
        "no-self-compare": ERROR,
        "no-sequences": ERROR, // var a = (3, 5);
        "no-shadow": ERROR,
        "no-shadow-restricted-names": ERROR,
        "no-sparse-arrays": ERROR,
        "no-ternary": IGNORE,
        "no-throw-literal": WARNING,
        "no-undef": WARNING,
        "no-undef-init": WARNING,
        "no-undefined": IGNORE,
        "no-underscore-dangle": IGNORE,
        "no-unreachable": ERROR,
        "no-unused-expressions": WARNING,
        "no-unused-vars": [WARNING, {"vars": "all", "args": "after-used"}],
        "no-use-before-define": [ERROR, { "functions": false }],
        "no-void": ERROR,
        "no-var": IGNORE,
        "no-with": ERROR,
        "consistent-return": WARNING,
        "default-case": ERROR,
        "dot-notation": [WARNING, { "allowKeywords": true }],
        "eqeqeq": ["error", "smart"],
        "guard-for-in": WARNING,
        "handle-callback-err": WARNING,
        "new-parens": ERROR,
        "radix": ERROR,
        "strict": [ERROR, "global"],
        "use-isnan": ERROR,
        "valid-typeof": ERROR,
        "wrap-iife": [WARNING, "any"]

        // aside from this list, ./code-style-rules.js will have the rules that are not
        // important for the code to function, but just stylish.
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 * Copyright (C) 2016 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 module.exports = {
    rules: {
        // code style rules, these are the default value, but the user can
        // customize them via --config in the linter by providing custom values
        // for each of these rules.
        "no-trailing-spaces": 1,
        "no-spaced-func": 1,
        "no-mixed-spaces-and-tabs": 0,
        "no-multi-spaces": 0,
        "no-multiple-empty-lines": 0,
        "no-lone-blocks": 1,
        "no-lonely-if": 1,
        "no-inline-comments": 0,
        "no-extra-parens": 0,
        "no-extra-semi": 1,
        "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
        "block-scoped-var": 1,
        "brace-style": [1, "1tbs"],
        "camelcase": 1,
        "comma-dangle": [1, "never"],
        "comma-spacing": 1,
        "comma-style": 1,
        "complexity": [0, 11],
        "consistent-this": [0, "that"],
        "curly": [1, "all"],
        "eol-last": 0,
        "func-names": 0,
        "func-style": [0, "declaration"],
        "generator-star-spacing": 0,
        "indent": 0,
        "key-spacing": 0,
        "keyword-spacing": [0],
        "max-depth": [0, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [0, 2],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 0,
        "newline-after-var": 0,
        "one-var": [0, "never"],
        "operator-assignment": [0, "always"],
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": 0,
        "semi": 1,
        "semi-spacing": [0, {"before": false, "after": true}],
        "sort-vars": 0,
        "space-after-function-name": [0, "never"],
        "space-before-blocks": [0, "always"],
        "space-before-function-paren": [0, "always"],
        "space-before-function-parentheses": [0, "always"],
        "space-in-brackets": [0, "never"],
        "space-in-parens": [0, "never"],
        "space-infix-ops": 0,
        "space-unary-ops": [1, { "words": true, "nonwords": false }],
        "spaced-comment": [0, "always"],
        "vars-on-top": 0,
        "valid-jsdoc": 0,
        "wrap-regex": 0,
        "yoda": [1, "never"]
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/aura-api");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/secure-window");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/secure-document");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("salesforce-lightning-cli/rules/ecma-intrinsics");

/***/ })
/******/ ]);