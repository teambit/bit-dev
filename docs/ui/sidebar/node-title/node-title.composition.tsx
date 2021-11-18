import React from 'react';
import { NodeTitle } from './node-title';

export const BasicNodeTitle = () => {
  return <NodeTitle id="My Folder" open={false} setOpen={() => {}} />;
};

export const NodeTitleWithIcon = () => {
  return <NodeTitle id="My Folder" icon="dependencies-icn" open={false} setOpen={() => {}} />;
};

export const NodeTitleWithConfigurationIcon = () => {
  return (
    <div>
      <div>Hover the folder to see the configuration icon</div>
      <NodeTitle id="My Folder" icon="dependencies-icn" configPath="config-path" open={false} setOpen={() => {}} />
    </div>
  );
};

export const NodeTitleWithOverviewActive = () => {
  return (
    <NodeTitle
      id="My Folder"
      icon="dependencies-icn"
      configPath="config-path"
      overviewPath={location.pathname}
      open={false}
      setOpen={() => {}}
    />
  );
};
