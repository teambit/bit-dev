import styles from './make-span.module.scss';

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

export function makeSpans(breakPoints?: Sizes) {
  const obj: any = {};
  const sizes = breakPoints ? Object.keys(breakPoints) : [];
  for (var i = 0; i <= sizes.length; i++) {
    if (sizes[i] === 'xxl') {
      obj[sizes.length + 1] = styles[`colSpan--${breakPoints?.[sizes[i]]?.col}-${breakPoints?.[sizes[i]]?.row}`];
    }
    obj[i] = styles[`colSpan--${sizes[i]}-${breakPoints?.[sizes[i]]?.col}-${breakPoints?.[sizes[i]]?.row}`];
  }
  return obj;
}
