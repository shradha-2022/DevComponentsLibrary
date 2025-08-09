import type { Linter } from 'eslint';
import eslintPlugin from '@eslint/js';
import tseslint from 'typescript-eslint';

const config: Linter.FlatConfig[] = [
  eslintPlugin.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];

export default config;

