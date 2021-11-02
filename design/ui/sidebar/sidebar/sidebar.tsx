import React from 'react';
import classNames from 'classnames';
import styles from './sidebar.module.scss';

export type SidebarProps = {
  toggle?: () => void;
  isOpen?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function Sidebar({ toggle, isOpen, className, children, ...rest }: SidebarProps) {
  return (
    <div {...rest} className={classNames(styles.sidebar, isOpen && styles.open, className)}>
      <div className={styles.overlay} onClick={toggle} role="none" />
      <div className={classNames(styles.sidebarContent, !isOpen && styles.closed)}>{children}</div>
    </div>
  );
}
