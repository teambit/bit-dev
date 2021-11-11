import { Category, CategoryProps } from '@teambit/community.ui.footer.category';

export const footerMock: CategoryProps[] = [
  {
    title: 'Follow Us',
    links: [
      { icon: 'https://static.bit.dev/bit-logo.svg', text: 'Bit', href: 'https://bit.dev', external: true },
      { icon: 'youtube-logo', text: 'YouTube', href: 'https://bit.dev', external: true },
      { icon: 'twitter-logo', text: 'Twitter', href: '#' },
      { icon: 'github-logo', text: 'Github', href: '#' },
    ],
  },
  {
    title: 'Open Source',
    links: [
      { text: 'Docs', href: '#' },
      { text: 'Getting Started', href: '#' },
      { text: 'Contributing', href: '/docs/contributing-docs' },
      { text: 'Discussions', href: '#' },
    ],
  },
  {
    title: 'Bit Cloud',
    links: [
      { text: 'Platform', href: '#' },
      { text: 'Enterprise', href: '#' },
      { text: 'Book a demo', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { text: 'Videos', href: '#' },
      { text: 'Streams', href: '#' },
      { text: 'Events', href: '#' },
    ],
  },
  {
    title: 'Get help',
    links: [
      { icon: 'slack', text: 'Slack', href: 'https://bit.dev', external: true },
      { text: 'Issues', href: '#' },
      { text: 'Support', href: '#' },
    ],
  },
];
