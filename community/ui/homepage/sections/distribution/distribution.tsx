import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { scaleGraph } from './scale-graph';

export type DistributionProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Distribution({}: DistributionProps) {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="Limitless Distribution" subtitle="Distribution drives better software. Do more, work less">
          dasdsa
        </TopDown>
        <LeftRight title="Build independent components" text="Every component is independently developed, versioned and built.">
          <BubbleGraph nodes={scaleGraph} />
        </LeftRight>
        <LeftRight title="Compose with dependencies" text="Scaling monolithic application in bound to cause inconsistencies and waste of time.">
          <BubbleGraph nodes={scaleGraph} />
        </LeftRight>
        <LeftRight title="Drive speed, consistency and scale" text="Scale to infinite apps and features, maintained by autonomous teams">
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}
