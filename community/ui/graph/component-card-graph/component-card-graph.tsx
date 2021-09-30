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

export type ComponentCardGraphProps = {
  list: any[];
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
            style={{ ...positions[component.position] }}
          >
            <div id={getValidId(componentName)}>
              <ComponentCard id={componentName} version={component.version} />
            </div>
            {component.dependencies.map((dep) => {
              const depName = dep.toString({ ignoreVersion: true });
              return (
                <Edge
                  key={`${componentName}-${depName}`}
                  start={getValidId(componentName)}
                  end={getValidId(depName)}
                />
              );
            })}
          </div>
        );
      })}
    </GridGraph>
  );
}
