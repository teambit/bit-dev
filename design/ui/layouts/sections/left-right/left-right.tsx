import React, { ReactNode } from 'react';
import styles from './left-right.module.scss';

export type LeftRightProps = {
  /**
   * component to render on the left side of the layout.
   */
  left: ReactNode,

  /**
   * component to render on the right side of the layout.
   */
  right: ReactNode
} & React.HTMLAttributes<HTMLElement>;

export function LeftRight({ left, right, ...rest }: LeftRightProps) {
  return (
    <section className={styles.leftRight} {...rest}>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </section>
  );
}
