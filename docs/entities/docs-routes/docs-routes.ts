import { ReactNode } from 'react';
import flatten from 'lodash.flatten';
import urlJoin from 'url-join';
// commented out because of cyclic dep. we should make sure this component won't depend on sidebar.
// import type { SidebarTreeNode, SidebarPayload } from '@teambit/docs.ui.sidebar.sidebar';
import { DocsRoute } from './docs-route';

export type Route = {
  title: string;
  description?: string;
  /** relative path */
  path: string;
  /** absolute path (including baseUrl) */
  absPath: string;
  component: ReactNode;
  plugins: Record<string, unknown>[];
  displayInSidebar?: boolean;
};

/** to find and replace paths ending with '/*' */
const starRegex = /\/\*$/;

export class DocsRoutes {
  constructor(readonly tree: DocsRoute[], readonly basePath?: string) {}

  /**
   * get the list of routes to include.
   */
  getRoutes(): Route[] {
    return flatten(this.tree.map((route) => this.computeRoutes(route)));
  }

  /**
   * create a sidebar tree.
   */
  toSideBarTree() {
    return {
      id: '',
      children: this.tree.map((node) => this.computeTreeNode(node, this.basePath)),
    };
  }

  toLinkList = () => {
    return this.getRoutes().map(({ path, absPath, ...rest }) => ({
      absPath: absPath.replace(starRegex, ''),
      path: path.replace(starRegex, ''),
      ...rest,
    }));
  };

  private computePayload(docRoute: DocsRoute, parentPath?: string) {
    // basePath should be included in the parent path
    const thisPath = this.accumulatePath(docRoute.path, parentPath).replace(starRegex, '');

    return {
      icon: docRoute.icon,
      open: docRoute.open,
      title: docRoute.title,
      configPath: docRoute.config?.path && this.accumulatePath(docRoute.config.path, thisPath),
      overviewPath: docRoute.overview?.path && this.accumulatePath(docRoute.overview.path, thisPath),
      path: thisPath,
      displayInSidebar: docRoute.displayInSidebar,
    };
  }

  private accumulatePath(currentPath: string, parentPath?: string) {
    return parentPath ? urlJoin(parentPath, currentPath) : currentPath;
  }

  private computeTreeNode(treeNode: DocsRoute, parentPath?: string) {
    if (treeNode.children) {
      return {
        id: treeNode.path,
        children: treeNode.children.map((child) =>
          this.computeTreeNode(child, this.accumulatePath(treeNode.path, parentPath))
        ),
        payload: this.computePayload(treeNode, parentPath),
      };
    }

    return {
      id: treeNode.path,
      payload: this.computePayload(treeNode, parentPath),
    };
  }

  private toAbs(path: string) {
    if (!this.basePath) return path;
    return urlJoin(this.basePath, path);
  }

  private computeRoutes(currentRoute: DocsRoute, parentPath?: string): Route[] {
    const thisPath = this.accumulatePath(currentRoute.path, parentPath);

    if (currentRoute.children) {
      const { config, overview } = currentRoute;
      const categoryRoute = currentRoute.component
        ? [
            {
              title: currentRoute.title,
              component: currentRoute.component,
              path: this.accumulatePath(currentRoute.path, thisPath),
              absPath: this.toAbs(this.accumulatePath(currentRoute.path, thisPath)),
              description: currentRoute.description,
              plugins: currentRoute.plugins || ([] as any),
            },
          ]
        : [];
      const configRoutes = config
        ? [
            {
              title: config.title,
              description: config.description,
              path: this.accumulatePath(config.path, thisPath),
              absPath: this.toAbs(this.accumulatePath(config.path, thisPath)),
              component: config.component,
              plugins: currentRoute.plugins || ([] as any),
            },
          ]
        : [];
      const overviewRoutes = overview
        ? [
            {
              title: overview.title,
              description: overview.description,
              path: this.accumulatePath(overview.path, thisPath),
              absPath: this.toAbs(this.accumulatePath(overview.path, thisPath)),
              component: overview.component,
              plugins: currentRoute.plugins || ([] as any),
            },
          ]
        : [];

      return flatten(currentRoute.children.map((child) => this.computeRoutes(child, thisPath)))
        .concat(configRoutes)
        .concat(overviewRoutes)
        .concat(categoryRoute);
    }

    return [
      {
        title: currentRoute.title,
        description: currentRoute.description,
        displayInSidebar: currentRoute.displayInSidebar,
        path: thisPath,
        absPath: this.toAbs(thisPath),
        component: currentRoute.component,
        plugins: currentRoute.plugins || ([] as any),
      },
    ];
  }

  static from(routes: DocsRoute[], basePath: string = '/') {
    return new DocsRoutes(routes, basePath);
  }
}
