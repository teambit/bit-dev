import React from 'react';
import { Tooltip as GenericTooltip } from '@teambit/design.ui.tooltip';
// @ts-ignore
import style from './style.module.scss';

export const Tooltip = ({ content = 'content', children, placement }) => {
  const offsetY = placement === 'bottom' ? 15 : 28;
  return (
    <GenericTooltip
      breakline={true}
      content={content}
      className={style.tooltip}
      placement={placement}
      offset={[0, offsetY]}
    >
      {children}
    </GenericTooltip>
  );
};
