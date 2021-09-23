import React, {ReactNode, ComponentType} from 'react';
import {ComponentID} from '@teambit/component-id'
import classNames from 'classnames'
import { Edge } from '@teambit/community.ui.graph.edge';
import styles from './grid-graph.module.scss';

export type GridItemProps = {
id: ComponentID,
dependencies: ComponentID[]
icon?: string,
row?: number,
col?: number,
position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
} & React.HTMLAttributes<HTMLDivElement>;

export type GridGraphProps = {
  /**
   * a text to be rendered in the component.
   */
  list: GridItemProps[];
  Item: ComponentType<GridItemProps>;
} & React.HTMLAttributes<HTMLDivElement>;

export function GridGraph({ list, Item, children, className, ...rest }: GridGraphProps) {
  return (
    <div className={classNames(styles.hero, className)} {...rest}>
    {list.map((item, index) => {
      // console.log("item", item)
      const componentId = getValidId(item.id.toString({ignoreVersion: true}));
      console.log("componentId>>", componentId)
      return (
        <div key={index} className={styles.bubbleContainer} style={{ ...positions[item.position], ...getCell(item.row, item.col) }}>
          <Item {...item} />
          {/* {item.dependencies.map((dependency) => {
            const depId = getValidId(dependency.toString())
            console.log("depId", depId)
            // console.log("componentId", componentId)
            return <Edge key={`${item.id}->${depId}`} start={componentId} end={depId} />
          })} */}
        </div>
      )
    })}
    {children}
    </div>
  );
}



export const positions = {
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

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}

export function getCell(row: number, col: number) {
  return {
    gridColumnStart: col,
    gridColumnEnd: col,
    gridRowStart: row,
    gridRowEnd: row
  }
}
