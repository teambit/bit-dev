import React from 'react';
import { FolderTreeNode } from './folder-tree-node';

export const BasicFolderTreeNode = () => {
  return <FolderTreeNode id="My Folder" open={false} setOpen={() => {}} />;
};

export const FolderTreeNodeWithIcon = () => {
  return <FolderTreeNode id="My Folder" icon="dependencies-icn" open={false} setOpen={() => {}} />;
};

export const FolderTreeNodeWithConfigurationIcon = () => {
  return (
    <div>
      <div>Hover the folder to see the configuration icon</div>
      <FolderTreeNode id="My Folder" icon="dependencies-icn" configPath="config-path" open={false} setOpen={() => {}} />
    </div>
  );
};

export const FolderTreeNodeWithOverviewActive = () => {
  return (
    <FolderTreeNode
      id="My Folder"
      icon="dependencies-icn"
      configPath="config-path"
      overviewPath={location.pathname}
      open={false}
      setOpen={() => {}}
    />
  );
};
