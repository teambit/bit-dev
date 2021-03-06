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
  isLinkable?: boolean;
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
    readonly isLinkable?: boolean,
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
    isLinkable,
    ...rest
  }: GridNodeType<T>): GridNode<T> {
    return new GridNode(
      ComponentID.fromString(id),
      dependencies.map((dep) => DependencyEdge.fromPlain(dep)),
      row,
      col,
      sizes,
      position,
      isLinkable,
      rest.payload
    );
  }
}
