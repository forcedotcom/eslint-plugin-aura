'use strict';

const util = require('../util.js');

const AuraAPI = {
  $A: {
    afterRender: true,
    auraFriendlyError: true,
    Component: true,
    createComponent: true,
    createComponents: true,
    createComponentFromConfig: true,
    deferPendingActions: true,
    enqueueAction: true,
    get: true,
    getCallback: true,
    getCmp: true,
    getComponent: true,
    getDefinition: true,
    getDefinitions: true,
    getEvt: true,
    getQueryStatement: true,
    getReference: true,
    getRoot: true,
    getToken: true,
    hasDefinition: true,
    log: true,
    newCmp: true,
    newCmpAsync: true,
    newCmpDeprecated: true,
    popCreationPath: true,
    pushCreationPath: true,
    reportError: true,
    render: true,
    rerender: true,
    runAfterInit: true,
    setCreationPathIndex: true,
    toString: true,
    unrender: true,
    warning: true,
    test: {
      addEventHandler: true,
      addWaitFor: true,
      addWaitForWithFailureMessage: true,
      assertDefined: true,
      assertEquals: true,
      assertFalse: true,
      assertFalsy: true,
      assertNotUndefined: true,
      assertNotUndefinedOrNull: true,
      assertTruthy: true,
      assertTrue: true,
      assertUndefined: true,
      assertUndefinedOrNull: true,
      clickOrTouch: true,
      enqueueAction: true,
      findChildWithClassName: true,
      fireDomEvent: true,
      getElementByClass: true,
      isActionPending: true,
      overrideFunction: true,
      setXHRExclusivity: true,
    },
    util: {
      addClass: true,
      addMapValueToMap: true,
      addValueToMap: true,
      appendChild: true,
      apply: true,
      attachToDocumentBody: true,
      bind: true,
      buildFlavorClass: true,
      clearNode: true,
      contains: true,
      copy: true,
      createElementsFromMarkup: true,
      createHtmlElement: true,
      createTimeoutCallback: true,
      estimateSize: true,
      every: true,
      filter: true,
      forEach: true,
      formToMap: true,
      format: true,
      generateUrl: true,
      getBooleanValue: true,
      getCookie: true,
      getDataAttribute: true,
      getDebugToolComponent: true,
      getDebugToolsAuraInstance: true,
      getElement: true,
      getElementAttributeValue: true,
      getSelectValue: true,
      getText: true,
      getUrl: true,
      getWindowSize: true,
      hasClass: true,
      hasDataAttribute: true,
      includeScript: true,
      insertAfter: true,
      insertBefore: true,
      insertFirst: true,
      instanceOf: true,
      isArray: true,
      isBoolean: true,
      isComponent: true,
      isEmpty: true,
      isError: true,
      isEvent: true,
      isExpression: true,
      isFiniteNumber: true,
      isFunction: true,
      isIE: true,
      isIOSWebView: true,
      isObject: true,
      isPlainObject: true,
      isNumber: true,
      isString: true,
      isSubDef: true,
      isUndefined: true,
      isUndefinedOrNull: true,
      isValue: true,
      lookup: true,
      map: true,
      merge: true,
      on: true,
      postMessage: true,
      reduce: true,
      removeClass: true,
      removeElement: true,
      removeOn: true,
      sanitizeCSS: true,
      sanitizeDOM: true,
      sanitizeHtml: true,
      sanitizeJs: true,
      sanitizeJsAttr: true,
      sanitizeJsObj: true,
      sanitizeStyle: true,
      sanitizeUri: true,
      setCookie: true,
      setDataAttribute: true,
      setDebugToolWindow: true,
      setFocus: true,
      setText: true,
      some: true,
      squash: true,
      stringEndsWith: true,
      stripTags: true,
      supportsTouchEvents: true,
      swapClass: true,
      toggleClass: true,
      trim: true,
      truncate: true,
    },
    localizationService: {
      displayDuration: true,
      displayDurationInDays: true,
      displayDurationInHours: true,
      displayDurationInMilliseconds: true,
      displayDurationInMinutes: true,
      displayDurationInMonths: true,
      displayDurationInSeconds: true,
      duration: true,
      endOf: true,
      formatCurrency: true,
      formatDate: true,
      formatDateTime: true,
      formatDateTimeUTC: true,
      formatDateUTC: true,
      formatNumber: true,
      formatPercent: true,
      formatTime: true,
      formatTimeUTC: true,
      getDateStringBasedOnTimezone: true,
      getDaysInDuration: true,
      getDefaultCurrencyFormat: true,
      getDefaultNumberFormat: true,
      getDefaultPercentFormat: true,
      getHoursInDuration: true,
      getLocalizedDateTimeLabels: true,
      getMillisecondsInDuration: true,
      getMinutesInDuration: true,
      getMonthsInDuration: true,
      getNumberFormat: true,
      getSecondsInDuration: true,
      getToday: true,
      getYearsInDuration: true,
      isAfter: true,
      isBefore: true,
      isPeriodTimeView: true,
      isSame: true,
      parseDateTime: true,
      parseDateTimeISO8601: true,
      parseDateTimeUTC: true,
      startOf: true,
      toISOString: true,
      translateFromLocalizedDigits: true,
      translateFromOtherCalendar: true,
      translateToLocalizedDigits: true,
      translateToOtherCalendar: true,
      UTCToWallTime: true,
      WallTimeToUTC: true,
    },
    storageService: {
      deleteStorage: true,
      getAdapterConfig: true,
      getStorage: true,
      getStorages: true,
      getVersion: true,
      initStorage: true,
      isregisteredAdapter: true,
      registerAdapter: true,
      selectAdapter: true,
      setIsolation: true,
      setPartition: true,
      setVersion: true,
    },
    clientService: {
      addPostNotificationListener: true,
      addPreNotificationListener: true,
      addScopedModuleResolver: true,
      enqueueAction: true,
      hardRefresh: true,
      hydrateActions: true,
      inFlightXHRs: true,
      init: true,
      initDefs: true,
      initHost: true,
      injectComponent: true,
      injectComponentAsync: true,
      invalidSession: true,
      invalidateAction: true,
      isActionStorage: true,
      isConnected: true,
      loadClientLibrary: true,
      releaseXHR: true,
      removePostNotificationListener: true,
      removePreNotificationListener: true,
      resetToken: true,
      revalidateAction: true,
      send: true,
      sendBeacon: true,
      setAuthorizationToken: true,
      setConnected: true,
      setOutdated: true,
      setParallelBoostrapLoad: true,
      setPersistedActionsFilter: true,
      setXHRTimeout: true,
      throwExceptionEvent: true,
    },
    componentService: {
      addComponent: true,
      addComponentClass: true,
      addDescriptorCaseMapping: true,
      addLibraryExporter: true,
      addLibraryInclude: true,
      addModule: true,
      computeValue: true,
      countComponents: true,
      createComponent: true,
      createComponentFromConfig: true,
      createComponents: true,
      get: true,
      getAttributeExpression: true,
      getAttributeProviderForElement: true,
      getComponent: true,
      getComponentClass: true,
      getComponentLocator: true,
      getDef: true,
      getIndex: true,
      getRegisteredComponentDescriptors: true,
      getRenderingComponentForElement: true,
      getSelfGlobalId: true,
      getUnusedDefinitions: true,
      inFlightComponents: true,
      initControllersDefs: true,
      initEventsDef: true,
      initLibraryDefs: true,
      initModuleDefs: true,
      newComponent: true,
      newComponentAsync: true,
      newComponentDeprecated: true,
      saveLibraryConfig: true,
    },
    styleService: {
      applyAllTokens: true,
      applyTokens: true,
      removeTokens: true,
    },
    logger: {
      info: true,
      log: true,
      setErrorContextProvider: true,
      subscribe: true,
      unsubscribe: true,
      warning: true,
    },
    devToolsService: {
      checkAccessibility: true,
      defaultView: true,
      filters: true,
      output: true,
      select: true,
    },
    metricsService: {
      clearMarks: true,
      clearTransactions: true,
      detachOnKilledTransactions: true,
      detachOnTransactionEnd: true,
      disablePlugin: true,
      disablePlugins: true,
      enablePlugin: true,
      enablePlugins: true,
      findAndSummarizeResourcePerfInfo: true,
      getAllCacheStats: true,
      getBootstrapMetrics: true,
      getCurrentMarks: true,
      getCurrentPageTransaction: true,
      getTransation: true,
      getTransactions: true,
      getVersion: true,
      inTransaction: true,
      instrument: true,
      mark: true,
      markEnd: true,
      markStart: true,
      microsecondsResolution: true,
      onAdditionalMarks: true,
      onTransactionCreate: true,
      onTransactionEnd: true,
      onTransactionKilled: true,
      performance: true,
      registerBeacon: true,
      registerCacheStats: true,
      registerPeriodicLogger: true,
      registerPlugin: true,
      removePeriodicLogger: true,
      setClearCompletedTransactions: true,
      skipBootstrapLogging: true,
      summarizeResourcePerfInfo: true,
      syntheticTransactionStart: true,
      time: true,
      transaction: true,
      transactionEnd: true,
      transactionStart: true,
      transactionUpdate: true,
      unInstrument: true,
      updateCurrentPageTransaction: true,
    },
    expressionService: {
      create: true,
      createPassThroughValue: true,
      normalize: true,
      resolve: true,
    },
  },
};

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'validate Aura APIs',
      url: util.docUrl('aura-api'),
    },
    messages: {
      mustUseDotNotation:
        "Invalid Aura API '{{name}}', use dot notation instead",
      invalidApi: "Invalid Aura API '{{name}}'",
    },
    schema: [],
  },

  create(context) {
    let globalScope;

    return {
      Program(node) {
        globalScope = util.getScope(context, node);
      },

      MemberExpression(node) {
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

          if (
            rootIdentifier.type !== 'Identifier' ||
            rootIdentifier.name !== '$A' ||
            util.isShadowed(currentScope, globalScope, rootIdentifier)
          ) {
            return;
          }

          let api = AuraAPI;
          for (let i = 0; i < ns.length; ++i) {
            const identifier = ns[i];

            if (identifier.type !== 'Identifier') {
              context.report({
                node,
                messageId: 'mustUseDotNotation',
                data: { name: identifier.name },
              });
              return;
            }

            const token = identifier.name;
            const nextIdentifier = ns[i + 1];

            if (typeof api !== 'object') {
              context.report({
                node,
                messageId: 'invalidApi',
                data: { name: token },
              });
              return;
            }

            // eslint-disable-next-line no-prototype-builtins
            if (!api.hasOwnProperty(token)) {
              context.report({
                node,
                messageId: 'invalidApi',
                data: { name: token },
              });
              return;
            }

            if (api[token] === '*') {
              // anything from this point on is good
              return;
            }
            if (
              typeof api[token] === 'object' &&
              Object.keys(api[token]).length === 0
            ) {
              // nothing else to inspect
              return;
            }
            if (api[token] === true && !nextIdentifier) {
              // function call
              return;
            }
            if (
              api[token] === true &&
              nextIdentifier &&
              nextIdentifier.type === 'Identifier' &&
              (nextIdentifier.name === 'apply' ||
                nextIdentifier.name === 'call')
            ) {
              // function call with .apply() or .call() are still valid
              return;
            }
            if (api[token] === false && nextIdentifier === undefined) {
              return;
            }
            api = api[token];
          }
        }
      },
    };
  },
};
