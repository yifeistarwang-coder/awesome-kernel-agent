import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 构建产物部署在 GitHub Pages 的项目子路径下，但本地 `astro dev` 不应该要求
// 记住这个前缀——否则直接打开 http://localhost:4321/ 每个栏目都是 404。
const isDevServer = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://yifeistarwang-coder.github.io/awesome-kernel-agent',
  base: isDevServer ? '/' : '/awesome-kernel-agent',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Kernel Agent 学习手册',
      description: '从零理解并动手实践用 Agent 编写高性能 GPU kernel：KDA、Humanize、Skills 与自建 harness。',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/SiteFooter.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/yifeistarwang-coder/awesome-kernel-agent',
        },
      ],
      sidebar: [
        { label: '开始', items: [{ label: '导读与环境', link: '/guide/intro/' }] },
        {
          label: '基础',
          items: [
            { label: 'Agent 与 harness', link: '/guide/agent-harness/' },
            { label: 'GPU kernel 与性能', link: '/guide/gpu-kernel/' },
          ],
        },
        {
          label: '案例',
          items: [
            { label: 'KDA：让 Agent 写 kernel', link: '/guide/kda/' },
            { label: 'Humanize：判断工程', link: '/guide/humanize/' },
          ],
        },
        {
          label: '进阶',
          items: [
            { label: 'Skills 与经验沉淀', link: '/guide/skills/' },
            { label: '自建 harness', link: '/guide/beyond/' },
          ],
        },
        {
          label: '附录',
          items: [
            { label: '术语表', link: '/glossary/' },
            { label: '练习册', link: '/exercises/' },
            { label: '资料库', link: '/resources/' },
            { label: '更新日志', link: '/changelog/' },
          ],
        },
      ],
    }),
  ],
});
