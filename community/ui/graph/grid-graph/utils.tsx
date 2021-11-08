// import { GridNode } from '@teambit/community.entity.graph.grid-graph';
// import { getSpan } from './make-span';

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

// export enum GraphSizes {
//   xs = 'xs',
//   sm = 'sm',
//   md = 'md',
//   l = 'l',
//   lg = 'lg',
//   xl = 'xl',
//   xxl = 'xxl',
// }

// export function getCell<T>(node: GridNode<T>, graphSize?: GraphSizes) {
//   const sizes = node?.sizes;
//   console.log('node', node.sizes);
//   // console.log('sizes', getSpan(node.sizes));
//   // const pos = graphSize && sizesArr.indexOf(graphSize);
//   // when specifying col and row to equal to null, it removed the node
//   if (graphSize && sizes?.[graphSize]?.col === null && sizes?.[graphSize]?.row === null) {
//     return { display: 'none' };
//   }

//   const col = (graphSize && sizes?.[graphSize]?.col) || node.col;
//   const row = (graphSize && sizes?.[graphSize]?.row) || node.row;

//   return {
//     gridColumnStart: col,
//     gridColumnEnd: col,
//     gridRowStart: row,
//     gridRowEnd: row,
//   };
// }
