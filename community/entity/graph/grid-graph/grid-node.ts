import { ComponentID } from '@teambit/component-id';
import { getAttrValidId } from './attr-id';
import { DependencyEdge, Dependency } from './dependency-edge';
import { fillSizes, Sizes } from './fill-sizes';

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

  static fromPlain<T>({ id, dependencies = [], col, row, sizes, position, ...rest }: GridNodeType<T>): GridNode<T> {
    const allSizes = fillSizes(col, row, sizes); // TODO - remove this. its not needed but removing it causes some double edges in the bubble graph
    return new GridNode(
      ComponentID.fromString(id),
      dependencies.map((dep) => DependencyEdge.fromPlain(dep)),
      row,
      col,
      allSizes,
      position,
      rest.payload
    );
  }
}
