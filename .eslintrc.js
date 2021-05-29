module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'click-events-have-key-events': 'off',
        'consistent-return': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/extensions': ['error', 'never'],
        'import/no-unresolved': ['off'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'max-len': ['off'],
        'no-multi-spaces': ['error', {
            ignoreEOLComments: true,
            exceptions: {
                ImportDeclaration: true,
                VariableDeclarator: true,
            },
        }],
        'no-nested-ternary': 'off',
        'no-use-before-define': ['error', { functions: false }],
        'prefer-destructuring': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-filename-extension': ['warn', {
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
            ],
        }],
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': ['error', 4],
        'react-hooks/exhaustive-deps': 'warn',
        'linebreak-style': ['off', 'windows'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
