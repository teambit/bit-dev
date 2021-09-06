import React, { ReactNode } from 'react';
import { H2 } from '@teambit/design.ui.heading';
import { ComponentGrid } from '@teambit/explorer.ui.gallery.component-grid';

export type PluginGroupProps = {
  /**
   * title for the plugin group
   */
  title: string,

  /**
   * children 
   */
  children: ReactNode
};

export function PluginGroup({ title, children }: PluginGroupProps) {
  return (
    <div>
      <H2>{title}</H2>
      <ComponentGrid>
        {children}
      </ComponentGrid>
    </div>
  );
}
