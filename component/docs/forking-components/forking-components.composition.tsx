import React from 'react';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import { ForkingComponents } from './index';

export const BasicForkingComponents = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <ForkingComponents />
    </CommandsProvider>
  );
};
