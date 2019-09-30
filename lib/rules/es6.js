module.exports = {
  // disable all es6 rules
  'arrow-body-style': ['off', 'as-needed', {
    requireReturnForObjectLiteral: false,
  }],
  'arrow-parens': ['off', 'as-needed', {
    requireForBlockBody: true,
  }],
  'arrow-spacing': 'off',
  'constructor-super': 'off',
  'generator-star-spacing': 'off',
  'no-async-promise-executor': 'off',
  'no-await-in-loop': 'off',
  'no-class-assign': 'off',
  'no-confusing-arrow': ['off', {
    allowParens: true,
  }],
  'no-const-assign': 'off',
  'no-dupe-class-members': 'off',
  'no-restricted-imports': ['off', {
    paths: [],
    patterns: []
  }],
  'no-template-curly-in-string': 'off',
  'no-this-before-super': 'off',
  'no-useless-computed-key': 'off',
  'no-useless-constructor': 'off',
  'no-useless-rename': 'off',
  'no-var': 'off',
  'object-shorthand': 'off',
  'prefer-arrow-callback': 'off',
  'prefer-const': 'off',
  'prefer-destructuring': 'off',
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'off',
  'prefer-object-spread': 'off',
  'prefer-rest-params': 'off',
  'prefer-spread': 'off',
  'prefer-template': 'off',
  'require-await': 'off',
  'require-yield': 'off',
  'rest-spread-spacing': 'off',
  'sort-imports': ['off', {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
  }],
  'symbol-description': 'off',
  'template-curly-spacing': 'off',
  'yield-star-spacing': 'off'
}
