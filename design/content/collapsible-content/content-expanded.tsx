import React from 'react';
// @ts-ignore
import styles from './styles.module.scss';

export type ContentExpandedProps = {
  showDetails: boolean;
  content: string | React.ReactNode;
};

export function ContentExpanded({ showDetails, content }: ContentExpandedProps) {
  if (!showDetails) return null;
  return <div className={styles.inRow}>{content}</div>;
}
