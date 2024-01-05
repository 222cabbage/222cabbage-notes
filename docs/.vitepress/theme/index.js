import DefaultTheme from 'vitepress/theme'
import './global.scss' // global scss
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    // app.component('VueClickAwayExample', VueClickAwayExample)
  }
}