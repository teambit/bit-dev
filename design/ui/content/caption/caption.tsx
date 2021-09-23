import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './caption.module.scss';

export type CaptionProps = {
  /**
   * a text to be rendered in the caption.
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function Caption({ children, className, ...rest }: CaptionProps) {
  return (
    <div {...rest} className={classNames(styles.caption, className)}>
      {children}
    </div>
  );
}
