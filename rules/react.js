module.exports = {
  'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react/jsx-key': 'warn', // TODO: (@axel) 사용처 버전업 진행 후 error 레벨로 변경. // Checks required key prop in JSX exist
  'react/default-props-match-prop-types': 'off', // See: https://github.com/yannickcr/eslint-plugin-react/issues/2396
  'react/destructuring-assignment': ['warn', 'always'],
  'react/forbid-prop-types': 'off',
  'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'always' }, }],
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
  'react/jsx-no-target-blank': 'off',
  'react/jsx-props-no-spreading': 'warn',
  'react/no-did-update-set-state': 'off', // Some are not alternative
  'react/no-find-dom-node': 'off',
  'react/prefer-stateless-function': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off', // See: https://github.com/yannickcr/eslint-plugin-react/issues/2396
  'react/require-extension': 'off',
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
  'react/state-in-constructor': ['error', 'never'],
  'react/static-property-placement': 'off',
  '@channel.io/hooks-deps-element-newline': 'warn',
}
