import React from 'react';
import { FileExplorer } from './code';

const workspaceJson = `{
  "$schema": "https://static.bit.dev/teambit/schemas/schema.json",
  "teambit.workspace/workspace": {
    "name": "my-workspace",
    "icon": "https://static.bit.dev/bit-logo.svg",
    "defaultDirectory": "{scope}/{name}",

    "defaultScope": "my-org.my-scope"
  },
  "teambit.dependencies/dependency-resolver": {
    "packageManager": "teambit.dependencies/pnpm",
    "policy": {
      "dependencies": {},
      "peerDependencies": {
        "react": "17.0.2",
        "react-dom": "17.0.2",
      }
    }
  },
  "teambit.workspace/variants": {}
}`;

const bitmap = `{
    "ui/content-tabs": {
        "scope": "teambit.community",
        "version": "0.1.6",
        "mainFile": "index.ts",
        "rootDir": "community/ui/content-tabs"
    },
    "$schema-version": "14.9.0"
}`;

const bit = `This is the local scope!`;

const files = {
  'workspace.jsonc': workspaceJson,
  '.bitmap': bitmap,
  '.bit/': null,
  '.bit/about-this-dir': bit,
};

export const DarkThemeCode = () => {
  return (
    <FileExplorer
      options={{ isDirOpen: false, title: 'MY-WORKSPACE', codeHeight: 350 }}
      files={files}
      defaultFile="workspace.jsonc"
    />
  );
};
