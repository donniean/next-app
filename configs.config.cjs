module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
      tailwindcss: true,
    },
    tsc: {
      patterns: ['**/*.{ts,tsx}'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs,ts,tsx}'],
      next: true,
      vitestPatterns: ['**/*.test.ts'],
    },
    stylelint: {
      patterns: ['**/*.css'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
    },
    'sort-package-json': true,
    vitest: true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
};
