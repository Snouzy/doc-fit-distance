// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fit\'Distance',
  tagline: 'Bienvenue sur la documentation de Fit\'Distance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentation.fitdistance.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Snouzy', // Usually your GitHub org/user name.
  projectName: 'fitdistance', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
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
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/fitdistance-social-card.jpg',
      navbar: {
        title: 'Fit\'Distance',
        logo: {
          alt: 'Fit\'Distance Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/changelog', label: 'Changelog', position: 'left'},          
          {
            href: 'https://app.fitdistance.io',
            label: 'L\'application',
            position: 'right',
          },
          {
            label: 'Le site',
            href: 'https://fitdistance.io',
            position: 'right',
          },
          {
            label: 'La newsletter',
            href: 'https://gmail.us11.list-manage.com/subscribe?u=9411702375c68c5fea7499cff&id=301a671e33',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/Intro',
              },
              {
                label: 'Tutoriel - les bases',
                to: '/docs/category/tutoriel---les-bases',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/92758304',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fitdistance.io/',
              },
              {
                label: 'Support',
                href: 'https://go.crisp.chat/chat/embed/?website_id=acb8f4fc-917a-43ae-975c-d0637a2fd95f',
              },
            ],
          },
          {
            title: 'Divers',
            items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
              {
                label: 'L\'application',
                href: 'https://app.fitdistance.io',
              },
              {
                label: 'Le site',
                href: 'https://fitdistance.io',
              },
              {
                label: 'La newsletter',
                href: 'https://gmail.us11.list-manage.com/subscribe?u=9411702375c68c5fea7499cff&id=301a671e33',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fit'Distance, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
        [
          '@docusaurus/plugin-content-blog',
          {
            blogSidebarTitle: 'Journal des modifications', // Title of the blog sidebar. Defaults to 'Blog'.
            /**
             * Required for any multi-instance plugin
             */
            id: 'second-blog',
            /**
             * URL route for the blog section of your site.
             * *DO NOT* include a trailing slash.
             */
            routeBasePath: 'changelog',
            /**
             * Path to data on filesystem relative to site dir.
             */
            path: './changelog',
          },
        ],
      ],
};

module.exports = config;
