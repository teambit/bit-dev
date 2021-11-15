import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicFolderTreeNode,
  FolderTreeNodeWithIcon,
  FolderTreeNodeWithConfigurationIcon,
  FolderTreeNodeWithOverviewActive,
} from './folder-tree-node.composition';

describe('should render basic folder', () => {
  it('should have folder id', () => {
    const { getByText } = render(<BasicFolderTreeNode />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<BasicFolderTreeNode />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render folder with left icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<FolderTreeNodeWithIcon />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<FolderTreeNodeWithIcon />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<FolderTreeNodeWithIcon />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render folder with left icon and configuration icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<FolderTreeNodeWithConfigurationIcon />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<FolderTreeNodeWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<FolderTreeNodeWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have configuration icon', () => {
    const { container } = render(<FolderTreeNodeWithConfigurationIcon />);
    const iconElement = container.getElementsByClassName('bitcon-settings')[0];
    expect(iconElement).toBeTruthy();
  });
});

describe('should render an active folder with left icon and configuration icon', () => {
  it('should have folder id', () => {
    const { getByText } = render(<FolderTreeNodeWithOverviewActive />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should have arrow icon', () => {
    const { container } = render(<FolderTreeNodeWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-fat-arrow-down')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have left icon', () => {
    const { container } = render(<FolderTreeNodeWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-dependencies-icn')[0];
    expect(iconElement).toBeTruthy();
  });
  it('should have configuration icon', () => {
    const { container } = render(<FolderTreeNodeWithOverviewActive />);
    const iconElement = container.getElementsByClassName('bitcon-settings')[0];
    expect(iconElement).toBeTruthy();
  });
  it('folder should be inside a tag', () => {
    const { container } = render(<FolderTreeNodeWithOverviewActive />);
    const firstLinkElement = container.getElementsByTagName('a')[0];
    expect(firstLinkElement.classList.contains('folderLink')).toBeTruthy();
  });
  it('folder link should be active', () => {
    const { container } = render(<FolderTreeNodeWithOverviewActive />);
    const firstLinkElement = container.getElementsByTagName('a')[0];
    expect(firstLinkElement.classList.contains('active')).toBeTruthy();
  });
});
