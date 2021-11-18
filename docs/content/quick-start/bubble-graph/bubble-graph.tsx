import React from 'react';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { Cloud } from '@teambit/design.ui.surfaces.cloud';
import { Label } from '@teambit/base-ui.elements.label';
import { demoGraph } from '../demo-graph';
import styles from './bubble-graph.module.scss';

export function InnovatorGraph() {
  return (
    <div>
      <BubbleGraph className={styles.innovatorGrid} nodeClassName={styles.bubbleWrapper} nodes={demoGraph}>
        <Label color="#0984E3" className={styles.designLabel}>
          Design
        </Label>
        <Label className={styles.innovatorsLabel}>Innovators</Label>
        <div id="teambit-bubble-graph-ui-connecter" className={styles.connecter} />
        <Cloud className={styles.cloud} />
        <Cloud className={styles.topCloud} />
      </BubbleGraph>
    </div>
  );
}
