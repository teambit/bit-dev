import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './ws-directory-structure/to-do/todo-composition-tsx';
import { docs } from './ws-directory-structure/to-do/todo-docs-mdx';
import { spec } from './ws-directory-structure/to-do/todo-spec-tsx';
import { todo } from './ws-directory-structure/to-do/todo-tsx';
import { index } from './ws-directory-structure/to-do/index-ts';
import { iconTextComposition } from './ws-directory-structure/icon-text/icon-text-composition-tsx';
import { iconTextDocs } from './ws-directory-structure/icon-text/icon-text-docs-mdx';
import { iconTextSpec } from './ws-directory-structure/icon-text/icon-text-spec-tsx';
import { iconText } from './ws-directory-structure/icon-text/icon-text-tsx';
import { iconTextIndex } from './ws-directory-structure/icon-text/index-ts';
import { workspaceJson } from './ws-directory-structure/workspace-json';
import { bitmap } from './ws-directory-structure/bitmap';
import { inputTextDesc, todoDesc, iconTextDesc } from './ws-directory-structure/node-modules';

const todoFiles = {
  'tasks-scope/apps/to-do/todo.composition.tsx': composition,
  'tasks-scope/apps/to-do/todo.docs.mdx': docs,
  'tasks-scope/apps/to-do/todo.spec.tsx': spec,
  'tasks-scope/apps/to-do/todo.tsx': todo,
  'tasks-scope/apps/to-do/index.ts': index,
};

const iconTextFiles = {
  'design/info/icon-text.composition.tsx': iconTextComposition,
  'design/info/icon-text.docs.mdx': iconTextDocs,
  'design/info/icon-text.spec.tsx': iconTextSpec,
  'design/info/icon-text.tsx': iconText,
  'design/info/index.ts': iconTextIndex,
};

export const workspaceFiles = {
  ...todoFiles,
  ...iconTextFiles,
  'workspace.jsonc': workspaceJson,
  '.bitmap': bitmap,
  'node_modules/@my-org/tasks-scope.apps.to-do/about-this-dir': todoDesc,
  'node_modules/@teambit/design.inputs.input-text/about-this-dir': inputTextDesc,
  'node_modules/@teambit/design.info.icon-text/about-this-dir': iconTextDesc,
};

export const ExploreWorkspace = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 260,
      codeHeight: 400,
      isDirOpen: false,
      title: 'TASKS-WORKSPACE',
      wordWrap: 'on',
    }}
    files={workspaceFiles}
    defaultFile="tasks-scope/apps/to-do/todo.tsx"
  />
);
