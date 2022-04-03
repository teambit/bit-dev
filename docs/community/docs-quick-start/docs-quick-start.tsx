import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type DocsQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DocsQuickStart({ children }: DocsQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('teambit.docs/ui/community-docs');
  const components = [
    // TODO: app showcasing a design system.
    'teambit.docs/ui/community-docs',
    'teambit.docs/ui/docs',
    'teambit.docs/ui/sidebar',
    'teambit.docs/ui/pages/doc-page',
    // 'learn-bit-react.theming/themes/theme-provider',
    // 'learn-bit-react.theming/themes/light-theme',
    // 'learn-bit-react.theming/themes/dark-theme',
    // 'learn-bit-react.theming/themes/pink-theme',
  ];

  return (
    <QuickStart name="docs" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
