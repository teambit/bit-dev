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
  const sortedPlugins = plugins?.sort((a, b) => a.weight - b.weight) || [];

  return (
    <div>
      {sortedPlugins.map((plugin) => {
        const PluginComponent = plugin.component;
        return <PluginComponent />;
      })}
    </div>
  );
}
