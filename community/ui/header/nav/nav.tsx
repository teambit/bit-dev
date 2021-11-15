import React from 'react';
import classNames from 'classnames';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';
import styles from './nav.module.scss';

export type NavProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Nav({ className, children, ...rest }: NavProps) {
  return (
    <div {...rest} className={classNames(styles.nav, className)}>
      {children}
      <div className={styles.navRight}>
        <GithubStars className={styles.githubLink} />
        <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
          <Icon of="slack" />
        </ExternalLink>
      </div>
    </div>
  );
}
