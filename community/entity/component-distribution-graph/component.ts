import { ComponentID } from "@teambit/component-id";
import type {EdgeProps} from '@teambit/community.ui.graph.edge'

export type ComponentProps = {
  id: string;
  dependencies: string[];
  position?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
  preview?: string;
  description?: string;
  envIcon?: string;
  edges?: Edge;
};

export type Edge = Record<string, Omit<EdgeProps, 'start' | 'end'>>;

export class Component {
  constructor(
    /**
     * ID of the component presented in the component card.
     */
    readonly id: ComponentID,

    /**
     * dependencies to link to.
     */
    readonly dependencies: ComponentID[],

    /**
     * position of the component card in cell.
     */
    readonly position?: string,
    /**
     * the preview to be displayed in the card.
     */
    readonly preview?: string,
    /**
     * a list of egdes to override with custom styles
     */
    readonly edges?: Edge
  ) {}

  static fromObject(component: ComponentProps) {
    return new Component(
      ComponentID.fromString(component.id),
      component.dependencies.map((dep) => ComponentID.fromString(dep)),
      component.position,
      component.preview,
      component.edges,
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
