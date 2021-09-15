import React from 'react';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { PluginGroup } from './plugin-group';

export const BasicPluginGroup = () => (
  <PluginGroup title="hello from PluginGroup">
    <ComponentCard id="teambit.react/react"></ComponentCard>
    <ComponentCard id="teambit.react/react"></ComponentCard>
    <ComponentCard id="teambit.react/react"></ComponentCard>
    <ComponentCard id="teambit.react/react"></ComponentCard>
  </PluginGroup>
);
