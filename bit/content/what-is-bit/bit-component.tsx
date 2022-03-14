import React from 'react';
import { Logo } from '@teambit/design.ui.brand.logo';
import styles from './what-is-bit.module.scss';

export const bitComponent = [
  {
    id: 'teambit.bit/bit',
    href: `https://bit.dev/teambit/harmony/bit`,
    description: 'Bit is an open-source component for composing component driven software',
    envIcon: 'https://static.bit.dev/extensions-icons/default.svg',
    preview: (
      <div className={styles.logo}>
        <Logo customSize={64} />
      </div>
    ),
  },
];
