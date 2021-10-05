import { ComponentProps, Component } from './component';

export class ComponentGraph { 
  constructor(
    readonly components: Component[]
  ) {}

  static fromComponentList(components: ComponentProps[]) {
    const componentCards = components.map((comp => Component.fromObject(comp)));
    return new ComponentGraph(componentCards);
  }

  // toPlainObject() {
  //   return {
  //     components: this.components.map(component => component.toObject())
  //   };
  // }
}
