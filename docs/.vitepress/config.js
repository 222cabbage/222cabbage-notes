/*
 * @Auther: qinzhenhao
 * @Date: 2023-12-08 14:41:54
 * @LastEditors: qinzhenhao
 * @LastEditTime: 2024-01-04 17:15:28
 * @Description: 
 */
/*
 * @Auther: qinzhenhao
 * @Date: 2023-12-08 14:41:54
 * @LastEditors: qinzhenhao
 * @LastEditTime: 2023-12-08 14:55:23
 * @Description: 
 */

import { defineConfig } from "vite";

export default defineConfig({
    title: '白白白',
    titleTemplate: '大白菜',
    description: '试一下',
    // head: [ // 网站图标
    //     ['link', { rel: 'icon', type: 'image/png', href: '../assets/website.png' }],
    //     // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    // ],
    // appearance: 'dark', // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
    // markdown: {
    //     lineNumbers: false // 是否显示行数，默认false
    // },
    base: '/',
    themeConfig: {
        // https://docsearch.algolia.com/apply/ 申请 填写部署到公网的网站地址、邮箱和代码仓库地址，全部勾选，然后提交！
        // 回复邮件 I am the maintainer of the website, I can modify the code ~ 获取 appId、apiKey、indexName
        // algolia: {
        //     appId: 'SHDNEYGA8Z',
        //     apiKey: '91419401b0b0efd31b610e54e5b97249',
        //     indexName: 'vue-amazing-ui'
        // },
        logo: '../assets/website.png',
        siteTitle: 'SWEET',
        // Type is `ThemeConfig`
        nav: [
            { text: '关于', link: '/guide' },
            {
                text: '相关产物',
                items: [
                    { text: 'sweetUI', link: '/sweet_ui/2' },
                    { text: 'sweetUtils', link: '/sweet_utils/1' },
                ]
            }
        ],
        sidebar: [
            {
                text: 'SweetUI',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '随便画画', link: '/sweet_ui/1' },
                    { text: '按钮组件的封装', link: '/sweet_ui/2' },
                ]
            },
            {
                text: 'SweetUtils',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '开始使用', link: '/sweet_utils/1' },
                ]
            },
            {
                text: '工作问题记录',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'react-native为text设置圆角', link: '/works/1' },
                ]
            },
            {
                text: '壁纸推荐',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '第一期', link: '/papers/1' },
                ]
            },
        ],
        outlineTitle: 'In hac pagina',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            // { icon: 'twitter', link: '...' },
            // 你也可以自定义svg的icon:
            // {
            //     icon: {
            //         svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            //     },
            //     link: '...'
            // }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        }
    },
    appearance: false, // 暗夜模式
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],
    // lang: 'en-US',
    lastUpdated: '最近更新时间',
    lang: 'zh-CN',
    // lastUpdated: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    },
    outDir: '../public',

})
