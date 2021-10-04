import React, { useMemo } from 'react';
import classNames from 'classnames';
// TODO: check with Uri why sidebar is distributed to many components and not documented.
import { TreeContextProvider } from '@teambit/base-ui.graph.tree.tree-context';
import { indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { RootNode } from '@teambit/base-ui.graph.tree.root-node';
import { TreeNodeContext } from '@teambit/base-ui.graph.tree.recursive-tree';
import { inflateToTree, attachPayload } from '@teambit/base-ui.graph.tree.inflate-paths';
// import { createTree } from './create-tree';
import { SidebarNode } from './sidebar-node';

export type SidebarProps = {
  /**
   * a text to be rendered in the component.
   */
  onSelect?: (id: string) => void,

  selected?: string,

  /**
   * array of sorted human-readable sidebar paths. 
   * `Getting Started/Installing Bit`, id of this path in the sidebar would be: getting-started/installing-bit
   */
  paths: Path[],

  /**
   * prefix for all rendered links in the sidebar.
   */
  linkPrefix?: string

} & React.HTMLAttributes<HTMLDivElement>;

export type Path = {
  id: string;
  icon?: string;
  open?: boolean;
}

export type PayloadType = { // unify with folder payload type
  path: string;
  icon?: string;
  open?: boolean
}

export function Sidebar({ onSelect, paths, linkPrefix, selected, className, ...rest }: SidebarProps) {
  const rootNode = useMemo(() => {
    const tree = inflateToTree<Path, PayloadType>(paths, (path) => path.id);

    // const payloadMap = new Map(paths.map(path => [path.id, path]))
    const payloadMap = new Map(paths.map(({id, ...rest}) => {
      return [id, { path: generatePath(id, linkPrefix), ...rest }];
    }));
    attachPayload(tree, payloadMap);

    return tree;
    
  }, [paths]);

  return (
    <div style={{ ...indentStyle(1), ...rest.style }} className={classNames(className)} {...rest}>
      <TreeNodeContext.Provider value={SidebarNode}>
        <TreeContextProvider onSelect={onSelect} selected={selected}>
          <RootNode node={rootNode} depth={1} />
        </TreeContextProvider>
      </TreeNodeContext.Provider>
    </div>
  );
}

function generatePath(id: string, linkPrefix?: string) {
  if (!linkPrefix) linkPrefix = '/';
  // TODO - use path-browserify.join()
  return `${linkPrefix}/${id.toLowerCase().replaceAll(' ', '-')}`; // TODO - use '.replace()', also why replace space with '-'? shouldnt replace '/'?
}