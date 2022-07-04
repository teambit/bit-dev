import React from 'react';
// import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';

export const BitInstall = () => <CommandsExplorer commandName="install" />;

export const InstallExample = () => {
  const example = {
    'packages...': '@teambit/design.inputs.input-text',
  };
  return <CommandsExplorer commandName="install" commandExample={example} />;
};

export const ShowTodo = () => {
  const example = {
    'component-name': 'apps/to-do',
  };
  return <CommandsExplorer commandName="show" commandExample={example} />;
};
