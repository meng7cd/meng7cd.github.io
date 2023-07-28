import { defineUserConfig, defaultTheme } from "vuepress";

// https://v2.vuepress.vuejs.org/zh/reference/config.html

export default defineUserConfig({
  // 语言
  lang: "zh-CN",
  // 标题
  title: "你好，Meng ！",
  // 描述
  description: "这是我的第一个站点",
  // head标签集
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  // 多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Meng",
      description: "My docs !",
    },
  },
  theme: defaultTheme({
    // logo
    logo: "/images/logo.png",
    // 默认主题配置
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "文档",
        link: "/docs/",
      },
      {
        text: "标签",
        link: "/tags/",
      },
      {
        text: "关于",
        link: "/about/",
      },
    ],
    // 多语言
    locales: {
      "/": {
        selectLanguageName: "简体中文",
      },
    },
    backToHome: '返回主页'
  }),
  // 开发配置 -> 服务器端口
  port: 8080,
  // 开发配置 -> 是否在开发服务器启动后打开浏览器
  open: false,
});
