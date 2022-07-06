import React, { Fragment } from 'react';
import type { Arg } from '@teambit/community.ui.bit-cli.commands-provider';
import cx from 'classnames';
import { toArg } from './transform-cmd-elements';
import { Tooltip } from './tooltip';
// @ts-ignore
import style from './style.module.scss';

type ArgsProps = {
  args: Arg[];
};

export const Args = ({ args }: ArgsProps) => {
  return (
    <>
      {args.map(
        ({ value, name, optional, visible, description }, index) =>
          visible && (
            <Fragment key={`arg-${index}`}>
              <Tooltip content={description} placement="bottom">
                <span
                  className={cx(
                    style.element,
                    style.arg,
                    style.hoverable,
                    optional && !value ? style.optional : ''
                  )}
                >
                  {toArg(value, name)}
                </span>
              </Tooltip>
            </Fragment>
          )
      )}
    </>
  );
};
