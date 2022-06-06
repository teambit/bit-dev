import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { BooksPage } from '@learn-bit-react/data-fetching.pages.books-page';
import { QuickStart } from '@teambit/bit.quick-start';
// import Ending from './ending.mdx';
import Intro from './intro.mdx';

export type DataFetchingQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DataFetchingQuickStart({ children }: DataFetchingQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('learn-bit-react.data-fetching/pages/books-page');
  const components = [
    {
      id: 'teambit.design/examples/sample-app',
      intro: (
        <div>
          As you start to build with components, remember - choosing the first component is an important step in the
          process. When choosing the first component, focus on choosing the most tangible component, the one you can
          ideally use now. In this case, wWe start with Building the design system app. To learn more about apps in Bit
          you can continue reading the Docs or skip to the Apps section.
        </div>
      ),
    },
    {
      id: 'teambit.design/ui/cards/card',
      intro: (
        <div>
          This is our basic card component. It displays any content of your choice - the designed card provides
          consistency and acts as a base component for various card variations.
        </div>
      ),
    },
    {
      id: 'teambit.design/ui/heading',
      intro: (
        <div>
          Another component to demonstrate our design system - This is our heading component, it has different sizes to
          choose from.
        </div>
      ),
    },
    {
      id: 'teambit.design/ui/buttons/button',
      intro: (
        <div>
          Another component to demonstrate our design system - This is our button component, with different styles to
          choose from.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/base-theme',
      intro: (
        <div>
          Base Theme is the standard scheme we use across our components - it can include colors, fonts, sizes, etc.
          This component contains a folder of design tokens which can be modified by designers. Developers can then see
          the changes directly in the compositions and use the tokens throughout their components via CSS variables or
          CSS in JS.
          <br />
          <br />
          This allows our independent components to agree on a mutual scheme, which decouples them from a specific
          design language, and allow them to be more flexible and reusable.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/light-theme',
      intro: (
        <div>
          Light theme implements the Base Theme color scheme with the light color scheme of Bit. The specific themes are
          created by overriding design-tokens from the Base Theme.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/dark-theme',
      intro: (
        <div>
          Dark theme implements the Base Theme color scheme with the dark color scheme of Bit. The specific themes are
          created by overriding design-tokens from the Base Theme.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/theme-toggler',
      intro: (
        <div>A theme switcher that toggles between a list of themes. It will immediately apply the selected theme.</div>
      ),
    },
  ];

  // const dashboard = Dashboard.__bit_component.id;
  return (
    <QuickStart
      intro={<Intro />}
      // ending={<Ending />}
      name="data-fetching"
      id={id}
      components={components}
      mainComponent={<BooksPage />}
    >
      {children}
    </QuickStart>
  );
}
