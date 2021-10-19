import React from 'react';
import classNames from 'classnames';
import { CliSnippet } from '@teambit/design.ui.cli-snippet';
import styles from './terminal.module.scss';

export type TerminalProps = {
  /**
   * terminal content to output. 
   */
  children: string,

  /**
   * determine whether to animate the output.
   */
  animate?: boolean,
} & React.HTMLAttributes<HTMLDivElement>;

export function Terminal({ children, animate, className }: TerminalProps) {
  return (
    <CliSnippet 
      className={classNames(animate ? styles.animate : '', className)} 
      content={children} 
    />
  );
}
