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

export function graphNodeLayout(breakPoints?: Sizes | undefined, defaultRow?: number, defaultCol?: number): string[] {
  const stylesArr: string[] = [styles[`default-row-${defaultRow}`], styles[`default-col-${defaultCol}`]];

  const sizes = breakPoints ? Object.keys(breakPoints) : [];
  sizes.forEach((br) => {
    if (!br) return;
    const brSize = breakPoints?.[br];

    if (brSize?.row === null && brSize?.col === null) {
      stylesArr.push(styles[`hide-${br}`]);
      return;
    }

    stylesArr.push(styles[`colSpan-row-${br}-${brSize?.row}`]);
    stylesArr.push(styles[`colSpan-col-${br}-${brSize?.col}`]);
  });

  return stylesArr;
}
