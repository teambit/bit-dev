import React from 'react';
import { render } from '@testing-library/react';
import { removeHtmlTags } from '@teambit/community.ui.bit-cli.commands-explorer';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import commands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';
import {
  SnapExample,
  CreateLaneExample,
  TagExample,
  ResetExample,
  CheckoutExample,
  LogExample,
  DiffExample,
} from './commands';

const TEST_ID = 'terminal-text-field';
// const containsValue = (value, rendered) => rendered.includes(value);

it('renders snap command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <SnapExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit snap apps/to-do').toBeTruthy();
});

it('renders create lane command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <CreateLaneExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit lane create new-feature').toBeTruthy();
});

it('renders tag command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <TagExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit tag apps/to-do').toBeTruthy();
});

it('renders reset command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <ResetExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit reset apps/to-do').toBeTruthy();
});

it('renders checkout command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <CheckoutExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit checkout --reset').toBeTruthy();
});

it('renders log command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <LogExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit log apps/to-do').toBeTruthy();
});

it('renders diff command example', () => {
  const { getByTestId } = render(
    <CommandsProvider rawCommands={commands}>
      <DiffExample />
    </CommandsProvider>
  );
  const rendered = getByTestId(TEST_ID);
  expect(removeHtmlTags(rendered.innerHTML) === 'bit diff apps/to-do').toBeTruthy();
});
