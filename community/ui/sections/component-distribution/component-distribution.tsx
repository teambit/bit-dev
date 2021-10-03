import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { Heading, Elements } from '@teambit/community.ui.heading';
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
        <Heading element={Elements.H2} className={styles.title}>{title}</Heading>
      </div>
      {/* created a connecting element for edge curve effect */}
        <div id={getValidId("shoe-store/home-page-to-store-hero")} />
        <Edge start={getValidId("shoe-store/home-page-to-store-hero")} endAnchor="top" end={getValidId('ecommerce/ui/store-hero')}/>
      <div className={styles.content}>
        <ComponentCardGraph list={components} />
        <div />
        <div>
          <Image src={img} className={styles.appImg} id="image" />
          <Edge start={"image"} end={getValidId('shoe-store/ui/pages/home-page')}/>
          <Edge start={"image"} end={getValidId('shoe-store/ui/shoes/shoes-card-grid')} endAnchor="right" />
        </div>
      </div>
      {/* created a connecting element for edge curve effect */}
        <div id={getValidId("shoe-store/shoes-card-grid-to-shoes-card")} />
        <Edge start={getValidId("shoe-store/shoes-card-grid-to-shoes-card")} endAnchor="bottom" end={getValidId('shoe-store/ui/shoes/shoes-card')}/>
    </div>
  );
}
