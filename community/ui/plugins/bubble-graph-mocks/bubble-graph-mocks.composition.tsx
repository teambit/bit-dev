import React from 'react';
import ReactJson from 'react-json-view';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { ComponentBubbleNonInteractive } from '@teambit/community.ui.graph.component-bubble-non-interactive';
import { mockExplorePluginsGraph, mockCreatePluginsGraph } from './bubble-graph-mocks';

export const MockExplorePluginsGraphJson = () => <ReactJson src={mockExplorePluginsGraph()} />;

export const MockCreatePluginsGraphJson = () => <ReactJson src={mockCreatePluginsGraph()} />;

export const ExploreBubbleGraphExample = () => (
  <BubbleGraph Node={ComponentBubbleNonInteractive} nodes={mockExplorePluginsGraph()} data-testid="explore-graph" />
);

export const CreateBubbleGraphExample = () => (
  <BubbleGraph Node={ComponentBubbleNonInteractive} nodes={mockCreatePluginsGraph()} data-testid="create-graph" />
);

MockExplorePluginsGraphJson.canvas = {
  height: 700,
  overflow: 'scroll',
};

MockCreatePluginsGraphJson.canvas = {
  height: 700,
  overflow: 'scroll',
};
