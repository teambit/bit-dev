import React, { ReactNode, useState } from 'react';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import styles from './community-highlighter.module.scss';

export type CommunityHighlighterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function CommunityHighlighter({ children }: CommunityHighlighterProps) {
  // const [disabled, setDisabled] = useState();

  return (
    <ComponentHighlighter
      classes={{ label: styles.label, frame: styles.frame }}
      placement="top"
      style={{ border: 'none' }}
      disabled
    >
      {children}
    </ComponentHighlighter>
  );
}
