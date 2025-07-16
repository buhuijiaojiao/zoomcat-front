export default {
  /**
   * git钩子配置
   */
  'pre-commit': 'pnpm lint',
  'pre-push': 'pnpm format'
}
