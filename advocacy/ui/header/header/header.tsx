import React from 'react';
import { Logo } from '@teambit/design.ui.logo';
import { Nav } from '@teambit/advocacy.ui.header.nav';
import classNames from 'classnames';
import styles from './header.module.scss';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';

export function Header() {
  return (
    <header className={classNames(styles.header)}>
      <WideColumn>
        <Logo />
      </WideColumn>
    </header>
  );
}
