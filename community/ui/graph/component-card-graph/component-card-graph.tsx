import React from 'react';
import classNames from 'classnames';
import {
  GridGraph,
  GridGraphProps,
  getValidId,
  positions,
} from '@teambit/community.ui.graph.grid-graph';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';

import { Edge } from '@teambit/community.ui.graph.edge';

import styles from './component-card-graph.module.scss';
import { Component } from '@teambit/community.entity.compnent-distribution-graph';

export type ComponentCardGraphProps = {
  list: Component[]; // TODO @oded - add type once component is in the correct place
} & GridGraphProps;

export function ComponentCardGraph({
  list,
  children,
  className,
  ...rest
}: ComponentCardGraphProps) {

  return (
    <GridGraph {...rest} className={classNames(styles.componentGrid, className)} >
      {list.map((component, index) => {
        const componentName = component.id.toString({ ignoreVersion: true });
        return (
          <div
            key={`${componentName}-${index}`}
            className={styles.cardWrapper}
            style={{ ...positions[component.position || ''] }}
          >
            <div id={getValidId(componentName)}>
              <ComponentCard id={componentName} version={component.id.version} />
            </div>
            {component.dependencies.map((dep) => {
              const depName = dep.toString({ ignoreVersion: true });
              const egdeProps = component.edges?.[dep] || {};
              return (
                <Edge
                  key={`${componentName}-${depName}`}
                  start={getValidId(componentName)}
                  end={getValidId(depName)}
                  {...egdeProps}
                />
              );
            })}
          </div>
        );
      })}
    </GridGraph>
  );
}
