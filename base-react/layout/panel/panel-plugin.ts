import { ComponentType } from 'react';

export interface PanelPlugin {
  /**
   * component to inject.
   */
  component: ComponentType;

  /**
   * order of the component in the panel.
   */
  weight: number;
}
