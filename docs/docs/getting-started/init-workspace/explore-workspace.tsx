import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { workspaceJson } from './ws-directory-structure/workspace-json';
import { aboutBitDir } from './ws-directory-structure/about-bit-dir';
import { bitmap } from './ws-directory-structure/bitmap';
import { aboutPublicDir } from './ws-directory-structure/about-public-dir';
import { aboutTasksScopeDir } from './ws-directory-structure/about-tasks-scope-dir';
import { aboutNodeModuleDir } from './ws-directory-structure/about-node-modules-dir';
import { pnpmLock } from './ws-directory-structure/pnpm-lock';

export const files = {
  '.bit/about-this-dir': aboutBitDir,
  'pnpm-lock': pnpmLock,
  'workspace.jsonc': workspaceJson,
  '.bitmap': bitmap,
  'public/bit/about-this-dir': aboutPublicDir,
  'tasks-scope/about-this-dir': aboutTasksScopeDir,
  'node_modules/about-this-dir': aboutNodeModuleDir,
};

export const ExploreWorkspace = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      codeHeight: 600,
      isDirOpen: false,
      title: 'TASKS-WORKSPACE',
      wordWrap: 'on',
    }}
    files={files}
    defaultFile="workspace.jsonc"
  />
);
