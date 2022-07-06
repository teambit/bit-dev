import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './ws-directory-structure/to-do/todo-composition-tsx';
import { docs } from './ws-directory-structure/to-do/todo-docs-mdx';
import { spec } from './ws-directory-structure/to-do/todo-spec-tsx';
import { todo } from './ws-directory-structure/to-do/todo-tsx';
import { index } from './ws-directory-structure/to-do/index-ts';
import { workspaceJson } from './ws-directory-structure/workspace-json';
import { bitmap } from './ws-directory-structure/bitmap';
import { pnpmLock } from './ws-directory-structure/pnpm-lock';
import { inputTextDesc, todoDesc } from './ws-directory-structure/node-modules';

const todoFiles = {
  'tasks-scope/apps/to-do/todo.composition.tsx': composition,
  'tasks-scope/apps/to-do/todo.docs.mdx': docs,
  'tasks-scope/apps/to-do/todo.spec.tsx': spec,
  'tasks-scope/apps/to-do/todo.tsx': todo,
  'tasks-scope/apps/to-do/index.ts': index,
};

export const workspaceFiles = {
  ...todoFiles,
  'pnpm-lock': pnpmLock,
  'workspace.jsonc': workspaceJson,
  '.bitmap': bitmap,
  'node_modules/@my-org/tasks-scope.apps.to-do/about-this-dir': todoDesc,
  'node_modules/@teambit/design.inputs.input-text/about-this-dir': inputTextDesc,
};

export const ExploreWorkspace = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 260,
      isDirOpen: false,
      title: 'TASKS-WORKSPACE',
      wordWrap: 'on',
    }}
    style={{ minHeight: 400 }}
    files={workspaceFiles}
    defaultFile="workspace.jsonc"
  />
);
