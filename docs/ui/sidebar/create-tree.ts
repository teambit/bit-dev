import { TreeNode } from '@teambit/base-ui.graph.tree.recursive-tree';

export function createTree(paths: string[], linkPrefix?: string): TreeNode {
  const tree = [];
  paths.reduce((r, path) => {
    path.split('/').reduce((o, id) => {
        var temp = (o.children = o.children || []).find(q => q.id === id);
        // hack / remove docs from being hard coded here.
        if (!temp) o.children.push(temp = { id, payload: { path: generatePath(path, linkPrefix) }});
        return temp;
    }, r);
    return r;
  }, { children: tree });

  const node = {
    id: '',
    children: tree
  };

  return node;
}

function generatePath(id: string, linkPrefix?: string) {
  if (!linkPrefix) linkPrefix = '/';
  return `${linkPrefix}/${id.toLowerCase().replaceAll(' ', '-')}`;
}
