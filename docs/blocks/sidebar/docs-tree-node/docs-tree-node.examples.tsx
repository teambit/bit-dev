import React from 'react';
import { DocsTreeNode } from './docs-tree-node';

const nodeCollapsed = {
  id: 'folder-example',
  payload: {
    open: false,
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
  ],
};

const multiLevelNodes = {
  id: 'folder-example',
  payload: {
    open: true,
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: [{ id: 'child3' }, { id: 'child4', children: [{ id: 'child5' }, { id: 'child6' }] }] },
  ],
};

const nodeWithImg = {
  id: 'folder-example',
  payload: {
    icon: 'https://static.bit.dev/bit-logo.svg',
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
  ],
};

const nodeWithIcon = {
  id: 'folder-example',
  payload: {
    icon: 'workspace',
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
  ],
};

const nodeWithCustomIcon = {
  id: 'folder-example',
  payload: {
    icon: (
      <img
        style={{ width: 16, marginRight: 8 }}
        src="https://bitsrc.imgix.net/bf5970b9b97dfb045867dd2842eaefd1e623e328.png?size=35&w=70&h=70&crop=faces&fit=crop&bg=fff"
        alt=""
      />
    ),
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
  ],
};

const node = {
  id: 'folder-example',
  payload: {
    title: 'folder-example',
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
    { id: 'child3', children: undefined },
    { id: 'child4', children: undefined },
    { id: 'child5', children: undefined },
  ],
};

const nodeWithConfigPathOption = {
  id: 'folder-example',
  payload: {
    icon: 'workspace',
    configPath: 'https://bit.dev',
  },
  children: [
    { id: 'child1', children: undefined },
    { id: 'child2', children: undefined },
  ],
};

export const FolderNodeExample = () => <DocsTreeNode node={node} depth={2} />;

export const MultiLevelFolder = () => <DocsTreeNode node={multiLevelNodes} depth={2} />;

export const FolderNodeCollapsed = () => <DocsTreeNode node={nodeCollapsed} depth={2} />;

export const FolderNodeWithImage = () => <DocsTreeNode node={nodeWithImg} depth={2} />;

export const FolderNodeWithIcon = () => <DocsTreeNode node={nodeWithIcon} depth={2} />;

export const FolderNodeWithCustomIcon = () => <DocsTreeNode node={nodeWithCustomIcon} depth={2} />;

export const FolderNodeWithConfigPath = () => <DocsTreeNode node={nodeWithConfigPathOption} depth={2} />;

FolderNodeExample.canvas = {
  height: 200,
};
