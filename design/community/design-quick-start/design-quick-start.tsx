import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type DesignQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DesignQuickStart({ children }: DesignQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('learn-bit-react.theming/example/button');
  const components = [
    // TODO: app showcasing a design system.
    'learn-bit-react.theming/example/button',
    'learn-bit-react.theming/themes/theme-provider',
    'learn-bit-react.theming/themes/light-theme',
    'learn-bit-react.theming/themes/dark-theme',
    'learn-bit-react.theming/themes/pink-theme',
  ];

  return (
    <QuickStart name="design" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
