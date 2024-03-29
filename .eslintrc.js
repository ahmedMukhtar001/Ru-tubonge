module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['react'],
  extends: ['airbnb-base', 'eslint:all', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['src/components/*.css', 'src/images/**', 'src/components/dashboard/tickets/*.css', '*.css'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'react/no-unknown-property': 0,
    'class-methods-use-this': 0,
    'no-invalid-this': 0,
    'react/jsx-indent': ['error', 2],
    'multiline-comment-style': 0,
    'max-params': ['error', 4],
    'max-statements': ['error', 15],
    'react/prop-types': 0,
    'spaced-comment': 0,
    'max-lines': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'default-param-last': 0,
    'import/prefer-default-export': 0,
    'array-element-newline': 0,
    'multiline-ternary': 0,
    'no-magic-numbers': 0,
    'arrow-body-style': 0,
    'no-alert': 0,
    'eslint(quotes)': 0,
    'max-lines-per-function': 0,
    'object-curly-newline': 0,
    'no-unused-expressions': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-useless-constructor': 0,
    'object-shorthand': 0,
    'no-ternary': 0,
    'sort-keys': 0,
    'max-len': 0,
    'no-console': 0,
    'no-return-assign': 0,
    'linebreak-style': 0,
    'no-nested-ternary': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ]
  }
};
