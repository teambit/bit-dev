import { PanelPlugin } from '@teambit/base-react.layout.panel';

export type DocPluginProps = {
  
};

export interface DocPlugin {
  /**
   * plugins for the bottom of the page.
   */
  bottom: ComponentType<>[];

  /**
   * plugins for the right page panel.
   */
  right: ComponentType<>[];
}
