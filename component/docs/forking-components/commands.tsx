import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';

const forkBasicExample = {
  'source-component-id': 'teambit.design/basic/button',
};

const forkSetScopeExample = {
  'source-component-id': 'teambit.design/basic/button',
  scope: 'my-org.my-scope',
};

const forkRefactorExample = {
  'source-component-id': 'teambit.design/basic/button',
  scope: 'my-org.my-scope',
  refactor: true,
};

export const ForkCommand = () => <CommandsExplorer commandName="fork" />;

export const ForkCommandBasicExample = () => (
  <CommandsExplorer commandName="fork" commandExample={forkBasicExample} />
);

export const ForkCommandSetScopeExample = () => (
  <CommandsExplorer commandName="fork" commandExample={forkSetScopeExample} />
);

export const ForkRefactorExample = () => (
  <CommandsExplorer commandName="fork" commandExample={forkRefactorExample} />
);
