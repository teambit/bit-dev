import React, { useState, HtmlHTMLAttributes } from 'react';
import { useCommand, CommandState } from '@teambit/community.ui.bit-cli.commands-provider';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import cx from 'classnames';
import { ConstElements } from './constant-elements';
import { Args } from './args';
import { Options } from './options';
import { SubCommandsMenu } from './sub-commands-menu';
import { Commands } from './commands';
import { assignExampleValues, CommandExample } from './example-handler';
// @ts-ignore
import style from './style.module.scss';

export type CommandsExplorerProps = {
  commandName: string;
  subCommandName?: string;
  commandExample?: CommandExample;
  commandMutator?: CommandState;
  logCommand?: boolean;
  hideSubCmdMenu?: boolean;
  className?: string;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function CommandsExplorer({
  commandName,
  commandExample,
  subCommandName,
  hideSubCmdMenu = !!commandExample,
  className,
  ...rest
}: CommandsExplorerProps) {
  const command = useCommand(commandName);

  if (!command) return <div className={style.error}>{`Could not find command '${commandName}'.`}</div>;

  const subCommandNames = command.subCommandNames ?? [];

  const selectCommand = (subCommandName?: string) =>
    command.subCommands && subCommandName ? command.subCommands[subCommandNames.indexOf(subCommandName)] : command;

  const [currentCommand, setCommand] = useState(
    commandExample ? assignExampleValues(selectCommand(subCommandName), commandExample) : selectCommand(subCommandName)
  );

  const handleSubCmdClick = (subCommandName) => {
    setCommand(selectCommand(subCommandName));
  };

  return (
    <div className={cx(style.command, className)} {...rest} data-testid="commands-explorer">
      {!hideSubCmdMenu && subCommandNames.length > 0 && (
        <SubCommandsMenu
          selectedSubCommandName={currentCommand.name}
          handleSubCmdClick={handleSubCmdClick}
          subCommandNames={subCommandNames}
          command={command}
        />
      )}
      <Terminal>
        <ConstElements />
        <Commands command={command} currentCommand={currentCommand} />
        {currentCommand?.args && <Args args={currentCommand.args} />}
        {currentCommand?.options && <Options options={currentCommand.options} />}
      </Terminal>
    </div>
  );
}
