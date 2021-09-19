import React from 'react';
import { ComponentID } from '@teambit/component-id'
import { Image } from '@teambit/base-react.content.image';
import classNames from 'classnames';
import styles from './bubble.module.scss';

export type BubbleProps = {
  /**
   * icon to show off.
   */
  icon?: string,

  /**
   * Component ID.
   */
  componentId?: ComponentID,

  /**
   * forces the component to be in active state. 
   */
  forceActive?: boolean,

  /**
   * classname to inject the element.
   */
  className?: string,

  /**
   * color of the bubble
   */
  color?: string
} & React.HTMLAttributes<HTMLDivElement>;

export function Bubble({ className, icon, forceActive, color = '#EDEDED', ...rest }: BubbleProps) {
  return (
    <div className={classNames(styles.bubble, className, forceActive ? styles.active : '')} {...rest}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1937 1.83337C8.09096 4.06476 3.9981 8.17609 1.79077 13.2917" stroke={color} stroke-width="2" stroke-linecap="round"/>
      </svg>
      {icon ? <Image src={icon} className={styles.icon} /> : ''}
    </div>
  );
}
