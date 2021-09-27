module.exports = {
  '@typescript-eslint/no-unused-vars': ['error'],
  '@typescript-eslint/consistent-type-imports': ['warn'],
  'no-dupe-class-members': 'off', // Allow method overriding (will be checked by tsc)
  'no-undef': 'off',
  'no-unused-vars': 'off',
  '@channel.io/pascal-case-enum-name': ['error', true, false],
  '@channel.io/pascal-case-interface-name': ['error'],
  '@channel.io/pascal-case-type-name': ['error'],
}