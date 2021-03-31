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

const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/ecma-intrinsics');

const ruleTester = new RuleTester();
ruleTester.run('ecma-intrinsics', rule, {
  valid: [
    'Array.prototype',
    'window.Array.prototype.slice()',
    'top.nonIntrinsics.should.be.ignored()',
    'Array.prototype.slice()',
    'Array.prototype.slice.call()',
    'Array.prototype.slice.apply()',
    'Array.isArray()',
  ],
  invalid: [
    {
      code: 'Array.prototype.foo();',
      errors: [{ message: 'Invalid Intrinsic API', type: 'MemberExpression' }],
    },
    {
      code: 'window.Array.prototype.foo();',
      errors: [{ message: 'Invalid Intrinsic API', type: 'MemberExpression' }],
    },
    {
      code: "Array['prototype'].slice();",
      errors: [
        {
          message: 'Invalid Intrinsic API, use dot notation instead',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: "Array.prototype['slice']();",
      errors: [
        {
          message: 'Invalid Intrinsic API, use dot notation instead',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: 'Array.prototype.slice.something();',
      errors: [{ message: 'Invalid Intrinsic API', type: 'MemberExpression' }],
    },
    {
      code: 'Array.isNotArray();',
      errors: [{ message: 'Invalid Intrinsic API', type: 'MemberExpression' }],
    },
  ],
});
