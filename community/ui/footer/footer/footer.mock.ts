import type { CategoryProps } from '@teambit/community.ui.footer.category';

export const footerMock: CategoryProps[] = [
  {
    title: 'Follow Us',
    links: [
      { icon: 'https://static.bit.dev/bit-logo.svg', text: 'Bit', href: 'https://bit.cloud/teambit', external: true },
      { icon: 'youtube-logo', text: 'YouTube', href: 'https://www.youtube.com/c/Bitdev/videos', external: true },
      { icon: 'twitter-logo', text: 'Twitter', href: 'https://twitter.com/bitdev_', external: true },
      { icon: 'github-logo', text: 'Github', href: 'https://github.com/teambit', external: true },
    ],
  },
  {
    title: 'Open Source',
    links: [
      { text: 'Docs', href: '/docs/quick-start' },
      { text: 'Getting Started', href: '/docs/getting-started/installing-bit' },
      { text: 'Contributing', href: 'https://github.com/teambit/bit', external: true },
      { text: 'Privacy', href: '/docs/usage-analytics' },
    ],
  },
  {
    title: 'Bit Cloud',
    links: [
      { text: 'Platform', href: 'https://bit.cloud', external: true },
      { text: 'Enterprise', href: 'https://bit.cloud/enterprise', external: true },
      { text: 'Book a Demo', href: 'https://bit.cloud/contact-sales', external: true },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        icon: 'slack',
        text: 'Slack',
        href: 'https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w',
        external: true,
      },
      { text: 'Discussions', href: 'https://github.com/teambit/bit/discussions', external: true },
    ],
  },
  {
    title: 'Get help',
    links: [
      { text: 'Issues', href: 'https://github.com/teambit/bit/issues', external: true },
      { text: 'Contact Us', href: 'https://bit.cloud/support', external: true },
    ],
  },
];
