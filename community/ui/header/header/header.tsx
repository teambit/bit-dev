import React, { useContext } from 'react';
import classNames from 'classnames';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Nav } from '@teambit/community.ui.header.nav';
import { Link } from 'react-router-dom';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Toggle } from '@teambit/design.ui.input.toggle';
import { SidebarContext } from '@teambit/design.ui.sidebar.sidebar-context';
import { IconButton } from '@teambit/design.ui.icon-button';
import styles from './header.module.scss';

export type HeaderProps = {
  highlighting?: boolean;
  setHighlighting?: (e: boolean) => void;
} & React.HTMLAttributes<HTMLElement>;

export function Header({ highlighting, setHighlighting, className, ...rest }: HeaderProps) {
  const sidebar = useContext(SidebarContext);

  function onToggleClick(e) {
    return setHighlighting?.(e.target.checked);
  }

  return (
    <header className={classNames(styles.header, className)} {...rest}>
      <WideColumn className={styles.headerContent}>
        <IconButton icon="more" onClick={sidebar.setIsOpen} className={styles.hamburgerButton} />
        <Link to="/">
          <Logo className={styles.logo} alt="bit-logo" />
        </Link>
        <Nav className={styles.nav}>
          <span className={styles.inspect}>Inspect</span>
          <Toggle onInputChanged={onToggleClick} checked={highlighting} />
        </Nav>
      </WideColumn>
    </header>
  );
}
