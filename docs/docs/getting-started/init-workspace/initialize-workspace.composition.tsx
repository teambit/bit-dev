import React from 'react';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import { InitializeWorkspace } from './index';

export const BasicInitializeWorkspace = () => (
  <CommandsProvider rawCommands={commands}>
    <InitializeWorkspace />
  </CommandsProvider>
);
