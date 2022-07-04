import React from 'react';
import type { Option } from '@teambit/community.ui.bit-cli.commands-provider';
import cx from 'classnames';
import { Tooltip } from './tooltip';
import { toOption, toArg } from './transform-cmd-elements';
// @ts-ignore
import style from './style.module.scss';

type OptionsProps = {
  options: Option[];
};

export const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options.map(({ name, optional, visible, args, description }, index) => {
        if (!visible) return;
        const hasArgs = Array.isArray(args) && args.length > 0;
        const hasArgsValue = hasArgs && !!args[0].value;
        return (
          <Tooltip
            content={description}
            placement="bottom"
            key={`opt-${index}`}
          >
            <span
              className={cx(
                style.element,
                style.hoverable,
                optional && !hasArgsValue ? style.optional : ''
              )}
            >
              <span>{toOption(name)}</span>
              {hasArgs && args[0].visible && (
                <span className={cx(style.element, style.arg)}>
                  {toArg(args[0].value, args[0].name)}
                </span>
              )}
            </span>
          </Tooltip>
        );
      })}
    </>
  );
};
