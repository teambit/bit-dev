import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';

const bitCreateExample = {
  'template-name': 'react',
  'component-names...': 'ui/button',
  scope: 'my-org-my-scope',
};

const bitShowExample = {
  'component-name': 'ui/button',
};

export const BitCreate = () => <CommandsExplorer commandName="create" />;
export const BitCreateWithExample = () => (
  <CommandsExplorer commandName="create" commandExample={bitCreateExample} />
);

export const BitShow = () => <CommandsExplorer commandName="show" />;

export const BitShowWithExample = () => (
  <CommandsExplorer commandName="show" commandExample={bitShowExample} />
);

export const BitInit = () => <CommandsExplorer commandName="init" />;

export const BitCreateWithValues = () => (
  <CommandsExplorer commandName="create" />
);
