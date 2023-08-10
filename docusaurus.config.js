// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '知识库-SHSSEDU',
  tagline: '探索无限可能。',
  favicon: 'https://jsd.onmicrosoft.cn/gh/SHSSEDU/LOGO@main/LOGO-removebg.png',

  // Set the production url of your site here
  url: 'https://wiki.shssedu.ac.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SHSSEDU', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SHSSEDU/Wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SHSSEDU/Wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SHSSEDU知识库',
        logo: {
          alt: 'SHSSEDU知识库',
          src: 'https://jsd.onmicrosoft.cn/gh/SHSSEDU/LOGO@main/LOGO-removebg.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {to: 'https://blog.shssedu.ac.cn/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SHSSEDU/Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'SHSSEDU',
                href: 'https://shssedu.ac.cn/',
              },
              {
                label: '论坛',
                href: 'https://github.com/orgs/SHSSEDU/discussions',
              },
              {
                label: '博客',
                href: 'https://blog.shssedu.ac.cn/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '微信公众号',
                to: 'https://gcore.jsdelivr.net/gh/SHSSEDU/Document@main/wx.webp',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SHSSEDU',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SHSSEDU. 使用Docusaurus构建.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
