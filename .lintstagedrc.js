/**
 * 配置 lint-staged 以运行代码检查器和其他任务
 * @see https://github.com/lint-staged/lint-staged
 * @filename: .lint-staged.js
 * @type {import('lint-staged').Configuration}
 */

export default {
  '**/*.{ts,tsx,js,jsx,vue}': ['eslint  --fix', 'prettier --write'],
  '!(*.ts|*.tsx|*.js|*.jsx|*.vue)': ['prettier --write']
  //   '**/*.{css,less}': ['stylelint --cache --fix']
}
