import React from 'react';
import { render } from '@testing-library/react';
import type { BubbleNode } from '@teambit/community.entity.graph.bubble-graph';
import { mockExplorePluginsGraph, mockCreatePluginsGraph } from './bubble-graph-mocks';
import { ExploreBubbleGraphExample, CreateBubbleGraphExample } from './bubble-graph-mocks.composition';

describe('should create mock data for explore-plugins', () => {
  let mock: BubbleNode[];
  beforeAll(() => {
    mock = mockExplorePluginsGraph();
  });

  it('should be 33 array length', () => {
    expect(mock.length).toBe(33);
  });

  it('all payload should have icon url', () => {
    mock.forEach((item, index) => {
      expect(item.payload?.icon).toMatch(/https:\/\/static.bit.dev\/brands\/.*?.svg/);
    });
  });
});

describe('should create mock data for create-plugins', () => {
  let mock: BubbleNode[];
  beforeAll(() => {
    mock = mockCreatePluginsGraph();
  });

  it('should be 31 array length', () => {
    expect(mock.length).toBe(31);
  });

  it('all payload should have icon url', () => {
    mock.forEach((item, index) => {
      expect(item.payload?.icon).toMatch(/https:\/\/static.bit.dev\/brands\/.*?.svg/);
    });
  });
});

describe('should render explore bubble graph', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<ExploreBubbleGraphExample />);
    rendered = getByTestId('explore-graph');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 33 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(33);
  });
  it('should have 33 bubble childrens element', () => {
    expect(rendered.childElementCount).toBe(33);
  });
});

describe('should render create bubble graph', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<CreateBubbleGraphExample />);
    rendered = getByTestId('create-graph');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should include 31 img tag', () => {
    expect(rendered.querySelectorAll('img').length).toBe(31);
  });
  it('should have 31 bubble childrens element', () => {
    expect(rendered.childElementCount).toBe(31);
  });
});
