import { Category, CategoryProps } from '@teambit/community.ui.footer.category';

export const footerMock: CategoryProps[] = [
    {
    title: 'Follow Us',
    links: [
        { icon: 'https://static.bit.dev/bit-logo.svg', text: 'Bit', href: 'https://bit.dev', external: true },
        { icon: 'slack', text: 'Slack', href: 'https://bit.dev', external: true },
        { icon: 'twitter-logo', text: 'Twitter', href: '#' },
        { icon: 'github-logo', text: 'Github', href: '#' },
      ],
  },
    {
    title: 'Open Source',
    links: [
        { text: 'Docs', href: '#' },
        { text: 'Getting Started', href: '#' },
        { text: 'Tutorials', href: '#' },
        { text: 'Discussions', href: '#' },
      ],
  },
    {
    title: 'Bit Cloud',
    links: [
        { text: 'Features', href: '#' },
        { text: 'Contact Sales', href: '#' },
        { text: 'Tutorials', href: '#' },
        { text: 'Use Cases', href: '#' },
      ],
  },
    {
    title: 'Community',
    links: [
        { text: 'Contributing', href: '#' },
        { text: 'Streams', href: '#' },
        { text: 'Events', href: '#' },
        { text: 'Security', href: '#' },
      ],
  },
    {
    title: 'Company',
    links: [
        { text: 'About Us', href: '#' },
        { text: 'Contact Us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
      ],
  },
];
  