import React from 'react';
import classNames from 'classnames';
import { Logo } from '@teambit/design.ui.logo';
import { Nav } from '@teambit/community.ui.header.nav';
import { Link } from 'react-router-dom';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={classNames(styles.header)}>
      <WideColumn className={styles.headerContent}>
        <Link to="/">
          <Logo className={styles.logo} alt="bit-logo" />
        </Link>
        <Nav />
      </WideColumn>
    </header>
  );
}
