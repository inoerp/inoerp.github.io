// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'inoERP',
  tagline: 'One System For All Processes',
  url: 'https://inoerp.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'inoERP', // Usually your GitHub org/user name.
  projectName: 'inoerp.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/inoerp/inoerp.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/inoerp/inoerp.github.io/edit/main/website/blog/',
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
      navbar: {
        title: 'inoERP',
        logo: {
          alt: 'One System For All Processes',
          src: 'img/apple-touch-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {to: '/docs/download', label: 'Download', position: 'right'},
          {
            href: 'https://github.com/inoerp/inoERP',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Download',
                to: '/docs/download',
              },
              {
                label: 'Blog',
                to: '#',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=inoerp',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/inoerp/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/inoerp/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Issue Tracker',
                href: 'https://github.com/inoerp/inoERP/issues',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/inoerp/inoERP',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/inoerp/inoERP/discussions',
              },


            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} inoERP.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
