import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { BitSnap, BitTag, BitReset, BitLog } from './commands';

export const ExpandedSnap = () => <ExpandCode snippet={BitSnap} />;

export const ExpandedTag = () => <ExpandCode snippet={BitTag} />;

export const ExpandedReset = () => <ExpandCode snippet={BitReset} />;

export const ExpandedLog = () => <ExpandCode snippet={BitLog} />;
