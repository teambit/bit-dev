import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { BitImport, BitEject, BitFork } from './commands';

export const ExpandedImport = () => <ExpandCode snippet={BitImport} />;

export const ExpandedEject = () => <ExpandCode snippet={BitEject} />;

export const ExpandedFork = () => <ExpandCode snippet={BitFork} />;
