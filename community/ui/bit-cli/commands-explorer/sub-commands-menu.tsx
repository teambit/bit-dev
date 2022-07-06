import React, { Fragment } from 'react';
import cx from 'classnames';
import type { Command } from '@teambit/community.ui.bit-cli.commands-provider';
import { Tooltip } from './tooltip';
// @ts-ignore
import style from './style.module.scss';

type SubCommandNamesProps = {
  handleSubCmdClick: (subCommandName?: any) => void;
  command: Command;
  subCommandNames: string[];
  selectedSubCommandName?: string | null;
};

export const SubCommandsMenu = ({
  subCommandNames,
  command,
  handleSubCmdClick,
  selectedSubCommandName = null,
}: SubCommandNamesProps) => {
  return (
    <div className={style.subCommandsMenu} data-testid="sub-commands-menu">
      <Tooltip
        content={`Main command.\n ${command.description}`}
        placement="top"
      >
        <span
          onClick={() => handleSubCmdClick(null)}
          className={cx(
            style.subCommandTab,
            selectedSubCommandName === null ? style.subCommandTabSelected : ''
          )}
        >
          ..
        </span>
      </Tooltip>
      {subCommandNames.map((name, index) => (
        <Fragment key={`sub-cmd-tab-${index}`}>
          <Tooltip
            content={command.subCommands![index].description}
            placement="top"
          >
            <span
              onClick={() => handleSubCmdClick(name)}
              className={cx(
                style.subCommandTab,
                name === selectedSubCommandName
                  ? style.subCommandTabSelected
                  : ''
              )}
              key={`sub-cmd-${index}`}
            >
              {name}
            </span>
          </Tooltip>
        </Fragment>
      ))}
    </div>
  );
};
