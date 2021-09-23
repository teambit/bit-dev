import React from 'react';
import classNames from 'classnames';
import {Image} from '@teambit/base-react.content.image'
import { H2 } from '@teambit/design.ui.heading';
import { Edge } from '@teambit/community.ui.graph.edge';
import {ComponentCard} from '@teambit/explorer.ui.gallery.component-card';
import {GridGraph, GridGraphProps, GridItemProps} from '@teambit/community.ui.graph.grid-graph'
import styles from './component-distribution.module.scss';
// @ts-ignore
import img from './shoe-store.png';
// import { componentsMock } from '.';

// @teambit.community/ui/graph/grid-graph
// @teambit.community/ui/graph/bubble-graph
// @teambit.community/ui/graph/component-card-graph

export type ComponentDistributionSectionProps = {
  /**
   * An object of features with title and text and icon props
   */
  components?: any[];
  /**
   * Title of the section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentDistributionSection({
  title,
  components,
  className
}: ComponentDistributionSectionProps) {
  // console.log("components", components)
  return (
    <div className={classNames(styles.buildSection, className)}>
      <div className={styles.heading}>
        <H2 className={styles.title}>{title}</H2>
      </div>
      <div className={styles.content}>
        <GridGraph className={styles.componentGrid}>

        {components.map((component, index) => {
          const componentName = component.id.toString({ignoreVersion: true})
          return (
            <div key={`${componentName}-${index}`} className={styles.cardWrapper} style={{...positions[component.position]}}>
              <div id={getValidId(componentName)}>
              <ComponentCard id={componentName} version={component.version} />
              </div>
              {component.dependencies.map((dep) => {
                const depName = dep.toString({ignoreVersion: true})
                return <Edge key={`${componentName}-${depName}`} start={getValidId(componentName)} end={getValidId(depName)} />

              })}
          </div>
          )
        })}
        </GridGraph>
        <div />
        <div>
          <Image src={img} className={styles.appImg} />
        </div>
      </div>
    </div>
  );
}

ComponentDistributionSection.defaultProps = {
  components: []
}

function getValidId(id: string) {
  // console.log("id", id)
  return `${id.replace(/[.\/]/g, '-')}-card`;
}

const positions = {
  'top': {
    alignSelf: 'start',
    justifySelf: 'center',
  },
   'top-right': {
     alignSelf: 'start',
     justifySelf: 'end',
   },
   'right': {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'bottom-right': {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'bottom': {
     alignSelf: 'end',
     justifySelf: 'center',
   },
   'bottom-left': {
     alignSelf: 'end',
     justifySelf: 'end',
   },
   'left': {
     alignSelf: 'center',
     justifySelf: 'end',
   },
   'top-left': {
     alignSelf: 'start',
     justifySelf: 'end',
   }
};