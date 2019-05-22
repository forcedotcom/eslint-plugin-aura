const util = require('../util.js');

// This structure follows the same schema of the whitelisting mechanism from SES
// for ecma intrinsics, more details on ../lib/3rdparty/ses/whiteslit.js
const AuraAPI = {
  $A: {
    createComponent: true,
    createComponents: true,
    enqueueAction: true,
    get: true,
    getCallback: true,
    getComponent: true,
    getReference: true,
    getRoot: true,
    getToken: true,
    log: true,
    reportError: true,
    toString: true,
    warning: true,
    util: {
      addClass: true,
      getBooleanValue: true,
      hasClass: true,
      isArray: true,
      isEmpty: true,
      isObject: true,
      isUndefined: true,
      isUndefinedOrNull: true,
      removeClass: true,
      toggleClass: true
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

module.exports = function auraApi(context) {
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
