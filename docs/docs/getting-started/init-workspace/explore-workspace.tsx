import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { aboutBitDir } from './ws-directory-structure/about-bit-dir';
import { workspaceJson } from './ws-directory-structure/workspace-json';
import { bitmap } from './ws-directory-structure/bitmap';
import { aboutPublicDir } from './ws-directory-structure/about-public-dir';
import { aboutMyScopeDir } from './ws-directory-structure/about-my-scope-dir';
import { aboutNodeModuleDir } from './ws-directory-structure/about-node-modules-dir';
import { pnpmLock } from './ws-directory-structure/pnpm-lock';

export const files = {
  'pnpm-lock': pnpmLock,
  'workspace.jsonc': workspaceJson,
  '.bitmap': bitmap,
  'public/bit/about-this-dir': aboutPublicDir,
  'my-scope/about-this-dir': aboutMyScopeDir,
  'node_modules/about-this-dir': aboutNodeModuleDir,
};

export const ExploreWorkspace = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      isDirOpen: false,
      title: 'MY-WORKSPACE',
      wordWrap: 'on',
    }}
    style={{ minHeight: 600 }}
    files={files}
    defaultFile=".bitmap"
  />
);
