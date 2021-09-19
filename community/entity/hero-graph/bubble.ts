import { ComponentID } from '@teambit/component-id';

export type BubbleProps = {
  id: string,
  dependencies: string[],
  position: string
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
     * position of the bubbles on the grid.
     */
    readonly position: string
  ) {}

  static fromObject(plainBubble: BubbleProps) {
    return new Bubble(
      ComponentID.fromString(plainBubble.id),
      plainBubble.dependencies.map(depId => ComponentID.fromString(depId)),
      plainBubble.position
    );
  }

  toObject() {
    return {
      id: this.id.toString(),
      dependencies: this.dependencies.map(dep => dep.toString()),
      position: this.position
    };
  }
}
