import { ComponentID } from "@teambit/component-id";

export type BubbleProps = {
  id: string;
  dependencies: string[];
  position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
  icon?: string;
  col?: number;
  row?: number;
};

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
    readonly icon?: string
  ) {}

  static fromObject(plainBubble: BubbleProps) {
    return new Bubble(
      ComponentID.fromString(plainBubble.id),
      plainBubble.dependencies.map((depId) => ComponentID.fromString(depId)),
      plainBubble.position,
      plainBubble.col,
      plainBubble.row,
      plainBubble.icon,
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
