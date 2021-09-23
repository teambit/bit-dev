import React, {ReactNode, ComponentType} from 'react';
import {ComponentID} from '@teambit/component-id'
import classNames from 'classnames'
import styles from './grid-graph.module.scss';

export type GridItemProps = {
id: string,
dependencies?: ComponentID[]
icon?: string,
row?: number,
col?: number,
position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
} & React.HTMLAttributes<HTMLDivElement>;

export type GridGraphProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function GridGraph({ children, className, ...rest }: GridGraphProps) {
  return (
    <div className={classNames(styles.hero, className)} {...rest}>
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
