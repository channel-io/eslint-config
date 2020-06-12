const path = require('path')

module.exports = {
  extends: [
    'airbnb-typescript',
  ],
  globals: {
    window: true,
    fetch: true,
  },
  env: {
    browser: true,
  },
  plugins: [
    'babel',
    'jsx-a11y',
    'import',
    'react',
    'react-hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off', // use babel
    semi: ['error', 'never'],
    'max-len': ['error', 130],
    'new-cap': 'off',
    'global-require': 'off',
    'default-case': 'off',
    'no-console': 'error',
    'no-underscore-dangle': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-param-reassign': ['error', { props: false }],
    'no-useless-constructor': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-empty-function': 'error',
    'no-restricted-imports': ['error', {
      paths: ['src'],
      patterns: ['../*'],
    }],
    'no-restricted-modules': ['error', {
      paths: ['src'],
      patterns: ['../*'],
    }],
    'react/require-extension': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/no-did-update-set-state': 'off', // some are not alternative
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': ['error', {
      order: [
        'type-annotations',
        'displayName',
        'propTypes',
        'defaultProps',
        'contextType',
        'getDerivedStateFromProps',
        'static-methods',
        'static-variables',
        'state',
        '_refs',
        'instance-variables',
        'lifecycle',
        'everything-else',
        '/^handle.+$/',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/jsx-no-target-blank': 'off',
    'react/no-find-dom-node': 'off',
    'import/no-extraneous-dependencies': 'off', // package.json directory hierarchy problem
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off', // TODO: remove cycle import
    'react/forbid-prop-types': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      children: { when: 'always' },
    }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies

    // legacy support
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-else-return': 'off',
    'import/no-dynamic-require': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-tag-spacing': 'off',
    'jsx-a11y/alt-text': 'off',
    'no-restricted-syntax': 'off',

    // TypeScript
    'import/order': ['error', { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'sort-keys': 'off',
    curly: ['error', 'multi-line'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    'no-empty': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: ['**/*.js'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error'
        ],
        'no-undef': 'off',
        'no-dupe-class-members': 'off', // 메서드 오버라이딩 허용. off 해도 tsc에서 에러
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off' // NOTE: React HOC 에서 off https://github.com/benmosher/eslint-plugin-import/issues/544
      },
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.js', '**/*.spec.jsx'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
    }
  ],
}
