import { PanelPlugin } from '@teambit/base-react.layout.panel';

export interface DocPlugin {
  /**
   * plugins for the bottom of the page.
   */
  bottom: PanelPlugin[];

  /**
   * plugins for the right page panel.
   */
  right: PanelPlugin[];
}
