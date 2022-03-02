// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RikData OneApp',
  tagline: 'OneApp for all business systems',
  url: 'https://rikdata.github.io', // Your website URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RikData', // Usually your GitHub org/user name.
  projectName: 'rikdata.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rikdata/rikdata.github.io/edit/main/src/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rikdata/rikdata.github.io/edit/main/website/blog/',
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
        title: 'RikData',
        logo: {
          alt: 'OneApp for all business systems',
          src: 'images/rikdata_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Docs',
          },
          {to: '/docs/download', label: 'Download', position: 'right'},
          {
            href: 'https://github.com/rikdata/rikdata.github.io',
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
                to: '/docs/introduction',
              },
              {
                label: 'Download',
                to: '/docs/download',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=rikdata',
              },

              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/rikdata/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Issue Tracker',
                href: 'https://github.com/rikdata/rikdata.github.io/issues',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rikdata/rikdata.github.io',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/rikdata/rikdata.github.io/discussions',
              },


            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RikData.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
