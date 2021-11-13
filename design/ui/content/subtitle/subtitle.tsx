import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './subtitle.module.scss';

export type SubtitleProps = {
  /**
   * a text to be rendered in the component.
   */
  children: ReactNode;

  /**
   * class names to apply.
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <p className={classNames(styles.subtitle, className)} {...rest}>
      {children}
    </p>
  );
}
