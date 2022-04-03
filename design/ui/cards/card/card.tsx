/* eslint-disable react/prop-types */
import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * children to be rendered within the card.
   */
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function CardWithRef(props, ref) {
  return (
    <div ref={ref} className={classNames(styles.card, props.className)} {...props}>
      {props.children}
    </div>
  );
});
