import { ComponentID } from '@teambit/component-id';
import { getAttrValidId } from './attr-id';
import { Edge } from './edge';

export type Dependency = string | RawDependencyEdge;

export type RawDependencyEdge = {
  id: string,
  edge: Edge
};

export class DependencyEdge {
  constructor(
    readonly id: ComponentID,
    readonly edge?: Edge
  ) {}

  get attrId() {
    return getAttrValidId(this.id.toStringWithoutVersion());
  }

  static fromPlain(dep: Dependency) {
    if (typeof dep === 'string') {
      return new DependencyEdge(
        ComponentID.fromString(dep)
      );
    }

    return new DependencyEdge(
      ComponentID.fromString(dep.id),
      dep.edge
    );
  }
}
