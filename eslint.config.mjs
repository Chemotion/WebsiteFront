import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next'),

  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/out/**']
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        fetch: 'readonly',
        process: 'readonly',
        document: 'readonly',
        window: 'readonly',
        clearTimeout: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly',
        MutationObserver: 'readonly',
        history: 'readonly'
      }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      tailwindcss,
      '@next/next': next,
      prettier
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      ...next.configs.recommended.rules,
      ...prettier.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-boolean-value': ['warn', 'never'],

      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-contradicting-classname': 'warn',

      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',

      'prettier/prettier': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      curly: ['warn', 'multi-line'],
      eqeqeq: ['warn', 'always']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
