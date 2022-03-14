import React, { useEffect, useState, useMemo } from 'react';
import { ComponentID } from '@teambit/component-id';
import ReactFlow, { applyNodeChanges, OnLoad, OnNodesChange, Node, Edge } from 'react-flow-renderer';
import { useRelationGraph } from '@teambit/graph.hooks.use-relation-graph';
import { Scope as ScopeNode } from '@teambit/graph.nodes.scope';
import { ScopeEdge } from '@teambit/graph.ui.graph.scope-edge';
import { Component as ComponentNode } from '@teambit/graph.nodes.component';
import { ApolloProvider } from '@apollo/client';
import graphqlclient from './graphql-client';
import { layoutGraph } from './tree-layout';
// import { layoutGraph } from './force-layout';

interface ScopeConfig {
  id: string;
  isOpen?: boolean;
}

export type RelationsGraphProps = {
  seeders?: ComponentID[];
  scopes: ScopeConfig[];
  // owners: string[];
};

const nodeTypes = {
  scope: ScopeNode,
  component: ComponentNode,
};

const edgeTypes = {
  scope: ScopeEdge,
};

function Graph({ scopes }: RelationsGraphProps) {
  const scopeIds = useMemo(() => scopes.map((scope) => scope.id), [scopes]);
  const openScopeIds = useMemo(() => scopes.filter((scope) => scope.isOpen).map((scope) => scope.id), [scopes]);

  const [nodes, setNodes] = useState<Node<{ label: any; isOpen: any }>[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const { graph, error, loading } = useRelationGraph(scopes);

  useEffect(() => {
    if (graph && graph.nodes && graph.edges) {
      (async () => {
        // @ts-ignore
        const layout = await layoutGraph(graph.nodes, graph.edges, scopeIds, openScopeIds);

        const nds = layout.nodes.map((node) => {
          node.data.isOpen = openScopeIds.includes(node.parentNode);
          return node;
        });

        // @ts-ignore
        setNodes(nds);
        setEdges(layout.edges);
      })();
    }
  }, [graph, scopes, scopeIds, openScopeIds]);

  const handleGraphLoad: OnLoad = (graphInstance) => {
    setTimeout(() => {
      graphInstance.fitView();
    }, 200);
  };

  const handleNodesChange: OnNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  if (error || loading || !nodes.length) {
    return null;
  }

  return (
    <ReactFlow
      minZoom={0}
      maxZoom={10000}
      onNodesChange={handleNodesChange}
      nodes={nodes}
      edges={edges}
      onLoad={handleGraphLoad}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
    />
  );
}

export function RelationsGraph({ scopes }: RelationsGraphProps) {
  return (
    <ApolloProvider client={graphqlclient}>
      <Graph scopes={scopes} />
    </ApolloProvider>
  );
}
