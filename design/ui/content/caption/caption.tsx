import React, { ReactNode } from 'react';
import styles from './caption.module.scss';

export type CaptionProps = {
  /**
   * a text to be rendered in the caption.
   */
  children: ReactNode
};

export function Caption({ children }: CaptionProps) {
  return (
    <div className={styles.caption}>
      {children}
    </div>
  );
}
