import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';

const bitNewValues = {
  'template-name': 'react',
  'workspace-name': 'my-workspace',
  'default-scope': 'my-org.my-scope',
};

const bitCreateExample = {
  'template-name': 'react',
  'component-names...': 'ui/button',
  scope: 'my-org-my-scope',
};

const newWorkspaceOutput = `Let's get started!

      cd my-workspace
      bit start`;

const startDevServerOutput = `You can now view 'my-workspace' components in the browser.
Bit server is running on http://localhost:3000`;

const bitStartExample = {};

export const BitNew = () => <CommandsExplorer commandName="new" />;

export const BitNewWithValues = () => (
  <CommandsExplorer commandName="new" commandExample={bitNewValues} />
);

export const BitStartWithValues = () => (
  <CommandsExplorer commandName="start" commandExample={bitStartExample} />
);

export const BitStatus = () => <CommandsExplorer commandName="status" />;

export const BitCreateWithValues = () => (
  <CommandsExplorer commandName="create" commandExample={bitCreateExample} />
);

export const CdMyWorkspace = () => <Terminal>cd my-workspace</Terminal>;

export const BitStartOutput = () => (
  <Terminal isOutput>{startDevServerOutput}</Terminal>
);

export const NewWorkspaceOutput = () => (
  <Terminal isOutput>{newWorkspaceOutput}</Terminal>
);

export const BitInitWithValues = () => (
  <CommandsExplorer commandName="init" commandExample={{}} />
);

export const BitInitOutput = () => (
  <Terminal isOutput>successfully initialized a bit workspace.</Terminal>
);
