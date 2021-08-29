import React from 'react';
import { Logo } from '@teambit/design.ui.logo';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      
    </header>
  );
}
