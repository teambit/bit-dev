import React from 'react';
import classNames from 'classnames';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { ThemeToggler } from '@teambit/design.themes.theme-toggler';
import { Header as BaseHeader, HeaderProps as BaseHeaderProps } from '@teambit/design.blocks.header';
import { Toggler } from '@teambit/community.ui.community-highlighter';
import { headerContent } from './header-links';

import styles from './header.module.scss';

export type HeaderProps = {} & BaseHeaderProps;

const pluginsArray = [
  () => <GithubStars className={styles.githubLink} />,
  () => (
    <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
      <Icon of="slack" />
    </ExternalLink>
  ),
  Toggler,
  ThemeToggler,
];

export function Header({ className, plugins, ...rest }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <BaseHeader
        {...rest}
        className={classNames(styles.header, className)}
        menuLinks={headerContent}
        plugins={pluginsArray}
      />
    </div>
  );
}
