import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type AnalyticsQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AnalyticsQuickStart({ children }: AnalyticsQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('teambit.blog/starter/starter-blog');
  const components = [
    // TODO: app showcasing a design system.
    'teambit.analytics/starter/starter-blog',
    'teambit.blog/blog',
    'teambit.blog/pages/lobby',
    'teambit.blog/pages/blog-post',
  ];

  return (
    <QuickStart name="blog" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
