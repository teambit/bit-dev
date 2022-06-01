import React from 'react';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { DevServices } from './index';

export const BasicDevServices = () => {
  return (
    <CloudProvider>
      <DevServices />
    </CloudProvider>
  );
};
