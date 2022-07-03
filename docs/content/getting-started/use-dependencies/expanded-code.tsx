import React from 'react';
import { CollapsibleContent } from '@teambit/design.content.collapsible-content';
import CodeExample from './code-example.mdx';
import styles from './styles.module.scss';

export const ExpandedCode = () => (
  <div className={styles.collapsibleWrapper}>
    <CollapsibleContent
      title={<span>See full code snippet</span>}
      content={<CodeExample />}
      hasSeperator={false}
      style={{ paddingTop: 0 }}
      className={styles.collapsible}
    />
  </div>
);
