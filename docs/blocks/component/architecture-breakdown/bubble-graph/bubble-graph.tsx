import React from 'react';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { Cloud } from '@teambit/design.ui.surfaces.cloud';
import { Label } from '@teambit/base-ui.elements.label';
import styles from './bubble-graph.module.scss';
import { demoGraph } from '../demo-graph';

export function InventionsGraph() {
  return (
    <BubbleGraph className={styles.innovatorGrid} nodeClassName={styles.bubbleWrapper} nodes={demoGraph}>
      <div className={styles.dotsBackground} />
      <Label color="#0984E3" className={styles.designLabel}>
        Design
      </Label>
      <Label className={styles.innovatorsLabel}>Inventions</Label>
      <div id="teambit-bubble-graph-ui-connecter" className={styles.connecter} />
      <Cloud className={styles.cloud} />
      <Cloud className={styles.topCloud} />
    </BubbleGraph>
  );
}
