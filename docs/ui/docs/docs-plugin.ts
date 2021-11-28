import { PanelPlugin } from '@teambit/base-react.layout.panel';

export interface DocsPlugin {
  /**
   * add plugins to the doc page.
   */
  page: {
    /**
     * add plugin to the bottom section of the doc page.
     */
    bottom: PanelPlugin[];

    /**
     * add plugin to the right section of the doc page.
     */
    right: PanelPlugin[];
  };
}
