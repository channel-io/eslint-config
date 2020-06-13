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
  rules: Object.assign({},
    require('./rules/legacy'),
    require('./rules/base'),
    require('./rules/react'),
  ),
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      excludedFiles: ['**/*.js'],
      rules: require('./rules/typescript'),
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.js', '**/*.spec.jsx'],
      plugins: [
        'jest',
      ],
      env: {
        jest: true,
      },
    }
  ],
}
