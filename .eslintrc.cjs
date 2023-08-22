/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended'
    ],
    plugins: ['@typescript-eslint'],
    root: true,

    env: {
        'node': true
    },

    rules: {
        'semi': [
            2,
            'always'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'no-restricted-imports': [
            'error',
            {
                'patterns': [
                    '.*'
                ]
            }
        ],
        'vue/no-multiple-template-root': 'error',
        'vue/no-unused-components': 'off',
        'vue/order-in-components': 'error',
        'vue/html-closing-bracket-newline': 'off',
        'indent': [
            'warn',
            4
        ],
        'vue/html-indent': [
            'warn',
            4
        ],
        'vue/script-indent': [
            'warn',
            4
        ],
        'vue/first-attribute-linebreak': 'off'
    }
};