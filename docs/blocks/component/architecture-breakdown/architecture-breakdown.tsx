import React from 'react';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { LeftRight, LeftRightProps } from '@teambit/design.ui.layouts.sections.left-right';
import { HighlightComponent } from '@teambit/docs.ui.highlighter.highlight-component';
import { TopInventions } from '@learnbit/inventions.blocks.top-inventions';
import { InventionsGraph } from './bubble-graph';
import styles from './architecture-breakdown.module.scss';

export type ArchitectureBreakdownProps = {
  // component: ReactNode,
  // architecture: Graph<>
} & LeftRightProps;

export function ArchitectureBreakdown() {
  return (
    <LeftRight
      className={styles.demo}
      left={
        <HighlightComponent title="UI breakdown">
          <TopInventions className={styles.topInnovators} />
        </HighlightComponent>
      }
      right={
        <>
          <Heading element={Elements.H6} className={styles.heading}>
            Component architecture
          </Heading>
          <InventionsGraph />
        </>
      }
    />
  );
}
