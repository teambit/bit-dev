// @ts-nocheck - TODO - use types

export class Paths {
  constructor(
    readonly paths: string[]
  ) {}
  
  /**
   * return a tree of nested objects
   */
  toNestedObject() {
    const newTree = [];
    this.paths.reduce((r, path) => {
      path.split('/').reduce((o, id) => {
          var temp = (o.children = o.children || []).find(q => q.id === id);
          if (!temp) o.children.push(temp = { id });
          return temp;
      }, r);
      return r;
    }, { children: newTree });

    return newTree;
  }

  static fromArray(paths: string[]) {
    return new Paths(paths);
  }
}
