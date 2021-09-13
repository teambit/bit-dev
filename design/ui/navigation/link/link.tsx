import React from 'react';
import { Link as BaseLink, LinkProps } from '@teambit/base-react.navigation.link';
import styles from './link.module.scss';

export function Link(props: LinkProps) {
  return (
    <BaseLink className={styles.link} activeClassName={styles.active} {...props} />
  );
}
