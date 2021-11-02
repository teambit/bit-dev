import React from 'react';
import { componentsMock } from '@teambit/community.entity.compnent-distribution-graph';
import { ComponentCardGraph } from './component-card-graph';

export const BasicComponentCardGraph = () => <ComponentCardGraph nodes={componentsMock()} />;
