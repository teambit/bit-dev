import { ComponentType } from 'react';

export interface DocsPlugin<TB = {}, TR = {}> {
  /**
   * the plugin name. can be the class name.
   */
  name: string;

  /**
   * add plugins to the doc page.
   */
  page: {
    /**
     * add plugin to the bottom section of the doc page.
     */
    bottom?: ComponentType<TB>[];

    /**
     * add plugin to the right section of the doc page.
     */
    right?: ComponentType<TR>[];
  };
}
