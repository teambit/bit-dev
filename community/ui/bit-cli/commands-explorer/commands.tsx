import React from 'react';
import cx from 'classnames';
import type { Command } from '@teambit/community.ui.bit-cli.commands-provider';
import { Tooltip } from './tooltip';
// @ts-ignore
import style from './style.module.scss';

type CommandsProps = {
  command: Command;
  currentCommand: Command;
};

export const Commands = ({ command, currentCommand }: CommandsProps) => (
  <>
    <Tooltip content={command.description} placement="bottom">
      <span className={cx(style.element, style.hoverable)}>{command.name}</span>
    </Tooltip>
    {command.name != currentCommand.name && (
      <Tooltip content={currentCommand.description} placement="bottom">
        <span className={cx(style.element, style.hoverable)}>
          {currentCommand.name}
        </span>
      </Tooltip>
    )}
  </>
);
