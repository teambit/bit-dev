import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './section-group.module.scss';

export type SectionGroupProps = {
  /**
   * sections to render in the group. 
   */
  children?: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function SectionGroup({ children, className, ...rest }: SectionGroupProps) {
  return (
    <div className={classNames(styles.sectionGroup, className)} {...rest}>
      {children}
    </div>
  );
}
