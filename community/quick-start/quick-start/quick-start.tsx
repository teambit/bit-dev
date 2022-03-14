import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type QuickStartQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function QuickStartQuickStart({ children }: QuickStartQuickStartProps) {
  const id = ComponentID.fromString('teambit.wiki/community/wiki-quick-start');
  const components = [
    'teambit.bit/quick-start',
    // 'teambit.',
    // 'teambit.react/templates/ui/heading',
    // 'teambit.react/templates/ui/text',
    // TODO: add node modules and react hooks
  ];

  return (
    <QuickStart name="quick-start-quick-start" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
