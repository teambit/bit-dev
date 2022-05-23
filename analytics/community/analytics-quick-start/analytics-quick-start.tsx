import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { Dashboard } from '@teambit/analytics.examples.dashboard';
import { QuickStart } from '@teambit/bit.quick-start';
import Ending from './ending.mdx';
import Intro from './intro.mdx';

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
    {
      id: 'teambit.analytics/examples/dashboard',
      intro: (
        <div>
          As you start to build with components, remember - choosing the first component is an important step in the
          process. When choosing the first component, focus on choosing the most tangible component, the one you can
          ideally use now. In this case, We start with a dashboard component, that shows a metric-card, bar-chart,
          line-chart, pie-chart and table components.
        </div>
      ),
    },
    {
      id: 'teambit.analytics/examples/new-users',
      intro: (
        <div>
          Now that we have a dashboard, we can start filling it with data-components. You can benefit from efficient
          collaboration by allowing different people or teams to create and maintain data components to your dashboard.
          Easily aligning whole teams into one dashboard. The first data component we are using is a bar chart tracking
          new users - managed by our community team.
        </div>
      ),
    },
    {
      id: 'teambit.analytics/examples/revenues',
      intro: (
        <div>
          The second data component we are using is a metric card, tracking our revenue - managed by the sales team.
        </div>
      ),
    },
    {
      id: 'teambit.analytics/examples/top-frameworks',
      intro: (
        <div>
          The third data component we are using is a pie chart component, tracking our top used frameworks - managed by
          the product team.
        </div>
      ),
    },
    {
      id: 'teambit.analytics/examples/top-members',
      intro: (
        <div>
          The last data component we are using is a table, following our top members - managed by the community team.
        </div>
      ),
    },
  ];

  // const dashboard = Dashboard.__bit_component.id;
  return (
    <QuickStart
      intro={<Intro />}
      ending={<Ending />}
      name="analytics"
      id={id}
      components={components}
      mainComponent={<Dashboard />}
    >
      {children}
    </QuickStart>
  );
}
