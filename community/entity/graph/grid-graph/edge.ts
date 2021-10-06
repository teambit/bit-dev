import type { anchorType } from 'react-xarrows';

export type Position = anchorType;

export enum Direction {
  NONE = 'none',
  BI = 'bi',
  HEAD = 'head',
  TAIL = 'tail'
}

/**
 * visual edge type.
 */
export type Edge = {
  /**
   * start position.
   */
  start?: Position;

  /**
   * end position.
   */
  end?: Position;

  /**
   * class name to inject.
   */
  className?: string;

  /**
   * direction of the arrow.
   */
  direction?: Direction;

  /**
   * width of the stroke.
   */
  strokeWidth?: number;

  /**
   * color of the edge.
   */
  color?: string;

  /**
   * animate during edge drawing.
   */
  animate?: boolean;
  /**
   * show edge's arrow head
   */
  showHead?: boolean;
};
