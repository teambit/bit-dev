import { ComponentID } from '@teambit/component-id';
import { getAttrValidId } from './attr-id';
import { DependencyEdge, Dependency } from './dependency-edge';

export type NodePosition =
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left';

export type GridNodeType<T = {}> = {
  id: string;
  dependencies?: Dependency[];
  row?: number;
  col?: number;
  sizes?: Sizes;
  position?: NodePosition;
  payload?: T;
};

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

export class GridNode<T> {
  constructor(
    readonly id: ComponentID,
    readonly dependencies: DependencyEdge[] = [],
    readonly row?: number,
    readonly col?: number,
    readonly sizes?: Sizes,
    readonly position?: NodePosition,
    readonly payload?: T
  ) {}

  get attrId() {
    return getAttrValidId(this.id.toStringWithoutVersion());
  }

  static fromPlain<T>({
    id,
    dependencies = [],
    col,
    row,
    sizes,
    position,
    payload,
  }: // ...rest,
  GridNodeType<T>): GridNode<T> {
    const allSizes = completeSizes(col, row, sizes);
    return new GridNode(
      ComponentID.fromString(id),
      dependencies.map((dep) => DependencyEdge.fromPlain(dep)),
      row,
      col,
      allSizes,
      position,
      payload
    );
  }
}

const sizesArr = ['xxl', 'xl', 'lg', 'l', 'md', 'sm', 'xs'];

function completeSizes(defaultCol: number, defaultRow: number, nodeSizes?: Sizes) {
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
