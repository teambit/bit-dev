import React from 'react';
import { CollapsibleContent } from '@teambit/design.content.collapsible-content';
import cx from 'classnames';
import styles from './styles.module.scss';

export type ExpandCodeProps = {
  snippet: any;
  className?: string;
  codeType?: 'command' | 'snippet';
} & React.HTMLAttributes<HTMLDivElement>;

const title = {
  command: 'See full command options',
  snippet: 'See full code snippet',
};

export const ExpandCode = ({ snippet, className, codeType = 'command', ...rest }: ExpandCodeProps) => {
  const Snippet = snippet;
  return (
    <div className={cx(styles.collapsibleWrapper, className)} {...rest}>
      <CollapsibleContent
        // @ts-ignore
        title={<span>{title[codeType]}</span>}
        hoverEffect="text"
        content={<Snippet />}
        hasSeperator={false}
        className={styles.collapsible}
      />
    </div>
  );
};
