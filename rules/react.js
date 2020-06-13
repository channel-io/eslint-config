module.exports = {
  'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react/forbid-prop-types': 'off',
  'react/jsx-curly-spacing': ['error', { when: 'never', children: { when: 'always' }, }],
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
  'react/jsx-no-target-blank': 'off',
  'react/no-did-update-set-state': 'off', // Some are not alternative
  'react/no-find-dom-node': 'off',
  'react/prefer-stateless-function': 'off',
  'react/prop-types': 'off',
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
}