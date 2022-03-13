import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type WikiQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WikiQuickStart({ children }: WikiQuickStartProps) {
  const id = ComponentID.fromString('teambit.wiki/apps/wiki@1.90.13');
  const components = [
    'teambit.wiki/sections/wiki@1.90.3',
    'teambit.wiki/blocks/header@0.0.40',
    'teambit.wiki/content/welcome@0.0.40',
    'teambit.wiki/blocks/footer@0.0.24',
  ];

  return (
    <QuickStart name="wiki" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
