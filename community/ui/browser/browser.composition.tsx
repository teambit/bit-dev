import React from 'react';
import { Browser } from './browser';
import scopeUi from './scope-ui.png';

export const BasicBrowser = () => {
  return (
    <Browser>
      <img src={scopeUi} height={500} alt="" />
    </Browser>
  );
};
