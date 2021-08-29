import React from 'react';
import classNames from 'classnames';
import {Icon} from "@teambit/design.elements.icon";
import {GithubStars} from '@teambit/advocacy.ui.github-stars';
import {NavLinks} from './nav-links';
import styles from './nav.module.scss';

export type NavProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Nav({className, ...rest}: NavProps) {
  return (
    <div {...rest} className={classNames(styles.nav, className)}>
      <NavLinks links={headerContent} />
      <div className={styles.navRight}>
        <GithubStars />
        <Icon of="slack" />
        <Icon of="settings" />
      </div>
    </div>
  );
}

const headerContent = [
  {
    title: 'Docs',
    links: [
      {
        text: 'Docs',
        href: 'bla'
      }
    ]
  },
  {
    title: 'Aspects',
    links: [
      {
        text: 'Aspects',
        href: 'bla'
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Resources',
        href: 'bla'
      }
    ]
  },
  {
    title: 'Tutorials',
    links: [
      {
        text: 'Tutorials',
        href: 'bla'
      }
    ]
  }
]