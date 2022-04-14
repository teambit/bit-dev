import React, { ReactNode } from 'react';
import { Welcome } from '@teambit/react.templates.pages.welcome';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';
import Intro from './intro.mdx';
import BeforeThinking from './before-thinking.mdx';

export type BasicReactProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BasicReact({ children }: BasicReactProps) {
  const id = ComponentID.fromString('teambit.react/templates/pages/welcome');
  const components = [
    {
      id: 'teambit.react/templates/pages/welcome',
      intro: (
        <div>
          Light theme implements the Base Theme color scheme with the light color scheme of Bit. The specific themes are
          created by overriding design-tokens from the Base Theme.
        </div>
      ),
    },
    {
      id: 'teambit.react/templates/ui/card',
      intro: (
        <div>
          Dark theme implements the Base Theme color scheme with the dark color scheme of Bit. The specific themes are
          created by overriding design-tokens from the Base Theme.
        </div>
      ),
    },
    {
      id: 'teambit.react/templates/ui/heading',
      intro: (
        <div>
          Dark theme implements the Base Theme color scheme with the dark color scheme of Bit. The specific themes are
          created by overriding design-tokens from the Base Theme.
        </div>
      ),
    },

    {
      id: 'teambit.react/templates/ui/text',
      intro: (
        <div>A theme switcher that toggles between a list of themes. It will immediately apply the selected theme.</div>
      ),
    },
    // TODO: add node modules and react hooks
  ];

  return (
    <QuickStart
      intro={<Intro />}
      beforeThinking={<BeforeThinking />}
      name="basic-react"
      id={id}
      components={components}
      mainComponent={<Welcome />}
    >
      {children}
    </QuickStart>
  );
}
