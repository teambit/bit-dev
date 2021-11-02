import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CliSnippet } from '@teambit/design.ui.cli-snippet';
import type { CliSnippetProps } from '@teambit/design.ui.cli-snippet';
import styles from './terminal.module.scss';

export type TerminalProps = {
  /**
   * Determine whether to animate the output.
   */
  animate?: boolean;

  /**
   * The delay between each key when typing.
   */
  delay?: number;

  /**
   * Whether to keep looping or not.
   */
  loop?: boolean;
} & CliSnippetProps;

export function Terminal({ animate = false, delay = 140, loop = false, content, className }: TerminalProps) {
  const [text, setText] = useState(animate ? '' : content);

  useEffect(() => {
    if (animate) {
      const timer = setInterval(() => {
        setText((prevText) => {
          const newText = content.substring(0, prevText.length + 1);
          if (content.length === newText.length) {
            if (loop) return '';
            clearInterval(timer);
          }
          return newText;
        });
      }, delay);
      return () => clearInterval(timer);
    }
  }, []);

  return <CliSnippet className={classNames(styles.terminal, className)} content={text} />;
}
