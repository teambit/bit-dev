import { allSizes, hideInSizes, skippedSizes } from './graph-node.mock';
import { graphNodeLayout } from './graph-node';

const allSizeClasses = [
  'default-row-3',
  'default-col-4',
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

it('should return correct classes for all specified breakpoint', () => {
  const layout = graphNodeLayout(allSizes);
  expect(layout).toEqual(allSizeClasses);
});

const hideInSizesClasses = ['hide-sm', 'hide-xs'];

it('should return the `hide` class for the specific resolution, if both row and col are undefined | null', () => {
  const layout = graphNodeLayout(hideInSizes);
  expect(layout).toEqual(hideInSizesClasses);
});

const skippedSizesResult = ['colSpan-row-sm-1', 'colSpan-col-sm-null', 'colSpan-row-xs-undefined', 'colSpan-col-xs-2'];

it('it should not return the `hide` class if only a row or col got undefined | null, but not both', () => {
  const layout = graphNodeLayout(skippedSizes);
  expect(layout).toEqual(skippedSizesResult);
});
