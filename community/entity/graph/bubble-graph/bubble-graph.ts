import { GridNode, GridNodeType } from '@teambit/community.entity.graph.grid-graph';

export type BubblePayload = {
  icon?: string;
  forceActive?: boolean;
};

export type BubbleNode = GridNode<BubblePayload>;

export type PlainBubbleNode = GridNodeType<BubblePayload>;

export function createBubbleGraph(plainBubbles: PlainBubbleNode[]): BubbleNode[] {
  return plainBubbles.map((node) => GridNode.fromPlain<BubblePayload>(node));
}
