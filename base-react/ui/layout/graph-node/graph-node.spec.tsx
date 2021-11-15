import { graphNodeLayout } from './graph-node';

it('should return correct classes for all specified breakpoint', () => {
  const allSizes = {
    xxl: {
      col: 4,
      row: 3,
    },
    xl: {
      col: 4,
      row: 3,
    },
    lg: {
      col: 4,
      row: 3,
    },
    l: {
      col: 1,
      row: 1,
    },
    md: {
      col: 1,
      row: 1,
    },
    sm: {
      col: 1,
      row: 1,
    },
    xs: {
      col: 1,
      row: 1,
    },
  };

  const result = [
    'default-row-1',
    'default-col-1',
    'colSpan-row-xxl-3',
    'colSpan-col-xxl-4',
    'colSpan-row-xl-3',
    'colSpan-col-xl-4',
    'colSpan-row-lg-3',
    'colSpan-col-lg-4',
    'colSpan-row-l-1',
    'colSpan-col-l-1',
    'colSpan-row-md-1',
    'colSpan-col-md-1',
    'colSpan-row-sm-1',
    'colSpan-col-sm-1',
    'colSpan-row-xs-1',
    'colSpan-col-xs-1',
  ];
  const layout = graphNodeLayout(allSizes, 1, 1);
  expect(layout).toEqual(result);
});

it('should return the `hide` class for the specific resolution, if both row and col are undefined | null', () => {
  const hideInSizes = {
    sm: {
      col: null,
      row: null,
    },
    xs: {
      col: null,
      row: null,
    },
  };
  const result = ['default-row-1', 'default-col-2', 'hide-sm', 'hide-xs'];
  const layout = graphNodeLayout(hideInSizes, 1, 2);
  expect(layout).toEqual(result);
});

it('should not return the `hide` class if only a row or col got undefined | null, but not both', () => {
  const skippedSizes = {
    lg: undefined,
    l: {},
    md: {
      row: 1,
    },
    sm: {
      row: 1,
      col: null,
    },
    xs: {
      row: undefined,
      col: 2,
    },
  };

  const result = [
    'default-row-2',
    'default-col-3',
    'colSpan-row-lg-undefined',
    'colSpan-col-lg-undefined',
    'colSpan-row-l-undefined',
    'colSpan-col-l-undefined',
    'colSpan-row-md-1',
    'colSpan-col-md-undefined',
    'colSpan-row-sm-1',
    'colSpan-col-sm-null',
    'colSpan-row-xs-undefined',
    'colSpan-col-xs-2',
  ];
  const layout = graphNodeLayout(skippedSizes, 2, 3);
  expect(layout).toEqual(result);
});
