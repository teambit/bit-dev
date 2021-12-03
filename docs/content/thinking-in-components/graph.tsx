import React from 'react';
import { RelationsGraph } from '@teambit/graph.relations-graph';

export function Graph() {
  return <RelationsGraph scopes={[{ id: 'teambit.community' }]} />;
}
