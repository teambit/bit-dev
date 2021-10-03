import { ComponentID } from "@teambit/component-id";
import type { EdgeProps } from '@teambit/community.ui.graph.edge'

export type BubbleProps = {
  id: string;
  dependencies: string[];
  position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
  icon?: string;
  col?: number;
  row?: number;
  edges?: Edge;
};

export type Edge = Record<string, Omit<EdgeProps, 'start' | 'end'>>;

export class Bubble {
  constructor(
    /**
     * ID of the component presented in the bubble.
     */
    readonly id: ComponentID,

    /**
     * dependencies to link to.
     */
    readonly dependencies: ComponentID[],

    /**
     * position of the bubbles in cell.
     */
    readonly position: string,
    /**
     * column number in the grid.
     */
    readonly col?: number,
    /**
     * row number in the grid.
     */
    readonly row?: number,
    /**
     * the icon to be displayed in the bubble.
     */
    readonly icon?: string,
    /**
     * a list of egdes to override with custom styles
     */
     readonly edges?: Edge
  ) {}

  static fromObject(plainBubble: BubbleProps) {
    return new Bubble(
      ComponentID.fromString(plainBubble.id),
      plainBubble.dependencies.map((depId) => ComponentID.fromString(depId)),
      plainBubble.position,
      plainBubble.col,
      plainBubble.row,
      plainBubble.icon,
      plainBubble.edges,
    );
  }

  toObject() {
    return {
      id: this.id.toString(),
      dependencies: this.dependencies.map((dep) => dep.toString()),
      position: this.position,
    };
  }
}
