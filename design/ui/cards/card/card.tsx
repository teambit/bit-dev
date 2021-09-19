import React, { ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * children to be rendered within the card.
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...rest }: CardProps) {
  return (
    <div className={styles.card} {...rest}>
      {children}
    </div>
  );
}
