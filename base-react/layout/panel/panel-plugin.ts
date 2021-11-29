import { ComponentType } from 'react';

export interface PanelPlugin<T> {
  /**
   * component to inject.
   */
  component: ComponentType<T>;

  /**
   * order of the component in the panel.
   */
  weight?: number;
}
