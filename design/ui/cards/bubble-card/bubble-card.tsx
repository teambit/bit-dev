import React, { ReactNode } from 'react';
import { Card, CardProps } from '@teambit/design.ui.cards.card';
import styles from './bubble-card.module.scss';

export type BubbleCardProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode
} & CardProps;

export function BubbleCard({ children, ...rest }: BubbleCardProps) {
  return (
    <Card className={styles.bubbleCard} {...rest}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1937 1.83337C8.09096 4.06476 3.9981 8.17609 1.79077 13.2917" stroke={'#EDEDED'} strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {children}
    </Card>
  );
}
