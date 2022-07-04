import React from 'react';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import { CreateComponents } from './index';

export const BasicCreateComponents = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <CreateComponents />
    </CommandsProvider>
  );
};
