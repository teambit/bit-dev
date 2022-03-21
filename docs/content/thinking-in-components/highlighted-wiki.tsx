import React from 'react';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { WikiApp } from '@teambit/wiki.apps.wiki';
import { BubbleHighlighter } from '@teambit/community.ui.bubble-highlighter';
// import { ExcludeHighlighter } from '@teambit/react.ui.component-highlighter';
import { ComponentID } from '@teambit/component-id';
import styles from './thinking-in-components.module.scss';

export type ComponentThinkingProps = {
  highlight?: string[];
};

export function HighlightedWiki() {
  return (
    <BubbleHighlighter componentId={ComponentID.fromString('teambit.wiki/apps/wiki')} showId>
      <UNSAFE_LocationContext.Provider value={null as any}>
        <MemoryRouter>
          <div className={styles.wiki}>
            <WikiApp />
          </div>
        </MemoryRouter>
      </UNSAFE_LocationContext.Provider>
    </BubbleHighlighter>
  );
}

export function HighlightComponent() {
  
}
