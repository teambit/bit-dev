import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { Terminal } from '@teambit/community.ui.terminal';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { scaleGraph } from './scale-graph';
import styles from './distribution.module.scss';

export type DistributionProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Distribution() {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="Limitless distribution" subtitle="Distribution drives better software. Do more, work less">
          <Terminal animate={false} content={terminalText} className={styles.terminal} />
        </TopDown>
        <LeftRight
          title="Build independent components"
          text="Every component is independently developed, versioned and built."
        >
          {/* <BubbleGraph nodes={scaleGraph} /> */}
          <ComponentCard id="teambit.community/ui/docs" />
        </LeftRight>
        <LeftRight
          title="Compose with dependencies"
          text="Scaling monolithic application in bound to cause inconsistencies and waste of time."
        >
          <BubbleGraph nodes={scaleGraph} />
        </LeftRight>
        <LeftRight
          title="Drive speed, consistency and scale"
          text="Scale to infinite apps and features, maintained by autonomous teams"
        >
          {/* <BubbleGraph nodes={scaleGraph} /> */}
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}

const terminalText = `Resolving component dependencies for workspace: 'bit.dev'
✔ importing 79 components with their dependencies (if missing)
  installing dependencies in workspace using pnpm
✔ running pre install subscribers
✔ deduping dependencies for installation
Already up-to-date
Progress: resolved 359, reused 358, downloaded 1, added 4, done

dependencies:
\u001b[36m + @teambit/design.ui.cli-snippet 0.0.347
  -------------------------
✔ installing dependencies using pnpm
✔ running post install subscribers
✔ linking components
Successfully resolved dependencies for 84 component(s) in 11.201 seconds`;
