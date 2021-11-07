import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { Terminal } from '@teambit/community.ui.terminal';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';

export type AutonomyProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Autonomy({}: AutonomyProps) {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown 
          title="Team and development autonomy" 
          subtitle="Components are a form of collaboration"
        >
          
        </TopDown>
        <LeftRight 
          title="Decoupled codebases" 
          text="Get every team with a decoupled codebase."
        >
          
        </LeftRight>
        <LeftRight 
          title="Independent delivery" 
          text="Empower teams to independently deliver features and APIs"
        >
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>

        <LeftRight 
          title="Components that never break" 
          text="Never break from component changes made by others"
        >
          
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}
