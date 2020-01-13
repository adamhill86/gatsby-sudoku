module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'json-format',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'react-app',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }
    ],
    'import/no-unresolved': 'off',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'array-bracket-newline': ['off', {
      multiline: true,
      minItems: null
    }],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'array-element-newline': ['off', {
      multiline: true,
      minItems: null
    }],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 'off',
    'max-len': ['off', {
      'code': 140
    }],
    'no-confusing-arrow': 'off',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1
    }],
    'no-param-reassign': 'off',
    'object-curly-newline': ['off', {
      multiline: true
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true
    }],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
  },
};
