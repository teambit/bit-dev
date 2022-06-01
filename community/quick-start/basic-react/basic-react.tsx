import React, { ReactNode } from 'react';
import { Welcome } from '@teambit/react.templates.pages.welcome';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';
import Ending from './ending.mdx';
import Intro from './intro.mdx';

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
      intro:
        'As you start to build with components, remember - Choosing the first component is an important step in the process! When choosing the first component, focus on choosing the most tangible component, the one you can ideally use now. In this example - we want a page where we can display some cards with texts and links, so we start with the page itself.',
    },
    {
      id: 'teambit.react/templates/ui/card',
      intro:
        'A simple linkable card-component, that renders a Heading, Text, and a CopyBox. We will use these to display links and texts as seen in the example above. These cards hold the (flexible) content you chose to add to your welcome page.',
    },
    {
      id: 'teambit.react/templates/ui/heading',
      intro:
        'Now we bring in the Heading component, which will allow us to add headings to the cards we just added. This Heading component renders a heading with customizable element-size prop, to chose the heading size.',
    },
    {
      id: 'teambit.react/templates/ui/text',
      intro:
        'The final component of our example is the text, which we add by using this simple text component.',
    },

    // TODO: add node modules and react hooks
  ];

  return (
    <QuickStart
      intro={<Intro />}
      ending={<Ending />}
      name="basic-react"
      id={id}
      components={components}
      mainComponent={<Welcome />}
    >
      {children}
    </QuickStart>
  );
}
