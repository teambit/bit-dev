import styles from './graph-node.module.scss';

// TODO - decide where we should put these types. also used in @teambit/community.entity.graph.grid-graph
export type Breakpoints = {
  col?: number | null;
  row?: number | null;
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

export function graphNodeLayout(breakPoints?: Sizes | undefined): string[] {
  if (!breakPoints) return [];
  const stylesArr: string[] = [];
  const sizes = breakPoints ? Object.keys(breakPoints) : [];
  sizes.map((br) => {
    if (!br) return;
    const brSize = breakPoints?.[br];

    if (!brSize?.row && !brSize?.col) {
      stylesArr.push(styles[`hide-${br}`]);
      return;
    }

    // this creates a base position class to be used by the default `col` and `row`
    if (br === 'xxl') {
      stylesArr.push(styles[`default-row-${brSize?.row}`]);
      stylesArr.push(styles[`default-col-${brSize?.col}`]);
    }
    stylesArr.push(styles[`colSpan-row-${br}-${brSize?.row}`]);
    stylesArr.push(styles[`colSpan-col-${br}-${brSize?.col}`]);
    return;
  });

  return stylesArr;
}
