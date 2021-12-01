import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { Link } from '@teambit/base-react.navigation.link';
import { Logo, LogoProps } from '@teambit/design.ui.brand.logo';
import { NavigationMenu, NavigationMenuProps, NavLinkType } from '@teambit/design.ui.navigation.menu';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';

import styles from './header.module.scss';

export type HeaderProps = {
  menuLinks?: NavLinkType[];
  Icon?: ComponentType<LogoProps>;
  Menu?: ComponentType<NavigationMenuProps>;
} & React.HTMLAttributes<HTMLElement>;

export function Header({ className, Menu = NavigationMenu, Icon = Logo, menuLinks, children, ...rest }: HeaderProps) {
  return (
    <header {...rest} className={classNames(styles.header, className)}>
      <WideColumn className={styles.headerContent}>
        <div className={styles.left}>
          <Link href="/">
            <Icon className={styles.logo} alt="bit-logo" />
          </Link>
          <Menu links={menuLinks} className={styles.linkMenu} />
        </div>
        <div>{children}</div>
      </WideColumn>
    </header>
  );
}
