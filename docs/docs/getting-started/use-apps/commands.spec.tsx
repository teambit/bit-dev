import React from 'react';
import { render } from '@testing-library/react';
import { removeHtmlTags } from '@teambit/community.ui.bit-cli.commands-explorer';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import { ImportReactApp, UseReactApp, RunReactApp } from './commands';

const TESTID = 'terminal-text-field';
// const containsValue = (value, rendered) => rendered.includes(value);

it('renders import react app command', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <ImportReactApp />
    </CommandsProvider>
  );
  const rendered = getByTestId(TESTID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit import learnbit.apps/react/basic-app').toBeTruthy();
});

it('renders use react app command', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <UseReactApp />
    </CommandsProvider>
  );
  const rendered = getByTestId(TESTID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit use learnbit.apps/react/basic-app').toBeTruthy();
});

it('renders run react app command', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <RunReactApp />
    </CommandsProvider>
  );
  const rendered = getByTestId(TESTID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit run basic-app').toBeTruthy();
});
