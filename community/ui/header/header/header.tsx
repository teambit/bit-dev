import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { Header as BaseHeader } from '@teambit/design.blocks.header';

import styles from './header.module.scss';

export type HeaderProps = {
  plugins?: ComponentType[];
} & React.HTMLAttributes<HTMLElement>;

export function Header({ className, plugins, ...rest }: HeaderProps) {
  return (
    <BaseHeader className={classNames(className)} menuLinks={headerContent} {...rest}>
      <div className={styles.right}>
        {plugins?.map((Plugin, index) => (
          <Plugin key={index} />
        ))}
      </div>
    </BaseHeader>
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
