// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buz',
  tagline: 'Event streaming for the rest of us.',
  url: 'https://buz.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'silverton-io',
  projectName: 'buz-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  staticDirectories: ['static'],
  plugins: [
    path.resolve(__dirname, 'plugins', 'snowplow')
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true
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
        title: 'Buz',
        logo: {
          alt: 'Buz',
          src: 'img/bee2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/what-is-buz',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/silverton-io/buz',
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
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/silverton-io/buz/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Silverton Data, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      snowplow: {
        collector: 'tele.silverton.io',
        appId: 'buz-docs',
        withCredentials: false
      },
      metadata: [
        {
          name: "Buz",
          content: "data, processing, streaming, quality, contracts"
        }
      ],
    }),
};

module.exports = config;
