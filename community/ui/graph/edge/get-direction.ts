import { Direction } from '@teambit/community.entity.graph.grid-graph';

export type XArrowDirection = {
  showHead?: boolean;
  showTail?: boolean;
};

/**
 * translates grid edge direction into `xArrows` direction.
 *  'head' -> showHead: true, 'tail' -> showTail: true etc
 */
export function getDirection(direction?: Direction): XArrowDirection {
  if (!direction) return {};
  if (direction === Direction.HEAD) {
    return { showHead: true, showTail: false };
  }
  if (direction === Direction.TAIL) {
    return { showHead: false, showTail: true };
  }
  if (direction === Direction.BI) {
    return { showHead: true, showTail: true };
  }
  if (direction === Direction.NONE) {
    return { showHead: false, showTail: false };
  }

  return {};
}
