import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: { js, '@stylistic': stylistic },
    rules: {
      ...js.configs.recommended.rules,
      ...stylistic.configs.customize({
        semi: true,
        quotes: 'single',
        commaDangle: 'never'
      }).rules,
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
          checkForEach: true
        }
      ],
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unreachable-loop': 'warn',
      'no-use-before-define': 'warn',
      'no-useless-assignment': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      'capitalized-comments': ['warn'],
      'camelcase': 'error',
      'curly': ['error', 'multi'],
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': ['error', { allowKeywords: false }],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-empty-function': 'warn',
      'no-alert': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'warn',
      'prefer-template': 'error',
      'require-await': 'warn'
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.json'],
    ignores: ['**/tsconfig.json', '**/package.json', '**/.vscode/**'],
    plugins: { json },
    language: 'json/json',
    ...json.configs.recommended.rules
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    ...json.configs.recommended.rules
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    rules: {
      ...markdown.configs.recommended[0]?.rules,
      'markdown/no-html': 'error',
      'markdown/no-bare-urls': 'error',
      'markdown/no-duplicate-headings': 'error'
    }
  }
);
