import { TreeNode } from '@teambit/base-ui.graph.tree.recursive-tree';

export type Path = {
  id?: string;
  icon?: string;
  open?: boolean;
}

export type PayloadType = { // unify with folder payload type
  path?: string;
  icon?: string;
  open?: boolean
}

export function createTree(paths: Path[], linkPrefix?: string): TreeNode<PayloadType> { 
  const tree = [];
  paths.reduce((r, path: Path) => {
    path.id.split('/').reduce((o, id) => {
        var temp = (o.children = o.children || []).find(q => q.id === id);
        // hack / remove docs from being hard coded here.
        if (!temp) o.children.push(temp = { id, payload: { path: generatePath(path.id, linkPrefix), icon: path.icon, open: path.open }});
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
  return `${linkPrefix}/${id.toLowerCase().replaceAll(' ', '-')}`; // TODO - use '.replace()', also why replace space with '-'? shouldnt replace '/'?
}
