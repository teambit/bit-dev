import React, { ReactNode } from 'react';
import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { useIsMobile } from '@teambit/ui-foundation.ui.hooks.use-is-mobile';
import { CommunityHighlighterContext } from './community-highlighter-context';
import styles from './community-highlighter.module.scss';

export type CommunityHighlighterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function CommunityHighlighter({ children }: CommunityHighlighterProps) {
  const [disabled, setDisabled] = useLocalStorage('disabled', false);

  const isMobile = useIsMobile();

  return (
    <CommunityHighlighterContext.Provider value={{ disabled, setDisabled }}>
      <ComponentHighlighter
        className={styles.highlighter}
        placement={isMobile ? 'bottom' : 'top'}
        highlightStyle={{ fontSize: 14 }}
        disabled={disabled}
      >
        {children}
      </ComponentHighlighter>
    </CommunityHighlighterContext.Provider>
  );
}
