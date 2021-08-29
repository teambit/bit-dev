import React from 'react';
import { Logo } from '@teambit/design.ui.logo';
import { Nav } from '@teambit/advocacy.ui.header.nav';
import classNames from 'classnames';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={classNames(styles.header)}>
      <WideColumn className={styles.headerContent}>
        <Logo className={styles.logo} alt="bit-logo" />
        <Nav />
      </WideColumn>
    </header>
  );
}
