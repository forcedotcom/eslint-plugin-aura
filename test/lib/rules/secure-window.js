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

'use strict';

const rule = require('../../../lib/rules/secure-window');
const { getNewTester } = require('./shared');

const ruleTester = getNewTester();
ruleTester.run('secure-window', rule, {
  valid: [
    'document.something',
    'window.document.something',
    'window.Array.something',
    'window.window.location',
    '$A.something',
    'window.addEventListener()',
    'window.setTimeout()',
    'function a(foo) { foo.setImmediate(foo); }',
    'function setImmediate() {} setImmediate();',
    'var setImmediate = function() {}; setImmediate();',
    'function foo() { var setImmediate = bar; setImmediate(); }',
    'function foo(setImmediate) { setImmediate(); }',
    'var setImmediate = function() {}; function test() { setImmediate(); }',
    'function foo() { this.setImmediate(); }',
    'function foo() { var window = bar; window.setImmediate(); }',
    'var o = { foo: function() { this.setImmediate(); } }',
    'eval()',
    'new Function()',
  ],
  invalid: [
    {
      code: 'window[setImmediate]();',
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                setImmediate(foo);
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: `
                window.setImmediate(foo);
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                function setImmediate() {}
                window.setImmediate(foo);
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                var setImmediate = function() {};
                window.setImmediate(foo);
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                function foo(setImmediate) { window.setImmediate(); }
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                function foo() { setImmediate(); }
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: `
                function foo() { var setImmediate = function() {}; }\nsetImmediate();
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: `
                this.setImmediate(foo)
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: `
                function foo() { var window = bar; window.setImmediate(); }\nwindow.setImmediate();
            `,
      errors: [
        {
          message: 'Invalid SecureWindow API, setImmediate is not allowed',
          type: 'MemberExpression',
        },
      ],
    },
  ],
});
