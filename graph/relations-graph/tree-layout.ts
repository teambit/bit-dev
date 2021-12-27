import { hierarchy, stratify, pack } from 'd3-hierarchy';

const NODE_SIZE = 120;

function flatten(tree, result = []) {
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      result.push(tree.children[i]);
      flatten(tree.children[i], result);
    }
  }

  return result;
}

export function layoutGraph(nodes, edges, scopes, openScopes = []) {
  const scopeNodes = scopes.map((scope) => ({
    id: scope,
    label: scope,
    parentNode: 'root',
    type: 'scope',
  }));

  const componentNodes = nodes.map((node) => {
    const scope = node.id.split('/')[0];

    return {
      id: node.id,
      parentNode: scope,
      label: node.id,
      type: 'component',
    };
  });

  const tree = stratify()
    .id((d) => d.id)
    .parentId((d) => d.parentNode)([{ id: 'root' }, ...scopeNodes, ...componentNodes]);

  const layout = pack().size([1, 1]).padding(0.01)(hierarchy(tree).sum(() => 1));
  const flatLayout = flatten(layout);

  const minR = Math.min(...flatLayout.map((n) => n.r));
  const scaleFactor = NODE_SIZE / minR;

  const layoutNodes = flatLayout.map((node) => {
    const { data } = node.data;
    const hasParent = data.parentNode !== 'root';
    const r = node.r * scaleFactor;
    const nx = node.x * scaleFactor;
    const ny = node.y * scaleFactor;
    const x = nx - r / 2;
    const y = ny - r / 2;
    const px = node.parent.x * scaleFactor;
    const py = node.parent.y * scaleFactor;
    const pr = node.parent.r * scaleFactor;

    return {
      id: data.id,
      data: {
        label: data.label,
        isOpen: data.isOpen,
      },
      type: data.type,
      parentNode: hasParent ? data.parentNode : undefined,
      position: hasParent ? { x: x - px + pr, y: y - py + pr } : { x, y },
      style: hasParent
        ? undefined
        : {
            width: r * 2,
            height: r * 2,
          },
      zIndex: hasParent ? 4 : 2,
      extent: hasParent ? 'parent' : undefined,
    };
  });

  const layoutEdges = edges.map((edge) => {
    return {
      id: edge.id,
      source: edge.sourceId,
      target: edge.targetId,
      zIndex: 3,
      type: 'scope',
    };
  });

  return { nodes: layoutNodes, edges: layoutEdges };
}
