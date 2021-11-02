import React from 'react';
import { GraphNodeProps } from '@teambit/community.ui.graph.grid-graph';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import styles from './component-card-graph.module.scss';

// export type ComponentCardPayload = ComponentCardProps;
export type ComponentCardPayload = {
  description?: string;
  envIcon?: string;
  version?: string;
  preview?: string;
};

export function ComponentCardNode({ node }: GraphNodeProps<ComponentCardPayload>) {
  const { preview, ...rest } = node.payload || {};
  const Img = (
    <div className={styles.preview}>
      <img src={preview} />
    </div>
  );
  return (
    <div id={node.attrId}>
      <ComponentCard preview={preview && Img} id={node.id.fullName} version={node.id.version} {...rest} />
    </div>
  );
}
