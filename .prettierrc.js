// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/**

 * @see https://prettier.nodejs.cn/docs/configuration

 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  singleAttributePerLine: true
}

export default config
