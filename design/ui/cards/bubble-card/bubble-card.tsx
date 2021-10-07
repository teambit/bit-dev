import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Card, CardProps } from '@teambit/design.ui.cards.card';
import styles from './bubble-card.module.scss';

export type BubbleCardProps = {
  /**
   * children
   */
  children?: ReactNode;

  /**
   * class name to be added to the card.
   */
  className?: string;
  /**
   * svg corder
   */
  CornerSvg?: string;

  /**
   * override corner svg size
   */
   cornerSvgSize?: number;

  /**
   * override corner svg position. [height, wi]
   */
   cornerSvgClassName?: string;
} & CardProps;

export function BubbleCard({
  children,
  className,
  CornerSvg,
  cornerSvgSize = 15,
  cornerSvgClassName,
  ...rest
}: BubbleCardProps) {
  return (
    <Card className={classNames(styles.bubbleCard, className)} {...rest}>
      {CornerSvg ? (
        <CornerSvg />
      ) : (
        <svg
          width={cornerSvgSize}
          height={cornerSvgSize}
          className={cornerSvgClassName}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1937 1.83337C8.09096 4.06476 3.9981 8.17609 1.79077 13.2917"
            stroke={'#EDEDED'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {children}
    </Card>
  );
}
