import React, { ReactNode } from 'react';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { ComponentID } from '@teambit/component-id';
import { WikiApp } from '@teambit/wiki.apps.wiki';
import { QuickStart } from '@teambit/bit.quick-start';
import styles from './wiki-quick-start.module.scss';

export type WikiQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WikiQuickStart({ children }: WikiQuickStartProps) {
  const id = ComponentID.fromString('teambit.wiki/apps/wiki@1.90.13');
  const components = [
    {
      id: 'teambit.wiki/apps/wiki@1.90.13',
      intro: (
        <div>
          First, make sure to install react-router and react-router-dom in your workspace.
          <CodeSnippet>bit install react-router react-router-dom</CodeSnippet>
        </div>
      ),
    },
    'teambit.wiki/sections/wiki@1.90.3',
    'teambit.wiki/blocks/header@0.0.40',
    'teambit.wiki/blocks/footer@0.0.24',
    'teambit.wiki/content/welcome@0.0.40',
  ];

  return (
    <QuickStart
      name="wiki"
      id={id}
      components={components}
      mainComponent={
        <UNSAFE_LocationContext.Provider value={null as any}>
          <MemoryRouter>
            <div className={styles.wiki}>
              <NavigationProvider implementation={reactRouterAdapter}>
                <WikiApp />
              </NavigationProvider>
            </div>
          </MemoryRouter>
        </UNSAFE_LocationContext.Provider>
      }
    >
      {children}
    </QuickStart>
  );
}
