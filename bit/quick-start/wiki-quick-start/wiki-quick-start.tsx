import React, { ReactNode } from 'react';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { ComponentID } from '@teambit/component-id';
import { WikiApp } from '@teambit/wiki.apps.wiki';
import { QuickStart } from '@teambit/bit.quick-start';
import styles from './wiki-quick-start.module.scss';
// import Ending from './ending.mdx';
import Intro from './intro.mdx';
// import BeforeThinking from './before-thinking.mdx';

export type WikiQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WikiQuickStart({ children }: WikiQuickStartProps) {
  const id = ComponentID.fromString('teambit.wiki/apps/wiki');
  const components = [
    {
      id: 'teambit.wiki/apps/wiki',
      intro: (
        <div>
          We start with Building the Wiki-app. This will use other components to add the functionality and content. To
          learn more about apps in Bit you can continue reading the Docs or skip to the Apps section.
          <br />
          <br />
          First, make sure to install react-router-dom in your workspace.
          <CodeSnippet>bit install react-router-dom@^6.0.0</CodeSnippet>
        </div>
      ),
    },
    {
      id: 'teambit.wiki/sections/wiki',
      intro:
        'After adding the App to our workspace (either by using fork or create), we are now adding the wiki component. Our App will use the wiki component to get all the functionality it needs.',
    },
    {
      id: 'teambit.wiki/blocks/header',
      intro:
        'Now we have the functionality we need, but we would also like some structure to the page, so we are adding a header and footer component. Starting with the header:',
    },
    {
      id: 'teambit.wiki/blocks/footer',
      intro:
        'And now we add the footer! You can choose to skip this component and you will still have a working app, with only a header.',
    },
    {
      id: 'teambit.wiki/content/welcome',
      intro:
        "It's time to add some content to this Wiki! Here is an example of a content component. You can ask your whole team to contribute to the content by creating their own content components. See next section on how to collaborate with Bit!",
    },
  ];

  return (
    <QuickStart
      intro={<Intro />}
      // ending={<Ending />}
      // beforeThinking={<BeforeThinking />}
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
