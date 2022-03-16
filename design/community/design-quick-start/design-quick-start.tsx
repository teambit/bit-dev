import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';
import { DesignLanguage } from '@teambit/design.design-language';

export type DesignQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DesignQuickStart({ children }: DesignQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('teambit.design/design-language');
  const components = [
    // TODO: app showcasing a design system.
    {
      id: 'teambit.design/themes/base-theme',
      intro: (
        <p>
          Base Theme is the the standard color and typography scheme we use across our components. This allows our
          independent components to agree on a mutual scheme, which decouples them from a specific design language.
          <br />
          Agreeing on color scheme also help delegate management over Themes to designer teams.
        </p>
      ),
    },
    {
      id: 'teambit.design/ui/buttons/button',
      intro: (
        <div>
          This is our designed button. It uses the basic Button in Base React and extends it with the Bit language
          unique styling.
        </div>
      ),
    },
    {
      id: 'teambit.base-react/buttons/button',
      intro: (
        <div>
          This is the base Button who use all across our designs. It provides basic features choosing the element and
          handling w3c compliance, accessability and standards.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/light-theme',
      intro: <div>Light theme implements the Base Theme color scheme with the light color scheme of Bit.</div>,
    },
    {
      id: 'teambit.design/themes/dark-theme',
      intro: <div>Dark theme implements the Base Theme color scheme with the light color scheme of Bit.</div>,
    },
  ];

  return (
    <QuickStart name="design" id={id} components={components} mainComponent={<DesignLanguage />}>
      {children}
    </QuickStart>
  );
}
