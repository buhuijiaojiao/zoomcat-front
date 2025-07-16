export default {
  /**
   * git钩子配置
   * pre-commit: 提交代码前做一些事
   * pre-push: 推代码前做一些事
   * pre-merge: 合并代码前做一些事
   * pre-rebase: rebase 前做一些事
   * ...
   */
  'pre-commit': 'lint-staged'
}
