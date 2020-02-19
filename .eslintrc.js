module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
        'jsx-a11y/anchor-is-valid': 0,
        'no-plusplus': 0,
        'react/jsx-no-bind': 1,
        'max-len': 1,
        '@typescript-eslint/camelcase': 1,
        'eslint-disable-next-line': 0,
        'no-console': 0,
        'react/no-access-state-in-setstate': 0,
        'import/no-unresolved': 0,
        'consistent-return': 0,
        'no-redeclare': 0,
        'eslint-disable-next-line': 0,
        'react/prefer-stateless-function': 0
    },
    env: { es6: true },
};
