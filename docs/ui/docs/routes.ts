import { DocsRoute } from './docs-route';

export class DocsRoutes {
  constructor(
    readonly routes: DocsRoute[]
  ) {}

  /**
   * return an array of sidebar paths
   */
  getSideBarPaths() {
    return this.routes.map((route) => {
      return route.sidebarPath || ''
    });
  }

  static from(routes: DocsRoute[]) {
    return new DocsRoutes(routes);
  }
}
