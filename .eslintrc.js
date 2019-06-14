'use strict';

module.exports = {
  plugins: [],
  extends: ["airbnb"],
  rules: {
    "arrow-parens": 0,
    "comma-dangle": 0,
    "func-names": 1,
    "prefer-arrow-callback": 1,
    "no-plusplus": [
      "error",
      { "allowForLoopAfterthoughts": true }
    ],
    quotes: ["error", "single"]
  }
};
