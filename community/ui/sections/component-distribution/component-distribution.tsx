import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { H2 } from '@teambit/design.ui.heading';
import { Edge } from '@teambit/community.ui.graph.edge';
import { ComponentCardGraph, getValidId } from '@teambit/community.ui.graph.component-card-graph';
import { Component } from '@teambit/community.entity.compnent-distribution-graph';
import styles from './component-distribution.module.scss';
// @ts-ignore
import img from './shoe-store.png';

export type ComponentDistributionSectionProps = {
  /**
   * An object of features with title and text and icon props
   */
  components?: Component[];
  /**
   * Title of the section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentDistributionSection({
  title,
  components = [],
  className
}: ComponentDistributionSectionProps) {
  return (
    <div className={classNames(styles.buildSection, className)}>
      <div className={styles.heading}>
        <H2 className={styles.title}>{title}</H2>
      </div>
      <div className={styles.content}>
        <ComponentCardGraph list={components} />
        <div />
        <div>
          <Image src={img} className={styles.appImg} id="image" />
          <Edge start={"image"} end={getValidId('teambit/design.ui.button')}/>
          <Edge start={"image"} end={getValidId('teambit/design.ui.buttons')} endAnchor="right" />
        </div>
      </div>
    </div>
  );
}
