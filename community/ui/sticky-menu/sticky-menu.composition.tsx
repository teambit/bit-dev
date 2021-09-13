import React from 'react';
import { StickyMenu } from './sticky-menu';

export const BasicStickyMenu = () => (
  <StickyMenu
    links={[
      {
        href: '#compose',
        text: 'Compose'
      },
      {
        href: '#collaborate',
        text: 'Collaborate'
      },
      {
        href: '#release',
        text: 'Release'
      },
      {
        href: '#Standardize',
        text: 'Standardize'
      },
      {
        href: '#extend',
        text: 'Extend'
      }
    ]}
  />
);
