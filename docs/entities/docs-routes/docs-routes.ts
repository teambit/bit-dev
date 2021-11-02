import { ReactNode } from 'react';
import { SidebarTreeNode, SidebarPayload } from '@teambit/docs.ui.sidebar';
import { DocsRoute } from './docs-route';

export type Route = {
  title: string;
  description?: string;
  absPath: string;
  component: ReactNode
};

export class DocsRoutes {
  constructor(
    readonly tree: DocsRoute[],
    readonly basePath: string
  ) {}

  /**
   * get the list of routes to include.
   */
  getRoutes(): Route[] {
    return this.tree.flatMap(route => {
      return this.computeRoutes(route);
    });
  }

  /**
   * create a sidebar tree.
   */
   toSideBarTree(): SidebarTreeNode {
    return {
      id: '',
      children: this.tree.map(node => this.computeTreeNode(node))
    }
  }  

  private computePayload(docRoute: DocsRoute, parentPath?: string): SidebarPayload {
    return {
      icon: docRoute.icon,
      open: docRoute.open,
      title: docRoute.title,
      path: [
        this.basePath, 
        this.accumulatePath(docRoute.path, parentPath)
      ].join('/')
    }
  }

  private accumulatePath(currentPath: string, parentPath?: string) {
    return parentPath ? `${parentPath}/${currentPath}`: currentPath;
  }

  private computeTreeNode(treeNode: DocsRoute, parentPath?: string) {
    if (treeNode.children) {
      const thisPath = this.accumulatePath(treeNode.path, parentPath);

      return {
        id: treeNode.path,
        children: treeNode.children.map(child => this.computeTreeNode(child, thisPath)),
        payload: this.computePayload(treeNode, thisPath)
      };
    }

    return {
      id: treeNode.path,
      payload: this.computePayload(treeNode, parentPath)
    };
  }
  
  private computeRoutes(currentRoute: DocsRoute, parentPath?: string): Route[] {
    if (currentRoute.children) {
      const thisPath = this.accumulatePath(currentRoute.path, parentPath);
      return currentRoute.children.flatMap(child => this.computeRoutes(child, thisPath));
    }

    return [{
      title: currentRoute.title,
      description: currentRoute.description,
      absPath: [
        this.basePath,
        this.accumulatePath(currentRoute.path, parentPath)
      ].join('/'),
      component: currentRoute.component
    }];
  }
 
  static from(routes: DocsRoute[], basePath: string) {
    return new DocsRoutes(routes, basePath);
  }
}
