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

const util = require('../util.js');

const globalBlocklist = {
  setImmediate: true,
  MutationEvent: true,
  ServiceWorker: true,
  ServiceWorkerContainer: true,
  ServiceWorkerMessageEvent: true,
  ServiceWorkerRegistration: true,
  ShadowRoot: true,
  SharedWorker: true,
  WebKitMutationObserver: true,
  clientInformation: true,
  eval: false,
  onwebkitanimationend: true,
  onwebkitanimationiteration: true,
  onwebkitanimationstart: true,
  onwebkittransitionend: true,
  opener: true,
  top: true,
  webkitAudioContext: true,
  webkitCancelAnimationFrame: true,
  webkitCancelRequestAnimationFrame: true,
  webkitIDBCursor: true,
  webkitIDBDatabase: true,
  webkitIDBFactory: true,
  webkitIDBIndex: true,
  webkitIDBKeyRange: true,
  webkitIDBObjectStore: true,
  webkitIDBRequest: true,
  webkitIDBTransaction: true,
  webkitIndexedDB: true,
  webkitMediaStream: true,
  webkitOfflineAudioContext: true,
  webkitRTCPeerConnection: true,
  webkitRequestAnimationFrame: true,
  webkitRequestFileSystem: true,
  webkitResolveLocalFileSystemURL: true,
  webkitSpeechGrammar: true,
  webkitSpeechGrammarList: true,
  webkitSpeechRecognition: true,
  webkitSpeechRecognitionError: true,
  webkitSpeechRecognitionEvent: true,
  webkitStorageInfo: true,
  webkitURL: true,
};

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'validate secure window public APIs',
      url: util.docUrl('secure-window'),
    },
    schema: [],
  },

  create(context) {
    let globalScope;

    return {
      Program: function (node) {
        globalScope = util.getScope(context, node);
      },

      CallExpression: function (node) {
        const callee = node.callee,
          currentScope = util.getScope(context, node);

        if (callee.type === 'Identifier') {
          if (!util.isShadowed(currentScope, globalScope, callee)) {
            if (globalBlocklist[callee.name]) {
              context.report(
                node,
                'Invalid SecureWindow API, ' + callee.name + ' is not allowed'
              );
            }
          }
        }
      },

      MemberExpression: function (node) {
        if (node.parent.type === 'MemberExpression') {
          // ignoring intermediate member expressions
          return;
        }
        const currentScope = util.getScope(context, node);
        const ns = util.buildMemberExpressionNamespace(
          currentScope,
          globalScope,
          node
        );
        if (ns.length > 0) {
          const rootIdentifier = ns[0];
          let name = rootIdentifier.name;
          if (rootIdentifier.type === 'Literal') {
            name = rootIdentifier.value;
          }
          if (util.isShadowed(currentScope, globalScope, rootIdentifier)) {
            // nothing to do here, it was shadowed by the user
            return;
          }
          if (globalBlocklist[name]) {
            context.report(
              node,
              'Invalid SecureWindow API, ' + name + ' is not allowed'
            );
            return;
          }
        }
      },
    };
  },
};
