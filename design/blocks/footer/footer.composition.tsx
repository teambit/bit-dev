import React from 'react';
import { Footer } from './footer';

export const BasicFooter = () => (
  <Footer
    data-testid="footer"
    categoryList={[
      {
        title: 'links with icons',
        links: [
          {
            icon: 'https://static.bit.dev/bit-logo.svg',
            text: 'Bit',
            href: 'https://bit.dev',
            external: true,
          },
          {
            icon: 'slack',
            text: 'Slack',
            href: 'https://bit.dev',
            external: true,
          },
          { icon: 'twitter-logo', text: 'Twitter', href: '#' },
          { icon: 'github-logo', text: 'Github', href: '#' },
        ],
      },
      {
        title: 'links without icons',
        links: [
          {
            text: 'Bit',
            href: 'https://bit.dev',
            external: true,
          },
          {
            text: 'Slack',
            href: 'https://bit.dev',
            external: true,
          },
          {
            text: 'Twitter',
            href: '#',
          },
          { text: 'Github', href: '#' },
        ],
      },
    ]}
  />
);
