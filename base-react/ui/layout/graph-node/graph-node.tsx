import styles from './graph-node.module.scss';

// TODO - decide where we should put these types. also used in @teambit/community.entity.graph.grid-graph
export type Breakpoints = {
  col: number | null;
  row: number | null;
};

export type Sizes = {
  xs?: Breakpoints;
  sm?: Breakpoints;
  md?: Breakpoints;
  l?: Breakpoints;
  lg?: Breakpoints;
  xl?: Breakpoints;
  xxl?: Breakpoints;
};

/**
 * A function that gets an object and returns the appropriate layout classes for the node. To be used in the grid-graph
 */
export function graphNodeLAyout(breakPoints?: Sizes) {
  const obj: any = {};
  const sizes = breakPoints ? Object.keys(breakPoints) : [];
  for (var i = 0; i <= sizes.length; i++) {
    const brSize = breakPoints?.[sizes[i]];

    // this creates a base position class to be used by the default `col` and `row`
    if (sizes[i] === 'xxl') {
      obj[sizes.length + 1] = styles[`colSpan--${brSize?.col}-${brSize?.row}`];
    }
    obj[i] = styles[`colSpan--${sizes[i]}-${brSize?.col}-${brSize?.row}`];
  }
  return obj;
}
