import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
// import { DependencyGraphExample } from '@teambit/component.ui.graph.dependencies-graph/dist/dependency-graph.compositions';
import { Terminal } from '@teambit/community.ui.terminal';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { Browser } from '@teambit/community.ui.browser';

export type CollaborationProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Collaboration({}: CollaborationProps) {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="No more repo boundaries" subtitle="Building with Bit is like building in a never ending Monorepo.">
          {/* <DependencyGraphExample /> */}
        </TopDown>
        <LeftRight 
          title="Host and share components in Scopes" 
          text="Host components with a common responsibility in a remote scope, making them available for everyone to discover, use, and collaborate on."
        >
          <Browser>
          </Browser>
        </LeftRight>
        <LeftRight 
          title="Use any component, anywhere" 
          text="Every component can be used as a dependency in other components so you can build with everything that’s been built before."
        >
        </LeftRight>
          
        <LeftRight 
          title="Contribute components and changes" 
          text="Enjoy a simple and scalable contribution model where anyone can suggest changes to components without cloning projects or having to switch contexts"
        >
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>
        <LeftRight title="Collaborate on component updates" text="Drive component changes across scopes, teams and application">
          
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}
