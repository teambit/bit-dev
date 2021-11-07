import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { Terminal } from '@teambit/community.ui.terminal';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';

export type ExtendabilityProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Extendability({}: ExtendabilityProps) {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="Extend anything" subtitle="Designed for extendability">
          
        </TopDown>
        <LeftRight title="Extend with components" text="Building with Bit is like building in a never ending Monorepo.">
          
        </LeftRight>
        {/* <LeftRight title="Extend" text="Scaling monolithic application in bound to cause inconsistencies and waste of time."> */}
          
        {/* </LeftRight> */}
        <LeftRight title="Over 500+ APIs available" text="Scale to infinite apps and features, maintained by autonomous teams">
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}
