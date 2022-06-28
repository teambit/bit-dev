import React from 'react';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import { CommandsExplorer } from './commands-explorer';

export const DemoCommands = () => (
  <CommandsProvider rawCommands={commands}>
    <CommandsExplorer commandName="show" />
    <div style={{ height: 25 }} />
    <CommandsExplorer commandName="envs" />
  </CommandsProvider>
);
