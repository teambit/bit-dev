import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
  WithOptions,
  WithOptionsAndValues,
  WithSubCommands,
  WithDefaultSubCommand,
  WithDefaultSubCommandAndHiddenSubCommandMenu,
  WithIdenticalCommandsInTheSamePage,
  CommandExampleWithNoOptions,
} from './commands-explorer.composition';
import { removeHtmlTags } from './remove-html-tags';

const commandWithOptions = `bit fork SOURCE_COMPONENT_ID TARGET_COMPONENT_NAME --scope STRING --path STRING --refactor`;
const commandWithOptionsandValues = `bit fork teambit.base-react/buttons/button input/button --scope my-org.my-scope --refactor`;
const primaryCommandWithSubCommands = `bit envs`;
const selectedSubCommand = `bit envs get COMPONENT_NAME`;
const subcCommandMenuItems = `.. list get set unset replace`;
const argDescription = `the component id of the source component`;
const commandExampleWithNoOptions = `bit use teambit.react/react`;

it('properly displays a command with options', () => {
  const { getByTestId } = render(<WithOptions />);
  const terminal = getByTestId('terminal-text-field');
  expect(removeHtmlTags(terminal.innerHTML) === commandWithOptions).toBeTruthy();
});

it('properly displays a command with options and values', () => {
  const { getByTestId } = render(<WithOptionsAndValues />);
  const terminal = getByTestId('terminal-text-field');
  expect(removeHtmlTags(terminal.innerHTML) === commandWithOptionsandValues).toBeTruthy();
});

it('properly displays a command with sub-commands', () => {
  const { getByTestId } = render(<WithSubCommands />);
  const terminal = getByTestId('terminal-text-field');
  expect(removeHtmlTags(terminal.innerHTML) === primaryCommandWithSubCommands).toBeTruthy();
});

it('lists all sub-commands in the sub-commands menu', () => {
  const { getByTestId } = render(<WithSubCommands />);
  const menu = getByTestId('sub-commands-menu');
  expect(removeHtmlTags(menu.innerHTML) === subcCommandMenuItems).toBeTruthy();
});

it('displays a selected sub-command', () => {
  const { getByTestId } = render(<WithDefaultSubCommand />);
  const terminal = getByTestId('terminal-text-field');
  expect(removeHtmlTags(terminal.innerHTML) === selectedSubCommand).toBeTruthy();
});

it('displays a selected sub-command with hidden sub-commands menu', () => {
  const { getByTestId } = render(<WithDefaultSubCommandAndHiddenSubCommandMenu />);
  const commandsExplorer = getByTestId('commands-explorer');
  const terminal = getByTestId('terminal-text-field');
  const menu = commandsExplorer.getElementsByClassName('subCommandsBar');
  expect(menu.length).toEqual(0);
  expect(removeHtmlTags(terminal.innerHTML) === selectedSubCommand).toBeTruthy();
});

it('displays argument description in tooltip', async () => {
  const { getByText, findByText } = render(<WithOptions />);
  const argument = getByText('SOURCE_COMPONENT_ID');
  act(() => {
    fireEvent.mouseEnter(argument);
  });
  const tooltip = await findByText(argDescription);
  expect(tooltip).toBeDefined();
});

it('displays identical commands with different values', () => {
  const { getAllByTestId } = render(<WithIdenticalCommandsInTheSamePage />);
  const commands = getAllByTestId('terminal-text-field');
  const commandsHaveFirstValues = removeHtmlTags(commands[0].innerHTML) === commandWithOptionsandValues;
  const commandsHaveSecondValues = removeHtmlTags(commands[1].innerHTML) === commandWithOptions;
  expect(commandsHaveFirstValues && commandsHaveSecondValues).toBeTruthy();
});

it('displays command with arg value and no options', () => {
  const { getByTestId } = render(<CommandExampleWithNoOptions />);
  const terminal = getByTestId('terminal-text-field');
  expect(removeHtmlTags(terminal.innerHTML) === commandExampleWithNoOptions).toBeTruthy();
});
