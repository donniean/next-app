export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'autocorrect --fix',
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
  ],
  '*.{ts,tsx}': 'bash -c tsc --noEmit',
  '*.{js,mjs,cjs,ts,tsx}': 'eslint --fix',
  '*.css': 'stylelint --fix',
  '*.md': 'markdownlint --dot --fix',
  '*.ts': 'vitest related --run',
};
