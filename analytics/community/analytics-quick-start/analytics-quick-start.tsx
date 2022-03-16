import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { Dashboard } from '@teambit/analytics.examples.dashboard';
import { QuickStart } from '@teambit/bit.quick-start';

export type AnalyticsQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AnalyticsQuickStart({ children }: AnalyticsQuickStartProps) {
  // TODO: app showcasing a design system.
  const id = ComponentID.fromString('teambit.analytics/examples/dashboard');
  const components = [
    // TODO: app showcasing a design system.
    'teambit.analytics/examples/dashboard',
    'teambit.analytics/examples/new-users',
    'teambit.analytics/examples/revenues',
    'teambit.analytics/examples/top-frameworks',
    'teambit.analytics/examples/top-members',
  ];

  // const dashboard = Dashboard.__bit_component.id;
  return (
    <QuickStart name="analytics" id={id} components={components} mainComponent={<Dashboard />}>
      {children}
    </QuickStart>
  );
}
