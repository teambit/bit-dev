import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Edge } from '@teambit/community.ui.graph.edge';
import { ComponentCardGraph, GridNode } from '@teambit/community.ui.graph.component-card-graph';
import { ComponentCardNode } from '@teambit/community.entity.compnent-distribution-graph';
import { Direction } from '@teambit/community.entity.graph.grid-graph';
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

const image = GridNode.fromPlain({
  id: 'teambit.image/image',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/pages/home',
      edge: {
        end: 'right',
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'right',
      },
    },
  ],
});

const top = GridNode.fromPlain({
  id: 'teambit.connecter/top',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/pages/home',
      edge: {
        end: 'top',
        direction: Direction.NONE,
      },
    },
    {
      id: 'teambit.ecommerce/ui/store-hero',
      edge: {
        end: 'top',
      },
    },
  ],
});

const bottom = GridNode.fromPlain({
  id: 'teambit.connecter/bottom',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'bottom',
        direction: Direction.NONE,
      },
    },
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card',
      edge: {
        end: 'bottom',
      },
    },
  ],
});
