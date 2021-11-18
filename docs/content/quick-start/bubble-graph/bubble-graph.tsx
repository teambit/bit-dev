import React from 'react';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { demoGraph } from '../demo-graph';
import styles from './bubble-graph.module.scss';

export function InnovatorGraph() {
  return (
    <div>
      <BubbleGraph className={styles.innovatorGrid} nodeClassName={styles.bubbleWrapper} nodes={demoGraph}>
        <div className={styles.cloud} />
        <div className={styles.topCloud} />
      </BubbleGraph>
    </div>
  );
}
