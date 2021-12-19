import { d3adaptor } from 'webcola';
import * as d3Force from 'd3-force';
import * as d3Dispatch from 'd3-dispatch';
import * as d3Timer from 'd3-timer';

const d3 = {
  ...d3Force,
  ...d3Dispatch,
  ...d3Timer,
};

const NODE_WIDTH = 60;
const NODE_HEIGHT = 60;
const OPEN_NODE_WIDTH = 170;
const OPEN_NODE_HEIGHT = 60;

const cola = d3adaptor(d3).symmetricDiffLinkLengths(20).avoidOverlaps(true).size([800, 600]);

function getLeaves(nodes, scope) {
  return nodes.reduce((indexes, node, i) => {
    const nodeScope = node.id.split('/')[0];
    if (nodeScope === scope) {
      indexes.push(i);
    }
    return indexes;
  }, []);
}

function getGraph(nodes, edges, groups) {
  const nextNodes = groups.reduce((allNodes, groupNode) => {
    const x = groupNode.bounds.x;
    const y = groupNode.bounds.y;
    const width = groupNode.bounds.width();
    const height = groupNode.bounds.height();

    allNodes.push({
      id: groupNode.id,
      type: 'scope',
      position: { x, y },
      style: { width, height },
      data: { debug: true },
    });

    groupNode.leaves.forEach((leave) => {
      allNodes.push({
        id: leave.id,
        position: { x: leave.x - x - leave.width / 2, y: leave.y - y - leave.height / 2 },
        type: 'component',
        parentNode: groupNode.id,
        data: { debug: true },
      });
    });

    return allNodes;
  }, []);

  const nextEdges = edges.map((edge) => {
    return {
      id: `${edge.source.id}->${edge.target.id}`,
      source: edge.source.id,
      target: edge.target.id,
    };
  });

  return {
    nodes: nextNodes,
    edges: nextEdges,
  };
}

export async function layoutGraph(nodes, edges, scopes, openScopes = []) {
  const nodeIds = nodes.map((n) => n.id);

  const links = edges.map((edge) => {
    const source = nodeIds.indexOf(edge.sourceId);
    const target = nodeIds.indexOf(edge.targetId);

    return {
      source,
      target,
    };
  });

  const groups = scopes.map((scope) => {
    return { leaves: getLeaves(nodes, scope), id: scope };
  });

  const components = nodes.map((node) => {
    const scopeId = node.id.split('/')[0];
    const isOpen = openScopes.includes(scopeId);
    return {
      id: node.id,
      width: isOpen ? OPEN_NODE_WIDTH : NODE_WIDTH,
      height: isOpen ? OPEN_NODE_HEIGHT : NODE_HEIGHT,
    };
  });

  cola.nodes(components).links(links).groups(groups).start(20, 0, 10);

  return new Promise((resolve) => {
    cola.on('end', () => {
      resolve(getGraph(components, links, groups));
    });
  });
}
