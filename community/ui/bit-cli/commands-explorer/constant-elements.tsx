import React from 'react';
import cx from 'classnames';
// @ts-ignore
import style from './style.module.scss';

export const ConstElements = () => (
  <>
    <span className={cx(style.element, style.bit)}>bit</span>
  </>
);
