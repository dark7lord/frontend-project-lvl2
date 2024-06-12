import eslintJS from '@eslint/js';
const { configs } = eslintJS;

export default [
  configs.recommended,
  {
    files: ['**/*.js'], // Укажите, к каким файлам будет применяться конфигурация
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "off",
    },
  },
];
