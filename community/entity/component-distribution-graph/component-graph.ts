import { GridNode, GridNodeType } from '@teambit/community.entity.graph.grid-graph';

export type ComponentCardPayload = {
  preview?: string;
  description?: string;
  envIcon?: string;
  href?: string;
};

export type ComponentCardNode = GridNode<ComponentCardPayload>;

export type PlainComponentCardNode = GridNodeType<ComponentCardPayload>;

export function createComponentCardGraph(plainComponentCards: PlainComponentCardNode[]): ComponentCardNode[] {
  return plainComponentCards.map((node) => GridNode.fromPlain<ComponentCardPayload>(node));
}
