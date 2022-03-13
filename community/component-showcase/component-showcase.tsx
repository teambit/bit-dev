import React from 'react';
// import { ComponentCard } from '@teambit/explorer.ui.component-card';
// import { RelationsGraph } from '@teambit/graph.relations-graph';
import { PreviewPlugin } from '@teambit/explorer.plugins.preview-plugin';
import { ComponentID } from '@teambit/component-id';
import { ComponentDescriptor, AspectMap } from '@teambit/component-descriptor';
import classNames from 'classnames';
import { GraphIcon } from './graph-icon';
import { CodeIcon } from './code-icon';
import { PreviewIcon } from './preview-icon';
import styles from './component-showcase.module.scss';

export type ComponentShowcaseProps = {
  /**
   * The components' id to showcase.
   */
  componentId?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentShowcase({ componentId, className, ...rest }: ComponentShowcaseProps) {
  const [selectedTab, setSelectedTab] = React.useState<'preview' | 'graph' | 'code'>('preview');
  const id = ComponentID.fromString(componentId);
  const component = new ComponentDescriptor(id, {} as AspectMap);

  return (
    <div className={classNames(styles.container, className)} {...rest}>
      <div className={styles.tab}>
        <span className={styles.componentId}>{componentId}</span>
        <span
          className={classNames(styles.tabLinks, selectedTab === 'preview' && styles.active)}
          onClick={() => setSelectedTab('preview')}
        >
          <PreviewIcon /> Preview
        </span>
        <span
          className={classNames(styles.tabLinks, selectedTab === 'graph' && styles.active)}
          onClick={() => setSelectedTab('graph')}
        >
          <GraphIcon /> Graph
        </span>
        <span
          className={classNames(styles.tabLinks, selectedTab === 'code' && styles.active)}
          onClick={() => setSelectedTab('code')}
        >
          <CodeIcon /> Code
        </span>
      </div>

      <div className={styles.tabContent}>
        {selectedTab === 'preview' && <PreviewPlugin component={component} />}
        {/* {selectedTab === "graph" && <RelationsGraph seeders={[component]} />} */}
      </div>
    </div>
  );
}