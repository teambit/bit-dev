import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { ComponentCardDisplay } from '@teambit/components.blocks.component-card-display';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { Terminal } from '@teambit/community.ui.terminal';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { envGraph } from './env-graph.mock';

export type StandardizationProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Standardization() {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="Create. Compose. Repeat." subtitle="Components are a form of collaboration" />
        <LeftRight
          title="Compose reusable dev environments"
          text="Compose your dev environment from your favorite dev tools and reuse it across components and teams."
        >
          {/* <BubbleGraph nodes={envGraph} /> */}
        </LeftRight>
        <ComponentCardDisplay
          componentIds={['teambit.react/react', 'teambit.angular/angular', 'teambit.harmony/node']}
        />

        <LeftRight
          title="Repeatable and simplified dev workflow"
          text="Structure a repeatable and a simplified dev workflow."
        >
          <Terminal content={devServicesText} />
        </LeftRight>
        <LeftRight
          title="Drive standards and best practices"
          text="Consistent tooling configuration, aimed for best practices all across"
        >
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}

const devServicesText = `$ bit compile
STATUS	COMPONENT ID
✔ SUCCESS	apps/bit-dev
✔ SUCCESS	content/packing-components
✔ SUCCESS	content/workspace-overview
✔ SUCCESS	ui/community-docs

✔ 4/4 components compiled successfully.
Finished. (2s)
`;
