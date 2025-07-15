import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  /**
   * 禁用所有与格式化相关的 ESLint 规则,
   *   (使得关于风格全部使用prettier , 防止eslint和prettier左右脑互搏)
   * 一次性设置 eslint-plugin-prettier 和 eslint-config-prettier
   */
  eslintPluginPrettierRecommended
])
