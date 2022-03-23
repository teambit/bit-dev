import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * children to be rendered within the card.
   */
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={classNames(styles.card, className)} {...rest}>
      {children}
    </div>
  );
}
