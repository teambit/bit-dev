import React, { useEffect } from 'react';
import classNames from 'classnames';
import { H3, Sizes } from '@teambit/documenter.ui.heading';
import { Anchor } from '@teambit/documenter.ui.anchor';
import styles from './linked-heading.module.scss';

export type { Sizes } from '@teambit/documenter.ui.heading';
export type LinkedHeadingProps = {
  /**
   * title string
   */
  children: React.ReactNode;

  /**
   * anchor link to section
   */
  link?: string;

  /**
   * font size override for title string [optional]
   */
  size?: Sizes;

  /**
   * class name to attach.
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * section heading with anchor link
 */
export function LinkedHeading({ children, link, size, className, ...rest }: LinkedHeadingProps) {
  return (
    <div className={classNames(styles.linkedHeading, className)} {...rest}>
      <H3 className={styles.heading} size={size || 'sm'} id={link}>
        {children}
      </H3>
      {link && <Anchor className={styles.anchor} href={link}></Anchor>}
    </div>
  );
}
