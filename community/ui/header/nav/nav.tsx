import React from 'react';
import classNames from 'classnames';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { NavLinks } from './nav-links';
import styles from './nav.module.scss';

export type NavProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Nav({ className, ...rest }: NavProps) {
  return (
    <div {...rest} className={classNames(styles.nav, className)}>
      <NavLinks links={headerContent} />
      <div className={styles.navRight}>
        <GithubStars />
        <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
          <Icon of="slack" />
        </ExternalLink>
        <Icon of="settings" />
      </div>
    </div>
  );
}

const headerContent = [
  {
    title: 'Docs',
    href: '/docs'
  },
  {
    title: 'Plugins',
    href: '/plugins'
  },
  {
    title: 'Learn',
    href: '/learn'
  },
  {
    title: 'bit.cloud',
    href: 'https://bit.cloud'
  }
];
