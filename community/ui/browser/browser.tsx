import React from 'react';
import classNames from 'classnames';
import topBar from './top-bar.svg';
import styles from './browser.module.scss';

export type BrowserProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Browser({ className, children }: BrowserProps) {
  return (
    <div className={classNames(styles.browser, className)}>
      <img src={topBar} width="100%" alt="browser" />
      {children}
    </div>
  );
}
