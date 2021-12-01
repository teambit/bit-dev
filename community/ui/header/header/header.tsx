import React from 'react';
import classNames from 'classnames';
import { Header as BaseHeader } from '@teambit/design.blocks.header';
import { Icon } from '@teambit/design.elements.icon';
import { GithubStars } from '@teambit/community.ui.github-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';

import { Toggle } from '@teambit/design.ui.input.toggle';

import styles from './header.module.scss';

export type HeaderProps = {
  highlighting?: boolean;
  setHighlighting?: (e: boolean) => void;
} & React.HTMLAttributes<HTMLElement>;

export function Header({ highlighting, setHighlighting, className, ...rest }: HeaderProps) {
  // const sidebar = useSidebar();

  function onToggleClick(e) {
    return setHighlighting?.(e.target.checked);
  }

  return (
    <BaseHeader className={classNames(className)} menuLinks={headerContent} {...rest}>
      <div className={styles.navRight}>
        <GithubStars className={styles.githubLink} />
        <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
          <Icon of="slack" />
        </ExternalLink>
        <div className={styles.inspect}>
          <span>Inspect</span>
          <Toggle onInputChanged={onToggleClick} checked={highlighting} />
        </div>
      </div>
    </BaseHeader>
  );
}

// function Plugins({ onToggleClick, highlighting }) {
//   return (
//     <div className={styles.navRight}>
//       <GithubStars className={styles.githubLink} />
//       <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w">
//         <Icon of="slack" />
//       </ExternalLink>
//       <div className={styles.inspect}>
//         <span>Inspect</span>
//         <Toggle onInputChanged={onToggleClick} checked={highlighting} />
//       </div>
//     </div>
//   );
// }

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
