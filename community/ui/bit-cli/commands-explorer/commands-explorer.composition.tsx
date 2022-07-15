import React from 'react';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import commands from './commands-mock.dev.json';
import { CommandsExplorer } from './commands-explorer';
import type { CommandExample } from './example-handler';

const Space = () => <div style={{ height: 130 }}></div>;

const forkPreText = `When you fork a component from a remote scope, you create a copy of it in your workspace. This copy is 'new' and has no previous versions.
The scope of that copied component is set, by default, to your workspace default scope (defined in the 'defaultScope' property).

Run the following to fork a component:`;

const forkPostText = `For example, the following command forks 'teambit.design/basic/button' to your workspace:`;

const forkCommandValues: CommandExample = {
  'source-component-id': 'teambit.base-react/buttons/button',
  'target-component-name': 'input/button',
  scope: 'my-org.my-scope',
  refactor: true,
};

const envGetCommandValues: CommandExample = {
  'component-name': 'ui/button',
};

export const WithOptions = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="fork" />
    </CommandsProvider>
  );
};

export const WithOptionsAndValues = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="fork" commandExample={forkCommandValues} />
    </CommandsProvider>
  );
};

export const WithSubCommands = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="envs" />
    </CommandsProvider>
  );
};

export const WithDefaultSubCommand = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="envs" subCommandName="get" />
    </CommandsProvider>
  );
};

export const WithDefaultSubCommandAndHiddenSubCommandMenu = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="envs" subCommandName="get" hideSubCmdMenu />
    </CommandsProvider>
  );
};

export const WithSubCommandAnValues = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="envs" subCommandName="get" commandExample={envGetCommandValues} />
    </CommandsProvider>
  );
};

export const WithHiddenLegacyOptionsOrArgs = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="export" />
    </CommandsProvider>
  );
};

export const CommandNotFound = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="imaginary-command" />
    </CommandsProvider>
  );
};

export const WrappedWithText = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <p>{forkPreText}</p>
      <CommandsExplorer commandName="fork" />
      <p>{forkPostText}</p>
    </CommandsProvider>
  );
};

export const WithIdenticalCommandsInTheSamePage = () => {
  return (
    <CommandsProvider rawCommands={commands}>
      <CommandsExplorer commandName="fork" commandExample={forkCommandValues} />
      <CommandsExplorer commandName="fork" />
    </CommandsProvider>
  );
};

export const CommandExampleWithNoOptions = () => {
  const example = { 'component-id': 'teambit.react/react' };

  return (
    <CommandsProvider rawCommands={commands}>
      <Space />
      <CommandsExplorer commandName="use" commandExample={example} />
    </CommandsProvider>
  );
};
