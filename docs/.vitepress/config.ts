export default {
  title: "Atoms",
  description: "vue3 components",
  themeConfig: {
    logo: "/atom.svg",
    siteTitle: false,
    docsDir: "docs",
    outlineTitle: '#',
    repo: "https://github.com/mewcoder/atoms-ui",
    footer: {
      copyright: 'Copyright © 2022 mewcoder'
    },
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/component/icon", activeMatch: "/component/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quieStart" },
          ],
        },
      ],
      "/component/": [
        {
          text: "组件",
          items: [
            { text: "Icon 图标", link: "/component/icon" },
            { text: "Button 按钮", link: "/component/button" },
            { text: "Input 输入框", link: "/component/input" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/mewcoder/atoms-ui" },
    ],
  },
};
