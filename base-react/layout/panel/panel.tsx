import React, { ReactNode } from 'react';
import { PanelPlugin } from './panel-plugin';

export type PanelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  plugins?: PanelPlugin<unknown>[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Panel({ plugins }: PanelProps) {
  // TODO: Ran need to set type
  const sortedPlugins = plugins?.sort((a: any, b: any) => a.weight - b.weight) || [];

  return (
    <div>
      {sortedPlugins.map((plugin) => {
        const PluginComponent = plugin.component;
        return <PluginComponent />;
      })}
    </div>
  );
}
