import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { BitInstall } from './commands';
import CodeExample from './code-example.mdx';

export const ExpandedCode = () => <ExpandCode codeType="snippet" snippet={CodeExample} />;

export const ExpandedCommand = () => <ExpandCode snippet={BitInstall} />;
