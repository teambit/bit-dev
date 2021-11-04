import { GridNode } from '@teambit/community.entity.graph.grid-graph';

export const positions = {
  top: {
    alignSelf: 'start',
    justifySelf: 'center',
  },
  'top-right': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
  right: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'bottom-right': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  bottom: {
    alignSelf: 'end',
    justifySelf: 'center',
  },
  'bottom-left': {
    alignSelf: 'end',
    justifySelf: 'end',
  },
  left: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  'top-left': {
    alignSelf: 'start',
    justifySelf: 'end',
  },
};

export function getValidId(id: string) {
  return id.replace(/[.\/]/g, '-');
}

export function getCell<T>(node: GridNode<T>, graphSize?: string) {
  // when specifying col and row to equal to null, it removed the node
  if (graphSize && node?.sizes?.[graphSize]?.col === null && node?.sizes?.[graphSize]?.row === null) {
    return { display: 'none' };
  }

  const col = (graphSize && node?.sizes?.[graphSize]?.col) || node.col;
  const row = (graphSize && node?.sizes?.[graphSize]?.row) || node.row;

  return {
    gridColumnStart: col,
    gridColumnEnd: col,
    gridRowStart: row,
    gridRowEnd: row,
  };
}
