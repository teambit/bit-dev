import React from 'react';
import classNames from 'classnames';
import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { Toggle } from '@teambit/design.ui.input.toggle';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { Header as BaseHeader, HeaderProps as BaseHeaderProps } from '@teambit/design.blocks.header';

import styles from './header.module.scss';

export type HeaderProps = {} & BaseHeaderProps;

export function Header({ className, plugins, ...rest }: HeaderProps) {
  const [highlighting, setHighlighting] = useLocalStorage('highlighting', true);

  function onToggleClick(e) {
    return setHighlighting?.(e.target.checked);
  }
  return (
    <BaseHeader
      {...rest}
      className={classNames(className)}
      menuLinks={headerContent}
      plugins={[
        () => <GithubStars className={styles.githubLink} />,
        () => (
          <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
            <Icon of="slack" />
          </ExternalLink>
        ),
        () => (
          <div className={styles.inspect}>
            <span>Inspect</span>
            <Toggle onInputChanged={onToggleClick} checked={highlighting} />
          </div>
        ),
      ]}
    />
  );
}

const headerContent = [
  {
    title: 'Docs',
    href: '/docs',
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
