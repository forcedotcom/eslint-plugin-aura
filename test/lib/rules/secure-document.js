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

const rule = require('../../../lib/rules/secure-document');

const { getNewTester } = require('./shared');

const ruleTester = getNewTester();
ruleTester.run('secure-document', rule, {
  valid: [
    'document.body',
    'window.document',
    'window.document.nodeType',
    'top.document.should.be.ignored()',
    'document.getElementById()',
    'document.addEventListener()',
    'document.head.anything.inside.theHeadElement',
  ],
  invalid: [
    {
      code: 'document.prototype.something',
      errors: [
        { message: 'Invalid SecureDocument API', type: 'MemberExpression' },
      ],
    },
    {
      code: 'window.document.something;',
      errors: [
        { message: 'Invalid SecureDocument API', type: 'MemberExpression' },
      ],
    },
    {
      code: "document['head']",
      errors: [
        {
          message: 'Invalid SecureDocument API, use dot notation instead',
          type: 'MemberExpression',
        },
      ],
    },
    {
      code: 'document.getElementById.prototype',
      errors: [
        { message: 'Invalid SecureDocument API', type: 'MemberExpression' },
      ],
    },
    {
      code: 'document.something();',
      errors: [
        { message: 'Invalid SecureDocument API', type: 'MemberExpression' },
      ],
    },
  ],
});
