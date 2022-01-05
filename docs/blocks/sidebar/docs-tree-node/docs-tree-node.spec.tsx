import React from 'react';
import { render } from '@testing-library/react';
import { FolderNodeExample } from './docs-tree-node.composition';

describe('should render Folder tree node', () => {
  it('should render with the title text', () => {
    const { getByText } = render(<FolderNodeExample />);
    const rendered = getByText('folder-example');

    expect(rendered).toBeTruthy();
  });
  it('should render with childrens text', () => {
    const { getByText } = render(<FolderNodeExample />);
    for (let index = 1; index <= 5; index++) {
      const rendered = getByText(`child${1}`);
      expect(rendered).toBeTruthy();
    }
  });
  it('childrens should be visible', () => {
    const { getByText } = render(<FolderNodeExample />);
    const firstChildren = getByText('child1');

    expect(firstChildren).toBeVisible();
  });
});
