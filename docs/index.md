---
layout: home

title: Sweet
# titleTemplate: Sweet

hero:
  name: About Sweet
  text: 适用于Vue + React
  tagline: 使用Vue和React的方式讲解组件封装和方法封装思路，记录遇到的一些开发上的问题
  image:
    src: /assets/sweet.png
    alt: sweet
  actions:
    - theme: brand
      text: Get Start Sweet
      link: /sweet_ui/2
    # - theme: alt
    #   text: View on GitHub
    #   link: https://github.com/themusecatcher/vue-amazing-ui
    # - theme: alt
    #   text: View on NPM
    #   link: https://www.npmjs.com/package/vue-amazing-ui

features:
  - icon: ⚡️
    title: 快速上手
    details: 无论是vue或者是react开发者都可以极其快速上手
  - icon: 🖖
    title: 可以cv
    details: 代码贴出来了，不嫌弃的可以复制使用
  - icon: 🛠️
    title: 分享踩坑记录
    details: 记录自己在开发上的踩坑记录
---

<script setup>
  import { onMounted } from 'vue'
  import { fetchVersion } from './.vitepress/utils/fetchVersion'

  onMounted(() => {
    fetchVersion()
  })
  // https://process1024.github.io/vitepress/
</script>
