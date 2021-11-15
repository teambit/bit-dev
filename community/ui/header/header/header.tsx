import React from 'react';
import classNames from 'classnames';
import { Link, Route } from 'react-router-dom';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Nav, NavLinks } from '@teambit/community.ui.header.nav';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Toggle } from '@teambit/design.ui.input.toggle';
import { useSidebar } from '@teambit/design.ui.sidebar.sidebar-context';
import { IconButton } from '@teambit/design.ui.icon-button';
import styles from './header.module.scss';

export type HeaderProps = {
  highlighting?: boolean;
  setHighlighting?: (e: boolean) => void;
} & React.HTMLAttributes<HTMLElement>;

export function Header({ highlighting, setHighlighting, className, ...rest }: HeaderProps) {
  const sidebar = useSidebar();

  function onToggleClick(e) {
    return setHighlighting?.(e.target.checked);
  }

  return (
    <header className={classNames(styles.header, className)} {...rest}>
      <WideColumn className={styles.headerContent}>
        <Route path={['/docs', '/guides']}>
          <IconButton icon="hamburger" onClick={sidebar.setIsOpen} size={null} className={styles.hamburgerButton} />
        </Route>
        <Link to="/">
          <Logo className={styles.logo} alt="bit-logo" />
        </Link>
        <Nav className={styles.nav}>
          {/* desktop link view - consider using css grid to handle NavLinks position change in all res */}
          <NavLinks links={headerContent} className={styles.linkList} />
        </Nav>
        <div className={styles.inspect}>
          <span>Inspect</span>
          <Toggle onInputChanged={onToggleClick} checked={highlighting} />
        </div>
      </WideColumn>
      {/* small res link view */}
      <NavLinks links={headerContent} className={styles.mobileLinkList} />
    </header>
  );
}

const headerContent = [
  {
    title: 'Docs',
    href: '/docs',
  },
  {
    title: 'Guides',
    href: '/guides',
  },
  {
    title: 'Plugins',
    href: '/plugins',
  },
  {
    title: 'bit.cloud',
    href: 'https://bit.cloud',
  },
];
