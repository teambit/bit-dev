const sizesArr = ['xxl', 'xl', 'lg', 'l', 'md', 'sm', 'xs'];

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
 * takes sizes object from the mock and fills in the missing fields
 */

export function fillSizes(defaultCol?: number, defaultRow?: number, nodeSizes?: Sizes) {
  if (!defaultCol || !defaultRow) return;

  const obj: Sizes = {};
  sizesArr.map((res, index) => {
    if (res === 'xxl') {
      obj.xxl = {
        row: defaultRow,
        col: defaultCol,
      };
      return;
    }
    obj[res] = (nodeSizes && nodeSizes[res]) || obj[sizesArr[index - 1]];
    return null;
  });

  return obj;
}
