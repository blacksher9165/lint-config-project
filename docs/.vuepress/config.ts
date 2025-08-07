import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    colorMode: "light",
    navbar: [
      {
        text: "编码规范",
        prefix: "/coding/",
        children: [
          {
            text: "HTML编码规范",
            link: "/coding/html.md",
          },
          {
            text: "CSS编码规范",
            link: "/coding/css.md",
          },
        ],
      },
      {
        text: "工程化规范",
        prefix: "/engineering/",
        children: [
          {
            text: "commit提交规范",
            link: "/engineering/commit.md",
          },
          {
            text: "markdown文档规范",
            link: "/engineering/markdown.md",
          },
        ],
      },
      {
        text: "npm包",
        prefix: "/npm/",
        children: [
          {
            text: "blacksher-commitlint-config",
            link: "/npm/commitlint.md",
          },
          {
            text: "blacksher-markdownlint-config",
            link: "/npm/markdownlint.md",
          },
        ],
      },
    ],
  }),
  base: "/lint-config-project/",
  lang: "zh-CN",
  title: "前端编码规范",
  description: "前端编码规范文档",
});
