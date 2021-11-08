import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Edge } from '@teambit/community.ui.graph.edge';
import { ComponentCardGraph } from '@teambit/community.ui.graph.component-card-graph';
import { ComponentCardNode } from '@teambit/community.entity.compnent-distribution-graph';
import { image, top, bottom } from './component-distribution.mock';
import styles from './component-distribution.module.scss';
// @ts-ignore
import img from './shoe-store.jpg';

export type ComponentDistributionSectionProps = {
  /**
   * An object of features with title and text and icon props
   */
  components?: ComponentCardNode[];
  /**
   * Title of the section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentDistributionSection({ title, components = [], className }: ComponentDistributionSectionProps) {
  return (
    <div className={classNames(styles.buildSection, className)}>
      <div className={styles.heading}>
        <Heading element={Elements.H3} className={styles.title}>
          {title}
        </Heading>
      </div>
      {/* created a connecting element for edge curve effect */}
      <div id={top.attrId} className={styles.connectingEdgeAnchor}>
        <Edge node={top} dependency={top.dependencies[0]} />
        <Edge node={top} dependency={top.dependencies[1]} />
      </div>
      <ComponentCardGraph nodes={components} className={styles.distributionGraph}>
        <Image src={img} className={styles.appImg} id={image.attrId} />
      </ComponentCardGraph>
      {/* created a connecting element for edge curve effect */}
      <div id={bottom.attrId} className={styles.connectingEdgeAnchor}>
        <Edge node={bottom} dependency={bottom.dependencies[0]} />
        <Edge node={bottom} dependency={bottom.dependencies[1]} />
      </div>
    </div>
  );
}
