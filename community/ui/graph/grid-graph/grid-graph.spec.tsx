import React from 'react';
import { render } from '@testing-library/react';
import { BasicGridGraph } from './grid-graph.composition';

describe.skip('should render basic grid graph', () => {
  let rendered: HTMLElement;
  beforeAll(() => {
    const { getByTestId } = render(<BasicGridGraph />);
    rendered = getByTestId('test-graph');
  });

  it('should be in the document', () => {
    expect(rendered).toBeInTheDocument();
  });
  it('should have three childrens div', () => {
    expect(rendered.childElementCount).toBe(3);
  });
});

describe.skip('should render with the correct text', () => {
  it('should render with the correct text - node 1', () => {
    const { getByText } = render(<BasicGridGraph />);
    const rendered = getByText('teambit.mdx/mdx@3.1.2');
    expect(rendered).toBeTruthy();
  });
  it('should render with the correct text - node 2', () => {
    const { getByText } = render(<BasicGridGraph />);
    const rendered = getByText('teambit.mdx/babel/mdx-loader@3.1.2');
    expect(rendered).toBeTruthy();
  });
  it('should render with the correct text - node 3', () => {
    const { getByText } = render(<BasicGridGraph />);
    const rendered = getByText('teambit.mdx/modules/mdx-compiler@1.0.12');
    expect(rendered).toBeTruthy();
  });
});
