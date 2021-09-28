import React from 'react';
import classNames from 'classnames';
import { ErrorPage } from '@teambit/design.ui.error-page';
import styles from './not-found.module.scss'; 

export type NotFoundProps = {
} & React.HTMLAttributes<HTMLDivElement>;

export function NotFound({ className, ...rest }: NotFoundProps) {
  return (
    <div className={classNames(styles.notFound, className)} {...rest}>
      <ErrorPage code={404} title="Lost in space..." />
    </div>
  );
}
