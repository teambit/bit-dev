import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { SampleApp } from '@teambit/design.examples.sample-app';
import { QuickStart } from '@teambit/bit.quick-start';
import Intro from './intro.mdx';
import BeforeThinking from './before-thinking.mdx';

export type DesignQuickStartProps = {
  /**
   * Add children
   */
  children?: ReactNode;
};

export function DesignQuickStart({ children }: DesignQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('teambit.design/examples/sample-app');
  const components = [
    {
      id: 'teambit.design/examples/sample-app',
      intro: <div>shth</div>,
    },
    {
      id: 'teambit.design/ui/cards/card',
      intro: (
        <div>
          This is our designed button. It uses the basic Button in Base React and extends it with the Bit language
          unique styling.
        </div>
      ),
    },
    {
      id: 'teambit.design/ui/heading',
      intro: (
        <div>
          This is our designed button. It uses the basic Button in Base React and extends it with the Bit language
          unique styling.
        </div>
      ),
    },
    {
      id: 'teambit.design/themes/theme-toggler',
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
      id: 'teambit.design/themes/light-theme',
      intro: <div>Light theme implements the Base Theme color scheme with the light color scheme of Bit.</div>,
    },
    {
      id: 'teambit.design/themes/dark-theme',
      intro: <div>Dark theme implements the Base Theme color scheme with the light color scheme of Bit.</div>,
    },
  ];

  return (
    <QuickStart
      intro={<Intro />}
      beforeThinking={<BeforeThinking />}
      name="design"
      id={id}
      components={components}
      mainComponent={<SampleApp />}
    >
      {children}
    </QuickStart>
  );
}
