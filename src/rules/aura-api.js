const util = require('../util.js');

// This structure follows the same schema of the whitelisting mechanism from SES
// for ecma intrinsics, more details on ../lib/3rdparty/ses/whiteslit.js
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
      setXHRExclusivity: true
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
      truncate: true
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
      WallTimeToUTC: true
    }
  }
};

module.exports = function auraApiRule(context) {
  let globalScope;

  return {
    Program() {
      globalScope = context.getScope();
    },

    MemberExpression(node) {
      if (node.parent.type === 'MemberExpression') {
        // ignoring intermediate member expressions
        return;
      }

      const currentScope = context.getScope();
      const ns = util.buildMemberExpressionNamespace(
        currentScope,
        globalScope,
        node
      );

      if (ns.length > 0) {
        const rootIdentifier = ns[0];

        if (
          rootIdentifier.type !== 'Identifier'
          || rootIdentifier.name !== '$A'
          || util.isShadowed(currentScope, globalScope, rootIdentifier)
        ) {
          return;
        }

        let api = AuraAPI;
        for (let i = 0; i < ns.length; i + 1) {
          const identifier = ns[i];

          if (identifier.type !== 'Identifier') {
            context.report(node, 'Invalid Aura API, use dot notation instead');
            return;
          }

          const token = identifier.name;
          const nextIdentifier = ns[i + 1];

          if (typeof api !== 'object') {
            context.report(node, 'Invalid Aura API');
            return;
          }

          // eslint-disable-next-line no-prototype-builtins
          if (!api.hasOwnProperty(token)) {
            context.report(node, 'Invalid Aura API');
            return;
          }

          if (api[token] === '*') {
            // anything from this point on is good
            return;
          }
          if (
            typeof api[token] === 'object'
            && Object.keys(api[token]).length === 0
          ) {
            // nothing else to inspect
            return;
          }
          if (api[token] === true && !nextIdentifier) {
            // function call
            return;
          }
          if (
            api[token] === true
            && nextIdentifier
            && nextIdentifier.type === 'Identifier'
            && (nextIdentifier.name === 'apply' || nextIdentifier.name === 'call')
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
    }
  };
};

module.exports.schema = [];
